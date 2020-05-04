import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'dbk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 token: string;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((param) => {
     this.userService.setToken(param.get('token'));
     this.userService.getMe().subscribe((e) => console.log(e)
     );
    });
  }

}
