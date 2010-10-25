/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.mvcs");
/**
 * Actor constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.mvcs.Actor = function ( )
{
    // following functions need to be mixed in (probably by ActorMap)
    this.mapID = null;
    this.dispatch = function ( event ) {};
    this.getEventDispatcher = function () {};
};

/**
 * toString Method
 */
org.rialoom.mvcs.Actor.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.Actor]";
};