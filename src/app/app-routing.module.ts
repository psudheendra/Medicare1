import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyNavComponent }      from './my-nav/my-nav.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'mynav', component: MyNavComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule ,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
