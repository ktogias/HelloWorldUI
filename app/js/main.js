import * as proxy from './modules/hello-world-proxy.js';

proxy.fetchMessage().then((message) => {document.body.innerHTML = '<div>'+message+'</div>';});


