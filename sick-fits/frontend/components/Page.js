import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const MyButton = styled.button`
  background: red;
  font-size: ${(props) => (props.huge ? '100px' : '50px')};
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
        <MyButton huge>
          Click me
          <span> toot </span>
        </MyButton>

        <MyButton>
          Click me2
          <span> toot2 </span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
