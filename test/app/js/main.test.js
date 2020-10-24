beforeEach(() => {
    jest.resetModules();
});

test('displays message from proxy', async () => {
    jest.mock('js/modules/hello-world-proxy.js', () => jest.fn()
        .mockImplementationOnce(() => jest.fn())
    );
    
    const proxy = require('js/modules/hello-world-proxy.js');
    
    proxy.fetchMessage = jest.fn(() => { 
        return new Promise((resolve, reject) => {resolve('a message');});
    });
    
    require("js/main");
    
    await expect.assertions(2);
    await expect(proxy.fetchMessage).toBeCalledWith(expect.objectContaining({url: expect.anything()}));
    
    return await proxy.fetchMessage().then(message => expect(document.body.innerHTML).toEqual('<div>a message</div>'));
});


test('displays error message on proxy error', async () => {
    jest.mock('js/modules/hello-world-proxy.js', () => jest.fn()
        .mockImplementationOnce(() => jest.fn())
    );
    
    const proxy = require('js/modules/hello-world-proxy.js');
    
    proxy.fetchMessage = jest.fn(() => { 
        return new Promise((resolve, reject) => {reject('an error');});
    });
    
    require("js/main");
    
    await expect.assertions(2);
    await expect(proxy.fetchMessage).toBeCalledWith(expect.objectContaining({url: expect.anything()}));
    
    return await proxy.fetchMessage().catch(error => expect(document.body.innerHTML).toContain('try again'));
});
