const inputWord = document.querySelector('#inputWord');
const inputButton = document.querySelector('#inputButton');
const titleWord = document.querySelector('[data-title]');
const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const contentWrapper = document.querySelector('.content-wrapper')

function debug(e) {
    console.log(`${e}`)
}


const fetchWord = async() => {
    const word = await fetch(`${apiURL}${inputWord.value}`);
    const wordData = await word.json();

    console.log(wordData);
    
    
    for(let i = 0; i < Array.from(wordData[0].meanings).length; i++) {
        console.log(i);
        
        const resultWrapper = document.createElement('div');
        resultWrapper.classList.add('result-wrapper');
        contentWrapper.appendChild(resultWrapper);
        
        const titleWord = document.createElement('h2');
        titleWord.dataset.title = '';
        titleWord.innerText = wordData[0].word;
        resultWrapper.appendChild(titleWord);

        const typeOfWordPhoneticWrapper = document.createElement('div');
        typeOfWordPhoneticWrapper.classList.add('sub-word');
        resultWrapper.appendChild(typeOfWordPhoneticWrapper);

        const typeOfWord = document.createElement('p');
        typeOfWord.dataset.wordType = 'type';
        typeOfWordPhoneticWrapper.appendChild(typeOfWord);
        typeOfWord.innerText = wordData[0].meanings[i].partOfSpeech

        const phonetic = document.createElement('p');
        phonetic.dataset.wordType = 'phonetic';
        typeOfWordPhoneticWrapper.appendChild(phonetic);
        phonetic.innerText = wordData[0].phonetic;


        

        
        

    }
}

function teste() {
    // The container
    const resultWrapper = document.createElement('div');
    resultWrapper.classList.add('result-wrapper');

    // Title
    const titleWord = document.createElement('h2');
    titleWord.dataset.title = '';
    titleWord.innerText = 'teste'

    // Type of word and phonetic + wrapper
    const typeOfWordPhoneticWrapper = document.createElement('div');
    typeOfWordPhoneticWrapper.classList.add('sub-word');

    const typeOfWord = document.createElement('p');
    typeOfWord.dataset.wordType = 'type';

    const phonetic = document.createElement('p');
    phonetic.dataset.wordType = 'phonetic';

    // Examples wrapper

    // Actual examples


    // Appending
    contentWrapper.appendChild(resultWrapper);
    resultWrapper.appendChild(titleWord);
    resultWrapper.appendChild(typeOfWordPhoneticWrapper);
    typeOfWordPhoneticWrapper.appendChild(typeOfWord);
    typeOfWordPhoneticWrapper.appendChild(phonetic);
    debug(resultWrapper)
}

inputButton.addEventListener('click', () => {
    if(!inputWord.value) return;

    document.querySelectorAll('.result-wrapper').forEach(item => item.remove())
    
    fetchWord();
})

/* Theme */

const darkThemeBtn = Array.from(document.querySelectorAll('[data-darkTheme]'));
const lightThemeBtn = Array.from(document.querySelectorAll('[data-lightTheme]'));
const themeContainer = document.querySelector('.theme-icon');




