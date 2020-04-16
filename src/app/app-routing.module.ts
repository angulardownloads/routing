import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent

  },
  
  {
    path:'helloworld',
    component:HelloworldComponent

  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
