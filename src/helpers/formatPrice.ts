export function convertPriceToText(price: number): string {
  let priceText = String(price.toFixed(2))

  if (!priceText.includes('.')) {
    return priceText.concat(',00')
  }

  priceText = priceText.replace('.', ',')

  const [_, afterCommaValue] = priceText.split(',')

  if (afterCommaValue.length === 1) {
    return priceText.concat('0')
  }

  return priceText
}
