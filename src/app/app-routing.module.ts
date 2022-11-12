import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
