function revealWord(words, text){

    text = ` ${text} `;
    
    
    let wordsArray = words.split(', ');
    
    wordsArray.forEach(word => {
        const match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `);
    });
    
    console.log(text.trim());
    











} revealWord('great, learning',
'softuni is ***** place for ******** new programming languages');