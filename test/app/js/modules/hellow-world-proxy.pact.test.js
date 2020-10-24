"use strict"

global.fetch = require("node-fetch");

const {pactWith} = require("jest-pact")
const {Matchers} = require("@pact-foundation/pact")

const {fetchMessage} = require('js/modules/hello-world-proxy.js')

pactWith({consumer: "HelloWorldUI", provider: "HelloWorldApiGateway"}, provider => {
    describe("Get Message", () => {
        const successResponse = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                message: 'Hello World'
            }
        };

        const request = {
            uponReceiving: "a request for message",
            withRequest: {
                method: "GET",
                path: "/message",
                headers: {
                    Accept: "application/json"
                }
            }
        };

        beforeEach(() => {
            const interaction = {
                state: "i can return message",
                ...request,
                willRespondWith: successResponse
            };
            return provider.addInteraction(interaction);
        });

        // add expectations
        it("returns a successful body", () => {
            return fetchMessage({
                url: provider.mockService.baseUrl
            }).then(reply => {
                expect(reply).toEqual('Hello World');
            });
        });
    });
});