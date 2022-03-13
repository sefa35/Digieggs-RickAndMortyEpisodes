import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">hello world</div>
    </ApolloProvider>
  );
}

export default App;
