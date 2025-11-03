describe('Verify Subscription in Home Page - Automation Exercise', () => {
  it('should verify subscription functionality in home page footer', () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit('https://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');
    cy.contains('Home').should('be.visible');

    // 4. Scroll down to footer
    cy.scrollTo('bottom');

    // 5. Verify text 'SUBSCRIPTION'
    cy.contains('Subscription', { matchCase: false }).should('be.visible');

    // 6. Enter email address in input and click arrow button
    const email = `test_${Date.now()}@example.com`;
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();

    // 7. Verify success message
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});
