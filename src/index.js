import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistory from './auth/AuthHistory';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Auth0ProviderWithHistory>        
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    
    document.getElementById('root'),
);
//ReactDOM.render(<App />, document.getElementById('root'));
