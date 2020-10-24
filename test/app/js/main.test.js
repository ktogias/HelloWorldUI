jest.mock('js/modules/hello-world-proxy.js', () => jest.fn()
    .mockImplementationOnce(() => jest.fn())
);

const proxy = require('js/modules/hello-world-proxy.js');

proxy.fetchMessage = jest.fn(() => { 
    return new Promise((resolve, reject) => {resolve('a message')})
});

test('displays message from proxy', () => {
    require("js/main");
    
    expect.assertions(2);
    expect(proxy.fetchMessage).toBeCalledWith({url: 'https://hwapi.test.utech.gr'});
    
    return proxy.fetchMessage().then(message => expect(document.body.innerHTML).toEqual('<div>a message</div>'));
});
