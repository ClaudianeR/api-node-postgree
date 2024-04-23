/// <reference types="Cypress" />

describe ('GET retornando todos os produtos', () =>{
    it('GET /produtos', () =>{
        cy.request ('/produtos')
        .its('status')
        .should('equal',200)

    })

})

describe('GET retornando produto pelo id', () => {
    it('GET /produto/id', () => {
        cy.request('/produto/1')
        .its('status')
        .should('equal',200)

    })
    

})