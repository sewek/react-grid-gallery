'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const getStyle = (styleProp, fallback, context) => {
    if (typeof styleProp === "function") {
        return styleProp(context);
    }
    if (typeof styleProp === "object") {
        return styleProp;
    }
    return fallback(context);
};
const rotationTransformMap = {
    3: "rotate(180deg)",
    2: "rotateY(180deg)",
    4: "rotate(180deg) rotateY(180deg)",
    5: "rotate(270deg) rotateY(180deg)",
    6: "rotate(90deg)",
    7: "rotate(90deg) rotateY(180deg)",
    8: "rotate(270deg)",
};
const SELECTION_MARGIN = 16;
const gallery = {
    display: "flex",
    flexWrap: "wrap",
};
const thumbnail = ({ item }) => {
    const rotationTransformValue = rotationTransformMap[item.orientation];
    const style = {
        cursor: "pointer",
        maxWidth: "none",
        width: item.scaledWidth,
        height: item.scaledHeight,
        marginLeft: item.marginLeft,
        marginTop: 0,
        transform: rotationTransformValue,
    };
    if (item.isSelected) {
        const ratio = item.scaledWidth / item.scaledHeight;
        const viewportHeight = item.scaledHeight - SELECTION_MARGIN * 2;
        const viewportWidth = item.viewportWidth - SELECTION_MARGIN * 2;
        let height, width;
        if (item.scaledWidth > item.scaledHeight) {
            width = item.scaledWidth - SELECTION_MARGIN * 2;
            height = Math.floor(width / ratio);
        }
        else {
            height = item.scaledHeight - SELECTION_MARGIN * 2;
            width = Math.floor(height * ratio);
        }
        const marginTop = Math.abs(Math.floor((viewportHeight - height) / 2));
        const marginLeft = Math.abs(Math.floor((viewportWidth - width) / 2));
        style.width = width;
        style.height = height;
        style.marginLeft = marginLeft === 0 ? 0 : -marginLeft;
        style.marginTop = marginTop === 0 ? 0 : -marginTop;
    }
    return style;
};
const tileViewport = ({ item, }) => {
    const styles = {
        width: item.viewportWidth,
        height: item.scaledHeight,
        overflow: "hidden",
    };
    if (item.nano) {
        styles.background = `url(${item.nano})`;
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
const customOverlay = ({ hover, }) => ({
    pointerEvents: "none",
    opacity: hover ? 1 : 0,
    position: "absolute",
    height: "100%",
    width: "100%",
});
const galleryItem = ({ margin }) => ({
    margin,
    WebkitUserSelect: "none",
    position: "relative",
    background: "#eee",
    padding: "0px",
});
const tileOverlay = ({ showOverlay, }) => ({
    pointerEvents: "none",
    opacity: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    background: showOverlay
        ? "linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)"
        : "none",
});
const tileIconBar = {
    pointerEvents: "none",
    opacity: 1,
    position: "absolute",
    height: "36px",
    width: "100%",
};
const tileDescription = {
    background: "white",
    width: "100%",
    margin: 0,
    userSelect: "text",
    WebkitUserSelect: "text",
    MozUserSelect: "text",
    overflow: "hidden",
};
const bottomBar = {
    padding: "2px",
    pointerEvents: "none",
    position: "absolute",
    minHeight: "0px",
    maxHeight: "160px",
    width: "100%",
    bottom: "0px",
    overflow: "hidden",
};
const tagItemBlock = {
    display: "inline-block",
    cursor: "pointer",
    pointerEvents: "visible",
    margin: "2px",
};
const tagItem = () => ({
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
});
const checkButton = ({ isVisible, }) => ({
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

const CheckButton = ({ isSelected = false, isVisible = true, onClick, color = "#FFFFFFB2", selectedColor = "#4285F4FF", hoverColor = "#FFFFFFFF", }) => {
    const [hover, setHover] = react.useState(false);
    const circleStyle = { display: isSelected ? "block" : "none" };
    const fillColor = isSelected ? selectedColor : hover ? hoverColor : color;
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);
    return (jsxRuntime.jsx("div", { "data-testid": "grid-gallery-item_check-button", title: "Select", style: checkButton({ isVisible }), onClick: onClick, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, children: jsxRuntime.jsxs("svg", { fill: fillColor, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsxs("radialGradient", { id: "shadow", cx: "38", cy: "95.488", r: "10.488", gradientTransform: "matrix(1 0 0 -1 -26 109)", gradientUnits: "userSpaceOnUse", children: [jsxRuntime.jsx("stop", { offset: ".832", stopColor: "#010101" }), jsxRuntime.jsx("stop", { offset: "1", stopColor: "#010101", stopOpacity: "0" })] }), jsxRuntime.jsx("circle", { style: circleStyle, opacity: ".26", fill: "url(#shadow)", cx: "12", cy: "13.512", r: "10.488" }), jsxRuntime.jsx("circle", { style: circleStyle, fill: "#FFF", cx: "12", cy: "12.2", r: "8.292" }), jsxRuntime.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }), jsxRuntime.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })] }) }));
};

