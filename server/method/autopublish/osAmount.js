Meteor.methods({
    osAmountRpt(asAt){
        let data = {};
        asAt = moment(asAt).toDate();

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY')
        };

        let selector = {
            paymentDate: {$lte: asAt}
        };
        let option = {sort: {registerDate: 1}};
        let tempContent = Collection.Payment.find(selector, option);
        let totalOsAmount = 0;
        let content = [];
        tempContent.forEach(function (obj) {

            // find student

            //let studentDoc = Collection.Student.findOne(obj.studentId);
            //obj._student = studentDoc;

            //console.log(obj._student.studentName);

            //let registerDoc = Collection.Register.findOne(obj.registerId);
            //let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
            //obj._subject = subjectDoc;
            //console.log(obj._subject.subjectName);

            let lastPaid = Collection.Payment.findOne(
                {registerId: obj._id},
                {sort: {_id: -1}}
            );


            if (lastPaid) {
                if (lastPaid.osAmount > 0) {
                    totalOsAmount += lastPaid.osAmount;
                    //content.push(lastPaid);

                    //console.log(lastPaid.studentId);
                    let studentDoc = Collection.Student.findOne(lastPaid.studentId);
                    lastPaid._student = studentDoc;
                    //console.log(lastPaid._student.studentName);

                    let registerDoc = Collection.Register.findOne(lastPaid.registerId);
                    let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
                    lastPaid._subject = subjectDoc;

                    content.push(lastPaid);
                }
            }

        });

        data.osAmount = totalOsAmount;
        data.content = content;
        return data;
    }
});