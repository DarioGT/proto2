// ['id', 'name', 'phone', 'email'] 
Ext.define('ProtoUL.model.Contact', {
    extend: 'Ext.data.Model',

    // 1. Definicion estandar  
    // fields: ['id', 'name', 'phone', 'email'],
    
    // 
    config: {
        fields: ['id', 'name'],
    },
    constructor: function(config) {
        this.initConfig(config);
    },

    setFields: function(fields) {
        var fieldDefinition = ['id', 'name', 'phone', 'email'];
        this.fields.setConfig(fieldDefinition);
        // return fieldDefinition ;
    },
    
    
    // No funciona ----------------------------------------------
    // constructor: function(config) {
        // this.initConfig(config);
        // this.callParent([config]);
        // var fieldDefinition = ['id', 'name', 'phone', 'email'];
        // config.fields = fieldDefinition;  // Intento con el config q recibe
        // this.fields = fieldDefinition; // Con la variable de la clase
        // return this;
    // } 

    
    // No funciona ----------------------------------------------
    // fields: function() {
        // var fieldDefinition = ['id', 'name', 'phone', 'email']
        // return fieldDefinition 
    // } , 
    
    // No funciona ----------------------------------------------
    // init: function() {
        // var fieldDefinition = ['id', 'name', 'phone', 'email']
        // this.fields = fieldDefinition
    // }
    
});