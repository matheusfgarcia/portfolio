
import { select } from 'redux-saga/effects'
import './App.css'
import { CardPage as Card } from './components/card';
import { ButtonPage as Button } from './components/button';
import ProfilePicture from './components/profilePicture';
import Main from './components/main'
import { getCardState } from './selectors/card'

function App() {

  return (
    <Main className="main">
      <Card></Card>
    </Main>
  );
}

export default App;
