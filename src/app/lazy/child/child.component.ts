import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  user$: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/2');
  }

}
