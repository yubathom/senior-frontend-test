context('Index page integration tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Toggle open/close office cards', () => {
    let numberOfArticlesBefore = 0
    cy.get('.office-card')
      .first()
      .children()
      .then(els => {
        numberOfArticlesBefore = els.length
      })
      .click()
      .get('.office-card')
      .first()
      .children()
      .then(els => {
        const numberOfArticlesAfter = els.length
        expect(numberOfArticlesBefore).to.be.below(numberOfArticlesAfter)
      })
      .get('.office-card')
      .first()
      .children()
      .first()
      .click()
      .get('.office-card')
      .first()
      .children()
      .then(els => {
        expect(els.length).to.be.equal(numberOfArticlesBefore)
      })
  })

  it('“Delete office” (remove office from list)', () => {
    let numberOfCards = 0

    cy.get('.office-card')
      .then(els => {
        numberOfCards = els.length
      })
      .get('.office-card').first().click()
      .children()
      .get('button')
      .then(buttons => {
        buttons[1].click()
      })
      .wait(300)
      .get('.office-card')
      .then(els => {
        expect(numberOfCards).to.be.above(els.length)
      })
      .get('.top-0.fixed.w-full.h-full')
      .contains('The location has been deleted')
  })
})
