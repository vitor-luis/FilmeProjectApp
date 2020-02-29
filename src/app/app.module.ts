import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import { FilmeComponent } from './filme/filme.component';

import { FilmeService } from './filme/filme.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateFilmeComponent } from './filme/create-filme/create-filme.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    CreateFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }