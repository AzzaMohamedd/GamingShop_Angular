import { IGameType } from "./igame-type";

export const gamesList:IGameType[]=[{
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
  