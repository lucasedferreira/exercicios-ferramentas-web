function isPalindrome() {
    var wordInput = document.getElementById('word');
    var word = wordInput.value;
    var response = document.getElementById('response');

    palindrome = word.split('').reverse().join('');

    if(word === palindrome) {
        wordInput.classList.add("is-valid");
        wordInput.classList.remove("is-invalid");

        response.classList.add("valid-feedback");
        response.classList.remove("invalid-feedback");

        response.innerHTML = 'É um palíndromo! :)';
    }else {
        wordInput.classList.add("is-invalid");
        wordInput.classList.remove("is-valid");

        response.classList.add("invalid-feedback");
        response.classList.remove("valid-feedback");

        response.innerHTML = 'Não é um palíndromo... :(';
    }
}
