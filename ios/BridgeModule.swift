//
//  BridgeModule.swift
//  PracticeReactNative
//
//  Created by Đức Nguyễn Phước on 14/05/2024.
//

import Foundation
import React

@objc(BridgeModule)
class BridgeModule: RCTEventEmitter {
  
  static var shared: BridgeModule?
  
  override init() {
    super.init()
    BridgeModule.shared = self
  }
  
  override func supportedEvents() -> [String]! {
    return ["SendDataBack"]
  }
  
  @objc
  func changeVoiceToAlien() {
    self.sendEvent(withName: "SendDataBack", body: ["id": "IOS", "name": "Change voice to alien from the native layer"])
     }
  
  @objc
  func changeVoiceToChild() {
    self.sendEvent(withName: "SendDataBack", body: ["id": "IOS", "name": "Change voice to child from the native layer"])
  }
  
  @objc
  func speedUpVoice() {
    self.sendEvent(withName: "SendDataBack", body: ["id": "IOS", "name": "Speed up voice from the native layer"])
  }
  
  @objc
  func slowDownVoice() {
    self.sendEvent(withName: "SendDataBack", body: ["id": "IOS", "name": "Slow down voice from the native layer"])
  }

  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
