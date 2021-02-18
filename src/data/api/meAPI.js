export default class MeAPI {

    static ping(server) {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/ping/${server}`)
            .then(response => response.json())
    }

    static getDevice(name) {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/devices/${name}`)
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

    static geUsage(provider = "slt") {
        return fetch(`${MeAPI.SERVICE_ENDPOINT}/${provider}/0771226262`).then(res => res.json())
    }
}

MeAPI.SERVICE_ENDPOINT = "https://home.knnect.com/apis"