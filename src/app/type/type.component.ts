import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type.service';
import { Type } from '../type.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: Type[];

  constructor(private typeService: TypeService, private router: Router) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(): void{
    this.typeService.getTypes().subscribe(types => this.types = types);
  }
  
  navigateToDetail(type: Type){
    this.types= this.types.filter(e => e !== type);
    this.router.navigate(['/type/', type.id])
  }
 

}
