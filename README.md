# HelloWorldUI

Provides an html5/js ui for HelloWorld app

## How to build dev image:

    docker build -t hello-world-ui-dev --target dev .

## How to run dev image

    docker run -d --publish 8080:80 --volume ./:/var/www:Z --name hello-world-ui-dev --rm hello-world-ui-dev

## Run tests from dev

    docker exec hello-world-ui-dev jest

## Run shell in dev

    docker exec -it hello-world-ui-dev bash

