import Vue, { VNode, Component } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: Component & Element & any,
      'q-button-group': Component,
      'q-button': Component & {
        [elem: string]: any
        onclick?: Function
        type?: 'secondary'
        round?: boolean
      }
    }
  }
}
