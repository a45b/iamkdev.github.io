import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // ,providers: [NotifyService]
})
export class AppComponent implements OnInit {
  
  title: string; 
  users: any;  
  searchText: string;
  cnt: any;
  message:string;

  constructor(private notify: NotifyService) {    
    this.title = 'Demo';    
    this.cnt = null;
  }

  ngOnInit(){ 
    console.log('ngOnInit');      
     this.notify.currentMessage.subscribe(message => this.message = message)

    setTimeout(() => {
      this.newMessage();
    }, 5000);
  }      

  newMessage() {
    this.notify.changeMessage("Hello from Sibling")
  }
}
