import { defaultString } from '@lernato/common';
import { Route } from './route.model';

describe('Route', () => {
  describe('constructor defaults', () => {
    const defaults: any = {
      extras: { skipLocationChange: false },
      path: null,
      params: null,
      url: defaultString
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Route()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Route()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Route(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test: any = {
        extras: { skipLocationChange: true },
        path: ['test', 1],
        params: {test: 'param-1'},
        url: defaultString
      };

      expect(Object.values(test)).toEqual(Object.values(new Route(test)));
    });
  });
});
