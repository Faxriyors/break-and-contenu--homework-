//Uy ishi
for (let i = 1; i <= 100; i++) {
    if (i == 51) break;
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 1) continue;
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
  let son = +prompt("Son kiriting:");
  if (son === 0) break;
  console.log("Siz kiritdingiz:", son);
}