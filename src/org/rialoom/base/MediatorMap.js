/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.base");
/**
 * MediatorMap constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.base.MediatorMap = function ( eventDispatcher )
{
    var _actorMap = new org.rialoom.base.ActorMap(eventDispatcher)
    /**
     *  Returns instance of the passed mediatorClass(:String)
     *  Returns null if corresponding model does not exist.
     */
     this.getMediator = function ( mediatorClass )
     {
         return _actorMap.getActor(mediatorClass);
     };
     /**
      *  Creates an instance of the passed mediatorClass
      */
     this.mapView = function ( $view, mediatorClass )
     {
         if ( mediatorClass == null )
                throw new Error ("org.rialoom.base.MediatorMap.addModel | passed bad mediatorClass param: " + mediatorClass);
         var m = _actorMap.addActor(mediatorClass);
         m.$view = $view;
         m.init();
     };
};

/**
 * toString Method
 */
org.rialoom.base.MediatorMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.MediatorMap]";
};