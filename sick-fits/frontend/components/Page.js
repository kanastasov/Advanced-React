import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const MyButton = styled.button`
  background: red;
  font-size: 100px;
  span {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click me
          <span> toot </span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
