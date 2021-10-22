import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { Employee } from '../../../model/employee/employee.model';

@Component( {
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: [ './employee-card.component.scss' ],
} )
export class EmployeeCardComponent {
  environment = environment;
  environmentCommon = environmentCommon;
  employeePhotoLoaded = false;

  @Input() employee: Employee = {
    profile: {
      name: '',
      title: '',
      bio: '',
      photoUri: '',
      social: {
        linkedIn: '',
        twitter: '',
        github: '',
        mail: '',
      },
    },
  };

  constructor() {
    // Intentionally blank
  }

  setEmployeePhotoLoaded = () => {
    this.employeePhotoLoaded = true;
  };
}
