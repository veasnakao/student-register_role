
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