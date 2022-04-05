import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-micro-card',
  templateUrl: './micro-card.component.html',
  styleUrls: ['./micro-card.component.css']
})
export class MicroCardComponent {
  userData = '';
  serverStatus = "Server is not enabled"

  
  onCreateServer() {
    this.serverStatus = "Server is created nw "
    alert(this.serverStatus)
  }

}


