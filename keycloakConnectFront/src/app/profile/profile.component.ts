import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user = '';
  public token = '';
  public jwtDecode = '';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.user = this.keycloakService.getUsername();
    this.keycloakService.getToken().then(token => {
      this.token = token;
      this.jwtDecode = JSON.stringify(jwt_decode(token));
    });
  }

  onLogout(): void {
    this.keycloakService.logout("http://localhost:4200");
  }
}
