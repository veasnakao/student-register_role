//subject insert onCreate
Template.subjectInsert.onCreated(function () {
    this.subscribe("subjects");
});

//subject update onCreate
Template.subjectUpdate.onCreated(function () {
    //static
    //let subjectId = FlowRouter.getParam("id");
    //this.subscribe("subject", subjectId);

    //dynamic
    let subjectId = FlowRouter.getParam("id");
    let selector = {_id: subjectId};
    this.subscribe("subject", selector);
});


//subjectInsert
//Template.subjectInsert.events({
//    'click .jsInsert': function () {
//        //let self = this;
//        let subjectName = $(".jsSubjectName");
//        let price = $(".jsPrice");
//        let duration = $(".jsDuration");
//        let describe = $(".jsDescribe");
//        let data = {
//            subjectName:subjectName,
//            price:price,
//            duration:duration,
//            describe:describe
//        };
//        console.log(data);
//
//        //Collection.Subject.remove({_id: self._id});
//        Meteor.call('subject.insert', data, function (error, result) {
//            if (!error) {
//                alertify.success('Delete Successfully!');
//            }
//        });
//    }
//});

//subjectUpdate helpers
Template.subjectUpdate.helpers({
    subjectDoc(){
        let subjectId = FlowRouter.getParam("id");
        return Collection.Subject.findOne(subjectId);
    }
});


//subjectAction
Template.subjectAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('subjectUpdate', {id: this._id});
    },
    //'click .jsRemove': function () {
    //    var self = this;
    //    alertify.confirm("Are you sure?",
    //        function () {
    //            Collection.Subject.remove({_id: self._id});
    //            alertify.success('Subject has deleted!');
    //            //Meteor.call('subject.remove', self._id, function (error, result) {
    //            //    if (!error) {
    //            //        alertify.success('Delete Successfully!');
    //            //    }
    //            //});
    //        },
    //        function () {
    //            alertify.error(error.message);
    //        });
    //}
    'click .jsRemove': function () {
        var self = this;
        //console.log(self._id);
        alertify.confirm("Are you sure?",
            function () {
                Collection.Subject.remove({_id: self._id});
                //debugger;
                alertify.success('Delete Successfully!');
            },
            function () {
                alertify.error('Cancel');
            });
    }

});

//AutoForm hooks
AutoForm.hooks({
    subjectInsert: {

        //onSubmit: function (insertDoc) {
        //    this.event.preventDefault();
        //    Meteor.call('subject.insert', insertDoc);
        //    this.done();
        //    //console.log(self);
        //},
        before: {
            insert: function (doc) {
                //debugger;
                doc._id = idGenerator.gen(Collection.Subject, 4);
                console.log(doc);
                return doc;
            }
        },
        onSuccess(id){
            FlowRouter.go('subject');
            alertify.success('Add Successfully!');
        }
    }
    //subjectInsert: {
    //    //before: {
    //    //    function (doc) {
    //    //        doc._id = idGenerator.gen(Collection.Subject, 4);
    //    //        return doc;
    //    //    }
    //    //},
    //    //onSuccess(id){
    //    //    //Bert.alert('Successfully Added', 'success', 'growl-top-right');
    //    //    FlowRouter.go('subject');
    //    //    alertify.success('Add Successfully!');
    //    //},
    //    onSubmit: function(insertDoc) {
    //        Meteor.call('subject.insert', insertDoc, function (error, result) {
    //            if (error) {
    //                this.insertDoc;
    //                alertify.success('Add Successfully!');
    //                FlowRouter.go('subject');
    //            }
    //
    //        });
    //        alertify.success('Delete Successfully!');
    //    },
    //    onError(formType, error){
    //        alertify.error('Cancel');
    //        //Bert.alert(error.message, 'danger', 'growl-top-right')
    //    }
    //}
    ,
    subjectUpdate: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            //var self = this;
            this.event.preventDefault();
            console.log(insertDoc);
            console.log(updateDoc);
            console.log(currentDoc);
            Meteor.call('subject.update', currentDoc._id, updateDoc);
            this.done();

        },
        onSuccess(id){
            FlowRouter.go('subject');
            alertify.success('Update Successfully!');
        },
        //onSuccess(formType, id){
        //    //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
        //    FlowRouter.go('subject');
        //    alertify.success('Update Successfully!');
        //},
        onError(formType, error){
            alertify.error('Cancel');

            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});