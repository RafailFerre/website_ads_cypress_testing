const chance = require('chance').Chance();

describe('SIGNUP', () => {
    it('Verify user can signup', () => {
      cy.visit('http://127.0.0.1:5000/register')
  
      cy.get('#username').type(chance.name())
      cy.get('#email').type(chance.email())
      cy.get('#password').type('123')
      cy.get('body > div > form > button').click()
  
      cy.location('pathname').should('eq', '/login')
      cy.get('#loginForm').should('be.visible')
    })
  })