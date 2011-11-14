/**
 * 
 * @author Dario Gomez 
 * http://

 */

// Ext.require('Ext.toolbar.Paging');
// Ext.require('Ext.layout.container.Border');

Ext.Loader.setConfig({enabled: true});

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

    // views : [
        // 'menuTree',
    // ],
    
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