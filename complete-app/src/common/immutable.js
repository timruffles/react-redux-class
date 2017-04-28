


export function setImmutable(m, k, v) {
  const m2 = new Map(m);
  m2.set(k, v);
  return m2;
}
