Meteor.methods({
    registerRpt(fromDate, toDate){
        let data = {};

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };

        let selector = {
            registerDate: {$gte: fromDate, $lte: toDate}
        };
        //let option = {sort: {regDate: 1}};
        let option = {sort: {registerDate: 1}};
        let total = 0;
        let price = 0;
        let discount = 0;

        let tempContent = Collection.Register.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {
            total += obj.amount;
            price += obj.price;
            discount += obj.discount;

            // find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            // find subject
            let subjectDoc = Collection.Subject.findOne(obj.subjectId);
            obj._subject = subjectDoc;

            content.push(obj);
        });
        //console.log(total);
        data.price = price;
        data.total = total;
        data.discount = discount;
        data.content = content;
        return data;
    }
});