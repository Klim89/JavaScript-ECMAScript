const demoKey = "LUMpRy1Nkzi6tEdKwJtL51uYbPoJtFjbDUmxaEDF";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=" + demoKey + "&count=10";

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

try {
  const data = await getData(url);
  const body = document.querySelector("body");
  data.forEach((element) => {
    body.insertAdjacentHTML(
      "beforeend",
      `<figure>
    <img src="${element.url}" alt="pic">
    <figcaption>${element.explanation}</figcaption>
    </figure>
    `
    );
  });

  console.log(data);
} catch (error) {
  console.log("no connect");
}
