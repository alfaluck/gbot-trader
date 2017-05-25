(function(){var e,r,s,n,o;e=require("fs"),r="production"!==process.env.NODE_ENV&&e.existsSync("./build/conf-dev.js")?require("./conf-dev"):{tokenTelegram:"",myChatId:"",exchange:"btc-e",btce:{key:"",secret:""},poloniex:{key:"",secret:""},emailReport:"",emailUser:"",emailPass:"",pairFirst:"nvc",pairTwo:"usd",botLog:!1,botTrade:!0,offModulesAutoSettings:process.env.OFF_MODULES_AUTO_SETTINGS,dangerPriceStop:!1,dynamicSettingsTime:!1,dynamicOffsetOrders:!1,trendDefinition:!1,abruptChangeTrend:!1,bbands:!1,depositLimit:{currency:0,percent:100},countOrders:0,quantityOrdersInBlocks:0,offsetOrdersPoints:10,offsetOrdersPercent:0,offsetOrdersExponential:0,offsetFirstOrdersPercent:0,rangeOffset:0,martingaleType:1,sizeOrdersMartingale:0,oneOrdersSell:!1,oneOrdersSellPercent:1,oneOrdersSellOffset:2},(s={versionBot:"0.14.2",botLog:!!process.env.LOG||r.botLog,logDebug:!!process.env.LOG_DEBUG,logTransports:+(process.env.LOG_TRANSPORTS||0),logPath:process.env.LOG_PATH,botTrade:r.botTrade}).telegramOff=!!process.env.TELEGRAM_OFF,s.tokenTelegram=process.env.TELEGRAM_TOKEN||r.tokenTelegram,s.myChatId=+process.env.TELEGRAM_ID||r.myChatId,s.exchange=(process.env.EXCHANGE||r.exchange).toLowerCase(),"btc-e"===s.exchange&&(s.host=process.env.BTCE_HOST||"btc-e.nz",s.key=process.env.BTCE_KEY||r.btce.key,s.secret=process.env.BTCE_SECRET||r.btce.secret),"poloniex"===s.exchange&&(s.poloniexKey=process.env.POLONIEX_KEY||r.poloniex.key,s.poloniexSecret=process.env.POLONIEX_SECRET||r.poloniex.secret,s.poloniexFee=process.env.POLONIEX_FEE||.25,s.poloniexMinOrders=1e-4,s.poloniexDelayApi=process.env.POLONIEX_DELAY_API||100),n=process.env.NAME_COIN||r.pairFirst,o=process.env.NAME_COIN_TWO||r.pairTwo,n="poloniex"===s.exchange?n.toUpperCase():n.toLowerCase(),o="poloniex"===s.exchange?o.toUpperCase():o.toLowerCase(),s.tradeCurrency={name:n,nameTwo:o,pair:[n,o].join("_")},s.timeZone=process.env.TIME_ZONE||"Asia/Yekaterinburg",s.depositLimit={percent:+(process.env.DEPOSIT_LIMIT_PERCENT||r.depositLimit.percent),currency:+(process.env.DEPOSIT_LIMIT_CURRENCY||r.depositLimit.currency)},s.notificationPair=process.env.NOTIFICATION_PAIR||"nmc/usd, ppc/usd, nvc/usd",s.notificationDeviation=+(process.env.NOTIFICATION_DEVIATION_PERCENT||600),s.countOrders=+(process.env.COUNT_ORDERS||r.countOrders),s.quantityOrdersInBlocks=+(process.env.QUANTITY_ORDERS_IN_BLOCKS||r.quantityOrdersInBlocks),s.timeCloseOrders=+(process.env.TIME_CLOSE_ORDERS||5),s.timeCloseOrdersInactivity=+(process.env.TIME_CLOSE_ORDERS_INACTIVITY||3*s.timeCloseOrders),s.timeCloseOrdersExtra=1,s.offsetOrdersPoints=+(process.env.OFFSET_ORDERS_POINTS||r.offsetOrdersPoints),s.offsetOrdersPercent=+(process.env.OFFSET_ORDERS_PERCENT||r.offsetOrdersPercent),s.offsetOrdersExponential=+(process.env.OFFSET_ORDERS_EXPONENTIAL||r.offsetOrdersExponential)/100,s.offsetFirstOrdersPercent=+(process.env.OFFSET_FIRST_ORDERS_PERCENT||r.offsetFirstOrdersPercent),s.rangeOffset=+(process.env.RANGE_OFFSET||r.rangeOffset),s.sizeOrdersMartingale=+(process.env.SIZE_ORDERS_MARTINGALE||r.sizeOrdersMartingale),s.martingaleType=+(process.env.MARTINGALE_TYPE||r.martingaleType),s.timeUpdateAutoSettings=+(process.env.TIME_UPDATE_AUTO_SETTINGS||2),s.ecoCountCycle=20,s.multiplierOrdersExtra=3,s.stepBreakevenPercent=+(process.env.STEP_BREAKEVEN_PERCENT||50),s.restartTraderTime=+(process.env.RESTART_TRADER_TIME||5),s.notificationErrorCount=+(process.env.NOTIFICATION_ERROR_COUNT||0),s.integrityControlOrders=process.env.INTEGRITY_CONTROL_ORDERS||"soft",s.bbands=!(!+process.env.BBANDS&&!r.bbands),s.bbandsDeviation=+(process.env.BBANDS_DEVIATION||20),s.bbandsInterval=+(process.env.BBANDS_INTERVAL||1),s.oneOrdersSell=!(!+process.env.ONE_ORDERS_SELL&&!r.oneOrdersSell),s.oneOrdersSellPercent=+(process.env.ONE_ORDERS_SELL_PERCENT||r.oneOrdersSellPercent),s.oneOrdersSellOffset=+(process.env.ONE_ORDERS_SELL_OFFSET||r.oneOrdersSellOffset),r.offModulesAutoSettings?(s.dangerPriceStop=!1,s.dynamicSettingsTime=!1,s.dynamicOffsetOrders=!1,s.trendDefinition=!1,s.abruptChangeTrend=!1):(s.dangerPriceStop=!(!+process.env.DANGER_PRICE_STOP&&!r.dangerPriceStop),s.dynamicSettingsTime=!(!+process.env.DYNAMIC_SETTINGS_TIME&&!r.dynamicSettingsTime),s.dynamicOffsetOrders=!(!+process.env.DYNAMIC_OFFSET_ORDERS&&!r.dynamicOffsetOrders),s.trendDefinition=!(!+process.env.TREND_DEFINITION&&!r.trendDefinition),s.abruptChangeTrend=!(!+process.env.ABRUPT_CHANGE_TREND&&!r.abruptChangeTrend)),s.email={reportEmail:process.env.EMAIL_BUG_REPORT_ADDRESS||r.emailReport,host:process.env.HOST_SMTP||"smtp.yandex.ru",port:465,secure:!0,auth:{user:process.env.EMAIL_AUTH_USER||r.emailUser,pass:process.env.EMAIL_AUTH_PASS||r.emailPass}},s.emailS=!!s.email.auth.user&&!!s.email.auth.pass&&!!s.email.reportEmail,module.exports=s}).call(this);