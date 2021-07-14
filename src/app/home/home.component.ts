import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/1')
  }

}
