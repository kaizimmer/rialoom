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
     *  Creates an instance of the passed modelClass(:Function) and adds it to the models list
     *  Returns boolean flag indicating whether creation was successful.
     */
    this.addModel = function ( modelClass, id )
    {
        if ( modelClass == null )
            throw new Error ("org.rialoom.base.ModelMap.addModel | no modelClass parameter passed!");
        if ( !(modelClass.prototype instanceof org.rialoom.mvcs.Actor) )
            throw new Error ("org.rialoom.base.ModelMap.addModel | modelClass [ "  + modelClass +
                             " ] " + "parameter needs to be a subclass of org.rialoom.mvcs.Actor");
        // return false if there's already an modelClass instance with the specified id.
        if ( _actorMap.getActor(modelClass, id) != null ) return false;
        _actorMap.addActor(modelClass, id);
        return true;
    };
    /**
     *  Returns instance of the passed modelClass(:Function) with mapping of passed id(:String)
     *  Returns null if specified model instance does not exist.
     */
     this.getModel = function ( modelClass, id )
     {
         return _actorMap.getActor(modelClass, id);
     };
    /**
     *  Returns an array containing all model instances of type modelClass(:Function).
     *  If modelClass param is null all registered model instances are returned.
     *  If no corresponding model exists an empty array is returned.
     */
     this.getModels = function ( modelClass )
     {
         return _actorMap.getActors(modelClass);
     };
};

/**
 * toString Method
 */
org.rialoom.base.ModelMap.prototype.toString = function ( )
{
    var modelIDs = [];
    var models = this.getModels();
    for ( var i = 0; i < models.length; i++ ) modelIDs.push(models[i].mapID);
    return "[org.rialoom.mvcs.ModelMap | registered models [ " + modelIDs.join(" | ")  + " ] ]";
};