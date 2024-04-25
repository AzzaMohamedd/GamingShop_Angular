import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllGamesComponent } from './Components/all-games/all-games.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ItemsSectionComponent } from './Components/ContentSection/items-section.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';

export const routes: Routes = [
    {path:'',component:ItemsSectionComponent},
    {path:'AllGames',component:AllGamesComponent},
    {path:'AllGames/:id',component:ProductDetailsComponent},  //details
    {path:'AllGames/:id/Edit',component:ProductFormComponent}, //for edit & add (if pass id equal 0 will be add)
    {path:'**',component:NotFoundComponent} 
];
