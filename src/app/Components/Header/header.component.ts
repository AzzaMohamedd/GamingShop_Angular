import { Component } from '@angular/core';
import { NavbarComponent } from './Navbar/navbar.component';
import { ContentComponent } from './headerContent/content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent,ContentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
