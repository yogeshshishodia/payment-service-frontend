import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module'; // Add this if it's not already there
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';  // Import MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Import MatPaginatorModule (optional)
import { MatSortModule } from '@angular/material/sort'; // Import MatSortModule (optional)
// import { MatInputModule } from '@angular/material/input'; // Import MatInputModule for inputs
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, TransferComponent, HistoryComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,    // Add AppRoutingModule to imports
    RouterModule ,
    FormsModule,
    MatTableModule,  // Add MatTableModule here
    MatPaginatorModule, // Add MatPaginatorModule here if you're using pagination
    MatSortModule, // Add MatSortModule if you're using sorting
    MatInputModule, // Add MatInputModule for form inputs
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
