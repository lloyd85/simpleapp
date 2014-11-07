describe( 'Shopping Basket', function() {

    beforeEach( module( 'shoppingBasket' ) );

    beforeEach(inject(function( ) {

    }));

    it( 'should decrease total price when a product is deleted', function() {
        //shoppingBasket.$on('deleteProduct', shopping.basketUpdatePrice);;
        expect( shoppingBasket.totalPrice).toBe(5.99);
    });

    it( 'should increase total price when product quantity is increased by one', function() {
        //shoppingBasket.$on('totalPriceUpdate', shopping.basketUpdatePrice);
        expect( shoppingBasket.totalPrice).toBe(19.99);
    });

    it( 'should decrease total price when a product quantity is decreased by one', function() {
        //shoppingBasket.$on('totalPriceUpdate', shopping.basketUpdatePrice);
        expect( shoppingBasket.totalPrice).toBe(49.98);
    });

    it( 'should disable the BUY NOW button when no product is selected' , function() {
        expect( shoppingBasket.submitButton.enabled).toBe(false);
    });

    it( 'should post json data to url', function() {
        expect( shoppingBasket.submitProducts ).toHaveBeenCalled();
    });

});
