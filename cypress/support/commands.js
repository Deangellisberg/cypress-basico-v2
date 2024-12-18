Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Deangellis')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('deangellis@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})