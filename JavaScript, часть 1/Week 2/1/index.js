/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
 return findHash(tweet);
};

  /*  let arr = [];
    let tagPosition;
    let spacePosition;

    tagPosition = tweet.indexOf('#');
    tweet = tweet.slice(tagPosition);
    spacePosition = tweet.indexOf(' ');
    arr.push(tweet.slice(1, spacePosition));

    console.log(arr);
    */

    function findHash(input){
        let out = [], 
            iOfHash = input.indexOf("#"),
            iOfSpace;
        while(iOfHash != -1){
            input = input.slice(iOfHash);
            iOfSpace = input.indexOf(" ");
            iOfSpace = iOfSpace != -1 ? iOfSpace : (input.length);
            if(input.length<2)break;
            if(input[1]==' ')break;
            out.push(input.slice(1,iOfSpace));
            input = input.slice(iOfSpace);
            iOfHash = input.indexOf("#");
        }
        return out;
    }

    function anotherFindHash(input){
        let output = new Set;
        input = input.split(" ");
        for(let i of input){
            if((i[0]=='#') && (i.length>1)) output.add(i.slice(1).toLowerCase());
        }
        return ([...output]).join(", ");
    }

    function another(tweet){
        var words = tweet.split(' ');

        // Заводим переменную под найденные хэштеги
        var hashtags = [];

        // Итерируемся по словам из твита
        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            // Проверяем, является ли слово хэштегом
            // Для этого смотрит на первый символ, у хэштега он должен быть решеткой
            if (word[0] === '#') {
                // Избавляемся от решетки в хэштеге.
                // Копируем строку, начиная со второго символа и до конца
                var hashtag = word.slice(1);

                // Сохраняем хэштег
                hashtags.push(hashtag);
            }
        }

        // Возвращаем результат из функции
        return hashtags;
    }

let text = "#dede #dde #dede #dde";
console.log(another(text),findHash(text),anotherFindHash(text));
let s = new Set;
s.add("wdwd");
s.add("wdwdwddw");
s.add("euuuu");
s.add("jjjej");
console.log([...s]);



// find # -> "eded ededed ede #deded ededed #dxd"
// delete all before finded # -> "#deded ededed #dxd"
// find # ->" ededed #dxd"
// delete all before finded # -> "#dxd"
// deded dxd