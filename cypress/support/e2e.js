beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect an error related with 'addthis widget error'
        // and don't want to fail the test so false is returned
        if (err.message.includes('addthis')) {
          return false
        }
      })
    cy.visit(Cypress.env('baseUrl'))
  })