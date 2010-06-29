/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.controller");
/**
 * SystemConnectCMD constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.controller.SystemConnectCMD = function ( )
{
    org.rialoom.mvcs.AbstractCommand.call(this);
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.controller.SystemConnectCMD, org.rialoom.mvcs.AbstractCommand);


/**
 * Arbitrary method sample
 */
org.rialoom.drupal.controller.SystemConnectCMD.prototype.execute = function ( event )
{
    /*/
    if ( console ) console.log("org.rialoom.drupal.controller.SystemConnectCMD .execute() invoked | " +
            "event type: " + event.getType() +
            " event target: " + event.getTarget());
    //*/
    var _this = this;
    var servicesData = this.getModelMap().getModel(org.rialoom.drupal.models.ServicesData);
    var gateway = servicesData.getServicesGatewayURL();
    var serviceRequest = new org.rialoom.drupal.services.request.SystemConnect(gateway);
    if ( !jQuery )
    {
        if ( console ) console.log("TO USE THE RIALOOM FRAMEWORK YOU NEED TO EMBED THE JQuery Lib first!!!")
    }
    new org.rialoom.net.services.ServiceCall(jQuery, serviceRequest, onResult, onError);

    function onResult ( res )
    {
        if ( console ) console.log("org.rialoom.drupal.controller.SystemConnectCMD.execute | onResult | res: " + res);
        //var e = new humax_10002.stage.events.SystemEvent(humax_10002.stage.events.SystemEvent.ON_CONNECTED, _this, res);
        var e = new org.rialoom.drupal.events.SystemEvent(org.rialoom.drupal.events.SystemEvent.ON_CONNECTED, _this, res);
        _this.dispatch(e);
    }

    function onError ( res )
    {
        if ( console ) console.log("org.rialoom.drupal.controller.SystemConnectCMD.execute | onError | res: " + res);
    }
};

/**
 * toString Method
 */
org.rialoom.drupal.controller.SystemConnectCMD.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.controller.SystemConnectCMD]";
};



