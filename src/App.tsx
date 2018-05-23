import * as React from 'react';
import { Card } from './components';
import { Rank, Suit } from './typings';

class App extends React.Component {
  public render() {
    return <Card rank={Rank.EIGHT} suit={Suit.HEART} />;
  }
}

export default App;
