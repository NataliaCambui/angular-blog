import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id: string="0"
  

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }
  routeIndex() {
    this.router.navigate([`/content/${this.Id}`])
  }
}
