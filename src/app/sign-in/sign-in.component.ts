import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
