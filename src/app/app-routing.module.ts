import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/services',
    pathMatch: 'full',
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/travel-services/travel-services.module').then(
        (m) => m.TravelServicesModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
