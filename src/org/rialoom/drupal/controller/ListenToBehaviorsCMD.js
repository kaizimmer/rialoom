/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.controller");
/**
 * ListenToBehaviorsCMD constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.controller.ListenToBehaviorsCMD = function ( )
{
    org.rialoom.mvcs.AbstractCommand.call(this);
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.controller.ListenToBehaviorsCMD, org.rialoom.mvcs.AbstractCommand);


//TODO: Command logic should be reviewd. The way it's implemented it's not possible to stop the event dispatching!
/**
 * Establishes "listening and dispatching"communication" to the Drupal.behaviors system
 */
org.rialoom.drupal.controller.ListenToBehaviorsCMD.prototype.execute = function ( event )
{
    /*/
    org.rialoom.utils.Debug.log("org.rialoom.drupal.controller.ListenToBehaviorsCMD .execute() invoked | " +
            "event type: " + event.getType() +
            " event target: " + event.getTarget());
    //*/
    if ( !Drupal.behaviors )
    {
        throw new Error("org.rialoom.drupal.controller.ListenToBehaviorsCMD .execute() | "
            + "There is no Drupal.behaviors property found !");
    }
    var _this = this;
    Drupal.behaviors.dispatchRialoomEvent = dispatchRialoomEvent;
    function dispatchRialoomEvent ( data )
    {
        _this.dispatch(new org.rialoom.drupal.events.BehaviorEvent(org.rialoom.drupal.events.BehaviorEvent.ON_UPDATE, _this, data));
    }
};

/**
 * toString Method
 */
org.rialoom.drupal.controller.ListenToBehaviorsCMD.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.controller.ListenToBehaviorsCMD]";
};



