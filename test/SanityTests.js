var assert = require("chai").assert
var agent = require("superagent");

describe( "sanity test", function () {

  this.timeout(10000);

  it( "sanity post", function ( done ) {
    agent.post( "http://httpbin.org/post" )
      .send( {name:"foo"} )
      .end( function( err, res ) {
        console.log( JSON.parse( res.body.data ) )
        done()
      } )
  } )
} )

