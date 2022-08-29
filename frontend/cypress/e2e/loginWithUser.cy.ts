describe("search test cases", function(){

  it("Login with user", function() {
    cy.visit("http://localhost:3000/login");
    cy.get('#email').type('ehuanca@gmail.com');
    cy.get('#password').type('cnyora');
    cy.get('.css-w13as5 > .chakra-button').click();
  })
})
