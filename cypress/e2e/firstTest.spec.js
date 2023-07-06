describe('our first test',()=>{
    it('first test',()=>{
        cy.visit("http://localhost:3000/");
    cy.get('[data-cy="emailInputField"]').type("Shima");
    cy.get('[data-cy="passWordInputField"]').type("Abc123");
    })
})