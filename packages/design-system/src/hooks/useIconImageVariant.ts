import { IconSize, IconVariant } from "../Icon";

export const useIconImageVariant = (variant: IconVariant, size: IconSize) => {
    const iconSize = size === "small" ? 24 : 36 ;
    const iconSrc = `./icons/${variant}.svg`;
    return { imageSrc: iconSrc, width: iconSize, height: iconSize };
}