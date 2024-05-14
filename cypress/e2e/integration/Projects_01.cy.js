/// <reference types="cypress" />


describe('Cypress-Project-01' , () => {

  it('Test Case 01 - Validate the Contact Us information', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('.is-size-3');
    
    cy.get('#address');

    cy.get('#email');

    cy.get('#phone-number')
    
  });

  it('Test Case 02 - Validate the Full name input box', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('[type="text"]');

    cy.contains('.label', 'Full name *');

    cy.get('[placeholder="Enter your full name"]').should('be.visible') // ??
  });

  it('Test Case 03 - Validate the Gender radio button', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.contains('.label' , 'Gender *');

    cy.get('[class="label"] ~ label');

    cy.get('[class="label"] ~ label').should('be.visible').should('not.be.checked');

    cy.get('[class="label"] + label').click();

    cy.get('[class="label"] + label + label').click();
  })

  it('Test Case 04 - Validate the Address input box', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('form  .field [placeholder="Enter your address"]');

    cy.get('form  .field [placeholder="Enter your address"]').not('.required'); // not required

    cy.contains('label', 'Address').should('exist'); 

    cy.get('form  .field [placeholder="Enter your address"]').type('Enter your address')
    // cy.get('[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter Your Address');

  });

  it('Test Case 05 - Validate the Email input box', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('[type="email"]');

    cy.get('[type="email"]').should('have.attr', 'required'); // required

    cy.contains('.label', 'Email')
    // cy.contains('label', 'Email').should('exist'); 

    cy.get('[type="email"]').type('Enter your email'); // added input

  });

  it('Test Case 06 - Validate the Phone input box', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('[type="phone"]');

    cy.get('[type="phone"]').not('.required'); // not required

    cy.contains('.label', 'Phone');

    cy.get('[type="phone"]').type('Enter your phone number');

  });

  it('Test Case 07 - Validate the Message text area', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('.textarea');

    cy.get('.textarea').not('.required');

    cy.contains('.label', 'Message');

    cy.get('.textarea').type('Type your message here...');

  });

  it('Test Case 08 - Validate the Consent checkbox', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    cy.get('.checkbox'); // ???

    cy.get('[type="checkbox"]').should('have.attr', 'required');

    cy.get('[type="checkbox"]').click();

    // cy.get('.checkbox').check()

  });

  it('Test Case 09 - Validate the SUBMIT button', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');

    // cy.get('.button');

    cy.get('[type="submit"]');  // ???

    cy.get('[type="submit"]').should('be.visible')   // ???

    // cy.get('.button').click();

    cy.contains('.button', 'SUBMIT');
    // cy.get('[type="submit"]').should('have.text', 'SUBMIT')

  });

  it('Test Case 10 - Validate the form submission', () => {

    cy.visit('https://www.techglobal-training.com/frontend/project-1');
  })
  
  
  

});
  
    
  