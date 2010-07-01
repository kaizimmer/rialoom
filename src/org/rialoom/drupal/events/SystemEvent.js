/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.events");
/**
 * SystemEvent constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.events.SystemEvent = function ( type, target, data )
{
    org.rialoom.events.Event.call(this, type, target);
    this.data = data;
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.events.SystemEvent, org.rialoom.events.Event);

/**
 * Sets content
 */
org.rialoom.drupal.events.SystemEvent.prototype.setData = function ( data )
{
    this.data = data;
};

/**
 * Returns content
 */
org.rialoom.drupal.events.SystemEvent.prototype.getData = function ( )
{
    return this.data;
};

/**
 * toString Method
 */
org.rialoom.drupal.events.SystemEvent.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.events.SystemEvent type: " + this.getType() + " | target: " + this.getTarget() + " ]";
};


org.rialoom.drupal.events.SystemEvent.ON_CONNECTED = "ON_CONNECTED";
