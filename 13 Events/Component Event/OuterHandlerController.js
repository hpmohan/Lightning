({
	handleComponentEvent : function(component, event, helper) {
		var message = event.getParam("greetingMsg");
         component.set("v.messageFromEvent", message);
	}
})
