import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFAke';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [MenuBarComponent, MenuTitleComponent]
})
export class ContentComponent implements OnInit{

  contentTitle: string = ""
  contentDescription: string = ""
  contentPhoto:string = ""
  private id: string | null ="0"
  
  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
      this.route.paramMap.subscribe( value => 
      this.id = value.get("id")
      
      );
      this.setValuesToCompoment(this.id)
  }
  setValuesToCompoment(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    
    this.contentPhoto = result.photo
    this.contentDescription = result.description
    this.contentTitle = result.title

    }
  
  }

