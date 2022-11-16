export default function ToCurrency(number) {
  if (number.toString().trim().length > 0) {
    if (number.toString() === '0') {
      return '0';
    }
    return Number(number).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return '';
}