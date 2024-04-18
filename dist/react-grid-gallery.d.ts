import { ReactNode, MouseEvent, CSSProperties, ComponentType } from 'react';

type Key = string | number;
interface ImageTag {
    value: ReactNode;
    title: string;
    key?: Key;
}
interface Image {
    key?: Key;
    src: string;
    width: number;
    height: number;
    nano?: string;
    alt?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    tags?: ImageTag[];
    isSelected?: boolean;
    caption?: ReactNode;
    customOverlay?: ReactNode;
    thumbnailCaption?: ReactNode;
    orientation?: number;
}
type ImageExtended<T extends Image = Image> = T & {
    scaledWidth: number;
    scaledHeight: number;
    viewportWidth: number;
    marginLeft: number;
};
interface BuildLayoutOptions {
    containerWidth: number;
    maxRows?: number;
    rowHeight?: number;
    margin?: number;
}
type ImageExtendedRow<T extends Image = Image> = ImageExtended<T>[];
type EventHandler<T extends Image = Image> = (index: number, item: T, event: MouseEvent<HTMLElement>) => void;
type StyleFunctionContext<T extends Image = Image> = {
    item: T;
};
type StyleFunction<T extends Image = Image> = (context: StyleFunctionContext) => CSSProperties;
type StyleProp<T extends Image = Image> = CSSProperties | StyleFunction<T>;
interface ImageProps<T extends ImageExtended = ImageExtended> {
    item: T;
    index: number;
    margin: number;
    isSelectable: boolean;
    onClick: (index: number, event: MouseEvent<HTMLElement>) => void;
    onSelect: (index: number, event: MouseEvent<HTMLElement>) => void;
    tileViewportStyle: StyleProp<T>;
    thumbnailStyle: StyleProp<T>;
    tagStyle: StyleProp<T>;
    height?: number;
    thumbnailImageComponent?: ComponentType<ThumbnailImageProps>;
}
interface ThumbnailImageComponentImageProps {
    key: string | number;
    src: string;
    alt: string;
    title: string | null;
    style: CSSProperties;
}
type ThumbnailImageProps<T extends ImageExtended = ImageExtended> = ImageProps<T> & {
    imageProps: ThumbnailImageComponentImageProps;
};
interface GalleryProps<T extends Image = Image> {
    images: T[];
    id?: string;
    enableImageSelection?: boolean;
    onSelect?: EventHandler<T>;
    rowHeight?: number;
    maxRows?: number;
    margin?: number;
    defaultContainerWidth?: number;
    onClick?: EventHandler<T>;
    tileViewportStyle?: StyleProp<T>;
    thumbnailStyle?: StyleProp<T>;
    tagStyle?: StyleProp<T>;
    thumbnailImageComponent?: ComponentType<ThumbnailImageProps>;
}
interface CheckButtonProps {
    isSelected: boolean;
    isVisible: boolean;
    onClick: (event: MouseEvent<HTMLElement>) => void;
    color?: string;
    selectedColor?: string;
    hoverColor?: string;
}

declare const Gallery: {
    <T extends Image>({ images, id, enableImageSelection, onSelect, rowHeight, maxRows, margin, defaultContainerWidth, onClick, tileViewportStyle, thumbnailStyle, tagStyle, thumbnailImageComponent, }: GalleryProps<T>): JSX.Element;
    displayName: string;
};

declare const CheckButton: ({ isSelected, isVisible, onClick, color, selectedColor, hoverColor, }: CheckButtonProps) => JSX.Element;

declare const buildLayout: <T extends Image = Image>(images: T[], { containerWidth, maxRows, rowHeight, margin }: BuildLayoutOptions) => ImageExtendedRow<T>[];
declare const buildLayoutFlat: <T extends Image = Image>(images: T[], options: BuildLayoutOptions) => ImageExtendedRow<T>;

export { BuildLayoutOptions, CheckButton, CheckButtonProps, EventHandler, Gallery, GalleryProps, Image, ImageExtended, ImageExtendedRow, ImageProps, ImageTag, StyleFunction, StyleFunctionContext, StyleProp, ThumbnailImageComponentImageProps, ThumbnailImageProps, buildLayout, buildLayoutFlat };
