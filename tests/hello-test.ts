import { Selector } from 'testcafe';

fixture('What up?')
  .page('https://www.s4rb.com');

  test('I dunno, something exists maybe?', async (t) => {
    await t.expect(Selector('#nav-menu-item-3106').textContent).contains('How we can help');
  });
