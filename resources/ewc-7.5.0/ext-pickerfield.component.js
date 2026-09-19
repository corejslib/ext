import ElementParser from "./common/ElementParser.js";
import Ext_field_Picker from "./Ext/field/Picker.js";

export default class EWCPickerfield extends Ext_field_Picker {
    constructor () {
        super( [], [] );
        this.xtype = "pickerfield";
    }
}
try {
    if ( window.customElements.get( "ext-pickerfield" ) == undefined ) {
        window.customElements.define( "ext-pickerfield", ElementParser.withParsedCallback( EWCPickerfield ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-pickerfield" ) == undefined ) {
        window.customElements.define( "ext-pickerfield", EWCPickerfield );
    }
}
