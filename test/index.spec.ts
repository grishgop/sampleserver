import { IndexTest } from '../src/index'

describe('sample test group', () => {
    test: IndexTest;

    beforeEach(() => {
        this.test = new IndexTest();
    });

    test('test 1', () => {
      expect(this.test.someMethod('test')).toEqual('TEST');
    });
  
  });