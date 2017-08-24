({
    greetMe : function(component,event, helper){
        var greeting ='Joey says how you doinnn';
        component.set("v.greetingString",greeting);
        console.log(greeting);
        //debugger;{get;set;}
        
        //disable button..
        component.set("v.greeted", true);
        //helper.helperMethod2(component);
        var newMsg = component.get('v.greetingString');
        console.log('new greeting ',newMsg);
    },
    greetMeAgain : function(component,event, helper){
        helper.greetAgain(component);
    },
    alertme : function(component){
        //alert('Hi');
        component.set('v.greetingString', 'hi');
    }
})
