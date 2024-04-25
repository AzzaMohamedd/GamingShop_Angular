import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './Item/item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IGameType } from '../../Models/igame-type';
import { GameService } from '../../Services/game.service';

@Component({
  selector: 'app-items-section',
  standalone: true,
  imports: [ItemComponent,CommonModule,FormsModule],
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.css'
}) 
export class ItemsSectionComponent implements OnInit {
 
gamesList:IGameType[]=[];

constructor(public service:GameService) {
}
ngOnInit():void{
  this.gamesList=this.service.getAllGames();
}
////////////////////////////////////////////////////////////////////

  // Task2 : student validations
  NameFlag = true;
  AgeFlag = true;
  btnFlag=false;
  studentsList:studentType[]=[  //must make interface for studentType
  {
    id:1,
    name:"Azza",
    age:24
  },
  {
    id:2,
    name:"Isalm",
    age:28
  },
  {
    id:3,
    name:"Mona",
    age:35
  }
  ]

  checkName(input:any){
  let nameData = input.value;
  if(nameData.length < 3 && nameData.length > 0){
    this.NameFlag=false;
    this.btnFlag=false;
  }
  else{
    this.NameFlag=true;
    this.btnFlag=true;
  }

  }
  checkAge(input:any){
  let AgeData = Number(input.value);
  if(AgeData < 18 && AgeData >0){
    this.AgeFlag=false;
    this.btnFlag=true;
  }
  else{
    this.AgeFlag=true;
    this.btnFlag=true;
  }
  }
  addStudent(name:HTMLInputElement,age:HTMLInputElement) {
    this.checkName(name);
    this.checkAge(age);

    let arrayLength = this.studentsList.length;
    let lastID = this.studentsList[arrayLength-1].id;

    this.studentsList.push({id:lastID+1 , name:name.value , age:Number(age.value)});
  }
  removeStudent(obj:object){
    this.studentsList = this.studentsList.filter(item => item != obj);    
  }


  ////////////////////////////////////////////////////////////////////

  // Task3 : drop down list options

  tracksList:trackType[]=[{  //must make interface for trackType
    id:1,
    name:"PD",
    location:"Menofia"
  },
  {
    id:2,
    name:"SD",
    location:"Smart"
  },
  {
    id:3,
    name:"OS",
    location:"Alex"
  }
];

objTrack:trackType[]=[{id:0,name:"",location:""}];

selectTrack(e:Event){
  let s:HTMLSelectElement = e.target as HTMLSelectElement;
  let selectedID = Number(s.value);
  this.objTrack = this.tracksList.filter(x=>x.id==selectedID);
}

}


//make it in a separated interfaces in Models folder
interface studentType{
  id:number;
  name:string;
  age:number
}
interface trackType{
  id:number;
  name:string;
  location:string;
}