import {ClientFunction} from 'testcafe';

const setCookie = ClientFunction((value) => {
    document.cookie = value;
})

export const getTitle = ClientFunction(() => {
    return document.title;
})

export const getURL = () => ClientFunction(() => window.location.href)();

export async function clearCookies() {
    await setCookie("shb-consent-cookies=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;")
}

export const testId = (id: string):string => `[data-test-id]="${id}"`;