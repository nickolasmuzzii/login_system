import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment'

@Component({
  selector: 'app-personal-infos',
  templateUrl: './personal-infos.component.html',
  styleUrls: ['./personal-infos.component.css']
})
export class PersonalInfosComponent implements OnInit{
  data:any
  constructor(private http: HttpClient){

  }
  ngOnInit() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${localStorage.getItem('token')}`
      })
    };
    this.http.get('http://localhost:3000/users', httpOptions).subscribe((res) =>{
       this.data = JSON.parse(JSON.stringify(res))
       this.data["user"]["data_nascimento"] = moment( this.data["data_nascimento"]).format("DD/MM/YYYY")
       return this.data
    }
    )

  }
}
