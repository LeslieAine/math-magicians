import operate from '../logic/operate';

describe('operate', () => {
  it('should correctly add two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('should correctly subtract two numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  it('should correctly multiply two numbers', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  it('should correctly divide two numbers', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  it('should correctly find the modulo of two numbers', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });

  it('should throw an error if the operation is unknown', () => {
    expect(() => operate(1, 2, 'a')).toThrow('Unknown operation \'a\'');
  });

  it('should throw an error if the operation is division by zero', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should throw an error if the operation is modulo by zero', () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
