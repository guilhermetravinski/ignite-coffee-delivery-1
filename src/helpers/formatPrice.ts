export function convertPriceToText(price: number): string {
  let priceText = String(price)

  if (!priceText.includes('.')) {
    return priceText.concat(',00')
  }

  priceText = priceText.replace('.', ',')

  // eslint-disable-next-line no-unused-vars
  const [_, afterCommaValue] = priceText.split(',')

  if (afterCommaValue.length === 1) {
    return priceText.concat('0')
  }

  return priceText
}
