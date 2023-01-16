function revWord(words, text){

    wordsArr = words.split(', ');
    
 
    wordsArr.forEach(element => {
        const match = `${'*'.repeat(element.length)}`;
        text = text.replace(match, wordsArr)


        
    });
console.log(text);





} revWord('great',
'softuni is ***** place for learning new programming languages');