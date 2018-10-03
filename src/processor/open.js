
module.require("../style/layer.css");
const layerTemplate = module.require("../template/layer.ejs");

const style = module.require("../util/style.js");

const open = function(options) {
    if(top !== self) {
        return top.sfx.layer.open(options);
    }

    options = options || {};

    const src           = options.src || (function() { throw "옵션 src를 찾지 못하였습니다"; }());
    const width         = options.width || 300;
    const height        = options.height || 300;
    const movable       = options.move || false;
    const resizable     = options.resize || false;

    const source = layerTemplate({
        src : src,
        containerStyle : style.stringify({
            "z-index" : 10
        }),
        popupStyle : style.stringify({
            "margin-left"   : -(width / 2),
            "margin-top"    : -(height / 2),
            "width"         : width,
            "height"        : height
        }),
        movable : movable ? "sfx-layer-movable" : "",
        resizable : resizable ? "sfx-layer-resizable" : ""
    });

    const container = getElement(source);
    container.addEventListener("click", function(e) {
        const element = e.target;
        if(element.classList.contains("sfx-layer-container")) {
            element.remove();
        }
    });

    document.body.appendChild(container);

    const stack = {
        element : container,
        parent : sfx.layer.stack
    };

    sfx.layer.stack = stack;


};

function getElement(source) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = source;
    return wrapper.firstChild;
}

module.exports = open;