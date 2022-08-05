// declare module "*.svg" {
//     const content: any;
//     export default content;
//   }

//   declare module '*.svg' {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }

declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}