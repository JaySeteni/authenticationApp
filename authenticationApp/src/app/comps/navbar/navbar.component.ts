import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigate(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const route = selectElement.value;
    this.router.navigate([`/${route}`]);
  }
}
