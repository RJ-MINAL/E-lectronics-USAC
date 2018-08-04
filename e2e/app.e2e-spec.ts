import { ELectronicsUsacPage } from './app.po';

describe('e-lectronics-usac App', () => {
  let page: ELectronicsUsacPage;

  beforeEach(() => {
    page = new ELectronicsUsacPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
