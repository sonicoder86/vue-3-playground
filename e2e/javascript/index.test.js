describe('Vue 3 Playground', () => {
  it('should display playground text on page', () => {
    cy.visit('/');
    cy.contains('h2', 'Vue 3.1.3 Playground');
  });
});
