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
    <div className="App">
      <Wrapper style={css} />
    </div>
  );
}

export default App;
