var randNum=[12,34,53,53,934,54,32,33,21];

exports.getNum=function () {
    var num=Math.floor(randNum.length*Math.random());
    return randNum[num];
};
