import { Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorLayout from './components/calculatorLayout';
import Nav from './components/Nav';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorLayout />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
    </Routes>
  </div>
);

export default App;

// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import CalculatorLayout from './components/calculatorLayout';
// import Nav from './components/Nav';
// import Quote from './components/Quote';
// import Home from './components/Home';

// const App = () => (
//   <div className="App">
//     <Nav />
//     <Routes>
//       <Route exact path="/" component={Home} />
//       <Route path="/calculator" component={CalculatorLayout} />
//       <Route path="/quote" component={Quote} />
//     </Routes>
//   </div>
// );

// export default App;
