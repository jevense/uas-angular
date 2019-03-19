import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {DepartmentComponent} from './department/department.component';
import {HomeComponent} from './home/home.component';
import {DepartmentFormComponent} from './department-form/department-form.component';
import {ProductComponent} from './product/product.component';
import {ProductRecommendComponent} from './product-recommend/product-recommend.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/main/home', pathMatch: 'full'},
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/main/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'department', component: DepartmentComponent},
      {path: 'department-form', component: DepartmentFormComponent},
      {path: 'product', component: ProductComponent},
      {path: 'product-recommend', component: ProductRecommendComponent},
      {path: 'user', component: UserComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
