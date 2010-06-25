/**
 * EventDispatcher constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.events ) org.rialoom.events = {};
if ( !org.rialoom.events.EventDispatcher )
org.rialoom.events.EventDispatcher = function ( )
{
    var _listCol = new org.rialoom.events.EventListenerListCollection();
    /**
     *  Adds listener
     *  eventName:String   event type
     *  scope:Object   scope the listener should work with
     *  func:Function   the listener function
     *  Returns boolean flag.
     */
    this.addEventListener = function ( eventName, scope, func ) //:Boolean
    {
        var _list = _listCol.getListenerList(eventName);
        if ( !_list ) _list = _listCol.addListenerList(eventName);
        return _list.addEventListener(scope, func);
    };
    /**
     *  Removes listener
     *  eventName:String   event type
     *  scope:Object   scope the listener works with
     *  func:Function   the listener function
     *  Returns boolean flag.
     */
    this.removeEventListener = function ( eventName, scope, func ) //:Boolean
    {
        var _list = _listCol.getListenerList(eventName);
        if ( !_list ) return false;
        return _list.removeEventListener(scope, func);
    };
    /**
     *
     */
    this.dispatchEvent = function ( event )//:void
    {
        var _list = _listCol.getListenerList(event.getType());
        if ( !_list ) return;
        var _listeners = _list.getListeners();
        for ( var i = 0; i < _listeners.length; i++ )
        {
            if ( event.getIsPropagationStopped() ) break;
            _listeners[i].func.call(_listeners[i].scope, event);
        }
    };
    /**
     *
     */
    this.toString = function ( )
    {
        return "[org.rialoom.events.EventDispatcher]";
    };
};