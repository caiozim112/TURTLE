import React from 'react';
import { Provider } from 'react-redux';

// import Home from './pages/Home';
import configureStore from './store';
import SentryBoundary from './utils/SentryBoundary';
import LoginForm from "./app/example-app/components/loginForm";
const store = configureStore({});
const App = () => (
  <SentryBoundary>
    <Provider store={store}>
      {/* <Home/> */}
      <LoginForm/>
    </Provider>
  </SentryBoundary>
);

export default App;



// import LoginForm from "./app/example-app/components/loginForm";

// export function App() {
//   return (
//     <>
//       <LoginForm></LoginForm>
//     </>
//   );
// }

// export default App;