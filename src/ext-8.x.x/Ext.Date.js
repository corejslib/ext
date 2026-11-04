import locale from "#vue/locale";

const weekDayLong = new Intl.DateTimeFormat( locale, { "weekday": "long" } ),
    weekDayShort = new Intl.DateTimeFormat( locale, { "weekday": "short" } ),
    monthLong = new Intl.DateTimeFormat( locale, { "month": "long" } ),
    monthShort = new Intl.DateTimeFormat( locale, { "month": "short" } );

Ext.Date.dayNames = [];
Ext.Date.dayNamesShort = [];

// 2020-01-05 - воскресенье
const firstDay = Temporal.PlainDate.from( "2020-01-05" );

for ( let n = 0; n < 7; n++ ) {
    const day = firstDay.add( { "days": n } );

    Ext.Date.dayNames.push( weekDayLong.format( day ) );
    Ext.Date.dayNamesShort.push( weekDayShort.format( day ) );
}

Ext.Date.monthNames = [];
Ext.Date.monthNamesShort = [];

for ( let n = 0; n < 12; n++ ) {
    const month = Temporal.PlainDate.from( { "year": 2020, "month": n + 1, "day": 1 } );

    Ext.Date.monthNames.push( monthLong.format( month ) );
    Ext.Date.monthNamesShort.push( monthShort.format( month ) );
}

for ( let n = 0; n < Ext.Date.monthNames.length; n++ ) {
    Ext.Date.monthNumbers[ Ext.Date.monthNames[ n ] ] = n;
    Ext.Date.monthNumbers[ Ext.Date.monthNamesShort[ n ] ] = n;
}

Ext.Date.getShortMonthName = month => Ext.Date.monthNamesShort[ month ];

Ext.Date.getShortDayName = day => Ext.Date.dayNamesShort[ day ];

Ext.Date.formatExt = Ext.Date.format;

Ext.Date.format = Ext.util.Format.date;
