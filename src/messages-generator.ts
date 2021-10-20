// @ts-ignore
const fs = require( 'fs' );
const supportedLanguages = [ 'fr' ];
try {
  const data = fs.readFileSync( 'messages.xlf', 'utf8' );

  for ( const line of data.split( '</trans-unit>' ) ) {
    console.log( line );
  }

  /*for( const language of supportedLanguages ) {
   const path = 'src/locale/messages.' + language + '.xlf'
   fs.appendFileSync(path, data)
   }*/
} catch ( err ) {
  console.error( err );
}


