import { SegundoComponentePage } from './app.po';

describe('segundo-componente App', () => {
  let page: SegundoComponentePage;

  beforeEach(() => {
    page = new SegundoComponentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
