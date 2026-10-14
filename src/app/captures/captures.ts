import { Component } from '@angular/core';
import { Aidp } from '../services/aidp/aidp';

@Component({
  imports: [],
  selector: 'app-captures',
  styleUrl: './captures.css',
  templateUrl: './captures.html',
})
export class Captures {
  input: string = '';

  search() {
    this.aidpsv.request(this.input).subscribe(x => {
      console.log(x)
    })
  }

  constructor(private aidpsv: Aidp){}
}
