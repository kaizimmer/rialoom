/**
 * AbstractContext constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.mvcs ) org.rialoom.mvcs = {};
if ( !org.rialoom.mvcs.AbstractContext )
org.rialoom.mvcs.AbstractContext = function ( )
{
    var _eventDispatcher = new org.rialoom.events.EventDispatcher();
    var _modelMap = new org.rialoom.base.ModelMap(_eventDispatcher);
    var _commandMap = new org.rialoom.base.CommandMap(_eventDispatcher, _modelMap);
    /**
     * Returns CommandMap instance
     */
    this.getCommandMap = function ( )
    {
        return _commandMap;
    };
    /**
     * Returns ModelMap instance
     */
    this.getModelMap = function ( )
    {
        return _modelMap;
    };
    this.getEventDispatcher = function ( )
    {
        return _eventDispatcher;
    };
    this.startup();
};

org.rialoom.mvcs.AbstractContext.prototype.startup = function ( )
{
    var d = this.getEventDispatcher();
    var e =
        new org.rialoom.base.ContextEvent(
            org.rialoom.base.ContextEvent.STARTUP_COMPLETE, this);
    d.dispatchEvent(e);
};

org.rialoom.mvcs.AbstractContext.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractContext]";
};