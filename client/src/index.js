import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';


axios.get(`http://localhost:5000/api/theme/1`)
    .then(result => {
      ReactDOM.render(
        <ThemeProvider theme={result.data}>
          <App />
        </ThemeProvider>,
        document.getElementById('root')
      );
    });


