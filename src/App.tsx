import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { Card, Deck } from './components';
import { DeckStore, ThemeStore } from './stores';

const stores = {
  deckStore: new DeckStore(),
  themeStore: new ThemeStore(),
};

@observer
class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <>
          <Deck />
          <Table className="table">
            {stores.deckStore.table.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit} />
            ))}
          </Table>
        </>
      </Provider>
    );
  }
}

const Table = styled.div`
  display: flex;
  div {
    margin: 10px;
  }
`;

export default App;
