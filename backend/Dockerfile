# syntax=docker/dockerfile:1

FROM golang:1.18

RUN mkdir /app

ADD . /app

WORKDIR /app

EXPOSE 8080

RUN go build -o server.exe

CMD [ "/app/server.exe" ]