TabularTables.Payment = new Tabular.Table({
    name: "Payment",
    collection: Collection.Payment,
    columns: [
        {data: "_id", title: "Payment ID"},
        {data: "voucherId", title: "Voucher ID"},
        {data: "studentId", title: "Student ID"},
        {data: "registerId", title: "Register ID"},
        {data: "dueAmount", title: "Due Amount"},
        {data: "paidAmount", title: "Paid Amount"},
        {data: "osAmount", title: "OS Amount"},
        {
            data: "paymentDate", title: "Payment Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.paymentAction
        }
    ],
    order:['0' ,'desc']
});