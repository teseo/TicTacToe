import React, { Component } from "react";
import Square from "../Square";
import styled, { css } from "styled-components";
const BoardContainer = styled.div``;

const BoardRow = styled.div`
  ${css`
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  `}
`;
const Status = styled.div`
  margin-bottom: 10px;
`;
type MyProps = {};
type MyState = {
  squares: string[];
};
export default class Board extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }
  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

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
