describe('test auth page', () => {

  it('we expect to get an error message', () => {

    cy.visit("http://localhost:8080/login")

    cy.get("input[placeholder='Имейл']").type("uncorrectemail")
    cy.get("input[placeholder='Пароль']").type("uncorrectpassword")

    cy.get("form").submit()

    cy.contains("p#authMessage", "Логин или пароль неверен!").should("be.visible")

    cy.get("input[placeholder='Имейл']").clear()
    cy.get("input[placeholder='Пароль']").clear()
    cy.get("input[placeholder='Имейл']").type("yt.volodyago@gmail.com")
    cy.get("input[placeholder='Пароль']").type("12345678")

    cy.get("form").submit()

    cy.get("aside")
  })
  
})