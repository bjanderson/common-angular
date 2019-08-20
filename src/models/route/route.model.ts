import { NavigationExtras } from '@angular/router';
import { getObject, getString, getValueOrDefault, getValueOrNull } from '@lernato/common';

/**
 * This class is for use in your router store.
 *
 * Angular's router, and @ngrx's router-store implementations use a few different variables
 * depending on what call you are making.
 *
 * This model wraps all of them into one package, but you will still have to know which ones
 * to set and use based on what you want Angular and @ngrx to do.
 */
export class Route {

  extras: NavigationExtras;
  path: any;
  params: any;
  url: string;

  constructor(obj?: Partial<Route>) {
    obj = getObject(obj);
    this.extras = getValueOrDefault(obj.extras, { skipLocationChange: false });
    this.path = getValueOrNull(obj.path);
    this.params = getValueOrNull(obj.params);
    this.url = getString(obj.url);
  }
}
