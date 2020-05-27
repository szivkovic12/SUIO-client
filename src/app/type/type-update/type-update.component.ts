import { Component, OnInit, Input } from '@angular/core';
import { Type } from 'src/app/type.model';
import { TypeService } from 'src/app/type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-type-update',
  templateUrl: './type-update.component.html',
  styleUrls: ['./type-update.component.css']
})
export class TypeUpdateComponent implements OnInit {

  @Input() type: Type;

  constructor(
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.typeService.getTypeById(parseFloat(id));
      })
    ).subscribe((type: Type)=> {
      this.type = type;
    });
  }


  update(): void {
    this.typeService.updateType(this.type).subscribe(
      (type: Type) => {
        this.type = type;
        new Promise(resolve => setTimeout(resolve, 200)).then(() => this.router.navigate(['home/type']));
      }
    );
  }
}
