/**
 * This file is used specifically and only for development. It installs
 * `electron-debug`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

// Require `main` process to boot app
require('./electron-main')
