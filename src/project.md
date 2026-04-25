---
title: Project Sketches
---

<details>
  <summary>The goat</summary>

  ![Jordan](./data/jordan.jpg)

</details>

<div class="grid grid-cols-3">
  <div class="card muted">A</div>
  <div class="card yellow">B</div>
  <div class="card blue">C</div>
  <div class="card green grid-colspan-3">D</div>
  <div class="card red">E</div>
  <div class="card muted">F</div>
  <div class="card yellow">G</div>
</div>

```js
const words = "The history of rocket launches dates back to ancient China where gunpowder filled tubes were used as primitive forms of propulsion fast forward to the 20th century during the Cold War era the United States and the Soviet Union embarked on a space race".split(" ")
```

```js
const n = view(Inputs.range([1, words.length], {step: 1, label: "Number of words"}))
```

```js
display(words.slice(0, n).join(" "))
```

```js
const zip = FileAttachment("data/gapminder.zip").zip();
```

```js
zip.filenames
```

```js
const continents = zip.file("gapminder/continents.csv").csv({typed: true});
```

```js
Inputs.table(continents)
```

```js
html`<ul>${continents.map((d) => html`<li>${d.Entity}</li>`)}</ul>`
```

```js
const life2010 = FileAttachment("data/life-2010.csv").csv({typed: true});
```

```js
Inputs.table(life2010)
```

```js
const gdp2010 = FileAttachment("data/gdp-2010.csv").csv({typed: true});
```

```js
Inputs.table(gdp2010)
```

```js
const gdpByCode = new Map(gdp2010.map((d) => [d.Code, d["GDP per capita"]]));
const points = life2010
  .map((d) => ({life: d["Life expectancy"], gdp: gdpByCode.get(d.Code)}))
  .filter((d) => d.gdp);
```

```js
const color = view(Inputs.radio(["steelblue", "tomato", "seagreen"], {value: "steelblue"}));
```

```js
Plot.plot({
  x: {type: "log", domain: d3.extent(points, (d) => d.gdp)},
  y: {type: "linear", domain: d3.extent(points, (d) => d.life)},
  marks: [Plot.dot(points, {x: "gdp", y: "life", fill: color})]
})
```