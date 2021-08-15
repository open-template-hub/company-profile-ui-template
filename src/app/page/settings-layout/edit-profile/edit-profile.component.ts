import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Get as simpleIcons } from 'simple-icons';
import { AuthToken } from '../../../model/AuthToken';
import { AuthenticationService } from '../../../service/auth/authentication.service';
import { BasicInfoService } from '../../../service/basic-info/basic-info.service';
import { CategoryService } from '../../../service/category/category.service';
import { FileStorageService } from '../../../service/file-storage/file-storage.service';
import { InformationService } from '../../../service/information/information.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';
import { PROFILE_IMG, URLS } from '../../../util/constant';

@Component( {
  selector: 'app-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: [ './edit-profile.component.scss' ]
} )
export class EditProfileComponent implements OnInit, OnDestroy {

  currentUser: AuthToken;
  userInfoForm: FormGroup;
  submitted = false;
  loading = false;
  userInfo: any = {};
  profileImg = PROFILE_IMG;
  candidateProfileImg = undefined;

  imageChangedEvent: any = '';

  URLS = URLS;
  icon: any = undefined;

  categorySearchResults = [];
  searchEnabled = true;
  interests = [];

  @ViewChild( 'searchArea' ) searchArea: ElementRef;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      public basicInfoService: BasicInfoService,
      private fileStorageService: FileStorageService,
      private loadingService: LoadingService,
      private informationService: InformationService,
      private toastService: ToastService,
      private categoryService: CategoryService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
    this.authenticationService.currentUser.subscribe( currentUser => this.currentUser = currentUser );

    this.basicInfoService.userInfo.subscribe( userInfo => {
          this.userInfo = userInfo;
        }
    );

    this.fileStorageService.sharedProfileImage.subscribe( profileImg => {
          if ( profileImg?.file?.data ) {
            this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
          }
        }
    );
    this.icon = simpleIcons( 'buymeacoffee' );
  }

  get f() {
    return this.userInfoForm.controls;
  }

  @HostListener( 'document:click', [ '$event' ] )
  onDocumentClick( event ) {
    if ( this.searchArea.nativeElement.contains( event.target ) ) {
      this.searchEnabled = true;
    } else {
      this.searchEnabled = false;
    }
  }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group( {
      firstName: [ this.basicInfoService.userInfoValue?.payload?.firstName, Validators.required ],
      lastName: [ this.basicInfoService.userInfoValue?.payload?.lastName, Validators.required ],
      bio: [ this.basicInfoService.userInfoValue?.payload?.bio, Validators.maxLength( 500 ) ],
      location: [ this.basicInfoService.userInfoValue?.payload?.location ],
      phone: [ this.basicInfoService.userInfoValue?.payload?.phone, Validators.pattern( '[+]?[0-9]+' ) ],
      website: [ this.basicInfoService.userInfoValue?.payload?.website ],
      twitter: [ this.basicInfoService.userInfoValue?.payload?.social?.twitter, Validators.pattern( '^[^/]+$' ) ],
      facebook: [ this.basicInfoService.userInfoValue?.payload?.social?.facebook, Validators.pattern( '^[^/]+$' ) ],
      youtube: [ this.basicInfoService.userInfoValue?.payload?.social?.youtube, Validators.pattern( '^[^/]+$' ) ],
    } );

    this.categoryService.getCategoriesFromId( this.basicInfoService.userInfoValue?.payload?.interests ).subscribe( result => {
      this.interests = result;
    } );

  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    // stop here if form is invalid
    if ( this.userInfoForm.invalid ) {
      if ( this.f.twitter.invalid || this.f.facebook.invalid || this.f.youtube.invalid ) {
        this.toastService.error( 'Please provide a valid username.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      if ( this.f.phone.invalid ) {
        this.toastService.error( 'Please provide a valid phone number.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      if ( this.f.lastName.invalid ) {
        this.toastService.error( 'Please provide a last name.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      if ( this.f.firstName.invalid ) {
        this.toastService.error( 'Please provide a first name.', '', {
          positionClass: this.route.parent.snapshot.data.layout
        } );
      }
      return;
    }

    if ( this.candidateProfileImg ) {
      this.fileStorageService.createFile( this.candidateProfileImg, this.userInfo.username + '/profile_img', 'profile image', 'image/png' )
      .subscribe( response => {
            this.fileStorageService.setProfileImageFileData( this.candidateProfileImg );
            this.updateMyInfo( response.id );
          }
      );
    } else {
      this.updateMyInfo( this.basicInfoService.userInfoValue?.payload?.profileImageId );
    }
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  fileChangeEvent( event: any ): void {
    this.imageChangedEvent = event;
  }

  imageCropped( event: ImageCroppedEvent ) {
    this.candidateProfileImg = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  fixUrl( url: string, input: any ): any {
    if ( !input ) {
      return input;
    }
    if ( input.startsWith( 'www' ) ) {
      input = url.slice( 0, 8 ) + input;
    } else if ( !input.includes( url ) ) {
      input = url + input;
    }
    return input;
  }

  search( event: any ) {
    const q = event.target.value;

    if ( !q || q.length < 3 ) {
      this.categorySearchResults = [];
      return;
    }

    this.categoryService.search( q ).subscribe( results => {
      this.categorySearchResults = results.slice( 0, 10 );
    } );
  }

  removeFromInterestList( item ) {
    const index = this.interests.indexOf( item );
    if ( index > -1 ) {
      this.interests.splice( index, 1 );
    }
  }

  addToInterestsList( item ) {
    const name = ( item.category ? item.category.name : '' ) + ( item.subCategory ? ' - ' + item.subCategory.name : '' ) + ( item.leafCategory ? ' - ' + item.leafCategory.name : '' );

    for ( const interest of this.interests ) {
      if ( name === ( interest.category ? interest.category.name : '' ) + ( interest.subCategory ? ' - ' + interest.subCategory.name : '' ) + ( interest.leafCategory ? ' - ' + interest.leafCategory.name : '' ) )
        return;
    }

    this.interests.push( item );
  }

  private updateMyInfo( profileImageId ) {
    let interestIdList = [];
    this.categoryService.getCategoryIdFromCategories( this.interests )
    .subscribe( ( interests ) => {
      interestIdList = interests;

      const payload = {
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        bio: this.f.bio.value,
        location: this.f.location.value,
        phone: this.f.phone.value,
        website: this.f.website.value,
        social: {
          twitter: this.f.twitter.value,
          facebook: this.f.facebook.value,
          youtube: this.f.youtube.value
        },
        interests: interestIdList,
        profileImageId
      };

      this.basicInfoService.updateMyInfo( payload )
      .subscribe( () => {
            this.basicInfoService.me().subscribe( result => {
              this.router.navigate( [ URLS.dashboard.root ] );
            });
          }
      );
    } );
  }
}
