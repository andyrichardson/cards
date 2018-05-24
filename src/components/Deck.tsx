import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { DeckStore } from '../stores';

interface DeckProps {
  deckStore?: DeckStore;
}

@inject('deckStore')
@observer
export class Deck extends React.Component<DeckProps, any> {
  public props: DeckProps;

  public render() {
    return <DeckImage src={require('../images/deck.svg')} />;
  }
}

const DeckImage = styled.img`
  width: 200px;
`;
