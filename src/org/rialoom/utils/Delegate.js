/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.utils");
/**
 * Delegate constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.utils.Delegate = function () {};
org.rialoom.utils.Delegate.create = function ( scope, handler )
{
    return function ( ) {handler.apply(scope, arguments);};
};