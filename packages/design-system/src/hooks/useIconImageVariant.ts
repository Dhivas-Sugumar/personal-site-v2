import { IconSize } from "../Icon";

// TODO: Add returning the image to this function
export const useIconImageVariant = (size: IconSize) : {
    width: number;
    height: number;
}  => {
    const iconSize = size === "small" ? 24 : 36 ;
    return { width: iconSize, height: iconSize };
}