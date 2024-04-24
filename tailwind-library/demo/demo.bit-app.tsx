import { ViteReact } from '@bitdev/react.app-types.vite-react';
// import {
//   NetlifyOptions,
//   Netlify,
// } from '@teambit/cloud-providers.deployers.netlify';

// export const netlifyConfig: NetlifyOptions = {
//   team: 'teambit',
//   accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
//   productionSiteName: 'bit-plugin-tailwind',
//   skipLaneDeployments: false,
//   useDefaultRedirectsForSPA: false,
// };

export default ViteReact.from({
  name: 'demo',
  ssr: false,
  // deploy: Netlify.deploy(netlifyConfig),
});
