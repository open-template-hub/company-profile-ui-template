const dotenv = require( "dotenv" );
const env = dotenv.config();

console.info( env.parsed );

const path = require( "path" );
const express = require( "express" );

// express init
const app = express();

// directory that we will serve
app.use( express.static( __dirname + "/dist/web-ui-template" ) );

app.get( "*", function ( req, res, next ) {

  if ( "https" !== req.headers[ "x-forwarded-proto" ] && "production" === process.env.NODE_ENV ) {
    res.redirect( "https://" + req.hostname + req.url );
  } else {
    // Continue to other routes if we're not redirecting
    next();
  }

} );

// redirect all requests to index.html
app.get( "/*", function ( req, res ) {
  res.sendFile( path.join( __dirname + "/dist/web-ui-template/index.html" ) );
} );

// listen port
const port = process.env.PORT || 4200;
app.listen( port, () => {
  console.info( "UI Server is running on port: ", port );
} );
