describe('Contact Us form - Automation Exercise', () => {
  it('should fill and submit the contact form successfully', () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit('https://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');
    cy.contains('Home').should('be.visible');

    // 4. Click on 'Contact Us' button
    cy.contains('Contact us').click();

    // 5. Verify 'GET IN TOUCH' is visible
    cy.contains('Get In Touch').should('be.visible');

    // 6. Enter name, email, subject and message
    cy.get('[data-qa="name"]').type('Jailson Pereira');
    cy.get('[data-qa="email"]').type('jailson.pereira@example.com');
    cy.get('[data-qa="subject"]').type('Teste Cypress');
    cy.get('[data-qa="message"]').type('Esta é uma mensagem de teste automatizada.');

    // 7. Upload file (certifique-se que o arquivo exista em cypress/fixtures/)
    cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/teste.txt');

    // 8. Click 'Submit' button
    cy.get('[data-qa="submit-button"]').click();

    // 9. Click OK button no alert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Press OK');
    });

    // 10. Verify success message
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

    // 11. Click 'Home' button and verify home page loaded
    cy.get('#form-section a').contains('Home').click();
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('contain.text', 'Home');
  });
});
