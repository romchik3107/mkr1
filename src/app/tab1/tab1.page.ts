import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  dd: number = 0;
  m: number = 0;
  mm: number = 0;
  v: number = 0;
  sum: number = 0;
  ssum: number = 0;
  ras(a:any, b:any, c:any){
    try{
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.c=parseFloat(c);
      this.d=0;
      this.dd=0;
      this.m=0;
      this.mm=0;
      this.v=0;
      this.sum=0;
      this.ssum=0;
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true)){
        throw new Error('Parametrs is not a number!');
      }
      let i: number = 0;
      for(i=0; i<this.a; i++){
        this.d = this.d + (2*4);
        this.dd = this.dd + (5*7);
      }
      for(i=0; i<this.b; i++){
        this.v = this.v + (5*6);
      }
      for(i=0; i<this.c; i++){
        this.m = this.m + (3*4);
        this.mm = this.mm + (5.9*9.9);
        this.mm =parseFloat(this.mm.toFixed(1));
      }
      this.sum = this.d + this.m;
      this.ssum = this.dd + this.v + this.mm;
    }
    catch (error) {
      console.log(error);
      
    }
  }
}
