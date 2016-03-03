Collection.Subject = new Mongo.Collection('subject');
Schema.Subject = new SimpleSchema({

    subjectName: {
        type: String,
        label: "SubjectName"
    },
    price: {
        type: Number,
        label:"Price"
    },
    duration: {
        type: Number,
        label: "Duration"
    },
    describe: {
        type: String,
        label: "Describe",
        autoform:{
            afFieldInput:{
                type:"textarea"
            }
        },
        optional:true
    }

});
Collection.Subject.attachSchema(Schema.Subject);