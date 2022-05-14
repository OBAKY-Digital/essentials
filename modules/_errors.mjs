import { getCookie } from './_vars.mjs'

const getError = async (code) => {
    const lang = getCookie('lang')
    let localesFile = ''
    if (lang == 'en') {
        localesFile = await fetch('/errors/errors_en.json')
    } else if (lang == 'fr') {
        localesFile = await fetch('/errors/errors_fr.json')
    } else {
        localesFile = await fetch('/errors/errors_en.json')
    }
    const data = await localesFile.json()
    return data.find(el => el.code === code).message
}

export { getError }