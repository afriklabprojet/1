export function getPlaceholder(text, width = 1200, height = 600) {
    return `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;
  }