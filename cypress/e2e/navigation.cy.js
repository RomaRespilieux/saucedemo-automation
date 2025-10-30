//prerequisite user is logged in
function login() {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
}

describe('Opening navigation menu', () => {
    it('Should show all options', () => {
        login();
        cy.get('#react-burger-menu-btn').click();

        cy.get('#inventory_sidebar_link').should('contain','all items');
        cy.get('#about_sidebar_link').should('contain','all items');
        cy.get('#logout_sidebar_link').should('contain','all items');
        cy.get('#reset_sidebar_link').should('contain','all items');
    });
    it('All options are clickable', () => {
        //TODO
    });
});