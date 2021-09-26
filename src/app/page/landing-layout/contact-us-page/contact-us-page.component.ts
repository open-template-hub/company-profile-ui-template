import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoMetaData } from 'src/app/model/seo/seo.model';
import { MailService } from 'src/app/service/mail/mail.service';
import { SeoService } from 'src/app/service/seo/seo.service';
import { environmentCommon } from 'src/environments/environment-common';
import { URLS } from '../../../data/constant';
import {
  CONTACT_US_FEATURES,
  SIZE_OPTIONS,
} from '../../../data/contact-us/contactUsData';
import { COUNTRIES } from '../../../data/countries';
import { LoadingService } from '../../../service/loading/loading.service';
import { ToastService } from '../../../service/toast/toast.service';

export interface ContactUsFeatures {
  title: string;
  features: string[];
}

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss'],
})
export class ContactUsPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  URLS = URLS;
  environmentCommon = environmentCommon;
  emailSent = false;

  features = CONTACT_US_FEATURES;
  countries = COUNTRIES;
  sizeOptions = SIZE_OPTIONS;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private mailService: MailService,
    private seoService: SeoService
  ) {
    this.loadingService.sharedLoading.subscribe(
      (loading) => (this.loading = loading)
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      workEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      workPhone: [''],
      companyWebsite: ['', Validators.maxLength(50)],
      companySize: ['', Validators.required],
      country: ['', Validators.required],
      anythingElse: ['', Validators.maxLength(500)],
    });

    const seoMetaData = {
      title: 'Contact Us',
      description: 'Open Template Hub - Contact Us',
      keywords: ['contact us', 'open template hub'],
      robots: ['contact us', 'open template hub'],
    } as SeoMetaData;
    this.seoService.setMetaData(seoMetaData);
  }

  onSubmit() {
    if (this.loading) {
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

    if (this.form.invalid) {
      for (const control in this.form.controls) {
        if (this.form.controls[control].invalid) {
          this.toastService.error(errorMessages[control], '');
        }
      }
    }

    if (this.form.valid) {
      this.mailService
        .sendContactUsMail({
          firstName: this.form.controls.firstName.value,
          lastName: this.form.controls.secondName.value,
          email: this.form.controls.workEmail.value,
          phone: this.form.controls.workPhone.value,
          website: this.form.controls.companyWebsite.value,
          companySize: this.form.controls.companySize.value,
          country: this.form.controls.country.value,
          message: this.form.controls.anythingElse.value,
        })
        .subscribe((data) => {
          this.emailSent = data.success;
        });
    }
  }

  changeCountry(event: any) {
    this.form.controls.country.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  changeCompanySize(event: any) {
    this.form.controls.companySize.setValue(event.target.value, {
      onlySelf: true,
    });
  }
}
