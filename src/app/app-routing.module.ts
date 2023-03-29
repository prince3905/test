import { Test2Component } from './test2/test2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path:'',component:Test2Component},

  { path:'test',component:Test2Component},

//   { path: '', redirectTo: '/', pathMatch: 'full',
//   children:[
//     { path:'',redirectTo:'test',pathMatch:'full'},
//     { path:'test',component:Test2Component},
//   ] 
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
