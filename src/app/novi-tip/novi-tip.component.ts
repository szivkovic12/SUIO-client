import { Component, OnInit, Input } from '@angular/core';
import { Type } from 'src/app/type.model';
import { Router } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-novi-tip',
  templateUrl: './novi-tip.component.html',
  styleUrls: ['./novi-tip.component.css']
})
export class NoviTipComponent implements OnInit {

  @Input() type: Type;
  toAstrService: any;

  constructor(
    private typeService: TypeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.type = new Type();
  }

  createNewType():void {
    this.typeService.addType(this.type).subscribe(
      (type: Type) => {
        this.type = type;
        new Promise(resolve => setTimeout(resolve,2000)).then(()=>this.router.navigate(['home/type']));
        this.toAstrService.success('Uspješno ste spremili podatke zaposlenika!');
      },
      () => {
        this.toAstrService.error('Došlo je do pogreške prilikom spremanja podataka zaposlenika!');
      
      }
    );
  }

}
