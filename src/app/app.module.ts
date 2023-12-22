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
import { JoinComponent } from './join/join.component';
import { PololocoComponent } from './pololoco/pololoco.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { RingoffireComponent } from './ringoffire/ringoffire.component';
import { ContactComponent } from './contact/contact.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IAMComponent,
    SocialComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioTitleComponent,
    JoinComponent,
    PololocoComponent,
    PokedexComponent,
    RingoffireComponent,
    ContactComponent,
    ContactHeaderComponent,
    FooterComponent,
    ImpressumComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
