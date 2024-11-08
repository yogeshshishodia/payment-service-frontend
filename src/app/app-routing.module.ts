import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'transfer', component: TransferComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/transfer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
