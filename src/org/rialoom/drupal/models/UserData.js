/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.models");
/**
 * UserData constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.models.UserData = function ( )
{
    org.rialoom.mvcs.Actor.call(this);
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.models.UserData, org.rialoom.mvcs.Actor);
/**
 * Setup prototype chain
 */
org.rialoom.drupal.models.UserData.prototype = new org.rialoom.mvcs.Actor();

// clean prototype from unnecessary properties added via super constructor
delete org.rialoom.drupal.models.UserData.prototype.dispatch;
delete org.rialoom.drupal.models.UserData.prototype.getEventDispatcher;
delete org.rialoom.drupal.models.UserData.prototype.getModelMap;

// Reasign the prototype object to the correct constructor
org.rialoom.drupal.models.UserData.prototype.constructor = org.rialoom.drupal.models.UserData;

/**
 * Returns user's session id
 */
org.rialoom.drupal.models.UserData.prototype.getSessionId = function ( )
{
    return this.id;
};

/**
 * Set's user's session id
 */
org.rialoom.drupal.models.UserData.prototype.setSessionId = function ( id )
{
    this.id = id;
    if ( console ) console.log("org.rialoom.drupal.models.UserData .setSessionId() | id: " + id);
    //TODO dispatch event ON_SESSION_ID_SET
};

/**
 * Returns user name
 */
org.rialoom.drupal.models.UserData.prototype.getName = function ( )
{
    return this.name;
};

/**
 * Set's user name
 */
org.rialoom.drupal.models.UserData.prototype.setName = function ( name )
{
    this.name = name;
};

/**
 * toString Method
 */
org.rialoom.drupal.models.UserData.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.models.UserData]";
};



/*/

user (Object):
uid (String): 1
sort (String): 0
timezone_name (String): Europe/Berlin
data (String): a:0:{}
mode (String): 0
timestamp (String): 1276715243
timezone (String): 7200
created (String): 1273571098
name (String): admin
login (String): 1276701669
signature_format (String): 0
signature (String):
mail (String): thomas.schuster@bartenbach.de
sid (String): bpt3esjbt22jl8c9ieidj7kbt0
cache (String): 0
status (String): 1
theme (String):
init (String): thomas.schuster@bartenbach.de
hostname (String): 127.0.0.1
access (String): 1276715148
threshold (String): 0
pass (String): 315a3b56d4a31831f6280f9cec49faaf
picture (String):
session (String):
roles (Object):
2 (String): authenticated user

language (String):

//*/