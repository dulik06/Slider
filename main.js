(function () {

  var paybackDays = 30;

  function calculatePrice(value) {
    switch (paybackDays) {
      case 30: return value * 30;
      case 60: return value * 60;
      case 90: return value * 90;
      default: return value;
    }
  }

  function updatePayout(value) {
    $("#payout").html(calculatePrice(value));
    $("#post-tax").html(calculatePrice(value) * 1.2);
  }

  $('#slider-1').slider({
    min: 500,
    max: 50000,
    value: 10000,
    step: 100,
    range: "min",
    slide: function (event, ui) {
      $("#value").html(ui.value);
      updatePayout(ui.value);
    }
  });

  $('#thirty').click(function () {
    paybackDays = 30;
    updatePayout($("#slider-1").slider("value"));
  });
  $('#sixty').click(function () {
    paybackDays = 60;
    updatePayout($("#slider-1").slider("value"));
  });
  $('#ninety').click(function () {
    paybackDays = 90;
    updatePayout($("#slider-1").slider("value"));
  });
  $('#submit').click(function () {
    var sliderValue = $("#slider1").slider("value");
    var price = calculatePrice(sliderValue);
    var priceWithVAT = price * 1.2;

    $.ajax({});
  });
})();

$(".btn").click(function(){
        $(".btn").removeClass('active');
        $(this).addClass('active');
});
