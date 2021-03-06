function WebpIsSupported(callback) {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  if (!window.createImageBitmap) {
    callback(false);
    return;
  }

  // Base64 representation of a white point image
  const webpdata =
    'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

  // Retrieve the Image in Blob Format
  fetch(webpdata)
    .then(response => {
      if (response.ok) {
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    })
    .then(blob => {
      // If the createImageBitmap method succeeds, return true, otherwise false
      createImageBitmap(blob).then(
        () => {
          callback(true);
        },
        () => {
          callback(false);
        }
      );
    });
}
// Added class to supported
const hero = document.querySelectorAll('section.hero');
WebpIsSupported(isSupported => {
  if (isSupported) {
    hero.forEach(bg => {
      bg.classList.add('webp');
    });
    console.log('Webp Supported');
  } else {
    console.log('Webp Not supported');
  }
});
