import { describe, it, expect } from 'vitest';
import { helloworld } from './helloworld';

describe('helloworld', () => {
  it('should return "Hello, World!"', () => {
    expect(helloworld()).toBe("Hello, World!");
  });
});