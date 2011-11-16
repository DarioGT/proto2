Ext.define('ProtoUL.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ProtoUL.view.MenuTree',
        'ProtoUL.view.Properties',
    ],

    //requires: ['Ext.toolbar.Paging'],
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true
    },
    items: [{
        xtype: 'box',
        region:'north',
        html: '<span class="title">Proto Certae </span><span class="subtitle">Version 0.0</span>',
        height: 40,
        collapsible: false,
        split: false,
    },{
        // xtype: 'forumlist',
        region: 'west',
        width: 300,
        // title : 'Menu',
        layout: 'accordion',
        items: [{
            title: 'Menu',
            layout: 'fit',
            xtype: 'menuTree'
            // xtype: 'treepanel',
            
        }, {
            title: 'Favorits',
            // id: 'panel2',
            // html: 'Content'
        }]
    }, {
        // xtype: 'properties',
        region: 'east',
        width: 300,
        title: 'Properties',
        collapsed: true,
        xtype : 'properties',
    }, {
        // title: 'Master',
        // tbar: tb,
        region: 'center',
        collapsible: false,
        layout: 'border',
        defaults: {
            collapsible: true,
            split: true
        },

        items: [{
            region: 'center',
            layout: 'fit',

            collapsible: false,
            // items: masterGrid
            xtype: 'contactlist'
        }, {
            title: 'Details',
            region: 'south',
            collapsed: false,
            layout: 'fit',
            height: 180,
            minSize: 75,
            // items: protoTabs,
        }]
    }, {
        region: 'south',
        collapsible: false,
        split: false,
        height: 20,
    }
    ]

});