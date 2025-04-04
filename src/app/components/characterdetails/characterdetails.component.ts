/**
 * Character Details Component
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 * Lab Test 2 - COMP3133
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Import Location
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import RouterModule for routerLink if needed later
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'; // For back button
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { Observable, switchMap } from 'rxjs'; // Import switchMap

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Include RouterModule
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule // Include MatButtonModule
  ],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss'] // Use styleUrls
})
export class CharacterdetailsComponent implements OnInit {
  character$: Observable<Character | undefined> | undefined; // Observable for the character
  character: Character | undefined; // Property to hold the resolved character
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location // Inject Location
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.errorMessage = null;

    // Use switchMap to get the id from the route params and then fetch the character
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (!id) {
          this.isLoading = false;
          this.errorMessage = 'Character ID not found in route.';
          throw new Error('Character ID not found'); // Or handle differently
        }
        return this.characterService.getCharacterById(id);
      })
    ).subscribe({
      next: (dataArray) => {
        // API returns an array, even for a single ID
        if (dataArray && dataArray.length > 0) {
          this.character = dataArray[0];
        } else {
          this.errorMessage = 'Character not found.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching character details:', err);
        this.errorMessage = 'Failed to load character details. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  // Method to go back to the previous page
  goBack(): void {
    this.location.back();
  }
}
