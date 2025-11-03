describe('View Product Details - Automation Exercise', () => {
  it('should display all details of the first product', () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit('https://automationexercise.com/');

    // 3. Verify that home page is visible successfully
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');
    cy.contains('Home').should('be.visible');

    // 4. Click on 'Products' button
    cy.get('a[href="/products"]').click();

    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 6. The products list is visible
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);

    // 7. Click on 'View Product' of first product
    cy.get('.features_items .product-image-wrapper').first().contains('View Product').click();

    // 8. User is landed to product detail page
    cy.url().should('include', '/product_details');

    // 9. Verify that product details are visible
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // product name
      cy.contains('Category').should('be.visible');
      cy.contains('Rs.').should('be.visible'); // price
      cy.contains('Availability').should('be.visible');
      cy.contains('Condition').should('be.visible');
      cy.contains('Brand').should('be.visible');
    });
  });
});
