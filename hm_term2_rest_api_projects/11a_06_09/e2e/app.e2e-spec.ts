import { TeenAppPage } from './app.po';

describe('teen-app App', function() {
  let page: TeenAppPage;

  beforeEach(() => {
    page = new TeenAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
