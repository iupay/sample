export default function hello(name: string): string {
  const s = name.split("/").filter(item => item != "").join(" ");
  return `Hello, ${s === "" ? " World" : s}!`;
}
