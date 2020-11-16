import React from 'react';
import useWindowSize from '../../scripts/useWindowSize';
import Wrapper from '../Wrapper';

const App: React.FC = () => {
  const size = useWindowSize();
  const css = {
    width: size.width,
    height: size.height
  };
  
  return (
    <div className="App" >
      <Wrapper style={css} windowWidth={size.width} />
    </div>
  );
}

export default App;
