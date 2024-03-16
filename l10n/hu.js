OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Ez a fiók le van tiltva, lépjen kapcsolatba a rendszergazdával.",
    "Saved" : "Mentve",
    "Could not save" : "Nem sikerült menteni",
    "Provider" : "Szolgáltató",
    "Unknown error, please check the log file for more details." : "Ismeretlen hiba, a további részletekért ellenőrizze a naplófájlokat.",
    "Direct log in" : "Közvetlen bejelentkezés",
    "SSO & SAML log in" : "SSO és SAML bejelentkezés",
    "This page should not be visited directly." : "Ezt az oldalt ne keresse fel közvetlenül.",
    "Provider " : "Szolgáltató ",
    "X.509 certificate of the Service Provider" : "Szolgáltató X.509 tanúsítványa",
    "Private key of the Service Provider" : "Szolgáltató titkos kulcsa",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Azt jelzi, hogy az ezen az SP által küldött <samlp:logoutRequest> nameID mezője titkosítva lesz.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Azt jelzi, hogy az ezen az SP által küldött <samlp:AuthnRequest> üzenetek alá lesznek írva. [Az SP metaadatai adják meg ezt az információt]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Azt jelzi, hogy az ezen az SP által küldött <samlp:logoutRequest> üzenetek alá lesznek írva.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Azt jelzi, hogy az ezen az SP által küldött <samlp:logoutResponse> üzenetek alá lesznek írva.",
    "Whether the metadata should be signed." : "A metaadatok aláírásra kerülnek-e.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Azt a követelményt jelzi, hogy az SP által fogadott <samlp:Response>, <samlp:LogoutRequest> és <samlp:LogoutResponse> elemeknek aláírtnak kell lenniük.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Azt a követelményt jelzi, hogy az SP által fogadott <saml:Assertion> elemeknek aláírtnak kell lenniük. [Az SP metaadatai adják meg ezt az információt]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Azt a követelményt jelzi, hogy az SP által fogadott <saml:Assertion> elemeknek titkosítottnak kell lenniük.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Azt a követelményt jelzi, hogy az SP által fogadott SAMLResponse NameID elemének jelen kell lennie.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Azt a követelményt jelzi, hogy az SP által fogadott NameID elemnek titkosítottnak kell lennie.",
    "Indicates if the SP will validate all received XML." : "Azt jelzi, hogy az SP ellenőrzi-e az összes fogadott XML-t.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "Az ADFS kisbetűvel URL-kódolja a SAML adatokat, és az eszköz alapértelmezetten nagybetűket használ. Kapcsolja be az ADFS kompatibilitáshoz az aláírásellenőrzéskor.",
    "Algorithm that the toolkit will use on signing process." : "Az eszközkészlet által az aláírási folyamat során használt algoritmus.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Lekérdezési paraméterek lekérése innen: $_SERVER. Néhány SAML kiszolgálónál ez szükséges az SLO kéréseknél.",
    "Attribute to map the UID to." : "Az attribútum, amelyhez az UID hozzá lesz rendelve.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "Csak akkor engedélyezze a hitelesítést, ha a fiók valamilyen más háttérrendszeren létezik (például LDAP).",
    "Attribute to map the displayname to." : "Az attribútum, amelyhez a megjelenítendő név hozzá lesz rendelve.",
    "Attribute to map the email address to." : "Az attribútum, amelyhez az e-mail-cím hozzá lesz rendelve.",
    "Attribute to map the quota to." : "Az attribútum, amelyhez a kvóta hozzá lesz rendelve.",
    "Attribute to map the users home to." : "Az attribútum, amelyhez a felhasználók saját mappái hozzá lesznek rendelve.",
    "Attribute to map the users groups to." : "Az attribútum, amelyhez a felhasználói csoportjai hozzá lesznek rendelve.",
    "Attribute to map the users MFA login status" : "A felhasználók több-faktoros bejelentkezési állapotának leképezéséhez használt attribútum",
    "Reject members of these groups. This setting has precedence over required memberships." : "Ezen csoportok tagjainak elutasítása. Ez a beállítás elsőbbséget élvez a kötelező tagságokkal szemben",
    "Group A, Group B, …" : "Csoport A, Csoport B,…",
    "Require membership in these groups, if any." : "Tagság megkövetelése ezekben a csoportokban, ha meg vannak adva.",
    "Email address" : "E-mail-cím",
    "Encrypted" : "Titkosított",
    "Entity" : "Entitás",
    "Kerberos" : "Kerberos",
    "Persistent" : "Állandó",
    "Transient" : "Átmeneti",
    "Unspecified" : "Nem meghatározott",
    "Windows domain qualified name" : "Windows tartományi név",
    "X509 subject name" : "X509 tárgy neve",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "SAML hitelesítés használata a(z) %s asztali klienseihez (a felhasználók ismételt hitelesítését igényli)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "A személyazonossági szolgáltató nem kötelező megjelenítendő neve (alapértelmezett: „SSO és SAML bejelentkezés”)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Megengedi a több felhasználói háttérszolgáltatás használatát (például LDAP)",
    "SSO & SAML authentication" : "SSO és SAML hitelesítés",
    "Authenticate using single sign-on" : "Hitelesítés egyszeri bejelentkezéssel",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "A Nextcloud SSO és SAML alkalmazás könnyen lehetővé teheti a meglévő egyszeri bejelentkezéses megoldás integrálását a Nextcloudba. Ezenkívül a Nextcloud LDAP felhasználói szolgáltatót is használhatja a felhasználók kényelmének megőrzése érdekében. (például megosztáskor)\nA következő szolgáltatók támogatottak és teszteltek jelenleg:\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Hitelesítés környezeti változón keresztül**\n\t* Kerberos (mod_auth_kerb)\n\t* Bármely más szolgáltató, amely a környezeti változó segítségével hitelesít\n\nNoha elméletileg bármely hitelesítésszolgáltató működik, amely kompatibilis az itt felsorolt szabványokkal, szeretnénk megjegyezni, hogy ezek nem tartoznak egyetlen belső tesztmátrixba sem.",
    "Open documentation" : "Dokumentáció megnyitása",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Ügyeljen arra, hogy konfiguráljon egy adminisztrátori felhasználót, amely hozzáférhet a példányhoz az SSO-n keresztül. A szokásos %s-fiókjával már nem lehet bejelentkezni, hacsak nem engedélyezte a(z) „%s” lehetőséget, vagy ha közvetlenül a(z) %s URL-re ugrik.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "Ügyeljen arra, hogy konfiguráljon egy adminisztrátori felhasználót, amely hozzáférhet a példányhoz az SSO-n keresztül. A szokásos %s-fiókjával már nem lehet bejelentkezni, hacsak nem közvetlenül a(z) %s URL-re ugrik.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Válasszon, hogy a Nextcloudba épített SAML szolgáltató vagy egy környezeti változó ellenében szeretne bejelentkeztetni.",
    "Use built-in SAML authentication" : "A beépített SAML hitelesítés használata",
    "Use environment variable" : "Környezeti változó használata",
    "Global settings" : "Globális beállítások",
    "Remove identity provider" : "Személyazonosság-szolgáltató eltávolítása",
    "Add identity provider" : "Személyazonosság-szolgáltató hozzáadása",
    "General" : "Általános",
    "Service Provider Data" : "Szolgáltató adatai",
    "If your Service Provider should use certificates you can optionally specify them here." : "Ha a szolgáltatójának tanúsítványokat kell használnia, akkor itt megadhatja azokat.",
    "Show Service Provider settings…" : "Szolgáltató beállításainak megjelenítése…",
    "Name ID format" : "Névazonosító formátuma",
    "Identity Provider Data" : "Személyazonosság-szolgáltató adatai",
    "Identifier of the IdP entity (must be a URI)" : "Az IdP bejegyzés azonosítója (URI-nak kell lennie)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Az IdP URL célja, ahová az SP a hitelesítéskérési üzeneteit küldi",
    "Show optional Identity Provider settings…" : "Nem kötelező személyazonosság-szolgáltatói beállításai…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Az IdP URL-je, ahová az SP az SLO kérést küldi",
    "URL Location of the IDP's SLO Response" : "Az IDP SLO válaszának URL-címe",
    "Public X.509 certificate of the IdP" : "Az IdP nyilvános X.509 tanúsítványa",
    "Attribute mapping" : "Attribútum-hozzárendelés",
    "If you want to optionally map attributes to the user you can configure these here." : "Ha további attribútumokat szeretne hozzárendelni a felhasználóhoz, akkor itt beállíthatja ezeket.",
    "Show attribute mapping settings…" : "Attribútum-hozzárendelési beállítások megjelenítése…",
    "Security settings" : "Biztonsági beállítások",
    "For increased security we recommend enabling the following settings if supported by your environment." : "A nagyobb biztonság érdekében javasoljuk a következő beállítások bekapcsolását, ha a környezete támogatja.",
    "Show security settings…" : "Biztonsági beállítások megjelenítése…",
    "Signatures and encryption offered" : "Kínált aláírások és titkosítás",
    "Signatures and encryption required" : "Megkövetelt aláírások és titkosítás",
    "User filtering" : "Szűrés használata",
    "If you want to optionally restrict user login depending on user data, configure it here." : "Ha felhasználói adatoktól függővé akarja tenni a bejelentkezést, akkor állítsa be itt.",
    "Show user filtering settings …" : "Felhasználószűrési beállítások megjelenítése…",
    "Download metadata XML" : "XML metaadatok letöltése",
    "Reset settings" : "Beállítások visszaállítása",
    "Metadata invalid" : "Érvénytelen metaadatok",
    "Metadata valid" : "Érvényes metaadatok",
    "Error" : "Hiba",
    "Access denied." : "Hozzáférés megtagadva.",
    "Your account is denied, access to this service is thus not possible." : "A fiókja hozzáférése megtagadva, így ehhez a szolgáltatáshoz nem férhet hozzá.",
    "Account not provisioned." : "A fiók nem felügyelt.",
    "Your account is not provisioned, access to this service is thus not possible." : "A fiókja nem felügyelt, így ehhez a szolgáltatáshoz nem férhet hozzá.",
    "Login options:" : "Bejelentkezési lehetőségek:",
    "Choose a authentication provider" : "Válasszon hitelesítésszolgáltatót"
},
"nplurals=2; plural=(n != 1);");
