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
org.rialoom.base.MediatorMap = function ( eventDispatcher, modelMap )
{
    var _actorMap = new org.rialoom.base.ActorMap(eventDispatcher);
    var _modelMap = modelMap;
    var _selectorsToMap = [];
    var _mappedElements = [];
    /**
     *  Returns instance of the passed mediatorClass(:Function) with mapping of passed id(:String)
     *  Returns null if specified instance does not exist.
     */
     this.getMediator = function ( mediatorClass, id )
     {
         return _actorMap.getActor(mediatorClass, id);
     };
    /**
     *  Returns an array containing all mediator instances of type mediatorClass(:Function).
     *  If mediatorClass param is null all registered mediators are returned.
     *  If no corresponding mediator exists an empty array is returned.
     */
     this.getMediators = function ( mediatorClass )
     {
         return _actorMap.getActors(mediatorClass);
     };
     /**
      *  Maps passed dom element to a new instance of the passed mediatorClass
      */
     this.mapElement =
     this.mapView =
     function ( element, mediatorClass, id )
     {
         if ( element == null )
             throw new Error ("org.rialoom.base.MediatorMap.(mapView/mapElement) | " +
                              "no element parameter passed");
         if ( !mediatorClass || !(mediatorClass.prototype instanceof org.rialoom.mvcs.AbstractMediator) )
             throw new Error ("org.rialoom.base.MediatorMap.(mapView/mapElement) | " +
                              "passed bad mediatorClass [ " + mediatorClass + " ]");
         var $views = element.jquery != null ? element : $(element);
         if ( $views.length > 1 && id != null )
             throw new Error ("org.rialoom.base.MediatorMap.(mapView/mapElement) | " +
                              "cannot register multiple doc elements to the same id [ " + id + " ]");
         for ( var i = 0; i < $views.length; i++ )
         {
             var isAlreadyMapped = false;
             for ( var j = 0; j < _mappedElements.length; j++ )
             {
                 if ( $views[i] == _mappedElements[j] )
                 {
                     isAlreadyMapped = true;
                     break;
                 }
             }
             if ( !isAlreadyMapped )
             {
                 _mappedElements.push($views[i]);
                 createMediator($($views[i]), mediatorClass, id);
             }
             else org.rialoom.utils.Debug.log("org.rialoom.base.MediatorMap.(mapView/mapElement) | " +
                                              "Mapping failed !!! Already mapped dom element ", $views[i]);
         }
     };
     /**
      *  Maps passed selector to a new instance of the passed mediatorClass. If makeScanable
      *  is true the passed selector is stored and marked for future scanDocument() invocations.
      */
     this.mapSelector = function ( selector, mediatorClass, makeScanable )
     {
         if ( selector == null )
             throw new Error ("org.rialoom.base.MediatorMap.mapSelector | no selector param passed");
         if ( !mediatorClass || !(mediatorClass.prototype instanceof org.rialoom.mvcs.AbstractMediator) )
             throw new Error ("org.rialoom.base.MediatorMap.mapSelector | " +
                              "passed bad mediatorClass [ " + mediatorClass + " ]");
         var $views = $(selector);
         for ( var i = 0; i < $views.length; i++ ) createMediator($($views[i]), mediatorClass);
         if ( !makeScanable ) return;
         // prevent multiple selector mappings
         for ( i = 0; i < _selectorsToMap.length; i++ )
            if ( selector == _selectorsToMap[i].selector ) return;
         _selectorsToMap.push( {selector: selector, mediatorClass: mediatorClass} );
     };
     /**
      *  Removes passed selector from mapping list that is checked on scanDocument() invocations.
      *  Note: This method doesn't destroy or decouple any exisitng mediator!
      *  Returns true if successful.
      */
     this.unmapSelector = function ( selector )
     {
         for ( var i = 0; i < _selectorsToMap.length; i++ )
         {
             if ( selector == _selectorsToMap[i].selector )
             {
                 _selectorsToMap.splice(i, 1);
                 return true;
             }
         }
         return false;
     };
     /**
      *  Creates an instance of the passed mediatorClass
      *  Returns boolean flag indicating whether creation was successful.
      */
     function createMediator ( $view, mediatorClass, id )
     {
         // return false if there's already an mediatorClass instance with the specified id.
         if ( _actorMap.getActor(mediatorClass, id) != null ) return false;
         var m = _actorMap.addActor(mediatorClass, id);
         // mixin modelMap acces
         m.getModelMap = function ( ) {return _modelMap};
         m.$view = $view;
         m.onRegister();
         return true;
     }
     /**
      *  Scans document for mapped selectors (i.e. selectors marked as scanable)
      *  and instanciates corresponding mediators.
      */
     this.scanDocument = function ( )
     {
         for ( var i = 0; i < _selectorsToMap.length; i++ )
             this.mapView(_selectorsToMap[i].selector, _selectorsToMap[i].mediatorClass);
     };
};

/**
 * toString Method
 */
org.rialoom.base.MediatorMap.prototype.toString = function ( )
{
    var mediatorIDs = [];
    var mediators = this.getMediators();
    for ( var i = 0; i < mediators.length; i++ ) mediatorIDs.push(mediators[i].mapID);
    return "[org.rialoom.mvcs.MediatorMap | registered mediators [ " + mediatorIDs.join(" | ") + " ] ]";
};