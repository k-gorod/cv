import React from 'react';
import GetWindowSize from '../../scripts/GetWindowSize';
import Wrapper from '../Wrapper';

const App: React.FC = () => {
  const size = GetWindowSize();
  const css = {
    width: size.width,
    height: size.height
  };
  return (
    <div className="App">
      <Wrapper style={css} />
    </div>
  );
}

export default App;
