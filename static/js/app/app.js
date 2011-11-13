/**
 * 
 * @author Dario Gomez 
 * http://

 */

// Ext.require('Ext.toolbar.Paging');
// Ext.require('Ext.layout.container.Border');

Ext.application({
    name: 'ProtoUL',
    appFolder: 'static/js/app',

    requires: [
        'Ext.toolbar.Paging', 
        'Ext.layout.container.Border',
    ],

    controllers: [
        'Contacts'
    ],

    autoCreateViewport: true

    // launch: function() {
        // Ext.create('Ext.container.Viewport', {
            // layout: 'fit',
            // items: [
                // {
                    // xtype: 'mainForm'
                // }
            // ]
        // });
    // }
    
    
});