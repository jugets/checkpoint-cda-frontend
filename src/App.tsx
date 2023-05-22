import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Continents from './components/Continents';
import Countries from './components/Countries';
import Country from './components/Country';


function Main() {
  return (
      <BrowserRouter>
        <div>
          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="continents" element={<Continents />} />
          <Route path="continents/:continentCode" element={<Countries/>} />
          <Route path="continents/:continentCode/:countryCode" element={<Country />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
const httpLink = createHttpLink({
  uri: "https://countries.nausicaa.wilders.dev"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
