# HelloWorldUI

Provides an html5/js ui for HelloWorld app

## Dev image

### How to build dev image:

    docker build -t hello-world-ui-dev --target dev .

### How to run dev image

    docker run -d --publish 8080:80 --volume ./:/var/www:Z --name hello-world-ui-dev --rm hello-world-ui-dev

### How to install testing nodejs dependencies on dev:
    
    docker exec hello-world-ui-dev npm i --save-dev

### View live dev in browser:

http://localhost:8080

### Run tests from dev image:

    docker exec hello-world-ui-dev jest

### Upload PACTs to Broker from dev image:
   
    docker exec -e PACT_BROKER_URL=$PACT_BROKER_URL hello-world-ui-dev npx pact-broker-cli publish --pactFilesOrDirs=./pact/pacts --pactBrokerToken=$PACT_BROKER_TOKEN --consumerVersion=<version>

### Run CanDeploy from dev image:

    docker exec -e PACT_BROKER_URL=$PACT_BROKER_URL hello-world-ui-dev npx pact-broker-cli canIDeploy --pactFilesOrDirs=./pact/pacts --pactBrokerToken=$PACT_BROKER_TOKEN --pacticipants=HelloWorldUI:<version>

### Run shell in dev:

    docker exec -it hello-world-ui-dev bash

## Test image

### How to build test image:

    docker build -t hello-world-ui-test --target test .

### How to run tests from test image

    docker run hello-world-ui-test jest

### How to run CanDeploy from test image

    docker exec -e PACT_BROKER_URL=$PACT_BROKER_URL hello-world-ui-dev npx pact-broker-cli canIDeploy --pactFilesOrDirs=./pact/pacts --pactBrokerToken=$PACT_BROKER_TOKEN --pacticipants=HelloWorldUI:<version>

### How to run test image for manual testing

    docker run --publish 8080:80 --name hello-world-ui-test --rm hello-world-ui-test

## Production image

### How to build production image:

    docker build -t hello-world-ui-prod --target prod .

### How to run production image:

    docker run --publish 8080:80 --name hello-world-ui-prod --rm hello-world-ui-prod
