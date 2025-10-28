describe('log in succesful', () => {
  it('should redirect to shopping page', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();

    cy.get('.title').should('contain', 'Products');

  })
})

describe('log in unsuccesful', () => {

  it('should show error message after entering wrong credentials', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard");
    cy.get('#password').type("sauce");
    cy.get('#login-button').click();

    cy.get('.error-button').should('be.visible');

  });
  it('should show error message after entering wrong username', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();


    cy.get('.error-button').should('be.visible');

  });

  it('should show error message after entering wrong password', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("sauce");
    cy.get('#login-button').click();


    cy.get('.error-button').should('be.visible');

  });



});

