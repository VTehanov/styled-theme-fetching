import React, { Component } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.6em;
  border: 1px solid ${props => props.theme.main};
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.secondary};
  font-weight: 700;
  font-size: 1.4em;
  border-radius: ${props => props.theme.borderRadius};
`;

const Input = styled.input`
  padding: 1em;
  margin-bottom: 1em;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <h2>Choose a different theme:</h2>
        <Input />
        <Button>Change theme</Button>
      </StyledApp>
    );
  }
}

export default App;
