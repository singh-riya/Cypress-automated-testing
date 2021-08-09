/// <reference types="Cypress" />

describe('Body shop tests QA', () => {
  it('first cy command test', () => {
    cy.visit('https://www.google.com');
    cy.get("input[title='Search']").type('Ionic for react{enter}');
    cy.contains('https://ionicframework.com/').click({force: true}); 

  })
})

describe('Google Search', () => {
  it('loads search page', () => {
    cy.visit('https://www.google.com');
  });

  it('searches for `ionic`', () => {
    cy.get('input[name="q"]').type('ionic{enter}');
  });

  it('gets first search result', () => {
    cy.get('#search a')
      .invoke('attr', 'href')
      .then(href => console.log(href));
  });
});