import React, { Component } from 'react';
import Square from '../Square';
import styled, {css} from 'styled-components';
const BoardContainer = styled.div``;   
  
const BoardRow = styled.div`
  ${css`
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  `}`;   
const Status = styled.div`
  margin-bottom: 10px;
`;   
export default class Board extends React.Component {
  renderSquare(i:number) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <BoardContainer>
        <Status>{status}</Status>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </BoardContainer>
    );
  }
}