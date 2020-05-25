import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'SUIO-client';
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  navigateToAdd(): void {
    this.router.navigate(['employee/add'])
  }

  navigateToCreate(): void {
    this.router.navigate(['/assets/create'])
  }

}

