describe('create user happy path tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8085/')
      })
    
    it('should create user when all the parameters are valid', () => {
      const userName  = 'someUnqueUserName'
      cy.get('#name').type('name');
      cy.get('#userName').type(userName);
      cy.get('#email').type('email@email.com');
      cy.get('#submitBtn').click();

      cy.contains(userName)
    });
});