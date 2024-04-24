import { ReactEnv } from '@bitdev/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import type { EnvHandler } from '@teambit/envs';
import type { Preview } from '@teambit/preview';
import { NativeCompileCache } from '@teambit/toolbox.performance.v8-cache';
import { tailwindTransformer } from '@frontend/tailwind.transformers.tailwind';
import { createRequire } from 'node:module';
import { tailwindConfig } from '@learnbit-react/tailwind-library.config.tailwind';

// Disable v8-caching because it breaks ESM loaders
NativeCompileCache.uninstall();

const require = createRequire(import.meta.url);

export class TwReactEnv extends ReactEnv {
  name = 'react';

  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      mounter: this.previewMounter,
      transformers: [
        tailwindTransformer({
          config: tailwindConfig,
          cdn: true,
        }),
      ],
    });
  }

  protected previewMounter = require.resolve('./preview/mounter.js');
}

export default new TwReactEnv();
