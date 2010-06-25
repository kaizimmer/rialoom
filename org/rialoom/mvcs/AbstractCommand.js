/**
 * AbstractCommand constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.mvcs ) org.rialoom.mvcs = {};
if ( !org.rialoom.mvcs.AbstractCommand )
org.rialoom.mvcs.AbstractCommand = function ( )
{
    // following functions are mixed in by CommandMap
    this.dispatch = function ( event ) {};
    this.getEventDispatcher = function () {};
    this.getCommandMap = function () {};
    this.getModelMap = function () {};
};

/**
 * execute Method
 */
org.rialoom.mvcs.AbstractCommand.prototype.execute = function ( event )
{
    throw new Error("org.rialoom.mvcs.AbstractCommand .execute() must be overriden");
};

/**
 * toString Method
 */
org.rialoom.mvcs.AbstractCommand.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractCommand]";
};