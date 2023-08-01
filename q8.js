const http = require("http");
const server = http.createServer((req, res) => {
  async function fetchGooglePage() {
    try {
      const fetch = await import("node-fetch");
      const response = await fetch.default("https://www.google.com");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      // console.log(data);
      res.end(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  fetchGooglePage();
});

server.listen(7444, () => {
  console.log("Listing on 7444");
});
