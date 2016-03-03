TabularTables = {};

TabularTables.userToRole = new Tabular.Table({
    name: "userToRole",
    collection: Meteor.users,
    columns: [{
            data: "_id",
            title: "ID"
        }, {
            data: "emails",
            title: "UserId",
            render: function(val, type, doc) {
                let address = '';
                val.forEach(function(email) {
                        address = email.address;
                });
            return address;
        }
    },
    {
        data: "roles",
        title: "Roles"
    },

    {
        title: "Action", //custom columns
        tmpl: Meteor.isClient && Template.userToRoleAction
    }
]
});
