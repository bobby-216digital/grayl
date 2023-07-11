(function(){
  $(document).ready(function(){
      $('a[aria-controls="CartDrawer"]').on('click', function(){
          jQuery.getJSON('/cart.js', function(cart) {
              FenixDeliveryEstimates({
                    page: 'cart',
                    cartItems: cart.items,
                    template: "cart",
                	fenixMessageStyles: {
                      fontSize: '12px',
                      messageHighlightFontWeight:'700',
                      messageHighlightColor: '#000'
                    }
              });
          });
    });
  }); 
})();