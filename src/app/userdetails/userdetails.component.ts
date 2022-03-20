import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdetails:any={}
  user:any
  projectDetails:any=[]

  constructor(private router:ActivatedRoute,private http:HttpClient) {

    this.router.queryParams.subscribe((response:any)=>{
        console.log(response.user)
        this.user=response.user;
        let url="https://api.github.com/users/"+response.user;
        this.http.get(url).subscribe((response)=>{
          console.log(response);
          this.userdetails=response
        })
    })
  }

  ngOnInit(): void {
  }

  getdetails(){
    let url="https://api.github.com/users/"+this.user+"/repos";
    this.http.get(url).subscribe((response)=>{
      console.log(response);
      this.projectDetails=response
    })



  }

}
