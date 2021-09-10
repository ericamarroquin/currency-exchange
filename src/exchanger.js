export default class CurrencyExchange {
  static getExchange(targetCurrency,amountToConvert) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCurrency}/${amountToConvert}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error("This currency doesn't exist!");
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}