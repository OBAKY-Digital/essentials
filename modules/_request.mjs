class Request {
    async publicGET (url) {
        return fetch(url, {
            method: 'GET',
        }).then(response => response.json())
        .catch(error => console.log(error))
    }
    
    async userGET (url) {
        return fetch(url, {
            method: 'GET',
            headers: {authorization: 'Bearer ' + getCookie('access')}
        }).then(response => response.json())
        .catch(error => console.log(error))
    }
    
    async publicPOST(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .catch(error => console.log(error))
    }
    
    async userPOST(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + getCookie('access')
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .catch(error => console.log(error))
    }
    
    async userImgPost(url, fd) {
        return fetch(url, {
            method: "POST",
            headers: {
                "authorization": "Bearer " + getCookie('access')
            },
            body: fd
        }).then(response => response.json())
    }
}

export default Request