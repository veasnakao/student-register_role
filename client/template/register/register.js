//register insert onCreate
Template.registerInsert.onCreated(function(){
    let registerId = FlowRouter.getParam("id");
    let selector = {_id: registerId};
    this.subscribe("register", selector);

    this.subscribe("students");
    this.subscribe("subjects");
    this.subscribe("teachers");
});


//register insert events
Template.registerInsert.events({
    'change .jsSubjectId': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        let amount;
        amount = price - discount;
        $(".jsAmount").val(amount);
        $(".jsDiscount").val(0);
    },
    'keyup .jsDiscount': function () {
        let discount = $(".jsDiscount").val();
        let price = $(".jsPrice").val();
        //discount=0;
        let amount;
        amount = price - discount;
        $(".jsAmount").val(amount);
    }
});

//register update onCreate
Template.registerUpdate.onCreated(function () {
    //dynamic
    let registerId = FlowRouter.getParam("id");
    let selector = {_id: registerId};
    this.subscribe("register", selector);
});

//registerUpdate helpers
Template.registerUpdate.helpers({
    registerDoc(){

        let registerId = FlowRouter.getParam("id");
        Meteor.subscribe('register')
        let data = Collection.Register.findOne(registerId);
        console.log(data)
        return data


    }
});

//registerUpdate events
Template.registerUpdate.events({
    //'change .jsSubjectId': function () {
    //    let discount = $(".jsDiscount").val();
    //    let price = $(".jsPrice").val();
    //    let amount;
    //    amount = price - discount;
    //    $(".jsAmount").val(amount);
    //    $(".jsDiscount").val(0);
    //},
    //'keyup .jsDiscount': function () {
    //    let discount = $(".jsDiscount").val();
    //    let price = $(".jsPrice").val();
    //    //discount=0;
    //    let amount;
    //    amount = price - discount;
    //    $(".jsAmount").val(amount);
    //}
});
//teacherAction
Template.registerAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('registerUpdate', {id: this._id});
        console.log({id: this._id})
    },
    'click .jsRemove': function () {
        var self = this;
        console.log(self._id);
        alertify.confirm("Are you sure?",
            function () {
                Collection.Register.remove({_id: self._id});
                //debugger;
                alertify.success('Delete Successfully!');
            },
            function () {
                alertify.error('Cancel');
            });
    }

});

AutoForm.hooks({
    registerInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Register, 4);
                return doc;
            }
        },
        onSuccess(formType, id){
            FlowRouter.go('register');
            alertify.success('Add Successfully!');
            //Bert.alert('Successfully Added', 'success', 'growl-top-right');
        },
        onError(formType, error){
            //Bert.alert(error.message, 'danger', 'growl-top-right')
            alertify.error(error.message);
        }
    },
    registerUpdate: {
        onSuccess(formType, id){
            FlowRouter.go('register');
            alertify.success('Update Successfully!');
            //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});
