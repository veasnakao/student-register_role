Schema.RegisterRpt = new SimpleSchema({
    fromDate: {
        type: Date,
        label: "From Date",
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
    },
    toDate: {
        type: Date,
        label: "To Date",
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