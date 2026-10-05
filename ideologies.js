const ideologies = [
  {
    name: "Action Française",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/actionfrancais.png",
    description: "French action (French: Action Française) is a Monarchist and Nationalist political movement in France which was founded in 1899. The movement supported a restoration of the House of Bourbon-Orléans, along with reversing the 1905 law on the separation of Church and State and restoring Roman Catholicism as the state religion. The movement advocated decentralization, with the restoration of pre-Revolutionary liberties to the ancient provinces of France. It aimed to achieve a monarchist corporatist France by means of a coup d'état, most likely involving a transitional authoritarian government.",
    scores: { interference: -25, ownership: 34, tradition: 45, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Agrarian Labor Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/agrarianlabor.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Ailtirí na hAiséirghe",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/architectsofresurrection.png",
    description: "The Architects of the Resurrection (Irish: Ailtirí na hAiséirghe), was a Fascist political party in Ireland, founded by Gearóid Ó Cuinneagáin in March 1942. Focused on the revival of the Irish language, they sought to create a one-party Corporatist state rejecting Liberal Democracy, jews and freemasons. The party promoted strong Irish Nationalism and even Pan-Celtism, supporting Welsh independence movements and showing open hostility to the partition of Ireland. Despite strong Nationalism and inspiration from the Papal Encyclicals, the party was tolerant of Protestantism, using Christian rather than Catholic terminology.",
    scores: { interference: -15, ownership: 5, tradition: 37, faith: 29 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic", "Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "All-Russian Fascist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/russianfascism.png",
    description: "The All-Russian Fascist Party (Russian: Всероссийская фашистская партия); later Russian Fascist Union, was a movement by Russian Émigré based in Manchukuo. It was staunchly anti-Communist and developed close ties to Imperial Japan after it's invasion of Manchuria; starting a Women's and a Youth wing. The programme of the party sough to establish a Corporatist Fascist state in Russia, commited to the Russian Orthodox Church. It called for class co-operation instead of class conflict, with some leaders even calling for the restoration of the Monarchy. It advocated Russian Irredentism and ultra-Nationalism.",
    scores: { interference: -36, ownership: 23, tradition: 30, faith: 34 },
    tags: {
      region: ["Europe (Slavic)", "East Asia"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Army Comrades Association",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/blueshirts.png",
    description: "The Army Comrades Association (ACA), better known as the Blueshirts (Irish: Na Léinte Gorma), was an Irish para-fascist organisation founded in 1932 by Eoin O'Duffy. It was strongly anti-communist, corporatist, and nationalist, drawing inspiration from Mussolini’s Italy and the Catholic social teachings of the time. The movement opposed the Fianna Fáil government, organised large rallies, and later formed part of Fine Gael before O'Duffy split to form the more radical National Corporate Party.",
    scores: { interference: -18, ownership: 12, tradition: 32, faith: 38 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Authentic Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/authenticparty.png",
    description: "The Authentic Party (Partido Auténtico) was a Cuban revolutionary-nationalist party founded by Ramón Grau San Martín after the 1933 revolution. It combined anti-imperialist nationalism, social reform, and a rejection of both pure liberalism and communism. While not strictly fascist, it contained corporatist and authoritarian-nationalist currents, emphasised Cuban sovereignty against foreign (especially U.S.) influence, and promoted a form of national solidarity and state-guided social justice rooted in the 1933 programme.",
    scores: { interference: -10, ownership: -8, tradition: 15, faith: 5 },
    tags: {
      region: ["North America"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Ba'ath Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/baath.png",
    description: "The Arab Socialist Ba'ath Party (Arabic: حزب البعث العربي الاشتراكي, romanized: Ḥizb al-Ba‘th al-‘Arabī al-Ishtirākī) was a political party founded in Syria by Michel Aflaq, Salah al-Din al-B, and associates of Zaki al-Arsuzi. The party espoused Ba'athism, which is an ideology mixing Arab Nationalist, pan-Arab, Arab Socialist, and anti-Imperialist interests. Ba'athism calls for the unification of the Arab world into a single state. Its motto, \"Unity, Freedom, Socialism\", refers to Arab unity and freedom from non-Arab control and interference as well as supporting socialism, while rejecting the Marxist class-struggle.",
    scores: { interference: -30, ownership: -35, tradition: 15, faith: -13 },
    tags: {
      region: ["MENA"],
      faith: ["Secular", "Islam"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Balli Kombëtar",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ballikombetar.png",
    description: "The National Front (Albanian: Balli Kombëtar) was an Albanian Nationalist and anti-Communist resistance movement during the Second World War. Midhat Frashëri, one of its leaders believed that Albanian provinces under the Ottoman Empire were unfairly partitioned during World War I amongst Yugoslavia and Greece, essentially advocating for a greater Albania. It's irredentism focused on making Albanians free from foreign influence, while also calling out anti-patriots, traitors, lackeys, troublemakers, speculators and spies. The Balli Kombëtar had both a strong fascist wing and a strong agrarian wing.",
    scores: { interference: 12, ownership: -8, tradition: 28, faith: 15 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Bolivian Socialist Falange",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/bolsocfal.png",
    description: "The Bolivian Socialist Falange (Spanish: Falange Socialista Boliviana) is a Falangism-inspired party founded in 1937 by Óscar Únzaga de la Vega. It combines nationalism, corporatism, and an 'heterodox' form of socialism focused on 'human solidarity' with a strong emphasis on Catholic values. After WW2, the party's stance evolved from an adherence to Spanish falangism to a more moderate form of statism; with the leaders adopting a strong anti-communist stance, with its leaders being particularly critical of Cuba's Fidel Castro following his emergence in the 50's.",
    scores: { interference: -12, ownership: 5, tradition: 35, faith: 40 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Bowdenism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/bowdenism.png",
    description: "Bowdenism is a term for the ideological framework of Jonathan Bowden; an English political activist, orator, writer and artist. Opposed to Liberalism, Democracy and Egalitarianism, they fought to restore the eternal values and principles that have become submerged beneath the corrosive tsunami of the modern world. Bowden expressed pagan religious beliefs, focusing more on the spiritual and esoterical concepts. He preached that hierarchies are natural and good for society and that native Europeans are justified in asserting their cultural, ethnic, psychological and spiritual hegemony over Europe.",
    scores: { interference: 8, ownership: 12, tradition: 45, faith: -25 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist", "Futurist"]
    }
  },
  {
    name: "Brazilian Integralist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/brazilianintegralism.png",
    description: "The Brazilian Integralist Action (Portuguese: Ação Integralista Brasileira), was a political party in Brazil. It's ideology of Brazilian Integralism was developed by its leader Plínio Salgado. It denounced Materialism, Liberalism, and Marxism, proposing a Corporatist and Clericalist alternative for the working class. It promoted Roman Catholic Spiritualism as the \"natural law\" and considered Christian virtues to be driving factor for their programme. Greatly inspired by Fascism, it functioned like a paramilitary organization with uniformed ranks. They preached a \"Revolution of the Self\"; abandonment of selfish and evil values.",
    scores: { interference: -12, ownership: 3, tradition: 35, faith: 40 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Brazilian Labour Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/getullism.png",
    description: "The Brazilian Labour Party (Portuguese: Partido Trabalhista Brasileiro) was a political party in post-WW2 Brazil, characterized by it's ideology of Getulism; named after the leader Getúlio Vargas, who served the country as it's 14th and 17th president. Emerging from anti-Communist activism, it would invision a Corporatist Totalitarian Brazil, free of foreign influence and Radicalism. Like the Italian Fascists, they denied the class struggle, claiming that economic growth was on the side of businessmen and workers, implementing the minimum wage and granting workers job stability after ten years of employment.",
    scores: { interference: -25, ownership: 0, tradition: 25, faith: 18 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Breton National Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/brent.png",
    description: "The Breton National Party (Breton: Strollad Broadel Breizh) was a nationalist party in Brittany that existed from 1931 to 1944. The party was disbanded after the liberation of France in World War II. It was also closely associated with Fascist ideology. The PNB was formed in the aftermath of split between Federalists and Nationalists within the Breton Autonomist Party (PAB), with a clearly nationalist agenda, namely seeking Breton independence from France. The party was influenced by Celticist ideas, and advocated for Pan-Celtism, modelling its aspirations on Irish independence movements.",
    scores: { interference: 20, ownership: 11, tradition: 20, faith: 20 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "British Union of Fascists",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/mosleyism.png",
    description: "The British Union of Fascists (BUF) was a British fascist political party formed in 1932 by Sir Oswald Mosley. Heavily influenced by Italian Fascism, Mosley's variant showed a different approach focusing on social equality and life quality trough Welfarism and maternal feminism. The party rejected Communism, Capitalism, jewish influence and Racialism. The programme invisoned a Corporatist and Isolationist Britain, living in harmony with the people under it's colonial control, with the Monarchy being a mere national symbol. It focused on reformation and even saw success in participating in the British elections.",
    scores: { interference: -13, ownership: 9, tradition: 22, faith: 5 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Centre Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/centreparty.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Oceania"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Chiangism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/kuomitang.png",
    description: "The Three Principles of the People (Chinese: 三民主義), also known as Tridemism is a political philosophy developed by Sun Yat-sen as part of a philosophy to improve China during the Republican Era and later in Taiwan during the Dang Guo era. The three principles are often translated into and summarized as Nationalism, Democracy, and the livelihood of the people (or welfarism). This philosophy has been claimed as the cornerstone of the nation's policy as carried by the Kuomintang.",
    scores: { interference: -25, ownership: 19, tradition: 30, faith: 15 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism", "Georgism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Crusade of Romanianism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/crusadeofromanianism.png",
    description: "Crusade of Romanianism was a splinter group from the Iron Guard. Opposed to both imported ideologies and what it perceived as internal deviations. It rejected the extremes of both Communism and Third Position, advocating instead for a National path; \"neither right, nor left\". Their doctrine emphasized the primacy of the nation over class struggle, while simultaneously criticizing forms of anti-Semitism that it deemed counterproductive, distinguishing between antisemitism and \"anti-Romanianism\". It promoted a form of Social and National solidarity that was skeptical of foreign political models.",
    scores: { interference: 13, ownership: -20, tradition: 37, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Czech National Socialist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/czechnatsoc.png",
    description: "The Czech National Social Party (Czech: Česká Strana Národně Sociální) is a political party in the Czech Republic that played an important role in Czechoslovakia during the interwar period. The party; founded in 1897, relied on the social traditions of Hussitism and Taboritism, as well as \"collectivizing by means of development, surmounting of class struggle by national discipline and moral rebirth. It opposed Communism, even showing sympathy to the Czech Fascist movements, while openly advocating for Czechoslovakism and Nationalism with a strong focus on Reformation over Marxist struggle.",
    scores: { interference: -3, ownership: -28, tradition: 12, faith: 4 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Danish People's Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/danishpeoples.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Democratic Republican Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/demreppar.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Distributism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/distributism.png",
    description: "Distributism is an economic theory of English Christian and political writers G. K. Chesterton and Hilaire Belloc, that was later utilized in various ideologies. Based upon Catholic social teaching principles, it viewed both Laissez-faire Capitalism and State Socialism as equally flawed and exploitative, instead calling the right to property fundamental, promoting traditional and agrarian values and calling the family the centrepiece of society. It called for the Redistribution of wealth and productive assets, taxation of excessive property ownership, and small-business subsidization.",
    scores: { interference: 41, ownership: 39, tradition: 33, faith: 40 },
    tags: {
      region: ["Universal"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative", "Reactionary"]
    }
  },
  {
    name: "Ecofascism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ecofascism.png",
    description: "Ecofascism is a term used to describe groups which combine Environmentalism with Fascism. It adheres to the deep ecological principle of humanity being interconnected with nature, with a distinct focus on the synergy between a human population and its ancestral land, preferring insular, traditional societies. It opposes the Globalist progressive attitudes of modern ecological movements, immigration and overpopulation; often displaying ideas of anti-Clericalism for Esoteric and Mysticist European Pagan beliefs. It's interpretations appear as both mild agricultural reforms and Revolutionary Accelerationism.",
    scores: { interference: 18, ownership: -12, tradition: 45, faith: 5 },
    tags: {
      region: ["Universal"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Ecuadorian Nationalist Revolutionary Action",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ecuadornatsynd.png",
    description: "Acción Revolucionaria Nacionalista Ecuatoriana (ARNE) was an Ecuadorian fascist and national-syndicalist party founded in 1942 under the influence of Spanish Falangism. Led by Jorge Luna Yépez, it combined intense nationalism, anti-communism, anti-capitalism, corporatism and hierarchical organisation. It sought a ‘third-position’ Ecuadorian state free of both liberal democracy and Marxism, emphasising national unity, social justice through syndicates, and traditional Hispanic-Catholic values adapted to local conditions.",
    scores: { interference: -15, ownership: -12, tradition: 32, faith: 30 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Ethnocacerism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ethnocacerism.png",
    description: "Ethnocacerism (Spanish: Movimiento etnocacerista, also sometimes referred to as the Movimiento Nacionalista Peruano) is a Peruvian Ethnic Nationalist movement that seeks to establish a dictatorship of the proletariat led by the country's Indigenous communities and their descendants. The ethnocacerist movement has been described as having Fascist traits, with Vice calling it \"an idiosyncratic mix of economic Populism, and Xenophobia. Especially towards Peru's southern neighbor Chile and the mythologizing of the supposed racial superiority of 'copper skinned' Andeans.",
    scores: { interference: 23, ownership: -12, tradition: 40, faith: 10 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Euskadi Carlism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/euskadicarlism.png",
    description: "Euskadi Carlism, also referred to as Carlos Hugo Carlism, is a variation of Carlism that combines traditionally monarchist ideas like having a king and Christian values with traditionally socialist ones like wealth equality. It is motivated by Catholic social teaching and the Christian Left, but it does not limit its membership to practicing Catholics due to \"the reality of the secularization of modern society\". Between 1970 and 1972 the Carlist Party organised Congresses of the Carlist People in Arbonne, in which it adopted a program for the ideological change of Carlism towards self-management Socialism.",
    scores: { interference: 28, ownership: 22, tradition: 43, faith: 45 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Falange Española",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/falangaesp.png",
    description: "The Spanish Phalanx (Falange Española), was a National Syndicalist political organization active in pre-WW2 Spain. It's ideology; called Falangism, preached National Catholicism, Traditionalism and Reactionary sentiments. It called for a Pan-Hispanic union of Spain with Hispanic America. They openly opposed Bolshevism, Marxism, Capitalism and Freemasonry; deeming them harmful or a social injustice. The Falange were militarist, wanting Spain to be independent and of great status in the world. They turned very Insurrectionist, playing an important role in the events leading up to the Spanish Civil War.",
    scores: { interference: 23, ownership: -24, tradition: 43, faith: 45 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Fatherland Front",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/fatherlandfront.png",
    description: "The Fatherland Front (Austrian German: Vaterländische Front), was the ruling political organisation of Austria before the Anschluss, led by it's Chancellor Engelbert Dollfuß. The movement; often called Austrofascism, aspired a Catholic Corporatist Austria; independent from Germany which it considered to be Protestant-dominated. Inspired by the social teaching of Pope Pius XI, they openly opposed Laissez-faire Capitalism, Communists, Social Democrats as well as the Austrian Nazis and Hitler's racialist views. They were focused on agricultural reforms and the stabilization of the country after the Civil War.",
    scores: { interference: -7, ownership: 40, tradition: 35, faith: 45 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Fatherland Socialist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/fatherlandsocialist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Caucasus"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Fiumanism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/fiumanism.png",
    description: "Fiumanism is an ideology named after Gabriele D'Annunzio; an Italian poet who seized and ruled the city of Fiume from 1919 to 1920. Romanticist, futurist and very symbolic in origin, it envisioned a nation of \"superior individuals\" like poets, \"heroes\" and \"supermen\"; adopting the concept of an Ubermensch from Nietzschean philosophy. It declared music a \"religious and social institution\" and taught locals yoga and karate. Both the movement's ideas and his aesthetics were an influence upon Italian Fascism. Fiume became a corporatist state, combining Sorelian National Syndicalist and Corporatist doctrines.",
    scores: { interference: 27, ownership: -20, tradition: -35, faith: -35 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular", "Pagan"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Futurist"]
    }
  },
  {
    name: "Francist Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/francist.png",
    description: "The Francist Movement (French: Mouvement Franciste) was a French Fascist league created by Marcel Bucard in September 1933. The movement was heavily inspired by Mussolini's National Fascist Party and received significant funding and support from the Italian Fascist movement. It was staunchly against Anarchism, Marxism and Bolshevism; all deemed social unjustice that should be fought. It reached a membership of 10,000 and was financed by the Italian dictator, Benito Mussolini. Its members were deemed the Francistes or Chemises bleues (Blueshirts) and adopted the Roman salute.",
    scores: { interference: -19, ownership: -24, tradition: 33, faith: 26 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "French Popular Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/frenchpopular.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "French Renewal",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/frenchrenewal.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "French Social Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/frenchsocial.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Futurism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/futurism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist"]
    }
  },
  {
    name: "Gajdism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/gajdism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic", "Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Georgism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/georgism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Georgism"],
      orientation: []
    }
  },
  {
    name: "Golden Square",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/goldensquare.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Secular", "Islam"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Guild Socialism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/guildsocialism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: []
    }
  },
  {
    name: "Guión Rojo",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/guionrojo.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Hlinkas Slovak People's Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/hlinkas.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"]
    }
  },
  {
    name: "Hungarism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/hungarism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)", "Central Asia"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Independent Workers' Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/UAP.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Iron Guard",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ironguard.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism", "Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Ivan Ilyin Thought",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ivanilyin.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "JONS",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/jons.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Kataeb Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/kataeb.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Kokkashugi",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/kokkashugi.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Kokutairon",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/kokutairon.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist", "Monarchist"]
    }
  },
  {
    name: "Kōdōha",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/kodoha.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Lithuanian Nationalist Union",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/lithuanian.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Lusitanian Integralism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/lusitanian.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Lys Noir",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/lysnoir.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Distributism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Metaxism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/metaxism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Mladorossy",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/mladorossy.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Monarchist"]
    }
  },
  {
    name: "Nacionalismo",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nacionalismo.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Nasjonal Samling",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nasjonalsamling.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism", "Nationalized Socialism"],
      orientation: ["Progressive", "Reactionary Modernist"]
    }
  },
  {
    name: "Nasserism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nasserism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "National Alliance of Russian Solidarists",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nars.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "National Corps",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalcorps.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Eastern Orthodox"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Fascist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalfascist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Futurist"]
    }
  },
  {
    name: "National Front",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalfront.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalparty.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Radical Camp",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalradicalcamp.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative", "Reactionary Modernist"]
    }
  },
  {
    name: "National Radical Movement for Renewal",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nrmr.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "National Social Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalsocial.png",
    description: "The National Social Movement (Bulgarian: Национално социално движение) was a Bulgarian organisation led by Aleksandar Tsankov in the 1930s. It promoted authoritarian nationalism, corporatism and anti-communism, preaching its own idea of 'social nationalism' which for Tsankov involved support of a national workers' syndicate against class struggle. In opposition to other Bulgarian parties, it rejected racialism; Tsankov giving aid to jewish families during WW2.",
    scores: { interference: -28, ownership: -12, tradition: 18, faith: 8 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism", "Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Socialist Movement in the Netherlands",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nsb.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism", "Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "National Socialist Movement of Chile",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nsmchile.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "National Socialist Workers' Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/NSPR.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Synarchist Union",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalsynarchist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/natsyndmovement.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist", "Monarchist"]
    }
  },
  {
    name: "National Union of Greece",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationaluniongreece.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Nationalist Front of Mexico",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nationalistfrontmexico.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Neosocialism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/neosocialism.png",
    description: "Neosocialism was a political faction that existed in France and Belgium during the 1930s established by Marcel Deat. Marcel Deat believed in class collaboration and national solidarity, advocated Social Corporatism as a model of organisation, replaced the Marxist socialist mode of production with anti-Capitalism and supported a technocratic state, which would plan the economy and in which parliamentarism would be replaced by political technocracy. Neosocialism also believes in a revolution from above, which they termed as a constructive revolution.",
    scores: { interference: -23, ownership: -19, tradition: 7, faith: -7 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "New Swedish Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/newswedishmovement.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Nichirenism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nichirenism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"]
    }
  },
  {
    name: "Nouvelle Droite",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/nouvelledroitte.png",
    description: "The New Right (French: Nouvelle Droite), is a political movement and the origin of the wider European New Right, which emerged in France during the late 1960s. It openly opposes Multiculturalism, Liberal Democracy, Capitalism and the mixing of different cultures within a single society. It pushes for an \"Archeofuturistic\"; non-Reactionary \"Revolutionary Conservative\", method to the reinvigoration of the Pan-European identity and culture, while encouraging the preservation of regions where Europeans may reside, like in the Identitarian movement.",
    scores: { interference: 30, ownership: 20, tradition: 16, faith: -18 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Organisation of Yugoslav Nationalists",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/oryuna.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Pan-Iranist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/paniranist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Papadopoulism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/papadopoulism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Party of National Socialists",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/polishnatsoc.png",
    description: "The Party of National Socialists (Polish: Partia Narodowych Socjalistów), was a polish National Socialist party founded in 1933. The PNS developed its own variant of National Socialism that was explicitly anti-German and declaredly Democratic. The PNS proposed the creation of a bloc of Slavic states and, on a global scale, the establishment of a general union of National Socialist republics. It declared attachment to Christianity, though anti-Clerical tendencies sometimes emerged. While critical of Fascism and Nazism as foreign models, it acknowledged the anti-Semitism and Revisionist aims with approval.",
    scores: { interference: -1, ownership: -18, tradition: 8, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Patriot Front",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/patriotfront.png",
    description: "The Patriot Front is an active American neo-Fascist group in the USA. The movement focuses on promoting White Nationalism and the tradition of the \"pre-Columbian forefathers\"; seeing the American identity as an extraordinary one. It emphasizes a need for a hard reset of society and a return to the traditions and virtues of the European Settlers, calling for a balance of personal liberty alongside social responsibility for the betterment of both. It openly opposes Modernism, Leftism, Democracy, Communism and modern-time points of discourse like abortion, gay rights and mass migration.",
    scores: { interference: 22, ownership: 28, tradition: 41, faith: 18 },
    tags: {
      region: ["North America"],
      faith: ["Secular", "Protestant", "Catholic", "Eastern Orthodox", "Pagan"],
      economy: [],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Patriotic People's Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/finnishfascism.png",
    description: "The Patriotic People's Movement (Finnish: Isänmaallinen kansanliike) is a Finnish Nationalist and anti-Communist political party which was the continuation of it's predecessor (The Lapua Movement). Ideologically the party was anti-Communist and very Nationalistic, endorsing an aggressive foreign policy against the Soviet Union and hostility towards the Swedish language. The creation of a Greater Finland was one of the party's big long-term goals, though It's manifested purpose was to be the Christian-moral conscience of the parliament.",
    scores: { interference: -19, ownership: -14, tradition: 36, faith: 22 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Peronism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/peronism.png",
    description: "The Justicialist Party (Spanish: Partido Justicialista), is a political party in Argentina, known for it's ideology of Peronism; named after the founder Juan Perón and his wife Eva. Inspired by European Fascism, it created a more left-wing approach, focused on Patriotism, Ehtno-Nationalism and the expansion of worker's and women's rights. The ideology opposed Communism, Anarchism and Capitalism, though Peron's views were heavily based on the Socialist rhetoric. It promoted a \"worker-style\" Populist mix of Corporatism and Socialism, heavily shaped by the Catholic social teachings.",
    scores: { interference: -8, ownership: -11, tradition: 19, faith: 13 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Petainism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/petainism.png",
    description: "Petainism, or the Révolution nationale (National Revolution) was the official ideological program promoted by Vichy France which had been established in July 1940 and led by Marshal Philippe Pétain. Pétain's regime was characterized by anti-Parliamentarism, personality cultism, Xenophobia, promotion of traditional values, rejection of the constitutional separation of powers, and State Corporatism, as well as opposition to the theory of class conflict. Though not Fascist, it exhibited characteristics of the traditional right; being strongly clericalist and eulogising national religious figures such as Joan d'Arc",
    scores: { interference: -22, ownership: -3, tradition: 40, faith: 35 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Phibunism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/phibunism.png",
    description: "Phibunism is a term for the ideological framework of Thai Field Marshal Plaek Phibunsongkhram, who governed Thailand; earlier Siam, from 1939 to 1957. The regime; inspired by Italian Fascism, focused on Thai Nationalism, strong Sinophobia; along with anti-Communism. Allied to the Imperial Japan, it opted for a Militarist Agrarian based state, passing cultural mandates promoting Western-style dress and emphasizing the Thai language. Although the ideology played a part in changing the Absolute Monarchy to a Constitutional one, some factions supported the King as a national symbol.",
    scores: { interference: -26, ownership: -21, tradition: 28, faith: 6 },
    tags: {
      region: ["South Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Political Circle \"Zveno\"",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/zveno.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Poujadism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/poujadism.png",
    description: "Poujadism is a political ideology and movement named after Pierre Poujade. On 29 November 1953, Pierre Poujade created the Union de Défense des Commerçants et Artisans (Defense Union of Shopkeepers and Craftsmen) to organize tax protests. He articulated the economic interests and grievances of shopkeepers and other proprietor-managers of small businesses facing economic and social change. Poujadism was opposed to industrialization, urbanization, and American-style modernization, which were perceived as a threat to the identity of rural France.",
    scores: { interference: 22, ownership: 29, tradition: 20, faith: 15 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Distributism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Pērkonkrusts",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/perkonkrusts.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Qasimism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/qasimism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Ragnarok Circle",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ragnarok.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Pagan"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist", "Futurist"]
    }
  },
  {
    name: "Ratniks",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ratniks.png",
    description: "The Union of Bulgarian National Legions, commonly known as the Ratniks, was a far-right nationalist organisation active in Bulgaria during the late 1930s. It promoted authoritarian nationalism, corporatism, anti-communism and the defence of traditional Bulgarian culture. The movement emphasised national unity, social discipline and opposition to both liberal democracy and Marxist internationalism.",
    scores: { interference: -25, ownership: -15, tradition: 25, faith: 18 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Republican Fascist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/republicanfascist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Futurist"]
    }
  },
  {
    name: "Revolutionary Mexicanist Action",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/revolutionarymexicanist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["North America"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Revolutionary National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/revnatsynd.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Rexist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/rexism.png",
    description: "The Rexist Party was a political party active in Belgium from 1935 until 1945. It was deeply rooted in National Catholicism, calling for a national \"moral renewal\". The party name came from the phrase \"Christ the King\" (Latin: Christus Rex). It sough to achieve a Corporatist and Royalist Belgium, while also advocating for Belgian Unitarism. Modelled on Italian Fascism and Spanish Falangism, it rejected Capitalism, Liberalism and Marxism, idealising rural life and traditional family values instead. The party later called for \"Burgundian Nationalism\" - the Nationalism within the framework of a pan-German state.",
    scores: { interference: -29, ownership: -25, tradition: 38, faith: 45 },
    tags: {
      region: ["Europe (Romance)", "Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Romanian Front",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/romanianfront.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Salazarism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/salazarism.png",
    description: "Salazarism is an ideology based on the \"Estado Novo\" regime of António de Oliveira Salazar, who ruled Portugal from 1933 to 1974. His rule; characterized by opposition to Communism, Socialism, Syndicalism, Anarchism and Liberalism, focused on economic stabilization of the country by a Corporatist economy with Distributist imputs. The regime was staunchly Reformist and keen on keeping Portugal from joining World War II. It focused on enforcing the rule by secret police activity and on paying off Portugal's public debt; all to focus on the group considered the most important - the family.",
    scores: { interference: -7, ownership: 28, tradition: 35, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Sansepolcrismo",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/sansepolcrismo.png",
    description: "Sansepolcrismo was an Italian movement that preceded Fascism, based on the rally organized by Mussolini at Piazza San Sepolcro in Milan on March 23, 1919, where he proclaimed the manifesto of the Fasci Italiani di Combattimento (English: Italian Fasces of Combat). The ideology advocated for a more Revolutionary Nationalism, combined with a National Syndicalist economy and Futurist ideals. Known for using paramilitary violence against its political opponents and calls for a Nationalist Revolution to institute a government of a new ruling class, one made up primarily by the veterans of WW1.",
    scores: { interference: 19, ownership: -16, tradition: -20, faith: -28 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive", "Futurist"]
    }
  },
  {
    name: "Scottish Democratic Fascist Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/scottishfascist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Serbian Action",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/serbianaction.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Monarchist"]
    }
  },
  {
    name: "Socialist Party of Japan",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/spj.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular", "Shinto"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist", "Monarchist"]
    }
  },
  {
    name: "Sosism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/sosism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Spenglerianism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/spenglerianism.png",
    description: "Spenglerianism is a term used for the political and philosophical views of Oswald Spengler; a German polymath. In his books, he strongly criticized Materialism, Capitalism, Communism, Political Liberalism, Rationalism and Democracy; which he considered an Anglo-French remnant. His concept of a \"Prussian Socialism\" rebuked the Marxist approach, proposing a more Corporatist-like economic system, where the proletariat doesn't exploit the exploiters. He openly opposed labor strikes, trade unions and progressive taxation; simuntaniously celebrating private property and market competition.",
    scores: { interference: -14, ownership: -1, tradition: 45, faith: 12 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular", "Pagan"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Squadrismo",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/squadrismo.png",
    description: "The Squadrismo were the fascist militias that were organised outside the authority of the Italian state and led by local leaders called ras (a title given to Abyssinian headmen). The group was initially Mussolini loyalists but later they felt betrayed by his efforts to moderate the movement and consolidate power through traditional state institutions after 1921. The radical local leaders, or ras, believed Mussolini was abandoning the \"revolutionary\" roots of Fascism and compromising with the liberal establishment they sought to destroy. The group adhered to anarcho-Fascism and Fascist Syndicalism.",
    scores: { interference: 42, ownership: 23, tradition: -17, faith: 14 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist"]
    }
  },
  {
    name: "Strasserism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/strasser.png",
    description: "Strasserism was an ideology created by the Strasser Brothers (Otto & Gregor) as a splinter faction to Nazism following Hitler's decision to abandon points within the initial 25 point program of the NSDAP. Focused on the national rejuvination of the German nation, culture and the worker, They believed in the de-urbanisation and re-agrarianization, seeing the agrarian lifestyle more tied to it's culture and history. They advocated for a medieval guild economy based on Social Corporatism. They conceived the nation not as an instrument of power, but as a living organism, bound together by shared culture, labour and destiny.",
    scores: { interference: -33, ownership: -29, tradition: 17, faith: 15 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Superfascism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/superfascism.png",
    description: "Superfascism is a term for the ideological theory of Italian philosopher and writer - Julius Evola. Derived from his admiration for Buddhism, Eastern Mysticism, Western Esotericism and the Occult, it preaches a doctrine of \"Magical Idealism\" that harshly rejects Modernism and consolidates the Hindu concept of Kali Yuga; humanity being stuck in a Dark Age of unleashed Materialistic appetites. The ideology also has a concept of racism of the body, soul, and spirit; hoping for the return of the \"celestial\" Aryan race. It invisions a deeply Spiritual Pagan empire based on hierarchy, order, discipline and obedience.",
    scores: { interference: -15, ownership: 23, tradition: 50, faith: 23 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary"]
    }
  },
  {
    name: "Swedish Socialist Gathering",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/SSS.png",
    description: "Swedish Socialist Gathering (Svensk Socialistisk Samling, formerly the National Socialist Workers’ Party) was the principal Swedish National Socialist party under Sven Olov Lindholm. After an early phase closely copying German Nazism it rebranded toward a more national ‘Swedish socialism’, retaining antisemitism, anti-capitalism, anti-communism, corporatism and authoritarian nationalism. It organised youth and paramilitary structures and advocated strong state direction of the economy in the service of the national community.",
    scores: { interference: -28, ownership: -22, tradition: 25, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Syrian Social Nationalism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/syriannatsoc.png",
    description: "Syrian Social Nationalism was the ideology established by the Syrian Social Nationalist Party founded by Antoun Saadeh. It advocates the establishment of a Greater Syrian nation state spanning the Fertile Crescent, including present-day Syria, Lebanon, Jordan, Iraq, Kuwait, Palestine region, Cyprus, Sinai of Egypt, Hatay and Cilicia of Turkey, based on geographical boundaries and the common history people within the boundaries share. The movement itself was largely syncretic, incorporating Pan-Syrianism and a form of National Socialism as its ideological base.",
    scores: { interference: -21, ownership: -26, tradition: 12, faith: -10 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Szeged Idea",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/szegedidea.png",
    description: "The Szeged Idea (Hungarian: Szegedi gondolat) was an ideology of post WW1 Hungarians - especially the military officer and Prime Minister of Hungary from 1932 - Gyula Gömbös. Heavily inspired by his visits to Fascist Italy, he promoted irredentist claims, declaring violence to be \"an acceptable means of statecraft\". Focused on Agrarianism and Corporatism, his Unity Party (Hungarian: Egységes Párt) recanted previous antipathy to Jews and called for an \"unitary Hungarian nation with no class distinctions\" and to expand the size and power of the Hungarian military; much to Hitler's dismay.",
    scores: { interference: -19, ownership: -14, tradition: 38, faith: 29 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"]
    }
  },
  {
    name: "Tacuara Nationalist Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/tacuara.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Tatenokai",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/tatenokai.png",
    description: "The Tatenokai (Japanese: 楯の会, 楯の會), otherwise known as Shield Society was a private militia in Japan dedicated to traditional Japanese values and veneration of the Emperor. It was founded and led by author Yukio Mishima. It was formed on the premise of preventing indirect aggression by proponents of foreign ideology seeking to destroy Japanese traditional culture, and protecting the dignity of the Emperor as a symbol of Japan's national identity. It was known for it's failed coup attempt on the Japanese Government on November 25, 1970.",
    scores: { interference: 10, ownership: 20, tradition: 45, faith: 30 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: [],
      orientation: ["Reactionary", "Monarchist"]
    }
  },
  {
    name: "Third International Theory",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/gaddafism.png",
    description: "The Third International Theory (Arabic: النظرية العالمية الثالثة) was the style of government/ideology proposed by Muammar Gaddafi on 15 April 1973 during his Zuwara speech. It combined elements of Arab Nationalism, Islamism, Nasserism, anti-Imperialism, Islamic Socialism, left-wing Populism, African Nationalism, pan-Africanism, pan-Arabism, and direct Democracy. It was proposed by Gaddafi as an alternative to Capitalism and Marxism–Leninism for Third World countries, based on the stated belief that both of these ideologies had been proven invalid.",
    scores: { interference: -35, ownership: -40, tradition: 20, faith: 30 },
    tags: {
      region: ["MENA", "Africa"],
      faith: ["Secular", "Islam"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Tōhōkai",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/tohokai.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Union of Bulgarian National Legions",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/bulgarianfascism.png",
    description: "The Union of Bulgarian National Legions (Bulgarian: Съюз на Българските Национални Легиони, Sayuz na Balgarskite Natsionalni Legioni) was a Bulgarian ultranationalist organization founded in 1932 by Hristo Lukov. The movement was initially anti-Monarchist but later became fond of the Bulgarian monarchy in late WW2. The organization had an ideology close to Fascism, including creating a totalitarian one-party regime, a ban on the market economy and total control by the state over the economy and the society, anti-Semitism and hostility towards foreigners, anti-communism, etc.",
    scores: { interference: -25, ownership: -30, tradition: 35, faith: 27 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Nationalized Socialism", "National Syndicalism", "Corporatism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Union of Dutch National Solidarists",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/verdinaso.png",
    description: "The Union of Dutch National Solidarists (Dutch: Verbond van Dietsche Nationaal-Solidaristen) was a political party active in Belgium and Netherlands between 1931 and 1941. They called their ideology National Solidarism. It was a mix of Integral Nationalism and Corporatism; influenced by Fascist Italy and Portugal's Estado Novo. They called for the reunification of Flanders with the Netherlands, imagining a corporative society ruled by the Belgian King. The party wished to reform society in an organic sense - growing gradually, naturally, with respect for its nature, history and tradition.",
    scores: { interference: -15, ownership: -10, tradition: 30, faith: 15 },
    tags: {
      region: ["Europe (Romance)", "Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "United National Independence Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/UNIP.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Africa"],
      faith: ["Protestant"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Ustaše",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/ustase.png",
    description: "The Ustaše (Croatian Revolutionary Movement) was a Croatian fascist and ultra-nationalist organisation founded by Ante Pavelić. It sought an independent Greater Croatia through revolutionary violence and later ruled the Independent State of Croatia (1941–1945). Ideology fused extreme Croatian ethnic nationalism, national Catholicism, corporatism, anti-Serbian sentiment and a cult of the leader and the warrior. It rejected both liberalism and communism, aiming at a totalitarian national community purified of ‘foreign’ elements and organised on hierarchical, traditional and Catholic principles.",
    scores: { interference: -25, ownership: -10, tradition: 42, faith: 45 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Valoisism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/proudhoncercle.png",
    description: "Valoisism is a term for the views of French journalist and politician Georges Valois, who led the first ever National Syndicalist movement called \"Cercle Proudhon\". Being very critical of Democracy, they preached a combination of Integralism and a national adaptation of Syndicalism, focusing on the revolt against \"bourgeois rule\". Though opposed to Conservatism, Valois allied himself with the French Right and was supportive of Orléanism; a Constitutional Monarchy. He was one of the first supporters of Italian Fascism, which he expressed great admiration for, despite his lighter approach to Socialism.",
    scores: { interference: 13, ownership: -7, tradition: 20, faith: 18 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive", "Monarchist"]
    }
  },
  {
    name: "VAPS Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/vaps.png",
    description: "Union of Participants in the Estonian War of Independence (known as Vaps Movement) was an anti-Communist Estonian political organization, led by former military officers of the 1918–1920 Estonian War of Independence. The league rejected the German racial ideology and openly criticized the Nazi persecution of Jews and did not adopt a goal of territorial expansion, instead advocating for a more Authoritarian and Nationalist government and financial support for veterans. Despite being banned in 1935, the movement maintained good relations with Finnish fascist movements.",
    scores: { interference: -1, ownership: 6, tradition: 30, faith: 22 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"]
    }
  },
  {
    name: "Wang Jingwei Thought",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/wangjingwei.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Yellow Socialism",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/yellowsocialism.png",
    description: "Yellow Socialism; also known as Yellow Unionism, was an economic system proposed in 1902 in France by Pierre Biétry as an alternative to Marxism; critiqued by both Marx and Lenin for being too Reactionary and for its opposition to the war. It envisioned workers organizing unions which would operate in parallel with groups of businesses, much like Corporatism. Above this would be a strong Authoritarian State. The concept included Nationalism and was partly Antisemetic, characterized by opposition to immigraion; saying competition from immigrants reduced wages or took jobs from native-born workers.",
    scores: { interference: -15, ownership: -22, tradition: 26, faith: 19 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  },
  {
    name: "Young Egypt Party",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/youngegyptparty.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["MENA"],
      faith: ["Islam"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Yugoslav People's Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/zbor.png",
    description: "The Yugoslav National Movement (Serbo-Croatian: Југословенски народни покрет, Jugoslavenski narodni pokret), also known as the United Militant Labour Organization was a Yugoslav movement characterized by it's Fascism, corporatism and christian values and teachings. advocate the abandonment of individualism and parliamentary democracy founded by Dimitrije Ljotić. Ljotić called for Yugoslavia to unite around a single ruler and return to its religious and cultural traditions, embracing the teachings of Christianity, traditional values and Corporatism.",
    scores: { interference: -17, ownership: -15, tradition: 37, faith: 35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic", "Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Yugoslav Radical Union",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/yugru.png",
    description: "The Yugoslav Radical Union (Serbian Cyrillic: Југословенска радикална заједница) was a political party who's agenda was based off of Yugoslav Fascism and Corporate Statism founded by Milan Stojadinović and Dragiša Cvetković. The party, whose agenda was based on fascism, was the dominant political movement. Stojadinović told Italian foreign minister Galeazzo Ciano that, although the party had initially been established as a moderate authoritarian movement, his intention was to model the party after the Italian National Fascist Party.",
    scores: { interference: -21, ownership: -13, tradition: 23, faith: 20 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic", "Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"]
    }
  },
  {
    name: "Zadruga",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/zadruga.png",
    description: "Zadruga was a Polish nationalist and anti-clerical movement founded by Jan Stachniuk in the interwar period. It rejected both liberalism and Marxism, calling instead for a form of national collectivism rooted in Pagan Slavic traditions. The movement advocated strong state direction of the economy, cultural revolution and the revival of Paganism; aimed against Western individualism. It sought the creation of a new Polish identity based on discipline, hierarchy and communal values.",
    scores: { interference: -22, ownership: -28, tradition: -15, faith: -35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Pagan"],
      economy: ["Nationalized Socialism"],
      orientation: ["Reactionary Modernist"]
    }
  },
  {
    name: "Zikist Movement",
    img: "https://raw.githubusercontent.com/tpvalues/tpvalues/main/logos/zikist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Africa"],
      faith: ["Secular"],
      economy: ["Nationalized Socialism"],
      orientation: ["Progressive"]
    }
  }
];
