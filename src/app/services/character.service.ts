/**
 * Character Service
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 * Lab Test 2 - COMP3133
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character'; // Import the Character interface

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) { }

  // Fetch all characters
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }

  // Fetch characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    // Handle cases where house might be empty or null if needed
    if (!house) {
      // Optionally return all characters or an empty array if no house is selected
      // return this.getAllCharacters(); // Or return of([]);
      // For now, let's assume a valid house is always passed or the API handles empty strings gracefully
    }
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${house.toLowerCase()}`); // API seems to expect lowercase house names
  }

  // Fetch a single character by ID
  getCharacterById(id: string): Observable<Character[]> { // API returns an array even for a single ID
    return this.http.get<Character[]>(`${this.apiUrl}/character/${id}`);
  }
}
