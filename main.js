(function (locale, currency) {
  var defaultValue = 10000;
  var paybackDays = 30;

  setFormValues(defaultValue);

  function setFormValues(value) {
    $("#value").html(formatCurrency(value));
    updatePayout(value);
  }

  function calculatePrice(value) {
    switch (paybackDays) {
      case 30: return value * 30;
      case 60: return value * 60;
      case 90: return value * 90;
      default: return value;
    }
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  }

  function updatePayout(value) {
    var calculatedCosts = calculatePrice(value);

    $("#payout").html(formatCurrency(calculatedCosts));
    $("#post-tax").html(formatCurrency(calculatedCosts * 1.2));
    $("#total-cost").html(formatCurrency(calculatedCosts * 1.6));
  }

  $('#slider-1').slider({
    min: 500,
    max: 50000,
    value: defaultValue,
    step: 100,
    range: "min",
    slide: function (event, ui) {
      setFormValues(ui.value);
    }
  });

  $('input:radio[name="days"]').change(function(){
    if ($(this).val() == 'thirty'){
      paybackDays = 30;
      updatePayout($("#slider-1").slider("value"));
    } else if($(this).val() == "sixty") {
      paybackDays = 60;
      updatePayout($("#slider-1").slider("value"));
    } else {
      paybackDays = 90;
      updatePayout($("#slider-1").slider("value"));
    }
  });
})("pl-PL", "PLN");
