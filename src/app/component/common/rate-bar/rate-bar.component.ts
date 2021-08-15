import { Component, Input } from '@angular/core';

export type Rate = {
  userRating: number,
  numberOfRates: number
}

@Component({
  selector: 'app-rate-bar',
  templateUrl: './rate-bar.component.html',
  styleUrls: ['./rate-bar.component.scss']
})

export class RateBarComponent {
  private _rate: Rate;
  formattedRateNumber: string;
  value: number

  @Input() set rate(rate: Rate) {
    if ( rate ) {
      this._rate = rate;
      this.value = Math.round(rate.userRating / rate.numberOfRates * 2) / 2
      this.formattedRateNumber = this.formatNumberOfRates( rate.numberOfRates )
    }
  }

  get rate(): Rate {
    return this._rate;
  }

  formatNumberOfRates( rateNumber: number ): string {
    let fractionDigits = 1
    if( rateNumber > 999 && rateNumber < 1000000 ){
      if ( rateNumber % 1000 < 100 ) {
        fractionDigits = 0
      }
      return ( rateNumber / 1000 ).toFixed( fractionDigits ) + 'K';
    } else if( rateNumber > 999999 ) {
      if ( rateNumber % 1000000 < 100000 ) {
        fractionDigits = 0
      }
      return ( rateNumber / 1000000 ).toFixed( fractionDigits ) + 'M';
    } else if( rateNumber < 1000 ) {
      return rateNumber.toString(); // if value < 1000, nothing to do
    }
  }
}
