import { Action, Store } from '@ngrx/store';

/**
 * This is an abstract store service that all of your other
 * store services should extend.
 */
export abstract class StoreService {
  store: Store<any>;

  dispatchAction(action: Action) {
    return this.store.dispatch(action);
  }

  getProperty(prop: string) {
    return (obj: any = {}) => {
      return obj[prop];
    };
  }
}
