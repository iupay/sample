import { Server } from "https://deno.land/std@0.53.0/http/server.ts";

import hello from "./hello.ts";

const { listen } = Deno;
const config = {
  port: 8000
}

const server = new Server(listen(config));

console.log(`Server is running on port: ${config.port}`);

for await (const req of server) {
  req.respond({ body: `${hello(req.url)}\n` });
}
