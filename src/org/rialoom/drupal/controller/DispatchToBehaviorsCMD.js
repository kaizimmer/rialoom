/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.controller");
/**
 * DispatchToBehaviorsCMD constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.controller.DispatchToBehaviorsCMD = function ( )
{
    org.rialoom.mvcs.AbstractCommand.call(this);
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.controller.DispatchToBehaviorsCMD, org.rialoom.mvcs.AbstractCommand);


/**
 * Establishes "listening and dispatching"communication" to the Drupal.behaviors system
 */
org.rialoom.drupal.controller.DispatchToBehaviorsCMD.prototype.execute = function ( event )
{
    /*/
    if ( console ) console.log("org.rialoom.drupal.controller.DispatchToBehaviorsCMD .execute() invoked | " +
            "event type: " + event.getType() +
            " event target: " + event.getTarget());
    //*/
    if ( !Drupal.behaviors )
    {
        throw new Error("org.rialoom.drupal.controller.DispatchToBehaviorsCMD .execute() | "
            + "There is no Drupal.behaviors property found !");
    }
    if ( !( event instanceof org.rialoom.drupal.events.BehaviorEvent ) )
    {
            throw new Error("org.rialoom.drupal.controller.DispatchToBehaviorsCMD .execute() | "
                + "Registered with wrong event type! Event must be of type org.rialoom.drupal.events.BehaviorEvent!");
    }
    // Do not update behaviors with their own events (endless loop)
    if ( event.getTarget() instanceof org.rialoom.drupal.controller.ListenToBehaviorsCMD ) return;
    // update behaviors
    Drupal.attachBehaviors(event.getData());
};

/**
 * toString Method
 */
org.rialoom.drupal.controller.DispatchToBehaviorsCMD.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.controller.DispatchToBehaviorsCMD]";
};



