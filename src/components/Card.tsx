import * as React from 'react';
import styled from 'styled-components';
import heart from './images/heart.svg';

export class Card extends React.Component {
  public render() {
    return (
      <CardBase>
        <SvgBase xmlns="http://www.w3.org/2000/svg" width="328" height="510">
          <TopLeft>
            <text x="0" y="25" fill="red">
              K
            </text>
            <image x="10" y="20" width="80" height="80" xlinkHref={heart} />
          </TopLeft>

          <BottomRight>
            <text x="0" y="25" fill="red" transform="rotate(180, 164, 255)">
              K
            </text>
          </BottomRight>
        </SvgBase>
      </CardBase>
    );
  }
}

const CardBase = styled.div`
  display: inline-block;
  background: #aaa;
  border-radius: 7px;
  padding: 20px;
`;

const SvgBase = styled.svg`
  background: #aaa;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
`;

const TopLeft = styled.svg``;
const BottomRight = styled.svg`
  transform: rotate(180deg);
`;
