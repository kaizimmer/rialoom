/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.base");
/**
 * ModelMap constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.base.ModelMap = function ( eventDispatcher )
{
    var _actorMap = new org.rialoom.base.ActorMap(eventDispatcher)
    /**
     *  Creates an instance of the passed modelClass and adds it to
     *  the models list
     *  Returns created model instance
     */
    this.addModel = function ( modelClass )
    {
        if ( modelClass == null )
            throw new Error ("org.rialoom.base.ModelMap.addModel | passed bad modelClass param: " + modelClass);
        return _actorMap.addActor(modelClass);
    };
    /**
     *  Returns instance of the passed modelClass(:String)
     *  Returns null if corresponding model does not exist.
     */
     this.getModel = function ( modelClass )
     {
         return _actorMap.getActor(modelClass);
     };
};

/**
 * toString Method
 */
org.rialoom.base.ModelMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.ModelMap]";
};