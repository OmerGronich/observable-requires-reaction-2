import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }      from './app.component';
import { MobxAngularModule } from "mobx-angular";

@NgModule({
			  declarations: [
				  AppComponent
			  ],
			  imports     : [
				  BrowserModule,
				  MobxAngularModule
			  ],
			  providers   : [],
			  bootstrap   : [AppComponent]
		  })
export class AppModule {
}
