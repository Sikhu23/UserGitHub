import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
  username:String;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getuser(){
    console.log(this.username)
    this.router.navigate(['/user'],{queryParams:{user:this.username}});


  }

}
