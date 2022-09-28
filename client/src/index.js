import React from 'react';
import ReactDOM from 'react-dom';
import { AlertProvider} from './Alert/AlertContext';

import App from './App';

ReactDOM.render(<AlertProvider> <App /> </AlertProvider>, document.getElementById('root'));
