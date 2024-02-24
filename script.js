function checkBtn() {
    var textBox = document.getElementById('textBox');
    var text = textBox.value.toLowerCase();

    var vowelCount = 0;
    for (var i = 0; i < text.length; i++) {
        if (isVowel(text[i])) {
            vowelCount++;
        }
    }
    alert('Number of vowels: ' + vowelCount);
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
    }

}