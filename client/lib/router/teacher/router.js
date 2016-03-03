
FlowRouter.route('/teacher/', {
    name:"teacher",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"teacher"});
    },
    breadcrumb: {
        title: 'Teacher',
        parent:'home'
    }
});

FlowRouter.route('/teacherInsert', {
    name:"teacherInsert",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"teacherInsert"});
    },
    breadcrumb: {
        title: 'Add New Teacher',
        parent: 'teacher'
    }
});
FlowRouter.route('/teacherUpdate/:id', {
    name:"teacherUpdate",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"teacherUpdate"});
    },
    breadcrumb: {
        title: 'Update Teacher Info',
        parent: 'teacher'
    }
});