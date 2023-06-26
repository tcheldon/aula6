// programa que mostre todos os números primos de 0 a 100.

function primo(n) {
  let divisores = 0;
  for (let i = 0; i <= 100; i++) {
    if (n % i === 0) {
      divisores++;
    }
  }
  if (divisores === 2) {
    return true;
  } else {
    return false;
  }
}

for ( i = 1; i <= 100; i++) {
  if (primo(i)) {
    console.log(i);
  }
}