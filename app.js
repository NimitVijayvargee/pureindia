function switch_theme() {
    html = document.documentElement;
    current_theme = html.getAttribute('data-bs-theme');
    if (current_theme === "dark") {
        html.setAttribute("data-bs-theme", "light")
    } else {
        html.setAttribute("data-bs-theme", "dark")
    }
}


var states = {
    "inan": `<h1>Welcome to The Andaman and Nicobar Islands!</h1>
      <img src="photos/an.png" style="max-width: 700px;"><br>
      The Andaman and Nicobar Islands, located in the Bay of Bengal, are known for their stunning natural beauty, rich
      biodiversity, and unique cultural heritage. The islands’ culture is a blend of indigenous traditions, influences
      from mainland India, and colonial history, creating a diverse and vibrant cultural tapestry.

      <br><br>

      Festivals in the Andaman and Nicobar Islands are celebrated with great enthusiasm, reflecting the cultural
      diversity of the region. Island Tourism Festival, held annually in Port Blair, showcases the islands' cultural
      richness through music, dance, and traditional crafts. Diwali, Christmas, and Pongal are also widely celebrated,
      demonstrating the religious diversity and communal harmony of the islands' inhabitants. These festivals bring
      together people from different backgrounds, highlighting the islands’ inclusive spirit.

      <br><br>

      The cuisine of the Andaman and Nicobar Islands is characterized by its use of fresh seafood and tropical fruits.
      Fish, crab, lobster, and prawns are staples, often prepared with a blend of Indian spices and coconut. Popular
      dishes include Fish Curry, Lobster Thermidor, and Coconut Prawn Curry. The cuisine also features traditional
      recipes from the indigenous tribes, offering a unique culinary experience that reflects the islands’ natural
      bounty and cultural diversity.

      <br><br>

      The islands' music and dance are influenced by both indigenous traditions and the various communities that have
      settled there. Traditional dance forms like Nicobari dance, performed by the Nicobarese tribe during festivals and
      celebrations, are integral to the cultural heritage of the islands. Folk music, often accompanied by instruments
      like the dholak and flute, adds to the cultural vibrancy. These performances reflect the islands’ rich cultural
      heritage and the traditions of its indigenous peoples.

      <br><br>

      The architectural heritage of the Andaman and Nicobar Islands includes colonial-era buildings, indigenous huts,
      and modern structures. The Cellular Jail in Port Blair, a historic prison used during the Indian independence
      movement, is a significant landmark and a symbol of the islands’ colonial past. Traditional Nicobarese huts, built
      on stilts and made from natural materials like bamboo and palm leaves, showcase the indigenous architectural
      styles adapted to the tropical climate.

      <br><br>

      Handicrafts from the Andaman and Nicobar Islands are known for their use of locally sourced materials and
      traditional techniques. Shell crafts, coconut shell products, and cane and bamboo items are popular among
      tourists. The intricate weaving patterns of the indigenous tribes are reflected in their mats, baskets, and other
      handmade items, highlighting the artisanal skills and cultural heritage of the islanders.

      <br><br>

      The natural beauty of the Andaman and Nicobar Islands is unparalleled, with pristine beaches, crystal-clear
      waters, and lush forests. The islands are home to diverse marine life and coral reefs, making them a popular
      destination for snorkeling, scuba diving, and other water sports. The tropical rainforests are rich in flora and
      fauna, providing a habitat for unique species and offering opportunities for eco-tourism and wildlife exploration.

      <br><br>

      Overall, the Andaman and Nicobar Islands’ culture is a harmonious blend of indigenous traditions, colonial
      history, and modern influences. The islands offer visitors a unique experience, from their vibrant festivals and
      delicious cuisine to their traditional crafts and breathtaking natural landscapes. The warm hospitality and
      cultural diversity of the islands make them a captivating destination for travelers and culture enthusiasts alike.
      <br><br></br>`,
    "inap": `<h1>Welcome to Andhra Pradesh!</h1>
      <img src="photos/ap.png" style="max-width: 700px;"><br>
      Andhra Pradesh, located in southeastern India, is known for its rich cultural heritage, historical significance,
      and natural beauty. The culture of Andhra Pradesh is a vibrant tapestry of classical arts, diverse traditions, and
      festive celebrations that reflect the state's historical depth and communal harmony.

      <br><br>

      Festivals play a crucial role in the cultural life of Andhra Pradesh. Sankranti, the harvest festival, is
      celebrated with grandeur, featuring traditional dances, kite flying, and special dishes. Ugadi marks the Telugu
      New Year and is observed with rituals, feasting, and cultural performances. The state also celebrates significant
      religious festivals like Dasara, Diwali, and Vinayaka Chavithi with enthusiasm, highlighting its religious
      diversity and cultural vibrancy.

      <br><br>

      Andhra cuisine is renowned for its spicy flavors and diverse dishes. Rice is a staple, often accompanied by a
      variety of chutneys, pickles, and curries. Popular dishes include Pulihora (tamarind rice), Andhra Chepala Pulusu
      (fish curry), and Gongura Pachadi (sorrel leaves chutney). The cuisine also boasts delicious sweets like
      Pootharekulu (paper-thin sweet) and Bobbatlu (sweet flatbreads), reflecting the state’s culinary richness.

      <br><br>

      Music and dance are integral to Andhra Pradesh's cultural expression. Kuchipudi, a classical dance form
      originating from the village of Kuchipudi, is renowned for its graceful movements and expressive storytelling. The
      state also has a rich tradition of Carnatic music, with notable composers like Tyagaraja contributing to its
      classical heritage. Folk dances such as Dhimsa and Kolattam are performed during festivals and social gatherings,
      showcasing the state's diverse cultural traditions.

      <br><br>

      Andhra Pradesh's architectural heritage is a testament to its historical significance. The state is home to
      magnificent temples like the Venkateswara Temple in Tirupati, known for its spiritual importance and architectural
      splendor. The Lepakshi Temple, with its stunning frescoes and intricate carvings, and the ancient Buddhist sites
      at Amaravati and Nagarjunakonda highlight the region’s rich historical and religious heritage. These landmarks
      attract tourists and pilgrims from around the world.

      <br><br>

      The state's handicrafts are celebrated for their craftsmanship and artistic excellence. Kalamkari, a traditional
      form of hand-painted or block-printed cotton textile, and Kondapalli toys, crafted from softwood and painted in
      vibrant colors, are notable examples. Handloom weaving, especially the production of Pochampally and Venkatagiri
      sarees, showcases the region's textile heritage and the skill of its artisans.

      <br><br>

      <br><br>`,
    "inar": `<h1>Welcome to Arunanchal Pradesh!</h1>
      <img src="photos/ar.png" style="max-width: 700px;"><br>
      Arunachal Pradesh, located in northeastern India, is celebrated for its breathtaking natural landscapes, rich
      cultural diversity, and vibrant traditions. The culture of Arunachal Pradesh is deeply rooted in its indigenous
      tribal communities, each with its own distinct customs, languages, and rituals.
      <br><br>
      The state celebrates a multitude of festivals that showcase its cultural richness and community spirit. Festivals
      such as Losar, Ziro Music Festival, and Nyokum are prominent, marked by traditional dances, folk songs, and
      rituals that celebrate harvests, ward off evil spirits, and honor local deities.
      <br><br>
      Arunachal Pradesh's cuisine reflects its tribal heritage and local produce, featuring dishes like Apong (rice
      beer), Thukpa (noodle soup), Momos (dumplings), and smoked meats. These dishes highlight the region's agricultural
      practices and reliance on natural resources for sustenance.
      <br><br>
      Music and dance are integral to Arunachal Pradesh's cultural fabric, with folk dances like Aji Lamu, Buiya, and
      Popir being performed during festivals and social gatherings. These dances, characterized by colorful attire and
      rhythmic movements, preserve tribal narratives and cultural identities.
      <br><br>
      The state's religious and spiritual practices are centered around Buddhist monasteries, Hindu temples, and
      indigenous animistic beliefs. Tawang Monastery, one of the largest monasteries in India, is a significant
      pilgrimage site and center of Buddhist learning in the region.
      <br><br>
      Arunachal Pradesh's natural beauty, including snow-capped mountains, lush valleys, and pristine rivers, provides a
      scenic backdrop for cultural exploration and eco-tourism activities. Trekking, birdwatching, and exploring tribal
      villages offer travelers opportunities to immerse themselves in local traditions and lifestyles.
      <br><br>
      The state's handicrafts, such as bamboo and cane products, traditional weavings, and intricate beadwork, showcase
      the artistic skills and cultural heritage of its tribal artisans. These crafts play a crucial role in the economic
      livelihoods of local communities and contribute to preserving cultural traditions.`,

    "inas": `<h1>Welcome to Assam!</h1>
      <img src="photos/as.png" style="max-width: 700px;"><br>
      Assam, situated in northeastern India, is renowned for its rich cultural heritage, lush landscapes, and vibrant
      traditions. The culture of Assam is a fascinating blend of indigenous tribal customs, Assamese traditions, and
      influences from neighboring regions.
      <br><br>
      Festivals play a pivotal role in Assam's cultural calendar, with Bihu being the most important. Celebrated thrice
      a year—Rongali Bihu (spring), Bhogali Bihu (harvest), and Kongali Bihu (autumn)—Bihu festivities feature
      traditional dances like Bihu dance and songs known as Bihu Geet. These celebrations mark agricultural cycles,
      cultural harmony, and communal bonding.
      <br><br>
      Assamese cuisine is diverse and flavorful, known for its use of rice, fish, and fresh vegetables. Staple dishes
      include Assam Tea, Masor Tenga (sour fish curry), and Pitha (rice cakes). Assam's cuisine reflects its agrarian
      lifestyle and the abundance of natural resources.
      <br><br>
      Music and dance are integral to Assam's cultural identity, with classical forms like Sattriya dance, performed in
      Vaishnavite monasteries, and folk dances like Jhumur and Ojapali depicting tales of love, valor, and rural life.
      The Borgeet, devotional songs composed by Srimanta Sankardeva, are also significant in Assamese music.
      <br><br>
      Assam's architectural heritage includes ancient temples like Kamakhya Temple, dedicated to the Goddess Kamakhya,
      and the Ahom-era monuments such as Rang Ghar and Kareng Ghar in Sivasagar, which showcase the state's historical
      and religious prominence.
      <br><br>
      The state's natural beauty is exemplified by its tea gardens, wildlife sanctuaries like Kaziranga National Park
      (famous for one-horned rhinos), and the mighty Brahmaputra River. Assam's eco-tourism opportunities attract nature
      enthusiasts and wildlife photographers from around the world.
      <br><br>
      Handicrafts such as Assamese silk (including Muga and Eri silk), bamboo and cane products, and traditional
      Assamese jewelry like Gam Kharu (bangles) and Jon Biri (necklaces) highlight the artistic skills and cultural
      heritage of Assam's artisans.`,

    "inbr": `<h1>Welcome to Bihar!</h1>
      <img src="photos/br.png" style="max-width: 700px;"><br>
      Bihar, situated in eastern India, is renowned for its deep cultural roots, vibrant festivals, and historical
      significance. The state's culture is a tapestry woven with ancient traditions, spiritual practices, and artistic
      expressions that reflect its diverse heritage. Festivals such as Chhath Puja, revered for its rituals honoring the
      Sun God, and the Sonepur Mela, one of Asia's largest cattle fairs, are celebrated with fervor and draw visitors
      from far and wide.
      <br><br>
      Bihari cuisine is a delightful fusion of flavors and textures, characterized by dishes like Litti Chokha, a savory
      stuffed bread served with mashed vegetables, and Sattu Paratha, made from roasted gram flour. These dishes
      highlight Bihar's agrarian lifestyle and the ingenuity of its culinary traditions.
      <br><br>
      Music and dance play an integral role in Bihar's cultural fabric, with folk arts like Jat-Jatin, Jhumar, and
      Soharaiya adding rhythm and color to social gatherings and festive occasions. These performances often reflect
      themes of rural life, love, and devotion, resonating deeply with the local communities.
      <br><br>
      Bihar's historical significance is underscored by ancient sites like Nalanda and Vikramshila, renowned centers of
      learning in ancient India and UNESCO World Heritage Sites today. These sites attract scholars and history
      enthusiasts alike, showcasing Bihar's intellectual prowess and scholarly achievements in fields ranging from
      Buddhism to mathematics and astronomy.
      <br><br>
      The state is also famous for its vibrant folk arts and crafts, including the intricate Madhubani paintings,
      renowned for their intricate designs and vivid colors depicting mythological themes and everyday life. Other
      crafts such as Tikuli art, Manjusha paintings, and traditional pottery reflect the artistic prowess and cultural
      diversity of Bihar's artisans.`,

    "inch": `<h1>Welcome to Chandigarh!</h1>
      <img src="photos/ch.png" style="max-width: 700px;"><br>
      Chandigarh, the capital city of both Punjab and Haryana, is a Union Territory of India known for its unique blend
      of modernity and tradition. Designed by the famous architect Le Corbusier, Chandigarh stands out for its urban
      planning, architectural excellence, and cultural vibrancy.

      <br><br>

      Festivals in Chandigarh are celebrated with great enthusiasm, reflecting its diverse cultural heritage. Baisakhi,
      marking the harvest season, is a major festival celebrated with traditional music, dance, and feasting. Other
      significant festivals include Diwali, Holi, and Lohri, each celebrated with colorful decorations, cultural
      performances, and community gatherings. The Chandigarh Carnival, held annually, showcases the city's cultural
      diversity with parades, art exhibitions, and performances by local artists.

      <br><br>

      The cuisine of Chandigarh is a delightful mix of Punjabi and North Indian flavors. Rich and hearty dishes like
      butter chicken, sarson ka saag (mustard greens), and makki di roti (cornbread) are popular. Street food such as
      chole bhature (spicy chickpeas with fried bread), golgappas (pani puri), and tikki (potato patties) are beloved by
      locals and visitors alike. The city's culinary scene also includes a variety of international cuisines, reflecting
      its cosmopolitan nature.

      <br><br>

      Music and dance are integral to Chandigarh's cultural life. Traditional Punjabi music and dance forms like Bhangra
      and Giddha are widely performed during festivals and celebrations, characterized by their high energy and vibrant
      costumes. Classical music and dance, including performances of Hindustani classical music and Kathak, also have a
      strong presence in the city's cultural scene. The annual Chandigarh Arts and Heritage Festival is a major event
      that features performances by renowned artists from across India.

      <br><br>

      Chandigarh’s architectural heritage is a testament to its modernist design and urban planning. Key landmarks
      include the Capitol Complex, a UNESCO World Heritage site featuring the High Court, Secretariat, and Legislative
      Assembly buildings. The Open Hand Monument, a symbol of peace and reconciliation, and the Rock Garden, an
      innovative space created from industrial and urban waste, are other notable attractions. The city's layout, with
      its sectors and wide boulevards, reflects Le Corbusier's vision of an ideal urban space.

      <br><br>

      Handicrafts in Chandigarh are influenced by the rich traditions of Punjab and Haryana. Phulkari embroidery, known
      for its vibrant colors and intricate patterns, is a popular craft. Woodwork, pottery, and traditional Punjabi
      juttis (footwear) are also notable handicrafts that reflect the region's cultural heritage. The city's markets and
      fairs often showcase these artisanal products, offering visitors a chance to purchase unique and handcrafted
      items.

      <br><br>

      Overall, Chandigarh’s culture is a harmonious blend of tradition and modernity. It offers a unique cultural
      experience through its vibrant festivals, delectable cuisine, dynamic arts scene, and innovative architecture. The
      city's commitment to preserving its cultural heritage while embracing contemporary influences makes Chandigarh a
      fascinating and welcoming destination for travelers and culture enthusiasts alike.`,

    "inct": `<h1>Welcome to Chattisgarh!</h1>
      <img src="photos/ct.png" style="max-width: 700px;"><br>
      Chhattisgarh, located in central India, is known for its rich cultural heritage, tribal diversity, and natural
      landscapes. The culture of Chhattisgarh is deeply rooted in its ancient traditions, folk arts, festivals, and
      culinary delights. Festivals such as Bastar Dussehra, Madai, and Hareli are celebrated with great enthusiasm,
      showcasing the state's vibrant cultural traditions and community spirit.
      <br><br>
      Chhattisgarhi cuisine is known for its flavorsome dishes, including specialties like Farra, Chousera Roti, and
      Sabudana Khichdi, which reflect the region's agricultural abundance and traditional cooking techniques. The
      cuisine varies across the state, influenced by its diverse tribal communities and local ingredients.
      <br><br>
      Music and dance play a significant role in Chhattisgarh's cultural landscape, with folk forms like Pandwani, Raut
      Nacha, and Karma Dance reflecting the cultural narratives, myths, and rituals of the region's tribal communities.
      These performances are marked by colorful attire, rhythmic beats, and storytelling elements that captivate
      audiences.
      <br><br>
      Chhattisgarh's architectural heritage includes ancient temples like the Bhoramdeo Temple and Sirpur Group of
      Monuments, which highlight the state's historical and religious significance. These sites attract history
      enthusiasts and pilgrims alike, showcasing intricate stone carvings and architectural styles from different
      periods.
      <br><br>
      The state is also renowned for its vibrant arts and crafts, including Dhokra metalwork, Pithora paintings, and
      Bastar handicrafts, which demonstrate the artistic skills and cultural richness of its tribal artisans. These
      crafts not only serve as decorative items but also have ritualistic and cultural significance within the
      communities.`,
      "indh":`<h1>Welcome to Daman and Diu and Dadar and Nagar Haveli!</h1>
      <img src="photos/dh.png" style="max-width: 700px;"><br>
      <h3>Daman and Diu</h3>
      Daman and Diu, located on the western coast of India, are two separate districts that form a single Union
      Territory. Known for their picturesque landscapes, colonial architecture, and vibrant cultural heritage, these
      regions reflect a blend of Portuguese and Indian influences.<br>

      Festivals in Daman and Diu are celebrated with enthusiasm and showcase the regions' cultural diversity. Nariyal
      Poornima, celebrated by the fishing community, marks the end of the monsoon season with colorful boat races and
      cultural performances. Christmas and New Year are celebrated with great fervor, reflecting the Portuguese
      heritage. Navratri and Diwali are also significant festivals, celebrated with traditional music, dance, and
      feasting.<br>

      The cuisine of Daman and Diu is a delightful mix of Gujarati, Maharashtrian, and Portuguese flavors. Seafood is a
      staple, with dishes like prawn curry, fish fry, and calamari being popular. Other traditional dishes include
      Dhokla, Thepla, and Bebinca, a Portuguese-influenced dessert. The cuisine reflects the regions' coastal location
      and cultural influences.<br>

      Music and dance in Daman and Diu are integral to their cultural heritage. Traditional dance forms like Garba and
      Dandiya Raas are performed during festivals and celebrations, showcasing the regions' Gujarati influence. The
      Portuguese legacy is evident in the music, with traditional Portuguese instruments and folk songs being a part of
      the cultural landscape.<br>

      Architectural heritage in Daman and Diu includes colonial-era forts, churches, and other structures. The Fort of
      Moti Daman, the Fort of St. Jerome in Nani Daman, and the Church of Bom Jesus are notable landmarks reflecting the
      regions' historical and architectural significance. These sites offer a glimpse into the regions' colonial past
      and cultural heritage.<br>

      Handicrafts from Daman and Diu include intricate shell crafts, bamboo products, and traditional embroidery. These
      crafts are a testament to the regions' artistic skills and cultural heritage, offering unique souvenirs for
      visitors.<br>

      <h3>Dadra and Nagar Haveli</h3>
      Dadra and Nagar Haveli, nestled between the states of Gujarat and Maharashtra, is a Union Territory known for its
      lush landscapes, tribal heritage, and cultural diversity. The culture of this region is characterized by its
      indigenous traditions, folk arts, and vibrant festivals.<br>

      Festivals in Dadra and Nagar Haveli are celebrated with great zeal and reflect the region's tribal heritage. The
      Tarpa Festival, celebrated by the Warli tribe, features traditional dances, music, and communal feasting. Diwali,
      Holi, and Navratri are also significant festivals, marked by vibrant celebrations and cultural performances that
      bring together the diverse communities of the region.<br>

      The cuisine of Dadra and Nagar Haveli is a blend of tribal, Gujarati, and Maharashtrian influences. Traditional
      dishes include Bhakri (millet bread), Patal Bhaji (leafy vegetable curry), and Ubadiyu (a mixed vegetable dish).
      The use of local ingredients and traditional cooking methods reflects the region's culinary heritage.<br>

      Music and dance are integral to the cultural life of Dadra and Nagar Haveli. Traditional dance forms like Tarpa,
      performed during festivals and celebrations, are characterized by rhythmic movements and vibrant costumes. Folk
      music, often accompanied by instruments like the tarpa (a wind instrument) and dhol (drum), is a vital part of the
      region's cultural expression.<br>

      Architectural heritage in Dadra and Nagar Haveli includes ancient tribal structures and colonial-era buildings.
      The Tribal Cultural Museum in Silvassa showcases the region's tribal heritage, displaying traditional artifacts,
      tools, and art. The region's natural beauty is enhanced by its lush forests, rivers, and hills, offering
      picturesque settings and opportunities for eco-tourism.<br>

      Handicrafts from Dadra and Nagar Haveli include Warli paintings, bamboo products, and traditional jewelry. These
      crafts are a reflection of the region's tribal artistry and cultural heritage, offering unique and authentic
      souvenirs for visitors.<br>

      <h3>Conclusion</h3>
      Daman and Diu, and Dadra and Nagar Haveli, each offer a rich cultural tapestry that blends indigenous traditions,
      colonial influences, and vibrant festivals. Their unique cuisines, music and dance forms, architectural heritage,
      and traditional handicrafts reflect the diverse and dynamic cultures of these Union Territories. Visitors are
      invited to explore and experience the rich cultural heritage, natural beauty, and warm hospitality of these
      regions, making them captivating destinations in India.
      <br><br>`,

      "indl":`<h1>Welcome to Delhi!</h1>
      <img src="photos/dl.png" style="max-width: 700px;"><br>
      Delhi, the capital city of India, is a vibrant and diverse metropolis that blends ancient history with modernity.
      Known for its rich cultural heritage, historical landmarks, and dynamic lifestyle, Delhi offers a unique cultural
      experience to its residents and visitors.

      <br><br>

      Festivals in Delhi are celebrated with great enthusiasm, reflecting the city's multicultural fabric. Diwali, the
      Festival of Lights, sees the city illuminated with lamps, decorations, and fireworks. Holi, the Festival of
      Colors, is celebrated with vibrant colors, music, and dance. Other significant festivals include Eid, Christmas,
      Guru Nanak Jayanti, and Durga Puja, each celebrated with traditional rituals, feasts, and cultural performances.
      The city also hosts the Republic Day Parade, showcasing India's military might and cultural diversity.

      <br><br>

      The cuisine of Delhi is a delightful mix of Mughlai, Punjabi, and street food flavors. Iconic dishes include
      Butter Chicken, Chole Bhature, Biryani, and Kebabs. The city's street food scene is legendary, with offerings like
      Chaat, Golgappas, Parathas, and Jalebis. Chandni Chowk, one of Delhi's oldest markets, is a food lover's paradise,
      offering a wide variety of traditional dishes. The city's culinary landscape also includes international cuisines,
      reflecting its cosmopolitan nature.

      <br><br>

      Music and dance are integral to Delhi's cultural life. Classical music and dance forms like Hindustani classical
      music, Kathak, and Bharatanatyam are regularly performed at cultural festivals and events. The city's vibrant arts
      scene also includes contemporary music, dance, and theater, with venues like the India Habitat Centre and Kamani
      Auditorium hosting performances by renowned artists. The annual Delhi International Arts Festival showcases a
      diverse range of artistic expressions from around the world.

      <br><br>

      Delhi’s architectural heritage is a testament to its rich history and cultural legacy. The city is home to several
      UNESCO World Heritage Sites, including the Red Fort, Humayun's Tomb, and Qutub Minar. Other notable landmarks
      include the India Gate, Lotus Temple, and Akshardham Temple. The blend of Mughal, British, and modern architecture
      reflects Delhi's historical evolution and cultural diversity. The city's museums, such as the National Museum and
      the National Gallery of Modern Art, offer insights into India's artistic and historical heritage.

      <br><br>

      Handicrafts in Delhi are renowned for their craftsmanship and variety. The city is a hub for traditional Indian
      crafts, including handloom textiles, pottery, jewelry, and leather goods. Dilli Haat, an open-air market,
      showcases handicrafts from different states of India, offering a unique shopping experience. The city's markets,
      such as Connaught Place, Janpath, and Lajpat Nagar, are popular destinations for those seeking traditional and
      contemporary crafts.

      <br><br>

      Overall, Delhi's culture is a dynamic blend of tradition and modernity. It offers a rich cultural experience
      through its vibrant festivals, diverse cuisine, dynamic arts scene, and historical landmarks. The city's
      commitment to preserving its cultural heritage while embracing contemporary influences makes Delhi a fascinating
      and welcoming destination for travelers and culture enthusiasts alike.`,

      "inga":`<h1>Welcome to Goa!</h1>
      <img src="photos/ga.png" style="max-width: 700px;"><br>
      Goa, situated on the western coast of India, is renowned for its rich cultural heritage, stunning beaches, and
      vibrant festivities. The culture of Goa is a unique blend of Portuguese and Indian influences, reflected in its
      architecture, cuisine, music, and festivals.

      <br><br>

      Festivals play a significant role in Goa's cultural calendar. The most famous festival is Carnival, a four-day
      extravaganza held annually before Lent. It features colorful parades, music, dance, and elaborate floats,
      showcasing Goa's joyous spirit and cultural diversity. Shigmo, a spring festival celebrated with processions and
      folk dances, and Sao Joao, where locals jump into wells to celebrate St. John the Baptist, are other notable
      celebrations that highlight Goa's religious and cultural heritage.

      <br><br>

      Goan cuisine is a delightful fusion of Indian and Portuguese flavors, known for its seafood delicacies, spicy
      curries, and use of coconut milk. Staple dishes include Goan fish curry, Vindaloo (spicy pork dish), and Xacuti
      (chicken or lamb curry with roasted spices). Feni, a locally brewed liquor made from cashew or coconut, is a
      popular beverage enjoyed during festive occasions.

      <br><br>

      Music and dance are integral to Goan culture, with traditional folk dances like Fugdi and Dekhnni adding vibrancy
      to celebrations. Goan music, influenced by Portuguese melodies and rhythms, features the use of instruments like
      the guitar, mandolin, and the traditional Goan drum known as the Ghumot. Konkani music, with its lively tunes and
      poetic lyrics, is a cherished part of Goa's cultural identity.

      <br><br>

      Goa's architectural heritage includes colonial-era churches, majestic forts, and charming Portuguese-style houses
      with colorful facades. The Basilica of Bom Jesus, a UNESCO World Heritage site housing the mortal remains of St.
      Francis Xavier, and the Se Cathedral, known for its grandeur and historical significance, are iconic landmarks.
      Old Goa, with its rich concentration of churches and convents, provides a glimpse into the state's colonial past.

      <br><br>

      Handicrafts in Goa range from intricate brass and copperware to handmade pottery and traditional handicrafts made
      from coconut shells and bamboo. The Kunbi saree, adorned with traditional motifs and patterns, and the vibrant
      Mario Miranda art, depicting Goan life through colorful illustrations, are notable cultural artifacts. These
      crafts showcase the skill and creativity of local artisans, preserving Goa's cultural heritage.

      <br><br>`,

      "ingj":`<h1>Welcome to Gujarat!</h1>
      <img src="photos/gj.png" style="max-width: 700px;"><br>
      Gujarat, located on the western coast of India, is renowned for its rich cultural heritage, vibrant festivals, and
      entrepreneurial spirit. From its ancient Indus Valley Civilization roots to its modern-day industrial
      advancements, Gujarat offers a tapestry of traditions, art forms, cuisine, and architectural marvels.

      <br><br>

      Festivals in Gujarat are celebrated with great zeal and are an integral part of its cultural fabric. Navratri, a
      nine-night festival dedicated to Goddess Durga, is celebrated with colorful traditional dances like Garba and
      Dandiya Raas. The International Kite Festival during Uttarayan (Makar Sankranti) attracts kite enthusiasts from
      around the world to cities like Ahmedabad and Vadodara. Other festivals such as Diwali, Holi, and Janmashtami are
      also celebrated with fervor, showcasing Gujarat's cultural diversity and unity.

      <br><br>

      Gujarati cuisine is diverse and flavorful, with influences from Jain, Hindu, and Muslim culinary traditions.
      Staple foods include dal (lentils), roti (flatbread), rice, and vegetables, often accompanied by spicy pickles and
      chutneys. Dhokla, Khandvi, Undhiyu, and Fafda-Jalebi are popular Gujarati delicacies. The state is also famous for
      its sweets like Mohanthal, Basundi, and Ghevar, reflecting its love for rich desserts.

      <br><br>

      Music and dance are vibrant aspects of Gujarat's cultural heritage. Garba, a traditional dance form performed
      during Navratri, involves rhythmic circular movements and vibrant costumes. Raas, another dance form associated
      with Krishna, is also popular during festivals. Folk music genres like Bhajan, Sugam Sangeet, and Garbi are deeply
      rooted in Gujarat's cultural traditions, expressing themes of devotion, love, and everyday life.

      <br><br>

      Gujarat's architectural heritage is marked by a blend of ancient and modern structures. The state is home to
      iconic sites such as the Rani ki Vav (Queen's Stepwell) in Patan, a UNESCO World Heritage site known for its
      intricate carvings and water conservation features. Other architectural marvels include the Sun Temple in Modhera,
      Jain temples at Palitana, and the Sabarmati Ashram in Ahmedabad, associated with Mahatma Gandhi's life and
      teachings.

      <br><br>

      Handicrafts in Gujarat are celebrated for their craftsmanship and intricate designs. The state is famous for its
      Bandhani (tie-and-dye) textiles, Patola silk sarees, embroidered garments like Chaniya Choli, and mirror work
      embroidery. Wood carving, pottery, and metal crafts like bell metal utensils are also prominent. Artisans in
      villages like Bhuj and Kutch create exquisite handicrafts, showcasing Gujarat's artistic heritage and
      craftsmanship.

      <br><br>

      Natural beauty adds to Gujarat's charm, with diverse landscapes ranging from the salt flats of the Rann of Kutch
      to the Gir Forest National Park, home to Asiatic lions. The coastline offers scenic beaches like Mandvi, Dwarka,
      and Somnath, attracting tourists and pilgrims alike. Gujarat's wildlife sanctuaries, including Gir and Velavadar,
      provide opportunities for eco-tourism and wildlife conservation efforts.

      <br><br>

      In conclusion, Gujarat's culture is a vibrant tapestry woven with festivals, cuisine, music, dance, architecture,
      handicrafts, and natural beauty. Its rich heritage and progressive outlook make it a captivating destination for
      travelers seeking to explore India's cultural diversity and historical legacy.`,

      "inhp":`<h1>Welcome to Himachal Pradesh!</h1>
      <img src="photos/hp.png" style="max-width: 700px;"><br>
      Himachal Pradesh, nestled in the lap of the Himalayas, is renowned for its breathtaking landscapes, rich cultural
      heritage, and serene spirituality. This northern Indian state offers a unique blend of traditional hill culture,
      adventure tourism, and spiritual retreats, making it a beloved destination for travelers seeking natural beauty
      and cultural experiences.

      <br><br>

      Festivals in Himachal Pradesh are vibrant celebrations that reflect its cultural diversity and deep-rooted
      traditions. The state celebrates various festivals throughout the year, with each region showcasing its unique
      rituals and customs. The Kullu Dussehra, celebrated in the Kullu Valley, is particularly famous for its week-long
      festivities, cultural performances, and processions of deities from local temples. Other significant festivals
      include Diwali, Lohri, and Losar (Tibetan New Year), each bringing communities together in joyful celebrations.

      <br><br>

      Himachali cuisine is hearty and reflects the region's mountainous terrain and agricultural practices. Staple foods
      include rice, wheat, and maize, often served with dal (lentils) and vegetables. Dishes like Siddu (steamed bread),
      Dham (a traditional meal served during festivals), Chana Madra (chickpea curry), and Babru (black gram pancakes)
      are popular. Apples and cherries from Himachal's orchards are famous, contributing to the state's reputation for
      fresh and delicious produce.

      <br><br>

      Music and dance are integral to Himachali culture, with each district having its own distinct folk traditions. The
      Nati dance, performed with simple yet elegant footwork and accompanied by traditional instruments like the dhol
      and nagara, is a popular folk dance form. Various folk songs, including Kangri and Chamba Rumal songs, narrate
      tales of love, nature, and everyday life in the hills. These cultural expressions play a significant role in
      preserving Himachal's cultural identity and heritage.

      <br><br>

      Himachal Pradesh's architectural heritage is characterized by its traditional wooden temples, hilltop forts, and
      colonial-era buildings. The temples of Chamba, such as Lakshmi Narayan Temple and Chamunda Devi Temple, exhibit
      exquisite Himachali architecture with intricate wood carvings and stone sculptures. Shimla, the former summer
      capital of British India, features colonial buildings like the Viceregal Lodge and Christ Church, blending British
      and local architectural styles.

      <br><br>

      Handicrafts in Himachal Pradesh showcase the artistic skills of its people, with products ranging from hand-woven
      shawls (such as Kullu shawls and Chamba rumals) to metalwork, pottery, and woodcarving. The Kangra School of
      miniature paintings, known for its intricate detailing and vibrant colors, is another hallmark of Himachali
      craftsmanship. These handicrafts not only serve as cultural symbols but also contribute to the livelihoods of
      artisans across the state.

      <br><br>

      Himachal Pradesh's natural beauty is unparalleled, with snow-capped mountains, lush valleys, glistening rivers,
      and serene lakes attracting nature lovers and adventure enthusiasts. Popular destinations like Manali, Shimla,
      Dharamshala, and Dalhousie offer opportunities for trekking, skiing, paragliding, and spiritual retreats amidst
      pristine surroundings. The state's biodiversity, including wildlife sanctuaries like Great Himalayan National
      Park, adds to its allure as a haven for eco-tourism and wildlife conservation.

      <br><br>

      In conclusion, Himachal Pradesh's culture is a harmonious blend of spirituality, traditional hill life, artistic
      expressions, and natural splendor. Its festivals, cuisine, music, dance, architecture, handicrafts, and landscapes
      offer a captivating glimpse into the soul of the Himalayas, making it a cherished destination for travelers
      seeking both adventure and cultural immersion in India.`,

      "inhr":`<h1>Welcome to Haryana!</h1>
      <img src="photos/hr.png" style="max-width: 700px;"><br>
      Haryana, located in northern India, is a state rich in cultural heritage, history, and agricultural prosperity.
      Known for its vibrant festivals, traditional art forms, and significant historical sites, Haryana offers a unique
      glimpse into North Indian culture and traditions.

      <br><br>

      Festivals in Haryana are celebrated with great enthusiasm and reflect the state's cultural diversity and
      agricultural roots. Baisakhi, marking the harvest season, is a major festival celebrated with folk music, dance
      performances like Ghoomar and Phag Dance, and traditional festivities. Teej, celebrated predominantly by women,
      involves vibrant processions, swings adorned with flowers, and cultural performances that celebrate monsoon rains
      and marital bliss. Other festivals such as Diwali, Holi, and Navratri are also celebrated with fervor, showcasing
      Haryana's rich cultural tapestry.

      <br><br>

      Haryanvi cuisine is known for its robust flavors and rustic simplicity, influenced by the state's agricultural
      abundance. Staple foods include wheat-based bread like Roti and Paratha, often accompanied by vegetables, pulses,
      and dairy products. Dishes like Kadhi Pakora, Bajra Khichdi, and Singri ki Sabzi (drumstick curry) are popular.
      Milk-based sweets such as Kheer and Rabri are enjoyed during festivals and special occasions, reflecting Haryana's
      culinary traditions.

      <br><br>

      Music and dance are integral to Haryana's cultural heritage, with traditional folk forms playing a significant
      role in celebrations and social gatherings. The Ragini music tradition, characterized by lyrical compositions that
      narrate tales of love and valor, is a prominent aspect of Haryanvi music. Folk dances like Ghoomar, Saang, Phag,
      and Dhamal are performed during festivals and weddings, accompanied by traditional instruments like Dholak,
      Harmonium, and Chimta (tongs). These cultural expressions embody the spirit and ethos of rural Haryana.

      <br><br>

      Haryana's architectural heritage is marked by ancient temples, forts, and monuments that reflect its historical
      significance. The Kurukshetra region, known for its association with the Mahabharata, features archaeological
      sites like the Bhishma Kund and Kurukshetra War Memorial. The Surajkund Mela, held annually near Faridabad,
      showcases traditional crafts, cultural performances, and cuisine from across India, attracting visitors from
      around the world.

      <br><br>

      Handicrafts in Haryana are renowned for their craftsmanship and artistic excellence. The state is known for its
      pottery, weaving (particularly of durries and rugs), metalwork, and Phulkari embroidery. Artisans in regions like
      Panipat and Hisar create exquisite textiles, carpets, and leather goods, contributing to Haryana's rich artisanal
      heritage. These handicrafts not only serve as cultural symbols but also support local livelihoods and promote
      traditional craftsmanship.

      <br><br>

      Natural beauty adds to Haryana's charm, with lush green fields, seasonal rivers, and serene rural landscapes
      defining its scenic allure. The Sultanpur Bird Sanctuary, a haven for migratory birds, and the Damdama Lake near
      Gurgaon offer opportunities for birdwatching, boating, and picnicking amidst natural surroundings. The state's
      agricultural prosperity and commitment to sustainable development contribute to its eco-tourism potential and
      biodiversity conservation efforts.

      <br><br>

      In conclusion, Haryana's culture is a vibrant mosaic of festivals, cuisine, music, dance, architecture,
      handicrafts, and natural beauty. Its rich cultural heritage and agricultural traditions make it a compelling
      destination for travelers seeking to explore North Indian culture and experience the warmth of Haryanvi
      hospitality.`,

      "injh":`<h1>Welcome to Jharkhand!</h1>
      <img src="photos/jh.png" style="max-width: 700px;"><br>
      Jharkhand, located in eastern India, is a state known for its rich tribal heritage, natural resources, and
      cultural diversity. The land of forests and hills, Jharkhand's culture is deeply rooted in its tribal traditions,
      folk art forms, festivals, and historical landmarks.

      <br><br>

      Festivals in Jharkhand are vibrant celebrations that highlight the state's cultural diversity and traditional
      practices. Sarhul, a spring festival celebrated by tribal communities, marks the beginning of the agricultural
      season with prayers to the Earth Goddess. The Tusu Parab festival, dedicated to the deity Tusu, involves singing
      traditional songs and offering prayers for a good harvest. Karma Puja, celebrated by Oraon and Munda tribes, is
      another significant festival characterized by communal dancing, singing, and rituals.

      <br><br>

      Jharkhandi cuisine is influenced by its tribal communities and agricultural lifestyle. Rice is a staple food,
      often accompanied by dal (lentils), vegetables, and seasonal greens. Dishes like Chhilka Roti (rice flour bread),
      Handia (rice beer), and Pittha (dumplings) are popular among locals. The use of locally sourced ingredients and
      traditional cooking methods reflect the state's culinary heritage.

      <br><br>

      Music and dance form an integral part of Jharkhand's cultural expressions. Tribal music genres like Dhols,
      Nagaras, and Banam (a string instrument) are used in folk songs that narrate tales of nature, bravery, and daily
      life. Dance forms like Chhau, Seraikella Chhau, and Jhumair are performed during festivals and cultural events,
      showcasing intricate footwork, vibrant costumes, and rhythmic movements. These cultural practices are passed down
      through generations, preserving Jharkhand's unique artistic heritage.

      <br><br>

      Jharkhand's architectural heritage includes ancient temples, rock art, and archaeological sites that reflect its
      historical significance. The Parasnath Hill in Giridih is revered by Jains and features Jain temples dating back
      to the 18th century. The Palamau Fort, an ancient fortification in Latehar district, and the rock paintings of
      Isko, depicting prehistoric life, are notable examples of Jharkhand's archaeological wealth.

      <br><br>

      Handicrafts in Jharkhand showcase the artistic skills of its tribal communities, with products ranging from
      hand-woven textiles (such as Tussar silk sarees) to bamboo and woodcrafts. Dokra metal craft, known for its
      intricate designs and traditional methods of casting, is a highlight of Jharkhandi handicrafts. Artisans in
      regions like Hazaribagh and Dumka create unique artworks that blend tradition with contemporary designs,
      contributing to the state's cultural heritage and rural economy.

      <br><br>

      Natural beauty is abundant in Jharkhand, with lush forests, waterfalls, and wildlife sanctuaries offering scenic
      landscapes and eco-tourism opportunities. The Betla National Park, renowned for its tiger population and diverse
      flora and fauna, attracts nature enthusiasts and wildlife photographers. Rivers like Subarnarekha, Damodar, and
      Mayurakshi provide picturesque settings for boating, fishing, and picnicking, adding to the state's natural charm.

      <br><br>

      In conclusion, Jharkhand's culture is a tapestry of tribal traditions, festivals, cuisine, music, dance,
      handicrafts, and natural beauty. Its deep-rooted heritage and artistic expressions make it a fascinating
      destination for travelers seeking to explore India's tribal culture and experience the serenity of its natural
      landscapes.`,

      "injk":`<h1>Welcome to Jammu and Kashmir!</h1>
      <img src="photos/jk.png" style="max-width: 700px;"><br>
      Jammu and Kashmir, located in the northernmost part of India, is known for its stunning landscapes, diverse
      culture, and rich history. It is divided into three regions: Jammu, Kashmir Valley, and Ladakh, each offering
      unique cultural experiences and natural beauty.

      <br><br>

      Jammu: Jammu is known for its temples, shrines, and historic forts. The region is culturally diverse, with
      influences from Hindu, Sikh, and Muslim traditions. The Vaishno Devi Temple, a pilgrimage site dedicated to
      Goddess Vaishnavi, attracts millions of devotees annually. Other significant temples include Raghunath Temple,
      Bahu Fort, and Ranbireshwar Temple. Jammu's cuisine features dishes like Rajma Chawal, Kaladi Kulcha, and Dogra
      cuisine specialties.

      <br><br>

      Kashmir Valley: The Kashmir Valley is renowned for its breathtaking landscapes, including serene lakes like
      Dal Lake and Wular Lake, surrounded by the Himalayas. Srinagar, the summer capital, is famous for its houseboats,
      Mughal gardens (such as Shalimar Bagh and Nishat Bagh), and the historic Shankaracharya Temple. Kashmiri cuisine
      is known for its aromatic dishes like Rogan Josh, Yakhni, and Wazwan, a traditional multi-course meal served
      during weddings and festivals.

      <br><br>

      Ladakh: Ladakh is a high-altitude desert known for its Tibetan Buddhist culture and stunning landscapes. The
      region's monasteries, including Hemis, Thiksey, and Diskit, are centers of Buddhist spirituality and architecture.
      Leh, the largest town in Ladakh, offers trekking opportunities, Buddhist festivals like Hemis Festival, and
      panoramic views of the Himalayas. Ladakhi cuisine features dishes like Momos, Thukpa (noodle soup), and Skyu (a
      hearty stew).

      <br><br>

      Cultural festivals in Jammu and Kashmir include Baisakhi, Eid, Diwali, and Navratri, celebrated with traditional
      music, dance, and rituals that reflect the region's religious and cultural diversity. Handicrafts such as Pashmina
      shawls, Kashmiri carpets, wooden artifacts, and papier-mâché items are famous worldwide for their craftsmanship
      and intricate designs.

      <br><br>

      Despite its scenic beauty and cultural richness, the region has faced challenges related to political instability.
      However, efforts are continually made to promote tourism and preserve its unique cultural heritage, making Jammu
      and Kashmir a captivating destination for travelers seeking both natural beauty and cultural experiences in India.`,

      "inka":`<h1>Welcome to Karnataka!</h1>
      <img src="photos/ka.png" style="max-width: 700px;"><br>

      Karnataka, located in southern India, is renowned for its rich cultural heritage, diverse traditions, and
      historical significance. The culture of Karnataka is a vibrant tapestry woven from the customs, arts, festivals,
      and cuisine of its various communities, reflecting its ancient roots and dynamic present.

      <br><br>

      Festivals are integral to Karnataka's cultural fabric. Mysuru Dasara, celebrated in Mysore, is a grand spectacle
      featuring a procession of caparisoned elephants, cultural performances, and vibrant festivities, honoring the
      victory of good over evil. Ugadi, the Kannada New Year, is marked with rituals, traditional feasts, and the
      decoration of homes with mango leaves and rangoli designs. The state also celebrates Ganesh Chaturthi, Navaratri,
      and Deepavali with fervor, showcasing its religious diversity and cultural richness.

      <br><br>

      Karnataka’s cuisine is a delightful blend of flavors and ingredients. Traditional dishes like Bisi Bele Bath
      (spicy rice and lentil dish), Ragi Mudde (finger millet balls), and Mysore Pak (sweet made from gram flour and
      ghee) are popular across the state. Coastal Karnataka is famous for its seafood delicacies, including Mangalorean
      fish curry and Neer Dosa (rice crepes). The cuisine reflects Karnataka's agricultural abundance and culinary
      innovation.

      <br><br>

      Music and dance are integral to Karnataka’s cultural heritage. Classical dance forms like Bharatanatyam,
      Kuchipudi, and Kathakali are practiced and performed with grace and precision. Yakshagana, a traditional
      dance-drama form, and Dollu Kunitha, a dynamic drum dance performed by the men of the Halakki Vokkaliga community,
      are popular folk arts. Karnataka’s rich musical tradition includes Carnatic music, with composers like Purandara
      Dasa and Tyagaraja contributing significantly to its classical repertoire.

      <br><br>

      Karnataka’s architectural heritage is celebrated for its diversity and historical significance. The state is home
      to magnificent temples like the Hoysala temples of Belur and Halebid, renowned for their intricate carvings and
      architecture. The Badami Cave Temples, built during the Chalukya dynasty, and the Vijayanagara Empire’s
      architectural marvels in Hampi are UNESCO World Heritage sites that attract history enthusiasts and tourists from
      around the globe.

      <br><br>

      Handicrafts in Karnataka showcase the artistic skills and craftsmanship of its artisans. Mysore silk sarees, with
      their rich colors and intricate zari work, are renowned for their quality and craftsmanship. Sandalwood carving
      from Mysuru, Bidriware from Bidar, and Channapatna toys from Channapatna are other notable crafts that highlight
      the state’s artistic heritage and traditional craftsmanship.

      <br><br>`,


      "inkl":`<h1>Welcome to Kerala!</h1>
      <img src="photos/kl.png" style="max-width: 700px;"><br>
      Kerala, located on the southwestern coast of India, is renowned for its lush landscapes, rich cultural heritage,
      and vibrant traditions. Known as "God's Own Country," Kerala's culture is a unique blend of ancient customs,
      classical arts, and communal harmony, reflecting its diverse history and natural beauty.

      <br><br>

      Festivals are an integral part of Kerala's cultural life. Onam, the most prominent festival, is a harvest
      celebration marked by elaborate feasts, traditional dances, boat races, and the creation of floral arrangements
      called pookalams. Vishu, the Malayali New Year, is celebrated with rituals, fireworks, and the preparation of a
      special meal called sadya. The state also observes Christmas and Eid with great enthusiasm, reflecting its
      religious diversity and spirit of unity.

      <br><br>

      Kerala’s cuisine is famous for its rich flavors and use of fresh ingredients. Rice and coconut are staples in the
      cuisine, and dishes often feature a blend of spices and herbs. Popular dishes include Sambar (lentil-based
      vegetable stew), Kerala Parotta (flaky bread), and Appam (rice pancake). Seafood is a significant part of the
      diet, with dishes like Meen Curry (fish curry) and Karimeen Pollichathu (pearl spot fish). The cuisine also
      includes a variety of vegetarian dishes, showcasing the state's culinary diversity.

      <br><br>

      Music and dance are integral to Kerala’s cultural heritage. Kathakali, a classical dance-drama known for its
      elaborate costumes and expressive gestures, is a highlight of Kerala’s artistic traditions. Mohiniyattam, a
      graceful classical dance, and Theyyam, a ritualistic performance art, are other significant forms. Traditional
      music, including the percussion-based Chenda Melam and the classical Carnatic music, are vital aspects of Kerala’s
      cultural expression.

      <br><br>

      Kerala's architectural heritage includes splendid temples, churches, and mosques. The Padmanabhaswamy Temple in
      Thiruvananthapuram, known for its intricate architecture and wealth, is a major religious site. The Paradesi
      Synagogue in Kochi, one of the oldest active synagogues, and the St. Francis Church, where Vasco da Gama was
      originally buried, are significant landmarks. These structures reflect Kerala’s historical and religious
      diversity.

      <br><br>

      Handicrafts in Kerala are celebrated for their craftsmanship and traditional artistry. Coir products made from
      coconut fiber, Aranmula Kannadi (metal mirrors), and Kasavu sarees with their distinctive gold borders are notable
      crafts. The state is also known for its elaborate mural paintings and traditional boat-building techniques,
      showcasing the skills and creativity of its artisans.

      <br><br>

      Natural beauty is a defining feature of Kerala, with its backwaters, beaches, and hill stations attracting
      tourists from around the world. The serene backwaters of Alleppey and Kumarakom, the pristine beaches of Kovalam
      and Varkala, and the lush hill stations of Munnar and Wayanad offer picturesque settings and unique experiences.

      <br><br>

      Overall, Kerala’s culture is a harmonious blend of tradition, natural beauty, and artistic expression. It offers
      visitors a rich cultural experience, from its vibrant festivals and flavorful cuisine to its classical arts and
      stunning landscapes. Kerala's warm hospitality and diverse heritage make it a captivating destination for
      travelers and culture enthusiasts alike.
      <br><br>`,

      "inla":`<h1>Welcome to Ladakh!</h1>
      <img src="photos/la.png" style="max-width: 700px;"><br>
      Ladakh, often referred to as the "Land of High Passes," is a region in the northernmost part of India known for
      its rugged landscapes, Tibetan Buddhist culture, and serene monasteries. Located in the state of Jammu and
      Kashmir, Ladakh is a high-altitude desert that offers a unique blend of spirituality, adventure tourism, and
      breathtaking natural beauty.

      <br><br>

      Scenic Landscapes: Ladakh is characterized by its dramatic landscapes, including barren mountains, deep valleys,
      and expansive plateaus. The region is dotted with picturesque lakes such as Pangong Tso, Tso Moriri, and Tsokar,
      which reflect the clear blue skies and towering mountains. The Nubra Valley, with its sand dunes and double-humped
      Bactrian camels, offers a surreal desert-like experience amidst the Himalayas.

      <br><br>

      Buddhist Heritage: Ladakh is predominantly Buddhist, and its monasteries (gompa) are integral to its cultural and
      spiritual life. The monasteries, such as Thiksey, Hemis, and Diskit, are perched on cliffs and hilltops, offering
      panoramic views of the surrounding mountains. These monasteries house ancient scriptures, thangka paintings, and
      statues of Buddha, preserving centuries-old Tibetan Buddhist traditions.

      <br><br>

      Cultural Festivals: Ladakh celebrates several Buddhist festivals that attract tourists from around the world. The
      Hemis Festival, held at Hemis Monastery, is one of the most famous festivals featuring colorful masked dances
      (Cham dances), traditional music, and rituals to commemorate the birth anniversary of Guru Padmasambhava. Losar,
      the Tibetan New Year, and Ladakh Festival are other significant cultural celebrations that showcase Ladakhi music,
      dance, and local cuisine.

      <br><br>

      Adventure Tourism: Ladakh is a paradise for adventure enthusiasts. Popular activities include trekking in the
      Markha Valley, Zanskar Range, and Stok Kangri; river rafting in the Indus and Zanskar rivers; and mountain biking
      on challenging terrains. The region's high-altitude lakes offer opportunities for camping, birdwatching, and
      photography amidst pristine natural surroundings.

      <br><br>

      Traditional Cuisine: Ladakhi cuisine is hearty and influenced by Tibetan flavors. Staple foods include Tsampa
      (roasted barley flour), Thukpa (noodle soup), and Momos (dumplings) served with spicy chili sauce. Butter tea
      (gur-gur cha) is a popular beverage that provides warmth in the cold climate. Local dishes like Skiu (a pasta-like
      dish) and Chhang (fermented barley beer) offer a taste of traditional Ladakhi hospitality.

      <br><br>

      Challenges and Conservation: Despite its natural beauty and cultural richness, Ladakh faces challenges such as
      environmental conservation, sustainable tourism practices, and preservation of traditional lifestyles amidst
      modernization. Efforts are underway to promote responsible tourism and protect the fragile ecosystem of the
      region, ensuring that future generations can continue to enjoy its pristine landscapes and cultural heritage.

      <br><br>

      In conclusion, Ladakh's culture is a blend of spirituality, adventure, and traditional way of life amidst the
      majestic Himalayas. Its monasteries, festivals, cuisine, and breathtaking landscapes make it a captivating
      destination for travelers seeking an authentic Himalayan experience and spiritual rejuvenation in the lap of
      nature.`,

      "inmh":`<h1>Welcome to Maharashtra!</h1>
      <img src="photos/mh.png" style="max-width: 700px;"><br>
      Maharashtra, located in western India, is a vibrant state known for its rich cultural heritage, dynamic cities,
      historical landmarks, and diverse cuisine. From the bustling streets of Mumbai to the ancient caves of Ajanta and
      Ellora, Maharashtra offers a blend of tradition, modernity, and natural beauty.

      <br><br>

      Cultural Diversity: Maharashtra is home to a diverse mix of cultures and traditions. The state celebrates
      festivals like Ganesh Chaturthi with great enthusiasm, where colorful processions and elaborate decorations mark
      the birth of Lord Ganesha. Other festivals such as Diwali, Holi, Eid, and Gudi Padwa are also celebrated with
      fervor, reflecting the cultural mosaic of the state.

      <br><br>

      Historical Heritage: Maharashtra boasts a rich historical legacy with UNESCO World Heritage Sites like the Ajanta
      and Ellora Caves, showcasing ancient Buddhist rock-cut temples and exquisite sculptures. The Elephanta Caves near
      Mumbai, dedicated to Lord Shiva, are another architectural marvel. Forts like Raigad, Pratapgad, and Sinhagad
      offer insights into the state's military history and strategic importance.

      <br><br>

      Cuisine: Maharashtrian cuisine is diverse and flavorful, with influences from Marathi, Konkani, and Malvani
      culinary traditions. Staple foods include rice, wheat, and millets, served with spicy curries like Vada Pav, Pav
      Bhaji, and Misal Pav. Maharashtrian sweets such as Puran Poli, Modak, and Shrikhand are enjoyed during festivals
      and special occasions, highlighting the state's culinary richness.

      <br><br>

      Arts and Literature: Maharashtra has a thriving arts scene, with traditional music forms like Lavani, Powada, and
      Bhavageet capturing the essence of Marathi culture. Marathi literature, represented by poets like Sant Tukaram,
      Namdev, and Jnaneshwar, reflects spiritual depth and social commentary. The state's theater tradition, with iconic
      institutions like the Maharashtra State Drama Academy, nurtures performing arts and cultural expressions.

      <br><br>

      Modern Maharashtra: Mumbai, the capital city and financial hub of India, embodies modern Maharashtra with its
      skyscrapers, Bollywood film industry, and vibrant nightlife. The city's landmarks like the Gateway of India,
      Marine Drive, and Siddhivinayak Temple are iconic symbols of Mumbai's cosmopolitan spirit and cultural diversity.

      <br><br>

      Handicrafts and Textiles: Maharashtra is renowned for its handloom textiles like Paithani sarees, Maheshwari
      sarees, and Kolhapuri chappals, which showcase intricate weaving techniques and vibrant designs. Warli painting, a
      tribal art form depicting rural life through simple geometric patterns, is another cultural treasure of
      Maharashtra's artistic heritage.

      <br><br>

      Natural Beauty: Maharashtra's natural landscapes range from the lush Western Ghats, dotted with hill stations like
      Mahabaleshwar and Matheran, to pristine beaches along the Konkan coast. The state's national parks and wildlife
      sanctuaries, such as Tadoba-Andhari Tiger Reserve and Sanjay Gandhi National Park, offer opportunities for
      wildlife safaris and eco-tourism experiences.

      <br><br>

      In summary, Maharashtra's culture is a mosaic of traditions, festivals, cuisine, arts, and natural wonders. Its
      blend of historical richness, modern dynamism, and artistic expressions make it a captivating destination for
      travelers seeking a diverse and enriching cultural experience in India.`,

      "inml":`<h1>Welcome to Meghalaya!</h1>
      <img src="photos/ml.png" style="max-width: 700px;"><br>
      Meghalaya, located in northeastern India, is renowned for its lush landscapes, diverse culture, and vibrant
      traditions. The culture of Meghalaya is a rich tapestry woven from the customs and practices of its three major
      tribes: the Khasi, the Garo, and the Jaintia. Each tribe has its own unique traditions, festivals, and languages,
      contributing to the state's cultural diversity.

      <br><br>

      Festivals are central to Meghalaya's cultural life. The Khasi tribe celebrates Shad Suk Mynsiem, a spring festival
      marked by traditional dance and music that symbolizes peace and well-being. The Garo tribe's Wangala Festival,
      also known as the 100 Drums Festival, celebrates the harvest and involves rhythmic drumming and dancing. The
      Jaintia tribe celebrates Behdienkhlam, a festival aimed at driving away evil spirits and ensuring a good harvest,
      featuring vibrant rituals and dances.

      <br><br>

      Meghalaya's cuisine reflects its agrarian lifestyle and the use of locally sourced ingredients. Dishes like Jadoh
      (rice cooked with meat), Nakham Bitchi (a spicy fish soup), and Pumaloi (steamed rice cake) are staples. These
      dishes highlight the state's culinary diversity and the importance of rice and meat in the local diet. The Khasi,
      Garo, and Jaintia tribes each have their own unique culinary traditions that contribute to Meghalaya's rich
      gastronomic heritage.

      <br><br>

      Music and dance are integral to Meghalaya's cultural expression. Folk dances such as Nongkrem Dance and Lahoo
      Dance are performed during festivals and social gatherings, showcasing intricate footwork and traditional attire.
      The state is also known for its rich tradition of folk music, with instruments like the duitara (a four-stringed
      instrument) and the duitara (a percussion instrument) being commonly used.

      <br><br>

      Meghalaya's natural beauty, with its rolling hills, dense forests, and picturesque waterfalls like Nohkalikai and
      Seven Sisters, provides a stunning backdrop for cultural activities and eco-tourism. The state is also home to
      living root bridges, a unique example of bioengineering by the Khasi people, and the Mawsmai Caves, which attract
      tourists and adventurers alike.

      <br><br>

      Handicrafts such as bamboo and cane products, hand-woven textiles, and traditional jewelry reflect the artistic
      skills and cultural heritage of Meghalaya's tribes. These crafts are not only functional but also serve as
      cultural symbols, often used in traditional ceremonies and rituals.`,

      "inmn":`<h1>Welcome to Manipur!</h1>
      <img src="photos/mn.png" style="max-width: 700px;"><br>
      Manipur, located in northeastern India, is renowned for its rich cultural heritage, vibrant traditions, and scenic
      landscapes. The culture of Manipur is a blend of indigenous traditions, dance, music, and arts, primarily
      influenced by the Meitei community along with the various tribal groups.

      <br><br>

      Festivals play a central role in Manipur's cultural life. Yaoshang, the Manipuri version of Holi, is celebrated
      with fervor and features traditional Thabal Chongba dance. Lai Haraoba is another significant festival dedicated
      to traditional deities, involving rituals, music, and dance that showcase the mythological origins of the Meitei
      people. The Sangai Festival, named after the state animal, is a cultural extravaganza that highlights the region's
      arts, crafts, cuisine, and sports.

      <br><br>

      Manipuri cuisine is characterized by its simplicity and use of fresh, local ingredients. Staple foods include
      rice, fish, and vegetables. Popular dishes like Eromba (a mashed vegetable dish with fermented fish), Singju (a
      spicy salad), and Chamthong (a vegetable stew) reflect the state's culinary diversity. The cuisine is known for
      its unique flavors, often achieved through the use of fermented ingredients and aromatic herbs.

      <br><br>

      Music and dance are integral to Manipur's cultural expression. Manipuri dance, especially the classical Ras Leela,
      is renowned for its grace and storytelling, depicting episodes from the life of Lord Krishna. Other traditional
      dance forms include Pung Cholom, a dance performed with drums, and Nupa Pala, a ritualistic dance. Folk music,
      characterized by traditional instruments like the Pena, accompanies these dance forms, creating a harmonious
      cultural performance.

      <br><br>

      Manipur's natural beauty, with its rolling hills, verdant valleys, and serene lakes, provides a picturesque
      backdrop for cultural and eco-tourism activities. Loktak Lake, the largest freshwater lake in the region, is
      famous for its floating phumdis (islands) and is a major tourist attraction. The Keibul Lamjao National Park, the
      world's only floating national park, is home to the endangered Sangai deer.

      <br><br>

      The state's handicrafts, including hand-woven textiles, bamboo and cane products, and traditional jewelry, reflect
      the artistic skills and cultural heritage of Manipuri artisans. The intricate designs of Manipuri shawls, Phanek
      (traditional skirts), and pottery are highly valued and showcase the community's craftsmanship and creativity.

      <br><br>`,
      "inmp":`<h1>Welcome to Madhya Pradesh!</h1>
      <img src="photos/mp.png" style="max-width: 700px;"><br>
      Madhya Pradesh, located in central India, is known for its rich history, architectural marvels, diverse wildlife,
      and cultural heritage. Often referred to as the "Heart of India," Madhya Pradesh offers a fascinating blend of
      ancient temples, magnificent forts, wildlife sanctuaries, and traditional arts.

      <br><br>

      Historical and Architectural Marvels: Madhya Pradesh is home to UNESCO World Heritage Sites such as the
      Khajuraho Group of Monuments, renowned for their intricately carved temples depicting various facets of life. The
      temples of Khajuraho are famous for their erotic sculptures and architectural splendor. Other architectural
      marvels include the Sanchi Stupa, a Buddhist monument dating back to the Mauryan period, and the majestic Gwalior
      Fort, showcasing a blend of Hindu and Mughal architectural styles.

      <br><br>

      Cultural Diversity: Madhya Pradesh's cultural fabric is enriched by its tribal communities, each with its own
      distinct traditions and art forms. Tribal festivals such as Bhagoria Haat, celebrating the spirit of love and
      courtship, and the Gond Art Festival, showcasing tribal art and culture, offer insights into the state's cultural
      diversity. The folk music and dance forms of Madhya Pradesh, including Tansen Music Festival in Gwalior and
      Kalidas Samaroh in Ujjain, highlight its rich cultural heritage.

      <br><br>

      Wildlife and Natural Beauty: Madhya Pradesh is a haven for wildlife enthusiasts, with national parks and
      sanctuaries like Kanha, Bandhavgarh, and Pench offering opportunities to spot tigers, leopards, and other rare
      species. The lush forests of Pachmarhi, the only hill station in the state, provide scenic vistas, waterfalls, and
      trekking trails amidst tranquil surroundings. The Narmada River, considered sacred, flows through the Marble Rocks
      of Bhedaghat, offering boat rides and stunning views of the canyon.

      <br><br>

      Cuisine: Madhya Pradesh's cuisine reflects its diverse cultural influences and agricultural abundance.
      Traditional dishes include Bhutte Ka Kees (grated corn cooked with milk and spices), Poha-Jalebi, and Dal Bafla, a
      wheat dumpling served with dal and ghee. Sweets like Gajar Ka Halwa and Malpua are popular during festivals and
      special occasions, showcasing the state's culinary richness.

      <br><br>

      Handicrafts and Textiles: Madhya Pradesh is known for its exquisite handicrafts such as Chanderi and
      Maheshwari sarees, known for their fine weaving and delicate designs. The state's traditional crafts also include
      Bagh Print, a hand block printing technique using natural dyes, and Dhokra metal craft, which involves casting
      intricate figurines and artifacts using the lost wax technique. These handicrafts contribute to the state's
      cultural heritage and rural economy.

      <br><br>

      Festivals and Cultural Events: Madhya Pradesh celebrates numerous festivals with great fervor, reflecting its
      cultural vibrancy and religious diversity. Festivals like Diwali, Holi, and Navratri are celebrated with
      traditional rituals, music, dance, and community gatherings. The Tansen Music Festival in Gwalior, dedicated to
      the legendary musician Tansen, attracts classical music enthusiasts from around the world, showcasing Madhya
      Pradesh's cultural legacy.

      <br><br>

      In conclusion, Madhya Pradesh's cultural heritage, historical landmarks, wildlife sanctuaries, and culinary
      delights make it a captivating destination for travelers seeking to explore India's heartland. Its blend of
      ancient traditions, architectural splendor, and natural beauty offers a glimpse into the diverse cultural tapestry
      of central India.`,
      "inmz":`<h1>Welcome to Mizoram!</h1>
      <img src="photos/mz.png" style="max-width: 700px;"><br>
      Mizoram, located in northeastern India, is renowned for its scenic beauty, rich cultural heritage, and vibrant
      traditions. The culture of Mizoram is deeply rooted in the customs and beliefs of its indigenous Mizo tribes,
      characterized by colorful festivals, unique cuisine, and intricate handicrafts.<br><br>

      Festivals play a central role in Mizoram's cultural life, with Chapchar Kut, Mim Kut, and Pawl Kut being among the
      most significant. These festivals celebrate agricultural harvests and include traditional dances such as Cheraw
      (bamboo dance) and Chheihlam, accompanied by vibrant music and songs that reflect the community's joy and unity.<br><br>

      Mizo cuisine reflects the region's agrarian lifestyle and use of local ingredients. Staple foods include Bai, a
      nutritious dish made with steamed vegetables and herbs, and Misa Mach Poora, a spicy preparation of fish. Mizo
      delicacies often feature bamboo shoots, pork, and locally grown herbs, showcasing the culinary traditions passed
      down through generations.<br><br>

      Music and dance are integral to Mizoram's cultural expression, with folk dances like Cheraw (bamboo dance) and
      Khuallam performed during festivals and social gatherings. These dances are marked by intricate footwork and
      rhythmic movements, accompanied by traditional instruments like the Khuang and Tumdeng.<br><br>

      Mizoram's religious landscape is predominantly Christian, with churches playing a significant role in community
      life. The state's natural beauty, including lush green hills, cascading waterfalls like Vantawng Falls, and serene
      lakes such as Tamdil Lake, provides a picturesque backdrop for cultural experiences and eco-tourism activities.<br><br>

      Handicrafts such as intricate bamboo and cane products, hand-woven textiles, and traditional attire like Puanchei
      and Kawrchei showcase the artistic skills and cultural heritage of Mizoram's artisans. These crafts not only serve
      as decorative items but also hold cultural and ritualistic significance within the Mizo community.<br><br>`,

    "innl":`<h1>Welcome to Nagaland!</h1>
      <img src="photos/nl.png" style="max-width: 700px;"><br>
      Nagaland, located in northeastern India, is renowned for its vibrant cultural heritage, diverse tribal traditions,
      and picturesque landscapes. The culture of Nagaland is characterized by the customs and practices of its major
      tribes, each with its unique language, attire, and rituals.

      <br><br>

      Festivals are central to Naga culture, with the Hornbill Festival being the most prominent. Celebrated in
      December, this festival showcases the rich heritage of all Naga tribes through traditional dances, music, crafts,
      and food. Other significant festivals include Sekrenyi of the Angami tribe, Moatsu of the Ao tribe, and Tuluni of
      the Sumi tribe, each celebrating seasonal cycles, harvests, and community bonding.

      <br><br>

      Naga cuisine is known for its use of fresh, local ingredients and distinctive flavors. Staple dishes include
      smoked pork with bamboo shoots, Axone (fermented soybean), and Anishi (dried yam leaves). Rice is a staple food,
      often accompanied by a variety of meats, fermented products, and spicy chutneys, reflecting the agrarian lifestyle
      and culinary ingenuity of the Naga people.

      <br><br>

      Music and dance are integral to Nagaland's cultural identity. Traditional Naga music often features folk songs and
      chants that recount historical events, folklore, and daily life. Each tribe has its own unique dance forms, such
      as the War Dance, Zeliang Dance, and Harvest Dance, performed during festivals and important ceremonies. These
      dances are characterized by energetic movements, elaborate costumes, and the rhythmic beats of traditional
      instruments like log drums and bamboo flutes.

      <br><br>

      Nagaland's natural beauty, with its rolling hills, dense forests, and serene valleys, provides a stunning backdrop
      for cultural and eco-tourism activities. Destinations like Dzükou Valley, Japfu Peak, and the villages of Khonoma
      and Mon offer visitors a chance to experience the state's natural splendor and traditional way of life.

      <br><br>

      The state's handicrafts, including intricate beadwork, traditional shawls, wood carvings, and bamboo products,
      reflect the artistic skills and cultural heritage of the Naga tribes. These crafts are often used in daily life
      and rituals, showcasing the community's connection to their environment and traditions.

      <br><br>`,

      "inor":`<h1>Welcome to Odisha!</h1>
      <img src="photos/or.png" style="max-width: 700px;"><br>
      Odisha, located on the eastern coast of India, is known for its rich cultural heritage, historical significance,
      and natural beauty. The culture of Odisha is a vibrant blend of ancient traditions, classical arts, and diverse
      festivals that reflect the state’s historical and cultural depth.

      <br><br>

      Festivals play a pivotal role in the cultural life of Odisha. The most prominent festival is Rath Yatra,
      celebrated in Puri, where massive chariots carrying the deities Jagannath, Balabhadra, and Subhadra are pulled by
      devotees. Other significant festivals include Durga Puja, celebrated with great enthusiasm across the state, and
      Raja Parba, a festival celebrating womanhood and the earth's fertility. These festivals showcase the state's
      spiritual fervor and community spirit.

      <br><br>

      Odisha’s cuisine is known for its simplicity and flavor, with rice being the staple food accompanied by a variety
      of vegetables, lentils, and seafood. Popular dishes include Dalma (lentils cooked with vegetables), Pakhala
      (fermented rice), and Chhena Poda (a sweet made from fresh cottage cheese). The cuisine often features minimal
      spices and relies on the natural flavors of the ingredients, reflecting the state’s agrarian lifestyle.

      <br><br>

      Music and dance are integral to Odisha’s cultural identity. Odissi, one of the oldest classical dance forms in
      India, originates from this state and is known for its graceful movements and expressive gestures. Folk dances
      like Chhau and Gotipua are also significant, performed during festivals and special occasions. Traditional music,
      characterized by instruments like the mardala (drum) and the flute, often accompanies these dance forms, creating
      a harmonious cultural experience.

      <br><br>

      Odisha’s architectural heritage is a testament to its glorious past. The state is home to magnificent temples like
      the Sun Temple in Konark, known for its intricate stone carvings and iconic chariot design, and the Jagannath
      Temple in Puri, a major pilgrimage site. These architectural marvels attract tourists and pilgrims from around the
      world, showcasing Odisha’s historical and cultural significance.

      <br><br>

      Handicrafts from Odisha are renowned for their craftsmanship and artistic excellence. Pattachitra (scroll
      paintings), silver filigree work, and appliqué work from Pipili are some of the notable crafts that reflect the
      artistic skills of the local artisans. These crafts are often used in daily life and rituals, highlighting the
      community's connection to their cultural heritage.

      <br><br>`,

      "inpb":`<h1>Welcome to Punjab!</h1>
      <img src="photos/pb.png" style="max-width: 700px;"><br>
      Punjab, located in northwestern India, is renowned for its vibrant culture, rich history, agricultural prosperity,
      and warm hospitality. Known as the "Land of Five Rivers," Punjab's cultural identity is shaped by its agricultural
      heritage, religious diversity, traditional festivals, and culinary delights.

      <br><br>

      Agricultural Heartland: Punjab is often referred to as the "Granary of India" due to its fertile soil and
      extensive agricultural practices. The state is a leading producer of wheat, rice, and other crops, contributing
      significantly to India's food security. The rural landscape is dotted with lush green fields, sprawling farms, and
      picturesque mustard fields during the winter season, adding to Punjab's scenic charm.

      <br><br>

      Religious Diversity: Punjab is a melting pot of religions and spiritual traditions. The state is home to
      important religious sites for Sikhism, including the Golden Temple (Harmandir Sahib) in Amritsar, the holiest
      shrine for Sikhs worldwide. Other significant Sikh pilgrimage sites include Anandpur Sahib, the birthplace of the
      Khalsa, and Takht Sri Patna Sahib, associated with Guru Gobind Singh Ji. Punjab also has Hindu temples, mosques,
      and churches, reflecting its religious harmony and diversity.

      <br><br>

      Cultural Festivals: Punjab celebrates various festivals with great fervor, reflecting its cultural vibrancy
      and traditional values. Baisakhi, also known as Vaisakhi, is a major festival marking the Sikh New Year and the
      harvest season. The festival is celebrated with colorful processions (Nagar Kirtan), folk music (Bhangra and
      Gidda), traditional dance performances, and community feasts (Langar). Lohri, celebrated in January, marks the
      winter solstice with bonfires, music, and dancing.

      <br><br>

      Traditional Arts and Crafts: Punjab's artistic traditions are reflected in its vibrant handicrafts, including
      Phulkari embroidery, which features intricate floral patterns stitched on textiles. The state's artisans are also
      known for their skill in creating Punjabi juttis (traditional footwear), woodwork, and pottery. These crafts
      showcase Punjab's artistic heritage and craftsmanship passed down through generations.

      <br><br>

      Cuisine: Punjabi cuisine is renowned for its rich flavors and hearty dishes, influenced by the state's
      agricultural abundance and cultural diversity. Staple foods include wheat-based breads like Roti, Naan, and
      Paratha, often paired with Dal (lentils), vegetables, and dairy products. Iconic dishes include Butter Chicken,
      Sarson Ka Saag (mustard greens), Makki Ki Roti (cornbread), and Punjabi Lassi (yogurt-based drink). Sweets like
      Jalebi, Gulab Jamun, and Pinni are enjoyed during festivals and celebrations.

      <br><br>

      Music and Dance: Punjab's cultural heritage is enriched by its lively music and dance forms. Bhangra, a
      traditional dance performed by men during harvest celebrations, is characterized by energetic movements and
      rhythmic beats of the dhol (drum) and other instruments. Gidda, performed by women, is a graceful dance form
      accompanied by folk songs that celebrate love, joy, and cultural pride. These vibrant expressions of music and
      dance are integral to Punjab's festive spirit and cultural identity.

      <br><br>

      Modern Punjab: Urban centers like Chandigarh, the capital of Punjab and Haryana, embody modernity with their
      planned layouts, green spaces, and architectural landmarks. Chandigarh, designed by renowned architect Le
      Corbusier, blends modernist architecture with Punjabi culture and serves as a hub for education, commerce, and
      administration in the region.

      <br><br>

      In conclusion, Punjab's cultural richness, religious heritage, agricultural prosperity, and warm hospitality make
      it a captivating destination for travelers seeking a blend of tradition, spirituality, and culinary delights in
      India's northwestern region. Its festivals, handicrafts, music, and cuisine reflect the vibrant spirit of Punjab
      and its people.`,

      "inpy":`<h1>Welcome to Puducherry!</h1>
      <img src="photos/py.png" style="max-width: 700px;"><br>
      Puducherry, formerly known as Pondicherry, is a Union Territory of India located on the southeastern coast. Known
      for its distinctive blend of French and Indian cultures, Puducherry offers a unique cultural experience,
      characterized by its colonial heritage, vibrant festivals, and serene beaches.

      <br><br>

      Festivals in Puducherry are celebrated with great enthusiasm and reflect its diverse cultural heritage. Pongal,
      the Tamil harvest festival, is a major celebration marked by traditional rituals, feasts, and decorations.
      Bastille Day, celebrated on July 14th, reflects the region's French heritage with parades, cultural events, and
      fireworks. Diwali, Christmas, and Eid are also widely celebrated, showcasing Puducherry's religious diversity and
      communal harmony.

      <br><br>

      Puducherry’s cuisine is a delightful fusion of Tamil and French culinary traditions. Tamil influences are evident
      in dishes like dosa, idli, and sambar, while the French influence can be seen in baguettes, croissants, and coq au
      vin. Seafood is a staple, with dishes like prawn curry and fish fry being particularly popular. The region’s
      cuisine also includes a variety of creole dishes that blend local ingredients with French cooking techniques,
      creating a unique gastronomic experience.

      <br><br>

      Music and dance in Puducherry reflect its multicultural heritage. Traditional Tamil music and dance forms, such as
      Bharatanatyam and Carnatic music, are prevalent and performed during festivals and cultural events. The influence
      of French culture is also evident in the region’s art and music scenes, with numerous cultural festivals
      showcasing a blend of Indian and European styles. The annual Puducherry Heritage Festival is a major event that
      celebrates the region’s diverse cultural heritage through music, dance, and art exhibitions.

      <br><br>

      Puducherry’s architectural heritage is a testament to its colonial past and cultural diversity. The French
      Quarter, with its well-preserved colonial buildings, cobblestone streets, and vibrant bougainvillea, offers a
      charming glimpse into the region’s French heritage. Iconic landmarks like the Basilica of the Sacred Heart of
      Jesus, the Immaculate Conception Cathedral, and the French War Memorial reflect the architectural influence of
      French colonization. The Tamil Quarter, with its traditional houses and vibrant markets, showcases the region’s
      indigenous architectural styles.

      <br><br>

      Handicrafts in Puducherry are known for their craftsmanship and artistic excellence. The region is famous for its
      handmade paper, pottery, and textile products. Auroville, an experimental township located near Puducherry, is
      renowned for its unique crafts and artisanal products, including handcrafted candles, incense, and eco-friendly
      items. These crafts reflect the creativity and skill of local artisans, preserving the region’s cultural heritage.

      <br><br>

      The natural beauty of Puducherry is characterized by its serene beaches, lush gardens, and tranquil backwaters.
      Promenade Beach, Paradise Beach, and Auroville Beach are popular destinations for tourists and locals alike,
      offering opportunities for relaxation and water sports. The Botanical Garden and the serene backwaters provide
      picturesque settings for nature lovers, adding to the region’s charm.

      <br><br>

      Overall, Puducherry’s culture is a harmonious blend of French and Indian influences, offering a unique and
      enriching experience for visitors. Its vibrant festivals, delectable cuisine, classical and contemporary arts, and
      architectural heritage reflect the region’s diverse and multicultural identity. Puducherry invites travelers to
      immerse themselves in its rich cultural tapestry, enjoy its scenic beauty, and experience its warm hospitality.`,

      "inrj":`<h1>Welcome to Rajasthan!</h1>
      <img src="photos/rj.png" style="max-width: 700px;"><br>
      Rajasthan, located in northwestern India, is known for its vibrant culture, majestic forts, palaces, desert
      landscapes, and rich heritage. Often referred to as the "Land of Kings," Rajasthan's history and traditions are
      reflected in its architecture, festivals, cuisine, and colorful attire.

      <br><br>

      Majestic Forts and Palaces: Rajasthan is famous for its impressive forts, palaces, and havelis (mansions) that
      showcase Rajputana grandeur and architectural splendor. The Amber Fort in Jaipur, with its intricate carvings and
      panoramic views of the Aravalli hills, is a prime example. Mehrangarh Fort in Jodhpur, perched on a hilltop,
      offers a glimpse into Rajasthan's martial history. Udaipur's City Palace and the Lake Palace on Lake Pichola are
      renowned for their exquisite architecture and scenic beauty.

      <br><br>

      Cultural Riches: Rajasthan's cultural tapestry is woven with folk music, dance, festivals, and traditional arts.
      The state's folk music, performed with instruments like the dholak, sarangi, and harmonium, narrates tales of
      valor, love, and devotion. Ghoomar, a traditional dance performed by women, and Kalbelia, associated with the
      nomadic Kalbelia community, are iconic dance forms known for their graceful movements and vibrant attire.

      <br><br>

      Colorful Attire: Rajasthanis are known for their colorful traditional attire. Women wear vibrant ghagras (long
      skirts), cholis (blouses), and odhnis (scarves), often embellished with intricate embroidery, mirror work, and
      tie-dye techniques such as Bandhani. Men traditionally wear dhotis or pyjamas with kurtas and turbans (pagris)
      adorned in various styles that denote regional and cultural identities.

      <br><br>

      Festivals: Rajasthan celebrates numerous festivals with great fervor, offering glimpses into its cultural heritage
      and traditional rituals. The Pushkar Camel Fair, held annually in Pushkar, is a vibrant spectacle featuring camel
      races, folk performances, and religious ceremonies. The Desert Festival in Jaisalmer showcases Rajasthani folk
      music, dance, and camel polo amidst the stunning backdrop of sand dunes. Diwali, Holi, and Teej are also
      celebrated with traditional rituals and community festivities across the state.

      <br><br>

      Cuisine: Rajasthan's cuisine is characterized by its rich flavors, use of spices, and traditional cooking methods.
      Dal Baati Churma, a popular dish, consists of baked dough balls (baati) served with lentils (dal) and sweetened
      wheat flour crumble (churma). Other specialties include Gatte Ki Sabzi, Laal Maas (spicy mutton curry), and
      Bikaneri Bhujia (spicy snack). Rajasthani sweets like Ghevar, Malpua, and Mawa Kachori are enjoyed during
      festivals and special occasions.

      <br><br>

      Handicrafts and Artisans: Rajasthan is renowned for its traditional handicrafts and artistic traditions. Jaipur is
      famous for its gemstones, jewelry, and block-printed textiles like Bandhani and Sanganeri prints. The city of
      Jodhpur is known for its leatherwork, while Udaipur specializes in miniature paintings and pottery. Rajasthan's
      artisans create intricate works of art, including lac bangles, metal crafts, and traditional Rajasthani puppets
      (Kathputlis), showcasing their skill and cultural pride.

      <br><br>

      Wildlife and Natural Beauty: Rajasthan's diverse landscapes range from the Thar Desert, with its sand dunes and
      camel safaris, to wildlife sanctuaries like Ranthambore and Sariska, known for their tiger populations and
      birdlife. The Keoladeo National Park in Bharatpur is a UNESCO World Heritage Site and a haven for migratory birds
      during winter months, offering birdwatching opportunities amidst scenic wetlands.

      <br><br>

      In summary, Rajasthan's cultural richness, architectural marvels, festivals, cuisine, and traditional arts make it
      a captivating destination for travelers seeking a glimpse into India's royal past and vibrant culture. Its forts,
      palaces, and desert landscapes offer a unique blend of history, hospitality, and timeless beauty in the heart of
      India's desert region.`,

      "insk":`<h1>Welcome to Sikkim!</h1>
      <img src="photos/sk.png" style="max-width: 700px;"><br>
      Sikkim, nestled in the Himalayas in northeastern India, is renowned for its stunning natural beauty, rich cultural
      heritage, and spiritual traditions. The culture of Sikkim is a harmonious blend of indigenous traditions, Tibetan
      Buddhist influences, and ethnic diversity.<br><br>

      Sikkim celebrates a variety of festivals that reflect its cultural diversity and religious harmony. Losar, Saga
      Dawa, and Dasain are some of the major festivals celebrated with fervor, where vibrant rituals, masked dances
      (Cham), and traditional music play integral roles in honoring local deities and marking auspicious occasions.<br><br>

      The cuisine of Sikkim is influenced by Tibetan, Nepalese, and Bhutanese flavors, featuring dishes like Momos
      (dumplings), Thukpa (noodle soup), Gundruk (fermented leafy greens), and Sael Roti (deep-fried bread). These
      dishes highlight the region's agricultural practices and use of local ingredients.<br><br>

      Music and dance are integral to Sikkim's cultural expression, with folk dances like Maruni, Tamang Selo, and Gha
      To Ney being performed during festivals and social gatherings. These dances are characterized by vibrant costumes,
      rhythmic beats, and narratives depicting local myths and traditions.<br><br>

      Sikkim's spiritual heritage is evident in its numerous monasteries (gomphas) and stupas scattered across the
      state, including Rumtek Monastery, Enchey Monastery, and Pemayangtse Monastery. These monasteries serve as centers
      of Buddhist learning, meditation, and religious ceremonies, attracting devotees and tourists seeking spiritual
      solace and cultural insights.<br><br>

      The state's natural beauty, with its snow-capped mountains, lush valleys, and serene lakes, provides a tranquil
      backdrop for cultural experiences and eco-tourism activities. Trekking routes, wildlife sanctuaries like
      Khangchendzonga National Park, and hot springs add to Sikkim's allure as a nature lover's paradise.<br><br>

      Sikkim's handicrafts, such as Thangka paintings, wood carvings, hand-woven carpets, and traditional attire like
      Bakhu and Kho, reflect the artistic prowess and cultural heritage of its people. These crafts not only serve as
      decorative items but also hold religious and cultural significance within the community.<br><br>`,

      "intg":`<h1>Welcome to Telangana!</h1>
      <img src="photos/tg.png" style="max-width: 700px;"><br>
      Telangana, located in southern India, is known for its rich history, diverse culture, and dynamic traditions.
      Formed as a separate state in 2014, Telangana has a distinct identity that blends the ancient heritage of the
      Deccan plateau with vibrant modernity.

      <br><br>

      Festivals are a central part of Telangana’s cultural life. Bathukamma is a major festival celebrated by women,
      involving the creation of flower stacks arranged in concentric circles, symbolizing life and mother goddess.
      Bonalu, another significant festival, is dedicated to the goddess Mahakali and involves colorful processions,
      dances, and the offering of special dishes to the deity. These festivals reflect the state's deep-rooted
      traditions and communal harmony.

      <br><br>

      Telangana’s cuisine is known for its rich and spicy flavors. Hyderabadi Biryani, a world-famous dish, epitomizes
      the culinary excellence of the region, combining aromatic basmati rice with marinated meat and spices. Other
      popular dishes include Pesarattu (green gram dosa), Sarva Pindi (spicy rice flour pancake), and Haleem (a
      slow-cooked meat and lentil stew). Telangana's cuisine is a fusion of Telugu and Hyderabadi culinary traditions,
      offering a diverse gastronomic experience.

      <br><br>

      Music and dance are integral to Telangana’s cultural expression. The state is known for its traditional folk
      dances like Perini Sivatandavam, a vigorous dance form dedicated to Lord Shiva, and Lambadi, performed by the
      Banjara community. Classical music, particularly Carnatic music, also holds a significant place, with local
      contributions enriching this ancient art form. These performances often feature traditional instruments like the
      dhol, veena, and mridangam, creating a vibrant cultural atmosphere.

      <br><br>

      Telangana’s architectural heritage is a blend of ancient and medieval structures. The iconic Charminar in
      Hyderabad, Golconda Fort, and the Qutb Shahi Tombs are remarkable examples of the state's architectural
      brilliance. Temples like the Thousand Pillar Temple in Warangal and the Ramappa Temple, a UNESCO World Heritage
      site, showcase intricate carvings and historical significance. These landmarks attract tourists and history
      enthusiasts, highlighting the state's rich past.

      <br><br>

      The state’s handicrafts are renowned for their craftsmanship and variety. Pochampally ikat, a traditional weaving
      style, produces beautiful sarees and fabrics with geometric patterns. Bidriware, a form of metalwork inlaid with
      silver, and Nirmal paintings, depicting themes from Indian mythology, are also notable crafts. These handicrafts
      not only represent the artistic heritage of Telangana but also contribute significantly to its economy.

      <br><br>`,

      "intn":`<h1>Welcome to Tamil Nadu!</h1>
      <img src="photos/tn.png" style="max-width: 700px;"><br>
      Tamil Nadu, located in southern India, is known for its rich cultural heritage, classical arts, and historical
      significance. The culture of Tamil Nadu is deeply rooted in its traditions, literature, music, dance, and
      festivals, reflecting the state's ancient Dravidian heritage.

      <br><br>

      Festivals play a pivotal role in Tamil Nadu's cultural life. Pongal, the harvest festival, is celebrated with
      great enthusiasm, marking the start of the Tamil month of Thai. The festival involves rituals, feasts, and the
      creation of kolam (intricate patterns made with rice flour) at the entrance of homes. Another major festival is
      Deepavali, celebrated with fireworks, sweets, and the lighting of lamps. The state also celebrates Tamil New Year,
      known as Puthandu, with traditional customs and festive meals. These festivals highlight the state's agricultural
      roots and communal spirit.

      <br><br>

      Tamil cuisine is renowned for its rich flavors and diverse dishes. Rice is the staple food, often accompanied by
      sambar (lentil stew), rasam (spicy soup), and a variety of vegetable dishes. Popular dishes include dosas, idlis,
      vadas, and biryanis. Tamil Nadu is also famous for its sweets like payasam, a type of pudding, and mysore pak, a
      gram flour-based sweet. The cuisine is characterized by its use of aromatic spices, tamarind, and coconut,
      reflecting the state's culinary heritage.

      <br><br>

      Music and dance are integral to Tamil Nadu’s cultural expression. Bharatanatyam, one of the oldest classical dance
      forms in India, originated in Tamil Nadu and is known for its grace, precision, and expressive storytelling.
      Carnatic music, a classical music tradition, is also deeply rooted in the state, with renowned composers like
      Tyagaraja and Muthuswami Dikshitar contributing to its rich repertoire. These art forms are performed during
      cultural festivals, temple ceremonies, and classical music concerts, showcasing the state's artistic excellence.

      <br><br>

      Tamil Nadu’s architectural heritage is a testament to its historical significance. The state is home to
      magnificent temples such as the Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage site known for its
      grandeur and intricate carvings. The Meenakshi Temple in Madurai, with its towering gopurams (gateway towers) and
      elaborate sculptures, is another architectural marvel. These temples not only serve as places of worship but also
      as cultural hubs, preserving the state's rich history and artistic traditions.

      <br><br>

      The state's literature and language are celebrated for their antiquity and depth. Tamil, one of the oldest living
      languages in the world, has a rich literary tradition dating back over two millennia. Classical Tamil literature,
      known as Sangam literature, includes a vast collection of poems and texts that reflect the social, political, and
      cultural life of ancient Tamil society. The works of modern Tamil poets and writers continue to enrich the
      literary landscape, maintaining the language's vibrancy and relevance.

      <br><br>

      Handicrafts in Tamil Nadu are renowned for their craftsmanship and artistic excellence. Kanchipuram silk sarees,
      known for their rich colors and intricate zari work, are highly prized. Tanjore paintings, characterized by their
      vibrant colors and gold leaf detailing, and the exquisite bronze sculptures from Swamimalai are other notable
      crafts that highlight the state's artistic heritage.

      <br><br>

      Overall, Tamil Nadu’s culture is a vibrant blend of tradition, spirituality, and artistic expression. It offers
      visitors a unique glimpse into the state's rich cultural tapestry, inviting them to experience its festivals,
      culinary delights, classical arts, and architectural splendor. Tamil Nadu's warm hospitality and cultural richness
      make it a captivating destination for travelers and culture enthusiasts alike.
      <br><br>`,

      "intr":`<h1>Welcome to Tripura!</h1>
      <img src="photos/tr.png" style="max-width: 700px;"><br>

      Tripura, located in northeastern India, is renowned for its rich cultural heritage, diverse tribal traditions, and
      scenic landscapes. The culture of Tripura is a harmonious blend of indigenous tribal customs, Bengali influences,
      and royal legacy, contributing to the state's unique identity.

      <br><br>

      Festivals play a significant role in Tripura's cultural life, reflecting its religious diversity and communal
      harmony. Garia Puja is a major tribal festival celebrated with dances, songs, and rituals to honor the deity
      Garia, seeking blessings for a good harvest. Durga Puja, a prominent Bengali festival, is celebrated with
      grandeur, featuring elaborate pandals and cultural performances. The Kharchi Puja, held at the Chaturdasha Temple,
      is another significant festival that involves rituals to cleanse the earth and worship the fourteen deities.

      <br><br>

      Tripuri cuisine is characterized by its simplicity and use of fresh, local ingredients. Dishes like Mui Borok
      (fermented fish), Berma (dried and fermented fish), and Gudok (a traditional stew) are staples in the tribal diet.
      Bengali influences bring dishes like Macher Jhol (fish curry) and various sweets to the culinary landscape. The
      cuisine reflects the state's agrarian lifestyle and the abundance of natural resources.

      <br><br>

      Music and dance are integral to Tripura's cultural expression, with traditional forms such as Hojagiri, Garia, and
      Lebang Bumani dances being performed during festivals and social events. These dances, characterized by rhythmic
      movements and vibrant costumes, depict stories of daily life, nature, and spirituality. The state's musical
      heritage includes the use of instruments like the sumui (a type of flute), pung (drum), and sarinda (a stringed
      instrument).

      <br><br>

      Tripura's architectural heritage is a testament to its royal past, with landmarks such as Ujjayanta Palace,
      Neermahal (a water palace), and the ancient rock carvings at Unakoti. These sites attract history enthusiasts and
      tourists, showcasing the state's rich history and cultural evolution. The state's natural beauty, including lush
      hills, dense forests, and serene lakes like Rudrasagar, offers a picturesque backdrop for cultural exploration and
      eco-tourism.

      <br><br>

      The state's handicrafts are renowned for their intricate designs and craftsmanship, with products like bamboo and
      cane furniture, hand-woven textiles, and pottery reflecting the artistic skills of Tripura's artisans. Traditional
      attire, such as the Rignai (women's wrap) and Rikutu Gamcha (men's shawl), is often adorned with vibrant patterns
      and motifs, highlighting the cultural identity of the tribal communities.

      <br><br>`,

      "inup":`<h1>Welcome to Uttar Pradesh!</h1>
      <img src="photos/up.png" style="max-width: 700px;"><br>
      Uttar Pradesh, located in northern India, is a state steeped in history, spirituality, cultural diversity, and
      architectural grandeur. As India's most populous state, Uttar Pradesh (UP) is known for its iconic landmarks,
      religious significance, literary heritage, and vibrant festivals.

      <br><br>

      Historical and Architectural Heritage: Uttar Pradesh boasts a rich historical legacy with several UNESCO World
      Heritage Sites. The Taj Mahal in Agra, an architectural masterpiece and symbol of eternal love, attracts millions
      of visitors annually. Agra Fort, also a UNESCO site, showcases Mughal architecture and served as the seat of power
      for generations of emperors. Fatehpur Sikri, an abandoned Mughal city known for its stunning red sandstone
      structures, is another testament to UP's architectural splendor.

      <br><br>

      Religious Diversity: Uttar Pradesh is a melting pot of religious traditions, home to significant pilgrimage
      sites for Hindus, Muslims, Buddhists, Jains, and Sikhs. Varanasi, one of the world's oldest continuously inhabited
      cities, is sacred to Hindus and known for its ghats (steps) along the Ganges River, where pilgrims perform rituals
      and ceremonies. Allahabad (Prayagraj) hosts the Kumbh Mela, the largest religious gathering on earth, where
      millions gather to bathe in the confluence of sacred rivers.

      <br><br>

      Literary and Cultural Heritage: Uttar Pradesh has a rich literary tradition with celebrated poets and writers
      like Tulsidas (author of Ramcharitmanas), Kabir, and Munshi Premchand. Lucknow, the state capital, is renowned for
      its Nawabi culture, Urdu poetry, and classical music. The city's architectural gems include the Bara Imambara, a
      historical complex with a labyrinth known as Bhulbhulaiya, and the Chota Imambara, adorned with intricate
      chandeliers and Persian calligraphy.

      <br><br>

      Festivals and Celebrations: Uttar Pradesh celebrates a myriad of festivals that reflect its cultural diversity
      and religious fervor. Diwali, Eid, Holi, and Navratri are celebrated with traditional rituals, music, dance, and
      vibrant processions. The Ramlila of Ramnagar in Varanasi, a theatrical enactment of the Ramayana, attracts large
      crowds during the festival of Dussehra. The annual Taj Mahotsav in Agra showcases the state's handicrafts, folk
      music, and dance forms, offering a glimpse into UP's cultural mosaic.

      <br><br>

      Cuisine: Uttar Pradesh's cuisine is as diverse as its cultural landscape, with influences from Mughlai,
      Awadhi, and vegetarian dishes prevalent across the state. Lucknow is renowned for its Nawabi cuisine, including
      delicacies like Kebabs (such as Galouti Kebab and Seekh Kebab), Biryani, and traditional sweets like Shahi Tukda
      and Malai Gilori. Varanasi offers street food delights like Chaat, Samosa, and the famous Benarasi Paan,
      reflecting the city's culinary vibrancy.

      <br><br>

      Art and Handicrafts: Uttar Pradesh is known for its traditional arts and crafts, including Chikankari
      embroidery from Lucknow, Banarasi silk sarees and brocades from Varanasi, and brassware from Moradabad. The
      state's artisans create exquisite pottery, woodwork, and marble inlay, showcasing their craftsmanship and cultural
      heritage through generations.

      <br><br>

      Natural Beauty: Uttar Pradesh's natural landscapes range from the fertile plains of the Ganges and Yamuna
      rivers to the forested hills of the Himalayan foothills in places like Dudhwa National Park. The Dudhwa Tiger
      Reserve is known for its diverse wildlife, including tigers, elephants, and rare bird species, offering
      opportunities for wildlife safaris and eco-tourism experiences.

      <br><br>

      In summary, Uttar Pradesh's blend of historical landmarks, religious significance, cultural diversity, literary
      heritage, and culinary delights makes it a captivating destination for travelers seeking a deep dive into India's
      rich tapestry of traditions and experiences. Whether exploring ancient temples, attending colorful festivals,
      savoring regional cuisines, or admiring architectural marvels, Uttar Pradesh offers a glimpse into the soul of
      India.`,

      "inut":`<h1>Welcome to Uttarakhand!</h1>
      <img src="photos/ut.png" style="max-width: 700px;"><br>
      Uttarakhand, often referred to as the "Devbhoomi" or "Land of the Gods," is a state in northern India renowned for
      its natural beauty, spiritual significance, and adventure tourism. Nestled in the Himalayas, Uttarakhand offers
      majestic mountain ranges, pristine lakes, ancient temples, and vibrant cultural traditions.

      <br><br>

      Natural Beauty: Uttarakhand is blessed with diverse landscapes ranging from snow-capped peaks to lush green
      valleys and dense forests. The state is home to the majestic Himalayan ranges, including famous peaks like Nanda
      Devi, Trishul, and Panchachuli. Picturesque hill stations such as Nainital, Mussoorie, and Ranikhet attract
      tourists seeking panoramic views, pleasant weather, and tranquility amidst natural surroundings. The Valley of
      Flowers National Park, a UNESCO World Heritage Site, is renowned for its alpine meadows and diverse flora.

      <br><br>

      Spiritual Hub: Uttarakhand is a sacred land with numerous pilgrimage sites revered by Hindus. Haridwar and
      Rishikesh, situated along the banks of the holy Ganges River, are important pilgrimage destinations known for
      their ghats (steps) where devotees perform rituals and take holy dips. Rishikesh is also renowned as the "Yoga
      Capital of the World," attracting yoga enthusiasts and spiritual seekers from around the globe. Badrinath,
      Kedarnath, Yamunotri, and Gangotri are part of the Char Dham Yatra, considered among the holiest pilgrimages for
      Hindus.

      <br><br>

      Adventure Tourism: Uttarakhand is a haven for adventure enthusiasts offering a range of activities such as
      trekking, river rafting, skiing, paragliding, and wildlife safaris. Trekking trails like the Valley of Flowers
      trek, Roopkund trek, and Har Ki Dun trek offer breathtaking views of the Himalayan peaks and alpine meadows. The
      Ganga and Yamuna rivers provide opportunities for white-water rafting, while Auli and Munsiyari are popular
      destinations for skiing and snow sports during the winter season.

      <br><br>

      Cultural Heritage: Uttarakhand's culture is rich and diverse, shaped by its geographical isolation and ancient
      traditions. The state's folk music and dance forms like the Kumaoni and Garhwali dances reflect local customs,
      festivals, and agricultural practices. Traditional festivals such as Holi, Diwali, and Makar Sankranti are
      celebrated with fervor, accompanied by folk songs, dance performances, and community feasts.

      <br><br>

      Handicrafts and Cuisine: Uttarakhand's handicrafts showcase the craftsmanship of local artisans, including
      wood carvings, woolen shawls (Pahadi shawls), and intricately designed copperware. The cuisine of Uttarakhand is
      hearty and reflects its mountainous terrain, with specialties like Garhwali and Kumaoni dishes such as Kafuli,
      Phaanu, Bhang ki Chutney, and Bal Mithai. These dishes are prepared using locally grown ingredients and
      traditional cooking methods, offering a taste of the region's culinary heritage.

      <br><br>

      Environmental Conservation: Uttarakhand places a strong emphasis on environmental conservation and sustainable
      tourism practices. Efforts are made to preserve the state's natural resources, wildlife habitats, and fragile
      ecosystems through initiatives like eco-tourism, waste management programs, and wildlife conservation projects.

      <br><br>

      In summary, Uttarakhand's blend of natural beauty, spiritual sanctity, adventure opportunities, cultural heritage,
      and traditional craftsmanship makes it a unique destination in India. Whether seeking spiritual solace,
      adrenaline-pumping adventures, or cultural immersion, Uttarakhand offers a diverse range of experiences amidst its
      scenic Himalayan landscapes and cultural richness.`,

      "inwb":`<h1>Welcome to West Bengal!</h1>
      <img src="photos/wb.png" style="max-width: 700px;"><br>
      West Bengal, situated in eastern India, is a culturally rich and diverse state known for its literary heritage,
      artistic traditions, festivals, and culinary delights. The state's capital, Kolkata (formerly Calcutta), is a
      bustling metropolis renowned for its intellectual pursuits, colonial architecture, and vibrant cultural scene.

      <br><br>

      Cultural Hub: West Bengal's cultural identity is deeply rooted in its literature, arts, and intellectual
      traditions. The state has produced renowned literary figures such as Rabindranath Tagore, India's first Nobel
      laureate in Literature, and Bankim Chandra Chattopadhyay, who wrote the national song "Vande Mataram." Kolkata's
      College Street is famous for its bookstores and academic institutions, embodying the city's love for literature
      and education.

      <br><br>

      Festivals: West Bengal celebrates a plethora of festivals with zeal and enthusiasm. Durga Puja, the most
      significant festival, showcases elaborate pandals (temporary structures) and artistic idols of Goddess Durga. The
      festival is marked by cultural programs, traditional music (like Rabindra Sangeet), dance (like Durga Nritya), and
      community feasts (bhog). Other festivals like Kali Puja, Diwali, Saraswati Puja, and Pohela Boishakh (Bengali New
      Year) are also celebrated with fervor, reflecting the state's religious diversity and cultural vibrancy.

      <br><br>

      Art and Handicrafts: West Bengal is known for its rich artistic traditions and handicrafts. The state's
      terracotta temples in Bishnupur, adorned with intricate carvings, are a testament to its architectural heritage.
      Kolkata's Kalighat paintings, known for their vibrant colors and depictions of mythological themes, and the
      intricate Jamdani sarees of Shantipur and Fulia are renowned for their craftsmanship. Other handicrafts include
      Dokra metalwork, pottery, and clay dolls from Krishnanagar.

      <br><br>

      Cuisine: West Bengal's cuisine is celebrated for its variety and unique flavors, influenced by Bengali
      traditions and coastal influences. Fish is a staple, with dishes like Machher Jhol (fish curry), Prawn Malai
      Curry, and Bhapa Ilish (steamed hilsa fish) being favorites. Vegetarian dishes such as Shukto (mixed vegetable
      curry), Aloo Posto (potato in poppy seed paste), and Cholar Dal (Bengal gram dal) are also popular. Sweets like
      Rasgulla, Sandesh, and Mishti Doi (sweetened yogurt) are enjoyed year-round and are an integral part of Bengali
      festivals and celebrations.

      <br><br>

      Performing Arts: West Bengal has a vibrant performing arts scene, with Rabindra Sangeet (songs composed by
      Rabindranath Tagore) being a prominent cultural expression. The state is also known for its classical dance forms
      such as Bharatanatyam, Kathak, and Odissi, alongside indigenous folk dances like Baul, Chhau, and Santhal dance.
      The annual Dover Lane Music Conference in Kolkata is a prestigious event showcasing classical music performances
      by renowned artists.

      <br><br>

      Modern Kolkata:
       Kolkata, the cultural capital of India, blends colonial heritage with modern developments.
      Landmarks like the Victoria Memorial, Howrah Bridge, and Marble Palace reflect the city's architectural grandeur.
      Kolkata's vibrant street life, bustling markets (like New Market and College Street), and thriving arts scene
      (with theaters, galleries, and film festivals) contribute to its cosmopolitan charm and cultural vitality.

      <br><br>

      In conclusion, West Bengal's rich cultural heritage, literary achievements, artistic traditions, festivals, and
      culinary delights make it a captivating destination for travelers seeking a blend of history, art, spirituality,
      and vibrant cultural experiences in eastern India. Whether exploring Kolkata's intellectual legacy, attending
      Durga Puja festivities, savoring Bengali cuisine, or admiring traditional arts and crafts, West Bengal offers a
      diverse tapestry of cultural richness and heritage.`

}



function change_state(state) {
    var infobox = document.getElementById("info");
    var state_info = states[state];
    infobox.innerHTML = state_info;
}