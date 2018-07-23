import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RedirectComponent} from './redirect/redirect.component';

const routes: Routes = [
  { path: '',  component: MainPageComponent},
  { path: 'download', component: LandingPageComponent },
  { path: 'redirect', component: RedirectComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
