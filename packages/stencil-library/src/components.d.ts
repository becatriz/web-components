/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonDs {
        "label": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLButtonDsElement extends Components.ButtonDs, HTMLStencilElement {
    }
    var HTMLButtonDsElement: {
        prototype: HTMLButtonDsElement;
        new (): HTMLButtonDsElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-ds": HTMLButtonDsElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonDs {
        "label"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "button-ds": ButtonDs;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-ds": LocalJSX.ButtonDs & JSXBase.HTMLAttributes<HTMLButtonDsElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}