/**
* Copyright (c) 2012 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.utils");

/**
 * Adds an instance of HtmlScriptElement to the Document body.
 */
org.rialoom.utils.ScriptInjector =
{
	SAMPLE_URL: "http://www.my-site.com/script-to-inject.js",

	/**
	 * Adds an instance of HtmlScriptElement to the Document body.
	 * @param scritpURL [optional] The script url. If no url is passed the user is prompted to enter an url.
	 */
	inject: function ( scritpURL )
	{
		// get address
		if ( scritpURL == null )
		{
			scritpURL = prompt("Enter Script URL to inject :", this.SAMPLE_URL);
		}
		if ( scritpURL == null || scritpURL == "" ) return;
		// add script node
		var htmlScriptElement = document.createElement("script");
		htmlScriptElement.setAttribute("src", scritpURL);
		try {
			document.getElementsByTagName("body")[0].appendChild(htmlScriptElement);
			return true;
		}
		catch ( err )
		{
			if ( document.getElementsByTagName("body")[0] == null )
			{
				org.rialoom.utils.Debug.log("ERROR: org.rialoom.utils.ScriptInjector.inject() " +
					"| You can't inject into non existent <body>! Wait until document is ready!");
			}
			return false;
		}
	}

};