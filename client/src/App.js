
// import {Routes, Route} from 'react-router-dom';
// // import homepage from './pages/homepage';
// // import browse from './pages/browse';
// // import postItem from './pages/postItem';
// // import viewItem from './pages/viewItem';
// // import bidScreen from './pages/bidScreen';

// const App = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path ="/" element={<homepage />} />
//                 <Route path ="/browse" element={<browse />} />
//                 <Route path ="/postItem" element={<postItem />} />
//                 <Route path ="/viewItem" element={<viewItem />} />
//                 <Route path ="/bidScreen" element={<bidScreen />} />
//             </Routes>
//         </>
//     )
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/navbar.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
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
        <Router>
          <div>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

