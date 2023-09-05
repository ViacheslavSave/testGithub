const crypto = (pass) => {
  const passArr = [...pass];
  const middle = Math.floor(passArr.length/2);
  const firstPart = passArr.slice(0, middle).reverse();
  const secondPart = passArr.slice(middle);
  const secondPartLength = secondPart.length;
  [secondPart[0], secondPart[secondPartLength - 1]] = [secondPart[secondPartLength - 1], secondPart[0]];
  return [...firstPart, ...secondPart].join('');
}
const check = (crypt, pass) => {
  return crypto(crypt) === pass; 
}