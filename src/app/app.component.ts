import { Component ,ElementRef,HostListener, ViewChild} from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('imageToChange') imageToChange!: ElementRef;
  title = 'construction';
  select:string="home";
  imgUrl="../../../assets/white-logo.png"
   check_navbar_fixed:boolean=false;
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
    const header = document.querySelector('.header');
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
    const threshold = (this.u / 100) * 60;
    // if(this.scrollValue>threshold){
    //   header?.classList.add('navbar-fixed')
    //   header?.classList.add('umut1')
    // }  
    
    
    if(this.scrollValue>1050){
     
      header?.classList.add('navbar-fixed')
      header?.classList.remove('navbar-cancelled-fixed')
      this.check_navbar_fixed = true
     this.imageToChange.nativeElement.src="assets/logo-1.png"
      
    }  
    // else if(this.scrollValue<700){
      
    //   header?.classList.remove('navbar-cancelled-fixed');
      
    // }  
    else if( this.check_navbar_fixed&& this.scrollValue<1050){
     
      header?.classList.remove('navbar-fixed')
      header?.classList.add('navbar-cancelled-fixed');
      setTimeout(() => {
        header?.classList.remove('navbar-cancelled-fixed');
        this.check_navbar_fixed =false
        
      }, 800);
     
    }

    
   
    
    else{
      
      header?.classList.remove('navbar-fixed');
      
    }
      
     
      

     

    // }

    // console.log("u")
    //  header?.classList.remove('navbar-fixed');
    //  header?.classList.remove('navbar-cancelled-fixed');
   
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
