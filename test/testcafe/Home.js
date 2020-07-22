import { Selector } from 'testcafe'

fixture `Home`

test(`Home 測試`, async t => {
  await t
    .expect(Selector('[data-cafe="testcafe-h1"]').exists).ok()
    .expect(Selector('[data-cafe="testcafe-h1"]').innerText).eql('HELLO Home')
})