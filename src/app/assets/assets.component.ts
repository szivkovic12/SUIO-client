import { Component, OnInit } from '@angular/core';
import { AssetService} from './asset.service';
import { Asset} from './asset.model';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: Asset[];
  constructor(private assetService: AssetService, private router: Router) { }
  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(): void {
    this.assetService.getAssets().subscribe(assets => this.assets = assets);
  }
  deleteAsset(asset: Asset){
    this.assets= this.assets.filter(e => e !== asset);
    this.assetService.deleteAsset(asset).subscribe();

  }
  updateAsset(asset: Asset){
    this.assets= this.assets.filter(e => e !== asset);
    this.router.navigate(['home/assets/edit', asset.id])
  }
  navigateToDetail(asset: Asset){
    this.assets= this.assets.filter(e => e !== asset);
    this.router.navigate(['home/assets/details/', asset.id])
  }
  navigateToCreate(): void {
    this.router.navigate(['home/assets/create'])
  }
}
