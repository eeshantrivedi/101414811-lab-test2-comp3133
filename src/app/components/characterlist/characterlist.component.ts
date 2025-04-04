/**
 * Character List Component
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 * Lab Test 2 - COMP3133
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngFor, *ngIf
import { RouterModule } from '@angular/router'; // For routerLink
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // For loading indicator
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service'; // Correct service path
import { Character } from '../../models/character'; // Correct model path

@Component({
  selector: 'app-characterlist',
  standalone: true, // Make it standalone
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss'] // Keep styleUrls
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = []; // Use correct model type
  isLoading = true; // Add loading state

  constructor(
    private characterService: CharacterService, // Use correct service name and type
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.getAllCharacters().subscribe({ // Use correct service name
      next: (data: Character[]) => { // Type the data parameter
        this.characters = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching characters:', err);
        this.isLoading = false; // Stop loading on error
      }
    });
  }

  // Method to navigate to character details
  viewDetails(characterId: string): void {
    this.router.navigate(['/character', characterId]);
  }
}
