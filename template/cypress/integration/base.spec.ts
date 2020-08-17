describe('Base', () => {
  it('should open home page', () => {
    cy.visit('/');
    cy.dataCy('greetings').should('contain', 'Hello');
  });

  it('should go to about page', () => {
    cy.visit('/');
    cy.dataCy('about-link').click();
    cy.dataCy('about-header').should('contain', 'About');
    cy.url().should('include', '/about');
  });

  it('should render users page on server', () => {
    cy.visitSsrPage('/users');
    cy.dataCy('users-header').should('contain', 'Users List');
  });
});
