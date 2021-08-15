import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
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
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.scss' ]
} )
export class WelcomeComponent implements OnInit, OnDestroy {

  currentUser: AuthToken;
  userInfoForm: FormGroup;
  submitted = false;
  loading = false;
  userInfo: any = {};
  profileImg = PROFILE_IMG;

  imageChangedEvent: any = '';

  URLS = URLS;

  categorySearchResults = [];
  searchEnabled = true;
  interests = [];

  @ViewChild( 'searchArea' ) searchArea: ElementRef;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private basicInfoService: BasicInfoService,
      private loadingService: LoadingService,
      private informationService: InformationService,
      private fileStorageService: FileStorageService,
      private toastService: ToastService,
      private categoryService: CategoryService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
    this.authenticationService.currentUser.subscribe( currentUser => this.currentUser = currentUser );

    this.basicInfoService.userInfo.subscribe( userInfo => {
          this.userInfo = userInfo;
          if ( userInfo?.profileImg ) {
            this.profileImg = userInfo.profileImg;
          }
          this.categoryService.getCategoriesFromId( this.basicInfoService.userInfoValue?.payload?.interests ).subscribe( result => {
            this.interests = result;
          } );
        }
    );

    this.fileStorageService.sharedProfileImage.subscribe( profileImg => {
          if ( profileImg?.file?.data ) {
            this.profileImg = 'data:image/png;base64,' + profileImg.file.data;
          }
        }
    );
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
      userProfileActivated: [ this.basicInfoService.userInfoValue?.payload?.userProfileActivated ]
    } );
  }

  ngOnDestroy() {
    this.informationService.clearInformation();
  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    // stop here if form is invalid
    if ( this.userInfoForm.invalid ) {
      if ( this.f.phone.invalid ) {
        this.toastService.error( 'Please provide a valid phone number.', '', {
          positionClass: this.route.parent.snapshot.data.layout,
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

    let interestIdList = [];
    this.categoryService.getCategoryIdFromCategories( this.interests )
    .subscribe( ( interests ) => {
      interestIdList = interests;
    } );

    let payload = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      bio: this.f.bio.value,
      location: this.f.location.value,
      phone: this.f.phone.value,
      website: this.f.website.value,
      userProfileActivated: this.f.userProfileActivated.value,
      interests: interestIdList
    };

    if ( this.profileImg !== PROFILE_IMG ) {
      this.fileStorageService.createFile( this.profileImg, this.userInfo.username + '/profile_img', 'profile image', 'image/png' )
      .subscribe( response => {
            payload = { ...payload, ...{ profileImageId: response.id } };
            this.basicInfoService.updateMyInfo( payload )
            .subscribe( () => {
              this.router.navigate( [ URLS.dashboard.root ] );
            } );
          }
      );
    } else {
      payload = { ...payload, ...{ profileImageId: null } };
      this.basicInfoService.updateMyInfo( payload )
      .subscribe( () => {
        this.router.navigate( [ URLS.dashboard.root ] );
      } );
    }
  }

  fileChangeEvent( event: any ): void {
    this.imageChangedEvent = event;
  }

  imageCropped( event: ImageCroppedEvent ) {
    this.profileImg = event.base64;
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
}
