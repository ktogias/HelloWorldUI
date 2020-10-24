import * as proxy from './modules/hello-world-proxy.js';

proxy.fetchMessage({url:'https://hwapi.test.utech.gr'}).then((message) => {document.body.innerHTML = '<div>'+message+'</div>';});


