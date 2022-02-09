/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */

import fs from 'fs-extra'
import path from 'path'

function getConfigurationByFile(file: string) {
	const pathToConfigFile = path.resolve('', 'cypress', 'support', 'config', `${file}.json`)
	return fs.readJson(pathToConfigFile)
}

export default (_on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
	const file = config.env.configFile || 'qa'

	return getConfigurationByFile(file)
}
