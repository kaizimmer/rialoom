/**
* Copyright (c) 2012 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
if ( this.ria == null )
{
	this.ria = org.rialoom;
	// inheritance
	ria.createPackage = function ( packagePath ) { return org.rialoom.utils.ClassUtils.createPackage(packagePath) },
	ria.createConstructor = function ( packagePath, className ) { return org.rialoom.utils.ClassUtils.createConstructor(packagePath, className) },
	ria.inherits = function ( subClass, superClass ) { return org.rialoom.utils.ClassUtils.inherits( subClass, superClass ) },
	// debugging
	ria.log = function ( message )
	{
			return org.rialoom.utils.Debug.log.apply(org.rialoom.utils.Debug, arguments);
			//alert(console.log("foo")); // returns "_firebugIgnore" ???
	},
	ria.activateLogging = function ( ) { org.rialoom.utils.Debug.activateLogging() },
	ria.disableLogging = function ( ) { org.rialoom.utils.Debug.disableLogging() },
	// delegation
	/**
	 * Delegates method calls to passed handler. Handler scope is defined by passed scope argument.
	 * @param scope : Object
	 * @param handler : Function
	 * @return delegate : Function
	 */
	ria.createDelegate = function ( scope, handler ) { return org.rialoom.utils.Delegate.create(scope, handler) }
}