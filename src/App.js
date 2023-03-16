import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';
import './App.css';
import CalculatorLayout from './components/calculatorLayout';
import Nav from './components/Nav';
import Quote from './components/Quote';
import Home from './components/Home';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorLayout />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Nav />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/calculator" element={<CalculatorLayout />} />
//       <Route path="/quote" element={<Quote />} />
//     </Route>,
//   ),
// );

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

export default App;
