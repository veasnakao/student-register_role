//userToRoleAction
Template.userToRoleAction.events({
    'click .jsUpdate': function() {
        FlowRouter.go('userToRoleUpdate', {
            id: this._id
        });
    },
    'click .jsRemove': function(id) {
        var self = this;
        //debugger;
        alertify.confirm("Are you sure want to delete?",
            function() {
                Meteor.call('userToRole.remove', self._id, function(error, result) {
                    if (!error) {
                        //console.log(self._id);
                        //console.log(removeDoc);
                        Bert.alert('Successfully Removed', 'success', 'growl-top-right');
                    }
                });
            },
            function() {
                //Bert.alert(error.message, 'danger', 'growl-top-right');
                 alertify.error('Cancel');
            }
        );
    }
});


//update
Template.userToRoleUpdate.onCreated(function() {
    let userId = FlowRouter.getParam("id");
    this.subscribe("user", userId);

    // console.log(userId);
    // debugger;
});

Template.userToRoleUpdate.helpers({
    userDoc() {
        let userId = FlowRouter.getParam("id");
        let user = Meteor.users.findOne({
            _id: userId
        }); //{}
        return user;
    }
});


// hook
AutoForm.hooks({
    userToRoleInsert: { //id autoform
        onSubmit: function(insertDoc, updateDoc, CurrentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.insert', insertDoc);
            this.done();
        },
        onSuccess(onSubmit, result) {
            // alertify.success('Successfully Added');
            Bert.alert('Successfully Added', 'success', 'growl-top-right');

        },
        onError(formType, error) {
            //  alertify.error(error.message);
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },

    userToRoleUpdate: { //id autoform
        onSubmit: function(insertDoc, updateDoc, CurrentDoc) {
            this.event.preventDefault();
            Meteor.call('userToRole.update', updateDoc);
            this.done();
        },
        onSuccess(formType, result) {
            // alertify.success('Successfully Added');
            Bert.alert('Successfully Updated', 'success', 'growl-top-right');
            FlowRouter.go('userToRole');

        },
        onError(formType, error) {
            //  alertify.error(error.message);
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    }
});
