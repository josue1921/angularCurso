import { NgModule } from '@angular/core';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  declarations: [FilterListPipe],
  exports: [FilterListPipe]
})
export class PipesModule { }
