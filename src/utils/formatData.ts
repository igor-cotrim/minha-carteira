export const formatCurrency = (current: number): string => {
  return current.toLocaleString(
    'pt-br',
    {
      style: 'currency',
      currency: 'BRL'
    }
  )
}

export const formatDate = (date: string): string => {
  const dateFormatted = new Date(date)
  const day = dateFormatted.getDate() + 1 > 9
    ? dateFormatted.getDate() + 1
    : `0${dateFormatted.getDate() + 1}`

  const month = dateFormatted.getMonth() + 1 > 9
    ? dateFormatted.getMonth() + 1
    : `0${dateFormatted.getMonth() + 1}`

  const year = dateFormatted.getFullYear()

  return `${day}/${month}/${year}`
}