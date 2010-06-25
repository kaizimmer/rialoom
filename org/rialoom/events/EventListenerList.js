/**
 * EventListenerList constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.events ) org.rialoom.events = {};
if ( !org.rialoom.events.EventListenerList )
org.rialoom.events.EventListenerList = function ( eventName )
{
    var _eventName = eventName;
    var _listeners = new Array();
    /**
     * Adds passed listener
     * Returns the Boolean flag
     */
    this.addEventListener = function ( scope, func ) //:Boolean
    {
        for ( var i = 0; i < _listeners.length; i++ )
        {
            if ( _listeners[i].scope == scope &&
                 _listeners[i].func == func ) return false;
        }
        _listeners.push({scope: scope, func: func});
        return true;
    };
    /**
     * Removes passed listener
     * Returns the Boolean flag
     */
    this.removeEventListener = function ( scope, func ) //:Boolean
    {
        for ( var i = 0; i < _listeners.length; i++ )
        {
            if ( _listeners[i].scope == scope &&
                 _listeners[i].func == func )
            {
                _listeners.splice(i,1);
                return true;
            }
        }
        return false;
    };
    /**
     * Returns the lists event name
     */
    this.getEventName = function ( ) //:String
    {
        return _eventName;
    };
    /**
     * Returns listeners
     */
    this.getListeners = function ( ) //:Array
    {
        return _listeners;
    };
    /**
     * Deletes listeners
     */
    this.destroy = function ( ) //:void
    {
        _listeners = null;
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.EventListenerList]";
    };
}