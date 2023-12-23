const url = "https://www.boredapi.com/api/activity/";
const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       const data = json;
//       console.log(data);
//       getActivity(data);
//       return data;
//     })
//     .catch((error) => console.log(error));
// });
// console.log(data);

function getActivity(data) {
  const divEl = document.createElement("div");
  divEl.textContent = data.activity;
  document.body.appendChild(divEl);
}

async function getActiv(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(res);
  console.log(data);
  return data;
}

btn.addEventListener("click", async () => {
  try {
    const data = await getActiv(url);
    console.log(data);
    getActivity(data);
  } catch (error) {
    console.log(error);
  }
});
