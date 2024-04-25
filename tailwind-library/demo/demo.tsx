import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from "@learnbit-react/tailwind-library.ui.button";
import { TextField } from '@learnbit-react/tailwind-library.ui.textfield';
import { Switch } from '@learnbit-react/tailwind-library.ui.switch';

/**
 * lazy load components or routes using `React.lazy`.
 */
const HelloWorld = React.lazy(() => import('./hello-world.mdx'));

export function DemoDemo() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);  // Initial state for the Switch

  // Handler for Button click
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  // Handler for Switch toggle
  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked);
    alert(`Switch is now ${checked ? 'ON' : 'OFF'}`);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div className='flex flex-col gap-2 items-center justify-center h-screen bg-gray-100'>
            <h1 className='text-4xl text-center text-gray-800'>
              Hello Bit with Tailwind
            </h1>

            <h2>Button Element</h2>
            <Button onClick={handleButtonClick}>
              Click me
            </Button>

            <h2>Text Element</h2>
            <TextField placeholder='Type here'></TextField>

            <h2>Switch Element</h2>
            <Switch checked={isSwitchOn} onChange={handleSwitchChange}></Switch>
          </div>
        } />
        <Route path="/about" element={
          // Use suspense while loading components or modules.
          <Suspense fallback={<div>Loading...</div>}>
            <HelloWorld />
          </Suspense>
        } />
      </Routes>
      {/* Bring your Footer component here. 
          Use `bit create footer` and use the `import` the component to this file.
        */}
    </div>
  );
}

export default DemoDemo;
