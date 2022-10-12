FROM golang:1-alpine AS build
RUN apk add --no-cache file git
WORKDIR /tmp/build
COPY ./go.mod ./go.sum ./main.go ./
RUN go run main.go && mv ./x /bin/x
ENTRYPOINT ["/bin/x"]
