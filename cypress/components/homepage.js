export class Homepage {

    static mainMenu() {
        return cy.get('#menu-main')
    }

    static menuItem() {
        return cy.get('ul#mdmegamenu-1 > li')
    }

    static logo() {
        return cy.get('.logo')
    }

    static searchField() {
        return cy.get('#edit-search-block-form--2')
    }

    static resultDropdown() {
        return cy.get('.ac_results ul li')
    }

    static resultDropdownTitle() {
        return cy.get('.ac_results ul li div[class*="suggestion"] strong strong')
    }

    static resultDropdownCount() {
        return cy.get('.ac_results ul li div[class*="message"]')
    }

    static searchButton() {
        return cy.get('#edit-submit--2')
    }
}