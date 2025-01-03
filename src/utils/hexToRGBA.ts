export const hexToRGBA = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex
    .replace(/^#/, '')
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
