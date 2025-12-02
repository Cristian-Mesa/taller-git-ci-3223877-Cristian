import test from 'node:test';
import assert from 'node:assert/strict';
import { suma } from '../src/app.js';

test('suma debe retornar 3 cuando a=1 y b=2', () => {
  assert.equal(suma(1, 2), 3);
});

test('suma con números negativos', () => {
  assert.equal(suma(-1, -2), -3);
});