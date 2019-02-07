import React, { Component } from "react";
import Board, { BoardType } from "../Board";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: normal;
    font-family: 'Century Gothic', Futura, sans-serif;
    src: url("./fonts/CenturyGothic.ttf");
    margin: 20;
  }
`;
const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
const GameBoard = styled.div``;
const GameInfo = styled.div`
  margin-left: 20px;
`;
type MyProps = {};
type MyState = {
  history: BoardType[];
  xIsNext: boolean;
};
export default class Game extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true
    };
  }
  handleClick(i: number) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      xIsNext: !this.state.xIsNext
    });
  }
  calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <GameContainer>
        <GlobalStyle />
        <GameBoard>
          <Board
            status={status}
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </GameBoard>
        <GameInfo>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </GameInfo>
      </GameContainer>
    );
  }
}
