import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  toastrService: any;

  constructor(private employeeService: EmployeeService) { }
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


}
