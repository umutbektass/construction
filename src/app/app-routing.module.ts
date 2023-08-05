import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
   {path:'project',component:ProjectPageComponent},
   {path:'about',component:AboutPageComponent},
  // {path:'2',component:Page2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
