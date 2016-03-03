
FlowRouter.route('/payment/', {
    name:"payment",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"payment"});
    },
    breadcrumb: {
        title: 'Payment',
        parent:'home'
    }
});

FlowRouter.route('/paymentInsert', {
    name:"paymentInsert",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"paymentInsert"});
    },
    breadcrumb: {
        title: 'Add New Payment',
        parent: 'payment'
    }
});
FlowRouter.route('/paymentUpdate/:id', {
    name:"paymentUpdate",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"paymentUpdate"});
    },
    breadcrumb: {
        title: 'Update',
        parent: 'payment'
    }
});