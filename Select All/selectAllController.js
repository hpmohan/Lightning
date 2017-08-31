selectAll : function (component, event, helper)
    {
        var selectedHeaderCheck = event.getSource().get("v.value");
        var getAllId = component.find("boxPack");
        if(selectedHeaderCheck) //select or DeSelect all?
        {
            for(var i = 0; i < getAllId.length ; i++)
            {
                component.find("boxPack")[i].set("v.value", true);
            }
            component.set("v.selectedCount", getAllId.length);
        }
        else
        {
            for(var i = 0; i < getAllId.length ; i++)
            {
                component.find("boxPack")[i].set("v.value", false);
            }
            component.set("v.selectedCount", 0);
        }
    }
