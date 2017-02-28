package com.bidchat.SoftNavigationCheck;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.view.ViewConfiguration;


/**
 * This class echoes a string called from JavaScript.
 */
public class SoftNavigationCheck extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("isSoftNavigationAvailable")) {
            this.isSoftNavigationAvailable(callbackContext);
            return true;
        }
        return false;
    }

    private void isSoftNavigationAvailable(CallbackContext callbackContext) {
        boolean hasSoftKey = ViewConfiguration.get(this.cordova.getActivity()).hasPermanentMenuKey();
        if (hasSoftKey) {
            callbackContext.success();
        } else {
            callbackContext.error("error");
        }
    }
}
