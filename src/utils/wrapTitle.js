export default function wrapTitle(title, size) {
  return title.length > size ? `${title.substring(0, size)}...` : title;
}
