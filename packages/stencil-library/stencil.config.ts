import { Config } from '@stencil/core/internal';
//import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Vue target
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    /*vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library-reb/lib/components.ts',

    }),*/
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library-reb/lib/components/stencil-generated/index.ts',
    })
  ],
};
