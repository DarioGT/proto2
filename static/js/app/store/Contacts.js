Ext.define('ProtoUL.store.Contacts', {
    extend: 'Ext.data.Store',
    model: 'ProtoUL.model.Contact',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 100},
    
    proxy: {
        type: 'ajax',
        api: {
        	read : 'contact/view.action',
            create : 'contact/create.action/',
            update: 'contact/update.action/',
            destroy: 'contact/delete.action/'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: false,
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});