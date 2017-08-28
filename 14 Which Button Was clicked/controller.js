({
	catchMeIfYouCan : function(cmp, event, helper) {
        //event.getSource() will give you the cmp that was clicked.
		var whichOne = event.getSource().getLocalId();
        cmp.set("v.whichButton", whichOne);
	}
})
