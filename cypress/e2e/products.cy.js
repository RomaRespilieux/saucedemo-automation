// prerequisite = user is logged in
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

//TC01 & TC02 - selecting products
describe('Selecting products', () => {
    it('Should be able to select 1 product', () => {
        login();

        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('#remove-sauce-labs-backpack').should('be.visible');
    });

    it('Should be able to select 2 products', () => {
        login();

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

        cy.get('#remove-sauce-labs-backpack').should('be.visible');
        cy.get('#remove-sauce-labs-bolt-t-shirt').should('be.visible');

    });
});


//TC03 all products are shown
describe('Visiting shopping page', () => {
    it('Should show all available products', () => {
        login();

        cy.get('.inventory_item_name ').should('contain', 'Sauce Labs Backpack');
        cy.get('.inventory_item_name ').should('contain', 'Sauce Labs Bike Light');
        cy.get('.inventory_item_name ').should('contain', 'Sauce Labs Bolt T-Shirt');
        cy.get('.inventory_item_name ').should('contain', 'Sauce Labs Fleece Jacket');
        cy.get('.inventory_item_name ').should('contain', 'Sauce Labs Onesie');
        cy.get('.inventory_item_name ').should('contain', 'Test.allTheThings() T-Shirt (Red)');

    });
});


//TODO TC04, TC05, TC06, TC07 - Sorting
describe('Sorting and filtering', () => {
    it('Should be able to sort az', () => {
        login();

        cy.get('.product_sort_container').select('Name (A to Z)');

        cy.get('.product_sort_container').should('contain', 'Name (A to Z)');
        cy.get('.inventory_item_description').eq(0).should('contain.text', 'Sauce Labs Backpack');
        cy.get('.inventory_item_description').last().should('contain.text', 'Test.allTheThings() T-Shirt (Red)');


    });

    it('Should be able to sort za', () => {
        login();

       // cy.get('.product_sort_container').click(); -> should not be here, Cypress does not allow cy.click() on <select> elements
        cy.get('.product_sort_container').select('Name (Z to A)');

        cy.get('.product_sort_container').should('contain', 'Name (Z to A)');
        cy.get('.inventory_item_description').eq(0).should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
        cy.get('.inventory_item_description').last().should('contain.text', 'Sauce Labs Backpack');

    });

    it('Should be able to sort price low-high', () => {
        login();

       // cy.get('.product_sort_container').click();
        cy.get('.product_sort_container').select('Price (low to high)');

        cy.get('.product_sort_container').should('contain', 'Price (low to high)');
        cy.get('.inventory_item_description').eq(0).should('contain.text', 'Sauce Labs Onesie');
        cy.get('.inventory_item_description').last().should('contain.text', 'Sauce Labs Fleece Jacket');


    });

    it('Should be able to sort price high-low', () => {
        login();

       // cy.get('.product_sort_container').click();
        cy.get('.product_sort_container').select('Price (high to low)');

        cy.get('.product_sort_container').should('contain', 'Price (high to low)');
        cy.get('.inventory_item_description').eq(0).should('contain.text', 'Sauce Labs Fleece Jacket');
        cy.get('.inventory_item_description').last().should('contain.text', 'Sauce Labs Onesie');


    });
});
