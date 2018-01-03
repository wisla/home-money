import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'wisla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = {value: 'world'};

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fr", "pl"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }
}
