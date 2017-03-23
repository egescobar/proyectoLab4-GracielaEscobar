import { ProyectoLab4Page } from './app.po';

describe('proyecto-lab4 App', function() {
  let page: ProyectoLab4Page;

  beforeEach(() => {
    page = new ProyectoLab4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
