(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactGridGallery = {}, global.React));
})(this, (function (exports, require$$0) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var jsxRuntime = {exports: {}};

    var reactJsxRuntime_production_min = {};

    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var hasRequiredReactJsxRuntime_production_min;

    function requireReactJsxRuntime_production_min () {
    	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    	hasRequiredReactJsxRuntime_production_min = 1;
    var f=require$$0__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
    	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
    	return reactJsxRuntime_production_min;
    }

    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }

    var jsxRuntimeExports = jsxRuntime.exports;

    var getStyle = function (styleProp, fallback, context) {
        if (typeof styleProp === "function") {
            return styleProp(context);
        }
        if (typeof styleProp === "object") {
            return styleProp;
        }
        return fallback(context);
    };
    var rotationTransformMap = {
        3: "rotate(180deg)",
        2: "rotateY(180deg)",
        4: "rotate(180deg) rotateY(180deg)",
        5: "rotate(270deg) rotateY(180deg)",
        6: "rotate(90deg)",
        7: "rotate(90deg) rotateY(180deg)",
        8: "rotate(270deg)",
    };
    var SELECTION_MARGIN = 16;
    var gallery = {
        display: "flex",
        flexWrap: "wrap",
    };
    var thumbnail = function (_a) {
        var item = _a.item;
        var rotationTransformValue = rotationTransformMap[item.orientation];
        var style = {
            cursor: "pointer",
            maxWidth: "none",
            width: item.scaledWidth,
            height: item.scaledHeight,
            marginLeft: item.marginLeft,
            marginTop: 0,
            transform: rotationTransformValue,
        };
        if (item.isSelected) {
            var ratio = item.scaledWidth / item.scaledHeight;
            var viewportHeight = item.scaledHeight - SELECTION_MARGIN * 2;
            var viewportWidth = item.viewportWidth - SELECTION_MARGIN * 2;
            var height = void 0, width = void 0;
            if (item.scaledWidth > item.scaledHeight) {
                width = item.scaledWidth - SELECTION_MARGIN * 2;
                height = Math.floor(width / ratio);
            }
            else {
                height = item.scaledHeight - SELECTION_MARGIN * 2;
                width = Math.floor(height * ratio);
            }
            var marginTop = Math.abs(Math.floor((viewportHeight - height) / 2));
            var marginLeft = Math.abs(Math.floor((viewportWidth - width) / 2));
            style.width = width;
            style.height = height;
            style.marginLeft = marginLeft === 0 ? 0 : -marginLeft;
            style.marginTop = marginTop === 0 ? 0 : -marginTop;
        }
        return style;
    };
    var tileViewport = function (_a) {
        var item = _a.item;
        var styles = {
            width: item.viewportWidth,
            height: item.scaledHeight,
            overflow: "hidden",
        };
        if (item.nano) {
            styles.background = "url(".concat(item.nano, ")");
            styles.backgroundSize = "cover";
            styles.backgroundPosition = "center center";
        }
        if (item.isSelected) {
            styles.width = item.viewportWidth - SELECTION_MARGIN * 2;
            styles.height = item.scaledHeight - SELECTION_MARGIN * 2;
            styles.margin = SELECTION_MARGIN;
        }
        return styles;
    };
    var customOverlay = function (_a) {
        var hover = _a.hover;
        return ({
            pointerEvents: "none",
            opacity: hover ? 1 : 0,
            position: "absolute",
            height: "100%",
            width: "100%",
        });
    };
    var galleryItem = function (_a) {
        var margin = _a.margin;
        return ({
            margin: margin,
            WebkitUserSelect: "none",
            position: "relative",
            background: "#eee",
            padding: "0px",
        });
    };
    var tileOverlay = function (_a) {
        var showOverlay = _a.showOverlay;
        return ({
            pointerEvents: "none",
            opacity: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
            background: showOverlay
                ? "linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)"
                : "none",
        });
    };
    var tileIconBar = {
        pointerEvents: "none",
        opacity: 1,
        position: "absolute",
        height: "36px",
        width: "100%",
    };
    var tileDescription = {
        background: "white",
        width: "100%",
        margin: 0,
        userSelect: "text",
        WebkitUserSelect: "text",
        MozUserSelect: "text",
        overflow: "hidden",
    };
    var bottomBar = {
        padding: "2px",
        pointerEvents: "none",
        position: "absolute",
        minHeight: "0px",
        maxHeight: "160px",
        width: "100%",
        bottom: "0px",
        overflow: "hidden",
    };
    var tagItemBlock = {
        display: "inline-block",
        cursor: "pointer",
        pointerEvents: "visible",
        margin: "2px",
    };
    var tagItem = function () { return ({
        display: "inline",
        padding: ".2em .6em .3em",
        fontSize: "75%",
        fontWeight: "600",
        lineHeight: "1",
        color: "yellow",
        background: "rgba(0,0,0,0.65)",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: ".25em",
    }); };
    var checkButton = function (_a) {
        var isVisible = _a.isVisible;
        return ({
            visibility: isVisible ? "visible" : "hidden",
            background: "none",
            float: "left",
            width: 36,
            height: 36,
            border: "none",
            padding: 6,
            cursor: "pointer",
            pointerEvents: "visible",
        });
    };

    var CheckButton = function (_a) {
        var _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c, onClick = _a.onClick, _d = _a.color, color = _d === void 0 ? "#FFFFFFB2" : _d, _e = _a.selectedColor, selectedColor = _e === void 0 ? "#4285F4FF" : _e, _f = _a.hoverColor, hoverColor = _f === void 0 ? "#FFFFFFFF" : _f;
        var _g = require$$0.useState(false), hover = _g[0], setHover = _g[1];
        var circleStyle = { display: isSelected ? "block" : "none" };
        var fillColor = isSelected ? selectedColor : hover ? hoverColor : color;
        var handleMouseOver = function () { return setHover(true); };
        var handleMouseOut = function () { return setHover(false); };
        return (jsxRuntimeExports.jsx("div", __assign({ "data-testid": "grid-gallery-item_check-button", title: "Select", style: checkButton({ isVisible: isVisible }), onClick: onClick, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut }, { children: jsxRuntimeExports.jsxs("svg", __assign({ fill: fillColor, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntimeExports.jsxs("radialGradient", __assign({ id: "shadow", cx: "38", cy: "95.488", r: "10.488", gradientTransform: "matrix(1 0 0 -1 -26 109)", gradientUnits: "userSpaceOnUse" }, { children: [jsxRuntimeExports.jsx("stop", { offset: ".832", stopColor: "#010101" }), jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#010101", stopOpacity: "0" })] })), jsxRuntimeExports.jsx("circle", { style: circleStyle, opacity: ".26", fill: "url(#shadow)", cx: "12", cy: "13.512", r: "10.488" }), jsxRuntimeExports.jsx("circle", { style: circleStyle, fill: "#FFF", cx: "12", cy: "12.2", r: "8.292" }), jsxRuntimeExports.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }), jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })] })) })));
    };

    var Image = function (_a) {
        var item = _a.item, ThumbnailImageComponent = _a.thumbnailImageComponent, _b = _a.isSelectable, isSelectable = _b === void 0 ? true : _b, thumbnailStyle = _a.thumbnailStyle, tagStyle = _a.tagStyle, tileViewportStyle = _a.tileViewportStyle, margin = _a.margin, index = _a.index, onSelect = _a.onSelect, onClick = _a.onClick;
        var styleContext = { item: item };
        var _c = require$$0.useState(false), hover = _c[0], setHover = _c[1];
        var thumbnailProps = {
            key: index,
            "data-testid": "grid-gallery-item_thumbnail",
            src: item.src,
            alt: item.alt ? item.alt : "",
            crossOrigin: typeof item.crossOrigin === "string" ? item.crossOrigin : undefined,
            title: typeof item.caption === "string" ? item.caption : null,
            style: getStyle(thumbnailStyle, thumbnail, styleContext),
        };
        var handleCheckButtonClick = function (event) {
            if (!isSelectable) {
                return;
            }
            onSelect(index, event);
        };
        var handleViewportClick = function (event) {
            onClick(index, event);
        };
        var thumbnailImageProps = {
            item: item,
            index: index,
            margin: margin,
            onSelect: onSelect,
            onClick: onClick,
            isSelectable: isSelectable,
            tileViewportStyle: tileViewportStyle,
            thumbnailStyle: thumbnailStyle,
            tagStyle: tagStyle,
        };
        return (jsxRuntimeExports.jsxs("div", __assign({ className: "ReactGridGallery_tile", "data-testid": "grid-gallery-item", onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, style: galleryItem({ margin: margin }) }, { children: [jsxRuntimeExports.jsx("div", __assign({ className: "ReactGridGallery_tile-icon-bar", style: tileIconBar }, { children: jsxRuntimeExports.jsx(CheckButton, { isSelected: item.isSelected, isVisible: item.isSelected || (isSelectable && hover), onClick: handleCheckButtonClick }) })), !!item.tags && (jsxRuntimeExports.jsx("div", __assign({ className: "ReactGridGallery_tile-bottom-bar", style: bottomBar }, { children: item.tags.map(function (tag, index) { return (jsxRuntimeExports.jsx("div", __assign({ title: tag.title, style: tagItemBlock }, { children: jsxRuntimeExports.jsx("span", __assign({ style: getStyle(tagStyle, tagItem, styleContext) }, { children: tag.value })) }), tag.key || index)); }) }))), !!item.customOverlay && (jsxRuntimeExports.jsx("div", __assign({ className: "ReactGridGallery_custom-overlay", style: customOverlay({ hover: hover }) }, { children: item.customOverlay }))), jsxRuntimeExports.jsx("div", { className: "ReactGridGallery_tile-overlay", style: tileOverlay({
                        showOverlay: hover && !item.isSelected && isSelectable,
                    }) }), jsxRuntimeExports.jsx("div", __assign({ className: "ReactGridGallery_tile-viewport", "data-testid": "grid-gallery-item_viewport", style: getStyle(tileViewportStyle, tileViewport, styleContext), onClick: handleViewportClick }, { children: ThumbnailImageComponent ? (jsxRuntimeExports.jsx(ThumbnailImageComponent, __assign({}, thumbnailImageProps, { imageProps: thumbnailProps }))) : (jsxRuntimeExports.jsx("img", __assign({}, thumbnailProps))) })), item.thumbnailCaption && (jsxRuntimeExports.jsx("div", __assign({ className: "ReactGridGallery_tile-description", style: tileDescription }, { children: item.thumbnailCaption })))] })));
    };

    var objectStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0,
    };
    var ResizeListener = function (_a) {
        var onResize = _a.onResize;
        var objectRef = require$$0.useRef(null);
        var onResizeRef = require$$0.useRef(onResize);
        onResizeRef.current = onResize;
        var _onResize = require$$0.useCallback(function () {
            onResizeRef.current();
        }, []);
        var handleLoad = require$$0.useCallback(function () {
            var obj = objectRef.current;
            if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                obj.contentDocument.defaultView.addEventListener("resize", _onResize);
            }
        }, []);
        require$$0.useEffect(function () {
            return function () {
                var obj = objectRef.current;
                if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                    obj.contentDocument.defaultView.removeEventListener("resize", _onResize);
                }
            };
        }, []);
        return (jsxRuntimeExports.jsx("object", { onLoad: handleLoad, ref: objectRef, tabIndex: -1, type: "text/html", data: "about:blank", title: "", style: objectStyles }));
    };

    var calculateCutOff = function (items, totalRowWidth, protrudingWidth) {
        var cutOff = [];
        var cutSum = 0;
        for (var i in items) {
            var item = items[i];
            var fractionOfWidth = item.scaledWidth / totalRowWidth;
            cutOff[i] = Math.floor(fractionOfWidth * protrudingWidth);
            cutSum += cutOff[i];
        }
        var stillToCutOff = protrudingWidth - cutSum;
        while (stillToCutOff > 0) {
            for (var i in cutOff) {
                cutOff[i]++;
                stillToCutOff--;
                if (stillToCutOff < 0)
                    break;
            }
        }
        return cutOff;
    };
    var getRow = function (images, _a) {
        var containerWidth = _a.containerWidth, rowHeight = _a.rowHeight, margin = _a.margin;
        var row = [];
        var imgMargin = 2 * margin;
        var items = __spreadArray([], images, true);
        var totalRowWidth = 0;
        while (items.length > 0 && totalRowWidth < containerWidth) {
            var item = items.shift();
            var scaledWidth = Math.floor(rowHeight * (item.width / item.height));
            var extendedItem = __assign(__assign({}, item), { scaledHeight: rowHeight, scaledWidth: scaledWidth, viewportWidth: scaledWidth, marginLeft: 0 });
            row.push(extendedItem);
            totalRowWidth += extendedItem.scaledWidth + imgMargin;
        }
        var protrudingWidth = totalRowWidth - containerWidth;
        if (row.length > 0 && protrudingWidth > 0) {
            var cutoff = calculateCutOff(row, totalRowWidth, protrudingWidth);
            for (var i in row) {
                var pixelsToRemove = cutoff[i];
                var item = row[i];
                item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                item.viewportWidth = item.scaledWidth - pixelsToRemove;
            }
        }
        return [row, items];
    };
    var getRows = function (images, options, rows) {
        if (rows === void 0) { rows = []; }
        var _a = getRow(images, options), row = _a[0], imagesLeft = _a[1];
        var nextRows = __spreadArray(__spreadArray([], rows, true), [row], false);
        if (options.maxRows && nextRows.length >= options.maxRows) {
            return nextRows;
        }
        if (imagesLeft.length) {
            return getRows(imagesLeft, options, nextRows);
        }
        return nextRows;
    };
    var buildLayout = function (images, _a) {
        var containerWidth = _a.containerWidth, maxRows = _a.maxRows, rowHeight = _a.rowHeight, margin = _a.margin;
        rowHeight = typeof rowHeight === "undefined" ? 180 : rowHeight;
        margin = typeof margin === "undefined" ? 2 : margin;
        if (!images)
            return [];
        if (!containerWidth)
            return [];
        var options = { containerWidth: containerWidth, maxRows: maxRows, rowHeight: rowHeight, margin: margin };
        return getRows(images, options);
    };
    var buildLayoutFlat = function (images, options) {
        var rows = buildLayout(images, options);
        return [].concat.apply([], rows);
    };

    var Gallery = function (_a) {
        var images = _a.images, _b = _a.id, id = _b === void 0 ? "ReactGridGallery" : _b, _c = _a.enableImageSelection, enableImageSelection = _c === void 0 ? true : _c, _d = _a.onSelect, onSelect = _d === void 0 ? function () { } : _d, _e = _a.rowHeight, rowHeight = _e === void 0 ? 180 : _e, maxRows = _a.maxRows, _f = _a.margin, margin = _f === void 0 ? 2 : _f, _g = _a.defaultContainerWidth, defaultContainerWidth = _g === void 0 ? 0 : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { } : _h, tileViewportStyle = _a.tileViewportStyle, thumbnailStyle = _a.thumbnailStyle, tagStyle = _a.tagStyle, thumbnailImageComponent = _a.thumbnailImageComponent;
        var galleryRef = require$$0.useRef(null);
        var _j = require$$0.useState(defaultContainerWidth), containerWidth = _j[0], setContainerWidth = _j[1];
        var handleResize = require$$0.useCallback(function () {
            if (!galleryRef.current) {
                return;
            }
            var width = galleryRef.current.clientWidth;
            try {
                width = galleryRef.current.getBoundingClientRect().width;
            }
            catch (err) { }
            setContainerWidth(Math.floor(width));
        }, []);
        require$$0.useEffect(function () {
            handleResize();
        }, []);
        var thumbnails = buildLayoutFlat(images, {
            containerWidth: containerWidth,
            maxRows: maxRows,
            rowHeight: rowHeight,
            margin: margin,
        });
        var handleSelect = function (index, event) {
            event.preventDefault();
            onSelect(index, images[index], event);
        };
        var handleClick = function (index, event) {
            onClick(index, images[index], event);
        };
        return (jsxRuntimeExports.jsxs("div", __assign({ id: id, className: "ReactGridGallery", ref: galleryRef }, { children: [jsxRuntimeExports.jsx(ResizeListener, { onResize: handleResize }), jsxRuntimeExports.jsx("div", __assign({ style: gallery }, { children: thumbnails.map(function (item, index) { return (jsxRuntimeExports.jsx(Image, { item: item, index: index, margin: margin, height: rowHeight, isSelectable: enableImageSelection, onClick: handleClick, onSelect: handleSelect, tagStyle: tagStyle, tileViewportStyle: tileViewportStyle, thumbnailStyle: thumbnailStyle, thumbnailImageComponent: thumbnailImageComponent }, item.key || index)); }) }))] })));
    };
    Gallery.displayName = "Gallery";

    exports.CheckButton = CheckButton;
    exports.Gallery = Gallery;
    exports.buildLayout = buildLayout;
    exports.buildLayoutFlat = buildLayoutFlat;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-grid-gallery.umd.js.map
