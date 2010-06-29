/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.net.services");
/**
 * ServiceCall constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.net.services.ServiceCall = function ( jQueryRef, serviceRequest, onResult, onError )
{
    if ( !serviceRequest || !(serviceRequest instanceof org.rialoom.net.services.ServiceRequest) )
    {
        throw new Error("org.rialoom.net.services.ServiceCall constructor | "
            + "serviceRequest param is no instance of org.rialoom.net.services.ServiceCall !");
    }
    /*/
    if ( serviceRequest.url == null )
    {
        throw new Error("org.rialoom.mvcs.ServiceCall constructor | "
            + "serviceRequest.url must not be undefined!");
    }
    if ( serviceRequest.method == null )
    {
        throw new Error("org.rialoom.mvcs.ServiceCall constructor | "
            + "serviceRequest.method must not be undefined!");
    }
    //*/

    // following functions are mixed in by ModelMap
    jQueryRef.ajax({
        type: serviceRequest.getHttpMethod(),
        //contentType: serviceRequest.getContentType()(),
        //contentType: "application/json; charset=utf-8",
        url: serviceRequest.getURL(),
        data: serviceRequest.getData(),
        dataType: serviceRequest.getContentType(),
        success: onResult,
        error: onError
    });
};

/**
 * toString Method
 */
org.rialoom.net.services.ServiceCall.prototype.toString = function ( )
{
    return "[org.rialoom.net.services.ServiceCall]";
};