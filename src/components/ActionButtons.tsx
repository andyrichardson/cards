import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { DeckStore } from '../stores';

interface ActionButtonsProps {
  deckStore?: DeckStore;
}

@inject('deckStore')
@observer
export class ActionButtons extends React.Component<ActionButtonsProps, any> {
  public props: ActionButtonsProps;

  public render() {
    return (
      <ButtonContainer>
        <Button src={require('../images/shuffle.svg')} onClick={this.shuffle} />
        <Button src={require('../images/reset.svg')} onClick={this.reset} />
      </ButtonContainer>
    );
  }

  private shuffle = () => this.props.deckStore.shuffle();
  private reset = () => this.props.deckStore.reset();
}

const ButtonContainer = styled.div``;

const Button = styled.img`
  width: 40px;
`;
