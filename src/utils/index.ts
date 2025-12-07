export function randomTranslate() {
  return Math.floor(Math.random() * 2) % 2 === 0
    ? "-translate-y-[110%]"
    : "translate-y-[110%]";
}
