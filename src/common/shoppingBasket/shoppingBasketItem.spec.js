describe( 'Shopping Basket Item Directive', function() {

    beforeEach( module( 'shoppingBasketItem' ) );

    beforeEach(inject(function( ) {

    }));

    it( 'should increment the quantity by 1 when selecting the + button', function() {
        //default quantity 1
        shoppingBasketItem.addProduct();
        expect( shoppingBasketItem.getQuantity()).toBe(2);
    });

    it( 'should decrement the quantity by 1 when selecting the - button', function() {
        shoppingBasketItem.setQuantity(4);
        shoppingBasketItem.removeProduct();
        expect( shoppingBasketItem.getQuantity()).toBe(3);
    });


    it( 'should not exceed maximum quantity of 10 when selecting the + button', function() {
        shoppingBasketItem.setQuantity(10);
        shoppingBasketItem.addProduct();
        expect( shoppingBasketItem.getQuantity()).toBe(4);
    });

    it( 'should not exceed minimum quantity of 1 when selecting the - button', function() {
        shoppingBasketItem.setQuantity(1);
        shoppingBasketItem.removeProduct();
        expect( shoppingBasketItem.getQuantity()).toBe(1);
    });


    it( 'should not exceed maximum quantity of 10 when entering a higher number', function() {
        shoppingBasketItem.setQuantity(12);
        expect( shoppingBasketItem.getQuantity()).toBe(10);
    });

    it( 'should not exceed minimum quantity of 1 when selecting the - button', function() {
        //default quantity 1
        shoppingBasketItem.removeProduct();
        expect( shoppingBasketItem.getQuantity()).toBe(1);
    });

    it( 'should multiply product item price of £10 by 3', function() {
        shoppingBasketItem.price = 10;
        shoppingBasketItem.setQuantity(3);
        expect( shoppingBasketItem.productsTotalPrice ).toBe(10);
    });
    it( 'should result to £40 worth of products', function() {
        shoppingBasketItem.price = 10;
        shoppingBasketItem.setQuantity(3)
        shoppingBasketItem.addProduct();
        expect( shoppingBasketItem.productsTotalPrice ).toBe(40);
    });

    it( 'should result to £20 worth of products', function() {
        shoppingBasketItem.price = 10;
        shoppingBasketItem.setQuantity(3)
        shoppingBasketItem.removeProduct();
        expect( shoppingBasketItem.productsTotalPrice ).toBe(20);
    });

});
