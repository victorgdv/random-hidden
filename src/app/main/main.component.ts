import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {



  newValue="";
  nuevaTarea: string = "";

  List = [
    {
      title: 'Comer calabazas',
      counter: 1
    },
    { title: 'Pagar fantas',
      counter: 4 }

  ];

   newTarea(nuevaTarea: string){
    this.List.push({title: nuevaTarea, counter:1})
   }

   changeCounter(list: any,newValue:any){
    list.counter = newValue
   }

   deleteTarea(){
    const index = this.List.findIndex((list) => list.title);
    this.List.splice(index, 1);
  }
   }








