import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get("http://localhost:3000/allatok")
  }

  add(body:any){
    return this.http.post("http://localhost:3000/allatok", body)
  }
  update(body:any){
    return this.http.put("http://localhost:3000/allatok/"+body.id, body)
  }
  delete(body:any){
    return this.http.delete("http://localhost:3000/allatok/"+body.id)
  }
}
