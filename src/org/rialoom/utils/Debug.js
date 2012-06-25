/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
if ( !org ) var org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.utils ) org.rialoom.utils = {};
if ( !org.rialoom.utils.Debug )
org.rialoom.utils.Debug = {};

org.rialoom.utils.Debug.LOG_LEVEL_ALL = "all";
org.rialoom.utils.Debug.LOG_LEVEL_LOG = "log";
org.rialoom.utils.Debug.LOG_LEVEL_WARN = "warn";
org.rialoom.utils.Debug.LOG_LEVEL_ERROR = "error";


(function ( )
{
    var logLevel;
    var logMethod;
    var isLogging = true;

	try {
	    var rialoomConfig = JSON.parse(localStorage.getItem("rialoom"));
	    if ( rialoomConfig.logLevel != null )
	    {
		    logLevel = rialoomConfig.logLevel;
	    }
    }
    catch ( err )
    {
	    logLevel = org.rialoom.utils.Debug.LOG_LEVEL_ALL;
    }


    function _log ( )
    {
        if ( !isLogging ) return;

        try
        {
            if ( navigator.userAgent.toLowerCase().indexOf("msie 8") == -1 )
            {
                console[logMethod].apply(console, arguments);
            }
            else {
                var args = [];
                for ( var i = 0; i < arguments.length; i++ ) args.push(arguments[i]);
                try {
                    console[logMethod](args.join(" | "));
                }
                catch ( err )
                {
                    console.log(args.join(" | "));
                }
            }
        }
        catch ( err )
        {
            // fail silently
        }
    }

    function log ( )
    {
        switch ( logLevel )
        {
            case org.rialoom.utils.Debug.LOG_LEVEL_ALL:
            case logMethod:
                _log.apply(null, arguments);
                break;
        }
    }

    function logCustom ( )
    {
        switch ( logLevel )
        {
            case org.rialoom.utils.Debug.LOG_LEVEL_ALL:
            case logMethod:
                logMethod = "log";
                _log.apply(null, arguments);
                break;
        }
    }

    org.rialoom.utils.Debug.log = function ( )
    {
        logMethod = "log";
        log.apply(null, arguments);
    };

    org.rialoom.utils.Debug.warn = function ( )
    {
        logMethod = "warn";
        log.apply(null, arguments);
    };

    org.rialoom.utils.Debug.error = function ( )
    {
        logMethod = "error";
        log.apply(null, arguments);
    };

    org.rialoom.utils.Debug.logCustom = function ( customLevel )
    {
        logMethod = customLevel;
        logCustom.apply(null, Array.prototype.slice.call(arguments, 1));
    };

    org.rialoom.utils.Debug.setLogLevel = function ( level, isCustomLevel )
    {
		if ( isCustomLevel )
		{
		    logLevel = level;
		}
		else {
		    switch ( level )
		    {
		        case org.rialoom.utils.Debug.LOG_LEVEL_LOG:
		        case org.rialoom.utils.Debug.LOG_LEVEL_WARN:
		        case org.rialoom.utils.Debug.LOG_LEVEL_ERROR:
		        case org.rialoom.utils.Debug.LOG_LEVEL_ALL:
		            logLevel = level;
		            break;
		        default:
		            logLevel = org.rialoom.utils.Debug.LOG_LEVEL_ALL;
		    }
		}
	    try {
		    var rialoomConfig = JSON.parse(localStorage.getItem("rialoom"));
		    if ( rialoomConfig == null )
		    {
			    rialoomConfig = {};
		    }
		    rialoomConfig.logLevel = logLevel;
		    localStorage.setItem("rialoom", JSON.stringify(rialoomConfig));
	    }
	    catch ( err )
	    {
		    // fail silently for now
	    }
    };

    org.rialoom.utils.Debug.getLogLevel = function ( )
    {
        return logLevel;
    };

    org.rialoom.utils.Debug.activateLogging = function ( )
    {
        isLogging = true;
    };

    org.rialoom.utils.Debug.disableLogging = function ( )
    {
        isLogging = false;
    };

    org.rialoom.utils.Debug.checkIfIsLogging = function ( )
    {
        return isLogging;
    };

})();
