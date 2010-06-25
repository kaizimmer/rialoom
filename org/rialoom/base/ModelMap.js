/**
 * ModelMap constructor
 * @author k.zimmer aka engimono
 */
var org;
if ( !org ) org = {};
if ( !org.rialoom ) org.rialoom = {};
if ( !org.rialoom.base ) org.rialoom.base = {};
if ( !org.rialoom.base.ModelMap )
org.rialoom.base.ModelMap = function ( eventDispatcher )
{
    var _this = this;
    var _dispatcher = eventDispatcher;
    var _models = [];
    /**
     *  Creates an instance of the passed modelClass(:String) and adds it to
     *  the models list
     *  Returns created model instance
     */
    this.addModel = function ( modelClass )
    {
        if ( modelClass == null )
            throw new Error ("org.rialoom.base.ModelMap.addModel | passed bad modelClass param: " + modelClass);
        var m = new modelClass();
        m.getEventDispatcher = function ( ) {return _dispatcher};
        m.dispatch = function ( event )
        {
            _dispatcher.dispatchEvent(event)
        };
        m.getModelMap = function ( ) {return _this};
        _models.push({classRef: modelClass, instance: m});
        return m;
    };
    /**
     *  Returns instance of the passed modelClass(:String)
     *  Returns null if corresponding model does not exist.
     */
     this.getModel = function ( modelClass )
     {
         for ( var i = 0; i < _models.length; i++ )
         {
             if ( _models[i].classRef == modelClass )
             {
                 return _models[i].instance;
             }
         }
         return null;
     };
};

/**
 * toString Method
 */
org.rialoom.base.ModelMap.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.ModelMap]";
};