/**
 * Created by trainee on 13/7/2017.
 */
Ext.define('NastedJsonXTemplate.model.SupplierModel', {
    extend: 'Ext.data.Model',

    fields: ['firstName', 'lastName', 'officeLocation', 'phoneNumber', 'email', 'latitude', 'longitude', {name :'debt', type: 'int'}, 'items' ]
});