// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../carddata.service';
import { Creditcard } from '../creditcard.model'; // Import from the new file

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}
}
