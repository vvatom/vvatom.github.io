
describe('enter vvatom portfolio site', () => {
  it('passes',async () => {
    cy.visit('https://vvatom.github.io/')
    cy.get('.content_menu_navigation-pointer').contains('About me').click()
    cy.get('.content_menu_navigation-pointer').contains('Blog').click()
    cy.get('.content_menu_navigation-pointer').contains('Projects').click()
    cy.get('.right_arrow-top').click()

    //Tasks list
    cy.get('a[href*="https://vvatom.github.io/to-do-list/"]').first().invoke('removeAttr', 'target').click()
    cy.get("input[placeholder=\"Type your task...\"]").type("check add button");
    cy.get('.buttonAddTask').click()
    cy.get("input[placeholder=\"Type your task...\"]").type("check enter key").type("{enter}")
    cy.get('.taskBox').contains('check add button').click()

    cy.get('.filterButtonCompleted').click()
    cy.get('.taskBox').should('have.class','taskBoxLine')

    cy.get('.filterButtonUncompleted').click()
    cy.get('.taskBox').should('not.have.class','taskBoxLine')

    cy.get('.filterButtonAll').click()
    cy.get('.taskBox ').contains('check enter key').siblings('.taskButton').click()
    cy.get('.taskBox ').contains('check add button').siblings('.taskButton').click()

    //Rick & Morty Characters
    cy.visit('https://vvatom.github.io/')
    cy.get('.content_menu_navigation-pointer').contains('Projects').click()
    cy.get('a[href*="https://vvatom.github.io/rick-and-morty-lottery/"]').first().invoke('removeAttr', 'target').click()
    cy.get('.startQuestion__YES').click()
    cy.wait(6500)

    cy.get('.portal__image').click()
    const idOne = (await cy.get('.character__id')).text()
    console.log(idOne)

    cy.wait(2000)

    cy.get('.portal__image').click()
    const idTwo = (await cy.get('.character__id')).text()
    console.log(idTwo)

    expect(idOne).equal(idTwo)
  })
})