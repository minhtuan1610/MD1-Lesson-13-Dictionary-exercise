let engDict = ["one", "two", "three", "four", "five", "six", "seven", "eight", "night", "ten"];
let vietDict = ["một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín", "mười"];
let dict = [engDict, vietDict];

//Dung vong lap
function translateWord() {
    let inputWord = document.getElementById("inputWord").value;
    let outputWord = "";
    let result = "";
    for (let i = 0; i < dict.length; i++) {
        if (dict[i].indexOf(inputWord) !== -1) {
            outputWord = dict[1 - i][dict[i].indexOf(inputWord)];
            result += "<br>" + inputWord + " = " + outputWord;
        }
    }
    if (result == "") {
        result += "<br>" + "Lấy từ điển giấy nhé";
    }
    document.getElementById("result").innerHTML = result;
    return result;
}

//Khong dung vong lap
// function translateWord1() {
//     let inputWord1 = prompt("Enter a word");
//     let outputWord1 = "";
//     let result1 = "";
//     if (dict[0].indexOf(inputWord1) !== -1) {
//         outputWord1 = dict[1][dict[0].indexOf(inputWord1)];
//         result1 = outputWord1;
//     } else if (dict[1].indexOf(inputWord1) !== -1) {
//         outputWord1 = dict[0][dict[1].indexOf(inputWord1)];
//         result1 = outputWord1;
//     } else {
//         result1 += "Lấy từ điển giấy nhé";
//     }
//     console.log(result1);
//     return result1;
// }