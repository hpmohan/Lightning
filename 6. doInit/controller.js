({
    fetchAccounts: function(component){
        var action = component.get("c.getAccounts");
        //action.setParams({ howMany : component.get("v.limit") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
