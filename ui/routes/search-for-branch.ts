import {clearCookies, getTitle, getURL, testId} from "../../utils";
import {fixture, Selector, test} from 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';

fixture`Route - search for branch`
    .page`https://www.handelsbanken.se/sv/`
    .beforeEach(clearCookies)

test('Landing page should not have a11y errors', async t => {
    const errors: Record<string, any> = {}

    errors['initial'] = (await axeCheck(t)).violations;

    const searchInputField = Selector('#searchInHeader');
    await t.typeText(searchInputField, "Bromma")
    const searchButton = Selector('[data-test-id="shb-sepu-search__field__submit-button"]');
    await t.click(searchButton)
    await t.wait(3000)
    errors['search page'] = (await axeCheck(t)).violations;

    const link = Selector("[href=\"https://www.handelsbanken.se/sv/hitta-bankkontor/brommaplan\"]");
    await t.click(link)
    await t.wait(3000)
    errors['branch page'] = (await axeCheck(t)).violations;

    await t.expect(false).ok(JSON.stringify(errors));
});