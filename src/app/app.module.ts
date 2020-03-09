import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountAttributeComponent } from './account-attribute/account-attribute.component';
import { CalloutBlockContainerComponent } from './callout-block-container/callout-block-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountAttributeComponent,
    CalloutBlockContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
