import { funcA } from './a';

export function funcB() {
  funcA();
  console.log('in funcB');
}

funcB()