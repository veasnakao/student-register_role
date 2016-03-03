Collection.Teacher = new Mongo.Collection('teacher');
Schema.Teacher = new SimpleSchema({

    teacherName: {
        type: String,
        label: "TeacherName"
    }, gender: {
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
    telephone: {
        type: String,
        label: "Telephone",
        optional: true
    }

});
Collection.Teacher.attachSchema(Schema.Teacher);