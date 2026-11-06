import ElementParser from "./common/ElementParser.js";
import Ext_tree_Tree from "./Ext/tree/Tree.js";

export default class EWCTree extends Ext_tree_Tree {
    constructor () {
        super( [], [] );
        this.xtype = "tree";
    }
}
try {
    if ( window.customElements.get( "ext-tree" ) == undefined ) {
        window.customElements.define( "ext-tree", ElementParser.withParsedCallback( EWCTree ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-tree" ) == undefined ) {
        window.customElements.define( "ext-tree", EWCTree );
    }
}
