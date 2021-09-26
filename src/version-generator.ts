const version = require( '../package.json' ).version;
const jsdom = require( 'jsdom' );
const { JSDOM } = jsdom;
const fs = require( 'fs' );

console.log( 'export const version = \'' + version + '\';' );

JSDOM.fromFile( './src/index.html' ).then( dom => {

  const urlVersion = version.split( '.' ).join( '_' );

  const favicons = [
    dom.window.document.querySelector( '[rel="apple-touch-icon"]' ),
    dom.window.document.querySelector( '[rel="shortcut icon"]' ),
    dom.window.document.querySelector( '[rel="mask-icon"]' ),
  ];

  for ( const favicon of favicons ) {
    let hrefWithVersion;
    if ( favicon.getAttribute( 'href' ).includes( '?v=' ) ) {
      hrefWithVersion = favicon.getAttribute( 'href' ).substring( 0, favicon.getAttribute( 'href' ).indexOf( '?v=' ) + 3 ) + urlVersion;
    } else {
      hrefWithVersion = favicon.getAttribute( 'href' ) + '?v=' + urlVersion;
    }

    favicon.setAttribute( 'href', hrefWithVersion );
  }

  fs.writeFile( './src/index.html', '<!DOCTYPE html>' + dom.window.document.documentElement.outerHTML, () => {
    // Intentionally blank
  } );
} );
