describe('empty spec', () => {
  it('Login with CMS', () => {
    cy.visit('https://testapi.macfit.com.tr/')
    cy.get('#loginUsernameInput').type('hq.user')
    cy.get('#loginPasswordInput').type('HqM@rs21!')
    cy.get('#loginSubmitButton').click()
    
  })
})