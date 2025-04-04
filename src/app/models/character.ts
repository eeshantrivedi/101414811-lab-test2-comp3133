/**
 * Character Model
 * Name: Eeshan Trivedi
 * Student ID: 101414811
 * Lab Test 2 - COMP3133
 */
export interface Character {
  id: string;
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand: {
    wood: string;
    core: string;
    length: number | null; // Length can sometimes be null
  };
  actor: string;
  image: string;
  // Add any other fields you might need from the API
  alternate_names?: string[];
  gender?: string;
  dateOfBirth?: string | null;
  yearOfBirth?: number | null;
  eyeColour?: string;
  hairColour?: string;
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  alive?: boolean;
  alternate_actors?: string[];
}
