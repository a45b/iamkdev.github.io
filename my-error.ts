import { ErrorHandler } from "@angular/core";

export class MyError implements ErrorHandler {
  handleError(error) {
    // do something with the exception
    // console.log(error);
    console.log('Something wend wrong');

    
  }
}
