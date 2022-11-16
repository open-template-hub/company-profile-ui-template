const dotenv = require( "dotenv" );
const env = dotenv.config();

console.info( env.parsed );

const path = require( "path" );
const express = require( "express" );
const compression = require( "compression" );

// express init
const app = express();

// compression
app.use( compression() );

app.disable( "x-powered-by" );

// directory that we will serve
app.use( express.static( __dirname + "/dist/company-profile-ui-template" ) );

// If not using Cloudflare Flexible SSL configuration redirect all requests to https
// https://support.cloudflare.com/hc/en-us/articles/115000219871-Troubleshooting-redirect-loop-errors-

// redirect all requests to index.html
app.get( "/*", function ( req, res ) {
  let selectedLanguage = "en-US";

  if ( req.acceptsLanguages( "fr" ) || req.url.startsWith( "/fr/" ) ) {
    selectedLanguage = "fr";
  }

  res.sendFile( path.join( __dirname + "/dist/company-profile-ui-template/" + selectedLanguage + "/index.html" ) );
} );

// listen port
const port = process.env.PORT || 4200;
app.listen( port, () => {
  console.info( "UI Server is running on port: ", port );
} );
