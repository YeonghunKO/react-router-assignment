import { useState } from 'react';
import PathContext from '../context/pathContext';

function Router({ children }) {
  const [renderPath, setRenderPath] = useState('/');
  window.addEventListener('popstate', event => {
    console.log('location', window.location.pathname);
    setRenderPath(window.location.pathname);
  });

  return (
    <div>
      <PathContext.Provider value={{ setRenderPath }}>
        {(() =>
          children.find(component => component.props.path === renderPath))()}
      </PathContext.Provider>
    </div>
  );
}

export default Router;
