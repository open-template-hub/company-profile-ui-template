const { spawnSync } = require( 'child_process' );
const outdatedCmd = spawnSync( 'npm', [ 'outdated' ] );

const lines = outdatedCmd.stdout.toString().split( '\n' );

const columnIndexes = [ 0, 0, 0, 0 ];

console.log(
    '<p align="center">\n' +
    '  <a href="http://opentemplatehub.com">\n' +
    '    <img src="https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/web-ui-logo.png" alt="Logo" width=200>\n' +
    '  </a>\n' +
    '</p>\n' +
    '\n' +
    '\n' +
    '<h1 align="center">\n' +
    'Open Template Hub - Company Profile UI Template v2\n' +
    '  <br/>\n' +
    '(outdated packages)\n' +
    '</h1>\n' +
    '\n' +
    'Following packages are not updated in the develop branch yet. So, if you want to update outdated packages on your own risk, update the package.json and install dependencies.\n'
);

for ( const line of lines ) {
  if ( line.length === 0 ) {
    continue;
  }

  if ( lines.indexOf( line ) === 0 ) {
    columnIndexes[ 0 ] = line.indexOf( 'Current' );
    columnIndexes[ 1 ] = line.indexOf( 'Wanted' ) + 3;
    columnIndexes[ 2 ] = line.indexOf( 'Latest' ) + 6;
    columnIndexes[ 3 ] = line.indexOf( 'Location' ) + 9;
  }

  let modifiedLine = line;

  if ( columnIndexes [ 0 ] >= 0 ) {
    for ( const columnIndex of columnIndexes ) {
      modifiedLine = modifiedLine.substring( 0, columnIndex ) + ' | ' + modifiedLine.substring( columnIndex, modifiedLine.length );
    }
    console.log( '| ' + modifiedLine + ' |' );
  } else {
    console.log( modifiedLine );
  }

  if ( lines.indexOf( line ) === 0 ) {
    console.log( '| --- | --- | --- | --- | --- |' );
  }
}

console.log(
    '\n' +
    '<table align="right"><tr><td><a href="https://opentemplatehub.com"><img src="https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/brand-logo.png" width="50px" alt="oth"/></a></td><td><b>Open Template Hub © 2021</b></td></tr></table>\n'
);
