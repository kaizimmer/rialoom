/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.net.services");
/**
 * ServiceRequest constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.net.services.ServiceRequest = function ( url, methodName )
{
    this.url = url;
    this.method = methodName;
    this.httpMethod = "post";
    this.contentType = "text/html; charset=UTF-8";
    this.data = null;
};

/**
 *  Returns the gateway url
 */
org.rialoom.net.services.ServiceRequest.prototype.getURL = function ( )
{
    return this.url;
};

/**
 *  Sets the gateway url
 */
org.rialoom.net.services.ServiceRequest.prototype.setURL = function ( url )
{
    this.url = url;
};

/**
 *  Returns the service method
 */
org.rialoom.net.services.ServiceRequest.prototype.getMethodName = function ( )
{
    return this.method;
};

/**
 *  Sets the service method
 */
org.rialoom.net.services.ServiceRequest.prototype.setMethodName = function ( method )
{
    this.method = method;
};

/**
 *  Returns the http method
 */
org.rialoom.net.services.ServiceRequest.prototype.getHttpMethod = function ( )
{
    return this.httpMethod;
};

/**
 *  Sets the http method
 */
org.rialoom.net.services.ServiceRequest.prototype.setHttpMethod = function ( httpMethod )
{
    this.httpMethod = httpMethod;
};

/**
 * Sets the MIME content type of the content in the the data property.
 * Defaults to application/x-www-form-urlencoded
 */
org.rialoom.net.services.ServiceRequest.prototype.setContentType = function ( contentType )
{
    this.contentType = contentType;
};

/**
 * Returns the MIME content type of the content in the the data property.
 */
org.rialoom.net.services.ServiceRequest.prototype.getContentType = function ( )
{
    return this.contentType;
};

/**
 * Sets the object containing data to be transmitted with the ServiceRequest.
 */
org.rialoom.net.services.ServiceRequest.prototype.setData = function ( data )
{
    this.data = data;
};

/**
 * Returns the object containing data to be transmitted with the ServiceRequest.
 */
org.rialoom.net.services.ServiceRequest.prototype.getData = function ( )
{
    return this.data;
};

/**
 * toString Method
 */
org.rialoom.net.services.ServiceRequest.prototype.toString = function ( )
{
    return "[org.rialoom.mvcs.ServiceRequest | url: " + this.url
            + " | httpMethod: " + this.httpMethod
            + " | contentType: " + this.contentType
            + " data: " + this.data + " ]";
};