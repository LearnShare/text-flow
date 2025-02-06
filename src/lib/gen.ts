// generate number 200-1000
export function gen() {
  const x = Math.random();
  const y = x * 800 + 200;

  return Math.round(y);
}

// generate line
export function genLine() {
  const x = Math.random();
  const y = Math.round(x * 8 + 2);

  const list = [];
  for (let i = 0; i < y; i++) {
    list.push(gen());
  }

  return list.join(' ') + ' ';
}

// generate lines
export function genLines() {
  const x = Math.random();
  const y = Math.round(x * 8 + 2);

  const list = [];
  for (let i = 0; i < y; i++) {
    list.push(genLine());
  }

  return list.join('\n');
}
