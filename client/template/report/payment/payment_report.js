//paymentRptGen onCreated
Template.paymentRptGen.onCreated(function(){
    let paymentId = FlowRouter.getParam("id");
    let selector = {_id: paymentId};
    this.subscribe("payment", selector);
});

//paymentRptGen helper
Template.paymentRptGen.helpers({
    data(){
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');

        Meteor.call('paymentRpt',fromDate,toDate,function(error,result){
            if(!error){
                Session.set('paymentRptResult',result);
            }
        });
        return Session.get('paymentRptResult');

        //data.header = {
        //    date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        //};
        //
        //let selector = {
        //    paymentDate: {$gte: fromDate, $lte: toDate}
        //};
        //let option = {$sort: {registerDate: 1}};
        //
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
        //
        //    content.push(obj);
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
        // ,
    //getRegisterId(registerId){
    //    let register = Collection.Register.findOne(registerId);
    //    console.log(register);
    //    let subject = Collection.Subject.findOne(register.subjectId);
    //    return subject.subjectName;
    //}
});

AutoForm.hooks({
    paymentRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('paymentRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});