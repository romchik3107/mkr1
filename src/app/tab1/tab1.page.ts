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
  ras(a:any, b:any, c:any){
    try{
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.c=parseFloat(c);
      this.d=0;
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true)){
        throw new Error('Parametrs is not a number!');
      }
      
      if((this.a > 5) || (this.b > 5) || (this.c > 5))
        this.d = Math.pow((this.a + this.b + this.c), 2);
      else 
        this.d = (this.a + this.b + this.c)
    }
    catch (error) {
      console.log(error);
      
    }
  }
}
