import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { CountUp } from "countup.js";
import { PARTNERS } from "src/app/data/partner/partner.data";
import { TESTIMONIALS } from "src/app/data/testimonial/testimonial.data";
import { NpmProviderService } from "src/app/service/provider/npm-provider.service";
import { environment } from "../../../../environments/environment";
import { environmentCommon } from "../../../../environments/environment-common";
import { URLS } from "../../../data/constant";
import { Partner } from "../../../model/partner/partner.model";
import { AuthenticationService } from "../../../service/auth/authentication.service";
import { ThemeService } from "../../../service/theme/theme.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss", "../landing-layout.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  downloadCounter = 0;
  serverTypesCounter = 5;
  uiTypesCounter = 3;

  brand = {
    brandLogo: "",
  };

  URLS = URLS;
  PARTNERS: Partner[] = PARTNERS;
  TESTIMONIALS = TESTIMONIALS;

  KILO = 1000;
  MILLION = this.KILO * this.KILO;

  environment = environment;
  environmentCommon = environmentCommon;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authenticationService: AuthenticationService,
    private themeService: ThemeService,
    private npmProviderService: NpmProviderService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([URLS.dashboard.root]);
    }

    this.brand = this.themeService.brand;
  }

  ngAfterViewInit() {
    this.initCountUps();
  }

  private initCountUps() {
    const options = {
      useGrouping: false,
      duration: undefined,
      formattingFn: undefined,
    };

    this.npmProviderService.loadNpmPackagesDownloadCount(this.downloadCounter);

    options.formattingFn = (n: number) => {
      return this.countUpFormatter(n, this.downloadCounter);
    };

    if (this.downloadCounter < this.KILO) {
      options.duration = 2;
    } else if (this.downloadCounter < this.MILLION) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const eventCountUp = new CountUp(
      "npmCounterElement",
      this.downloadCounter,
      options
    );

    options.formattingFn = (n: number) => {
      return this.countUpFormatter(n, this.serverTypesCounter);
    };
    if (this.serverTypesCounter < this.KILO) {
      options.duration = 2;
    } else if (this.serverTypesCounter < this.MILLION) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const studentCountUp = new CountUp(
      "githubStarCounterElement",
      this.serverTypesCounter,
      options
    );

    options.formattingFn = (n: number) => {
      return this.countUpFormatter(n, this.uiTypesCounter);
    };
    if (this.uiTypesCounter < this.KILO) {
      options.duration = 2;
    } else if (this.uiTypesCounter < this.MILLION) {
      options.duration = 3;
    } else {
      options.duration = 4;
    }

    const userCountUp = new CountUp(
      "serverTypesCounterElement",
      this.uiTypesCounter,
      options
    );

    if (!eventCountUp.error) {
      eventCountUp.start();
    } else {
      console.error(eventCountUp.error);
    }
    if (!studentCountUp.error) {
      studentCountUp.start();
    } else {
      console.error(studentCountUp.error);
    }
    if (!userCountUp.error) {
      userCountUp.start();
    } else {
      console.error(userCountUp.error);
    }
  }

  countUpFormatter(n: number, lastNumber: number) {
    if (n < this.KILO) {
      return n + "";
    } else {
      if (n < this.MILLION) {
        return Math.round((n / this.KILO) * 10) / 10 + "k";
      } else {
        return Math.round((n / this.MILLION) * 10) / 10 + "M";
      }
    }
  }
}
