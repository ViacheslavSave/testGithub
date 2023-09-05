const currencyConverter = (amount, from, to) => {
  switch (`${from}/${to}`) {
      case 'RUB/USD':
          return amount / 69.02;
      case 'USD/RUB':
          return amount * 68.97;
      default:
          return null;
  }
}
