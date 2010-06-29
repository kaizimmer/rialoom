/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.base");
/**
 * Event constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.base.ContextEvent = function ( type, target )
{
    org.rialoom.events.Event.call(this, type, target);
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.base.ContextEvent type: " + type +
            " | target: " + target + " ]";
    };
}

org.rialoom.utils.ClassUtils.inherits(org.rialoom.base.ContextEvent, org.rialoom.events.Event);

org.rialoom.base.ContextEvent.STARTUP_COMPLETE = "STARTUP_COMPLETE";