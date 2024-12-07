import { Selector } from 'testcafe';

fixture('Native automation issues demo')
  .page('https://www.google.com/finance/quote/GOOGL:NASDAQ');

test('Example', async t => {
  console.log(`Native automation: ${(t.browser.nativeAutomation)}`);

  const btn = Selector('button').withText('Accept all');
  await t.click(btn);

  console.log('## 1st wait ##');
  await t.wait(2000);

  console.log('## Navigate to new URL ##');
  await t.navigateTo('https://www.google.com/finance/quote/AAPL:NASDAQ');
  // Test will hang here

  console.log('## 2nd wait ##');
  await t.wait(2000);

  console.log('## Reload page ##');
  await t.eval(() => location.reload(true));
  // Test will hang here

  console.log('## End of test ##');
});