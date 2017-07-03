import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = () =>
  <div>
    {Routes}
    <footer>
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
    </footer>
  </div>;

export default App;
