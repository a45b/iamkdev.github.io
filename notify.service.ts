import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class NotifyService {
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  str: string = '';
  constructor() {     
  }
  
  changeMessage(message: string) {    
    this.str = message;
    this.messageSource.next(this.str);
  }
  
}
