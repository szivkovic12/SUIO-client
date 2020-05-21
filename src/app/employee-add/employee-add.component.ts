import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  @Input() employee:Employee;
  toastrService: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employee=new Employee();
  }

  navigateToCreate():void{
    this.router.navigate(['/employee/add'])
  }

  createNewEmployee():void {
    this.employeeService.addEmployee(this.employee).subscribe(
      (employee: Employee) => {
        this.employee = employee;
        new Promise(resolve => setTimeout(resolve,2000)).then(()=>this.router.navigate(['employee']));
        this.toastrService.success('Uspješno ste spremili podatke zaposlenika!');
      },
      () => {
        this.toastrService.error('Došlo je do pogreške prilikom spremanja podataka zaposlenika!');
      
      }
    );
  }


}
