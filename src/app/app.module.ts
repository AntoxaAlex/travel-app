import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './shared/share.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ExpandedContentComponent } from './core/components/header/expanded-content/expanded-content.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesNavComponent } from './services-nav/services-nav.component';
import { ServiceComponent } from './service/service.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpandedContentComponent,
    ServicesListComponent,
    ServicesNavComponent,
    ServiceComponent,
    LinksComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ShareModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
