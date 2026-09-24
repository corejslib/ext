import ElementParser from "./common/ElementParser.js";
import Ext_grid_HeaderContainer from "./Ext/grid/HeaderContainer.js";

export default class EWCHeadercontainer extends Ext_grid_HeaderContainer {
    constructor () {
        super ( [], [] );
        this.xtype = "headercontainer";
    }
}
try {
    if ( window.customElements.get( "ext-headercontainer" ) == undefined ) {
        window.customElements.define( "ext-headercontainer", ElementParser.withParsedCallback( EWCHeadercontainer ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-headercontainer" ) == undefined ) {
        window.customElements.define( "ext-headercontainer", EWCHeadercontainer );
    }
}
