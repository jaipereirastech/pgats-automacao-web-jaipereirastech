describe('Place Order: Register before Checkout - Automation Exercise', () => {
  it('should register, place order, and delete account successfully', () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit('https://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.contains('Home').should('be.visible');

    // 4. Click 'Signup / Login' button
    cy.get('a[href="/login"]').click();

    // 5. Fill all details in Signup and create account
    const randomEmail = `user_${Date.now()}@example.com`;
    const name = 'JailsonTeste';
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(randomEmail);
    cy.get('[data-qa="signup-button"]').click();

    // === Página de detalhes de cadastro ===
    // Corrigido: selecionar o input real do radio button
    cy.get('input[id="id_gender1"]').check(); // "Mr"
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Endereço
    cy.get('[data-qa="first_name"]').type('Jailson');
    cy.get('[data-qa="last_name"]').type('Pereira');
    cy.get('[data-qa="company"]').type('Guaraves');
    cy.get('[data-qa="address"]').type('Rua Teste 123');
    cy.get('[data-qa="address2"]').type('Apto 4');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Quebec');
    cy.get('[data-qa="city"]').type('Montreal');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('81999999999');

    cy.get('[data-qa="create-account"]').click();

    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // 7. Verify 'Logged in as username' at top
    cy.contains(`Logged in as ${name}`).should('be.visible');

    // 8. Add products to cart
    cy.get('a[href="/products"]').click();
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    // Modal "Added!"
    cy.contains('View Cart').click();

    // 9. Click 'Cart' button (já estamos lá)
    cy.url().should('include', '/view_cart');

    // 10. Verify that cart page is displayed
    cy.contains('Shopping Cart').should('be.visible');

    // 11. Click Proceed To Checkout
    cy.contains('Proceed To Checkout').click();

    // 12. Verify Address Details and Review Your Order
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    // 13. Enter description in comment text area and click 'Place Order'
    cy.get('textarea[name="message"]').type('Pedido de teste automatizado.');
    cy.contains('Place Order').click();

    // 14. Enter payment details
    cy.get('[data-qa="name-on-card"]').type('JailsonPereira');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2028');

    // 15. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').should('be.visible').click();

    // 16. Wait for success message or confirmation page
    cy.url().should('include', '/payment_done');
    cy.contains(/order placed/i, { timeout: 20000 }).should('be.visible');
    cy.contains(/congratulations/i).should('be.visible');

    // 17. Click 'Delete Account' button
    cy.contains('Delete Account').click();

    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
});
