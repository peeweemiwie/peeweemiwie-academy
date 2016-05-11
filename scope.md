### Scope

    var word = 'original';
    var phrase = " is the word";
    var new_word = 'changed';

    var word_changer = function (new_word) {
        var word = new_word;
        console.log(word + phrase);
    };

    var leaky_word_changer = function (new_word) {
        word = new_word;
        console.log(word + phrase);
    };

    // What is the difference between word_changer and leaky_word_changer?

    console.log(word + phrase); // ??
    console.log(new_word + phrase); // ??

    word_changer(new_word);

    console.log(word + phrase); // ??
    console.log(new_word + phrase); // ??

    // Did the console logs differ from what you expected?

    // what's about now?

    leaky_word_changer(new_word);

    console.log(word + phrase); // ??
    console.log(new_word + phrase); // ??