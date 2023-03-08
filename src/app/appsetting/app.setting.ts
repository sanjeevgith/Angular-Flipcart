declare var require: any;
export class AppSettings {

    public static apitime = require('../../assets/baseURL/appconfig.json').baseURL;

    public static findorderbyuserid = AppSettings.apitime + "/orders/findorder/";
    
}