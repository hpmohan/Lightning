({
	handleEvent : function(cmp, event) {
        //getting msg from event
		var message = event.getParam("greetingMsg");
        cmp.set("v.messageFromEvent", message);
	}
})
