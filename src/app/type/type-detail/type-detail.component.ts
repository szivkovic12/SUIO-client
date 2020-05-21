import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'; 
import { Type } from 'src/app/type.model';
import { TypeService } from 'src/app/type.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css']
})
export class TypeDetailComponent implements OnInit {

  constructor(private typeService: TypeService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  @Input() type: Type;
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(parms => {
        const id = parms.get('id');
        return this.typeService.getTypeById(parseFloat(id));
      })
    ).subscribe((type: Type) => {
      this.type = type;
    })
  }
  backClicked(){
    this.location.back();
  }
}
