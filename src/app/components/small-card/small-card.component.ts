import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardTitle:string =""
  @Input()
  cardPhoto:string=""
  @Input()
  Id:string = "0"

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
      
  }
  routeIndex() {
    this.router.navigate([`/content/${this.Id}`])
  }
}
