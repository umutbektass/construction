import { Component ,HostListener} from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'construction';
  select:string="home";

  constructor(private carouselService:CarouselService){}
  products:any[]=[]
  ngOnInit(){
    this.products  = this.carouselService.data
  }
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
    //   else {
    //     reveals[index].classList.remove('active1');
    // }
      
      
    }
  }
  

//   getSeverity(status: string) {
//     switch (status) {
//         case 'INSTOCK':
//             return 'success';
//         case 'LOWSTOCK':
//             return 'warning';
//         case 'OUTOFSTOCK':
//             return 'danger';
//     }
// }
  activeHeader(selectHeader:string){
    switch (selectHeader) {
      case "home":
        this.select=selectHeader
        break;
        case "project":
        this.select=selectHeader
        break;
        case "about":
        this.select=selectHeader
        break;
        case "contect":
        this.select=selectHeader
        break;
    
      default:
        break;
    }
  }
}
