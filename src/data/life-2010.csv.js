import {csvParse, csvFormat} from "d3-dsv";

async function text(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

const rows = csvParse(await text("https://datavis.cs.columbia.edu/files/data/gapminder/life-expectancy.csv"));
const filtered = rows.filter((d) => d.Year === "2010");
process.stdout.write(csvFormat(filtered));