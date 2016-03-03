TabularTables.Student = new Tabular.Table({
    name: "Student",
    collection: Collection.Student,
    columns: [
        {data: "_id", title: "ID"},
        {data: "studentName", title: "Student Name"},
        {data: "gender", title: "Gender"},
        {
            data: "dob", title: "Date of Birth",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },

        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.studentAction
        }
    ]

});