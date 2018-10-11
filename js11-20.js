function tester() {

    endOther("Hiabc", "abcd");


}

function firstLast6(arr){
    var num = arr.length - 1;
    if(arr[0] == 6 || arr[num] == 6){
        return true;
    }else{
        return false;
    }
}

function has23(arr){
    if(arr[0] == 2 || arr[1] == 2 || arr[0] == 3 || arr[1] == 3){
        return true;
    }else{
        return false;
    }
}

function fix23(arr){
    if(arr[0] == 2 && arr[1] == 3){
        arr[1] = 0;
        return arr;
    }
    if(arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
        return arr;
    }else{
    return arr;
    }
}

function countYZ(str){
    var last = str.length - 1;
    var count = 0;
    for(var i = 0; i < last; i++){
        if(str[i] == " "){
            if(str[i-1] == "y" || str[i-1] == "Y" || str[i-1] == "z" || str[i-1] == "Z"){
                count++;
            }
        }
    }
    if(str[last] == "y" || str[last] == "z" || str[last] == "Y" || str[last] == "Z"){
        count++;
    }
    return count;
}

function endOther(str1, str2) {
    var lowStr1 = str1.toLowerCase();
    var lowStr2 = str2.toLowerCase();
    var l1 = str1.length;
    var l2 = str2.length;
    if (l1 > l2) {
        var diff1 = l1 - l2;
        if(lowStr1.indexOf(lowStr2) == diff1){
            return true;
        }else{
            return false;
        }
    } else {
        var diff2 = l2 - l1;
        if(lowStr2.indexOf(lowStr1) == diff2) {
            return true;
        }else {
            return false;
        }
    }
}

function starOut(str){
    var goodWord = "";
    var num = str.length;
    for(var i = 0; i < num; i++){
        if(str[i] != "*" && str[i + 1] != "*" && str[i - 1] != "*" ){
            goodWord = goodWord + str[i];
        }
    }
    return goodWord;
}

function getSandwich(str){
    var first = str.indexOf("bread");
    var sec = str.lastIndexOf("bread");
    var new3 = "";
    if(str.includes("bread") == false){
        new3 = "";
    }else{
        new3 = str.slice(first + 5, sec);
    }
    return new3;
}

function canBalance(arr) {
    var result = false;
    var firstSum = 0;
    var long = arr.length;
    for (var i = 0; i< long ; i ++){
        var secSum = 0;
        firstSum += arr[i];
        for(var j = i+1; j< long ; j++){
            secSum += arr[j];
        }
        if (firstSum == secSum) {
            result = true;
        }
    }
    return result;
}

function countClumps(arr){
    var count = 0;
    var long = arr.length;
    for (var i = 0; i< long ; i ++){
        if(arr[i] == arr[i+1] && arr[i + 2] != arr[i]){
            count++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    var final = false;
    if ( (a - b) == (b - c)){
        final = true;
    }
    if((c-a)==(b-c)){
        final = true;
    }
    if((c-a)==(a-b)){
        final = true;
    }
    return final;
}