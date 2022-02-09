import CommonPage from '../pages/megaconsole/common/CommonPO'

const commonPage = new CommonPage()

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to set agent status
			 * @example cy.setAgentStatus()
			 */
			setAgentStatus: typeof setAgentStatus

			/**
			 * Custom command to get GUID
			 * @example cy.getGuid()
			 */
			getGuid: typeof getGuid

			/**
			 * Custom command to get IXN
			 * @example cy.getIxn()
			 */
			getIxn: typeof getIxn

			/**
			 * Custom command to send message from Mega Console
			 * @example cy.replyMessage()
			 */
			replyMessageFromMegaConsole: typeof replyMessageFromMegaConsole

			/**
			 * Custom command to dispose interaction
			 * @example cy.dispose()
			 */
			dispose: typeof dispose
		}
	}
}

export const setAgentStatus = (status: string) => {
	commonPage.setAgentStatus(status)
}

export const getGuid = () => {
	return commonPage.getGuid()
}

export const getIxn = () => {
	return commonPage.getInteractionId()
}

export const replyMessageFromMegaConsole = (text: string) => {
	commonPage.typeMessage(text)
}

export const dispose = (ixn: any) => {
	commonPage.disposeInteraction(ixn)
}
