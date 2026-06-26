/** Resolve public asset paths for GitHub Pages subpath deployment */
export function asset(path) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
