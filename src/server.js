import http from "http";
import url from "url";

const app = http.createServer((req, res) => {

  console.log(url);
  res.end("sercer is alive!");
});

app.listen(3000);
