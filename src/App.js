import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import DemucsMain from './Components/DemucsMain';

import { ApolloClient, InMemoryCache, ApolloProvider,  HttpLink, from } from '@apollo/client';

const link = from (
  [
    //errorLink,
    new HttpLink({uri: 'http://localhost:5000/graphql'})
  ]
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  fetchOptions: {
    mode: 'no-cors',
  },
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label>
          DEMUCS WebApp
        </label>
      </header>
      <ApolloProvider client={client}>
        <DemucsMain />
      </ApolloProvider>
    </div>
  );
}

export default App;
