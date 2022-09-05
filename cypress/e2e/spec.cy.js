

describe('empty spec', () => {
  it('Login with demo site', () => {
    cy.visit('https://www.lmax.com/global/demo-login')
    cy.get('#username').type("test")
    cy.get('#password').type('1234')
    cy.get("(//*[contains(text(),'Login')])[6]").click()
    
  })
})