Collection.Student = new Mongo.Collection('student');
Schema.Student = new SimpleSchema({
    //_id: {
    //    type: String,
    //        autoform: {
    //        type: "hidden",
    //        label: false
    //    }
    //},
    studentName: {
        type: String,
        label: "Student Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select2",
            options: function () {
                return [
                    {label: "(Select one)", value: ""},
                    {label: "Male", value: "Male"},
                    {label: "Female", value: "Female"}
                ];
            }
        }
    },
    dob: {
        type: Date,
        label: "Date of Birth",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    //type: "bootstrap-datetimepicker",
                    format: 'YYYY/MM/DD',
                    pickTime: false
                }
            }
        },
        optional: true
    },
    telephone: {
        type: String,
        label: "Telephone",
        optional: true
    }
});

Collection.Student.attachSchema(Schema.Student);