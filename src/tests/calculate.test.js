import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object', () => {
    expect(typeof calculate({}, 'AC')).toBe('object');
  });

  // it('should return an object with total, next and operation properties', () => {
  //   expect(calculate({}, 'AC')).toEqual({
  //     total: null,
  //     next: null,
  //     operation: null,
  //   });
  // });

  it('should add two numbers', () => {
    const obj = { total: '1', next: '2', operation: '+' };
    const expected = { total: '3', next: null, operation: null };

    expect(calculate(obj, '=')).toEqual(expected);
  });

  it('should subtract two numbers', () => {
    const obj = { total: '1', next: '2', operation: '-' };
    const expected = { total: '-1', next: null, operation: null };

    expect(calculate(obj, '=')).toEqual(expected);
  });

  it('should multiply two numbers', () => {
    const obj = { total: '1', next: '-2', operation: 'x' };
    const expected = { total: '-2', next: null, operation: null };

    expect(calculate(obj, '=')).toEqual(expected);
  });

  it('should divide two numbers', () => {
    const obj = { total: '1', next: '2', operation: '÷' };
    const expected = { total: '0.5', next: null, operation: null };

    expect(calculate(obj, '=')).toEqual(expected);
  });

  it('should find the modulo of two numbers', () => {
    const obj = { total: '1', next: '2', operation: '%' };
    const expected = { total: '1', next: null, operation: null };

    expect(calculate(obj, '=')).toEqual(expected);
  });

  it('should throw an error if the operation is unknown', () => {
    const obj = { total: '1', next: '2', operation: 'a' };
    expect(() => calculate(obj, '=')).toThrow('Unknown operation \'a\'');
  });

  it('should throw an error if the operation is division by zero', () => {
    const obj = { total: '1', next: '0', operation: '÷' };
    const expected = { total: "Can't divide by 0.", next: null, operation: null };
    expect(calculate(obj, '=')).toStrictEqual(expected);
  });

  it('should throw an error if the operation is modulo by zero', () => {
    const obj = { total: '1', next: '0', operation: '%' };
    const expected = { total: "Can't find modulo as can't divide by 0.", next: null, operation: null };
    expect(calculate(obj, '=')).toStrictEqual(expected);
  });
});
