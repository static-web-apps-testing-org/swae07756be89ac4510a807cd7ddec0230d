// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
// SIG // Begin signature block
// SIG // MIIFwwYJKoZIhvcNAQcCoIIFtDCCBbACAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 7gRGNOgyMThF3YUQQbw5guDN82sBgjlFygnqEChJBaag
// SIG // ggM6MIIDNjCCAh6gAwIBAgIQbkFYlRmcNrtPF7+sTlHY
// SIG // qDANBgkqhkiG9w0BAQsFADAkMSIwIAYDVQQDDBlUZXN0
// SIG // QXp1cmVFbmdCdWlsZENvZGVTaWduMB4XDTE5MTIxNjIz
// SIG // NTQwOVoXDTMwMDcxNzAwMDQwOVowJDEiMCAGA1UEAwwZ
// SIG // VGVzdEF6dXJlRW5nQnVpbGRDb2RlU2lnbjCCASIwDQYJ
// SIG // KoZIhvcNAQEBBQADggEPADCCAQoCggEBALdzomGcnPIf
// SIG // VrbQmes/YzjpYQizlnMPPcHRGLyQ36wob3hZtNcytONq
// SIG // LuTTmKihBw3TdvanCSA66hLWpyrzPSWY2orxRoxAOtxx
// SIG // rgC218L5jfwZbdpRYjNEIkkPEcnKeK2qcutBcKPWnFRI
// SIG // LCpiJe1mfW3RRmi4XWqdqMr6RKW04RzcmzJ1iEP/d4EI
// SIG // 8Bq9KBF+oWiGtyOMOQp6Mo+jDk+03mi+lpvbfWXrSH3o
// SIG // KYhIwfzc0pvMXYZmkdfEJXfb0Uc4dGUpulYegxLuc8Ox
// SIG // k7NfZnZ24ZkrKI8sY1imT/meC/ULzY8ZULKHSq6Nhv5n
// SIG // Cv3I/aHmkGg3wTPuZ/P6RAUCAwEAAaNkMGIwDgYDVR0P
// SIG // AQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMBwG
// SIG // A1UdEQQVMBOCEXd3dy5taWNyb3NvZnQuY29tMB0GA1Ud
// SIG // DgQWBBQad2ypaosFSN3WN49F/B1fxJLrvzANBgkqhkiG
// SIG // 9w0BAQsFAAOCAQEAmSwp158iRcD7f/q+P5GMaqoK2i7r
// SIG // fmiJWxZqZ7kPlpWx4V7mkwKWqrfhIXxUaFmjOZL/Dact
// SIG // jdFQ1cIPXF8QCPmPc2yIAkFwMAVgBQmOdOs42pRFRVug
// SIG // SrXyPAfx59DPu33mV6qj8b30+GX2KLYMto4A6O7A7eT4
// SIG // YavNvoAuUdvlTKZ241BrqK/3ykKyJ7VfNKhLgnJrk/8e
// SIG // t0Wu8N9yp6wZcCO/LBuw3xuFAciHDnHFNHoW6cgLzpkd
// SIG // 0nbAcarkmHPmkpex1VxoTfUT2DTfQABGX0TuQpxX/PeN
// SIG // ry+iU/rlb+KO5Xk6JEokSP/KqBKFPhfO4oFpJ91QcvGb
// SIG // x+aOpTGCAeEwggHdAgEBMDgwJDEiMCAGA1UEAwwZVGVz
// SIG // dEF6dXJlRW5nQnVpbGRDb2RlU2lnbgIQbkFYlRmcNrtP
// SIG // F7+sTlHYqDANBglghkgBZQMEAgEFAKB8MBAGCisGAQQB
// SIG // gjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MC8GCSqGSIb3DQEJBDEiBCAaDLcipPVzFheZ/xrOU8Iu
// SIG // fuZV/PVN5JmNz0efxfmCazANBgkqhkiG9w0BAQEFAASC
// SIG // AQBmnT9stDT0adfB2S372Au90yijNpKzr/uM2lRiIco5
// SIG // nRayYt24wDHqTfKACsgsC/HSu/vB2Gh2JsQuIHfgplH3
// SIG // nTftRVkRV9gChLP3EQBdha1aFe767CCSLvetwu3Kv/JS
// SIG // MTQq+NQOjREM7Qe4BT6Ormwd7H7/3xSdXu1PsimnLgh5
// SIG // gkA8IzZQoj4KZcmMv1sw1OAaLuTH4jgI+1FYF9kHbSF2
// SIG // 6Z99zulYNxNhpfg6hsNuD9u5MLmqcDQuUdnuxTvdxrFR
// SIG // yRGCY6Azx7yrEngdRv58OF5ZBqTSxhF2CEpKzSxsB376
// SIG // e7R9glJbFQAQoB65QOWD5I2hY4NmuHf+gwKY
// SIG // End signature block
