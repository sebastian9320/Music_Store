import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  	imports: [
  		
  		MatButtonModule,
  		MatCheckboxModule,
  		MatToolbarModule,
  		MatIconModule,
  		MatMenuModule,
  		MatTableModule,
  		MatFormFieldModule,
      MatSelectModule,
      MatGridListModule,
      MatSidenavModule,
      MatSortModule,
      MatPaginatorModule,
      MatDialogModule,
      MatInputModule,
      MatCardModule,
      MatDatepickerModule,
      MatNativeDateModule,
  	  MatSnackBarModule
    ],
  	exports: [

  		MatButtonModule,
  		MatCheckboxModule,
  		MatToolbarModule,
  		MatIconModule,
  		MatMenuModule,
  		MatTableModule,
  		MatFormFieldModule,
      MatSelectModule,
      MatGridListModule,
      MatSidenavModule,
      MatSortModule,
      MatPaginatorModule,
      MatDialogModule,
      MatInputModule,
      MatCardModule,
      MatDatepickerModule,  
      MatNativeDateModule,
      MatSnackBarModule
  	]
})
export class MaterialModule { }