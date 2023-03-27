import {fixture, test} from 'testcafe';

import { axeCheck, createReport } from 'axe-testcafe';
import {clearCookies} from "../utils";

fixture`TestCafe tests with Axe`
    .page`https://www.handelsbanken.se/sv/hitta-bankkontor/alingsas`
    .beforeEach(clearCookies)

test('Branch page should not have a11y errors', async t => {
    const { violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
});