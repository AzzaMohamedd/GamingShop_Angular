import { Component } from '@angular/core';
import { NavbarComponent } from './Navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
