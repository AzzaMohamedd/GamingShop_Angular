import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { IGameType } from '../../../Models/igame-type';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() game!:IGameType;
  
}


