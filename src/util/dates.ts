export const formatDate = (date) => {
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('pt-br', option)
}
