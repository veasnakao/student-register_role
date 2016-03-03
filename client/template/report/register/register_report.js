//registerRptGen onCreated
Template.registerRptGen.onCreated(function (){
    let registerId = FlowRouter.getParam("id");
    let selector = {_id: registerId};
    this.subscribe("register", selector);
});

//registerRptGen helper
Template.registerRptGen.helpers({
    data(){
        let fromDate = FlowRouter.getQueryParam('fromDate');
        let toDate = FlowRouter.getQueryParam('toDate');

        Meteor.call('registerRpt',fromDate,toDate,function(error,result){
           if(!error){
               Session.set('registerRptResult',result);
           }
        });
        return Session.get('registerRptResult');

        //let data = {};
        //let fromDate = FlowRouter.getQueryParam('fromDate');
        //fromDate = moment(fromDate).toDate();
        //let toDate = FlowRouter.getQueryParam('toDate');
        //toDate = moment(toDate).toDate();
        //
        //data.header = {
        //    date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        //};
        //
        //let selector = {
        //    registerDate: {$gte: fromDate, $lte: toDate}
        //};
        //let option = {$sort: {regDate: 1}};
        //let total = 0;
        //let price = 0;
        //let discount = 0;
        //
        //let tempContent = Collection.Register.find(selector, option);
        //let content = [];
        //tempContent.forEach(function (obj) {
        //    total += obj.amount;
        //    price += obj.price;
        //    discount += obj.discount;
        //
        //    // find student
        //    let studentDoc = Collection.Student.findOne(obj.studentId);
        //    obj._student = studentDoc;
        //    // find subject
        //    let subjectDoc = Collection.Subject.findOne(obj.subjectId);
        //    obj._subject = subjectDoc;
        //
        //    content.push(obj);
        //});
        ////console.log(total);
        //data.price = price;
        //data.total = total;
        //data.discount = discount;
        //data.content = content;
        //return data;
    },
    no(index){
        //console.log(index);
        return index + 1;
    }
});

AutoForm.hooks({
    registerRpt: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('registerRptGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});