export default class MeAPI {

    static ping(server) {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/ping/${server}`)
            .then(response => response.json())
    }

    static wakeOnLan(server) {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/operations/${server}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operation: 'wakeonlan'
            })
        })
            .then(response => response.json())

    }
    static powerOff(server) {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/operations/${server}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                operation: 'poweroff'
            })
        })
            .then(response => response.json())

    }
}

MeAPI.SERVICE_ENDPOINT = "https://api.home.knnect.com/apis"