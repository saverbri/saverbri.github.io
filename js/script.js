console.log('JavaScript is running!');

const loveMessageElement = document.getElementById('love-message');

const languages = [
  { code: 'ru', translation: 'Полина, я люблю тебя!' },
  { code: 'en', translation: 'Polina, I love you!' },
  { code: 'fr', translation: 'Polina, je t\'aime!' },
  { code: 'es', translation: 'Polina, te quiero!' },
  // Add more languages here...
  { code: 'de', translation: 'Polina, ich liebe dich!' },
  { code: 'it', translation: 'Polina, ti amo!' },
  { code: 'pt', translation: 'Polina, eu amo você!' },
  { code: 'zh', translation: 'Polina, ' },
  { code: 'ja', translation: 'Polina, ' },
  // ...
];

console.log('Languages array:', languages);

function generateLoveMessage() {
  console.log('Generating love message...');
  let loveMessage = '';
  languages.forEach((language) => {
    loveMessage += `<p>${language.translation} (${language.code})</p>`;
  });
  loveMessageElement.innerHTML = loveMessage;
  console.log('Love message generated!');
}

generateLoveMessage();