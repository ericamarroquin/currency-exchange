import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

function clearFields() {
  $('.showBaseCurrency').text("");
  $('.showTargetCurrency').text("");
  $('.showErrors').text("");
}

function getElements(response) {
  if (response.result === "success") {
    $('.showTargetCurrency').text(`is equal to ${response.conversion_result} ${response.target_code}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convertCurrency').click(function() {
    let valueToConvert = $('#amount').val();
    let targetCurrency = $('#targetCurrency').val();
    clearFields();
    CurrencyExchange.getExchange(targetCurrency,valueToConvert)
      .then(function(response) {
        $('.showBaseCurrency').text(`${valueToConvert} USD`);
        getElements(response);
      });
  });
});

// $(document).ready(function() {
//   $('#convertCurrency').click()
// })