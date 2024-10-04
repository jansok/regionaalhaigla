export class SearchResultPage {

    static resultList() {
        return cy.get('ol[class*="search-results"]')
    }

    static resultLink(linkText) {
        return cy.get(`a[href*="/${linkText}`)
    }

    static articleDate() {
        return cy.get('.date')
    }
}