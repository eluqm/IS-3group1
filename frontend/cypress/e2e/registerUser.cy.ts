/// <reference types="cypress" />

describe("search test cases", function(){

  it("Search with reaults", function() {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/register"] > .css-wd8hou > .chakra-text').click();
    cy.get('#name').type('Elizabeth');
    cy.get('#lastName').type('Huanca');
    cy.get('#field-\\:r4\\:').type('Tarantula anonima');
    cy.get('#email').type('ehuanca@gmail.com');
    cy.get('#password').type('cnyora');
    cy.get('.css-w13as5 > .chakra-button').click();
  })
})
  