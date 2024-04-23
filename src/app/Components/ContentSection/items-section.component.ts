import { Component } from '@angular/core';
import { ItemComponent } from './Item/item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IGameType } from '../../Models/igame-type';

@Component({
  selector: 'app-items-section',
  standalone: true,
  imports: [ItemComponent,CommonModule,FormsModule],
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.css'
}) 
export class ItemsSectionComponent {
 
  //Task1 : Display Products 
 gamesList:IGameType[]=[{
  id: 1,
  name: "Game1",
  category: "Adults' games",
  price: 999.99,
  quantity: 10,
  inStock: true,
  image: "../../../assets/images/top-game-05.jpg"
},
  {
    id: 2,
    name: "Game2",
    category: "children's games",
    price: 500,
    quantity: 0,
    inStock: false,
    image: "../../../assets/images/top-game-03.jpg"
  },
  {
    id: 3,
    name: "Game3",
    category: "children's games",
    price: 350,
    quantity: 20,
    inStock: true,
    image: "../../../assets/images/top-game-04.jpg"
  },
  {
    id: 4,
    name: "Game4",
    category: "Adults' games",
    price: 146,
    quantity: 1,
    inStock: true,
    image: "../../../assets/images/top-game-02.jpg"
  }];

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