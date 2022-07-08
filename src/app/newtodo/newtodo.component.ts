import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.css']
})
export class NewtodoComponent implements OnInit {

  constructor(private api:TodoserviceService) {
    api.stodo().subscribe(
      (response)=>{
        this.data=response
      }
    )

   }

  ngOnInit(): void {
  }
data:any=[ ]
}
