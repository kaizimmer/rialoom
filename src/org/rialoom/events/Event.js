/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.events");
/**
 * Event constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.events.Event = function ( type, target )
{
    var _type = type;
    var _target = target;
    var _propagationStopped = false;
    this.getType = function ( )
    {
        return _type;
    };
    this.getTarget = function ( )
    {
        return _target;
    };
    this.getIsPropagationStopped = function ( )
    {
        return _propagationStopped;
    };
    this.stopPropagation = function ( )
    {
        _propagationStopped = true;
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.Event type: " + _type + " | target: " + _target + " ]";
    };
};

org.rialoom.events.Event.COMPLETE = "COMPLETE";
org.rialoom.events.Event.LOADED = "LOADED";
org.rialoom.events.Event.INIT = "INIT";