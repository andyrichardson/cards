import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { DeckStore, ThemeStore } from '../stores';
import { Rank, Suit } from '../typings';
import { Card } from './Card';

describe('construction', () => {
  it('constructs without error', () => {
    // @ts-ignore
    expect(new Card()).to.be.an('object');
  });
});

describe('render', () => {
  let deckStore: DeckStore;
  let themeStore: ThemeStore;
  let suit: Suit;
  let rank: Rank;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    deckStore = new DeckStore();
    themeStore = new ThemeStore();
    suit = Suit.CLUB;
    rank = Rank.JACK;

    testRender = TestRenderer.create(
      <Card
        themeStore={themeStore}
        deckStore={deckStore}
        suit={suit}
        rank={rank}
      />,
    );
  });

  it('renders', () => {
    // @ts-ignore
    expect(testRender.toJSON().type).to.equal('div');
  });
});

// describe('rendering', () => {
//   let deckStore: DeckStore;
//   let themeStore: ThemeStore;
//   let suit: Suit;
//   let rank: string;

//   beforeEach(() => {
//     deckStore = new DeckStore();
//     themeStore = new ThemeStore();
//     suit = Suit.CLUB;
//     rank = 'king';
//   });

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//       <Card
//         themeStore={themeStore}
//         deckStore={deckStore}
//         suit={suit}
//         rank={rank}
//       />,
//       div,
//     );
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });
