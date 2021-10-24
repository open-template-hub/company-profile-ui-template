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

const messagesPath = './messages.xlf'

const frMessagesPath = './src/locale/messages.fr.xlf'

try {
  const messagesDoc = fs.readFileSync(messagesPath, 'utf8')
  const frMessagesDoc = fs.readFileSync(frMessagesPath, 'utf8')

  const parser = new DOMParser()
  const frMessagesXml = parser.parseFromString(frMessagesDoc, 'text/xml')
  const messagesXml = parser.parseFromString(messagesDoc, 'text/xml')

  const messagesTransUnits = messagesXml.getElementsByTagName('trans-unit')
  let frMessagesTransUnits = frMessagesXml.getElementsByTagName( 'trans-unit' )

  console.log( 'Added Words By IDs' )
  console.log( '----------' )

  for( let i = 0; i < messagesTransUnits.length; i++ ) {
    const transUnit = messagesTransUnits[i].cloneNode( true )

    if ( !frMessagesXml.getElementById( transUnit.id ) ) {
      console.log( transUnit.id )
      const frMessagesBodyElement = frMessagesTransUnits[0].parentNode
      frMessagesBodyElement.appendChild( transUnit )
    }
  }

  frMessagesTransUnits = frMessagesXml.getElementsByTagName( 'trans-unit' )
  let unnecessaryFrMessages = []
  for( let i = 0; i < frMessagesTransUnits.length; i++) {
    const transUnit = frMessagesTransUnits[i]

    if ( !messagesXml.getElementById( transUnit.id ) ) {
      unnecessaryFrMessages.push( transUnit.id )
    }
  }

  console.log()
  console.log( 'Removed Words By IDs' )
  console.log( '----------' )
  for( let i = 0; i < unnecessaryFrMessages.length; i++ ) {
    console.log( unnecessaryFrMessages[i] )
    frMessagesXml.getElementById( unnecessaryFrMessages[i] ).remove()
  }

  // save updated local file
  let newLocalFile = frMessagesXml.documentElement
  newLocalFile = xmlserializer.serializeToString( newLocalFile )

  fs.writeFileSync( frMessagesPath, newLocalFile, { encoding:'utf8',flag:'w' } )

  frMessagesTransUnits = frMessagesXml.getElementsByTagName( 'trans-unit' )

  console.log()
  console.log( 'Untranslated Words' )
  console.log( '----------' )
  // print untranslated words
  for( let i = 0; i < frMessagesTransUnits.length; i++ ) {
    if( frMessagesTransUnits[i].getElementsByTagName('target').length === 0 ) {
      console.log( frMessagesTransUnits[i].id )
    }
  }
} catch (err) {
  console.error(err)
}


