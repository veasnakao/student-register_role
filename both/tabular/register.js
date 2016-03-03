TabularTables.Register = new Tabular.Table({
    name: "Register",
    collection: Collection.Register,
    columns: [
        {data: "_id", title: "Register ID"},
        {data: "studentId", title: "Student ID"},
        {data: "subjectId", title: "Subject ID"},
        {
            data: "price",
            title: "Price",
            render:function(val,type,doc){
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: "discount", title: "Dissount"},
        {data: "amount", title: "Amount"},
        {data: "day", title: "Day"},
        {data: "time", title: "Time Study"},
        {data: "teacherId", title: "Teacher ID"},
        {
            data: "registerDate", title: "Register Date",
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
            tmpl: Meteor.isClient && Template.registerAction
        }
    ],
    order:['0' ,'desc']

});