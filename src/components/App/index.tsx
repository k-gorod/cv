import React from 'react';
import { connect } from 'react-redux';
import useWindowSize from '../../scripts/useWindowSize';
import Wrapper from '../Wrapper';

const App: React.FC = (props: any) => {
  const size = useWindowSize();
  const css = {
    width: size.width,
    height: size.height
  };
  
  return (
    <div className="App" >
      <Wrapper style={css} windowWidth={size.width} lang={props.store.lang}/>
    </div>
  );
}

export default connect(
  state => ({
    store: state
  })
)(App);
