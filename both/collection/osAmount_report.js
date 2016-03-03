Schema.OsAmountRpt = new SimpleSchema({
    asAt: {
        type: Date,
        label: "As at",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    //type: "bootstrap-datetimepicker",
                    format: 'YYYY/MM/DD',
                    pickTime: false
                }
            }
        }
    }
});