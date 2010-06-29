/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.events");
/**
 * EventListenerList constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.events.EventListenerList = function ( eventName )
{
    var _eventName = eventName;
    var _listeners = new Array();
    /**
     * Adds passed listener
     * Returns the Boolean flag
     */
    this.addEventListener = function ( scope, func ) //:Boolean
    {
        for ( var i = 0; i < _listeners.length; i++ )
        {
            if ( _listeners[i].scope == scope &&
                 _listeners[i].func == func ) return false;
        }
        _listeners.push({scope: scope, func: func});
        return true;
    };
    /**
     * Removes passed listener
     * Returns the Boolean flag
     */
    this.removeEventListener = function ( scope, func ) //:Boolean
    {
        for ( var i = 0; i < _listeners.length; i++ )
        {
            if ( _listeners[i].scope == scope &&
                 _listeners[i].func == func )
            {
                _listeners.splice(i,1);
                return true;
            }
        }
        return false;
    };
    /**
     * Returns the lists event name
     */
    this.getEventName = function ( ) //:String
    {
        return _eventName;
    };
    /**
     * Returns listeners
     */
    this.getListeners = function ( ) //:Array
    {
        return _listeners;
    };
    /**
     * Deletes listeners
     */
    this.destroy = function ( ) //:void
    {
        _listeners = null;
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.EventListenerList]";
    };
}