import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WrapPageComponent } from './pages/wrap-page/wrap-page.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ResultComponent } from './core/components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ResultComponent,
    WrapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
