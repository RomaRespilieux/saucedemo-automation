//prerequisite
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

//visit Twitter
describe('Clicking on Twitter button', () => {
    it('Should redirect to Saucelabs Twitter page', () => {
        login();

        cy.get('[data-test="social-twitter"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://twitter.com/saucelabs');


    });
});

//visit Facebook
describe('Clicking on Facebook button', () => {
    it('Should redirect to Saucelabs Facebook page', () => {
        login();

        cy.get('[data-test="social-facebook"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.facebook.com/saucelabs');

    });
});

//visit LinkedIn
describe('Clicking on LinkedIn button', () => {
    it('Should redirect to Saucelabs LinkedIn page', () => {
        login();
        
        cy.get('[data-test="social-linkedin"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    });
});