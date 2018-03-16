import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatCardModule, MatChipsModule, MatListModule, MatExpansionModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { BusSearchComponent } from './bus-search/bus-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BusDataService } from './bus-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    BusSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [
    BusDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
