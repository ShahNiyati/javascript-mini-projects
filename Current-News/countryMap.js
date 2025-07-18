const countryMap = {
  "Aruba": "aw",
  "Afghanistan": "af",
  "Angola": "ao",
  "Anguilla": "ai",
  "\u00c5land Islands": "ax",
  "Albania": "al",
  "Andorra": "ad",
  "United Arab Emirates": "ae",
  "Argentina": "ar",
  "Armenia": "am",
  "American Samoa": "as",
  "Antarctica": "aq",
  "French Southern Territories": "tf",
  "Antigua and Barbuda": "ag",
  "Australia": "au",
  "Austria": "at",
  "Azerbaijan": "az",
  "Burundi": "bi",
  "Belgium": "be",
  "Benin": "bj",
  "Bonaire, Sint Eustatius and Saba": "bq",
  "Burkina Faso": "bf",
  "Bangladesh": "bd",
  "Bulgaria": "bg",
  "Bahrain": "bh",
  "Bahamas": "bs",
  "Bosnia and Herzegovina": "ba",
  "Saint Barth\u00e9lemy": "bl",
  "Belarus": "by",
  "Belize": "bz",
  "Bermuda": "bm",
  "Bolivia, Plurinational State of": "bo",
  "Brazil": "br",
  "Barbados": "bb",
  "Brunei Darussalam": "bn",
  "Bhutan": "bt",
  "Bouvet Island": "bv",
  "Botswana": "bw",
  "Central African Republic": "cf",
  "Canada": "ca",
  "Cocos (Keeling) Islands": "cc",
  "Switzerland": "ch",
  "Chile": "cl",
  "China": "cn",
  "C\u00f4te d'Ivoire": "ci",
  "Cameroon": "cm",
  "Congo, The Democratic Republic of the": "cd",
  "Congo": "cg",
  "Cook Islands": "ck",
  "Colombia": "co",
  "Comoros": "km",
  "Cabo Verde": "cv",
  "Costa Rica": "cr",
  "Cuba": "cu",
  "Cura\u00e7ao": "cw",
  "Christmas Island": "cx",
  "Cayman Islands": "ky",
  "Cyprus": "cy",
  "Czechia": "cz",
  "Germany": "de",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Denmark": "dk",
  "Dominican Republic": "do",
  "Algeria": "dz",
  "Ecuador": "ec",
  "Egypt": "eg",
  "Eritrea": "er",
  "Western Sahara": "eh",
  "Spain": "es",
  "Estonia": "ee",
  "Ethiopia": "et",
  "Finland": "fi",
  "Fiji": "fj",
  "Falkland Islands (Malvinas)": "fk",
  "France": "fr",
  "Faroe Islands": "fo",
  "Micronesia, Federated States of": "fm",
  "Gabon": "ga",
  "United Kingdom": "gb",
  "Georgia": "ge",
  "Guernsey": "gg",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Guinea": "gn",
  "Guadeloupe": "gp",
  "Gambia": "gm",
  "Guinea-Bissau": "gw",
  "Equatorial Guinea": "gq",
  "Greece": "gr",
  "Grenada": "gd",
  "Greenland": "gl",
  "Guatemala": "gt",
  "French Guiana": "gf",
  "Guam": "gu",
  "Guyana": "gy",
  "Hong Kong": "hk",
  "Heard Island and McDonald Islands": "hm",
  "Honduras": "hn",
  "Croatia": "hr",
  "Haiti": "ht",
  "Hungary": "hu",
  "Indonesia": "id",
  "Isle of Man": "im",
  "India": "in",
  "British Indian Ocean Territory": "io",
  "Ireland": "ie",
  "Iran, Islamic Republic of": "ir",
  "Iraq": "iq",
  "Iceland": "is",
  "Israel": "il",
  "Italy": "it",
  "Jamaica": "jm",
  "Jersey": "je",
  "Jordan": "jo",
  "Japan": "jp",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kyrgyzstan": "kg",
  "Cambodia": "kh",
  "Kiribati": "ki",
  "Saint Kitts and Nevis": "kn",
  "Korea, Republic of": "kr",
  "Kuwait": "kw",
  "Lao People's Democratic Republic": "la",
  "Lebanon": "lb",
  "Liberia": "lr",
  "Libya": "ly",
  "Saint Lucia": "lc",
  "Liechtenstein": "li",
  "Sri Lanka": "lk",
  "Lesotho": "ls",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Latvia": "lv",
  "Macao": "mo",
  "Saint Martin (French part)": "mf",
  "Morocco": "ma",
  "Monaco": "mc",
  "Moldova, Republic of": "md",
  "Madagascar": "mg",
  "Maldives": "mv",
  "Mexico": "mx",
  "Marshall Islands": "mh",
  "North Macedonia": "mk",
  "Mali": "ml",
  "Malta": "mt",
  "Myanmar": "mm",
  "Montenegro": "me",
  "Mongolia": "mn",
  "Northern Mariana Islands": "mp",
  "Mozambique": "mz",
  "Mauritania": "mr",
  "Montserrat": "ms",
  "Martinique": "mq",
  "Mauritius": "mu",
  "Malawi": "mw",
  "Malaysia": "my",
  "Mayotte": "yt",
  "Namibia": "na",
  "New Caledonia": "nc",
  "Niger": "ne",
  "Norfolk Island": "nf",
  "Nigeria": "ng",
  "Nicaragua": "ni",
  "Niue": "nu",
  "Netherlands": "nl",
  "Norway": "no",
  "Nepal": "np",
  "Nauru": "nr",
  "New Zealand": "nz",
  "Oman": "om",
  "Pakistan": "pk",
  "Panama": "pa",
  "Pitcairn": "pn",
  "Peru": "pe",
  "Philippines": "ph",
  "Palau": "pw",
  "Papua New Guinea": "pg",
  "Poland": "pl",
  "Puerto Rico": "pr",
  "Korea, Democratic People's Republic of": "kp",
  "Portugal": "pt",
  "Paraguay": "py",
  "Palestine, State of": "ps",
  "French Polynesia": "pf",
  "Qatar": "qa",
  "R\u00e9union": "re",
  "Romania": "ro",
  "Russian Federation": "ru",
  "Rwanda": "rw",
  "Saudi Arabia": "sa",
  "Sudan": "sd",
  "Senegal": "sn",
  "Singapore": "sg",
  "South Georgia and the South Sandwich Islands": "gs",
  "Saint Helena, Ascension and Tristan da Cunha": "sh",
  "Svalbard and Jan Mayen": "sj",
  "Solomon Islands": "sb",
  "Sierra Leone": "sl",
  "El Salvador": "sv",
  "San Marino": "sm",
  "Somalia": "so",
  "Saint Pierre and Miquelon": "pm",
  "Serbia": "rs",
  "South Sudan": "ss",
  "Sao Tome and Principe": "st",
  "Suriname": "sr",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Sweden": "se",
  "Eswatini": "sz",
  "Sint Maarten (Dutch part)": "sx",
  "Seychelles": "sc",
  "Syrian Arab Republic": "sy",
  "Turks and Caicos Islands": "tc",
  "Chad": "td",
  "Togo": "tg",
  "Thailand": "th",
  "Tajikistan": "tj",
  "Tokelau": "tk",
  "Turkmenistan": "tm",
  "Timor-Leste": "tl",
  "Tonga": "to",
  "Trinidad and Tobago": "tt",
  "Tunisia": "tn",
  "Turkey": "tr",
  "Tuvalu": "tv",
  "Taiwan, Province of China": "tw",
  "Tanzania, United Republic of": "tz",
  "Uganda": "ug",
  "Ukraine": "ua",
  "United States Minor Outlying Islands": "um",
  "Uruguay": "uy",
  "United States": "us",
  "Uzbekistan": "uz",
  "Holy See (Vatican City State)": "va",
  "Saint Vincent and the Grenadines": "vc",
  "Venezuela, Bolivarian Republic of": "ve",
  "Virgin Islands, British": "vg",
  "Virgin Islands, U.S.": "vi",
  "Viet Nam": "vn",
  "Vanuatu": "vu",
  "Wallis and Futuna": "wf",
  "Samoa": "ws",
  "Yemen": "ye",
  "South Africa": "za",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};