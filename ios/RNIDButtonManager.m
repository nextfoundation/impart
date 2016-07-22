//
//  RNIDButtonManager.m
//  Impart
//
//  Created by Lachlan Kermode on 7/22/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNIDButtonManager.h"
#import "RNIDButton.h"
#import "RCTUIManager.h"

@implementation RNIDButtonManager

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RNIDButton alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

RCT_CUSTOM_VIEW_PROPERTY(clientID, NSString, IDButton)
{
  [view setClientID:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(clientSecret, NSString, IDButton)
{
  [view setClientSecret:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(redirectURL, NSString, IDButton)
{
  [view setRedirectURL:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(applicationName, NSString, IDButton)
{
  [view setApplicationName:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(scopes, NSString, IDButton)
{
  [view setScopes:(json ? [RCTConvert NSArray:json] : @[])];
}


RCT_EXPORT_METHOD(initialize:(nonnull NSNumber *)reactTag)
{
  [self.bridge.uiManager addUIBlock:
   ^(__unused RCTUIManager *uiManager, NSDictionary *viewRegistry){
     RNIDButton *idButton = viewRegistry[reactTag];
     
//     NSLog(@"id: %@, secret: %@, redirect: %@, name: %@", idButton.clientID, idButton.clientSecret, idButton.redirectURL, idButton.applicationName);
     
     if (![idButton.scopes isKindOfClass:[NSArray class]]) {
       BOOL legit = (idButton.scopes.count > 0);
       for (NSString *value in idButton.scopes) {
         if ([value class] != [NSString class]) legit = NO;
       }
       if (!legit) {
         RCTLogError(@"react-native-identity-kit: The 'scopes' prop passed into IDButton must be an array of strings.");
       }
     }
     
     if ([idButton isKindOfClass:[RNIDButton class]]
         && (idButton.clientID.length > 0)
         && (idButton.clientSecret.length > 0)
         && (idButton.redirectURL.length > 0)
         && (idButton.applicationName.length > 0)) {
       [idButton configureClientId:idButton.clientID
                      ClientSecret:idButton.clientSecret
                       RedirectURL:idButton.redirectURL
                   ApplicationName:idButton.applicationName];
     } else {
       RCTLogError(@"react-native-identity-kit: Cannot render IDButton. You need to pass clientID, clientSecret, redirectURL and applicationName to the IDButton component.");
     }
   }];
}


@end
