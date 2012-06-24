/**
* Copyright (c) 2012 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
if ( this.ria == null )
{
	this.ria = org.rialoom;
	ria.buildDate = org.rialoom.buildDate;
	// inheritance
	ria.createPackage = function ( packagePath ) { return org.rialoom.utils.ClassUtils.createPackage(packagePath) };
	ria.createConstructor = function ( packagePath, className ) { return org.rialoom.utils.ClassUtils.createConstructor(packagePath, className) };
	ria.inherits = function ( subClass, superClass ) { return org.rialoom.utils.ClassUtils.inherits( subClass, superClass ) };
	// debugging
	ria.log = function ( message ) { return org.rialoom.utils.Debug.log.apply(org.rialoom.utils.Debug, arguments); };
	ria.warn = function ( message ) { return org.rialoom.utils.Debug.warn.apply(org.rialoom.utils.Debug, arguments); };
	ria.error = function ( message ) { return org.rialoom.utils.Debug.error.apply(org.rialoom.utils.Debug, arguments); };
	ria.logCustom = function ( customLevel, message ) { return org.rialoom.utils.Debug.logCustom.apply(org.rialoom.utils.Debug, arguments); };
	ria.setLogLevel = function ( level, isCustomLevel ) { return org.rialoom.utils.Debug.setLogLevel.apply(org.rialoom.utils.Debug, arguments); };
	ria.getLogLevel = function ( ) { return org.rialoom.utils.Debug.getLogLevel.apply(org.rialoom.utils.Debug, arguments); };
	
	ria.activateLogging = function ( ) { return org.rialoom.utils.Debug.activateLogging.apply(org.rialoom.utils.Debug); };
	ria.disableLogging = function ( ) { return org.rialoom.utils.Debug.disableLogging.apply(org.rialoom.utils.Debug); };
	ria.checkIfIsLogging = function ( ) { return org.rialoom.utils.Debug.checkIfIsLogging.apply(org.rialoom.utils.Debug); };
	
	// delegation
	/**
	 * Delegates method calls to passed handler. Handler scope is defined by passed scope argument.
	 * @param scope : Object
	 * @param handler : Function
	 * @return delegate : Function
	 */
	ria.createDelegate = function ( scope, handler ) { return org.rialoom.utils.Delegate.create(scope, handler) };
	/**
	 * Returns internal [[Class]] property of passed instance. Returns "_global" if the passed argument is global scope.
	 * @param instance : Object
	 * @return String representation of instance's internal [[Class]].
	 */
	ria.getTypeOf = function ( instance ) { return org.rialoom.utils.ClassUtils.getTypeOf(instance); };
}