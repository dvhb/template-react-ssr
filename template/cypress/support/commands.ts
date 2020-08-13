Cypress.Commands.add('dataCy', testId => {
  return cy.get(`[data-cy='${testId}']`);
});

Cypress.Commands.add('visitSsrPage', url => {
  cy.request(url)
    .its('body')
    .then(html => {
      html = html.replace('<style data-next-hide-fouc="true">body{display:none}</style>', '');
      html = html.replace(/src="\/_next\/static\/chunks\/webpack.js/, '');

      cy.state('document').write(html);
    });
});
