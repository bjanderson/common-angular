import { StoreService } from './store.service';

class TestStoreService extends StoreService {
  constructor(public store: any) { super(); }
}

describe('StoreService', () => {
  let service: any;
  const store: any = { dispatch: () => undefined };

  function init() {
    service = new TestStoreService(store);
  }

  describe('dispatchAction(action: Action)', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchAction', () => {
      expect(typeof service.dispatchAction).toEqual('function');
    });

    it('calls store.dispatch() with the given action', () => {
      spyOn(store, 'dispatch').and.returnValue(null);
      const action: any = 'test-action';
      service.dispatchAction(action);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('getProperty(prop: string)', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getProperty', () => {
      expect(typeof service.getProperty).toEqual('function');
    });

    it('returns a function', () => {
      const f = service.getProperty('test');
      const expected: any = 'function';
      const result: any = typeof f;
      expect(result).toEqual(expected);
    });

    it('returns the value of obj[prop]', () => {
      const obj = {test: 'test-value'};
      const f = service.getProperty('test');
      const expected: any = 'test-value';
      const result: any = f(obj);
      expect(result).toEqual(expected);
    });
  });
});
