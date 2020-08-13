describe('Base', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be opened', () => {
    cy.dataCy('link-about').should('contain', 'About');
  });
});
