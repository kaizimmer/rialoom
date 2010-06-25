/**
 * Event constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.base ) org.rialoom.base = {};
if ( !org.rialoom.base.ContextEvent )
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
// Setup prototype chain
org.rialoom.base.ContextEvent.prototype = new org.rialoom.events.Event();
// clean prototype from unnecessary properties added via super constructor
delete org.rialoom.base.ContextEvent.prototype.getType;
delete org.rialoom.base.ContextEvent.prototype.getTarget;
delete org.rialoom.base.ContextEvent.prototype.getIsPropagationStopped;
delete org.rialoom.base.ContextEvent.prototype.stopPropagation;
delete org.rialoom.base.ContextEvent.prototype.toString;
// Reasign the prototype object to the correct constructor
org.rialoom.base.ContextEvent.prototype.constructor = org.rialoom.events.Event;

org.rialoom.base.ContextEvent.STARTUP_COMPLETE = "STARTUP_COMPLETE";