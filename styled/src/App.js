import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './GlobalStyles';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <h1>Hello World</h1>
        <Button onClick={() => themeToggler()}>Change Theme</Button>
      </div>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  font-family: Helvetica;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
  transition: 0.2s;

  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};
  }
`;

export default App;
