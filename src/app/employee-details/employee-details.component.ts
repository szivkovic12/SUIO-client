import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { switchMap } from 'rxjs/operators';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  @Input() employee: Employee;
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.employeeService.getEmployee(id);
      }
      )
    ).subscribe((employee: Employee) => {
      this.employee = employee;
    });
  }
  backClicked() {
    this.location.back();
  }
}
