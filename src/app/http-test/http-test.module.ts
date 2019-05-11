import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpTestComponent } from './http-test.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpTestService } from './http-test.service';


const router: Routes = [
  {
    path: '',
    component: HttpTestComponent
  }
];

@NgModule({
  declarations: [HttpTestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    HttpClientModule
  ],
  providers: [HttpTestService]
})
export class HttpTestModule { }
