/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.services.requests");
/**
 * SystemConnect constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.services.requests.SystemConnect = function ( url )
{
    org.rialoom.net.services.ServiceRequest.call(this, url, '"system.connect"');
    this.contentType = "json";
    this.data =
    {
        q: "services/json",
        method: this.getMethodName()
    };
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.services.requests.SystemConnect, org.rialoom.net.services.ServiceRequest);


/**
 * toString Method
 */
org.rialoom.drupal.services.requests.SystemConnect.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.services.requests.SystemConnect]";
};



