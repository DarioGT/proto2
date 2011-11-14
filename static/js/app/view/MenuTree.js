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
            
            // proxy: {
                // type: 'ajax',
                // url: '../data/nav-tree.json'
            // }
        });
        
        this.store = Ext.create('Ext.data.TreeStore', {
            model: 'NavLink',

            root: {
                text:'Online',
                expanded: true,
                children:[{
                    text:'Models',
                    expanded:true,
                    children:[
                        { text:'MCCD', iconCls:'user', leaf:true },
                        { text:'MCD', iconCls:'user', leaf:true },
                    ]
                },{
                    text:'Action Terrains',
                    expanded:true,
                    children:[
                        { text:'Kiana', iconCls:'user-girl', leaf:true },
                        { text:'Aubrey', iconCls:'user-girl', leaf:true },
                        { text:'Cale', iconCls:'user-kid', leaf:true }
                    ]
                }]
            },            
            
        });
        
        this.callParent(arguments);
        this.addEvents('navclick');
    }
});