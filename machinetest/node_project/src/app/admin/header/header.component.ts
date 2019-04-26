import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 name:string;
 error='';
 loading=false;
  constructor(private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      data => {        
        // console.log(data);
       this.name = data.details.name;
    },
    error => {
        this.error = error;
        this.loading = false;
    }
    )
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigateByUrl('/admin/login');
  }

}
