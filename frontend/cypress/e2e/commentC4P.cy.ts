describe("search test cases", function(){

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('User');
    Cypress.Cookies.preserveOnce('Token');
  })

  it("Authenticate user", function() {
    cy.visit("http://localhost:3000/login");
    // cy.get('#email').type('ehuanca@gmail.com');
    // cy.get('#password').type('cnyora');
    // cy.get('.css-w13as5 > .chakra-button').click();
    //cy.get('#password').type('cnyora');
    // // cy.intercept('http://localhost:5000/api/v1/search/topics').as('userSearchTopics');
    // // cy.intercept('http://localhost:5000/api/v1/search/locations').as('userSearchLocations');
    // cy.intercept({
    //   method: 'GET',
    //   url: 'http://localhost:5000/api/v1/callforpapers'
    // }).as('getCallforpapers');
    // cy.intercept({
    //   method: 'POST',
    //   url: 'http://localhost:5000/api/v1/auth/login'
    // }).as('loginUser');
    //cy.get('.css-w13as5 > .chakra-button').click();
    //cy.wait('@loginUser');
    

    //cy.wait('@getCallforpapers');
    //cy.get(':nth-child(1) > .css-1868di6').click();
    // cy.visit("http://localhost:3000/callforpapers");
    // cy.get(':nth-child(1) > .css-1868di6').click();
    // cy.wait('@userSearchTopics');
    // cy.wait('@userCallforpapers');
    // cy.wait('@userCallforpapers');
    //cy.get(':nth-child(1) > .css-1868di6 > .chakra-stack').click();    
    // cy.get(':nth-child(1) > .css-1868di6').click();
  })

  it("publish comment", function () {
    cy.visit("http://localhost:3000/callforpapers");
    cy.get(':nth-child(1) > .css-1868di6').click();
    cy.get('.chakra-input__group > .chakra-input').type('Que buen evento');
    cy.get('.chakra-input__right-element > .chakra-button').click();
  })
})
