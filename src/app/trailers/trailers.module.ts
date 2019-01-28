import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

// const routes: Routes = [
//   { path: '', component: ListComponent},
//   { path: ':id', component: ListComponent}
// ];

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class TrailersModule { }
