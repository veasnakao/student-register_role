Collection.Payment = new Mongo.Collection('payment');
Schema.Payment = new SimpleSchema({
    studentId: {
        type: String,
        label: "StudentID",
        autoform: {
            type: "select2",
            options: function () {
                let data = Collection.Student.find();
                let studentId = data.studentId;

                let list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj) {
                    list.push({label: obj._id + ' | ' + obj.studentName, value: obj._id})
                });
                return list;
            }
        }
    },
    registerId: {
        type: String,
        label: "RegisterID",
        autoform: {
            type: "select2",
            options: function () {
                let studentId = AutoForm.getFieldValue('studentId');
                Meteor.subscribe('register', {studentId: studentId});
                let data = Collection.Register.find({
                    "studentId": studentId
                });
                let list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj) {
                    let lastPaid = Collection.Payment.findOne(
                        {registerId: obj._id},
                        //{sort: {paymentDate: -1,_id:-1}}
                        {sort: {_id: -1}}
                    );

                    if (lastPaid) {
                        if (lastPaid.osAmount > 0) {
                            list.push({label: obj._id + ' | price : ' + lastPaid.osAmount, value: obj._id});
                            //console.log("osAmount:" + lastPaid.osAmount);
                        }
                    }
                    else {
                        list.push({label: obj._id + ' | price : ' + obj.amount, value: obj._id})
                    }
                });
                return list;
            }
        }
    },
    dueAmount: {
        type: Number,
        label: "Due Amount",
        autoform: {
            value: function () {
                //let dueAmount = 0;
                //let registerId = AutoForm.getFieldValue('registerId');
                //if(registerId){
                //    let data = Collection.Register.findOne(registerId);
                //    let lastPaid = Collection.Payment.findOne(
                //        {studentId:registerId},
                //        {$sort: {paymentDate: -1}}
                //    );
                //    dueAmount = data.amount;
                //    if (lastPaid) {
                //        return lastPaid.osAmount;
                //    }
                //}
                //return dueAmount;
                let dueAmount = 0;
                let registerId = AutoForm.getFieldValue('registerId');
                if (registerId) {
                    console.log(registerId);
                    let data = Collection.Register.findOne({_id: registerId});
                    let lastPaid = Collection.Payment.findOne(
                        {registerId: registerId},
                        //{sort: {paymentDate: -1,_id:-1}}
                        {sort: {_id: -1}}
                    );
                    //dueAmount = data.amount;
                    if (lastPaid) {
                        if (lastPaid.osAmount > 0) {
                            dueAmount = lastPaid.osAmount;
                            console.log(dueAmount);
                            //return lastPaid.osAmount;
                        }
                    } else {
                        dueAmount = data.amount;
                    }
                }
                return dueAmount;
            },
            readonly: true
        }
    },
    paidAmount: {
        type: Number,
        label: "Paid Amount"
    },
    osAmount: {
        type: Number,
        label: "OS Amount",
        autoform: {
            value: function () {
                let dueAmount = AutoForm.getFieldValue('dueAmount');
                let paidAmount = AutoForm.getFieldValue('paidAmount');
                //let data = Collection..Register.findOne(registerId);
                return dueAmount - paidAmount;
            }
        }
    },
    voucherId: {
        type: String,
        label: "VoucherID",
        optional: true
    },
    paymentDate: {
        type: Date,
        label: "Payment Date",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    //type: "bootstrap-datetimepicker",
                    format: 'YYYY/MM/DD',
                    pickTime: false,
                }
            }
        }
    }
});
Collection.Payment.attachSchema(Schema.Payment);