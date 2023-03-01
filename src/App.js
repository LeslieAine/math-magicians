import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CalculatorLayout from './components/calculatorLayout';
import Nav from './components/Nav';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorLayout />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
