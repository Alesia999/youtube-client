import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './auth/pages/not-found/not-found.component';

import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'login',
            loadChildren: () =>
              import('./auth/auth.module').then((m) => m.AuthModule),
          },
          {
            path: 'main',
            loadChildren: () =>
              import('./youtube/youtube.module').then((m) => m.YoutubeModule),
            canLoad: [AuthGuard],
            canActivate: [AuthGuard],
          },
          { path: '404', component: NotFoundComponent },
          { path: '**', redirectTo: '/404' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
