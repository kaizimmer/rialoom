/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
if ( !org ) var org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.utils ) org.rialoom.utils = {};
if ( !org.rialoom.utils.ClassUtils )
org.rialoom.utils.ClassUtils = function () {};

org.rialoom.utils.ClassUtils.createPackage =
function ( packagePath )
{
    if ( !packagePath )
        throw new Error("org.rialoom.utils.ClassUtils.createPackage | no packagePath passed");
    var packages = packagePath.split(".");
    var scope = window;
    for ( var i = 0; i < packages.length; i++ )
    {
        if ( scope[packages[i]] == null )
        {
            scope[packages[i]] = {};
        }
        scope = scope[packages[i]];
    }
    return scope;
}

org.rialoom.utils.ClassUtils.createConstructor =
function ( packagePath, className )
{
    if ( !className )
            throw new Error("org.rialoom.utils.ClassUtils.createConstructor | no className passed");
    var pack = org.rialoom.utils.ClassUtils.createPackage(packagePath);
    if ( pack[className] == null ) pack[className] = new Function();
    return pack[className];
}

org.rialoom.utils.ClassUtils.inherits = function ( subClass, superClass )
{
    function tmpClass() {};
    tmpClass.prototype = superClass.prototype;
    subClass.prototype = new tmpClass();
    subClass.prototype.constructor = subClass;
    subClass._superClass = superClass.prototype;
};