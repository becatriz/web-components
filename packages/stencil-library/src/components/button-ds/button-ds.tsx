import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-ds',
  styleUrl: 'button-ds.css',
  shadow: true,
})
export class ButtonDs {

  @Prop() label: string;

  render() {
    return (
      <button type='button'>{this.label}</button>
    );
  }

}
