({
    fireEvent : function(cmp, event){
        //getting application event.
        var appEvent = $A.get("e.c:greetEvent");
        //setting params
        appEvent.setParams({
            "greetingMsg" : "Let's cook..!"
        });
        //firing event
        appEvent.fire();
    }
})
