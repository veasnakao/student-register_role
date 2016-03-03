//student update onCreate
Template.studentUpdate.onCreated(function () {
    //dynamic
    let studentId = FlowRouter.getParam("id");
    let selector = {_id: studentId};
    this.subscribe("student", selector);
});

//student insert onCreated
Template.studentInsert.onCreated(function () {
    //this.subscribe("students");
});


//insert
//Template.studentInsert.events({
//    'click .jsAddStudent': function () {
//        var name = $("#studentName").val();
//        var gender = $("#gender").val();
//        var tel = $("#telephone").val();
//        Collection.Student.insert({
//            name: name,
//            gender: gender,
//            tel: tel
//        });
//        Bert.alert({
//            title: 'Add',
//            message: 'Add Success',
//            type: 'success',
//            style: 'growl-top-right',
//            icon: 'fa-check'
//        });
//        FlowRouter.go('student');
//    },
//    'click .jsRemove': function () {
//        console.log(this);
//        var check = confirm(`Are you sure to delete record #id ${this._id}`);
//        check ? Collection.Student.remove({_id: this._id}) : ''
//    },
//    'click .jsBack': function () {
//        FlowRouter.go('student');
//    }
//});

//genderTemplate
//Template.genderTemplate.helpers({
//    gender: function () {
//        var self = this;
//        console.log(self);
//        let opts = [
//            {lable: '(Select one)', value: ''},
//            {lable: 'Male', value: 'Male'},
//            {lable: 'Female', value: 'Female'}
//        ];
//
//        let list = [];
//        opts.forEach(function (val) {
//            if (self.gender == val.value) {
//                val.selected = 'selected';
//            }
//            list.push(val);
//        });
//        return list;
//    }
//});

//studentAction
Template.studentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('studentUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        //console.log(self._id);
        alertify.confirm("Are you sure?",
            function () {
                Collection.Student.remove({_id: self._id});
                //debugger;
                alertify.success('Delete Successfully!');
            },
            function () {
                alertify.error('Cancel');
            });
    }

});

Template.student.helpers({
    dataStudent: function () {
        var dataStudent = Collection.Student.find();
        return dataStudent;
    }
});

//studentUpdate helpers
Template.studentUpdate.helpers({
    studentDoc(){
        let studentId = FlowRouter.getParam("id");
        return Collection.Student.findOne(studentId);
    }
});

AutoForm.hooks({
    studentInsert: {
        before: {
            insert: function (doc) {
                //debugger;
                doc._id = idGenerator.gen(Collection.Student, 4);
                console.log(doc);
                return doc;
            }
        },
        onSuccess(formType, result){
            FlowRouter.go('student');
            alertify.success('Add Successfully!');
            //Bert.alert('Successfully Added', 'success', 'growl-top-right');
        },
        onError(formType, error){
            //Bert.alert(error.message, 'danger', 'growl-top-right')
            alertify.error(error.message);
        }
    },
    //studentInsert: { //id autoform
    //    before: {
    //        insert: function (doc) {
    //            doc._id = idGenerator.gen(Collection.Student, 4);
    //            return doc;
    //        }
    //    },
    //    onSuccess(formType, result){
    //        FlowRouter.go('student');
    //        alertify.success('Add Successfully!');
    //        //Bert.alert('Successfully Added', 'success', 'growl-top-right');
    //    },
    //    onError(formType, error){
    //        //Bert.alert(error.message, 'danger', 'growl-top-right');
    //        alertify.error(error.message);
    //    }
    //},
    StudentUpdate: {
        onSuccess(formType, id){
            FlowRouter.go('student');
            alertify.success('Update Successfully!');
            //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
        },
        onError(formType, error){
            alertify.error('Cancel');
            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});


