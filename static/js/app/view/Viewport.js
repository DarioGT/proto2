Ext.define('ProtoUL.view.Viewport', {
    extend: 'Ext.container.Viewport', 

    //requires: ['Ext.toolbar.Paging'],
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true
    },
    items: [{
        // title: 'Master',
        // tbar: tb,
        region: 'center',
        layout: 'fit',
        collapsible: false,
        // items: masterGrid
        xtype: 'contactlist'
    }, {
        title: 'Details',
        region: 'south',
        collapsed: true,
        layout: 'fit',
        height: 180,
        minSize: 75,
        defaults: {
            border: false,
            activeTab: 0
        },
        // items: protoTabs,
    }]

});