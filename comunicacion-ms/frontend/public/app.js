const p1 = document.getElementById("msg01");
const p2 = document.getElementById("msg02");

try {
  fetch("/api/config")
    .then((res) => res.json())
    .then((res) => {
      console.log(`Request fetch to: ${res.pathBackend}`);
      fetch(res.pathBackend)
        .then((res) => res.json())
        .then((res) => {
          p1.innerHTML = res.msg01;
          p2.innerHTML = res.msg02;
        });
    });
} catch (error) {
  console.error(`Error message: ${error.message}`);
}
