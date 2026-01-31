const { test, expect } = require('@playwright/test');

const testData = {
  positive: [
    { id: 'Pos_Fun_0001', input: 'mama town yanavaa.', expected: 'මම town යනවා.' },
    { id: 'Pos_Fun_0002', input: 'ehenam api yamu.', expected: 'එහෙනම් අපි යමු.' },
    { id: 'Pos_Fun_0003', input: 'vaessa unath api yanna epaeyi.', expected: 'වැස්ස උනත් අපි යන්න එපැයි.' },
    { id: 'Pos_Fun_0004', input: 'oyaata kohomadha?', expected: 'ඔයාට කොහොමද?' },
    { id: 'Pos_Fun_0005', input: 'vahaama enna.', expected: 'වහාම එන්න.' },
    { id: 'Pos_Fun_0006', input: 'mama ehema karanavaa.', expected: 'මම එහෙම කරනවා.' },
    { id: 'Pos_Fun_0007', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඊයේ ගෙදර ගියා.' },
    { id: 'Pos_Fun_0008', input: 'mama adha udheema town ekata giyaa kadeen badu ganna kiyala hithala. ethakota mama dhaekka magee yaluvek para ayinee innava. api dhennama eka Laga kadekata gihilla thea ekak bivvaa. iita passe mama thava poddak town ekee ravumak dhaala adhum balanna kadeekata giyaa. ethana godak senaGA hitiya nisa mama gedhara aava . ', expected: 'මම අද උදේම town එකට ගියා කඩේන් බඩු ගන්න කියල හිතල. එතකොට මම දැක්ක මගේ යලුවෙක් පර අයිනේ ඉන්නව. අපි දෙන්නම එක ළග කඩෙකට ගිහිල්ල තේ එකක් බිව්වා. ඊට පස්සෙ මම තව පොඩ්ඩක් town එකේ රවුමක් දාල අදුම් බලන්න කඩේකට ගියා. එතන ගොඩක් සෙනඟ හිටිය නිස මම ගෙදර ආව . ' },
    { id: 'Pos_Fun_0009', input: 'mama dhannee naee.', expected: 'මම දන්නේ නෑ.' },
    { id: 'Pos_Fun_0010', input: 'api yamu.', expected: 'අපි යමු.' },
    { id: 'Pos_Fun_0011', input: 'suba udhaeesanak!', expected: 'සුබ උදෑසනක්!' },
    { id: 'Pos_Fun_0012', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0013', input: 'ela machan! supiri!!', expected: 'එළ මචන්! සුපිරි!!' },
    { id: 'Pos_Fun_0014', input: 'Zoom meeting ekak thiyennee.', expected: 'Zoom meeting එකක් තියෙන්නේ.' },
    { id: 'Pos_Fun_0015', input: 'siiyaa Colombo yanna hadhannee.', expected: 'සීය Colombo යන්න හදන්නේ.' },
    { id: 'Pos_Fun_0016', input: 'mama gedhara yanavaa saha passe chithrapatayakuth balanavaa.', expected: 'මම ගෙදර යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා.' },
    { id: 'Pos_Fun_0017', input: 'tika tika', expected: 'ටික ටික' },
    { id: 'Pos_Fun_0018', input: 'Rs. 5343', expected: 'Rs. 5343' },
    { id: 'Pos_Fun_0019', input: '2026-05-21', expected: '2026-05-21' },
    { id: 'Pos_Fun_0020', input: 'mama gedhara yanavaa. oyaa enavadha?', expected: 'මම ගෙදර යනවා. ඔයා එනවාද?' },
    { id: 'Pos_Fun_0021', input: 'ID, NIC', expected: 'ID, NIC' },
    { id: 'Pos_Fun_0022', input: 'oya enavaanam mama balan innavaa', expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා' },
    { id: 'Pos_Fun_0023', input: 'dhitvaa suLi kuNaatuva', expected: 'දිට්වා සුළි කුණාටුව' },
    { id: 'Pos_Fun_0024', input: 'Documents tika attach karalaa mata email ekak evanna', expected: 'Documents ටික attach කරලා මට email එකක් එවන්න' },
    { id: 'Pos_UI_0001',  input: 'man gedhara yanavaa', expected: 'මන් ගෙදර යනවා' }
  ],
  negative: [
    { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_0002', input: 'matapaankannaoonee', expected: 'මට පාන් කන්න ඕනේ' },
    { id: 'Neg_Fun_0003', input: 'api meeting ekatath @ 5pm ASAP set vemu, k? thx.', expected: 'අපි meeting එකටත් @ 5pm ASAP සෙට් වෙමු, k? තෑන්ක්ස්.' },
    { id: 'Neg_Fun_0004', input: 'ado vaedak baaragaththaanam eeka hariyata karapanko bQQ.', expected: 'අඩො වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.' },
    { id: 'Neg_Fun_0005', input: 'mmaa gdhra ynnaaa', expected: 'මම ගෙදර යන්නැ' },
    { id: 'Neg_Fun_0006', input: 'Ai oyata mama kiyana ewa therenne naththe...', expected: 'ඇයි ඔයාට මම කියන ඒවා තේරෙන්නෙ නෑත්තේ...' },
    { id: 'Neg_Fun_0007', input: 'sssuuuuupppppiiiiirrrrrriiiii', expected: 'සූපීරී' },
    { id: 'Neg_Fun_0008', input: '1000kg k saha 500ml k', expected: '1000kg ක් සහ 500ml ක්' },
    { id: 'Neg_Fun_0009', input: 'mama      yanavaa', expected: 'මම යනවා' },
    { id: 'Neg_Fun_0010', input: 'kema kala itapasse api film ekak balanna yamuda kiyala hithuwa.', expected: 'කෑම කාල ඊටපස්සෙ අපි ෆිල්ම් එකක් බලන්න යමුද කියල හිතුව.' }
  ]
};

test.describe('Transliteration Project Testing', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto('/'); 
  });

  // RUN POSITIVE TESTS
  for (const tc of testData.positive) {
    test(`POSITIVE: ${tc.id}`, async ({ page }) => {
      const inputLocator = page.locator('#input-box');
      const outputLocator = page.locator('#output-box');

      // Ensure the input is clean before starting
      await inputLocator.clear();
      
      // Using pressSequentially simulates real human typing which 
      // is often required to trigger "onChange" events in React apps.
      await inputLocator.pressSequentially(tc.input, { delay: 30 });

      // Check the output; .trim() is used to ignore accidental trailing spaces.
      // timeout is set to 5 seconds to allow the engine to process.
      await expect(outputLocator).toHaveText(tc.expected.trim(), { timeout: 5000 });
    });
  }

  // RUN NEGATIVE TESTS
  for (const tc of testData.negative) {
    test(`NEGATIVE: ${tc.id}`, async ({ page }) => {
      const inputLocator = page.locator('#input-box');
      const outputLocator = page.locator('#output-box');

      await inputLocator.clear();
      await inputLocator.fill(tc.input);

      // These tests are designed to FAIL based on the "Actual output" recorded 
      // in your test cases document.
      await expect(outputLocator).toHaveText(tc.expected, { timeout: 3000 });
    });
  }
});