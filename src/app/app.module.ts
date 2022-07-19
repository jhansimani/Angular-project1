import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './services/user/user.service';
import { NoopInterceptor } from './interceptors/noop.interceptor';
import { CardComponent } from './components/card/card.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PanelComponent } from './components/accordion/panel/panel.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { ComponentsComponent } from './components/components.component';
import { LeftNavBarComponent } from './components/left-nav/left-nav-bar/left-nav-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { OutSideClickDirective } from './directives/outside-click/out-side-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CardComponent,
    BadgeComponent,
    AccordionComponent,
    PanelComponent,
    HighlightDirective,
    TooltipDirective,
    ComponentsComponent,
    LeftNavBarComponent,
    ModalComponent,
    OutSideClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
