import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../asset.model';
import { AssetService} from '../asset.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {

  @Input() asset: Asset;
  constructor(private assetService: AssetService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.assetService.getAsset(id);
      }
      )
    ).subscribe((asset: Asset) => {
      this.asset = asset;
    });
  }
  update(): void {
    this.assetService.updateAsset(this.asset).subscribe(
      (asset: Asset) => {
        this.asset = asset;
        new Promise(resolve => setTimeout(resolve, 200)).then(() => this.router.navigate(['assets']));
      }
    );
  }
}
