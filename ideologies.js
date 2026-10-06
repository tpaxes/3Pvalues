const ideologies = [
  {
    name: "Action Française",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/actionfrancais.png",
    description: "French action (French: Action Française) is a Monarchist and Nationalist political movement in France which was founded in 1899. The movement supported a restoration of the House of Bourbon-Orléans, along with reversing the 1905 law on the separation of Church and State and restoring Roman Catholicism as the state religion. The movement advocated decentralization, with the restoration of pre-Revolutionary liberties to the ancient provinces of France. It aimed to achieve a monarchist corporatist France by means of a coup d'état, most likely involving a transitional authoritarian government.",
    scores: { interference: -25, ownership: 34, tradition: 45, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Agrarian Labor Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/PAL.png",
    description: "The Agrarian Labor Party (Spanish: Partido Agrario Laborista, PAL) was a Chilean nationalist and corporatist party founded on 7 September 1945 by the merger of the Agrarian Party with the Popular Freedom Alliance (an offshoot of the National Socialist Movement of Chile), with further input from the Movimiento Nacionalista de Chile. It advocated a functional, corporatist democracy, organic collaboration of productive forces, agrarianism, and the primacy of social function over pure profit, while rejecting class struggle. The PAL backed Carlos Ibáñez del Campo’s 1952 presidential campaign and entered his first cabinet; it dissolved in 1958 after internal splits.",
    scores: { interference: -14, ownership: 8, tradition: 18, faith: 20 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Ailtirí na hAiséirghe",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/architectsofresurrection.png",
    description: "The Architects of the Resurrection (Irish: Ailtirí na hAiséirghe), was a Fascist political party in Ireland, founded by Gearóid Ó Cuinneagáin in March 1942. Focused on the revival of the Irish language, they sought to create a one-party Corporatist state rejecting Liberal Democracy, jews and freemasons. The party promoted strong Irish Nationalism and even Pan-Celtism, supporting Welsh independence movements and showing open hostility to the partition of Ireland. Despite strong Nationalism and inspiration from the Papal Encyclicals, the party was tolerant of Protestantism, using Christian rather than Catholic terminology.",
    scores: { interference: -15, ownership: 5, tradition: 37, faith: 29 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic", "Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "All-Russian Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/russianfascism.png",
    description: "The All-Russian Fascist Party (Russian: Всероссийская фашистская партия); later Russian Fascist Union, was a movement by Russian Émigré based in Manchukuo. It was staunchly anti-Communist and developed close ties to Imperial Japan after it's invasion of Manchuria; starting a Women's and a Youth wing. The programme of the party sough to establish a Corporatist Fascist state in Russia, commited to the Russian Orthodox Church. It called for class co-operation instead of class conflict, with some leaders even calling for the restoration of the Monarchy. It advocated Russian Irredentism and ultra-Nationalism.",
    scores: { interference: -36, ownership: 23, tradition: 30, faith: 34 },
    tags: {
      region: ["Europe (Slavic)", "East Asia"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Army Comrades Association",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/blueshirts.png",
    description: "The Army Comrades Association (ACA), better known as the Blueshirts (Irish: Na Léinte Gorma), was an Irish para-fascist organisation founded in 1932 by Eoin O'Duffy. It was strongly anti-communist, corporatist, and nationalist, drawing inspiration from Mussolini’s Italy and the Catholic social teachings of the time. The movement opposed the Fianna Fáil government, organised large rallies, and later formed part of Fine Gael before O'Duffy split to form the more radical National Corporate Party.",
    scores: { interference: -18, ownership: 12, tradition: 32, faith: 38 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Authentic Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/authenticparty.png",
    description: "The Authentic Party (Partido Auténtico) was a Cuban revolutionary-nationalist party founded by Ramón Grau San Martín after the 1933 revolution. It combined anti-imperialist nationalism, social reform, and a rejection of both pure liberalism and communism. While not strictly fascist, it contained corporatist and authoritarian-nationalist currents, emphasised Cuban sovereignty against foreign (especially U.S.) influence, and promoted a form of national solidarity and state-guided social justice rooted in the 1933 programme.",
    scores: { interference: -10, ownership: -8, tradition: 15, faith: 5 },
    tags: {
      region: ["North America"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Ba'ath Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/baath.png",
    description: "The Arab Socialist Ba'ath Party (Arabic: حزب البعث العربي الاشتراكي, romanized: Ḥizb al-Ba‘th al-‘Arabī al-Ishtirākī) was a political party founded in Syria by Michel Aflaq, Salah al-Din al-Bitar, and associates of Zaki al-Arsuzi. The party espoused Ba'athism, which is an ideology mixing Arab Nationalist, pan-Arab, Arab Socialist, and anti-Imperialist interests. Ba'athism calls for the unification of the Arab world into a single state. Its motto, \"Unity, Freedom, Socialism\", refers to Arab unity and freedom from non-Arab control and interference as well as supporting socialism, while rejecting the Marxist class-struggle.",
    scores: { interference: -30, ownership: -35, tradition: 15, faith: -13 },
    tags: {
      region: ["MENA"],
      faith: ["Secular", "Islam"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Balli Kombëtar",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ballikombetar.png",
    description: "The National Front (Albanian: Balli Kombëtar) was an Albanian Nationalist and anti-Communist resistance movement during the Second World War. Midhat Frashëri, one of its leaders believed that Albanian provinces under the Ottoman Empire were unfairly partitioned during World War I amongst Yugoslavia and Greece, essentially advocating for a greater Albania. It's irredentism focused on making Albanians free from foreign influence, while also calling out anti-patriots, traitors, lackeys, troublemakers, speculators and spies. The Balli Kombëtar had both a strong fascist wing and a strong agrarian wing.",
    scores: { interference: 12, ownership: -8, tradition: 28, faith: 15 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Bolivian Socialist Falange",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/bolsocfal.png",
    description: "The Bolivian Socialist Falange (Spanish: Falange Socialista Boliviana) is a Falangism-inspired party founded in 1937 by Óscar Únzaga de la Vega. It combines nationalism, corporatism, and an 'heterodox' form of socialism focused on 'human solidarity' with a strong emphasis on Catholic values. After WW2, the party's stance evolved from an adherence to Spanish falangism to a more moderate form of statism; with the leaders adopting a strong anti-communist stance, with its leaders being particularly critical of Cuba's Fidel Castro following his emergence in the 50's.",
    scores: { interference: -12, ownership: 5, tradition: 35, faith: 40 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Bowdenism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/bowdenism.png",
    description: "Bowdenism is a term for the ideological framework of Jonathan Bowden; an English political activist, orator, writer and artist. Opposed to Liberalism, Democracy and Egalitarianism, they fought to restore the eternal values and principles that have become submerged beneath the corrosive tsunami of the modern world. Bowden expressed pagan religious beliefs, focusing more on the spiritual and esoterical concepts. He preached that hierarchies are natural and good for society and that native Europeans are justified in asserting their cultural, ethnic, psychological and spiritual hegemony over Europe.",
    scores: { interference: 8, ownership: 12, tradition: 45, faith: -25 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist", "Futurist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Brazilian Integralist Action",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/brazilianintegralism.png",
    description: "The Brazilian Integralist Action (Portuguese: Ação Integralista Brasileira), was a political party in Brazil. It's ideology of Brazilian Integralism was developed by its leader Plínio Salgado. It denounced Materialism, Liberalism, and Marxism, proposing a Corporatist and Clericalist alternative for the working class. It promoted Roman Catholic Spiritualism as the \"natural law\" and considered Christian virtues to be driving factor for their programme. Greatly inspired by Fascism, it functioned like a paramilitary organization with uniformed ranks. They preached a \"Revolution of the Self\"; abandonment of selfish and evil values.",
    scores: { interference: -12, ownership: 3, tradition: 35, faith: 40 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Brazilian Labour Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/getullism.png",
    description: "The Brazilian Labour Party (Portuguese: Partido Trabalhista Brasileiro) was a political party in post-WW2 Brazil, characterized by it's ideology of Getulism; named after the leader Getúlio Vargas, who served the country as it's 14th and 17th president. Emerging from anti-Communist activism, it would invision a Corporatist Totalitarian Brazil, free of foreign influence and Radicalism. Like the Italian Fascists, they denied the class struggle, claiming that economic growth was on the side of businessmen and workers, implementing the minimum wage and granting workers job stability after ten years of employment.",
    scores: { interference: -25, ownership: 0, tradition: 25, faith: 18 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Breton National Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/brent.png",
    description: "The Breton National Party (Breton: Strollad Broadel Breizh) was a nationalist party in Brittany that existed from 1931 to 1944. The party was disbanded after the liberation of France in World War II. It was also closely associated with Fascist ideology. The PNB was formed in the aftermath of split between Federalists and Nationalists within the Breton Autonomist Party (PAB), with a clearly nationalist agenda, namely seeking Breton independence from France. The party was influenced by Celticist ideas, and advocated for Pan-Celtism, modelling its aspirations on Irish independence movements.",
    scores: { interference: 20, ownership: 11, tradition: 20, faith: 20 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "British Union of Fascists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/mosleyism.png",
    description: "The British Union of Fascists (BUF) was a British fascist political party formed in 1932 by Sir Oswald Mosley. Heavily influenced by Italian Fascism, Mosley's variant showed a different approach focusing on social equality and life quality trough Welfarism and maternal feminism. The party rejected Communism, Capitalism, jewish influence and Racialism. The programme invisoned a Corporatist and Isolationist Britain, living in harmony with the people under it's colonial control, with the Monarchy being a mere national symbol. It focused on reformation and even saw success in participating in the British elections.",
    scores: { interference: -13, ownership: 9, tradition: 22, faith: 5 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Catalan Patriotic Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/catalanpatrioticmovement.png",
    description: "The Catalan Patriotic Movement (Catalan: Moviment Patriòtic Català; Spanish: Movimiento Patriótico Catalán, MPC) was a minor national syndicalist party active in Catalonia, founded in 1994 by Carlos Francisoud as the political successor of the armed group Milicia Catalana. It combined national syndicalism with Catholic integralism and traditionalist currents influenced by Carlism. Unlike separatist Catalanism, it defended Catalan identity within a united Spain (Hispanic Catalanism), used both Catalan and Spanish, and opposed Catalan independence. Its youth wing was Batzegada and its paper Esclat; it later merged into Platform for Catalonia.",
    scores: { interference: 5, ownership: 10, tradition: 30, faith: 36 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Conservative"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Centre Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/centreparty.png",
    description: "The Centre Party (also known as the Centre Reform Group) was a short lived Australian fascist political party founded in New South Wales in December 1933 by Eric Campbell, leader of the paramilitary New Guard. Formed after the New Guard’s decline following the dismissal of Premier Jack Lang, it advocated nationalism, corporatism, monarchism and anti-communism, and was influenced by Italian fascist economics as set out in Campbell’s 1934 manifesto The New Road. It contested the 1935 New South Wales state election but polled poorly and dissolved soon afterwards, ending organised New Guard politics.",
    scores: { interference: -24, ownership: 14, tradition: 28, faith: 20 },
    tags: {
      region: ["Oceania"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Chiangism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kuomitang.png",
    description: "The Three Principles of the People (Chinese: 三民主義), also known as Tridemism is a political philosophy developed by Sun Yat-sen as part of a philosophy to improve China during the Republican Era and later in Taiwan during the Dang Guo era. The three principles are often translated into and summarized as Nationalism, Democracy, and the livelihood of the people (or welfarism). This philosophy has been claimed as the cornerstone of the nation's policy as carried by the Kuomintang.",
    scores: { interference: -25, ownership: 19, tradition: 30, faith: 15 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism", "Georgism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Crusade of Romanianism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/crusadeofromanianism.png",
    description: "Crusade of Romanianism was a splinter group from the Iron Guard. Opposed to both imported ideologies and what it perceived as internal deviations. It rejected the extremes of both Communism and Third Position, advocating instead for a National path; \"neither right, nor left\". Their doctrine emphasized the primacy of the nation over class struggle, while simultaneously criticizing forms of anti-Semitism that it deemed counterproductive, distinguishing between antisemitism and \"anti-Romanianism\". It promoted a form of Social and National solidarity that was skeptical of foreign political models.",
    scores: { interference: 13, ownership: -20, tradition: 37, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Czech National Social Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/czechnatsoc.png",
    description: "The Czech National Social Party (Czech: Česká Strana Národně Sociální) is a political party in the Czech Republic that played an important role in Czechoslovakia during the interwar period. The party; founded in 1897, relied on the social traditions of Hussitism and Taboritism, as well as \"collectivizing by means of development, surmounting of class struggle by national discipline and moral rebirth. It opposed Communism, even showing sympathy to the Czech Fascist movements, while openly advocating for Czechoslovakism and Nationalism with a strong focus on Reformation over Marxist struggle.",
    scores: { interference: -3, ownership: -28, tradition: 12, faith: 4 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Danish People's Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/DA.png",
    description: "The Danish People's Party (Danish: Dansk Folkeparti) was a short lived political party in occupied Denmark, founded on 1 March 1941 by former members of the Nazi DNSAP together with figures from liberal, conservative and other groups. It supported a corporatist state and was strongly anti-communist; under organiser Wilfred Petersen it took on more open Nazist and antisemitic tones, prompting founding figure Victor Pürschel and others to leave in 1943. The party remained marginal and collapsed into obscurity after the war; it is unrelated to the modern Danish People's Party founded in 1995.",
    scores: { interference: -18, ownership: 12, tradition: 24, faith: 26 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Democratic Republican Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/demreppar.png",
    description: "The Democratic Republican Party (Korean: 민주공화당; DRP) was the ruling party of South Korea from 1963 to 1980 under Park Chung-hee. Founded by Kim Jong-pil after the 1961 military coup, it combined Korean nationalism, anti-communism, developmentalism and a corporatist, state-guided economy built around the chaebol. Under the DRP the country underwent rapid industrialisation (the so-called Miracle on the Han River). After the 1972 Yushin Constitution it operated as the core of an authoritarian one-party system until Park’s assassination in 1979; the party was dissolved in 1980 under Chun Doo-hwan.",
    scores: { interference: -22, ownership: 5, tradition: 28, faith: 12 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Distributism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/distributism.png",
    description: "Distributism is an economic theory of English Christian and political writers G. K. Chesterton and Hilaire Belloc, that was later utilized in various ideologies. Based upon Catholic social teaching principles, it viewed both Laissez-faire Capitalism and State Socialism as equally flawed and exploitative, instead calling the right to property fundamental, promoting traditional and agrarian values and calling the family the centrepiece of society. It called for the Redistribution of wealth and productive assets, taxation of excessive property ownership, and small-business subsidization.",
    scores: { interference: 41, ownership: 39, tradition: 33, faith: 40 },
    tags: {
      region: ["Universal"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative"],
      era: ["Timeless"]
    }
  },
  {
    name: "Ecofascism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ecofascism.png",
    description: "Ecofascism is a term used to describe groups which combine Environmentalism with Fascism. It adheres to the deep ecological principle of humanity being interconnected with nature, with a distinct focus on the preservation of the natural environment through authoritarian means, population control, and often ethno-nationalist or racial frameworks. It rejects both liberal environmentalism and industrial capitalism as destructive of the organic community and the land.",
    scores: { interference: 18, ownership: -12, tradition: 45, faith: 5 },
    tags: {
      region: ["Universal"],
      faith: ["Pagan", "Secular"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Fatherland League",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fatherlandleague.png",
    description: "The Fatherland League (Norwegian: Fedrelandslaget) was a Norwegian right-wing, nationalist and anti-communist mass organisation founded in 1925 on the initiative of Joakim Lehmkuhl, with support from Fridtjof Nansen and former Prime Minister Christian Michelsen. It sought to unite centre-to-right and nationally minded forces against the revolutionary Marxist labour movement and peaked around 1930 with roughly 100,000 members. Its programme mixed conservatism, Norwegian nationalism and corporatist ideas partly inspired by Italian models and later by New Deal-style planning. It declined through the 1930s, failed to win seats when it contested elections, and was banned by the German occupation authorities in September 1940.",
    scores: { interference: -12, ownership: 8, tradition: 32, faith: 18 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Fatherland Socialist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fatherlandsocialist.png",
    description: "The Fatherland Socialist Party (Ossetian: Фыдыбӕстӕ; Russian: Социалистическая партия Отечества) is a minor Ossetian nationalist and socialist party active in South Ossetia and North Ossetia–Alania. Originally founded in 1993 by Vadim Baskayev, it was dissolved after being denied registration in 2004 and re-established in South Ossetia in 2007 under Vyacheslav Gobozov. It combines socialism with Ossetian nationalism, decentralisation and a hard line on the East Prigorodny conflict. In the 2009 South Ossetian parliamentary election it was notable as the main anti-Russian opposition list, taking about 6.5% of the vote but no seats; it has remained marginal in later elections.",
    scores: { interference: -8, ownership: -18, tradition: 22, faith: 5 },
    tags: {
      region: ["Caucasus"],
      faith: ["Secular", "Eastern Orthodox"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Modern Era"]
    }
  },
  {
    name: "French Popular Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/frenchpopularparty.png",
    description: "The French Popular Party (French: Parti populaire français, PPF) was a fascist party founded in June 1936 by Jacques Doriot, a former leading Communist who broke with the PCF. It combined French nationalism, fascist corporatism, anti-communism, anti-capitalism and antisemitism, denouncing parliamentarism and seeking an authoritarian national state. At its height it claimed around 120,000 members and attracted intellectuals such as Pierre Drieu La Rochelle. During the Occupation it became one of the main collaborationist parties; many militants joined the LVF to fight on the Eastern Front. The PPF was dissolved in 1945.",
    scores: { interference: -26, ownership: -31, tradition: 25, faith: 12 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "French Renewal",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/frenchrenewal.png",
    description: "French Renewal (French: Renouveau français) was a small French far-right, counter-revolutionary and national-Catholic movement founded in 2005 by Thibaut de Chassey. It defined itself as nationalist, Catholic and opposed to the principles of the 1789 Revolution, drawing on Maurras, Drumont, Barrès and related traditions, and was often described as pétainist. It rejected freemasonry, classical liberalism and Marxism, favoured corporatist and monarchist ideas, and was affiliated for a time with the European National Front. The group suspended militant activity in 2017.",
    scores: { interference: -19, ownership: 28, tradition: 45, faith: 17 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "French Social Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/frenchsocialparty.png",
    description: "The French Social Party (French: Parti social français, PSF) was a large nationalist and social-Catholic party founded in July 1936 by Colonel François de La Rocque after the Popular Front banned his veterans’ league, the Croix-de-Feu. It combined French nationalism, social Catholicism, national conservatism, corporatism and anti-communism, while officially rejecting totalitarianism, racism and class struggle and accepting the Republic. At its peak it claimed hundreds of thousands of members and was the largest organised force on the French right before the war. It declined under the Occupation and was dissolved after 1945.",
    scores: { interference: -12, ownership: -4, tradition: 30, faith: 35 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Futurism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/futurism.png",
    description: "Futurism was an Italian artistic and political movement launched by Filippo Tommaso Marinetti with the 1909 Futurist Manifesto. It glorified speed, technology, youth, violence and war as “the world’s only hygiene,” rejected the past, museums and traditional values, and called for a radical modernisation of Italy. In 1918 Marinetti founded the Futurist Political Party, whose programme mixed republicanism, anti-clericalism, national syndicalism and land reform; the party soon merged into Mussolini’s Fasci Italiani di Combattimento. Futurism supplied early fascism with much of its rhetoric of dynamism and rupture with the past, though many Futurists later clashed with the regime over monarchy and the Church.",
    scores: { interference: 24, ownership: -40, tradition: -50, faith: -32 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Gajdism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/gajdism.png",
    description: "Gajdism refers to the interwar Czechoslovak fascist movement led by Radola Gajda and organised as the National Fascist Community (Czech: Národní obec fašistická, NOF), founded in 1926. Modelled on Italian Fascism rather than German National Socialism, it combined Czechoslovak nationalism, anti-communism, antisemitism, pan-Slavism and strong anti-German and anti-Hungarian sentiment. The NOF attempted a failed coup in Brno in January 1933, won a handful of parliamentary seats in 1935, and was absorbed into the Party of National Unity and later the Protectorate’s National Partnership; Gajda himself withdrew from politics after 1939.",
    scores: { interference: -11, ownership: 12, tradition: 30, faith: 19 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Georgism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/georgism.png",
    description: "Georgism (also called geoism or the single-tax movement) is an economic philosophy developed by the American reformer Henry George, most fully set out in Progress and Poverty (1879). It holds that people own the value they create by their labour and capital, but that the economic rent of land and natural resources belongs equally to the community. Its central policy is a land-value tax (ideally a “single tax” replacing other taxes) that captures unearned land rent for public use, aiming to eliminate poverty caused by private appropriation of location value while preserving free markets in labour and capital.",
    scores: { interference: 32, ownership: 41, tradition: 8, faith: 2 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Georgism"],
      orientation: ["Progressive"],
      era: ["Timeless"]
    }
  },
  {
    name: "Golden Square",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/goldensquare.png",
    description: "The Golden Square (Arabic: المربع الذهبي) was a cabal of four pro-Axis Iraqi army officers — Salah al-Din al-Sabbagh, Kamil Shabib, Fahmi Said and Mahmud Salman — who dominated Iraqi military politics in the late 1930s and early 1940s. Strongly pan-Arab, anti-British and influenced by fascist and authoritarian ideas, they backed Rashid Ali al-Gaylani’s coup of April 1941 that overthrew the pro-British regency and briefly installed a National Defence Government. The subsequent Anglo-Iraqi War ended in British victory; the officers fled or were later captured and executed.",
    scores: { interference: -23, ownership: -19, tradition: 20, faith: 23 },
    tags: {
      region: ["MENA"],
      faith: ["Islam"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Guild Socialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/guildsocialism.png",
    description: "Guild Socialism is an ideology and a political movement of British origin popularised by political theorist, economist, historian, and novelist G. D. H. Cole. It advocated for workers' control of industry through the medium of trade-related guilds. Greatly inspired by the middle age guilds of craftsmen, it opposed factory production and advocated a return to an earlier period of artisanal production organised through guilds, that would serve as the organs through which industry would be organised in a future Socialist society. The movement emphasised Industrial Democracy and workers' self-management.",
    scores: { interference: 30, ownership: -25, tradition: 8, faith: -13 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: [],
      era: ["Timeless"]
    }
  },
  {
    name: "Guión Rojo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/guionrojo.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -24, ownership: 18, tradition: 28, faith: 32 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Hlinkas Slovak People's Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ludak.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -10, ownership: 5, tradition: 40, faith: 47 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Hungarism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/hungarism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -26, ownership: -31, tradition: 35, faith: 30 },
    tags: {
      region: ["Europe (Other)", "Central Asia"],
      faith: [],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Independent Workers' Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/UAP.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: -18, tradition: -18, faith: -14 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Iron Guard",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ironguard.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 24, ownership: -14, tradition: 44, faith: 50 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism", "Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Ivan Ilyin Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ilyin.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -24, ownership: 8, tradition: 30, faith: 36 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "JONSism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/jons.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 30, ownership: -25, tradition: 32, faith: 14 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kataeb Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kataeb.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -14, ownership: -2, tradition: 30, faith: 40 },
    tags: {
      region: ["MENA"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Kokkashugi",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kokkashugi.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -12, ownership: 14, tradition: 47, faith: 40 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kokutairon",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kokutairon.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -9, ownership: 8, tradition: 50, faith: 40 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kōdōha",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kodoha.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -24, ownership: 12, tradition: 31, faith: 35 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lithuanian Nationalist Union",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/litnatunion.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -18, ownership: 24, tradition: 25, faith: 20 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lusitanian Integralism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/lusitanianintegralism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 12, ownership: 19, tradition: 41, faith: 43 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lys Noir",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/lysnoir.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 45, ownership: 32, tradition: 30, faith: -12 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Distributism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Metaxism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/metaxism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -6, ownership: 18, tradition: 40, faith: 30 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Michael Collins Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/michaelcollinsthought.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 14, ownership: 30, tradition: 24, faith: 22 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Mladorossy",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/mladorossy.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -20, ownership: 21, tradition: 13, faith: 20 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nacionalismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nacionalismo.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -17, ownership: -12, tradition: 37, faith: 39 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Nasjonal Samling",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nasjonalsamling.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -26, ownership: -23, tradition: 23, faith: 20 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism", "Socialism"],
      orientation: ["Progressive", "Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nasserism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nasserism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -31, ownership: -34, tradition: 20, faith: -15 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "National Alliance of Russian Solidarists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/natsolRU.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -16, ownership: 10, tradition: 26, faith: 32 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "National Corps",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalcorps.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -20, ownership: -6, tradition: 26, faith: 12 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Eastern Orthodox"],
      economy: ["Socialism"],
      orientation: ["Conservative"],
      era: ["Modern Era"]
    }
  },
  {
    name: "National Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalfascist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -35, ownership: 23, tradition: -11, faith: 21 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalfront.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -28, ownership: 25, tradition: 25, faith: 8 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalparty.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 18, ownership: 21, tradition: 42, faith: 45 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Radical Camp",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/onr-falanga.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -38, ownership: -18, tradition: 42, faith: 35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative", "Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Radical Movement for Renewal",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nrmr.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 0, ownership: 0, tradition: 0, faith: 0 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Renaissance Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalrenaissancefront.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -31, ownership: 17, tradition: 20, faith: 13 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Social Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalsocial.png",
    description: "The National Social Movement (Bulgarian: Национално социално движение) was a Bulgarian organisation led by Aleksandar Tsankov in the 1930s. It promoted authoritarian nationalism, corporatism and anti-communism, preaching its own idea of 'social nationalism' which for Tsankov involved support of a national workers' syndicate against class struggle. In opposition to other Bulgarian parties, it rejected racialism; Tsankov giving aid to jewish families during WW2.",
    scores: { interference: -20, ownership: -15, tradition: 25, faith: 18 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism", "Socialism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Socialist Movement in the Netherlands",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nsb.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -29, ownership: 31, tradition: 38, faith: 39 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism", "Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Socialist Movement of Chile",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nsmchile.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -24, ownership: 14, tradition: 22, faith: 8 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Socialist Workers' Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/NSPR.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -25, ownership: -20, tradition: 30, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Synarchist Union",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalsynarchist.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 13, ownership: 30, tradition: 38, faith: 43 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/natsyndmovement.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 30, ownership: -17, tradition: 31, faith: 28 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Union for Social Justice",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/NUSJ.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 3, ownership: 25, tradition: 22, faith: 30 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Union of Greece",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/EEE.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -24, ownership: 19, tradition: 23, faith: 20 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nationalist Front of Mexico",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalistfrontmexico.png",
    description: "WORK IN PROGRESS",
    scores: { interference: 27, ownership: 33, tradition: 36, faith: 43 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Neosocialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/neosocialism.png",
    description: "Neosocialism was a political faction that existed in France and Belgium during the 1930s established by Marcel Deat. Marcel Deat believed in class collaboration and national solidarity, advocated Social Corporatism as a model of organisation, replaced the Marxist socialist mode of production with anti-Capitalism and supported a technocratic state, which would plan the economy and in which parliamentarism would be replaced by political technocracy. Neosocialism also believes in a revolution from above, which they termed as a constructive revolution.",
    scores: { interference: -23, ownership: -19, tradition: 7, faith: -7 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Neue Rechte",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/neuerechte.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -14, ownership: 0, tradition: 28, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic", "Protestant"],
      economy: [],
      orientation: ["Reactionary Modernist", "Conservative"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "New Swedish Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/newswedishmovement.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -20, ownership: 5, tradition: 30, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nichirenism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nichirenism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -6, ownership: 10, tradition: -1, faith: 35 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nouvelle Droite",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nouvelledroitte.png",
    description: "The New Right (French: Nouvelle Droite), is a political movement and the origin of the wider European New Right, which emerged in France during the late 1960s. It openly opposes Multiculturalism, Liberal Democracy, Capitalism and the mixing of different cultures within a single society. It pushes for an \"Archeofuturistic\"; non-Reactionary \"Revolutionary Conservative\", method to the reinvigoration of the Pan-European identity and culture, while encouraging the preservation of regions where Europeans may reside, like in the Identitarian movement.",
    scores: { interference: 30, ownership: 20, tradition: 16, faith: -18 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Organisation of Yugoslav Nationalists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/oryuna.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -34, ownership: 16, tradition: 13, faith: -15 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Pan-Iranist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/paniran.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -13, ownership: -20, tradition: 18, faith: -32 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Papadopoulism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/papadopoulism.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -18, ownership: 10, tradition: 40, faith: 35 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Party of National Socialists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/polishnatsoc.png",
    description: "The Party of National Socialists (Polish: Partia Narodowych Socjalistów), was a polish National Socialist party founded in 1933. The PNS developed its own variant of National Socialism that was explicitly anti-German and declaredly Democratic. The PNS proposed the creation of a bloc of Slavic states and, on a global scale, the establishment of a general union of National Socialist republics. It declared attachment to Christianity, though anti-Clerical tendencies sometimes emerged. While critical of Fascism and Nazism as foreign models, it acknowledged the anti-Semitism and Revisionist aims with approval.",
    scores: { interference: -25, ownership: -20, tradition: 30, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Catholic"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Patriot Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/patriotfront.png",
    description: "The Patriot Front is an active American neo-Fascist group in the USA. The movement focuses on promoting White Nationalism and the tradition of the \"pre-Columbian forefathers\"; seeing the American identity as an extraordinary one. It emphasizes a need for a hard reset of society and a return to the traditions and virtues of the European Settlers, calling for a balance of personal liberty alongside social responsibility for the betterment of both. It openly opposes Modernism, Leftism, Democracy, Communism and modern-time points of discourse like abortion, gay rights and mass migration.",
    scores: { interference: 22, ownership: 38, tradition: 41, faith: 18 },
    tags: {
      region: ["North America"],
      faith: ["Secular", "Protestant", "Catholic", "Eastern Orthodox", "Pagan"],
      economy: [],
      orientation: ["Conservative"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Patriotic People's Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/finnishfascism.png",
    description: "The Patriotic People's Movement (Finnish: Isänmaallinen kansanliike) is a Finnish Nationalist and anti-Communist political party which was the continuation of it's predecessor (The Lapua Movement). Ideologically the party was anti-Communist and very Nationalistic, endorsing an aggressive foreign policy against the Soviet Union and hostility towards the Swedish language. The creation of a Greater Finland was one of the party's big long-term goals, though It's manifested purpose was to be the Christian-moral conscience of the parliament.",
    scores: { interference: -19, ownership: -14, tradition: 36, faith: 22 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Peronism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/peronism.png",
    description: "The Justicialist Party (Spanish: Partido Justicialista), is a political party in Argentina, known for it's ideology of Peronism; named after the founder Juan Perón and his wife Eva. Inspired by European Fascism, it created a more left-wing approach, focused on Patriotism, Ehtno-Nationalism and the expansion of worker's and women's rights. The ideology opposed Communism, Anarchism and Capitalism, though Peron's views were heavily based on the Socialist rhetoric. It promoted a \"worker-style\" Populist mix of Corporatism and Socialism, heavily shaped by the Catholic social teachings.",
    scores: { interference: -8, ownership: -11, tradition: 19, faith: 13 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Petainism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/petainism.png",
    description: "Petainism, or the Révolution nationale (National Revolution) was the official ideological program promoted by Vichy France which had been established in July 1940 and led by Marshal Philippe Pétain. Pétain's regime was characterized by anti-Parliamentarism, personality cultism, Xenophobia, promotion of traditional values, rejection of the constitutional separation of powers, and State Corporatism, as well as opposition to the theory of class conflict. Though not Fascist, it exhibited characteristics of the traditional right; being strongly clericalist and eulogising national religious figures such as Joan d'Arc",
    scores: { interference: -22, ownership: -3, tradition: 40, faith: 35 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Phibunism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/phibunism.png",
    description: "Phibunism is a term for the ideological framework of Thai Field Marshal Plaek Phibunsongkhram, who governed Thailand; earlier Siam, from 1939 to 1957. The regime; inspired by Italian Fascism, focused on Thai Nationalism, strong Sinophobia; along with anti-Communism. Allied to the Imperial Japan, it opted for a Militarist Agrarian based state, passing cultural mandates promoting Western-style dress and emphasizing the Thai language. Although the ideology played a part in changing the Absolute Monarchy to a Constitutional one, some factions supported the King as a national symbol.",
    scores: { interference: -26, ownership: -21, tradition: 28, faith: 6 },
    tags: {
      region: ["South Asia"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Political Circle \"Zveno\"",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zveno.png",
    description: "WORK IN PROGRESS",
    scores: { interference: -22, ownership: -5, tradition: 5, faith: -15 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Poujadism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/poujadism.png",
    description: "Poujadism is a political ideology and movement named after Pierre Poujade. On 29 November 1953, Pierre Poujade created the Union de Défense des Commerçants et Artisans (Defense Union of Shopkeepers and Craftsmen) to organize tax protests. He articulated the economic interests and grievances of shopkeepers and other proprietor-managers of small businesses facing economic and social change. Poujadism was opposed to industrialization, urbanization, and American-style modernization, which were perceived as a threat to the identity of rural France.",
    scores: { interference: 31, ownership: 33, tradition: 31, faith: 29 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Pērkonkrusts",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/perkonkrusts.png",
    description: "Pērkonkrusts (Thunder Cross) was a Latvian ultranationalist and fascist party founded in 1933 by Gustavs Celmiņš. It demanded ‘Latvia for Latvians’, a corporatist authoritarian state, and the exclusion of Germans, Slavs and Jews from political and economic life. Strongly anti-German as well as antisemitic, it rejected Christianity in favour of the neo-pagan Dievturība movement and sought a revolutionary national rebirth through a new ethnic elite. Banned in 1934, it continued underground and some members later collaborated with the German occupation.",
    scores: { interference: -25, ownership: 7, tradition: 28, faith: 8 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Qasimism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/qasimism.png",
    description: "Qasimism is the Iraqi nationalist ideology associated with General Abd al-Karim Qasim, who ruled Iraq from the 1958 revolution until 1963. It prioritised Iraqi unity and equality among all ethnic and religious groups inside Iraq over pan-Arabism, opposed both Nasserist unionism and Kurdish separatism, and pursued secular, populist and redistributive policies, including land reform and the assertion of national control over oil. Qasimism placed Iraqi identity and sovereignty above religious or pan-Arab loyalties.",
    scores: { interference: -31, ownership: 10, tradition: -9, faith: -3 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Ragnarok Circle",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ragnarok.png",
    description: "The Ragnarok Circle was a radical Norwegian Socialist group centred on the journal Ragnarok (1935–1945). It rejected both Quisling’s Nasjonal Samling and mainstream German Nazism as insufficiently pure, combining extreme Germanic racialism, neo-paganism rooted in Norse tradition, and a cult of the ‘Norwegian tribe’. Members sought a total cultural and spiritual revolution returning to pre-Christian values and pan-Germanic unity ordered by ‘divine racial law’. Strongly anti-Christian, some later planned resistance against the German occupation when it violated their principles.",
    scores: { interference: -28, ownership: -22, tradition: 25, faith: -38 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Pagan"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist", "Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Republican Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/republicanfascist.png",
    description: "The Republican Fascist Party (Italian: Partito Fascista Repubblicano, PFR) was the sole party of the Italian Social Republic (Republic of Salò) from 1943 to 1945. Refounded by Mussolini after his rescue by German forces, it abandoned the monarchy, returned to the more radical, anti-monarchist and ‘sansepolcrista’ currents of early fascism, and operated as a German client regime in northern Italy. It retained corporatism, the one-party state and the cult of the Duce while fighting the Allies and the Italian Resistance until the collapse of 1945.",
    scores: { interference: -36, ownership: 0, tradition: 8, faith: 9 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Revolutionary Mexicanist Action",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/revolutionarymexicanist.png",
    description: "Revolutionary Mexicanist Action (Spanish: Acción Revolucionaria Mexicanista), better known as the Gold Shirts (Camisas Doradas), was a Mexican fascist paramilitary organisation founded in 1934 by Nicolás Rodríguez Carrasco. Ultra-nationalist, secular, antisemitic, anti-Chinese and anti-communist, it sought to expel ‘foreign’ elements and crush leftist labour movements. Modelled on European fascist styles and receiving some Axis support, it engaged in street violence until it was banned by the Cárdenas government in 1936.",
    scores: { interference: 7, ownership: 35, tradition: 34, faith: 15 },
    tags: {
      region: ["North America"],
      faith: ["Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Revolutionary National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/revnatsynd.png",
    description: "The Revolutionary National Syndicalist Movement (Spanish: Movimiento Revolucionario Nacional Sindicalista, MRNS) was a Chilean fascist and national-syndicalist organisation founded in 1952 (with roots in the late 1940s). Inspired by Spanish Falangism, José Antonio Primo de Rivera and Catholic traditionalists such as Osvaldo Lira, it advocated a corporatist, hierarchical national state organised through syndicates and functional communities. Strongly anti-communist, anti-liberal and Hispanicist, it later collaborated with the Pinochet regime through the guilds system.",
    scores: { interference: 15, ownership: -22, tradition: 35, faith: 32 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Rexist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/rexism.png",
    description: "The Rexist Party was a political party active in Belgium from 1935 until 1945. It was deeply rooted in National Catholicism, calling for a national \"moral renewal\". The party name came from the phrase \"Christ the King\" (Latin: Christus Rex). It sough to achieve a Corporatist and Royalist Belgium, while also advocating for Belgian Unitarism. Modelled on Italian Fascism and Spanish Falangism, it rejected Capitalism, Liberalism and Marxism, idealising rural life and traditional family values instead. The party later called for \"Burgundian Nationalism\" - the Nationalism within the framework of a pan-German state.",
    scores: { interference: -29, ownership: -25, tradition: 38, faith: 45 },
    tags: {
      region: ["Europe (Romance)", "Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Right Japanese Socialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/spj.png",
    description: "Right Japanese Socialism refers to the nationalist current within the Japan Socialist Party associated with Inejiro Asanuma. While firmly socialist and later strongly anti-American and pro-People’s Republic of China, it retained respect for the Emperor as a symbol of national unity, rejected calls to abolish the imperial institution, and sought a distinctly Japanese path that combined socialisation with ethnic and cultural continuity. Asanuma’s wartime support for the Imperial Rule Assistance Association and his postwar ‘Asianist’ stance marked this current as more nationalist than the party’s Marxist wing.",
    scores: { interference: -12, ownership: -12, tradition: 10, faith: 2 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular", "Shinto"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist", "Monarchist"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Salazarism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/salazarism.png",
    description: "Salazarism is an ideology based on the \"Estado Novo\" regime of António de Oliveira Salazar, who ruled Portugal from 1933 to 1974. His rule; characterized by opposition to Communism, Socialism, Syndicalism, Anarchism and Liberalism, focused on economic stabilization of the country by a Corporatist economy with Distributist imputs. The regime was staunchly Reformist and keen on keeping Portugal from joining World War II. It focused on enforcing the rule by secret police activity and on paying off Portugal's public debt; all to focus on the group considered the most important - the family.",
    scores: { interference: -7, ownership: 28, tradition: 35, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Sansepolcrismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/sansepolcrismo.png",
    description: "Sansepolcrismo was an Italian movement that preceded Fascism, based on the rally organized by Mussolini at Piazza San Sepolcro in Milan on March 23, 1919, where he proclaimed the manifesto of the Fasci Italiani di Combattimento (English: Italian Fasces of Combat). The ideology advocated for a more Revolutionary Nationalism, combined with a National Syndicalist economy and Futurist ideals. Known for using paramilitary violence against its political opponents and calls for a Nationalist Revolution to institute a government of a new ruling class, one made up primarily by the veterans of WW1.",
    scores: { interference: 19, ownership: -16, tradition: -20, faith: -28 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive", "Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Scottish Democratic Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/scottishfascist.png",
    description: "The Scottish Democratic Fascist Party (SDFP) was a short lived fascist party founded in 1933 by William Weir Gilmour and Major Hume Sleigh out of the Scottish section of Mosley’s New Party. It combined british fascism with Scottish nationalism and independence, calling for a Scottish Corporate Commonwealth, an industrial parliament, and a permanent Empire secretariat. Strongly anti-Catholic and anti-Irish, it banned Catholics from membership, demanded the expulsion of religious orders, the prohibition of Irish immigration, and the repeal of state funding for Catholic schools.",
    scores: { interference: -20, ownership: 10, tradition: 28, faith: 18 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Self-Defence of the Republic of Poland",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/selfdefenceoftherepublicofpoland.png",
    description: "Self-Defence of the Republic of Poland (Polish: Samoobrona Rzeczypospolitej Polskiej) was a populist agrarian and Christian socialist party and trade union led by Andrzej Lepper from the 1990s until the late 2000s. It combined left-wing nationalism, agrarian socialism, Catholic social teaching, anti-neoliberalism and anti-globalisation, presenting itself as the voice of farmers, workers and the ‘patriotic left’ against post-communist elites and foreign capital.",
    scores: { interference: -16, ownership: -12, tradition: 22, faith: 24 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Sosism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/sosism.png",
    description: "Sosism (Spanish: Sosismo) was a short lived corporatist current within Uruguay’s Colorado Party led by Julio María Sosa in the late 1920s. Influenced by Italian Fascism after Sosa’s meeting with Mussolini, it advocated a corporatist state, the replacement of the presidency by a directorial system, and the integration of occupational corporations into parliament. Officially organised as the Colorado Party for Tradition, it opposed Batllismo from the right while claiming to defend progress and labour rights against both reaction and revolutionary socialism.",
    scores: { interference: -20, ownership: 21, tradition: 13, faith: 25 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Spenglerianism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/spenglerianism.png",
    description: "Spenglerianism is a term used for the political and philosophical views of Oswald Spengler; a German polymath. In his books, he strongly criticized Materialism, Capitalism, Communism, Political Liberalism, Rationalism and Democracy; which he considered an Anglo-French remnant. His concept of a \"Prussian Socialism\" rebuked the Marxist approach, proposing a more Corporatist-like economic system, where the proletariat doesn't exploit the exploiters. He openly opposed labor strikes, trade unions and progressive taxation; simuntaniously celebrating private property and market competition.",
    scores: { interference: -14, ownership: -1, tradition: 45, faith: 12 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular", "Pagan"],
      economy: ["Socialism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Squadrismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/squadrismo.png",
    description: "The Squadrismo were the fascist militias that were organised outside the authority of the Italian state and led by local leaders called ras (a title given to Abyssinian headmen). The group was initially Mussolini loyalists but later they felt betrayed by his efforts to moderate the movement and consolidate power through traditional state institutions after 1921. The radical local leaders, or ras, believed Mussolini was abandoning the \"revolutionary\" roots of Fascism and compromising with the liberal establishment they sought to destroy. The group adhered to anarcho-Fascism and Fascist Syndicalism.",
    scores: { interference: 42, ownership: 23, tradition: -17, faith: 14 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Strasserism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/strasser.png",
    description: "Strasserism was an ideology created by the Strasser Brothers (Otto & Gregor) as a splinter faction to Nazism following Hitler's decision to abandon points within the initial 25 point program of the NSDAP. Focused on the national rejuvination of the German nation, culture and the worker, They believed in the de-urbanisation and re-agrarianization, seeing the agrarian lifestyle more tied to it's culture and history. They advocated for a medieval guild economy based on Social Corporatism. They conceived the nation not as an instrument of power, but as a living organism, bound together by shared culture, labour and destiny.",
    scores: { interference: -33, ownership: -29, tradition: 17, faith: 15 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Superfascism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/superfascism.png",
    description: "Superfascism is a term for the ideological theory of Italian philosopher and writer - Julius Evola. Derived from his admiration for Buddhism, Eastern Mysticism, Western Esotericism and the Occult, it preaches a doctrine of \"Magical Idealism\" that harshly rejects Modernism and consolidates the Hindu concept of Kali Yuga; humanity being stuck in a Dark Age of unleashed Materialistic appetites. The ideology also has a concept of racism of the body, soul, and spirit; hoping for the return of the \"celestial\" Aryan race. It invisions a deeply Spiritual Pagan empire based on hierarchy, order, discipline and obedience.",
    scores: { interference: -15, ownership: 23, tradition: 50, faith: 23 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Swedish Socialist Gathering",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/SSS.png",
    description: "Swedish Socialist Gathering (Svensk Socialistisk Samling, formerly the National Socialist Workers’ Party) was the principal Swedish National Socialist party under Sven Olov Lindholm. After an early phase closely copying German Nazism it rebranded toward a more national ‘Swedish socialism’, retaining antisemitism, anti-capitalism, anti-communism, corporatism and authoritarian nationalism. It organised youth and paramilitary structures and advocated strong state direction of the economy in the service of the national community.",
    scores: { interference: -28, ownership: -22, tradition: 25, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Syrian Social Nationalism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/syriannatsoc.png",
    description: "Syrian Social Nationalism was the ideology established by the Syrian Social Nationalist Party founded by Antoun Saadeh. It advocates the establishment of a Greater Syrian nation state spanning the Fertile Crescent, including present-day Syria, Lebanon, Jordan, Iraq, Kuwait, Palestine region, Cyprus, Sinai of Egypt, Hatay and Cilicia of Turkey, based on geographical boundaries and the common history people within the boundaries share. The movement itself was largely syncretic, incorporating Pan-Syrianism and a form of National Socialism as its ideological base.",
    scores: { interference: -21, ownership: -26, tradition: 12, faith: -10 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Szeged Idea",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/szegedidea.png",
    description: "The Szeged Idea (Hungarian: Szegedi gondolat) was an ideology of post WW1 Hungarians - especially the military officer and Prime Minister of Hungary from 1932 - Gyula Gömbös. Heavily inspired by his visits to Fascist Italy, he promoted irredentist claims, declaring violence to be \"an acceptable means of statecraft\". Focused on Agrarianism and Corporatism, his Unity Party (Hungarian: Egységes Párt) recanted previous antipathy to Jews and called for an \"unitary Hungarian nation with no class distinctions\" and to expand the size and power of the Hungarian military; much to Hitler's dismay.",
    scores: { interference: -19, ownership: -14, tradition: 38, faith: 29 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Tacuara Nationalist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/tacuara.png",
    description: "The Tacuara Nationalist Movement (Movimiento Nacionalista Tacuara) was an Argentine far-right, national-syndicalist and Catholic integralist organisation active mainly in the late 1950s and 1960s. Inspired by Spanish Falangism, the Iron Guard and Argentine nationalist traditions, it combined anti-liberalism, anti-communism, anti-Semitism, corporatism and a cult of hierarchical, Catholic and Hispanic values. It engaged in street violence and later fragmented, with some members moving toward Peronism or armed groups.",
    scores: { interference: -24, ownership: 12, tradition: 30, faith: 32 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Tōhōkai",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/tohokai.png",
    description: "Tōhōkai (Eastern Society) was a Japanese fascist political party founded in 1936 by Nakano Seigō after he left the Imperial Rule Assistance Association’s predecessor currents. It advocated a strong authoritarian state, anti-party politics, national syndicalist-style economic organisation, aggressive expansionism and a break with both liberal capitalism and Marxism. Nakano praised European fascist models while insisting on a distinct Japanese path centred on the Emperor and national mobilisation. The party was dissolved in 1944 after Nakano’s forced suicide.",
    scores: { interference: -20, ownership: 12, tradition: 15, faith: 18 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Ukrainian National Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ukrainiannationalparty.png",
    description: "The Ukrainian National Party (Ukrainian: Українська Національна Партія) was a small interwar Western Ukrainian (Galician) nationalist party of a conservative, corporatist and pro-hetmanist orientation. It favoured an independent Ukrainian state organised on hierarchical, traditional and Christian (mainly Greek-Catholic) principles, rejected both liberal democracy and revolutionary integral nationalism of the OUN type, and looked toward conservative authoritarian models and cooperation with related Central European movements.",
    scores: { interference: -4, ownership: 8, tradition: 18, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist", "Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "United National Independence Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/UNIP.png",
    description: "The United National Independence Party (UNIP) was the dominant independence and post-independence party of Zambia under Kenneth Kaunda. While rooted in African nationalism and anti-colonialism, its ideology of Zambian Humanism combined Christian ethics, African communal traditions, state-directed development and a rejection of both Western capitalism and orthodox Marxism. It established a one-party state that emphasised national unity, moral reconstruction and a mixed economy under strong presidential guidance.",
    scores: { interference: -18, ownership: -20, tradition: -8, faith: 17 },
    tags: {
      region: ["Africa"],
      faith: ["Protestant"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Wang Jingwei Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/wangjingwei.png",
    description: "Wang Jingwei Thought refers to the ideological line of the Reorganised National Government of China led by Wang Jingwei in collaboration with Japan (1940–1945). It presented itself as the authentic continuation of Sun Yat-sen’s Three Principles of the People, emphasising anti-communism, pan-Asianism, peace with Japan, and a corporatist, authoritarian reorganisation of Chinese society against both the Chiang Kai-shek government and the Chinese Communists. It retained nationalist and developmentalist rhetoric while accepting Japanese hegemony in East Asia.",
    scores: { interference: -20, ownership: 10, tradition: -1, faith: 10 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Young Egypt Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/youngegyptparty.png",
    description: "The Young Egypt Party (Misr al-Fatat) was an Egyptian nationalist and fascist-inspired movement founded in 1933 by Ahmed Hussein. It combined intense Egyptian nationalism, anti-British imperialism, corporatism, paramilitary organisation (the Green Shirts), and a social programme aimed at workers and the lower middle class. It admired aspects of Italian Fascism and German National Socialism while remaining rooted in Islamic and Egyptian cultural references, and later evolved into a more conventional nationalist party after the war.",
    scores: { interference: -18, ownership: -4, tradition: 24, faith: 24 },
    tags: {
      region: ["MENA"],
      faith: ["Islam"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Zikist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zikist.png",
    description: "The Zikist Movement was a radical Nigerian nationalist youth organisation of the late 1940s that took its name from Nnamdi Azikiwe (“Zik”). It advocated militant anti-colonialism, African socialism, national unity across ethnic lines, and a rejection of both British rule and conservative traditional elites. While not fascist, it displayed authoritarian, populist and anti-imperialist traits typical of many mid-century African nationalist movements seeking rapid political and economic independence.",
    scores: { interference: -6, ownership: -14, tradition: -4, faith: -2 },
    tags: {
      region: ["Africa"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  }
];
