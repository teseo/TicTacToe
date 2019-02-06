import React, { Component } from "react";

import styled, { css } from "styled-components";

type MyProps = {
  value: number;
};
const SquareContainer = styled.div`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  ${css`
    &:focus {
      outline: none;
    }
  `}
`;

export default class Square extends React.Component<MyProps> {
  render() {
    return <SquareContainer> {this.props.value}</SquareContainer>;
  }
}
