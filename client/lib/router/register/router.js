
FlowRouter.route('/register/', {
    name:"register",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"register"});
    },
    breadcrumb: {
        title: 'Register',
        parent:'home'
    }
});

FlowRouter.route('/registerInsert', {
    name:"registerInsert",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"registerInsert"});
    },
    breadcrumb: {
        title: 'Add New',
        parent: 'register'
    }
});
FlowRouter.route('/registerUpdate/:id', {
    name:"registerUpdate",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"registerUpdate"});
    },
    breadcrumb: {
        title: 'Update',
        parent: 'register'
    }
});