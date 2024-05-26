import { newSpecPage } from '@stencil/core/testing';
import { MiniCheckoutService } from '../mini-checkout-service';

describe('mini-checkout-service', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiniCheckoutService],
      html: `<mini-checkout-service></mini-checkout-service>`,
    });
    expect(page.root).toEqualHtml(`
      <mini-checkout-service>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mini-checkout-service>
    `);
  });
});
