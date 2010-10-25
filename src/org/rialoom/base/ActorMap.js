/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.base");
/**
 * ActorMap constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.base.ActorMap = function ( eventDispatcher )
{
    var _this = this;
    var _dispatcher = eventDispatcher;
    var _actors = [];
    var _unNamedActors = 0;
    var _UNNAMED_ID = "unnamed-actor-";
    /**
     *  Creates an instance of the passed actorClass(:String) and adds it to
     *  the actors list (If more than one Actor of the same class is to be added you should
     *  provide the id parameter so you are able to access and identify every single Actor
     *  instance later on.)
     *  Returns created actor instance
     */
    this.addActor = function ( actorClass, id )
    {
        if ( actorClass == null )
            throw new Error ("org.rialoom.base.ActorMap.addActor | " +
                             "passed bad actorClass param: " + actorClass);
        if ( id )
        {
            for ( var i = 0; i < _actors.length; i++ )
                if ( ( _actors[i].classRef == actorClass ) && ( _actors[i].id == id ) )
                    throw new Error ("org.rialoom.base.ActorMap.addActor | " +
                                     "passed actorClass [ "+ actorClass + " ] " +
                                     "already registered with " +
                                     "passed id [ "+ id + " ] !");
        }
        else id = _UNNAMED_ID + _unNamedActors++;
        var a = new actorClass();
        a.mapID = id;
        a.getEventDispatcher = function ( ) {return _dispatcher};
        a.dispatch = function ( event )
        {
            _dispatcher.dispatchEvent(event)
        };
        _actors.push( {classRef: actorClass, instance: a, id: id} );
        return a;
    };
    /**
     *  Returns instance of the passed actorClass(:Function) with the id of id
     *  Returns null if corresponding actor does not exist.
     */
     this.getActor = function ( actorClass, id )
     {
         if ( !actorClass || !id ) return null;
         for ( var i = 0; i < _actors.length; i++ )
             if ( _actors[i].classRef == actorClass && id == _actors[i].id )
                         return _actors[i].instance;
         return null;
     };
    /**
     *  Returns all actors(:Array) of type actorClass(:Function).
     *  If actorClass param is null all registered actors(:Array) are returned.
     *  If no corresponding actor exists an empty array is returned.
     */
     this.getActors = function ( actorClass )
     {
         var actors = [];
         if ( actorClass == null )
            for ( i = 0; i < _actors.length; i++ ) actors.push(_actors[i].instance);
         else
            for ( var i = 0; i < _actors.length; i++ )
                 if ( _actors[i].classRef == actorClass ) actors.push(_actors[i].instance);
         return actors;
     };
};

/**
 * toString Method
 */
org.rialoom.base.ActorMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.ActorMap]";
};