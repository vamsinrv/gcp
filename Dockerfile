FROM golang:1.7-alpine

ADD . /home
        
WORKDIR /home

CMD ["go","run","helloworld.go"]
