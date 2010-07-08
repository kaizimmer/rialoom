/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.base");
/**
 * CommandMap constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.base.CommandMap = function ( eventDispatcher, mediatorMap, modelMap )
{
    var _this = this;
    var _dispatcher = eventDispatcher;
    var _mediatorMap = mediatorMap;
    var _modelMap = modelMap;
    // eventListEntry = { eventType: eventType, eventClass: eventClass, commands: [] };
    // commandEntry = { command: commandClass, isOneShot: oneShot };
    var _eventLists = {};
    /**
     *
     */
    function _execCommand ( e )
    {
        var type = e.getType();
        if ( !_eventLists[type] ) return;
        var cmds = _eventLists[type].commands;
        for ( var i = 0; i < cmds.length; i++ )
        {
            // prevent commands registered with an eventClass parameter from being executed if the event type is the wrong one
            if ( cmds[i].eventClass != null && !( e instanceof cmds[i].eventClass ) ) continue;
            // create mixin execute
            var cmd = new cmds[i].command();
            cmd.dispatch = function ( event )
            {
                _dispatcher.dispatchEvent(event)
            };
            cmd.getEventDispatcher = function () {return _dispatcher};
            cmd.getCommandMap = function () {return _this};
            cmd.getMediatorMap = function () {return _mediatorMap};
            cmd.getModelMap = function () {return _modelMap};
            cmd.execute(e);
        }
        // delete one shots
        for ( i = cmds.length - 1; i >= 0; i-- )
        {
            if ( cmds[i].eventClass != null && !( e instanceof cmds[i].eventClass ) ) continue;
            if ( cmds[i].isOneShot )
            {
                cmds.splice(i,1);
            }
        }
    }
    /**
     *  Registers controller class with the passed event
     */
    this.mapEvent = function ( eventType, commandClass, eventClass, oneShot )
    {
        // check commandClass
        //*/
        var baseClass = org.rialoom.mvcs.AbstractCommand;
        if ( !commandClass || !(commandClass.prototype instanceof baseClass) )
        {
            throw new Error("org.rialoom.base.CommandMap .mapEvent() | "
                            + "commandClass param is no subclass of "
                            + baseClass + "!");
        }
        //*/
        // create event list if not existing
        if ( !_eventLists[eventType] )
        {
            _eventLists[eventType] =
            {
                eventType: eventType,
                commands: []
            };
        }
        // add listener
        _eventLists[eventType].commands.push(
            {
                command: commandClass,
                eventClass: eventClass,
                isOneShot: oneShot
            }
        );
        _dispatcher.addEventListener( eventType, this, _execCommand );
    };
    /**
     *  Removes controller class and returns boolean flag indicating success
     */
    this.unmapEvent = function ( eventType, commandClass, eventClass )
    {
        if ( !_eventLists[eventType] ) return false;
        if ( eventClass )
        {
            if ( _eventLists[eventType].eventClass != eventClass ) return false;
        }
        var cmds = _eventLists[eventType].commands;
        for ( i = 0; i < cmds.length; i++ )
        {
            if ( cmds[i].command == commandClass )
            {
                if ( cmds[i].eventClass != null && cmds[i].eventClass != eventClass ) continue;
                cmds.splice(i,1);
                return true;
            }
        }
        return false;
    };
};

/**
 * toString Method
 */
org.rialoom.base.CommandMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.CommandMap]";
};