import type { Components, JSX } from "../types/components";

interface MiniCheckoutService extends Components.MiniCheckoutService, HTMLElement {}
export const MiniCheckoutService: {
    prototype: MiniCheckoutService;
    new (): MiniCheckoutService;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
