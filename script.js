$( document ).ready(function() {

  var caixaWrapper = anime({
    targets: '#caixa-wrapper .caixa',
    translateX: 300
  });
  var caixaWrapper2 = anime({
    targets: '#caixa-wrapper-2 .caixa-2',
    translateX: 350,
    delay: 1000,
    scale: 2
  });
  var caixaWrapper3 = anime({
    delay: 500,
    targets: '#caixa-wrapper-3 .caixa-3',
    translateX: 400,
    scale: 2,
    rotate: '2turn',
    easing: 'easeOutElastic',
    elasticity: 600
  });

  var img = anime({
    delay: 200,
    targets: '.img',
    rotate: '6turn',
    easing: 'easeOutElastic',
    elasticity: 800
  });


  setTimeout(function(){
    $( ".header" ).fadeIn("slow");
    anime({
    targets: '.header',
    translateX: 200,
    easing: [.91,-0.54,.29,1.56]
    });
  }, 2000);

});
