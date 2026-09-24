import ElementParser from "./common/ElementParser.js";
import Ext_list_Tree from "./Ext/list/Tree.js";

export default class EWCTreelist extends Ext_list_Tree {
    constructor () {
        super ( [], [] );
        this.xtype = "treelist";
    }
}
try {
    if ( window.customElements.get( "ext-treelist" ) == undefined ) {
        window.customElements.define( "ext-treelist", ElementParser.withParsedCallback( EWCTreelist ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-treelist" ) == undefined ) {
        window.customElements.define( "ext-treelist", EWCTreelist );
    }
}
