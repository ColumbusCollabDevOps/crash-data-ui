import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { CrashDataService } from './crash-data.service';

/* Angular Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

/* Components */
import { AppComponent } from './app.component';
import { CrashQueryComponent } from './crash-query/crash-query.component';

@NgModule({
  declarations: [
    AppComponent,
    CrashQueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [
    CrashDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
