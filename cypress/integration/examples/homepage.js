describe('daily test', () => {
  it('daily', () => {
    cy.visit('https://buy.line.me/daily')
    cy.contains('爆殺驚喜')
    cy.scrollTo('bottom')
  })
})