import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { KdvPipe } from './kdv.pipe';

@NgModule({
  imports: [],
  exports: [KdvPipe, FilterPipe],
  declarations: [KdvPipe, FilterPipe],
  providers: [],
})
export class PipeModule {}
