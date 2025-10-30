// prerequisite = user is logged in
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

//TC01 & TC02 - selecting products
login();

cy.get('#add-to-cart-sauce-labs-backpack').click();
cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();

cy.get('#remove-sauce-labs-backpack').should('be.visible');
cy.get('#remove-sauce-labs-bolt-t-shirt').should('be.visible');


//TC03 all products are shown
login();

cy.get('.inventory_item_name ').should('contain','Sauce Labs Backpack');
cy.get('.inventory_item_name ').should('contain','Sauce Labs Bike Light');
cy.get('.inventory_item_name ').should('contain','Sauce Labs Bolt T-Shirt');
cy.get('.inventory_item_name ').should('contain','Sauce Labs Fleece Jacket');
cy.get('.inventory_item_name ').should('contain','Sauce Labs Onesie');
cy.get('.inventory_item_name ').should('contain','Test.allTheThings() T-Shirt (Red)');


//TODO TC04, TC05, TC06, TC07 - Sorting
login();

cy.get('.product_sort_container').click();
