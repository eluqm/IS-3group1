describe("search test cases", function(){

  it("Search with reaults", function() {
    cy.visit("http://localhost:3000");
    cy.get('.chakra-stack > .chakra-button').click();
  })
})
