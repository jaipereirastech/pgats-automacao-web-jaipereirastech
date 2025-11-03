describe('Search Product - Automation Exercise', () => {
  it('should search for a product and display results', () => {
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

    // 6. Enter product name in search input and click search button
    const searchTerm = 'dress';
    cy.get('#search_product').type(searchTerm);
    cy.get('#submit_search').click();

    // 7. Verify 'SEARCHED PRODUCTS' is visible
    cy.contains('Searched Products').should('be.visible');

    // 8. Verify all the products related to search are visible
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .each(($product) => {
        cy.wrap($product).within(() => {
          cy.get('p').should('be.visible'); // garante que o nome do produto está visível
        });
      });
  });
});
