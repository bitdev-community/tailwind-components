import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from "@learnbit-react/tailwind-library.ui.button"

/**
 * lazy load components or routes using `React.lazy`.
 */
const HelloWorld = React.lazy(() => import('./hello-world.mdx'));

export function DemoDemo() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div
          className='flex flex-col gap-2 items-center justify-center h-screen bg-gray-100'
        >
          <h1 className='text-4xl text-center text-gray-800'>
            Hello Bit and Vite!
          </h1>
          <Button>
            Click me
          </Button>
        </div>} />
        <Route path="/about" element={(
          // use suspense while loading components or modules.
          <Suspense>
            <HelloWorld />
          </Suspense>
        )} />
      </Routes>
      {/* bring your Footer component here. 
          use `bit create footer` and use the `import` the component to this file.
        */}
    </div>
  );
}

export default DemoDemo;
