//TC01 - Geldige log in
describe('log in succesful', () => {
  it('should redirect to shopping page', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();

    cy.get('.title').should('contain', 'Products');

  })
})

//TC02, TC03, TC04 - Ongeldige log in
describe('log in unsuccesful', () => {
  // Foute username & password
  it('should show error message after entering wrong credentials', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard");
    cy.get('#password').type("sauce");
    cy.get('#login-button').click();

    cy.get('.error-button').should('be.visible');

  });

  //Foute username
  it('should show error message after entering wrong username', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();


    cy.get('.error-button').should('be.visible');

  });

//Fout wachtwoord
  it('should show error message after entering wrong password', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("sauce");
    cy.get('#login-button').click();


    cy.get('.error-button').should('be.visible');

  });

  //Velden leeg laten
it('should show error message after leaving fields empty', () => {
  cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type(" ");
    cy.get('#password').type(" ");
    cy.get('#login-button').click();


    cy.get('.error-button').should('be.visible');
});

});

//Login tijd controleren
describe('Log in performance test', () => {
  it('should complete login n under 2 seconds', () => {
    const start = Date.now();

    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type("standard");
    cy.get('#password').type("sauce");
    cy.get('#login-button').click();

    cy.get('.title', {timeout: 10000}).should('be.visible').then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(2000);
    });
  });
});

