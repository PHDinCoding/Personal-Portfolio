var React = require("react");

//  Used to make API calls
var helpers = require("../utils/helpers");

var Main = React.createClass({

        render: function() {
            return (
                <div className="container">
                    <div>
                        "Hello This is from parent"
                    </div>
                </div>
            )
        }

});

module.exports = Main;