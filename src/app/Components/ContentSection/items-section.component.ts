import { Component } from '@angular/core';
import { ItemComponent } from './Item/item.component';

@Component({
  selector: 'app-items-section',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './items-section.component.html',
  styleUrl: './items-section.component.css'
})
export class ItemsSectionComponent {

}
