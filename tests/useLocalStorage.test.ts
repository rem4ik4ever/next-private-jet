import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../lib/useLocalStorage';

// Clear localStorage before each test
beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('useLocalStorage', () => {
  it('should initialize with initial value when no stored value exists', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    const [value, , hydrated] = result.current;
    
    expect(value).toBe('initial');
    expect(hydrated).toBe(true);
  });

  it('should initialize from localStorage when valid data exists', () => {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    const [value, , hydrated] = result.current;
    
    expect(value).toBe('stored-value');
    expect(hydrated).toBe(true);
  });

  it('should reset to initial value when localStorage contains corrupted JSON', () => {
    localStorage.setItem('test-key', 'invalid-json');
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    const [value, , hydrated] = result.current;
    
    expect(value).toBe('initial');
    expect(hydrated).toBe(true);
    // Should write back the corrected value
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('initial'));
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    
    act(() => {
      const setValue = result.current[1];
      setValue('updated-value');
    });
    
    const [value] = result.current;
    expect(value).toBe('updated-value');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated-value'));
  });

  it('should handle complex objects', () => {
    const initialObj = { todos: [], theme: 'light' };
    const { result } = renderHook(() => useLocalStorage('test-key', initialObj));
    
    act(() => {
      const setValue = result.current[1];
      setValue({ todos: ['item1'], theme: 'dark' });
    });
    
    const [value] = result.current;
    expect(value).toEqual({ todos: ['item1'], theme: 'dark' });
    expect(JSON.parse(localStorage.getItem('test-key') || '')).toEqual({
      todos: ['item1'],
      theme: 'dark',
    });
  });

  it('should maintain hydration state correctly', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
    
    // Initially should be loading
    expect(result.current[2]).toBe(true); // hydrated should be true after mount
  });
});