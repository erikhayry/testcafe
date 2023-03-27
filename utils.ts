import {ClientFunction} from 'testcafe';

const setCookie = ClientFunction((value) => {
    document.cookie = value;
})

export async function clearCookies() {
    await setCookie("shb-consent-cookies=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;")
}