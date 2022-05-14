import { getError } from './_errors.mjs'

class Validator {
    constructor () {
    }

    getSwitchValue(name) {
        return $(`input[name=${name}]:checked`).data('code')
    }

    getCheckValue(id) {
        return $(id).is(':checked')
    }
    
    getRadioValue(id) {
        return $(id).children('input[type=radio]:checked').data('value')
    }

    requireCheckbox(id) {
        if ($(id).is(':checked')) {
            $(id).parent().removeClass('err')
        } else {
            $(id).parent().addClass('err')
        }
    }

    async requireValue(id) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if ($(id).val() == '') {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async equalValue(id, id2) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if ($(id).val() != $(id2).val()) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async minLenghtValue(id, min) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if ($(id).val().length >= min) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async maxLenghtValue(id, max) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if ($(id).val().length <= max) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async nameValue(id) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if (!/(^(([A-Za-z])+){2,}(([0-9])+)?$)|^[A-Za-z]{2}$|(^(([A-Za-z])+){1,}((([0-9])+){2,})$)/.test($(id).val()) ) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async emailValue(id) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test($(id).val()) ) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }

    async passwordValue(id) {
        $(id).siblings('.msg').remove()
        const msg = await getError(600)
        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test($(id).val()) ) {
            $(id).parent().addClass('err')
            const b = `<div class="msg">${msg}</div>`
            $(b).insertAfter(id)
        } else {
            $(id).parent().removeClass('err')
            $(id).siblings('.msg').remove()
        }
    }
}

export default Validator