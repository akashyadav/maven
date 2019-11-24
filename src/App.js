import React from 'react';
import './App.css';
import {UserCard} from './components/card/usercard';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <UserCard />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
