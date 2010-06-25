/**
 * AbstractModel constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.mvcs ) org.rialoom.mvcs = {};
if ( !org.rialoom.mvcs.AbstractModel )
org.rialoom.mvcs.AbstractModel = function ( )
{
    // following functions are mixed in by ModelMap
    this.dispatch = function ( event ) {};
    this.getEventDispatcher = function () {};
    this.getModelMap = function () {};
};

/**
 * toString Method
 */
org.rialoom.mvcs.AbstractModel.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.AbstractModel]";
};