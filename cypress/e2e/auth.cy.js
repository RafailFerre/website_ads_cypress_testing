describe('AUTH', () => {
  it('Verify user can login', () => {
    cy.visit('http://127.0.0.1:5000/login')

    cy.get('#email').type('trump@mail.com')
    cy.get('#password').type('123')
    cy.get('#loginForm > button').click()

    cy.location('pathname').should('eq', '/profile')
    cy.get('#greeting').should('be.visible')
    cy.get('#greeting').should('contain', 'Welcome')
  })
})