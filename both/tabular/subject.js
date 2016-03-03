TabularTables.Subject = new Tabular.Table({
    name: "Subject",
    collection: Collection.Subject,
    columns: [
        {data: "_id", title: "ID"},
        {data: "subjectName", title: "Subject Name"},
        {data: "price", title: "Price"},
        {data: "duration", title: "Duration"},
        {data: "describe", title: "Describe"},
        {title: "Action", tmpl: Meteor.isClient && Template.subjectAction}
    ]
});