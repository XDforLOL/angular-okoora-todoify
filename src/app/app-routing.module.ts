import { SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {TodoComponent} from "./todo/todo.component";
import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard'
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
