/**
 * Character Filter Component
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 * Lab Test 2 - COMP3133
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss'] // Use styleUrls
})
export class CharacterfilterComponent implements OnInit {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';
  characters: Character[] = [];
  isLoading: boolean = false;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Optionally load characters for a default house or leave empty
  }

  onHouseChange(): void {
    if (this.selectedHouse) {
      this.isLoading = true;
      this.characters = []; // Clear previous results
      this.characterService.getCharactersByHouse(this.selectedHouse).subscribe({
        next: (data) => {
          this.characters = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(`Error fetching characters for house ${this.selectedHouse}:`, err);
          this.isLoading = false;
        }
      });
    } else {
      this.characters = []; // Clear characters if no house is selected
    }
  }

  viewDetails(characterId: string): void {
    this.router.navigate(['/character', characterId]);
  }
}
