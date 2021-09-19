import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environmentCommon } from 'src/environments/environment-common';
import { Employee } from '../../../model/employee/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  environment = environment;
  environmentCommon = environmentCommon;

  @Input() employee: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
