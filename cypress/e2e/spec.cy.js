

describe('empty spec', () => {
  it('Login with demo site', () => {
    cy.visit('https://www.tatilbudur.com')
    cy.get('#key').type("Antalya")
    cy.get('#password').type('1234')
    cy.xpath("#hotelSearchCheckIn").click()
    cy.xpath("(//*[@class='datepicker-switch'])[1]").click()
    
  })
})