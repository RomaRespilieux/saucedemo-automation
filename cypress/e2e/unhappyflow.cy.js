// prerequisite
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

// Directe toegang zonder log in
describe('Go to products page using url without loggin in', () => {
    it('Should redirect to login page', () => {
        cy.visit('https://www.saucedemo.com/inventory.html');

        cy.get('#login-button').should('be.visible');

    });
});

// Browser refresh product pagina
describe('Testing page reload functionality', () => {
    it('should reload the page and maintain state', () => {
        login();
        cy.visit('https://www.saucedemo.com/inventory.html');
        // Reload the page
        cy.reload();
        // Assert that the URL remains the same after reloading
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
    })
})


// SQL injection
describe('SQL injection vulnerability', () => {
    it('should not allow SQL injection attack', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('admin\' OR 1=1 --')
        cy.get('#password').type('password')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible');
    })
})

// Reset app state
describe('Reset app state functionality', () => {
    it('Should reset products page', () => {
        login();
        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link').should('contain','all items');

        cy.get('.shopping_cart_badge').should('not.be.visible');
        
    });
});