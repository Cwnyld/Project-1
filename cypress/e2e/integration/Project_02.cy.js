/// <reference types="cypress" />

  describe('Project02 Validate Techglobal-training frontend page', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
      });

    it('Test Case 01 - Validate the login form', () => {
      cy.get('#username').should('be.visible')
      .and('not.have.attr', 'required');
      cy.get('label[for=username]').should('contain', 'Please enter your username');
      cy.get('#password').should('be.visible')
      .and('not.have.attr', 'required');
      cy.get('label[for=password]').should('contain', 'Please enter your password');
      cy.get('#login_btn').should('be.visible')
      .click()
      .and('have.text', 'LOGIN');
      cy.get('form').find('a').contains('Forgot Password?').should('be.visible');
      cy.get('form').find('a').contains('Forgot Password?').should('not.have.attr', 'disabled');
      cy.get('form').find('a').contains('Forgot Password?').should('have.text', 'Forgot Password?');
      cy.get('form').find('a').contains('Forgot Password?').click();
     // cy.url().should('include', '/frontend/project-2');
      })
   
    it('Test Case 02 -  Validate the valid login', () => {
      cy.get('#username').type('TechGlobal');
      cy.get('#password').type('Test1234');
      cy.get('#login_btn').click();
      cy.get('#success_lgn').should('be.visible').and('have.text', 'You are logged in');
      cy.get('#logout').should('be.visible').and('have.text', 'LOGOUT');
    });

    it('Test Case 03 - Validate the logout', () => {
      cy.get('#username').type('TechGlobal');
      cy.get('#password').type('Test1234');
      cy.get('#login_btn').click();
      cy.get('#logout').click();
      cy.get('.is-size-3').should('be.visible');
    });

  
    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
      cy.get('form').find('a').contains('Forgot Password?').click();
      cy.get('#sub_heading').should('be.visible');
      cy.get('button[aria-label="close"]').should('be.visible');
      cy.get('#email').should('be.visible');
      cy.get('label').contains("Enter your email address and we'll send you a link to reset your password.");
      cy.get('#submit').should('be.visible').click();
      cy.get('.has-text-danger').should('be.visible');
    });
  

    it('Test Case 05 - Validate the Reset Password modal close button', () => {
      cy.get('form').find('a').contains('Forgot Password?').click();
      cy.get('#sub_heading').should('be.visible');
      cy.get('button[aria-label="close"]').click();
      cy.get('.is-size-3').should('be.visible');
    });
   
  
    it('Test Case 06 -  Validate the Reset Password form submission', () => {
      cy.get('form').find('a').contains('Forgot Password?').click();  
      cy.get('#email').type('zarinashakimova@gmail.com');
      cy.get('#submit').click();
      cy.get('#confirmation_message').contains('A link to reset your password has been sent to your email address.');
  });
    
  
  
    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
      cy.get('#login_btn').click();
      cy.get('#error_message').contains('Invalid Username entered!');
  
    });
  

  
    it('Test Case 08 -  Validate the invalid login with the wrong username', () => {
      cy.get('#username').type('John');
      cy.get('#password').type('Test1234');
      cy.get('#login_btn').click();
      cy.get('#error_message').contains('Invalid Username entered!');
    });
  

  
    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
      cy.get('#username').type('“TechGlobal”');
      cy.get('#password').type('1234');
      cy.get('#login_btn').click();
      cy.get('#error_message').should('be.visible', 'Invalid Password entered!')
    });
  

  
    it('Test Case 10 -  Validate the invalid login with the wrong username and password', () => {
      cy.get('#username').type('“John”');
      cy.get('#password').type('1234');
      cy.get('#login_btn').click();
      cy.get('#error_message').contains('Invalid Username entered!');
    
  });

});




