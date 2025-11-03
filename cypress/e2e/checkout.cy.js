//prerequisite
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

describe('Buying products', () => {

    //1 product
    it('buying 1 product', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type("Test");
        cy.get('#last-name').type("User");
        cy.get('#postal-code').type("1000");
        cy.get('#continue').click();
        cy.get('#finish').click();

        cy.get('.pony_express').should('be.visible');

        
    });

    //2 products
    it('buying 2 products', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type("Test");
        cy.get('#last-name').type("User");
        cy.get('#postal-code').type("1000");
        cy.get('#continue').click();
        cy.get('#finish').click();

        cy.get('.pony_express').should('be.visible');
        
    });
});

// cancel payment

describe('Cancel payment', () => {
    it('Should go back to the shopping page', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type("Test");
        cy.get('#last-name').type("User");
        cy.get('#postal-code').type("1000");
        cy.get('#continue').click();
        cy.get('#cancel').click();

        cy.get('.app_logo').should('be.visible');

    });
});

// empty fields
describe('Checkout fields empty', () => {
    it('Should give an error message', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type(" ");
        cy.get('#last-name').type(" ");
        cy.get('#postal-code').type(" ");
        cy.get('#continue').click();
        cy.get('#finish').click();

        // assert
        cy.get('.error-button').should('not.exist');
    });
});
 

// non existent postal code
// update -> no check on postal code
/*
describe('Non-existent postal code', () => {
    it('Should give an error', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type("Test");
        cy.get('#last-name').type("User");
        cy.get('#postal-code').type("1");
        cy.get('#continue').click();
        cy.get('#finish').click();

        // assert

    });
});

*/


// invalid name 
// update -> no check on name
/*
describe('Fill in invalid name', () => {
    it('Should give an error message', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();

        cy.get('#first-name').type("1223");
        cy.get('#last-name').type("21");
        cy.get('#postal-code').type("1000");
        cy.get('#continue').click();
        cy.get('#finish').click();

        // assert
    });
});*/

