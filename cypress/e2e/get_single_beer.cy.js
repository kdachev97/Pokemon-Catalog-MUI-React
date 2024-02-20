describe('Single Beer test', () => {
  it('gets a single beer', () => {
    cy.visit('/beers')
    cy.get('[data-cy="grid-beer-button-1"]')
      .click()
    cy.url()
      .should('include', '/beers/1')
    cy.get('[data-cy="single-beer-abv-1"]')
      .should('exist')
      .and('be.visible')
      .and('contain', 'ABV: 4.5%')
    cy.get('[data-cy="single-beer-tagline-1"]')
      .should('exist')
      .and('be.visible')
      .and('contain', 'A Real Bitter Experience')
  })
})