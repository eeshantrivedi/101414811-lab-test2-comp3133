/**
 * Lab Test 2 - COMP3133
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router'; // Import RouterModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// Import other Material modules if needed for layout (e.g., Sidenav)
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true, // Make it standalone
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule, // Add RouterModule
    MatToolbarModule,
    MatButtonModule,
    // MatSidenavModule, // Add if using sidenav
    // MatListModule,    // Add if using sidenav list
    // MatIconModule     // Add if using icons
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Use styleUrls
})
export class AppComponent {
  // Title can be removed or kept if needed elsewhere
  // title = '101414811-lab-test2-comp3133';
}
