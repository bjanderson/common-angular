import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as ngrxStore } from '@ngrx/store';
import { reducers } from './store.reducers';

@NgModule({
  exports: [ ngrxStore ],

  imports: [
    ngrxStore.forRoot(reducers),
    EffectsModule.forRoot([])
  ]
})
export class StoreModule {}
