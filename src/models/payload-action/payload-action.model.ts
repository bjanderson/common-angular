import { Action } from '@ngrx/store';

/**
 * This class is a type-stub for defining actions in
 * your @ngrx store.
 */
export class PayloadAction implements Action {
  constructor(
    public type: string,
    public payload?: any
  ) {}
}
