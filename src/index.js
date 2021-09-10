import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

function getElements(response) {
  if (response.result === "success") {
    $('.showBaseCurrency').text(`${Math.ceil(response.conversion_result/response.conversion_rate)} USD`);
    $('.showTargetCurrency').text(`is equal to ${response.conversion_result} ${response.target_code}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convertCurrency').click(function() {
    let valueToConvert = $('#amount').val();
    let targetCurrency = $('#targetCurrency').val();
    CurrencyExchange.getExchange(targetCurrency,valueToConvert)
      .then(function(response) {
        getElements(response);
      });
  });
});

// $(document).ready(function() {
//   $('#convertCurrency').click()
// })