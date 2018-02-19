export function selectImageData(items) {
  return items.map(({
    id,
    previewURL,
    user,
    tags,
    imageHeight,
    imageWidth,
    webformatURL
  }) => ({
    id,
    src: previewURL,
    fullSizeImage: webformatURL,
    user,
    tags,
    imageHeight,
    imageWidth
  }))
}
