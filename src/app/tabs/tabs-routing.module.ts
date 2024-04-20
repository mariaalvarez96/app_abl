import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mybookings',
        loadChildren: () => import('../mybookings/mybookings.module').then(m => m.MybookingsPageModule)
      },
      {
        path: 'mysupplies',
        loadChildren: () => import('../mysupplies/mysupplies.module').then(m => m.MysuppliesPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      /* {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, */
      /* {
        path: '',
        redirectTo: '/signup',
        pathMatch: 'full'
      },  */    
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
