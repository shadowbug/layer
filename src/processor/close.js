

var close = function() {
    if(self !== top) {
        return top.sfx.layer.close();
    }

    var current = sfx.layer.current;
};

module.exports = close;