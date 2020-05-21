import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../asset.model';
import { AssetService} from '../asset.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent implements OnInit {

  @Input() asset: Asset;
  constructor(private assetService: AssetService, private router: Router) { }
  ngOnInit(): void {
    this.asset = new Asset();
  }
  save(): void {
    this.assetService.addAsset(this.asset).subscribe(
      (asset: Asset) => {
        this.asset = asset;
        new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.router.navigate(['assets']));
      }
    );
  }
}
