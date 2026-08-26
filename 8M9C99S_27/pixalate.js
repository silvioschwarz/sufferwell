function createPixelatedCanvas(image, pixelSize = 8) {
  const sourceCanvas = document.createElement("canvas");
  const sourceCtx = sourceCanvas.getContext("2d");
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;

  sourceCanvas.width = width;
  sourceCanvas.height = height;
  sourceCtx.drawImage(image, 0, 0, width, height);

  const pixelCanvas = document.createElement("canvas");
  const pixelCtx = pixelCanvas.getContext("2d");
  const blockSize = Math.max(1, Math.floor(pixelSize));

  pixelCanvas.width = Math.max(1, Math.floor(width / blockSize));
  pixelCanvas.height = Math.max(1, Math.floor(height / blockSize));
  pixelCtx.imageSmoothingEnabled = false;
  pixelCtx.drawImage(sourceCanvas, 0, 0, pixelCanvas.width, pixelCanvas.height);

  const resultCanvas = document.createElement("canvas");
  const resultCtx = resultCanvas.getContext("2d");
  resultCanvas.width = width;
  resultCanvas.height = height;
  resultCtx.imageSmoothingEnabled = false;
  resultCtx.drawImage(pixelCanvas, 0, 0, width, height);

  return resultCanvas;
}

async function pixelatePicture(source, pixelSize = 8) {
  if (source instanceof HTMLImageElement) {
    if (!source.complete) {
      await new Promise((resolve, reject) => {
        source.onload = resolve;
        source.onerror = reject;
      });
    }
    return createPixelatedCanvas(source, pixelSize);
  }

  if (typeof source === "string") {
    const image = new Image();
    image.src = source;
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    return createPixelatedCanvas(image, pixelSize);
  }

  throw new TypeError("Expected an HTMLImageElement or image URL string.");
}

if (typeof window !== "undefined") {
  window.pixelatePicture = pixelatePicture;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { pixelatePicture };
}

export { pixelatePicture };
