

//paymentInsert onCreated
Template.paymentInsert.onCreated(function () {
    let paymentId = FlowRouter.getParam("id");
    let selector = {_id: paymentId};
    this.subscribe("payment", selector);
    this.subscribe("registers");
    this.subscribe("students");
});

//
//Template.paymentInsert.events({
//   'keyup .jsDisscount':function(){
//       let discount=$(".jsDiscount").val();
//       let price=$(".jsDiscount").val();
//       discount=0;
//       let amount;
//       amount=price-discount;
//       $(".jsAmount").val(amount);
//   }
//});

//paymentUpdate helpers
Template.paymentUpdate.helpers({
    paymentDoc(){
        let paymentId = FlowRouter.getParam("id");
        return Collection.Payment.findOne(paymentId);
    }
});

//paymentUpdate Oncreated
Template.paymentUpdate.onCreated(function(){
    let paymentId = FlowRouter.getParam("id");
    let selector = {_id: paymentId};
    this.subscribe("payment", selector);
});

//paymentInsert events
Template.paymentInsert.events({
    'keyup .jsPaidAmount':function(){
        let dueAmount = $(".jsDueAmount").val();
        let paidAmount = $(".jsPaidAmount").val();
        let osAmount = dueAmount-paidAmount;
        $(".jsOsAmount").val(osAmount);
    }
});
//paymentAction
Template.paymentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('paymentUpdate', {id: this._id});
        console.log({id: this._id})
    },
    'click .jsRemove': function () {
        var self = this;
        console.log(self._id);
        alertify.confirm("Are you sure?",
            function () {
                Collection.Payment.remove({_id: self._id});
                //debugger;
                alertify.success('Delete Successfully!');
            },
            function () {
                alertify.error('Cancel');
            });
    }

});

AutoForm.hooks({
    paymentInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Payment, 4);
                return doc;
            }
        },
        onSuccess(formType, id){
            FlowRouter.go('payment');
            alertify.success('Add Successfully!');
            //Bert.alert('Successfully Added', 'success', 'growl-top-right');
        },
        onError(formType, error){
            //Bert.alert(error.message, 'danger', 'growl-top-right')
            alertify.error(error.message);
        }
    },
    paymentUpdate: {
        onSuccess(formType, id){
            FlowRouter.go('payment');
            alertify.success('Update Successfully!');
            //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
        },
        onError(formType, error){
            alertify.error('Cancel');
            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});
