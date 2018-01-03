import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {LoaderComponent} from "./components/loader/loader.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [LoaderComponent],
  imports: [ReactiveFormsModule, FormsModule, NgxChartsModule, TranslateModule],
  exports: [ReactiveFormsModule, FormsModule, NgxChartsModule, LoaderComponent, TranslateModule]
})
export class SharedModule {

}
