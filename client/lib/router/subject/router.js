
FlowRouter.route('/subject/', {
    name:"subject",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"subject"});
    },
    breadcrumb: {
        title: 'Subject',
        parent:'home'
    }
});

FlowRouter.route('/subjectInsert', {
    name:"subjectInsert",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"subjectInsert"});
    },
    breadcrumb: {
        title: 'Insert',
        parent: 'subject'
    }
});
FlowRouter.route('/subjectUpdate/:id', {
    name:"subjectUpdate",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"subjectUpdate"});
    },
    breadcrumb: {
        title: 'Update',
        parent: 'subject'
    }
});