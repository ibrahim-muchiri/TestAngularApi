import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
import { ApiData } from './interfaces/Interface'; // Import the interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-api';
  userId = 1

  constructor(private api: GetApiService){
    
  }
  ngOnInit(){
    this.api.apiCall().subscribe((data: ApiData)=>{
      console.warn("get api data", data);
      this.title=data['title']
      this.userId=data['userId']
    });
  }
}
