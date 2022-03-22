import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameListComponent } from 'src/frameComponent/frame-list-components';
import { UserListComponent } from 'src/userComponent/user-list-component';

const routes: Routes = [
  {path: 'Frame', component: FrameListComponent},
  {path: 'Users', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrameListComponent, UserListComponent]
