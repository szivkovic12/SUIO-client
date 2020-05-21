import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AssetService} from '../asset.service';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '../asset.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  constructor(private assetService: AssetService, private route: ActivatedRoute, private router: Router, private location: Location) { }
  @Input() asset: Asset;
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.assetService.getAsset(id);
      }
      )
    ).subscribe((student: Asset) => {
      this.asset = student;
    });
  }
  backClicked() {
    this.location.back();
  }
}
