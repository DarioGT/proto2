Ext.define('ProtoUL.model.MenuModel', {
    extend: 'Ext.data.Model',
    alias: 'model.menuModel',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'}
    ],
    
    proxy: {
        type: 'ajax',
        url: 'contact/menu'
    }
    
});
