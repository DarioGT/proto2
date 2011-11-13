Ext.define('ProtoUL.view.Viewport', {
    extend : 'Ext.container.Viewport',

    //requires: ['Ext.toolbar.Paging'],
    layout : 'border',
    defaults : {
        collapsible : true,
        split : true
    },
    items : [{
        // xtype: 'forumlist',
        region : 'west',
        width : 300,
        // title : 'Menu',
        layout: 'accordion',
        items:[{
            title: 'Menu',
            html: 'Content'
        },{
            title: 'Favorits',
            id: 'panel2',
            html: 'Content'
        }]
    }, {
        // xtype: 'properties',
        region : 'east',
        width : 300,
        title : 'Properties',
        collapsed : true,
    }, {


        // title: 'Master',
        // tbar: tb,
        region : 'center',
        collapsible : false,
        layout : 'border',
        defaults : {
            collapsible : true,
            split : true
        },

        items : [{
            region : 'center',
            layout : 'fit',

            collapsible : false,
            // items: masterGrid
            xtype : 'contactlist'
        }, {
            title : 'Details',
            region : 'south',
            collapsed : false,
            layout : 'fit',
            height : 180,
            minSize : 75,
        // items: protoTabs,

        }]
    }]

});
