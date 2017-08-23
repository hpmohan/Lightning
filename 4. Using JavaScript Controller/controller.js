//Controller.js
({
    greetMe : function(component, event, helper){
        var greeting ='Joey says how you doinnn';
        component.set("v.greetingString",greeting);
        component.set("v.greeted", true);
    },
    greetMeAgain : function(component,event, helper){
        helper.greetAgain(component);
    }
})
