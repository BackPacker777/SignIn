/*  AUTHOR: hbates@northmen.org
 *  VERSION: 1.11
 *  CREATED: 11.25.2015
 *  PURPOSE: Register Northmen!
 */

"use strict";

const MailData = require('./MailData');
const fs = require('fs');

class ProcessData {
    constructor(formData) {
        let filePath = 'public/data/tempFile.csv';
        ProcessData.processFormData(formData, filePath);
        new MailData(filePath);
        fs.unlink(filePath);
    }

    static processFormData(formData, filePath) {
        let data = [];
        for (let key in formData) {
            let key2 = '[01]' + key;
            let line = key2 + ',' + formData[key];
            data.push(line);
        }
        fs.writeFile(filePath, JSON.stringify(data), function(err) {
            if (err) {
                throw err;
            } else {
                //console.log('File written!');
            }
        });
    }
}

module.exports = ProcessData;