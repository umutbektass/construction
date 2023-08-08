import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  imgUrl="../../../assets/white-logo.png"
  select:string="home";

  scrollValue:number=0;
  @HostListener('window:scroll',['$event'])
  onWindowScroll(event:any){
    this.scrollValue = window.scrollY;

    if(this.scrollValue>100){
      
     this.imgUrl="../../../assets/logo-1.png"
    }  
   
    else{
      
      this.imgUrl="../../../assets/white-logo.png"
    }
  }







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
