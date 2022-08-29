describe("search test cases", function(){

  it("Search with reaults", function() {
    cy.visit("http://localhost:3000/login");
    cy.get('#email').type('eespinozape@unsa.edu.pe');
    cy.get('#password').type('contraseñachafa:v');
    cy.get('.css-w13as5 > .chakra-button').click();
  })
})
