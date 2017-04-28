
export function uniqueId() {
  return id() + id() + id();

  function id() {
    return (Math.random() * 1e9 | 0).toString('36')
  }
}

export function pick(xs) {
  return xs[Math.round(Math.random() * xs.length - 1)];
}
