import { Injectable } from '@angular/core';
import { IGameType } from '../Models/igame-type';
import { gamesList } from '../Models/GamesList';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games:IGameType[]=[];

  constructor() {
    this.games = gamesList;  //initialize 
  }
  //crud operations
  getAllGames():IGameType[]{  //read
    return this.games;
  }  
  getGameByID(id:number):IGameType | undefined{   //read
    return this.games.find(x=>x.id==id);
  }
  addNewGame(obj:IGameType){    //create
    let lastID = this.games[this.games.length-1].id;
    obj.id = lastID + 1;
    this.games.push(obj);
  }
  deleteGame(id:number){   //delete
    this.games = this.games.filter(x=>x.id != id);  //just delete from this array (not in the big list)
  }
  editGame(id:number , updatedObj:IGameType){
    debugger
    const index = this.games.findIndex((g) => g.id == id);
    if (index !== -1) {
      this.games[index] = { ...this.games[index], ...updatedObj };
    }
    return this.games;
    debugger
    
  }
}
