Template.osAmountRptGen.helpers({
    data(){
        let asAt = FlowRouter.getQueryParam('asAt');

        Meteor.call('osAmountRpt',asAt,function(error,result){
            if(!error){
                Session.set('osAmountRptResult',result);
            }
        });
        return Session.get('osAmountRptResult');
        //let data = {};
        //let asAt = FlowRouter.getQueryParam('asAt');
        //asAt = moment(asAt).toDate();
        //
        //data.header = {
        //    date: moment(asAt).format('DD/MM/YYYY')
        //};
        //
        //let selector = {
        //    paymentDate: {$lte: asAt}
        //};
        //let option = {$sort: {registerDate: 1}};
        //let tempContent = Collection.Payment.find(selector, option);
        //let dueAmount = 0;
        //let paidAmount = 0;
        //let osAmount = 0;
        //let content = [];
        //tempContent.forEach(function (obj) {
        //    dueAmount += obj.dueAmount;
        //    paidAmount += obj.paidAmount;
        //    osAmount += obj.osAmount;
        //
        //    // find student
        //    let studentDoc = Collection.Student.findOne(obj.studentId);
        //    obj._student = studentDoc;
        //    if(obj.osAmount>0){
        //        content.push(obj);
        //    }
        //
        //});
        //data.paidAmount = paidAmount;
        //data.dueAmount = dueAmount;
        //data.osAmount = osAmount;
        //data.content = content;
        //return data;
    },
    no(index){
        //console.log(index);
        return index + 1;
    }
    //,
    //getRegisterId(registerId){
    //    let register = Collection.Register.findOne(registerId);
    //    let subject = Collection.Subject.findOne(register.subjectId);
    //    return subject.subjectName;
    //}
});

AutoForm.hooks({
    osAmountRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('osAmountRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});