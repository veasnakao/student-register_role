Collection.Register = new Mongo.Collection('register');
Schema.Register = new SimpleSchema({
    studentId: {
        type: String,
        label: "Student ID",
        autoform: {
            type: 'select2',
            options(){
                return List.getAllStudent();
            }
        }
    },
    subjectId: {
        type: String,
        label: "Subject ID",
        autoform: {
            type: "select2",
            options: function () {
                var data = Collection.Subject.find();
                var list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj) {
                    list.push({label: obj._id + ' | ' + obj.subjectName, value: obj._id})
                });
                return list;
            }
        }
    },
    price: {
        type: Number,
        decimal: true,
        label: "Price",
        autoform: {
            //readonly: true,
            value: function () {
                let subjectId = AutoForm.getFieldValue('subjectId');
                let data = Collection.Subject.findOne(subjectId);
                if (data) {
                    return data.price;
                }
                return 0;
            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: function () {
                    return inputmaskOptions.currency();
                }
            }
        }
    },
    discount: {
        type: Number,
        label: "Discount",
        defaultValue: 0
        //autoform: {
        //    readonly: true,
        //    value: function () {
        //        let subjectId = AutoForm.getFieldValue('subjectId');
        //        let data = Collection.Subject.findOne(subjectId);
        //        if (data) {
        //            return data.price;
        //        }
        //        return 0;
        //    },
        //    type: "inputmask",
        //    afFieldInput: {
        //        inputmaskOptions: function () {
        //            return inputmaskOptions.currency();
        //        }
        //    }
        //}
    },
    amount: {
        type: Number,
        label: "Amount",
        decimal: true,
        autoform: {
            readonly: true,
            value: function () {
                let subjectId = AutoForm.getFieldValue('subjectId');
                let discount = AutoForm.getFieldValue('discount');
                let data = Collection.Subject.findOne(subjectId);
                if (data) {
                    return data.price;
                }
                return 0;
            }
        }
    },
    day: {
        type: String,
        label: "Day",
        autoform: {
            type: "select2",
            options: function () {
                return [
                    {label: "(Select one)", value: ""},
                    {label: "Weekday", value: "weekday"},
                    {label: "Weekend", value: "weekend"}
                ];
            }
        }
    },
    time: {
        type: String,
        label: "Time Study",
        autoform: {
            type: "select2",
            options: function () {
                return [
                    {label: "(Select one)", value: ""},
                    {label: "08am - 09am", value: "8-9"},
                    {label: "09am - 10am", value: "9-10"},
                    {label: "10am - 11am", value: "10-11"},
                    {label: "01pm - 02pm", value: "1-2"},
                    {label: "02pm - 03pm", value: "2-3"},
                    {label: "03pm - 04pm", value: "3-4"},
                    {label: "04pm - 05pm", value: "4-5"}
                ];
            }
        }
    },
    teacherId: {
        type: String,
        label: "Teacher ID",
        autoform: {
            type: 'select2',
            //options(){
            //    return List.getAllTeacher();
            //}
            options: function () {
                var data = Collection.Teacher.find();
                var list = [
                    {label: '(Select One)', value: ''}
                ];
                data.forEach(function (obj) {
                    list.push({label: obj._id + ' | ' + obj.teacherName, value: obj._id})
                });
                return list;
            }
        }
    },
    registerDate: {
        type: Date,
        label: "Register Date",
        defaultValue: moment().toDate(),
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
Collection.Register.attachSchema(Schema.Register);
