// Biahes homepage catalog — final selling prices only.
// Photos live in /public/images/destinations/<id>.jpg (credits below).

export type Region = 'dom' | 'intl';

export interface TourPackage {
  id: string;
  name: string;
  region: Region;
  days: string;
  price: number;
  sub: string;
  hotel: string;
  inc: string[];
  exc: string[];
  itin: string[];
}

export interface PhotoCredit {
  title: string;
  creator: string;
  license: string;
  license_url: string;
  source: string;
}

export const PACKAGES: TourPackage[] = [
  {id:"boracay",name:"Boracay",region:"dom",days:"3D2N",price:8499,sub:"White Beach, Station 2",hotel:"Beachfront resort, Station 2",
   inc:["2 nights hotel with breakfast","Roundtrip Caticlan airport–hotel transfers","Island hopping with lunch","Environmental & terminal fees"],exc:["Airfare","Personal expenses","Optional activities (helmet dive, parasailing)"],
   itin:["Arrival in Caticlan, transfer to hotel, sunset at White Beach","Island hopping: Crystal Cove, Puka Beach, snorkeling with lunch","Breakfast, free time, transfer to airport"]},
  {id:"elnido",name:"El Nido",region:"dom",days:"4D3N",price:12999,sub:"Bacuit Bay lagoons",hotel:"Boutique hotel, El Nido town",
   inc:["3 nights hotel with breakfast","Puerto Princesa–El Nido shared van transfers","Tour A and Tour C with lunch","Eco-tourism fee"],exc:["Airfare","Kayak rental at lagoons","Personal expenses"],
   itin:["Arrival in Puerto Princesa, van to El Nido","Tour A: Big Lagoon, Small Lagoon, Secret Lagoon","Tour C: Hidden Beach, Matinloc Shrine, Helicopter Island","Breakfast, van back to Puerto Princesa"]},
  {id:"coron",name:"Coron",region:"dom",days:"3D2N",price:10499,sub:"Kayangan & Twin Lagoon",hotel:"Hotel in Coron town",
   inc:["2 nights hotel with breakfast","Busuanga airport transfers","Coron Ultimate island tour with lunch","Entrance fees"],exc:["Airfare","Maquinit Hot Spring","Personal expenses"],
   itin:["Arrival in Busuanga, town tour and Mt. Tapyas sunset","Kayangan Lake, Twin Lagoon, Barracuda Lake, beach lunch","Breakfast, airport transfer"]},
  {id:"palawan",name:"Puerto Princesa",region:"dom",days:"3D2N",price:7999,sub:"Underground River, Palawan",hotel:"Hotel in the city proper",
   inc:["2 nights hotel with breakfast","Airport transfers","Underground River tour with lunch","Honda Bay island hopping"],exc:["Airfare","Personal expenses"],
   itin:["Arrival, city tour: Baker's Hill, Mitra's Ranch","Underground River tour with buffet lunch","Honda Bay island hopping, then airport"]},
  {id:"cebu",name:"Cebu",region:"dom",days:"3D2N",price:6999,sub:"City heritage & Moalboal",hotel:"Hotel in Cebu City",
   inc:["2 nights hotel with breakfast","Airport transfers","Cebu heritage city tour","Moalboal sardine run day trip"],exc:["Airfare","Canyoneering (add-on)","Personal expenses"],
   itin:["Arrival, Magellan's Cross, Basilica del Santo Niño, Fort San Pedro","Moalboal sardine run and Pescador Island snorkel","Breakfast, pasalubong stop, airport"]},
  {id:"bohol",name:"Bohol",region:"dom",days:"3D2N",price:7499,sub:"Chocolate Hills & Panglao",hotel:"Resort in Panglao",
   inc:["2 nights resort with breakfast","Airport/port transfers","Countryside tour with Loboc river lunch","Entrance fees"],exc:["Airfare or ferry","Balicasag island hopping (add-on)","Personal expenses"],
   itin:["Arrival in Panglao, Alona Beach","Chocolate Hills, tarsier sanctuary, Loboc river cruise lunch","Breakfast, transfer out"]},
  {id:"siargao",name:"Siargao",region:"dom",days:"4D3N",price:9999,sub:"Cloud 9 & island hopping",hotel:"Surf resort, General Luna",
   inc:["3 nights resort with breakfast","Sayak airport transfers","Island hopping: Naked, Daku, Guyam","Land tour: Magpupungko, Maasin River"],exc:["Airfare","Surf lessons","Personal expenses"],
   itin:["Arrival, Cloud 9 boardwalk sunset","Island hopping with lunch on Daku","Land tour: Maasin River, Magpupungko rock pools","Breakfast, airport"]},
  {id:"baguio",name:"Baguio",region:"dom",days:"3D2N",price:5499,sub:"Summer Capital",hotel:"Hotel near Session Road",
   inc:["2 nights hotel with breakfast","Roundtrip bus from Manila","City tour: Mines View, Wright Park, The Mansion","Strawberry farm visit"],exc:["Meals not stated","Personal expenses"],
   itin:["Bus from Manila, check in, Session Road night market","City tour and La Trinidad strawberry farm","Breakfast, Good Shepherd pasalubong, bus home"]},
  {id:"vigan",name:"Vigan",region:"dom",days:"2D1N",price:4999,sub:"Calle Crisologo",hotel:"Heritage hotel, Vigan",
   inc:["1 night heritage hotel with breakfast","Kalesa ride on Calle Crisologo","Baluarte & Bantay Bell Tower tour","Vigan dancing fountain show"],exc:["Airfare or bus","Personal expenses"],
   itin:["Arrival, kalesa ride, empanada food trip, fountain show","Breakfast, Baluarte, Bantay Bell Tower, departure"]},
  {id:"davao",name:"Davao",region:"dom",days:"3D2N",price:6799,sub:"Samal Island & Eden",hotel:"Hotel in Davao City",
   inc:["2 nights hotel with breakfast","Airport transfers","Samal Island day tour","Eden Nature Park with lunch"],exc:["Airfare","Philippine Eagle Center fee","Personal expenses"],
   itin:["Arrival, People's Park, Roxas night market","Samal Island beach day","Eden Nature Park lunch, airport"]},

  {id:"japan",name:"Japan",region:"intl",days:"5D4N",price:45999,sub:"Tokyo & Mt. Fuji",hotel:"3-star hotel, Shinjuku",
   inc:["Roundtrip airfare Manila–Tokyo","4 nights hotel with breakfast","Mt. Fuji & Hakone day tour","Tokyo city tour","Airport limousine bus"],exc:["Japan visa fee","Travel insurance","Lunch and dinner"],
   itin:["Arrive Narita, transfer to Shinjuku","Tokyo tour: Asakusa, Shibuya, Harajuku","Mt. Fuji 5th Station, Lake Ashi cruise","Free day: DisneySea or shopping","Breakfast, airport"]},
  {id:"korea",name:"South Korea",region:"intl",days:"5D4N",price:32999,sub:"Seoul & Nami Island",hotel:"Hotel in Myeongdong",
   inc:["Roundtrip airfare Manila–Seoul","4 nights hotel with breakfast","Nami Island & Petite France tour","Hanbok rental at Gyeongbokgung"],exc:["Korea visa fee","Travel insurance","Meals not stated"],
   itin:["Arrive Incheon, Myeongdong","Gyeongbokgung in hanbok, Bukchon village","Nami Island and Petite France","Free day: Lotte World or shopping","Breakfast, airport"]},
  {id:"singapore",name:"Singapore",region:"intl",days:"4D3N",price:27999,sub:"Marina Bay & Sentosa",hotel:"Hotel near Bugis",
   inc:["Roundtrip airfare Manila–Singapore","3 nights hotel with breakfast","Universal Studios Singapore ticket","Gardens by the Bay"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Merlion Park and Marina Bay light show","Universal Studios on Sentosa","Gardens by the Bay, Chinatown","Breakfast, Changi Jewel, flight home"]},
  {id:"thailand",name:"Thailand",region:"intl",days:"4D3N",price:19999,sub:"Bangkok & Pattaya",hotel:"Hotel in Sukhumvit",
   inc:["Roundtrip airfare Manila–Bangkok","3 nights hotel with breakfast","Temple tour: Wat Arun, Wat Pho","Pattaya Coral Island day trip"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Asiatique riverfront","Grand Palace, Wat Pho, Wat Arun","Pattaya and Coral Island","Breakfast, Chatuchak or MBK, airport"]},
  {id:"vietnam",name:"Vietnam",region:"intl",days:"5D4N",price:24999,sub:"Hanoi & Ha Long Bay",hotel:"Old Quarter hotel, Hanoi",
   inc:["Roundtrip airfare Manila–Hanoi","4 nights hotel with breakfast","Ha Long Bay day cruise with lunch","Hanoi city tour"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Hoan Kiem Lake walk","Hanoi tour: Ho Chi Minh Mausoleum, Temple of Literature","Ha Long Bay cruise, kayaking","Free day, train street","Breakfast, airport"]},
  {id:"malaysia",name:"Malaysia",region:"intl",days:"4D3N",price:18999,sub:"Kuala Lumpur & Genting",hotel:"Hotel in Bukit Bintang",
   inc:["Roundtrip airfare Manila–Kuala Lumpur","3 nights hotel with breakfast","KL city tour with Batu Caves","Genting Highlands cable car"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Petronas Towers photo stop","Batu Caves, Merdeka Square","Genting Highlands day trip","Breakfast, airport"]},
  {id:"taiwan",name:"Taiwan",region:"intl",days:"4D3N",price:26999,sub:"Taipei & Jiufen",hotel:"Hotel in Ximending",
   inc:["Roundtrip airfare Manila–Taipei","3 nights hotel with breakfast","Yehliu, Jiufen & Shifen lantern tour","Taipei 101 observatory"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Shilin night market","Yehliu Geopark, Shifen sky lantern, Jiufen old street","Taipei 101, free time","Breakfast, airport"]},
  {id:"hongkong",name:"Hong Kong",region:"intl",days:"4D3N",price:23999,sub:"Disneyland & Victoria Peak",hotel:"Hotel in Tsim Sha Tsui",
   inc:["Roundtrip airfare Manila–Hong Kong","3 nights hotel with breakfast","Hong Kong Disneyland ticket","Victoria Peak tram"],exc:["Travel insurance","Meals not stated"],
   itin:["Arrival, Avenue of Stars, Symphony of Lights","Hong Kong Disneyland","Victoria Peak, Ngong Ping 360","Breakfast, airport"]},
  {id:"dubai",name:"Dubai",region:"intl",days:"5D4N",price:54999,sub:"Desert safari & Burj Khalifa",hotel:"4-star hotel, Deira",
   inc:["Roundtrip airfare Manila–Dubai","4 nights hotel with breakfast","Desert safari with BBQ dinner","Burj Khalifa level 124","Dhow cruise dinner"],exc:["UAE visa fee","Travel insurance","Meals not stated"],
   itin:["Arrival, transfer to hotel","Dubai city tour and Burj Khalifa","Desert safari, dune bashing, BBQ dinner","Free day: Dubai Mall, Gold Souk","Breakfast, airport"]},
  {id:"europe",name:"Europe",region:"intl",days:"10D9N",price:159999,sub:"Paris · Switzerland · Italy",hotel:"3–4 star hotels throughout",
   inc:["Roundtrip airfare Manila–Paris/Rome","9 nights hotel with breakfast","Coach transfers between countries","Eiffel Tower, Mt. Titlis, Colosseum visits","Filipino-speaking tour escort"],exc:["Schengen visa fee","Travel insurance","Lunch and dinner"],
   itin:["Arrive Paris","Eiffel Tower, Seine cruise, Louvre exterior","Versailles or free day","Coach to Lucerne","Mt. Titlis cable car","Coach to Milan via the Alps","Venice day trip","Florence and Pisa","Rome: Colosseum, Vatican","Breakfast, flight home"]}
];

export const FARES: [string, number][] = [ // indicative one-way final fares from Manila
  ["Cebu",2850],["Caticlan (Boracay)",3250],["Puerto Princesa",2950],["Davao",3450],["Tagbilaran/Panglao (Bohol)",2950],["Siargao",4250],["Busuanga (Coron)",3650],["El Nido",6500],
  ["Tokyo",9800],["Seoul",7900],["Singapore",5900],["Bangkok",6200],["Hong Kong",4900],["Taipei",6800],["Kuala Lumpur",5400],["Hanoi",6400],["Dubai",15500]
];

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  "baguio": {
    "title": "Burnham Park Lake Philippines",
    "creator": "Hariboneagle927",
    "license": "Public domain",
    "license_url": "",
    "source": "https://commons.wikimedia.org/wiki/File:Burnham_Park_Lake_Philippines.jpeg"
  },
  "bohol": {
    "title": "Chocolate Hills Bohol Philippines",
    "creator": "Philip Nalangan",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/",
    "source": "https://commons.wikimedia.org/w/index.php?curid=148945238"
  },
  "boracay": {
    "title": "Boracay White Beach - panoramio - Tuderna",
    "creator": "Tuderna",
    "license": "CC BY 3.0",
    "license_url": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Boracay_White_Beach_-_panoramio_-_Tuderna.jpg"
  },
  "cebu": {
    "title": "Magellan's Cross Cebu City",
    "creator": "Elmer B. Domingo",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Magellan%27s_Cross_Cebu_City.jpg"
  },
  "coron": {
    "title": "Coron Kayangan Lake Entrance (73005283)",
    "creator": "Myles Kadusale",
    "license": "CC BY 3.0",
    "license_url": "https://creativecommons.org/licenses/by/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Coron_Kayangan_Lake_Entrance_(73005283).jpeg"
  },
  "davao": {
    "title": "The Ring of Mt. Apo",
    "creator": "Bro. Jeffrey Pioquinto, SJ",
    "license": "CC BY 2.0",
    "license_url": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:The_Ring_of_Mt._Apo.jpg"
  },
  "dubai": {
    "title": "Dubai skyline unsplash",
    "creator": "Robert Bock",
    "license": "CC0",
    "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Dubai_skyline_unsplash.jpg"
  },
  "elnido": {
    "title": "Island lagoon in Bacuit Bay, El Nido, Palawan, Philippines",
    "creator": "Vyacheslav Argenberg",
    "license": "CC BY 4.0",
    "license_url": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Island_lagoon_in_Bacuit_Bay,_El_Nido,_Palawan,_Philippines.jpg"
  },
  "europe": {
    "title": "Eiffel Tower and Pont Alexandre III at night",
    "creator": "Getfunky Paris",
    "license": "CC BY 2.0",
    "license_url": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Eiffel_Tower_and_Pont_Alexandre_III_at_night.jpg"
  },
  "hongkong": {
    "title": "US Navy 070727-N-8868D-029 The sunset skyline of Hong Kong as viewed from Victor",
    "creator": "U.S. Navy photo by Ensign Chad Dulac",
    "license": "Public domain",
    "license_url": "",
    "source": "https://commons.wikimedia.org/wiki/File:US_Navy_070727-N-8868D-029_The_sunset_skyline_of_Hong_Kong_as_viewed_from_Victoria_Peak._Victoria_Peak_was_one_of_many_places,_attractions_and_tours_that_Sailors_from_the_Nimitz-class_aircraft_carrier_USS_John_C._Stennis_(CVN_7.jpg"
  },
  "japan": {
    "title": "Fuji Kawaguchi 457",
    "creator": "Marion & Christoph Aistleitner",
    "license": "CC0",
    "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Fuji_Kawaguchi_457.JPG"
  },
  "korea": {
    "title": "Gyeonghoeru (Royal Banquet Hall) at Gyeongbokgung Palace, Seoul",
    "creator": "Frank Schulenburg",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Gyeonghoeru_(Royal_Banquet_Hall)_at_Gyeongbokgung_Palace,_Seoul.jpg"
  },
  "malaysia": {
    "title": "Menara Berkembar Petronas, Kuala Lumpur, Malaysia (Unsplash)",
    "creator": "Vlad Shapochnikov vladshap",
    "license": "CC0",
    "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Menara_Berkembar_Petronas,_Kuala_Lumpur,_Malaysia_(Unsplash).jpg"
  },
  "palawan": {
    "title": "Puerto Princesa Subterranean River - PuertoPrincesaSR1757",
    "creator": "lumoplank",
    "license": "CC0",
    "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Puerto_Princesa_Subterranean_River_-_PuertoPrincesaSR1757.jpg"
  },
  "siargao": {
    "title": "Cloud 9 Boardwalk, Siargao",
    "creator": "JupitReyes",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0/",
    "source": "https://commons.wikimedia.org/w/index.php?curid=69084929"
  },
  "singapore": {
    "title": "Puente Helix, museo ArtScience y hotel Marina Bay Sands, Marina Bay, Singapur, 2",
    "creator": "Diego Delso",
    "license": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Puente_Helix,_museo_ArtScience_y_hotel_Marina_Bay_Sands,_Marina_Bay,_Singapur,_2023-08-17,_DD_67-69_HDR.jpg"
  },
  "taiwan": {
    "title": "Taipei skyline 2014",
    "creator": "Andrew Van Ova",
    "license": "CC BY 2.0",
    "license_url": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Taipei_skyline_2014.jpg"
  },
  "thailand": {
    "title": "Ubosot of Wat Arun",
    "creator": "This Photo was taken by Supanut Arunoprayote.",
    "license": "CC BY 4.0",
    "license_url": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Ubosot_of_Wat_Arun.jpg"
  },
  "vietnam": {
    "title": "View of sea from Titov Island, Ha Long Bay, Vietnam, 20240128 1337 3732",
    "creator": "Jakub Hałun",
    "license": "CC BY 4.0",
    "license_url": "https://creativecommons.org/licenses/by/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:View_of_sea_from_Titov_Island,_Ha_Long_Bay,_Vietnam,_20240128_1337_3732.jpg"
  },
  "vigan": {
    "title": "Calle Crisologo, Vigan, Philippines - One of The New 7 Wonder Cities of The World",
    "creator": "Ray in Manila",
    "license": "CC BY 2.0",
    "license_url": "https://creativecommons.org/licenses/by/2.0/",
    "source": "https://commons.wikimedia.org/w/index.php?curid=88175491"
  }
};

export const photoFor = (id: string) => `/images/destinations/${id}.jpg`;

export const peso = (n: number) => '₱' + Number(n).toLocaleString('en-PH');

export const findPackage = (id: string) => PACKAGES.find((p) => p.id === id);
