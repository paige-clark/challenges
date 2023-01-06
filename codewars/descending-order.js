function descendingOrder(n) {
  return Number(
    [...n.toString()]
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}

console.log(descendingOrder(42145));
