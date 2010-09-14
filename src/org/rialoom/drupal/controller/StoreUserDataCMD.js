/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.controller");
/**
 * StoreUserDataCMD constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.controller.StoreUserDataCMD = function ( )
{
    org.rialoom.mvcs.AbstractCommand.call(this);
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.controller.StoreUserDataCMD, org.rialoom.mvcs.AbstractCommand);

/**
 * Stores user data in UserData model
 */
org.rialoom.drupal.controller.StoreUserDataCMD.prototype.execute = function ( event )
{
    org.rialoom.utils.Debug.log("org.rialoom.drupal.controller.StoreUserDataCMD .execute() invoked | "+
            "event type: " + event.getType() +
            " event target: " + event.getTarget());
    var user = this.getModelMap().getModel(org.rialoom.drupal.models.UserData);
    for ( var prop in event.data )
    {
        org.rialoom.utils.Debug.log(prop + ": " + event.data[prop]);
    }
    user.setSessionId(event.data["#data"].sessid);
    //TODO: store all received user data in UserData model
    // event.data[#data].user
    //TODO: Create DrupalServiceDTO { #data: { sessid:String, user:Object }, #error:Boolean }
};

/**
 * toString Method
 */
org.rialoom.drupal.controller.StoreUserDataCMD.prototype.toString = function ( )
{
    return "[test.controller.StoreUserDataCMD]";
};



