/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.events");
/**
 * BehaviorEvent constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.events.BehaviorEvent = function ( type, target, data )
{
    org.rialoom.events.Event.call(this, type, target);
    this.data = data;
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.events.BehaviorEvent, org.rialoom.events.Event);

/**
 * Sets data to be injected into behaviors
 */
org.rialoom.drupal.events.BehaviorEvent.prototype.setData = function ( data )
{
    this.data = data;
};

/**
 * Returns behavior data
 */
org.rialoom.drupal.events.BehaviorEvent.prototype.getData = function ( )
{
    return this.data;
};

/**
 * toString Method
 */
org.rialoom.drupal.events.BehaviorEvent.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.events.BehaviorEvent type: " + this.getType() + " | target: " + this.getTarget() + " | data: " + this.data + " ]";
};


org.rialoom.drupal.events.BehaviorEvent.ON_UPDATE = "ON_UPDATE";
