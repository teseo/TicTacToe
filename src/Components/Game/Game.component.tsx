import React, { Component } from 'react';
import Board from '../Board';
import styled, {createGlobalStyle} from 'styled-components';

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
`
const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  `;   
const GameBoard = styled.div``;   
const GameInfo = styled.div`
  margin-left: 20px;
 `;   

export default class Game extends React.Component {
  render() {
    return (
      <GameContainer>
        <GlobalStyle />
        <GameBoard>
          <Board />
        </GameBoard>
        <GameInfo>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </GameInfo>
      </GameContainer>
    );
  }
}