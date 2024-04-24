import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";

import { DemoDemo } from "./demo.js";

interface IRenderProps {
  path: string;
}

export const render = async ({ path }: IRenderProps) => {
  // const client = new ApolloClient({ cache: null });
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <DemoDemo />
    </StaticRouter>
  );
};

/**
 * use `loadScripts` to inject scripts to the head
 * during SSR.
 */
// export const loadScripts = async () => {
//   return '<script></script>';
// }
