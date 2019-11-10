import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// 1 add depend
import { ApolloProvider } from 'react-apollo'; 
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


// 2 call http link
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// 3 add clinet to server
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4 render 
ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
