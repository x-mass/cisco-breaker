console.log('Cisko solver init')
const res = JSON.parse(`{"WhichmethodisusedbyaPATenabledroutertosendincomingpacketstothecorrectinsidehosts":["ItusesthedestinationTCPorUDPportnumberontheincomingpacket"],"RefertotheexhibitWhichaddressoraddressesrepresenttheinsideglobaladdress":["2091652025"],"FillintheblankDonotuseabbreviations":["PortAddressTranslation"],"AnetworkadministratorisconfiguringastaticNATontheborderrouterforawebserverlocatedintheDMZnetworkThewebserverisconfiguredtolistenonTCPport8080ThewebserverispairedwiththeinternalIPaddressof192168525andtheexternalIPaddressof209165200230ForeasyaccessbyhostsontheInternetexternalusersdonotneedtospecifytheportwhenvisitingthewebserverWhichcommandwillconfigurethestaticNAT":["R1configipnatinsidesourcestatictcp192168525808020916520023080"],"WhatisdefinedbytheipnatpoolcommandwhenconfiguringdynamicNAT":["thepoolofglobaladdress"],"RefertotheexhibitBasedontheoutputthatisshownwhattypeofNAThasbeenimplemented":["PATusinganexternalinterface"],"WhatistheprimarypurposeofNAT":["conserveIPv4addresses"],"WhatisthemajorbenefitofusingNATwithPortAddressTranslation":["ItallowsmanyinternalhoststosharethesamepublicIPv4address"],"Whatisacharacteristicofuniquelocaladdresses":["Theyallowsitestobecombinedwithoutcreatinganyaddressconflicts"],"AnetworkadministratorconfigurestheborderrouterwiththecommandR1configipnatinsidesourcelist4poolcorpWhatisrequiredtobeconfiguredinorderforthisparticularcommandtobefunctional":["aNATpoolnamedcorpthatdefinesthestartingandendingpublicIPaddresses"],"WhichstatementdescribesIPv6ULAs":["Theyarenotroutableacrosstheinternet"],"Whatisthepurposeofportforwarding":["PortforwardingallowsanexternalusertoreachaserviceonaprivateIPv4addressthatislocatedinsideaLAN"],"WhendynamicNATwithoutoverloadingisbeingusedwhathappensifsevenusersattempttoaccessapublicserverontheInternetwhenonlysixaddressesareavailableintheNATpool":["Therequesttotheserverfortheseventhuserfails"],"Anetworkengineerhasconfiguredarouterwiththecommandipnatinsidesourcelist4poolcorpoverloadWhydidtheengineerusetheoverloadoption":["ThecompanyhasmoreprivateIPaddressesthanavailablepublicIPaddresses"],"MatchthestepswiththeactionsthatareinvolvedwhenaninternalhostwithIPaddress1921681010attemptstosendapackettoandexternalserverattheIPaddress209165200254acrossarouterR1thatrunningdynamicNATNotalloptionsareused":["step5","step2","step4","step1","step3"],"WhatisadisadvantageofNAT":["Thereisnoendtoendaddressing"],"RefertotheexhibitWhatisthepurposeofthecommandmarkedwithanarrowshowninthepartialconfigurationoutputofaCiscobroadbandrouter":["defineswhichaddressescanbetranslated"],"WhataretwooftherequiredstepstoconfigurePATChoosetwo":["Defineapoolofglobaladdressestobeusedforoverloadtranslation","Identifytheinsideinterface"],"RefertotheexhibitAtechnicianisconfiguringR2forstaticNATtoallowtheclienttoaccessthewebserverWhatisapossiblereasonthattheclientPCcannotaccessthewebserver":["InterfaceS000shouldbeidentifiedastheoutsideNATinterface"],"WhataretwobenefitsofNATChoosetwo":["ItsavespublicIPaddresses","Itaddsadegreeofprivacyandsecuritytoanetwork"],"WhatisanadvantageofdeployingIPv4NATtechnologyforinternalhostsinanorganization":["providesflexibilityindesigningtheIPv4addressingscheme"],"AtechnicianisrequiredtoconfigureanedgeroutertouseadifferentTCPportnumberforeachsessionwithaserverontheInternetWhattypeofNetworkAddressTranslationNATshouldbeimplemented":["amanytooneaddressmappingbetweenlocalandglobaladdresses"],"ApingfailswhenperformedfromrouterR1todirectlyconnectedrouterR2ThenetworkadministratorthenproceedstoissuetheshowcdpneighborscommandWhywouldthenetworkadministratorissuethiscommandifthepingfailedbetweenthetworouters":["ThenetworkadministratorwantstoverifyLayer2connectivity"],"WhichstatementistrueaboutCDPonaCiscodevice":["CDPcanbedisabledgloballyoronaspecificinterface"],"Whywouldanetworkadministratorissuetheshowcdpneigborscommandonarouter":["todisplaydeviceIDandotherinformationaboutdirectlyconnectedCiscodevices"],"RefertotheexhibitRoutersR1andR2areconnectedviaaseriallinkOnerouterisconfiguredastheNTPmasterandtheotherisanNTPclientWhichtwopiecesofinformationcanbeobtainedfromthepartialoutputoftheshowntpassociationsdetailcommandonR2Choosetwo":["RouterR1isthemasterandR2istheclient","TheIPaddressofR1is19216812"],"WhichtwostatementsaretrueaboutNTPserversinanenterprisenetworkChoosetwo":["NTPserversatstratum1aredirectlyconnectedtoanauthoritativetimesource","NTPserversensureanaccuratetimestamponlogginganddebugginginformation"],"Thecommandntpserver10111isissuedonarouterWhatimpactdoesthiscommandhave":["synchronizesthesystemclockwiththetimesourcewithIPaddress10111"],"RefertotheexhibitWhichtwoconclusionscanbedrawnfromthesyslogmessagethatwasgeneratedbytherouterChoosetwo":["Thismessageisalevel5notificationmessage","Thismessageindicatesthatservicetimestampshavebeenconfigured"],"Whichprotocolorserviceallowsnetworkadministratorstoreceivesystemmessagesthatareprovidedbynetworkdevices":["syslog"],"WhichsyslogmessagetypeisaccessibleonlytoanadministratorandonlyviatheCiscoCLI":["debugging"],"RefertotheexhibitFromwhatlocationhavethesyslogmessagesbeenretrieved":["routerRAM"],"RefertotheexhibitWhatdoesthenumber174626143represent":["thetimewhenthesyslogmessagewasissued"],"WhatisusedasthedefaulteventloggingdestinationforCiscoroutersandswitches":["consoleline"],"Anetworkadministratorhasissuedtheloggingtrap4globalconfigurationmodecommandWhatistheresultofthiscommand":["Thesyslogclientwillsendtothesyslogserveranyeventmessagethathasaseveritylevelof4andlower"],"WhatisthemajorreleasenumberintheIOSimagenamec1900universalk9mzSPA1523Tbin":["15"],"WhatstatementdescribesaCiscoIOSimagewiththe8220universalk9_npedesignationforCiscoISRG2routers":["ItisanIOSversionthatattherequestofsomecountriesremovesanystrongcryptographicfunctionality"],"WhatcodeintheCiscoIOS15imagefilenamec1900universalk9mzSPA1533MbinindicatesthatthefileisdigitallysignedbyCisco":["SPA"],"WhichtwoconditionsshouldthenetworkadministratorverifybeforeattemptingtoupgradeaCiscoIOSimageusingaTFTPserverChoosetwo":["VerifyconnectivitybetweentherouterandTFTPserverusingthepingcommand","VerifythatthereisenoughflashmemoryforthenewCiscoIOSimageusingtheshowflashcommand"],"AnetworkadministratorconfiguresarouterwiththecommandsequenceR1configbootsystemtftpc1900universalk9mzSPA1524M3binR1configbootsystemromWhatistheeffectofthecommandsequence":["TherouterwillloadIOSfromtheTFTPserverIftheimagefailstoloaditwillloadtheIOSimagefromROM"],"AnetworkengineerisupgradingtheCiscoIOSimageona2900seriesISRWhatcommandcouldtheengineerusetoverifythetotalamountofflashmemoryaswellashowmuchflashmemoryiscurrentlyavailable":["showflash0"],"BeginningwiththeCiscoIOSSoftwareRelease150whichlicenseisaprerequisiteforinstallingadditionaltechnologypacklicenses":["IPBase"],"WhichthreesoftwarepackagesareavailableforCiscoIOSRelease150":["DATA","Security","UnifiedCommunications"],"WhenacustomerpurchasesaCiscoIOS150softwarepackagewhatservesasthereceiptforthatcustomerandisusedtoobtainthelicenseaswell":["ProductActivationKey"],"InadditiontoIPBasewhatarethethreetechnologypacksthatareshippedwithintheuniversalCiscoIOSSoftwareRelease15imageChoosethree":["DATA","Security","UnifiedCommunications"],"WhichcommandwouldanetworkengineerusetofindtheuniquedeviceidentifierofaCiscorouter":["showlicenseudi"],"WhichcommandisusedtoconfigureaonetimeacceptanceoftheEULAforallCiscoIOSsoftwarepackagesandfeatures":["licenseacceptenduseragreement"],"RefertotheexhibitMatchthecomponentsoftheIOSimagenametotheirdescriptionNotalloptionsareused":["universalk9","1","mz","c1900","M4","4","15"]}` );
console.log(res)
document.addEventListener('keyup', (e) => {
  if (e.code === 'KeyS') {
    console.log('button pressed')
    let qId = document.querySelector("#questionbarcontainer").querySelector('li.current').getAttribute('data-ident');
    // let qs = document.querySelector(`.question[data-ident='${qId}'] .item-long-description`).innerText.split(' ').slice(1).join(' ');
    let qs = document.querySelector(`.question[data-ident='${qId}'] .mattext`).innerText.replace(/[^\w]|[\r\n]/gi, '');
    if (res[qs] && res[qs].length) {
      console.log('did it');
      for (let ans of res[qs])
        for (let i = 0; i < document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children.length; ++i)
          if (ans == document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].innerText.replace(/[^\w]|[\r\n]/gi, ''))
            document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].querySelector('input').checked=true
    } 
    else if (typeof res[qs] == 'undefined') {
      console.log('trying to find');
      let values = Object.values(res);
      for (let i = 0; i < document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children.length; i++) {
        for (let j = 0; j < values.length; j++) {
          for (let k = 0; k < values[j].length; k++) {
            let a = values[j][k];
            if (qs == a)
              document.querySelector(`.question[data-ident='${qId}'] .coreContent`).children[i].querySelector('input').checked=true
          }
          
        }
      }
    }
  }
});