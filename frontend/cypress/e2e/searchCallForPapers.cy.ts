/// <reference types="cypress" />

describe("search test cases", function(){
 
  it("Search C4P with search bar", function() {
   cy.visit("http://localhost:3000/");
   cy.get('.chakra-input').click().type('p')
   cy.get('.css-1882tx4').click();
  })
})
