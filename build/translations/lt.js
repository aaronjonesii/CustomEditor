(function(d){	const l = d['lt'] = d['lt'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Block quote":"Citata",Bold:"Paryškintas","Bulleted List":"Sąrašas",Cancel:"Atšaukti","Cannot upload file:":"Negalima įkelti failo:","Centered image":"Vaizdas centre","Change image text alternative":"Pakeisti vaizdo alternatyvųjį tekstą","Choose heading":"Pasirinkite antraštę","Could not insert image at the current position.":"Nepavyko įterpti vaizdo į dabartinę vietą.","Could not obtain resized image URL.":"Nepavyko gauti pakeisto dydžio paveiksliuko URL.","Decrease indent":"Sumažinti atitraukimą",Downloadable:"","Dropdown toolbar":"","Edit block":"Redaguoti bloką","Edit link":"Keisti nuorodą","Editor toolbar":"","Enter image caption":"Įveskite vaizdo antraštę","Full size image":"Pilno dydžio vaizdas",Heading:"Antraštė","Heading 1":"Antraštė 1","Heading 2":"Antraštė 2","Heading 3":"Antraštė 3","Heading 4":"Antraštė 4","Heading 5":"Antraštė 5","Heading 6":"Antraštė 6","Image toolbar":"","image widget":"vaizdų valdiklis","Increase indent":"Padidinti atitraukimą","Insert image":"Įterpti vaizdą","Insert image or file":"Įterpti vaizdą ar failą","Insert media":"Įterpkite media","Inserting image failed":"Nepavyko įterpti vaizdo",Italic:"Kursyvas","Left aligned image":"Vaizdas kairėje",Link:"Pridėti nuorodą","Link URL":"Nuorodos URL","Media URL":"Media URL","media widget":"media valdiklis",Next:"","Numbered List":"Numeruotas rąrašas","Open in a new tab":"","Open link in new tab":"Atidaryti nuorodą naujame skirtuke",Paragraph:"Paragrafas","Paste the media URL in the input.":"Įklijuokite media URL adresą į įvedimo lauką.",Previous:"",Redo:"Pirmyn","Rich Text Editor, %0":"Raiškiojo teksto redaktorius, %0","Right aligned image":"Vaizdas dešinėje",Save:"Išsaugoti","Selecting resized image failed":"Nepavyko pasirinkti pakeisto vaizdo","Show more items":"","Side image":"Vaizdas šone","Text alternative":"Alternatyvusis tekstas","The URL must not be empty.":"URL negali būti tuščias.","This link has no URL":"Ši nuorda neturi URL","This media URL is not supported.":"Šis media URL yra nepalaikomas.","Tip: Paste the URL into the content to embed faster.":"Patarimas: norėdami greičiau įterpti media tiesiog įklijuokite URL į turinį.","Type or paste your content here.":"","Type your title":"",Undo:"Atgal",Unlink:"Pašalinti nuorodą","Upload failed":"Įkelti nepavyko","Upload in progress":"Įkelima"}	);l.getPluralForm=function(n){return (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));