import { newSpecPage } from '@stencil/core/testing';
import { ButtonDs } from '../button-ds';

describe('button-ds', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonDs],
      html: `<button-ds></button-ds>`,
    });
    expect(page.root).toEqualHtml(`
      <button-ds>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-ds>
    `);
  });
});
