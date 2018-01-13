import { Store1Page } from './app.po';

describe('store1 App', function() {
  let page: Store1Page;

  beforeEach(() => {
    page = new Store1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
