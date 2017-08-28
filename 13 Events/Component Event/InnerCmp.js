({
    fireEvent : function(cmp, event){
        //getting component event using the name.
        var cmpEvent = cmp.getEvent("cmpEvent");
        //var appEvent = $A.get("e.c:greetEvent"); <-- in app event we used this. ONLY difference.
        //setting params
        cmpEvent.setParams({
            "greetingMsg" : "Let's cook..!"
        });
        //firing event
        cmpEvent.fire();
    }
})
