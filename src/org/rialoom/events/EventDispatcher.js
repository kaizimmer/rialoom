/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.events");
/**
 * EventDispatcher constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.events.EventDispatcher = function ( )
{
    var _listCol = new org.rialoom.events.EventListenerListCollection();
    /**
     *  Adds listener
     *  eventName:String   event type
     *  eventClass:String   event class
     *  scope:Object   scope the listener should work with
     *  func:Function   the listener function
     *  Returns boolean flag.
     */
    this.addEventListener = function ( eventName, scope, func, eventClass ) //:Boolean
    {
        var _list = _listCol.getListenerList(eventName, eventClass);
        if ( !_list ) _list = _listCol.addListenerList(eventName, eventClass);
        return _list.addEventListener(scope, func);
    };
    /**
     *  Removes listener
     *  eventName:String   event type
     *  eventClass:String   event class
     *  scope:Object   scope the listener works with
     *  func:Function   the listener function
     *  Returns boolean flag.
     */
    this.removeEventListener = function ( eventName, scope, func, eventClass ) //:Boolean
    {
        var _list = _listCol.getListenerList(eventName, eventClass);
        if ( !_list ) return false;
        return _list.removeEventListener(scope, func);
    };
    /**
     *
     */
    this.dispatchEvent = function ( event )//:void
    {
        var _list1 = _listCol.getListenerList(event.getType(), event.constructor);
        var _list2 = _listCol.getListenerList(event.getType());
        if ( _list1 != null )
        {
            var _listeners1 = _list1.getListeners();
            for ( var i = 0; i < _listeners1.length; i++ )
            {
                if ( event.getIsPropagationStopped() ) return;
                _listeners1[i].func.call(_listeners1[i].scope, event);
            }
        }
        if ( _list2 != null )
        {
            var _listeners2 = _list2.getListeners();
            for ( var j = 0; j < _listeners2.length; j++ )
            {
                if ( event.getIsPropagationStopped() ) return;
                _listeners2[j].func.call(_listeners2[j].scope, event);
            }
        }
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.EventDispatcher]";
    };
};