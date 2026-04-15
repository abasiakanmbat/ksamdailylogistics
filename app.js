import { createServer } from "http";
import next from "next";

const dev = "production" !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});