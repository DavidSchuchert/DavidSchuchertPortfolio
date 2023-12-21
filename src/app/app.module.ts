import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IAMComponent } from './iam/iam.component';
import { SocialComponent } from './social/social.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioTitleComponent } from './portfolio-title/portfolio-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IAMComponent,
    SocialComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
