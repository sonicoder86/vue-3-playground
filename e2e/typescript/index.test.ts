describe('Vue 3 Playground', () => {
  it('should display playground text on page', () => {
    cy.visit('/');
    cy.contains('h2', 'Vue 3.0.5 Playground');
  });
});
