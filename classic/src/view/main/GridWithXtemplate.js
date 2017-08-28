Ext.define('NastedJsonXTemplate.view.main.supplierWithItems', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridWithXtemplate',

    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'begin ',
        },
        items: [{
            xtype: 'panel',

            width: '100%',
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'begin'
            },
            items: [{
                xtype: 'panel',

                width: '100%',
                autoScroll: true,
                title: 'Panel Records',
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },
                items: [{
                    xtype: 'grid',

                    reference: 'forItems',
                    itemId: 'suppliersWithItemsGridItemId',
                    id: 'suppliersWithItemsGridId',
                    //width: '50%',
                    flex: 1,
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',

                    autoScroll: true,
                    listeners: {
                        select : function(grid, record, index, eOpts){
                            var view  = Ext.getCmp('dataviewRef'),
                                store = view.getStore();

                            store.loadData([record]);
                        }
                    },
                    store: {
                        type: 'supplier',
                        autoLoad: {start: 0, limit: 5},
                        sorters: [ 'firstName', 'lastName', 'phoneNumber'],
                        grouper: 'firstName'
                    },
                    columns: [{
                        text: 'First Name',
                        dataIndex: 'firstName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Last Name',
                        dataIndex: 'lastName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Phone Number',
                        dataIndex: 'phoneNumber',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false
                        }
                    }],

                }, {
                    xtype: 'form',

                    itemId: 'moreInfo',
                    reference: 'moreInfoReference',

                    flex: 1,
                    height: 350,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,
                    handler: function(){
                        console.log('More Info Handler');
                    },

                    title: 'More Info ',
                    bind : {
                        title: '{forItems.selection.firstName} {forItems.selection.lastName}, {forItems.selection.debt}€'
                    },


                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{forItems.selection.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{forItems.selection.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{forItems.selection.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{forItems.selection.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{forItems.selection.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{forItems.selection.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{forItems.selection.longitude}',
                        allowBlank: true
                    }],
                }]

            }, {
                xtype: 'panel',
                itemId: 'itemsDataView',

                width: '100%',
                layout: 'fit',
                height: 360,

                items: [{
                    xtype: 'panel',
                    title: 'Supplier Item',
                    layout: 'fit',
                    alias:'widget.imageview',
                    id: 'itemsImageViews',
                    frame: true,
                    collapsible: true,
                    width: 1000,

                    emptyText: 'No images available',
                    items: Ext.create('Ext.view.View', {
                        scrollable : true,
                        store: Ext.create('NastedJsonXTemplate.store.Supplier'),
                        reference : 'dataviewRef',
                        id : 'dataviewRef',
                        tpl: new Ext.XTemplate(
                            '<tpl for=".">',
                            '   <div class="selector" style="padding-bottom: 200px">',
                            '       <span>{firstName}</span><br>',
                            '       <tpl for="items">',
                            //'&nbsp;&nbsp;&nbsp;<span>{caption}</span><br>',
                            //'&nbsp;&nbsp;&nbsp;<img src="{src}" /><br>',
                            '       <div class="thumb-wrap"><img width="100" height="100" src="{src}"><br>{caption}</div>',
                            '       </tpl>',
                            '   </div>',
                            '</tpl>',
                            '<div class="x-clear"></div>'),
                        itemSelector: 'div.selector',
                        trackOver: true,
                        overItemCls: 'x-item-over',
                        height: 500,
                        emptyText: 'No images available'
                    }),
                }]
            }]
        }]
    }]
});
