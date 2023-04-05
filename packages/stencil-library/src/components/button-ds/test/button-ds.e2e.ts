import { newE2EPage } from '@stencil/core/testing';

describe('button-ds', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-ds></button-ds>');

    const element = await page.find('button-ds');
    expect(element).toHaveClass('hydrated');
  });
});
