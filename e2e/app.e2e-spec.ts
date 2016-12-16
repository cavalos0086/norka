import { NorkaPage } from './app.po';

describe('norka App', function() {
  let page: NorkaPage;

  beforeEach(() => {
    page = new NorkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
