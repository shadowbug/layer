/* 스타일을 문자열로 변환한다. */

var style = {};

// 문자열화 시킨다.
style.stringify = function(options) {
    var length = options.length;
    
    return Object.entries(options).map((item, i) => {
        return item[0] + ":" + item[1] + ";";
    }).reduce((acc, item) => {
        return acc + item;
    });
};

module.exports = style;