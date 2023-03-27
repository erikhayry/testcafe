import {fixture, Selector, test} from 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';
import {clearCookies} from "../utils";

fixture`TestCafe tests with Axe`
    .page`https://www.handelsbanken.se/sv/`
    .beforeEach(clearCookies)

test('Landing page should not have a11y errors', async t => {
    const { violations } = await axeCheck(t);

    await t.expect(violations.length === 0).ok(createReport(violations));
});

test('Menu page should not have a11y errors', async t => {
    const menuButton = Selector('#shb-sepu-header__menu-button');
    await t.click(menuButton)

    const { violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
});

test('Search should not have a11y errors', async t => {
    const searchInputField = Selector('#searchInHeader');
    await t.typeText(searchInputField, "Konto")

    const { violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
});
