const questions = "";
const questions = JSON.parse(`{"WhichmethodisusedbyaPATenabledroutertosendincomingpacketstothecorrectinsidehosts":["ItusesthedestinationTCPorUDPportnumberontheincomingpacket"],"RefertotheexhibitWhichaddressoraddressesrepresenttheinsideglobaladdress":["2091652025"],"FillintheblankDonotuseabbreviations":["PortAddressTranslation"],"AnetworkadministratorisconfiguringastaticNATontheborderrouterforawebserverlocatedintheDMZnetworkThewebserverisconfiguredtolistenonTCPport8080ThewebserverispairedwiththeinternalIPaddressof192168525andtheexternalIPaddressof209165200230ForeasyaccessbyhostsontheInternetexternalusersdonotneedtospecifytheportwhenvisitingthewebserverWhichcommandwillconfigurethestaticNAT":["R1configipnatinsidesourcestatictcp192168525808020916520023080"],"WhatisdefinedbytheipnatpoolcommandwhenconfiguringdynamicNAT":["thepoolofglobaladdress"],"RefertotheexhibitBasedontheoutputthatisshownwhattypeofNAThasbeenimplemented":["PATusinganexternalinterface"],"WhatistheprimarypurposeofNAT":["conserveIPv4addresses"],"WhatisthemajorbenefitofusingNATwithPortAddressTranslation":["ItallowsmanyinternalhoststosharethesamepublicIPv4address"],"Whatisacharacteristicofuniquelocaladdresses":["Theyallowsitestobecombinedwithoutcreatinganyaddressconflicts"],"AnetworkadministratorconfigurestheborderrouterwiththecommandR1configipnatinsidesourcelist4poolcorpWhatisrequiredtobeconfiguredinorderforthisparticularcommandtobefunctional":["aNATpoolnamedcorpthatdefinesthestartingandendingpublicIPaddresses"],"WhichstatementdescribesIPv6ULAs":["Theyarenotroutableacrosstheinternet"],"Whatisthepurposeofportforwarding":["PortforwardingallowsanexternalusertoreachaserviceonaprivateIPv4addressthatislocatedinsideaLAN"],"WhendynamicNATwithoutoverloadingisbeingusedwhathappensifsevenusersattempttoaccessapublicserverontheInternetwhenonlysixaddressesareavailableintheNATpool":["Therequesttotheserverfortheseventhuserfails"],"Anetworkengineerhasconfiguredarouterwiththecommandipnatinsidesourcelist4poolcorpoverloadWhydidtheengineerusetheoverloadoption":["ThecompanyhasmoreprivateIPaddressesthanavailablepublicIPaddresses"],"MatchthestepswiththeactionsthatareinvolvedwhenaninternalhostwithIPaddress1921681010attemptstosendapackettoandexternalserverattheIPaddress209165200254acrossarouterR1thatrunningdynamicNATNotalloptionsareused":["step5","step2","step4","step1","step3"],"WhatisadisadvantageofNAT":["Thereisnoendtoendaddressing"],"RefertotheexhibitWhatisthepurposeofthecommandmarkedwithanarrowshowninthepartialconfigurationoutputofaCiscobroadbandrouter":["defineswhichaddressescanbetranslated"],"WhataretwooftherequiredstepstoconfigurePATChoosetwo":["Defineapoolofglobaladdressestobeusedforoverloadtranslation","Identifytheinsideinterface"],"RefertotheexhibitAtechnicianisconfiguringR2forstaticNATtoallowtheclienttoaccessthewebserverWhatisapossiblereasonthattheclientPCcannotaccessthewebserver":["InterfaceS000shouldbeidentifiedastheoutsideNATinterface"],"WhataretwobenefitsofNATChoosetwo":["ItsavespublicIPaddresses","Itaddsadegreeofprivacyandsecuritytoanetwork"],"WhatisanadvantageofdeployingIPv4NATtechnologyforinternalhostsinanorganization":["providesflexibilityindesigningtheIPv4addressingscheme"],"AtechnicianisrequiredtoconfigureanedgeroutertouseadifferentTCPportnumberforeachsessionwithaserverontheInternetWhattypeofNetworkAddressTranslationNATshouldbeimplemented":["amanytooneaddressmappingbetweenlocalandglobaladdresses"],"ApingfailswhenperformedfromrouterR1todirectlyconnectedrouterR2ThenetworkadministratorthenproceedstoissuetheshowcdpneighborscommandWhywouldthenetworkadministratorissuethiscommandifthepingfailedbetweenthetworouters":["ThenetworkadministratorwantstoverifyLayer2connectivity"],"WhichstatementistrueaboutCDPonaCiscodevice":["CDPcanbedisabledgloballyoronaspecificinterface"],"Whywouldanetworkadministratorissuetheshowcdpneigborscommandonarouter":["todisplaydeviceIDandotherinformationaboutdirectlyconnectedCiscodevices"],"RefertotheexhibitRoutersR1andR2areconnectedviaaseriallinkOnerouterisconfiguredastheNTPmasterandtheotherisanNTPclientWhichtwopiecesofinformationcanbeobtainedfromthepartialoutputoftheshowntpassociationsdetailcommandonR2Choosetwo":["RouterR1isthemasterandR2istheclient","TheIPaddressofR1is19216812"],"WhichtwostatementsaretrueaboutNTPserversinanenterprisenetworkChoosetwo":["NTPserversatstratum1aredirectlyconnectedtoanauthoritativetimesource","NTPserversensureanaccuratetimestamponlogginganddebugginginformation"],"Thecommandntpserver10111isissuedonarouterWhatimpactdoesthiscommandhave":["synchronizesthesystemclockwiththetimesourcewithIPaddress10111"],"RefertotheexhibitWhichtwoconclusionscanbedrawnfromthesyslogmessagethatwasgeneratedbytherouterChoosetwo":["Thismessageisalevel5notificationmessage","Thismessageindicatesthatservicetimestampshavebeenconfigured"],"Whichprotocolorserviceallowsnetworkadministratorstoreceivesystemmessagesthatareprovidedbynetworkdevices":["syslog"],"WhichsyslogmessagetypeisaccessibleonlytoanadministratorandonlyviatheCiscoCLI":["debugging"],"RefertotheexhibitFromwhatlocationhavethesyslogmessagesbeenretrieved":["routerRAM"],"RefertotheexhibitWhatdoesthenumber174626143represent":["thetimewhenthesyslogmessagewasissued"],"WhatisusedasthedefaulteventloggingdestinationforCiscoroutersandswitches":["consoleline"],"Anetworkadministratorhasissuedtheloggingtrap4globalconfigurationmodecommandWhatistheresultofthiscommand":["Thesyslogclientwillsendtothesyslogserveranyeventmessagethathasaseveritylevelof4andlower"],"WhatisthemajorreleasenumberintheIOSimagenamec1900universalk9mzSPA1523Tbin":["15"],"WhatstatementdescribesaCiscoIOSimagewiththe8220universalk9_npedesignationforCiscoISRG2routers":["ItisanIOSversionthatattherequestofsomecountriesremovesanystrongcryptographicfunctionality"],"WhatcodeintheCiscoIOS15imagefilenamec1900universalk9mzSPA1533MbinindicatesthatthefileisdigitallysignedbyCisco":["SPA"],"WhichtwoconditionsshouldthenetworkadministratorverifybeforeattemptingtoupgradeaCiscoIOSimageusingaTFTPserverChoosetwo":["VerifyconnectivitybetweentherouterandTFTPserverusingthepingcommand","VerifythatthereisenoughflashmemoryforthenewCiscoIOSimageusingtheshowflashcommand"],"AnetworkadministratorconfiguresarouterwiththecommandsequenceR1configbootsystemtftpc1900universalk9mzSPA1524M3binR1configbootsystemromWhatistheeffectofthecommandsequence":["TherouterwillloadIOSfromtheTFTPserverIftheimagefailstoloaditwillloadtheIOSimagefromROM"],"AnetworkengineerisupgradingtheCiscoIOSimageona2900seriesISRWhatcommandcouldtheengineerusetoverifythetotalamountofflashmemoryaswellashowmuchflashmemoryiscurrentlyavailable":["showflash0"],"BeginningwiththeCiscoIOSSoftwareRelease150whichlicenseisaprerequisiteforinstallingadditionaltechnologypacklicenses":["IPBase"],"WhichthreesoftwarepackagesareavailableforCiscoIOSRelease150":["DATA","Security","UnifiedCommunications"],"WhenacustomerpurchasesaCiscoIOS150softwarepackagewhatservesasthereceiptforthatcustomerandisusedtoobtainthelicenseaswell":["ProductActivationKey"],"InadditiontoIPBasewhatarethethreetechnologypacksthatareshippedwithintheuniversalCiscoIOSSoftwareRelease15imageChoosethree":["DATA","Security","UnifiedCommunications"],"WhichcommandwouldanetworkengineerusetofindtheuniquedeviceidentifierofaCiscorouter":["showlicenseudi"],"WhichcommandisusedtoconfigureaonetimeacceptanceoftheEULAforallCiscoIOSsoftwarepackagesandfeatures":["licenseacceptenduseragreement"],"RefertotheexhibitMatchthecomponentsoftheIOSimagenametotheirdescriptionNotalloptionsareused":["universalk9","1","mz","c1900","M4","4","15"]}` );


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "get_questions")
      sendResponse(questions);   
  }
);