context('Form page integration tests', () => {
  it('“Add new location” (add new office to list)', () => {
    let listItemsBefore = 0
    cy.visit('/form?title="Foo&address=5555 W. Some St."')
      .get('form li')
      .children()
      .then(els => listItemsBefore = els.length)
      .get('form > ul')
      .click()
      .get('form li')
      .children()
      .then(els => {
        const listItemsAfter = els.length
        expect(listItemsBefore).to.be.below(listItemsAfter)
        return els
      })
      .last()
      .click()
      .get('input[name=name]')
      .type('John Smith')
      .get('input[name=role]')
      .type('UI Designer')
      .get('input[name=email]')
      .type('wrong@email.com')
      .get('input[name=phone]')
      .type('(555) 456-789-321')
      .get('button')
      .last()
      .click()
      .get('.top-0.fixed.w-full.h-full')
      .contains('The location has been created')
  })
  it('“Edit office” (edit and save office data)', () => {
    cy.visit('/form?edit=true&id=3&title=Headquarters&address=3763%20W.%20Dallas%20St.&name=John%20Smith&role=Software%20Developer&email=geogia.young%40example.com&phone=%28808%29%20555-0111&color=accent-red&deleted=false')
      .get('button')
      .last()
      .then(el => {
        expect(el.hasClass('cursor-not-allowed')).to.be.equal(true)
      })
      .get('input[name=phone]')
      .type('3')
      .get('button')
      .last()
      .then(el => {
        expect(el.hasClass('cursor-not-allowed')).to.be.equal(false)
        return el
      })
      .click()
      .get('.top-0.fixed.w-full.h-full')
      .contains('The location has been updated')
  })
})