/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NastedJsonXTemplate.Application',

    name: 'NastedJsonXTemplate',

    requires: [
        // This will automatically load all classes in the NastedJsonXTemplate namespace
        // so that application classes do not need to require each other.
        'NastedJsonXTemplate.*'
    ],

    // The name of the initial view to create.
    mainView: 'NastedJsonXTemplate.view.main.Main'
});
