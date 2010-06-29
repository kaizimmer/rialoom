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
    /**
     *  Creates an instance of the passed actorClass(:String) and adds it to
     *  the actors list
     *  Returns created actor instance
     */
    this.addActor = function ( actorClass )
    {
        if ( actorClass == null )
            throw new Error ("org.rialoom.base.ActorMap.addModel | passed bad actorClass param: " + actorClass);
        var a = new actorClass();
        a.getEventDispatcher = function ( ) {return _dispatcher};
        a.dispatch = function ( event )
        {
            _dispatcher.dispatchEvent(event)
        };
        _actors.push({classRef: actorClass, instance: a});
        return a;
    };
    /**
     *  Returns instance of the passed actorClass(:String)
     *  Returns null if corresponding actor does not exist.
     */
     this.getActor = function ( actorClass )
     {
         for ( var i = 0; i < _actors.length; i++ )
         {
             if ( _actors[i].classRef == actorClass )
             {
                 return _actors[i].instance;
             }
         }
         return null;
     };
};

/**
 * toString Method
 */
org.rialoom.base.ActorMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.ActorMap]";
};