import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { SectionMeComponent } from './section-me/section-me.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalProjectComponent } from './modal/modal-project.component';
import { FileService } from './services/file.service';
import { SafePipe } from './pipe/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    SectionMeComponent,
    SectionPortfolioComponent,
    SectionAboutComponent,
    SectionContactComponent,
    ModalProjectComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    YouTubePlayerModule
  ],
  providers: [
    ProjectService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
