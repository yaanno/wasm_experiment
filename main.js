const rust = import("./pkg");

const app = document.getElementById("app");

rust
  .then(async (m) => {
    const data = await m.run();
      app.innerHTML = JSON.stringify(data);
  })
  .catch(console.error);
