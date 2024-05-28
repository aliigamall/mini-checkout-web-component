# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

# Project structure
```
├── src/
│   ├── components/
|   │   ├── logo/
|   │   │   ├── logo.tsx
|   │   │   ├── logo.css
|   │   │   └── logo.e2e.ts
|   │   │   └── logo.spec.ts
|   │   ├── logo-text/
|   │   │   ├── logo.tsx
|   │   │   ├── logo.css
|   │   │   └── logo.e2e.ts
|   │   │   └── logo.spec.ts
|   │   ├── cart-header/
|   │   │   ├── cart-header.tsx
|   │   │   ├── cart-header.css
|   │   │   └── cart-header.e2e.ts
|   │   │   └── cart-header.spec.ts
|   │   ├── checkout-row/
|   │   │   ├── checkout-row.tsx
|   │   │   ├── checkout-row.css
|   │   │   └── checkout-row.e2e.ts
|   │   │   └── checkout-row.spec.ts
|   │   ├── apply-coupon/
|   │   │   ├── apply-coupon.tsx
|   │   │   ├── apply-coupon.css
|   │   │   └── apply-coupon.e2e.ts
|   │   │   └── apply-coupon.spec.ts
│   │   ├── views/
|   │   │   ├── checkout-items/
|   │   │   │   ├── checkout-items.tsx
|   │   │   │   ├── checkout-items.css
|   │   │   │   └── checkout-items.e2e.ts
|   │   │   │   └── checkout-items.spec.ts
|   │   │   ├── shipping-options/
|   │   │   │   ├── shipping-options.tsx
|   │   │   │   ├── shipping-options.css
|   │   │   │   └── shipping-options.e2e.ts
|   │   │   │   └── shipping-options.spec.ts
|   │   │   ├── checkout-summary/
|   │   │   │   ├── checkout-summary.tsx
|   │   │   │   ├── checkout-summary.css
|   │   │   │   └── checkout-summary.e2e.ts
|   │   │   │   └── checkout-summary.spec.ts
|   │   │   ├── order-confirmation/
|   │   │   │   ├── order-confirmation.tsx
|   │   │   │   ├── order-confirmation.css
|   │   │   │   └── order-confirmation.e2e.ts
|   │   │   │   └── order-confirmation.spec.ts
│   ├── services/
│   │   ├── api-service.ts
│   ├── utils/
│   │   ├── types.ts
│   ├── global/
│   │   ├── styles.scss
│   │   ├── styles.css
│   ├── index.html
│   ├── utils.ts
├── stencil.config.ts
├── package.json
└── README.md
```