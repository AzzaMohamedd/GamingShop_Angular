import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/Footer/footer.component';
import { HeaderComponent } from './Components/Header/header.component';
import { ItemsSectionComponent } from './Components/ContentSection/items-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HeaderComponent,ItemsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GamingSiteAngular';
}
