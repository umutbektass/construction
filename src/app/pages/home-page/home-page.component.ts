import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  scrollValue:number=0;
  u:number=0;
  revealTop:number=0;

  @HostListener('window:scroll',['$event'])
  onWindowScroll(event:any){
    this.scrollValue = window.scrollY;
    const reveals = document.querySelectorAll('.reveal');
    const left_elemnt = document.querySelectorAll('.left-animation');
    const right_element  = document.querySelectorAll('.right-animation');
    const animation_container = document.querySelectorAll('.animation-container')
    this.u = window.innerHeight;
    for (let index = 0; index < left_elemnt.length; index++) {
       this.revealTop = animation_container[index].getBoundingClientRect().top;
      const revealPoint = 10;
      if(this.revealTop<this.u - revealPoint){
        left_elemnt[index].classList.add('active2')
        right_element[index].classList.add('active3')
      }     
    }
  }
    

}
