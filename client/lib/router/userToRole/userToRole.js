FlowRouter.route('/userToRole', {
    name: "userToRole",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRole"});
    },
    breadcrumb: {
        title: "userToRole",
        parent: "home"
    }
});
FlowRouter.route('/userToRoleInsert', {
    name: "userToRoleInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRoleInsert"});
    },
    breadcrumb: {
        title: "Insert",
        parent: "userToRole"
    }
});
FlowRouter.route('/userToRoleUpdate/:id', {
    name: "userToRoleUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "userToRoleUpdate"});
    },
    breadcrumb: {
        title: "Update",
        parent: "userToRole"
    }
});
