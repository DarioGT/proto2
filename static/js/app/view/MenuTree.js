Ext.define('ProtoUL.view.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menuTree',
    
    rootVisible: false,
    listeners: {
        'itemclick': function(view, model) {
            this.fireEvent('navclick', this, model.data.id);
        }
    },
    
    initComponent: function() {
        Ext.define('NavLink', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id', type: 'string'},
                {name: 'text', type: 'string'}
            ],
            
            proxy: {
                type: 'ajax',
                url: 'contact/menu'
            }
            
        });
        
        this.store = Ext.create('Ext.data.TreeStore', {
    		autoLoad: true,
            model: 'NavLink',
            root: {
                text:'menu',
                expanded: true,
            },            
        });
        
        this.callParent(arguments);
        this.addEvents('navclick');
    }
});