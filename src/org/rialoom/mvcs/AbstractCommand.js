/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.mvcs");
/**
 * AbstractCommand constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.mvcs.AbstractCommand = function ( )
{
    org.rialoom.mvcs.Actor.call(this);
    // following functions are mixed in by CommandMap
    this.getCommandMap = function () {};
    this.getMediatorMap = function () {};
    this.getModelMap = function () {};
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.mvcs.AbstractCommand, org.rialoom.mvcs.Actor);

/**
 * execute Method
 */
org.rialoom.mvcs.AbstractCommand.prototype.execute = function ( event )
{
    throw new Error("org.rialoom.mvcs.AbstractCommand .execute() must be overriden");
};

/**
 * toString Method
 */
org.rialoom.mvcs.AbstractCommand.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractCommand]";
};