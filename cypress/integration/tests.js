describe('Loading Pages', () => {
  it('visits the homepage', () => {
    cy.visit('/')
      .contains('Gridsome Portfolio Starter')
  })

  it('visits the blog page', () => {
    cy.visit('/blog')
      .contains('Introduction to Gridsome')
  })

  it('can click the blog', () => {
    cy.visit('/')

    cy.get('[data-cypress=blog]').click()

    cy.url().should('include', '/blog')
    cy.contains('Introduction to Gridsome')
  })

  it('can visit a single blog post', () => {
    cy.visit('/introduction-to-gridsome')

    cy.url().should('include', '/introduction-to-gridsome')
    cy.contains('Introduction to Gridsome')
  })

  it('can click a single blog post', () => {
    cy.visit('/blog')

    cy.contains('Introduction to Gridsome').click()

    cy.url().should('include', '/introduction-to-gridsome')
    cy.contains('Introduction to Gridsome')
  })

  it('visits the docs page', () => {
    cy.visit('/docs')
      .contains('Vue Components in Markdown')
  })

  it('can click the docs page', () => {
    cy.visit('/')

    cy.get('[data-cypress=docs]').click()

    cy.url().should('include', '/docs')
    cy.contains('Vue Components in Markdown')
  })

  it('can visit a single doc post', () => {
    cy.visit('/docs/vue-components-in-markdown')

    cy.url().should('include', '/docs/vue-components-in-markdown')
    cy.contains('Vue Components in Markdown')
  })

  it('can click a single doc post', () => {
    cy.visit('/docs')

    cy.contains('Vue Components in Markdown').click()

    cy.url().should('include', '/docs/vue-components-in-markdown')
    cy.contains('Vue Components in Markdown')
  })
})

describe('Page Scroll to Sections', () => {
  it('can scroll to Projects', () => {
    cy.visit('/')

    cy.get('[data-cypress=projects]').click()
    cy.get('#projects').should('be.visible')
  })

  it('can scroll to About', () => {
    cy.visit('/')

    cy.get('[data-cypress=about]').click()
    cy.get('#about').should('be.visible')
  })

  it('can scroll to Contact', () => {
    cy.visit('/')

    cy.get('[data-cypress=contact]').click()
    cy.get('#contact').should('be.visible')
  })
})

describe('Pagination', () => {
  it('the next button works', () => {
    cy.visit('/blog')

    cy.get('[data-cypress=next').click()
    cy.url().should('include', '/blog/2')
    cy.contains('Vue vs React Comparison')
  })

  it('the prev button works', () => {
    cy.visit('/blog/2')

    cy.get('[data-cypress=prev').click()
    cy.url().should('include', '/blog')
    cy.contains('Introduction to Gridsome')
  })
})

describe('Tags for posts', () => {
  it('can visit tags page', () => {
    cy.visit('/tag/frontend')

    cy.contains('Tag: frontend')
    cy.contains('Introduction to Gridsome')
    cy.contains('How to Get Better At Coding')
    cy.contains('Top 5 Static Site Generators in Vue')
  })

  it('can click on tags from blog post page', () => {
    cy.visit('/introduction-to-gridsome')

    cy.contains('frontend').click()
    cy.url().should('include', '/tag/frontend')
    cy.contains('Tag: frontend')
    cy.contains('Introduction to Gridsome')
  })
})

describe('Theme Switcher', () => {
  it('can change to dark theme', () => {
    cy.visit('/')

    cy.get('[data-cypress=switchTheme]').click({force: true})
    cy.get('.content-wrapper').should('have.class', 'theme-dark')
  })

  it('can change to light theme', () => {
    cy.visit('/')

    cy.get('[data-cypress=switchTheme]').click({force: true})
    cy.get('[data-cypress=switchTheme]').click({force: true})
    cy.get('.content-wrapper').should('have.class', 'theme-light')
  })
})

describe('Search with Vue Fuse', () => {
  it('can search for blog posts', () => {
    cy.visit('/')

    cy.get('[data-cypress=search-results]').should('not.exist')
    cy.get('[data-cypress=search]').type('Introduction')
    cy.get('[data-cypress=search-results]').should('exist')
    cy.contains('Introduction to Gridsome')
    cy.contains('Gridsome is a Vue.js-powered')
  })

  it('can search for docs', () => {
    cy.visit('/')

    cy.get('[data-cypress=search-results]').should('not.exist')
    cy.get('[data-cypress=search]').type('mark')
    cy.get('[data-cypress=search-results]').should('exist')
    cy.contains('Vue Components in Markdown')
  })
})

describe('Mobile View', {
  viewportWidth: 400,
}, () => {
  it('shows the hamburger menu', () => {
    cy.visit('/')

    cy.get('[data-cypress=menu]').should('not.exist')
    cy.get('[data-cypress=hamburger]').should('exist').click()
    cy.get('[data-cypress=menu]').should('exist')
  })
})
