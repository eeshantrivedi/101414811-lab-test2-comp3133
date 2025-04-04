import { Routes } from '@angular/router';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component'; // Import filter component

export const routes: Routes = [
  { path: 'characters', component: CharacterlistComponent }, // Route for the full list
  { path: 'filter-by-house', component: CharacterfilterComponent }, // Route for the filter view
  { path: 'character/:id', component: CharacterdetailsComponent }, // Route for details
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, // Default redirect to the character list
  { path: '**', redirectTo: '/characters' } // Optional: Wildcard route redirects to the list
];
