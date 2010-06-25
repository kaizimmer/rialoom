/**
 * Event constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.events ) org.rialoom.events = {};
if ( !org.rialoom.events.Event )
org.rialoom.events.Event = function ( type, target )
{
    var _type = type;
    var _target = target;
    var _propagationStopped = false;
    this.getType = function ( )
    {
        return _type;
    };
    this.getTarget = function ( )
    {
        return _target;
    };
    this.getIsPropagationStopped = function ( )
    {
        return _propagationStopped;
    };
    this.stopPropagation = function ( )
    {
        _propagationStopped = true;
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.Event type: " + _type + " | target: " + _target + " ]";
    };
};

org.rialoom.events.Event.COMPLETE = "COMPLETE";
org.rialoom.events.Event.LOADED = "LOADED";
org.rialoom.events.Event.INIT = "INIT";