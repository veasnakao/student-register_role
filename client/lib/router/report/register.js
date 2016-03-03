
//register report
FlowRouter.route('/registerRpt/', {
    name:"registerRpt",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"registerRpt"});
    },
    breadcrumb: {
        title: 'Register Report',
        parent:'home'
    }
});

//register report generator
FlowRouter.route('/registerRptGen/', {
    name:"registerRptGen",
    action: function(params, queryParams) {
        BlazeLayout.render('reportLayout',{content:"registerRptGen"});
    }
});



