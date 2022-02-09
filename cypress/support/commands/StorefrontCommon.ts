import CommonPage from "../pages/storefront/common/CommonPO"

const commonPage = new CommonPage()
declare global {
namespace Cypress {
interface Chainable {
/**
* Custom command to subscrive voice only
* @example cy.subscribeVoiceOnly()
*/
subscribeVoiceOnly: typeof subscribeVoiceOnly

}
}
}
export const subscribeVoiceOnly = () => {
commonPage.startTrailForVoiceOnly()
}