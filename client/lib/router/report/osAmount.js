
//register report
FlowRouter.route('/osAmountRpt/', {
    name:"osAmountRpt",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"osAmountRpt"});
    },
    breadcrumb: {
        title: 'Out Standing Amount',
        parent:'home'
    }
});

//register report generator
FlowRouter.route('/osAmountRptGen/', {
    name:"osAmountRptGen",
    action: function(params, queryParams) {
        BlazeLayout.render('reportLayout',{content:"osAmountRptGen"});
    }
});



