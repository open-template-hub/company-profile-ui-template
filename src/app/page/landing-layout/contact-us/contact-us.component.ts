import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../data/constant';
import { CONTACT_US_FEATURES, SIZE_OPTIONS } from '../../../data/contact-us/contactUsData';
import { COUNTRIES } from '../../../data/countries';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';

export interface ContactUsFeatures {
  title: string,
  features: string[]
}

@Component( {
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [ './contact-us.component.scss' ]
} )
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  URLS = URLS;
  environmentCommon = environmentCommon;

  features = CONTACT_US_FEATURES;
  countries = COUNTRIES;
  sizeOptions = SIZE_OPTIONS;

  loading = false;

  constructor(
      private formBuilder: FormBuilder,
      private loadingService: LoadingService,
      private toastService: ToastService
  ) {
    this.loadingService.sharedLoading.subscribe( loading => this.loading = loading );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      firstName: [ '', Validators.required ],
      secondName: [ '', Validators.required ],
      workEmail: [ '', Validators.compose( [ Validators.required, Validators.email ] ) ],
      workPhone: [ '' ],
      companyWebsite: [ '', Validators.maxLength( 50 ) ],
      companySize: [ '', Validators.required ],
      country: [ '', Validators.required ],
      anythingElse: [ '', Validators.maxLength( 500 ) ]
    } );
  }

  onSubmit() {
    if ( this.loading ) {
      return;
    }

    this.submitted = true;

    const errorMessages = {
      firstName: 'Please provide a first name',
      secondName: 'Please provide a second name',
      workEmail: 'Please provide a valid email',
      companySize: 'Please provide a company size',
      country: 'Please provide a country',
    };

    if ( this.form.invalid ) {
      for ( const control in this.form.controls ) {
        if ( this.form.controls[ control ].invalid ) {
          console.log( this.form.controls[ control ] );
          this.toastService.error( errorMessages[ control ], '' );
        }
      }
    }
  }

  changeCountry( event: any ) {
    this.form.controls.country.setValue( event.target.value, {
      onlySelf: true
    } );
  }

  changeCompanySize( event: any ) {
    this.form.controls.companySize.setValue( event.target.value, {
      onlySelf: true
    } );
  }
}
