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
org.rialoom.utils.Debug.isLogging = true;

org.rialoom.utils.Debug.log = function ( )
{
    if ( !this.isLogging ) return;
    try
    {
        if ( navigator.userAgent.toLowerCase().indexOf("msie 8") == -1 )
        {
            console.log.apply(console, arguments);
        }
        else {
            var args = [];
            for ( var i = 0; i < arguments.length; i++ ) args.push(arguments[i]);
            console.log(args.join(" | "));
        }
    }
    catch ( e )
    {
        // 
    }
};

org.rialoom.utils.Debug.activateLogging = function ( )
{
    this.isLogging = true;
};

org.rialoom.utils.Debug.disableLogging = function ( )
{
    this.isLogging = false;
};