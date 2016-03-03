FlowRouter.route('/student', {
    name: "student",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "student"});
    },
    breadcrumb: {
        title: 'Student',
        parent: 'home'
    }
});
FlowRouter.route('/studentInsert', {
    name: "studentInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "studentInsert"});
    },
    breadcrumb: {
        title: 'Insert',
        parent: 'student'
    },
    subscriptions: function () {
        Meteor.subscribe('students')
    }
});
FlowRouter.route('/studentUpdate/:id', {
    name: "studentUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "studentUpdate"});
    },
    breadcrumb: {
        title: 'Update',
        parent: 'student'
    }
});
