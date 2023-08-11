type getImageSizeType = (url: string, width: number, height?: number) => string;

export const getImageSize: getImageSizeType = (url, width, height = width) => `${url}?param=${width}y${height}`;
