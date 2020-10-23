const name = 'helloWorldProxy';

async function fetchMessage(param){
    const url = param.url;
    let response = await fetch(url+'/message', {headers: {
          Accept:   "application/json"
    }});
    let data = await response.json();
    return data.message;
}

export {name, fetchMessage};
