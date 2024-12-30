import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTabComponent } from './menu-tab.component';
import { HomePage } from 'src/app/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabComponent,
    children: [
      {
        path: 'inicio',
        component: HomePage,
      },
      {
        path: 'terminal',
        loadChildren: () => import('../../pages/terminal/terminal.module').then(m => m.TerminalPageModule),
      },
      {
        path: 'clipboard',
        loadChildren: () => import('../../pages/categories/categories.module').then(m => m.CategoriesPageModule),
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/search/search.module').then(m => m.SearchPageModule),
      },
      {
        path: 'detalle/:uuid',
        loadChildren: () => import('../../pages/details/details.module').then(m => m.DetailsPageModule),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabRoutingModule {}
