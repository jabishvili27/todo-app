import { Component, OnInit } from '@angular/core';


interface item{
  name:string;
  option:string
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
inputval:string='';
option:string='';
listofinput:item[]=[]
listofprogres:item[]=[]
listofdone:item[]=[]


  constructor() { }

  ngOnInit(): void {
  }
  getval(){
    this.listofinput.push({
      name:this.inputval,
    option:this.option})
    
    this.inputval=''
    this.option=''
    console.log(this.inputval)
  }

  del(i:number) {
    this.listofinput.splice(i, 1);
  }
  inprogres(i:item){
    this.listofinput=this.listofinput.filter((t)=>t!==i)
    this.listofprogres=[...this.listofprogres,i]
    console.log(this.listofprogres)
  }
indone(i:item){
  this.listofprogres=this.listofprogres.filter((t)=>t!==i)
  this.listofdone=[...this.listofdone,i]
}
intodo(i:item){
  this.listofprogres=this.listofprogres.filter((t)=>t!==i)
  this.listofinput=[...this.listofinput,i]
}
inprogresagain(i:item){
  this.listofdone = this.listofdone.filter((t) => t !== i);
  this.listofprogres = [...this.listofprogres, i];

}
}
