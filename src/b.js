import dep1 from './dep1.js';

export default function b() {
  dep1();
  console.log('b');
}

b();