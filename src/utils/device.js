export function isDevice() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  const isMobileWidth = window.innerWidth <= 720;

  if (isMobileWidth || isPortrait) {
    return "mb";
  }

  return "pc";
}
