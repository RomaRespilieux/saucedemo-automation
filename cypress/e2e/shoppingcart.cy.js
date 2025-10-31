// prerequisite = user is logged in
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}


//TC01  & TC02 - adding items to cart
describe('shopping cart functionality', () => {
    // add 1 item in cart
    it('adding 1 item in cart', () => {
        login();

        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('.shopping_cart_badge').should('contain', '1');
    });
    // add 2 items in cart
    it('adding multiple items in cart', () => {
        login();

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();

        cy.get('.shopping_cart_badge').should('contain', '2');

    });
});


//TC03 & TC04
describe('shopping basket functionality', () => {
    // remove 1 item from cart
    it('remove 1 item', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();

        cy.get('.shopping_cart_link').click();
        cy.get('#remove-sauce-labs-backpack').click();

        //assertion
        cy.get('#remove-sauce-labs-backpack').should('not.exist');
    });

    // empty cart
    it('remove all items', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();

        cy.get('.shopping_cart_link').click();
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('#remove-sauce-labs-bike-light').click();

        //assertion
        cy.get('#remove-sauce-labs-backpack').should('not.exist');
        cy.get('#remove-sauce-labs-backpack').should('not.exist');
        cy.get('#remove-sauce-labs-bike-light').should('not.exist');

    });
});

//TC05 open empty shopppiing cart

describe('Open empty shopping cart', () => {
    it('Should open new page and no products are present on the page', () => {
        login();

        cy.get('.shopping_cart_link').click();

        cy.get('.title').should('contain', 'Your Cart');
        
        //validate the cart is empty
        cy.get('.cart_item').should('not.be.visible');
    });
    
});