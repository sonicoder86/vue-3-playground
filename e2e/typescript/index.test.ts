import { version } from 'vue';

describe('Vue 3 Playground', () => {
  it('should display playground text on page', () => {
    cy.visit('/');
    cy.contains('h2', `Vue ${version} Playground`);
  });
});
