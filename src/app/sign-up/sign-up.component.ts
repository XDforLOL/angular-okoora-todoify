import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
