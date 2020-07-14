import { parse } from "./parser";

const test = `select * from a join b in x.y[12]["hi"] join c as foo WHERE a.b > 1 group by a, b, c order by a * 2, b * 2 offset 10 limit 2000`;
console.log(test);
var d = Date.now();

for (let i = 0; i < 1000; i++) {
  const q = parse(test);
}

console.log(Date.now() - d);
