function convertToRoman(num) {

    var myNum = num;
    let myNumFunc = num => Number(num);
    var arrNums = Array.from(String(myNum), myNumFunc);
    var groupI = function(value) {
        var I = {
            0: "",
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX"

        };
        return I[value];
    }
    var groupX = function(value) {
        var X = {
            0: "",
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC"
        };
        return X[value];
    }
    var groupC = function(value) {
        var C = {
            0: "",
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM"
        };
        return C[value];
    }
    var groupM = function(value) {
        var M = {
            0: "",
            1: "M",
            2: "MM",
            3: "MMM",
            4: "MMMM",
            5: "MMMMM"

        };
        return M[value];
    }
    let result = [""];
    if (arrNums.length === 1) {
        result = groupI(arrNums[0]);
    }
    if (arrNums.length === 2) {
        result = groupX(arrNums[0]);
        result += groupI(arrNums[1]);
    }
    if (arrNums.length === 3) {
        result = groupC(arrNums[0]);
        result += groupX(arrNums[1]);
        result += groupI(arrNums[2]);
    }
    if (arrNums.length === 4) {
        result = groupM(arrNums[0]);

        result += groupC(arrNums[1]);
        result += groupX(arrNums[2]);
        result += groupI(arrNums[3]);

    }
    return result;
}

console.log(convertToRoman(5916));