import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  select:string="home";
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
