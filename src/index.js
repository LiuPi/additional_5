var openBrackets = [];
var closeBrackets = [];
var stack = [];

var column = (arr, n) => arr.map(x => x[n]);

function isOpen(br){
    if ((openBrackets.indexOf(br) != -1) && (closeBrackets.indexOf(br) != -1)){
        let i = stack.length-1;
        return (stack[i] != br) || (stack[i-1] == stack[i]);
    } else {
        return openBrackets.indexOf(br) != -1;
    }
}

function isClose(br){
    return closeBrackets.indexOf(br) != -1;
}

function matching(openBr, closeBr){
    return openBrackets.indexOf(openBr) == closeBrackets.indexOf(closeBr);
}

function stackIsEmpty(arr){
    return ((arr == undefined) || (arr.length == 0));
}

module.exports = function check(str, bracketsConfig) {
    stack = [];
    openBrackets = column(bracketsConfig,0);
    closeBrackets = column(bracketsConfig,1);
    let br;

    for (i = 0; i < str.length; i++){
        br = str[i];
        if (isOpen(br)) {
            stack.push(br);
        } else if (isClose(br)){
            if (stackIsEmpty(stack) || !matching(stack.pop(),br)){
                return false;
            }
        }
    }
    return stackIsEmpty(stack);
};
