export async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}