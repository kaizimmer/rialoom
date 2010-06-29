/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.mvcs");
/**
 * AbstractContext constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.mvcs.AbstractContext = function ( )
{
    var _eventDispatcher = new org.rialoom.events.EventDispatcher();
    var _mediatorMap = new org.rialoom.base.MediatorMap(_eventDispatcher);
    var _modelMap = new org.rialoom.base.ModelMap(_eventDispatcher);
    var _commandMap = new org.rialoom.base.CommandMap(_eventDispatcher, _mediatorMap, _modelMap);
    /**
     * Returns CommandMap instance
     */
    this.getCommandMap = function ( )
    {
        return _commandMap;
    };
    /**
     * Returns MediatorMap instance
     */
    this.getMediatorMap = function ( )
    {
        return _mediatorMap;
    };
    /**
     * Returns ModelMap instance
     */
    this.getModelMap = function ( )
    {
        return _modelMap;
    };
    this.getEventDispatcher = function ( )
    {
        return _eventDispatcher;
    };
    this.startup();
};

org.rialoom.mvcs.AbstractContext.prototype.startup = function ( )
{
    var d = this.getEventDispatcher();
    var e =
        new org.rialoom.base.ContextEvent(
            org.rialoom.base.ContextEvent.STARTUP_COMPLETE, this);
    d.dispatchEvent(e);
};

org.rialoom.mvcs.AbstractContext.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractContext]";
};