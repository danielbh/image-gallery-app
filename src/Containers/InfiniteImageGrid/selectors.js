export function selectImageData(items) {
  return items.map(({
    id,
    previewURL,
    user,
    tags,
    imageHeight,
    imageWidth
  }) => ({
    id,
    src: previewURL,
    user,
    tags,
    imageHeight,
    imageWidth
  }))
}
