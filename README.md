# HelloWorldUI

Provides an html5/js ui for HelloWorld app

## How to build dev image:

    docker build -t hello-world-ui-dev --target dev .

## How to run dev image

    docker run -d --publish 8080:80 --volume ./:/var/www:Z --name hello-world-ui-dev --rm hello-world-ui-dev

## Run tests from dev

    docker exec hello-world-ui-dev jest

## Upload PACTs to Broker
   
    docker exec -e PACT_BROKER_URL=$PACT_BROKER_URL hello-world-ui-dev npx pact-broker-cli publish --pactFilesOrDirs=./pact/pacts --pactBrokerToken=$PACT_BROKER_TOKEN

## CanDeploy

    docker exec -e PACT_BROKER_URL=$PACT_BROKER_URL hello-world-ui-dev npx pact-broker-cli canIDeploy --pactFilesOrDirs=./pact/pacts --pactBrokerToken=$PACT_BROKER_TOKEN --pacticipants=HelloWorldUI:<version>

## Run shell in dev

    docker exec -it hello-world-ui-dev bash

