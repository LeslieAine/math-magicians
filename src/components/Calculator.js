import '../styles/calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.innerHTML.trim()));
  };

  return (
    <div className="calculator">
      {/* <div className="calculator-display">
        {state.total}
        {state.operation}
        {state.next}
      </div> */}
      <Display result={state.next || state.total || '0'} />
      <div className="calculator-buttons">
        <button className="calculator-button" type="button" onClick={clickHandler}>AC</button>
        <button className="calculator-button" type="button" onClick={clickHandler}> +/- </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> % </button>
        <button className="calculator-button right" type="button" onClick={clickHandler}> ÷ </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 7 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 8 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 9 </button>
        <button className="calculator-button right" type="button" onClick={clickHandler}> x </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 4 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 5 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 6 </button>
        <button className="calculator-button right" type="button" onClick={clickHandler}> - </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 1 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 2 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> 3 </button>
        <button className="calculator-button right" type="button" onClick={clickHandler}> + </button>
        <button className="calculator-button" id="zero" type="button" onClick={clickHandler}> 0 </button>
        <button className="calculator-button" type="button" onClick={clickHandler}> . </button>
        <button className="calculator-button right" type="button" onClick={clickHandler}> = </button>
      </div>
    </div>
  );
}

export default Calculator;
