import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mini-checkout-service',
  shadow: true,
})
export class MiniCheckoutService {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
