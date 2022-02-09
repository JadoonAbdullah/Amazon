import LoginPage from '../pages/common/LoginPO'

const loginPage = new LoginPage()

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to login
			 * @example cy.login(app, user, data)
			 */
			login: typeof login
		}
	}
}

export const login = (app: string, data: any, user?: string) => {
	if (app.toLowerCase() == 'storefront') {
		cy.then(() => {
			cy.log(`Opening the URL | ${Cypress.env('storefrontUrl')}`)
			Cypress.config('baseUrl', Cypress.env('storefrontUrl'))
			expect(Cypress.config('baseUrl')).to.eq(Cypress.env('storefrontUrl'))
		})
		cy.visit('/')
		loginPage.loginToStorefront(data)
		cy.url().should('eq', Cypress.env('storefrontUrl') + '/')
		}

	if (app.toLowerCase() == 'myaccount') {
		cy.then(() => {
			cy.log(`Opening the URL | ${Cypress.env('myAccountUrl')}`)
			Cypress.config('baseUrl', Cypress.env('myAccountUrl'))
			expect(Cypress.config('baseUrl')).to.eq(Cypress.env('myAccountUrl'))
		})
		cy.visit('/')
		loginPage.loginToMyAccount(data)
		cy.url().should('eq', Cypress.env('myAccountUrl') + '/')
	}
	if (app.toLowerCase() == 'megaconsole') {
		cy.then(() => {
			cy.log(`Opening the URL | ${Cypress.env('megaConsoleUrl')}`)
			Cypress.config('baseUrl', Cypress.env('megaConsoleUrl'))
			expect(Cypress.config('baseUrl')).to.eq(Cypress.env('megaConsoleUrl'))
		})
		cy.visit('/')
		if (typeof user != 'undefined' && user.toLowerCase() == 'supervisor') {
			loginPage.loginToMegaConsole(data)
		}
		cy.url().should('eq', Cypress.env('megaConsoleUrl') + '/')
	}
}
