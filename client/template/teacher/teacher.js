//teacher insert onCreate
Template.teacherInsert.onCreated(function () {
    this.subscribe("teachers");
});

//teacher update onCreate
Template.teacherUpdate.onCreated(function(){
    //dynamic
    let teacherId = FlowRouter.getParam("id");
    let selector = {_id: teacherId};
    this.subscribe("teacher", selector);
});
//teacherUpdate helpers
Template.teacherUpdate.helpers({
    teacherDoc(){
        let teacherId = FlowRouter.getParam("id");
        return Collection.Teacher.findOne(teacherId);
    }
});
AutoForm.hooks({
    teacherInsert:{
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Teacher, 4);
                console.log(doc._id);
                return doc;
            }
        },
        onSuccess(formType, id){
            FlowRouter.go('teacher');
            alertify.success('Add Successfully!');
            //Bert.alert('Successfully Added', 'success', 'growl-top-right');
        },
        onError(formType, error){
            //Bert.alert(error.message, 'danger', 'growl-top-right')
            alertify.error(error.message);
        }
    },
    teacherUpdate: {
        onSuccess(formType, id){
            FlowRouter.go('teacher');
            alertify.success('Update Successfully!');
            //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
        },
        onError(formType, error){
            alertify.error(error.message);
            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});

//teacherAction
Template.teacherAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});
        console.log({id: this._id})
    },
    'click .jsRemove': function () {
        var self = this;
        console.log(self._id);
        alertify.confirm("Are you sure?",
            function () {
                Collection.Teacher.remove({_id: self._id});
                //debugger;
                alertify.success('Delete Successfully!');
            },
            function () {
                alertify.error('Cancel');
            });
    }

});
