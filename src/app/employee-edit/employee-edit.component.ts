import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  @Input() employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }
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
  update(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(
      (employee: Employee) => {
        this.employee = employee;
        new Promise(resolve => setTimeout(resolve, 200)).then(() => this.router.navigate(['home/employee']));
      }
    );
  }
}