const Image = ({ item, thumbnailImageComponent: ThumbnailImageComponent, isSelectable = true, thumbnailStyle, tagStyle, tileViewportStyle, margin, index, onSelect, onClick, }) => {
    const styleContext = { item };
    const [hover, setHover] = react.useState(false);
    const thumbnailProps = {
        key: index,
        "data-testid": "grid-gallery-item_thumbnail",
        src: item.src,
        alt: item.alt ? item.alt : "",
        crossOrigin: typeof item.crossOrigin === "string" ? item.crossOrigin : undefined,
        title: typeof item.caption === "string" ? item.caption : null,
        style: getStyle(thumbnailStyle, thumbnail, styleContext),
    };
    const handleCheckButtonClick = (event) => {
        if (!isSelectable) {
            return;
        }
        onSelect(index, event);
    };
    const handleViewportClick = (event) => {
        onClick(index, event);
    };
    const thumbnailImageProps = {
        item,
        index,
        margin,
        onSelect,
        onClick,
        isSelectable,
        tileViewportStyle,
        thumbnailStyle,
        tagStyle,
    };
    return (jsxRuntime.jsxs("div", { className: "ReactGridGallery_tile", "data-testid": "grid-gallery-item", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: galleryItem({ margin }), children: [jsxRuntime.jsx("div", { className: "ReactGridGallery_tile-icon-bar", style: tileIconBar, children: jsxRuntime.jsx(CheckButton, { isSelected: item.isSelected, isVisible: item.isSelected || (isSelectable && hover), onClick: handleCheckButtonClick }) }), !!item.tags && (jsxRuntime.jsx("div", { className: "ReactGridGallery_tile-bottom-bar", style: bottomBar, children: item.tags.map((tag, index) => (jsxRuntime.jsx("div", { title: tag.title, style: tagItemBlock, children: jsxRuntime.jsx("span", { style: getStyle(tagStyle, tagItem, styleContext), children: tag.value }) }, tag.key || index))) })), !!item.customOverlay && (jsxRuntime.jsx("div", { className: "ReactGridGallery_custom-overlay", style: customOverlay({ hover }), children: item.customOverlay })), jsxRuntime.jsx("div", { className: "ReactGridGallery_tile-overlay", style: tileOverlay({
                    showOverlay: hover && !item.isSelected && isSelectable,
                }) }), jsxRuntime.jsx("div", { className: "ReactGridGallery_tile-viewport", "data-testid": "grid-gallery-item_viewport", style: getStyle(tileViewportStyle, tileViewport, styleContext), onClick: handleViewportClick, children: ThumbnailImageComponent ? (jsxRuntime.jsx(ThumbnailImageComponent, { ...thumbnailImageProps, imageProps: thumbnailProps })) : (jsxRuntime.jsx("img", { ...thumbnailProps })) }), item.thumbnailCaption && (jsxRuntime.jsx("div", { className: "ReactGridGallery_tile-description", style: tileDescription, children: item.thumbnailCaption }))] }));
};

const objectStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    zIndex: -1,
    opacity: 0,
};
const ResizeListener = ({ onResize, }) => {
    const objectRef = react.useRef(null);
    const onResizeRef = react.useRef(onResize);
    onResizeRef.current = onResize;
    const _onResize = react.useCallback(() => {
        onResizeRef.current();
    }, []);
    const handleLoad = react.useCallback(() => {
        const obj = objectRef.current;
        if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
            obj.contentDocument.defaultView.addEventListener("resize", _onResize);
        }
    }, []);
    react.useEffect(() => {
        return () => {
            const obj = objectRef.current;
            if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                obj.contentDocument.defaultView.removeEventListener("resize", _onResize);
            }
        };
    }, []);
    return (jsxRuntime.jsx("object", { onLoad: handleLoad, ref: objectRef, tabIndex: -1, type: "text/html", data: "about:blank", title: "", style: objectStyles }));
};

