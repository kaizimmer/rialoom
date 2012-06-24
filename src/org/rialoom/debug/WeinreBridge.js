/**
* Copyright (c) 2012 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.debug");

/**
 * Adds an instance of HtmlScriptElement to the Document body that establishes the Weinre client - debugger communication.
 */
org.rialoom.debug.WeinreBridge =
{
	isActive: false,
	defaultAddress: null,

	/**
	 * Adds an instance of HtmlScriptElement to the Document body that establishes the Weinre client - debugger communication.
	 * @param weinreAddress [optional] Weinre server address in the form of ip:port. If no address is passed the user is prompted to enter an address.
	 */
	activate: function ( weinreAddress )
	{
		if ( this.isActive )
		{
			org.rialoom.utils.Debug.log("WeinreScriptInjector: Injection blocked! Weinre script already injected!");
			return false;
		}
		// get address
		if ( weinreAddress == null )
		{
			weinreAddress = prompt("Enter Weinre Server address [sample: 127.0.0.1:8080] :", this.defaultAddress);
		}
		if ( weinreAddress == null || weinreAddress == "" ) return false;
		// add script node
		var url = "http://" + weinreAddress + "/target/target-script-min.js#anonymous";
		/*/
		var htmlScriptElement = document.createElement("script");
		htmlScriptElement.setAttribute("src", "http://" + weinreAddress + "/target/target-script-min.js#anonymous");
		document.getElementsByTagName("body")[0].appendChild(htmlScriptElement);
		//*/
		if ( org.rialoom.utils.ScriptInjector.inject(url) )
		{
			this.isActive = true;
			return true;
		}
		return false;
	}
};
