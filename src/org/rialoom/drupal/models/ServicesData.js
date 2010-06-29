/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.models");
/**
 * ServicesData constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.models.ServicesData = function ( )
{
    org.rialoom.mvcs.Actor.call(this);
    this.gatewayURL = "/services/json";
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.models.ServicesData, org.rialoom.mvcs.Actor);

/**
 * Returns service gateway url
 */
org.rialoom.drupal.models.ServicesData.prototype.getServicesGatewayURL = function ( )
{
    return this.gatewayURL;
};

/**
 * Sets service gateway url
 */
org.rialoom.drupal.models.ServicesData.prototype.setServicesGatewayURL = function ( url )
{
    this.gatewayURL = url;
};

/**
 * toString Method
 */
org.rialoom.drupal.models.ServicesData.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.models.ServicesData | gatewayURL: " + this.gatewayURL + " ]";
};