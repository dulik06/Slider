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
    $("#payout").html(calculatePrice(value).toLocaleString());
    $("#post-tax").html(calculatePrice((value) * 1.2).toLocaleString());
    $("#total-cost").html(calculatePrice((value) * 1.6).toLocaleString());
  }

  $('#slider-1').slider({
    min: 500,
    max: 50000,
    value: 10000,
    step: 100,
    range: "min",
    slide: function (event, ui) {
      $("#value").html((ui.value).toLocaleString());
      updatePayout(ui.value);
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
  })();

  /*$('#thirty').attr('checked', 'true')(function () {
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
  });*/


/*$(".btn").click(function(){
        $(".btn").removeClass('active');
        $(this).addClass('active');
});*/
