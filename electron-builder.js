module.exports = {
  appId: 'com.waspkeeperstudio',
  productName: 'Waspkeeper Studio', // Change this to the name of your application
  directories: {
    output: 'release/' // Directory to put the packaged app
  },
  files: [
    'dist/**/*', // Include all files from the dist directory
    'package.json',
    // '!node_modules/**/*.node'
  ],
  // extraResources: [
  //   {
  //     from: 'node_modules/better-sqlite3',
  //     to: 'node_modules/better-sqlite3',
  //     filter: ["**/*.node"]
  //   }
  // ],
  asar: true, // Pack all files into an ASAR archive for better performance and to protect source codes
  win: {
    target: 'nsis', // Target packaging format for Windows
    icon: 'icons/icon.ico'
  },
  mac: {
    target: 'dmg',
    icon: 'icons/icon.icns'
  },
  linux: {
    target: 'AppImage',
    icon: 'icons'
  },
  nsis: {
    oneClick: false, // Require the user to confirm the installation
    allowToChangeInstallationDirectory: true // Allow user to select installation directory
  }
};
