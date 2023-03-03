import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./components/Books";
import Abook from "./components/Abook";
import Addbook from "./components/Addbook";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/books">
                <Books />
              </Route>
              <Route exact path="/abook/:id">
                <Abook />
              </Route>
              <Route exact path="/addbook">
                <Addbook />
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
