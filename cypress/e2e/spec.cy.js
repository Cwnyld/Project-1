describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.url().should('eq', 'https://example.cypress.io')
  })
})