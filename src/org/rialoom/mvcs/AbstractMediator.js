/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.mvcs");
/**
 * TestViewMediator constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.mvcs.AbstractMediator = function ( )
{
    org.rialoom.mvcs.Actor.call(this);
    // mixed in by MediatorMap
    this.$view = null;
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.mvcs.AbstractMediator, org.rialoom.mvcs.Actor);


org.rialoom.mvcs.AbstractMediator.prototype.init = function ( )
{
    throw new Error("org.rialoom.mvcs.AbstractMediator must be overriden by subclass!");
};

/**
 * toString Method
 */
org.rialoom.mvcs.AbstractMediator.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractMediator]";
};



