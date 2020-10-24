import * as proxy from './modules/hello-world-proxy.js';

proxy.fetchMessage({url:'https://hwapi.ms.ktogias.gr'})
    .then((message) => {document.body.innerHTML = '<div>'+message+'</div>';})
    .catch((error) => {
        document.body.innerHTML = '<div>Could not fetch message. Please try again.</div>';
    });


