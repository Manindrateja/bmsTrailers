import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SelectComponent } from './select/select.component';

import { SafeUrl, DateTo } from './pipes';


@NgModule({
  declarations: [SelectComponent, SafeUrl, DateTo],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,MatSelectModule, MatFormFieldModule, MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule, MatInputModule, 
  	SelectComponent, 
  	SafeUrl,
  	DateTo
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
