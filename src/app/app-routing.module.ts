import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllKeysComponent } from './all-keys/all-keys.component';
import { BestKeysComponent } from './best-keys/best-keys.component';

const routes: Routes = [
  { path: 'all-keys', component: AllKeysComponent },
  { path: 'best-keys', component: BestKeysComponent },
  { path: '**', redirectTo: 'all-keys', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
