$( function() {
    $( "#slider" ).slider({
        value:1000,
        min: 500,
        max: 4999,
        step: 1,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $( "#amount_count" ).val( ui.value=parseInt(ui.value*0.08) +" P" );
        }
    });
    $( "#amount" ).val(  $( "#slider" ).slider( "value" ) );
    $( "#amount_count" ).val(  $( "#slider" ).slider( "value" )*0.08+" P" );
} );

$( function() {
    $( "#slider2" ).slider({
        value:8000,
        min: 5000,
        max: 9999,
        step: 1,
        slide: function( event, ui ) {
            $( "#amount2" ).val( ui.value );
            $( "#amount_count2" ).val( ui.value=parseInt(ui.value*0.2) +" P" );
        }
    });
    $( "#amount2" ).val(  $( "#slider2" ).slider( "value" ) );
    $( "#amount_count2" ).val(  $( "#slider2" ).slider( "value" )*0.2+" P" );
} );

$( function() {
    $( "#slider3" ).slider({
        value:14000,
        min: 10000,
        max: 15000,
        step: 1,
        slide: function( event, ui ) {
            $( "#amount3" ).val( ui.value );
            $( "#amount_count3" ).val( ui.value=parseInt(ui.value*0.32) +" P" );
        }
    });
    $( "#amount3" ).val(  $( "#slider3" ).slider( "value" ) );
    $( "#amount_count3" ).val(  $( "#slider3" ).slider( "value" )*0.32+" P" );
} );

// function sliderInit(selector) {
//     $(selector).slider({
//         value: $(selector).data('val'),
//         min: $(selector).data('min'),
//         max: $(selector).data('max'),
//         step: 1,
//         slide: function( event, ui ) {
//             var mainBlock = $(selector).parent().parent().parent().parent(); //aplet
//
//             mainBlock.find('.applet_slider_input').val( ui.value );
//             mainBlock.find('.applet_profit_count_input').val( ui.value=parseInt(ui.value * $(selector).data('percent')) +" P" );
//         }
//     });
// }
//
// $(document).ready(function(){
//
//     sliderInit("#slider");
//     sliderInit("#slider2");
//     sliderInit("#slider3");
// });

