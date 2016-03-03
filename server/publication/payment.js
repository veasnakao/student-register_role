//dynamic
Meteor.publish('payment',function(selector){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Payment.find(selector);
    return data;
});
Meteor.publish('payments',function(){
    //waiting
    Meteor._sleepForMs(10);
    let data = Collection.Payment.find();
    return data;
});