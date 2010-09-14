/*
* Copyright (c) 2010 Kai Zimmer [http://www.kaizimmer.com]
*
* Permission is hereby granted to use, modify, and distribute this file
* in accordance with the terms of the license agreement accompanying it.
*/
org.rialoom.utils.ClassUtils.createPackage("org.rialoom.drupal.services.requests");
/**
 * GetNode constructor
 * @author k.zimmer aka engimono
 */
org.rialoom.drupal.services.requests.GetNode = function ( url, sessId, nodeId, nFields )
{
    org.rialoom.net.services.ServiceRequest.call(this, url, '"node.get"');
    this.contentType = "json";
    this.data =
    {
        q: "services/json",
        method: this.getMethodName(),
        sessid: '"' + sessId + '"',
        nid: nodeId
    };
    if ( nFields )
    {
        var fieldsParam = '['
        for ( var i = 0; i < nFields.length; i++ )
        {
            fieldsParam += '"' + nFields[i] + '"';
            if ( i < nFields.length - 1 ) fieldsParam += ",";
        }
        fieldsParam += "]";
        this.data.fields = fieldsParam;
    }
};

org.rialoom.utils.ClassUtils.inherits(org.rialoom.drupal.services.requests.GetNode, org.rialoom.net.services.ServiceRequest);

/**
 * toString Method
 */
org.rialoom.drupal.services.requests.GetNode.prototype.toString = function ( )
{
    return "[org.rialoom.drupal.services.requests.GetNode]";
};