const calculateCutOff = (items, totalRowWidth, protrudingWidth) => {
    const cutOff = [];
    let cutSum = 0;
    for (let i in items) {
        const item = items[i];
        const fractionOfWidth = item.scaledWidth / totalRowWidth;
        cutOff[i] = Math.floor(fractionOfWidth * protrudingWidth);
        cutSum += cutOff[i];
    }
    let stillToCutOff = protrudingWidth - cutSum;
    while (stillToCutOff > 0) {
        for (let i in cutOff) {
            cutOff[i]++;
            stillToCutOff--;
            if (stillToCutOff < 0)
                break;
        }
    }
    return cutOff;
};
const getRow = (images, { containerWidth, rowHeight, margin }) => {
    const row = [];
    const imgMargin = 2 * margin;
    const items = [...images];
    let totalRowWidth = 0;
    while (items.length > 0 && totalRowWidth < containerWidth) {
        const item = items.shift();
        const scaledWidth = Math.floor(rowHeight * (item.width / item.height));
        const extendedItem = {
            ...item,
            scaledHeight: rowHeight,
            scaledWidth,
            viewportWidth: scaledWidth,
            marginLeft: 0,
        };
        row.push(extendedItem);
        totalRowWidth += extendedItem.scaledWidth + imgMargin;
    }
    const protrudingWidth = totalRowWidth - containerWidth;
    if (row.length > 0 && protrudingWidth > 0) {
        const cutoff = calculateCutOff(row, totalRowWidth, protrudingWidth);
        for (const i in row) {
            const pixelsToRemove = cutoff[i];
            const item = row[i];
            item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
            item.viewportWidth = item.scaledWidth - pixelsToRemove;
        }
    }
    return [row, items];
};
const getRows = (images, options, rows = []) => {
    const [row, imagesLeft] = getRow(images, options);
    const nextRows = [...rows, row];
    if (options.maxRows && nextRows.length >= options.maxRows) {
        return nextRows;
    }
    if (imagesLeft.length) {
        return getRows(imagesLeft, options, nextRows);
    }
    return nextRows;
};
const buildLayout = (images, { containerWidth, maxRows, rowHeight, margin }) => {
    rowHeight = typeof rowHeight === "undefined" ? 180 : rowHeight;
    margin = typeof margin === "undefined" ? 2 : margin;
    if (!images)
        return [];
    if (!containerWidth)
        return [];
    const options = { containerWidth, maxRows, rowHeight, margin };
    return getRows(images, options);
};
const buildLayoutFlat = (images, options) => {
    const rows = buildLayout(images, options);
    return [].concat.apply([], rows);
};

const Gallery = ({ images, id = "ReactGridGallery", enableImageSelection = true, onSelect = () => { }, rowHeight = 180, maxRows, margin = 2, defaultContainerWidth = 0, onClick = () => { }, tileViewportStyle, thumbnailStyle, tagStyle, thumbnailImageComponent, }) => {
    const galleryRef = react.useRef(null);
    const [containerWidth, setContainerWidth] = react.useState(defaultContainerWidth);
    const handleResize = react.useCallback(() => {
        if (!galleryRef.current) {
            return;
        }
        let width = galleryRef.current.clientWidth;
        try {
            width = galleryRef.current.getBoundingClientRect().width;
        }
        catch (err) { }
        setContainerWidth(Math.floor(width));
    }, []);
    react.useEffect(() => {
        handleResize();
    }, []);
    const thumbnails = buildLayoutFlat(images, {
        containerWidth,
        maxRows,
        rowHeight,
        margin,
    });
    const handleSelect = (index, event) => {
        event.preventDefault();
        onSelect(index, images[index], event);
    };
    const handleClick = (index, event) => {
        onClick(index, images[index], event);
    };
    return (jsxRuntime.jsxs("div", { id: id, className: "ReactGridGallery", ref: galleryRef, children: [jsxRuntime.jsx(ResizeListener, { onResize: handleResize }), jsxRuntime.jsx("div", { style: gallery, children: thumbnails.map((item, index) => (jsxRuntime.jsx(Image, { item: item, index: index, margin: margin, height: rowHeight, isSelectable: enableImageSelection, onClick: handleClick, onSelect: handleSelect, tagStyle: tagStyle, tileViewportStyle: tileViewportStyle, thumbnailStyle: thumbnailStyle, thumbnailImageComponent: thumbnailImageComponent }, item.key || index))) })] }));
};
Gallery.displayName = "Gallery";

exports.CheckButton = CheckButton;
exports.Gallery = Gallery;
exports.buildLayout = buildLayout;
exports.buildLayoutFlat = buildLayoutFlat;
//# sourceMappingURL=react-grid-gallery.cjs.js.map
