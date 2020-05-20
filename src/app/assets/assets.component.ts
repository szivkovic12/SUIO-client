import { Component, OnInit } from '@angular/core';
import { AssetService} from './asset.service';
import { Asset} from './asset.model';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: Asset[];
  constructor(private assetService: AssetService) { }
  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(): void {
    this.assetService.getAssets().subscribe(assets => this.assets = assets);
  }

}
