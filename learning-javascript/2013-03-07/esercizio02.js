function fibonacci (n) {
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
  }
  return fibonacci[n];
}

fibonacci[0]=0;
fibonacci[1]=1;