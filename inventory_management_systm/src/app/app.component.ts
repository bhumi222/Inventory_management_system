import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory_management_systm';
}
