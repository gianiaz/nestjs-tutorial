FROM node:lts-alpine

LABEL maintainer="gianiaz@gmail.com"

USER root

 ## SSH et al
RUN apk --no-cache add \
        curl \
        git \
        sudo \
        zsh

RUN npm i -g @nestjs/cli

USER node
 ## ZSH / OhMyZsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
COPY zsh/zsh-config.sh /home/node/.zshrc
ENV TERM xterm-256color

WORKDIR /home/node/app/src
