const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const formatDate = (date) => {
    const value = new Date(date)
    const format = `${("0" + value.getDate()).slice(-2)} ${value.toLocaleDateString(`${getCookie('lang')}`, { month: 'long' })} ${value.getFullYear()}`
    return format
}

const formatTime = (date) => {
    const value = new Date(date)
    const format = `${("0" + value.getHours()).slice(-2)}:${("0" + value.getMinutes()).slice(-2)}`

    return format
}


export { getCookie, formatDate, formatTime }