import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getaData() {
    return [
      { name: 'a', y: 100, color: 'green' },
      { name: 'b', y: 20, color: 'red' },
    ]
  }

}
