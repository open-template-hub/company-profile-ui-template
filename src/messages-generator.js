const fs = require('fs')

const jsdom = require("jsdom")
const { JSDOM } = jsdom
global.DOMParser = new JSDOM().window.DOMParser

const xmlserializer = require('xmlserializer');

const filePaths = {
  sourceLocale: {
    languageCode: 'en-US',
    path: './messages.xlf'
  },
  localizedFiles: [
      {
        languageCode: 'fr',
        path: './src/locale/messages.fr.xlf'
      }
  ]
}

let sourceLocaleFile;
const sourceLocalePath = filePaths.sourceLocale.path
try {
  sourceLocaleFile = fs.readFileSync( sourceLocalePath, 'utf8' )
} catch (err) {
  console.log( 'Error while opening source locale: ' + err)
  process.exit( 1 )
}
const parser = new DOMParser()
const sourceLocaleXml = parser.parseFromString( sourceLocaleFile, 'text/xml' )

for( let i = 0; i < filePaths.localizedFiles.length; i++ ) {
  console.log()
  console.log( 'For ' + filePaths.localizedFiles[i].languageCode )
  console.log( '----------' )

  let localizedFile
  const localizedFilePath = filePaths.localizedFiles[i].path
  try {
    localizedFile = fs.readFileSync(localizedFilePath, 'utf8')
  } catch ( err ) {
    console.error( err )
    process.exit( 1 )
  }

  const localizedXml = parser.parseFromString( localizedFile, 'text/xml' )

  const sourceLocaleTransUnits = sourceLocaleXml.getElementsByTagName('trans-unit')
  let localizedTransUnits = localizedXml.getElementsByTagName( 'trans-unit' )

  console.log()
  console.log( 'Added Words By IDs' )
  console.log( '----------' )

  for( let i = 0; i < sourceLocaleTransUnits.length; i++ ) {
    const transUnit = sourceLocaleTransUnits[i].cloneNode( true )

    if ( !localizedXml.getElementById( transUnit.id ) ) {
      console.log( transUnit.id )
      const localizedBodyElement = localizedTransUnits[0].parentNode
      localizedBodyElement.appendChild( transUnit )
    }
  }

  localizedTransUnits = localizedXml.getElementsByTagName( 'trans-unit' )
  let unnecessaryLocalizedMessages = []
  for( let i = 0; i < localizedTransUnits.length; i++) {
    const transUnit = localizedTransUnits[i]

    if ( !sourceLocaleXml.getElementById( transUnit.id ) ) {
      unnecessaryLocalizedMessages.push( transUnit.id )
    }
  }

  console.log()
  console.log( 'Removed Words By IDs' )
  console.log( '----------' )
  for( let i = 0; i < unnecessaryLocalizedMessages.length; i++ ) {
    console.log( unnecessaryLocalizedMessages[i] )
    localizedXml.getElementById( unnecessaryLocalizedMessages[i] ).remove()
  }

  // save updated local file
  let newLocalFile = localizedXml.documentElement
  newLocalFile = xmlserializer.serializeToString( newLocalFile )

  fs.writeFileSync( localizedFilePath, newLocalFile, { encoding:'utf8',flag:'w' } )

  localizedTransUnits = localizedXml.getElementsByTagName( 'trans-unit' )

  console.log()
  console.log( 'Untranslated Words' )
  console.log( '----------' )
  // print untranslated words
  for( let i = 0; i < localizedTransUnits.length; i++ ) {
    if( localizedTransUnits[i].getElementsByTagName('target').length === 0 ) {
      console.log( localizedTransUnits[i].id )
    }
  }
}

