FROM hayd/alpine-deno:1.0.2

EXPOSE 8000

WORKDIR /opt/app

USER deno

ADD . .

RUN deno cache index.ts

CMD ["run", "--allow-net", "--allow-read", "index.ts"]
