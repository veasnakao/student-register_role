Meteor.methods({
    paymentRpt(fromDate, toDate){
        let data = {};

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };

        let selector = {
            paymentDate: {$gte: fromDate, $lte: toDate}
        };
        //let option = {sort: {regDate: 1}};
        let option = {sort: {paymentDate: 1}};
        let totalDueAmount = 0;
        let totalPaidAmount = 0;
        let totalOsAmount = 0;
        //let price = 0;

        let tempContent = Collection.Payment.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            totalDueAmount += obj.dueAmount;
            totalPaidAmount += obj.paidAmount;
            totalOsAmount +=obj.osAmount;

            // find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            //// find subject
            let registerDoc = Collection.Register.findOne(obj.registerId);

            //obj._register = registerDoc;
            let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
            //console.log(subjectDoc);
            obj._subject = subjectDoc;

            content.push(obj);
        });
        //console.log(total);
        //data.price = price;
        data.totalDueAmount = totalDueAmount;
        data.totalPaidAmount = totalPaidAmount;
        data.totalOsAmount = totalOsAmount;
        //data.discount = discount;
        data.content = content;
        return data;
    }
});