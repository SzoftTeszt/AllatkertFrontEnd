import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  
  allatok:any;
  oszlopok=["id","nev","faj","gondozo","helye"];
  ujAllat:any={};

  refresh(){
    this.base.get().subscribe({
      next:
      (adatok) => {
        this.allatok=adatok;
        console.log(this.allatok);
      },
      error:(e)=>console.log(e)
    }
    );
  }

  constructor(private base:BaseService){
    this.refresh();
  }
  addAnimal(){
    this.base.add(this.ujAllat).subscribe(
      (e)=> {this.refresh(); this.ujAllat={}}
    )
  }

  updateAnimal(body:any){
    this.base.update(body).subscribe(
      ()=>this.refresh()
    );
  }
  deleteAnimal(body:any){
    this.base.delete(body).subscribe(
      ()=>this.refresh()
    );
  }
}
