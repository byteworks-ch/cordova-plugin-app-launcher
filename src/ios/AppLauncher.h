#import <Cordova/CDV.h>

@interface AppLauncher : CDVPlugin

- (void)checkUrl:(CDVInvokedUrlCommand*)command;
- (void)openUrl:(CDVInvokedUrlCommand*)command;

@end