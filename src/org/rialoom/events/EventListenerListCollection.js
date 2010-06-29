/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.events");
/**
 * EventListenerListCollection Constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.events.EventListenerListCollection = function ( )
{
    var _listenerLists = new Array();
    /**
     * Returns EventListenerList corresponding to the passed event name.
     * listName String  The event name of the EventListenerList
     * Returns the EventListenerList or null
     */
    this.getListenerList = function ( listName ) //:EventListenerList
    {
        for ( var i = 0; i < _listenerLists.length; i++ )
        {
            if ( _listenerLists[i].getEventName() == listName )
            {
                return _listenerLists[i];
            }
        }
        return null;
    };
    /**
     * Adds new EventListenerList
     * listName String  The event name of the EventListenerList
     * Returns the EventListenerList or null
     */
    this.addListenerList = function ( listName ) //:EventListenerList
    {
        // prevent adding list duplicates
        for ( var i = 0; i < _listenerLists.length; i++ )
        {
            if ( _listenerLists[i].getEventName() == listName )
            {
                return null;
            }
        }
        var _list =
            new org.rialoom.events.EventListenerList(listName);
        _listenerLists.push(_list);
        return _list;
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.EventListenerListCollection]";
    };
}