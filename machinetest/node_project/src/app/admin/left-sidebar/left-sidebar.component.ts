import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  name:string;
  error='';
  loading=false;

  constructor(private authenticationService: AuthenticationService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      data => {       
       this.name = data.details.name;
    },
    error => {
        this.error = error;
        this.loading = false;
    })
  }

}
