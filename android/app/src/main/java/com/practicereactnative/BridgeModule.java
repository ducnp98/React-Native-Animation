package com.practicereactnative;

import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.os.Build;
import android.util.Log;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class BridgeModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactApplicationContext;

    BridgeModule(ReactApplicationContext context) {
        super(context);
        reactApplicationContext = context;
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void changeVoiceToAlien(String file) {
        WritableMap params = Arguments.createMap();
        params.putString("id", "android");
        params.putString("name", "Change voice to alien from the native layer");
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("SendDataBack", params);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void changeVoiceToChild(String file) {
        WritableMap params = Arguments.createMap();
        params.putString("id", "android");
        params.putString("name", "Change voice to child from the native layer");
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("SendDataBack", params);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void speedUpVoice(String file) {
        WritableMap params = Arguments.createMap();
        params.putString("id", "android");
        params.putString("name", "Speed up voice alien from the native layer");
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("SendDataBack", params);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void slowDownVoice(String file) {
        WritableMap params = Arguments.createMap();
        params.putString("id", "android");
        params.putString("name", "Slow down void from the native layer");
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("SendDataBack", params);
    }

    @Override
    public String getName() {
        return "BridgeModule";
    }

    @ReactMethod
    public void addListener(String eventName) {

    }

    @ReactMethod
    public void removeListeners(Integer count) {

    }
}