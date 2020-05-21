import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  toastrService: any;
 

  constructor(private employeeService: EmployeeService, private router:Router) { }
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  deleteEmployee(employee:Employee){
    this.employees= this.employees.filter(e => e !== employee);
    this.employeeService.deleteEmployee(employee).subscribe(
      () => this.toastrService.success('Uspješno ste obrisali zaposlenika!')
    );
    
    }

    updateEmployee(employee: Employee){
      this.employees= this.employees.filter(e => e !== employee);
      this.router.navigate(['/employee/edit', employee.id])
    }

    navigateToDetail(employee: Employee){
      this.employees= this.employees.filter(e => e !== employee);
      this.router.navigate(['/employee/details/', employee.id])
    }


}
