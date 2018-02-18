export function selectImageData(items) {
  return items.map(item => ({
    id: item.id,
    src: item.previewURL
  }))
}
