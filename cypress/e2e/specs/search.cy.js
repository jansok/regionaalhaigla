/// <reference types="cypress" />

import { Homepage } from "../../components/homepage"
import { SearchResultPage } from "../../components/searchResultPage"

describe('Verify Regionaalhaigla Home Page Search Function', () => {
    var searchText = 'teenetemärgid'
    var resultAmount = 17
    var resultListLength = 10
    var title = 'Presidendi teenetemärgi pälvisid dr Ülo Zirel ja dr Valdo Toome'
    var urlTitle = 'presidendi-teenetemargi-palvisid-dr-ulo-zirel-ja-dr-valdo-toome'

    it('Verify company logo is present', () => {
        Homepage.logo().should('be.exist')
    })

    it('Verify main menu and patient menu link is visible', () => {
        Homepage.mainMenu().should('be.visible')
        Homepage.menuItem().find('a').invoke('attr', 'href').should('contain', '/patsiendile-0')
    })

    it('Verify search field is visible', () => {
        Homepage.searchField().should('be.visible')
    })

    it('Total number of search result is visible', () => {
        Homepage.searchField().type('teenetemärgid')
        Homepage.resultDropdown().should('be.visible')
        Homepage.resultDropdownTitle().should('have.text', searchText)
        Homepage.resultDropdownCount().should('contain.text', resultAmount)
    })

    it('Search result items list is visible', () => {
        Homepage.searchField().type(searchText)
        Homepage.searchButton().should('be.visible').click()
        cy.url().should('contain', '/search/site/teenetem%C3%A4rgid')
        SearchResultPage.resultList().find('li').should('have.length', resultListLength)
    })

    it('Title of search result item is visible', () => {
        cy.visit(Cypress.env('baseUrl') + 'search/site/teenetemärgid')
        cy.get('li').filter(':contains("' + title + '")').should('be.visible')
    })

    it('Can open search result item', () => {
        cy.visit(Cypress.env('baseUrl') + 'search/site/teenetemärgid')
        SearchResultPage.resultLink(urlTitle).should('be.visible').click()
        cy.url().should('contain', urlTitle)
        SearchResultPage.articleDate().should('contain.text', '07.02.2024')
    })
})