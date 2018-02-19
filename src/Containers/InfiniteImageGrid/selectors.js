
/**
 * @param {Array} items raw image data objects obtained from API. Here we re-shape
 *            them to be used later.
 */
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
