export class IndexTest {
  public someMethod(prop: string): string {
    if (prop === 'test') {
      // tslint:disable-next-line:no-console
      console.log('test');
    } else {
      // tslint:disable-next-line:no-console
      console.log('prod');
    }
    return prop.toUpperCase();
  }
}
