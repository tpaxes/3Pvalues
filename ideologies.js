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
    description: "The Architects of the Resurrection (Irish: Ailtirí na hAiséirghe) was a political party in Ireland founded by Gearóid Ó Cuinneagáin in March 1942. Focused on the revival of the Irish language, it sought to create a one-party corporatist state. The party promoted strong Irish nationalism and Pan-Celtism, supporting Welsh independence movements and showing open hostility to the partition of Ireland. Despite strong nationalism and inspiration from the Papal Encyclicals, the party was tolerant of Protestantism, using Christian rather than exclusively Catholic terminology.",
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
    description: "The All-Russian Fascist Party (Russian: Всероссийская фашистская партия), later known as the Russian Fascist Union, was a movement of Russian émigrés based in Manchukuo. It was staunchly anti-communist and developed close ties to Imperial Japan after the invasion of Manchuria, establishing women’s and youth wings. The party programme sought to establish a corporatist state in Russia committed to the Russian Orthodox Church. It called for class co-operation instead of class conflict, with some leaders advocating the restoration of the monarchy, and promoted Russian irredentism and ultra-nationalism.",
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
    description: "The Army Comrades Association (ACA), better known as the Blueshirts (Irish: Na Léinte Gorma), was an Irish organisation founded in 1932 by Eoin O'Duffy. It was strongly anti-communist, corporatist and nationalist, drawing inspiration from Mussolini’s Italy and Catholic social teaching. The movement opposed the Fianna Fáil government, organised large rallies, and later formed part of Fine Gael before O'Duffy split to form the more radical National Corporate Party.",
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
    description: "The Authentic Party (Partido Auténtico) was a Cuban revolutionary-nationalist party founded by Ramón Grau San Martín after the 1933 revolution. It combined anti-imperialist nationalism, social reform, and a rejection of both pure liberalism and communism. It contained corporatist and authoritarian-nationalist currents, emphasised Cuban sovereignty against foreign (especially U.S.) influence, and promoted a form of national solidarity and state-guided social justice rooted in the 1933 programme.",
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
    description: "The Arab Socialist Ba'ath Party (Arabic: حزب البعث العربي الاشتراكي) was founded in Syria by Michel Aflaq, Salah al-Din al-Bitar and associates of Zaki al-Arsuzi. The party espoused Ba'athism, mixing Arab nationalism, pan-Arabism, Arab socialism and anti-imperialism. Ba'athism calls for the unification of the Arab world into a single state. Its motto “Unity, Freedom, Socialism” refers to Arab unity and freedom from non-Arab control as well as a form of socialism that rejects Marxist class struggle.",
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
    description: "The National Front (Albanian: Balli Kombëtar) was an Albanian nationalist and anti-communist resistance movement during the Second World War. Midhat Frashëri and other leaders believed that Albanian provinces under the Ottoman Empire had been unfairly partitioned after the First World War and advocated a Greater Albania. The movement focused on freeing Albanians from foreign influence and contained both a strong authoritarian nationalist wing and a strong agrarian wing.",
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
    description: "The Bolivian Socialist Falange (Spanish: Falange Socialista Boliviana) is a Falangism-inspired party founded in 1937 by Óscar Únzaga de la Vega. It combines nationalism, corporatism and an heterodox form of socialism focused on human solidarity with a strong emphasis on Catholic values. After the Second World War the party’s stance evolved toward a more moderate form of statism while remaining strongly anti-communist.",
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
    description: "Bowdenism refers to the ideological framework of Jonathan Bowden, an English political activist, orator, writer and artist. Opposed to liberalism, democracy and egalitarianism, he sought to restore eternal values and principles submerged by modernity. Bowden expressed pagan religious beliefs with a focus on spiritual and esoteric concepts. He argued that hierarchies are natural and that native Europeans are justified in asserting their cultural, ethnic, psychological and spiritual hegemony in Europe.",
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
    description: "The Brazilian Integralist Action (Portuguese: Ação Integralista Brasileira) was a political party in Brazil whose ideology of Brazilian Integralism was developed by Plínio Salgado. It denounced materialism, liberalism and Marxism, proposing a corporatist and clericalist alternative. It promoted Roman Catholic spiritualism as natural law and considered Christian virtues the driving force of its programme. Organised along paramilitary lines with uniformed ranks, it preached a “Revolution of the Self” involving the abandonment of selfish values.",
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
    description: "The Brazilian Labour Party (Portuguese: Partido Trabalhista Brasileiro) was a post-war Brazilian party characterised by Getulism, named after Getúlio Vargas. Emerging from anti-communist activism, it envisioned a corporatist Brazil free of foreign influence and radicalism. Like Italian Fascism it denied class struggle, claiming economic growth benefited both businessmen and workers, and implemented the minimum wage and job stability after ten years of employment.",
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
    description: "The Breton National Party (Breton: Strollad Broadel Breizh) was a nationalist party in Brittany that existed from 1931 to 1944. Formed after a split between federalists and nationalists within the Breton Autonomist Party, it pursued a clearly nationalist agenda seeking Breton independence from France. Influenced by Celticist ideas, it advocated Pan-Celtism and modelled its aspirations on Irish independence movements.",
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
    description: "The British Union of Fascists (BUF) was a British political party formed in 1932 by Sir Oswald Mosley. Heavily influenced by Italian Fascism, Mosley’s variant emphasised social equality, welfare measures and maternal feminism. The party rejected communism and unrestricted capitalism. Its programme envisioned a corporatist and isolationist Britain living in harmony with the peoples under its colonial control, with the monarchy retained as a national symbol.",
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
    description: "The Catalan Patriotic Movement (Catalan: Moviment Patriòtic Català) was a minor national syndicalist party active in Catalonia, founded in 1994 by Carlos Francisoud as the political successor of the armed group Milicia Catalana. It combined national syndicalism with Catholic integralism and traditionalist currents influenced by Carlism. Unlike separatist Catalanism it defended Catalan identity within a united Spain (Hispanic Catalanism), used both Catalan and Spanish, and opposed Catalan independence.",
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
    description: "The Centre Party (also known as the Centre Reform Group) was a short-lived Australian political party founded in New South Wales in December 1933 by Eric Campbell, leader of the paramilitary New Guard. It advocated nationalism, corporatism, monarchism and anti-communism, and was influenced by Italian corporatist economics as set out in Campbell’s 1934 manifesto The New Road. It contested the 1935 New South Wales state election but polled poorly and dissolved soon afterwards.",
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
    description: "Chiangism refers to the practical application of Sun Yat-sen’s Three Principles of the People (Nationalism, Democracy and the People’s Livelihood) under Chiang Kai-shek and the Kuomintang. It combined Chinese nationalism, anti-communism, state-guided economic development, and a corporatist approach to labour and capital while retaining a strong emphasis on national unity and traditional cultural values.",
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
    description: "Crusade of Romanianism was a splinter group from the Iron Guard. Opposed to both imported ideologies and what it perceived as internal deviations, it rejected the extremes of communism and other third-position models, advocating instead a national path “neither right nor left”. Its doctrine emphasised the primacy of the nation over class struggle and promoted a form of social and national solidarity sceptical of foreign political models.",
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
    description: "The Czech National Social Party (Czech: Česká strana národně sociální) is a political party that played an important role in Czechoslovakia during the interwar period. Founded in 1897, it drew on the social traditions of Hussitism and Taboritism and sought to surmount class struggle through national discipline and moral rebirth. It opposed communism while showing sympathy to certain Czech nationalist currents and advocated Czechoslovakism with a strong focus on national reform rather than Marxist class struggle.",
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
    description: "The Danish People's Party (Danish: Dansk Folkeparti) was a short-lived political party in occupied Denmark, founded on 1 March 1941 by former members of the DNSAP together with figures from liberal, conservative and other groups. It supported a corporatist state and was strongly anti-communist. The party remained marginal and collapsed into obscurity after the war; it is unrelated to the modern Danish People's Party founded in 1995.",
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
    description: "The Democratic Republican Party (Korean: 민주공화당) was the ruling party of South Korea from 1963 to 1980 under Park Chung-hee. Founded by Kim Jong-pil after the 1961 military coup, it combined Korean nationalism, anti-communism, developmentalism and a corporatist, state-guided economy built around the chaebol. Under the party the country underwent rapid industrialisation. After the 1972 Yushin Constitution it operated as the core of an authoritarian system until Park’s assassination in 1979.",
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
    description: "Distributism is an economic theory developed by the English Catholic writers G. K. Chesterton and Hilaire Belloc. Based on Catholic social teaching, it viewed both laissez-faire capitalism and state socialism as exploitative. It held the right to property as fundamental, promoted traditional and agrarian values, and placed the family at the centre of society. It called for the widest possible distribution of productive property, taxation of excessive concentrations of ownership, and the subsidisation of small businesses and family farms.",
    scores: { interference: 41, ownership: 39, tradition: 33, faith: 40 },
    tags: {
      region: ["Universal"],
      faith: ["Catholic"],
      economy: ["Distributism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["Timeless"]
    }
  },
  {
    name: "Ecofascism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ecofascism.png",
    description: "Ecofascism describes currents that combine environmentalism with authoritarian nationalism. It adheres to the deep-ecological principle that humanity is interconnected with nature, with a distinct focus on the synergy between a people and its ancestral land, preferring insular, traditional societies. It opposes globalist progressive environmentalism, mass immigration and overpopulation, and often draws on esoteric or pagan European traditions.",
    scores: { interference: 18, ownership: -12, tradition: 45, faith: 5 },
    tags: {
      region: ["Universal"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Ecuadorian Nationalist Revolutionary Action",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ecuadornatsynd.png",
    description: "Ecuadorian Nationalist Revolutionary Action (Acción Revolucionaria Nacionalista Ecuatoriana) was a mid-twentieth-century Ecuadorian nationalist and national-syndicalist current. It combined anti-imperialism, corporatist economic organisation, Catholic social influences and a strong emphasis on national sovereignty and social justice within a hierarchical, anti-liberal framework.",
    scores: { interference: -10, ownership: -5, tradition: 25, faith: 28 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["National Syndicalism", "Corporatism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Ethnocacerism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ethnocacerism.png",
    description: "Ethnocacerism is a Peruvian ethno-nationalist ideology associated with the brothers Antauro and Humala. It combines indigenous Andean identity, anti-imperialism, militarism and a form of national socialism adapted to Peruvian conditions, emphasising the restoration of Inca values, economic sovereignty and the political primacy of the mestizo and indigenous majority.",
    scores: { interference: -20, ownership: -18, tradition: 30, faith: 10 },
    tags: {
      region: ["South America"],
      faith: ["Secular"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Euskadi Carlism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/euskadicarlism.png",
    description: "Euskadi Carlism refers to the Basque expression of Carlism, the traditionalist, legitimist and Catholic movement that defended the rights of the Carlist pretenders, foral liberties, and a confessional, anti-liberal social order. In the Basque Country it emphasised local fueros, Catholic integralism and opposition to both liberalism and separatism that rejected the wider Spanish traditionalist framework.",
    scores: { interference: 5, ownership: 25, tradition: 48, faith: 48 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "Distributism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Falange Española",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/falangaesp.png",
    description: "Falange Española was the Spanish political movement founded by José Antonio Primo de Rivera in 1933. It advocated national syndicalism, a totalitarian national state, Catholic values, and the rejection of both liberalism and Marxism. After the Civil War it became the sole legal party of Franco’s Spain, although its original revolutionary national-syndicalist programme was largely subordinated to the broader Francoist system.",
    scores: { interference: -18, ownership: -12, tradition: 40, faith: 42 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism", "Corporatism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Fatherland Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fatherlandfront.png",
    description: "The Fatherland Front (Vaterländische Front) was the sole legal political organisation in the Austrian corporate state (Ständestaat) established by Engelbert Dollfuss and continued by Kurt Schuschnigg between 1933 and 1938. It combined authoritarian Catholic corporatism, Austrian nationalism, anti-Marxism and opposition to both liberal democracy and National Socialism, organising society along occupational estates.",
    scores: { interference: -20, ownership: 15, tradition: 38, faith: 45 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Fatherland League",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fatherlandleague.png",
    description: "The Fatherland League (Fedrelandslaget) was a Norwegian nationalist and anti-communist organisation founded in 1925. It brought together conservatives, agrarians and nationalists opposed to Marxism and parliamentary weakness, advocating a stronger national government, corporatist elements and the defence of traditional Norwegian values and independence.",
    scores: { interference: -12, ownership: 10, tradition: 32, faith: 28 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Fatherland Socialist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fatherlandsocialist.png",
    description: "The Fatherland Socialist Party (Ossetian: Фыдыбæстæ Социалистон парти) is a political party in South Ossetia that combines Ossetian nationalism, support for independence from Georgia, and a socialist economic programme. It advocated strong state direction of the economy, social welfare policies, close political and economic integration with Russia, and the defence of Ossetian cultural and linguistic identity under a hierarchical national framework.",
    scores: { interference: -18, ownership: -15, tradition: 25, faith: 15 },
    tags: {
      region: ["Europe (Other)", "Caucasus"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Fiumanism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/fiumanism.png",
    description: "Fiumanism refers to the political and cultural experiment led by Gabriele D’Annunzio in the Free State of Fiume (1919–1920). It combined ultra-nationalism, revolutionary syndicalism, aesthetic politics, corporatist representation and a cult of youth, heroism and action, serving as an important precursor and inspiration for later Italian Fascism.",
    scores: { interference: 15, ownership: -20, tradition: -10, faith: -15 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist", "Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Francist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/francist.png",
    description: "The Francist Movement (Mouvement Franciste) was a French political organisation founded by Marcel Bucard in 1933. It advocated a corporatist, authoritarian and nationalist reorganisation of France inspired by Italian Fascism, with strong emphasis on anti-communism, national unity and the rejection of parliamentary democracy.",
    scores: { interference: -22, ownership: -10, tradition: 30, faith: 25 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "French Popular Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/frenchpopular.png",
    description: "The French Popular Party (Parti Populaire Français) was founded by Jacques Doriot in 1936 after his break with the Communist Party. It evolved into a major authoritarian nationalist and collaborationist force, combining anti-communism, corporatism, nationalism and eventually open collaboration with German occupation authorities during the war.",
    scores: { interference: -25, ownership: -18, tradition: 22, faith: 8 },
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
    description: "French Renewal (Renouveau Français) was a post-war French nationalist and traditionalist current that sought the moral and political renewal of France on the basis of Catholic values, national independence, anti-communism and opposition to both liberal parliamentarism and Marxism.",
    scores: { interference: -10, ownership: 15, tradition: 40, faith: 42 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "French Social Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/frenchsocial.png",
    description: "The French Social Party (Parti Social Français) was the largest political formation of the French right in the late 1930s, emerging from the Croix-de-Feu. Under Colonel François de La Rocque it advocated a form of authoritarian conservatism, social Catholicism, corporatist elements and national reconciliation while rejecting both fascism and Marxism.",
    scores: { interference: -8, ownership: 12, tradition: 35, faith: 38 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Futurism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/futurism.png",
    description: "Futurism began as an artistic and cultural movement founded by Filippo Tommaso Marinetti in 1909 and rapidly developed a political dimension. Italian Futurists celebrated speed, technology, violence, youth and the overthrow of traditional culture. Politically many aligned with revolutionary nationalism and early Fascism, advocating a radical break with the past and a militarised, modernised Italy.",
    scores: { interference: 25, ownership: -25, tradition: -45, faith: -30 },
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
    description: "Gajdism refers to the political current associated with General Radola Gajda and the National Fascist Community in interwar Czechoslovakia. It combined Czech nationalism, anti-communism, authoritarianism and elements of corporatism and national syndicalism, while remaining distinct from German National Socialism.",
    scores: { interference: -15, ownership: 5, tradition: 28, faith: 18 },
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
    description: "Georgism is the economic philosophy of Henry George, centred on the idea that the value of land and natural resources should belong to the community while the value created by labour and capital should remain private. It advocates a single tax on land value as the primary source of public revenue, aiming to eliminate land monopoly, reduce inequality and leave productive activity untaxed.",
    scores: { interference: 15, ownership: 35, tradition: 5, faith: 0 },
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
    description: "The Golden Square was a group of pro-Axis Iraqi army officers led by Rashid Ali al-Gaylani and Salah al-Din al-Sabbagh that seized power in 1941. Their ideology combined Arab nationalism, anti-British imperialism, authoritarianism and sympathy for the Axis powers as a means of achieving Iraqi and wider Arab independence.",
    scores: { interference: -20, ownership: -10, tradition: 20, faith: 15 },
    tags: {
      region: ["MENA"],
      faith: ["Islam", "Secular"],
      economy: ["Socialism", "Corporatism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Guild Socialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/guildsocialism.png",
    description: "Guild Socialism was a British socialist current prominent in the early twentieth century, associated with G. D. H. Cole and others. It advocated the ownership and control of industry by democratic national guilds of workers, coordinated by a state or commune, as an alternative both to state socialism and to parliamentary socialism, emphasising functional representation and workers’ self-management.",
    scores: { interference: 20, ownership: -30, tradition: 5, faith: -10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Guión Rojo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/guionrojo.png",
    description: "Guión Rojo was a Paraguayan nationalist and authoritarian current associated with the Colorado Party’s radical wing under Higinio Morínigo and later figures. It combined strong nationalism, anti-communism, corporatist tendencies and a cult of national heroes, particularly Francisco Solano López, within an authoritarian presidential framework.",
    scores: { interference: -18, ownership: 5, tradition: 30, faith: 25 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Hlinkas Slovak People's Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ludak.png",
    description: "Hlinka’s Slovak People’s Party (Hlinkova slovenská ľudová strana) was the main Slovak nationalist and Catholic party of the interwar period and the ruling party of the Slovak Republic (1939–1945). Under Andrej Hlinka and later Jozef Tiso it combined clericalism, Slovak autonomy then independence, corporatist economic ideas and authoritarian governance.",
    scores: { interference: -15, ownership: 10, tradition: 42, faith: 48 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Hungarism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/hungarism.png",
    description: "Hungarism was the ideology of the Arrow Cross Party led by Ferenc Szálasi. It combined Hungarian ultra-nationalism, a distinctive form of national socialism adapted to Hungarian conditions, anti-capitalism, anti-communism, and the vision of a Greater Hungary organised on hierarchical and corporatist lines with a strong emphasis on the working peasantry and workers.",
    scores: { interference: -30, ownership: -25, tradition: 35, faith: 20 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic", "Protestant"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Independent Workers' Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/UAP.png",
    description: "The Independent Workers’ Party (or similar national-labour formations in interwar Europe) represented attempts to create working-class organisations that rejected both Marxist internationalism and liberal capitalism, instead advocating national syndicalism, corporatist representation of labour, and the integration of workers into a hierarchical national community.",
    scores: { interference: -10, ownership: -20, tradition: 15, faith: 5 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Iron Guard",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ironguard.png",
    description: "The Iron Guard (Garda de Fier), officially the Legion of the Archangel Michael, was a Romanian revolutionary nationalist movement founded by Corneliu Zelea Codreanu in 1927. It combined intense Orthodox Christian mysticism, the cult of martyrdom and sacrifice, and the creation of a “new man” with ultra-nationalism and anti-materialism. Economically it rejected both liberal capitalism and Marxism, advocating a national and Christian form of social organisation based on private property, peasant values, cooperative labour and the subordination of economic life to spiritual and national ends.",
    scores: { interference: -28, ownership: -18, tradition: 48, faith: 47 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["National Syndicalism", "Corporatism"],
      orientation: ["Reactionary", "Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Ivan Ilyin Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ilyin.png",
    description: "Ivan Ilyin Thought refers to the political and philosophical ideas of the Russian émigré philosopher Ivan Ilyin. He advocated a strong, authoritarian, Christian Russian state, rejected both Bolshevism and Western liberal democracy, and emphasised legal consciousness, national dictatorship as a transitional form, and the spiritual regeneration of Russia on Orthodox and patriotic foundations.",
    scores: { interference: -25, ownership: 15, tradition: 45, faith: 40 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "JONSism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/jons.png",
    description: "JONSism refers to the ideology of the Juntas de Ofensiva Nacional-Sindicalista (JONS), the Spanish national-syndicalist movement founded by Ramiro Ledesma Ramos and later merged with Falange Española. It emphasised revolutionary national syndicalism, anti-parliamentarism, violent action, and the creation of a totalitarian national state organised through syndicates.",
    scores: { interference: -5, ownership: -25, tradition: 20, faith: 15 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Futurist", "Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kataeb Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kataeb.png",
    description: "The Kataeb Party (Phalangist Party) is a Lebanese political party founded by Pierre Gemayel in 1936. Inspired partly by European authoritarian nationalist movements, it combined Maronite Christian identity, Lebanese nationalism, corporatist and social-market economic ideas, and a strong emphasis on order, discipline and national independence.",
    scores: { interference: -12, ownership: 10, tradition: 35, faith: 40 },
    tags: {
      region: ["MENA"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Kōdōha",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kodoha.png",
    description: "Kōdōha (Imperial Way Faction) was a radical faction within the Imperial Japanese Army in the 1920s and 1930s led by generals such as Sadao Araki. It called for a Shōwa Restoration returning direct power to the Emperor, the purge of party politicians and zaibatsu influence, and the organisation of society around spiritual discipline, agrarian values and absolute loyalty to the kokutai. Economically it favoured limiting large industrial conglomerates and prioritising the moral and military strength of the nation.",
    scores: { interference: -20, ownership: 5, tradition: 40, faith: 30 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kokkashugi",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kokkashugi.png",
    description: "Kokkashugi (Statism or National Essentialism) refers to the authoritarian nationalist ideology prominent in Japan during the early Shōwa era. It emphasised the unique national polity (kokutai), the divine status of the Emperor, the rejection of Western liberalism and party politics, and the mobilisation of the entire nation under state direction for military and economic strength.",
    scores: { interference: -25, ownership: 0, tradition: 45, faith: 35 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: ["Corporatism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Kokutairon",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/kokutairon.png",
    description: "Kokutairon in the sense associated with Ikki Kita refers to his radical reconstruction of the Japanese national polity. Kita advocated a reorganisation of Japan through a military coup, the suspension of the constitution, extensive land reform, limits on private property, state control of major industries, and equality of income, while retaining the Emperor as the centre of national unity. His ideas combined national socialism with a distinctive Japanese revolutionary nationalism.",
    scores: { interference: -15, ownership: -30, tradition: 25, faith: 20 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto", "Secular"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lithuanian Nationalist Union",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/litnatunion.png",
    description: "The Lithuanian Nationalist Union (Lietuvių tautininkų sąjunga, Tautininkai) was the main interwar nationalist party in Lithuania, associated with Antanas Smetona. It promoted ethnic Lithuanian identity, strong central authority, cultural nationalism and the organic unity of the nation under authoritarian leadership. Economically it supported state guidance of the economy, protection of national production and the limitation of foreign economic influence while preserving private property within a nationally oriented framework.",
    scores: { interference: -20, ownership: 12, tradition: 38, faith: 30 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lusitanian Integralism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/lusitanianintegralism.png",
    description: "Lusitanian Integralism (Integralismo Lusitano) was a Portuguese traditionalist and monarchist movement founded in 1914 by figures such as António Sardinha and Hipólito Raposo. It rejected liberalism and parliamentarism in favour of an organic, decentralised traditional monarchy, Catholic social order, municipalism and corporatist representation of families, guilds and local communities. Economically it advocated national syndicalism and the organisation of production through intermediate bodies.",
    scores: { interference: -5, ownership: 20, tradition: 48, faith: 45 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Lys Noir",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/lysnoir.png",
    description: "Lys Noir is a contemporary French politico-literary current that blends radical traditionalist monarchism with anti-industrial and anti-modern critiques. It calls for the restoration of a decentralised royal order, the rejection of technological society, and a return to older forms of community, craft and local autonomy. Economically it opposes large-scale industry, consumerism and global markets in favour of degrowth and local production.",
    scores: { interference: 25, ownership: 30, tradition: 50, faith: 20 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic", "Pagan"],
      economy: ["Distributism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Metaxism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/metaxism.png",
    description: "Metaxism is the authoritarian nationalist ideology associated with Ioannis Metaxas and the 4th of August Regime in Greece (1936–1941). It sought the regeneration of the Greek nation through discipline, Orthodoxy, monarchy and the creation of a “Third Greek Civilisation” drawing on ancient Sparta and Byzantium. Economically it promoted corporatist organisation, social solidarity, state direction of key sectors and the subordination of individual and class interests to the national whole.",
    scores: { interference: -22, ownership: 8, tradition: 40, faith: 42 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Michael Collins Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/michaelcollinsthought.png",
    description: "Michael Collins Thought, understood as National Distributism, draws on the social and national vision of Michael Collins for an independent Ireland based on widespread small ownership, rural strength and Gaelic cultural revival. It emphasises the distribution of productive property (especially land and small enterprise) so that economic independence underpins national independence, rejects both large-scale capitalism and socialism, and seeks a society of free, rooted producers.",
    scores: { interference: 20, ownership: 35, tradition: 30, faith: 35 },
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
    description: "The Mladorossy (Young Russians) were a Russian émigré monarchist movement active in the interwar period under Aleksandr Kazem-Bek. Their central slogan “Tsar and the Soviets” expressed the desire to combine a social monarchy with certain Soviet institutions, corporatist organisation and strong Russian nationalism. Economically they favoured a “social” monarchy that would retain elements of planned coordination and national control while rejecting both liberal capitalism and Bolshevik materialism.",
    scores: { interference: -18, ownership: -5, tradition: 35, faith: 30 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Reactionary Modernist", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nacionalismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nacionalismo.png",
    description: "Nacionalismo refers to the Argentine nationalist current associated with writers and thinkers such as Manuel Gálvez in the early twentieth century. It emphasised Hispanic and Catholic tradition, social hierarchy, the rejection of liberal cosmopolitanism, and the defence of a rooted Argentine identity against foreign cultural and economic influence. Economically it tended toward protectionism and the subordination of economic life to national and moral ends.",
    scores: { interference: -12, ownership: 15, tradition: 40, faith: 38 },
    tags: {
      region: ["South America"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Nasjonal Samling",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nasjonalsamling.png",
    description: "Nasjonal Samling (National Gathering) was the Norwegian nationalist party founded by Vidkun Quisling in 1933. It advocated a strong authoritarian state, corporatist organisation of society, national unity above party politics, and the regeneration of Norwegian culture and spirit. Economically it supported private enterprise and property within a framework of planned national coordination and occupational corporations.",
    scores: { interference: -26, ownership: -23, tradition: 23, faith: 20 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nasserism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nasserism.png",
    description: "Nasserism is the Arab nationalist and socialist ideology associated with Gamal Abdel Nasser and the Egyptian Free Officers’ regime after 1952. It combines pan-Arabism, anti-imperialism, republicanism and a form of Arab socialism based on state-led development, land reform, nationalisation of key industries and the mobilisation of the popular classes. Economically it prioritised public ownership of strategic sectors, central planning and social justice while retaining a significant private sector under national guidance.",
    scores: { interference: -28, ownership: -32, tradition: 10, faith: -5 },
    tags: {
      region: ["MENA"],
      faith: ["Secular", "Islam"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "National Alliance of Russian Solidarists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/natsolRU.png",
    description: "The National Alliance of Russian Solidarists (Narodno-Trudovoy Soyuz rossiyskikh solidaristov, NTS) is a Russian anti-communist organisation founded in 1930 by young White émigrés in Belgrade. Its core ideology is solidarism, which rejects both Marxist class struggle and pure liberal individualism in favour of voluntary cooperation between the different layers of society, the dignity of the person, and Christian social responsibility. Economically it supports private property (especially of land), free labour, and a coordinated national economy based on solidarity.",
    scores: { interference: -10, ownership: 15, tradition: 30, faith: 35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "National Corps",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalcorps.png",
    description: "National Corps (Національний корпус) is a Ukrainian nationalist party and movement that emerged from the Azov milieu. It advocates Ukrainian nationalism, anti-communism, anti-liberalism, and a strong national state with social and corporatist economic elements, emphasising national solidarity, military values and cultural revival.",
    scores: { interference: -15, ownership: -5, tradition: 30, faith: 15 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Eastern Orthodox"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "National Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalfascist.png",
    description: "The National Fascist Party (Partito Nazionale Fascista, PNF) was the ruling party of Italy under Benito Mussolini from 1921 until 1943. It promoted the totalitarian organisation of society under the state, the cult of the leader, and the regeneration of the Italian nation through discipline, hierarchy and imperial expansion. Economically it developed a corporatist system in which employers and workers were organised into state-supervised corporations meant to eliminate class conflict and direct production toward national goals, while pursuing autarky and increasing state control over major industries.",
    scores: { interference: -22, ownership: -8, tradition: 28, faith: 12 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalfront.png",
    description: "The National Front (various national contexts, notably the Swiss National Front of the 1930s) was an authoritarian nationalist movement that advocated corporatist economic organisation, strong national government, anti-communism and the rejection of liberal parliamentarism in favour of a more hierarchical and organic national order.",
    scores: { interference: -18, ownership: 5, tradition: 30, faith: 20 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant", "Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalparty.png",
    description: "The National Party (Stronnictwo Narodowe) was the main interwar Polish nationalist party, heir to the National Democracy (Endecja) of Roman Dmowski. It advocated Polish ethnic nationalism, Catholic social teaching, economic nationalism, and a strong but constitutional state, opposing both socialism and liberal individualism while supporting private property and national economic self-sufficiency.",
    scores: { interference: -8, ownership: 20, tradition: 40, faith: 42 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "Distributism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Radical Camp",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/onr.png",
    description: "The National Radical Camp (Obóz Narodowo-Radykalny, ONR) was a radical Polish nationalist movement of the 1930s. It combined intense Catholic nationalism, anti-communism, economic ideas ranging from corporatism to national syndicalism and distributism, and a generational revolt against the more moderate National Party, advocating a more authoritarian and socially radical national revolution.",
    scores: { interference: -20, ownership: 5, tradition: 42, faith: 45 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism", "Distributism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Radical Movement for Renewal",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nrmr.png",
    description: "The National Radical Movement for Renewal was a Polish nationalist and monarchist current of the interwar period that sought a radical moral and political renewal of the nation on Catholic and hierarchical foundations, opposing both liberalism and socialism while advocating a strong authoritarian or monarchist state.",
    scores: { interference: -15, ownership: 10, tradition: 45, faith: 40 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Renaissance Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalrenaissancefront.png",
    description: "The National Renaissance Front (Frontul Renașterii Naționale) was the sole legal party of King Carol II’s royal dictatorship in Romania (1938–1940). It attempted to create a corporatist, authoritarian national state that would transcend party politics, incorporate various social and national currents, and modernise Romania under royal leadership while opposing both the Iron Guard and the traditional parties.",
    scores: { interference: -20, ownership: 10, tradition: 25, faith: 20 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Social Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalsocial.png",
    description: "The National Social Movement (or National Social Movement of Bulgaria) was an interwar Bulgarian nationalist and authoritarian current that combined social reform, anti-communism, corporatist economic ideas and strong national government, seeking a third path between liberalism and Marxism.",
    scores: { interference: -18, ownership: -8, tradition: 28, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Socialist Movement in the Netherlands",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nsb.png",
    description: "The National Socialist Movement in the Netherlands (Nationaal-Socialistische Beweging, NSB) was the principal Dutch National Socialist party led by Anton Mussert. It advocated a Dutch form of national socialism, corporatist economic organisation, authoritarian government and, increasingly during the occupation, collaboration with German authorities while attempting to retain a distinct Dutch national identity.",
    scores: { interference: -25, ownership: -15, tradition: 25, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant", "Secular"],
      economy: ["Corporatism", "Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Socialist Movement of Chile",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nsmchile.png",
    description: "The National Socialist Movement of Chile (Movimiento Nacional Socialista de Chile) was a Chilean political movement of the 1930s that adapted national socialist and corporatist ideas to Chilean conditions. It advocated authoritarian nationalism, social justice, anti-liberalism and anti-communism, and participated in the failed Seguro Obrero coup of 1938.",
    scores: { interference: -20, ownership: -12, tradition: 25, faith: 18 },
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
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/polishnatsoc.png",
    description: "The National Socialist Workers’ Party (Partia Narodowych Socjalistów) was a small Polish interwar party that attempted to combine Polish nationalism with a form of national socialism. It advocated anti-capitalism, anti-communism, authoritarian government and the organisation of society on national rather than class lines.",
    scores: { interference: -22, ownership: -20, tradition: 25, faith: 20 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Synarchist Union",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalsynarchist.png",
    description: "The National Synarchist Union (Unión Nacional Sinarquista) is a Mexican Catholic traditionalist and nationalist movement founded in 1937. It opposes liberalism, socialism and secularism, advocating a corporatist, hierarchical and confessional social order inspired by Catholic social teaching and Hispanic tradition, with strong emphasis on the peasantry, local communities and anti-communism.",
    scores: { interference: -5, ownership: 25, tradition: 45, faith: 48 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "Distributism"],
      orientation: ["Reactionary"],
      era: ["World Wars Era", "Cold War Era", "Modern Era"]
    }
  },
  {
    name: "National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/natsyndmovement.png",
    description: "The National Syndicalist Movement (Movimento Nacional-Sindicalista) was a Portuguese radical nationalist and national-syndicalist organisation led by Francisco Rolão Preto in the early 1930s. It advocated a revolutionary national syndicalism inspired by both integralism and fascism, opposing both liberalism and the more conservative Estado Novo of Salazar, and was eventually suppressed by the regime.",
    scores: { interference: 10, ownership: -20, tradition: 25, faith: 30 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Union for Social Justice",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/NUSJ.png",
    description: "The National Union for Social Justice was the political organisation founded by Father Charles Coughlin in the United States in the 1930s. It combined populist monetary reform, opposition to both capitalism and communism, strong social Catholicism, isolationism and increasingly authoritarian and nationalist rhetoric, advocating a form of corporatist social justice.",
    scores: { interference: -10, ownership: 5, tradition: 30, faith: 40 },
    tags: {
      region: ["North America"],
      faith: ["Catholic"],
      economy: ["Corporatism", "Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "National Union of Greece",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/EEE.png",
    description: "The National Union of Greece (Ethniki Enosis Ellados) was an interwar Greek nationalist organisation. It advocated authoritarian nationalism, anti-communism, corporatist economic ideas and the strengthening of national institutions against both liberal parliamentarism and left-wing movements.",
    scores: { interference: -15, ownership: 5, tradition: 35, faith: 30 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nationalist Front of Mexico",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nationalistfrontmexico.png",
    description: "The Nationalist Front of Mexico (Frente Nacionalista de México) is a contemporary Mexican nationalist movement that advocates ethnic and cultural nationalism, anti-liberalism, anti-communism and the defence of Mexican identity against globalism, with economic views ranging from protectionism to national syndicalist and corporatist ideas.",
    scores: { interference: -10, ownership: 10, tradition: 35, faith: 25 },
    tags: {
      region: ["North America"],
      faith: ["Catholic", "Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Neosocialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/neosocialism.png",
    description: "Neosocialism was a current within the French Socialist Party in the 1930s led by figures such as Marcel Déat. It advocated a move away from orthodox Marxism toward a more authoritarian, planist and national form of socialism, emphasising order, authority and national economic coordination, and later collaborated with the Vichy regime.",
    scores: { interference: -20, ownership: -25, tradition: 10, faith: -5 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Neue Rechte",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/neuerechte.png",
    description: "The Neue Rechte (New Right) is a German intellectual and political current that emerged in the post-war period. Drawing on the Conservative Revolution of the interwar years, it advocates ethno-cultural identity, critique of liberalism and multiculturalism, and a metapolitical strategy for cultural hegemony, while generally rejecting both National Socialism and conventional conservatism.",
    scores: { interference: 5, ownership: 15, tradition: 40, faith: 10 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular", "Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "New Swedish Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/newswedishmovement.png",
    description: "The New Swedish Movement (Nysvenska rörelsen) was a Swedish nationalist and authoritarian current led by Per Engdahl. It advocated a corporatist, anti-parliamentary national socialism adapted to Swedish conditions, emphasising social solidarity, national unity and opposition to both liberalism and Marxism.",
    scores: { interference: -18, ownership: -5, tradition: 30, faith: 15 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Protestant", "Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Nichirenism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nichirenism.png",
    description: "Nichirenism refers to the political interpretation of Nichiren Buddhism developed by Tanaka Chigaku and others in modern Japan. It combined religious devotion to the Lotus Sutra with intense Japanese nationalism, the idea of Japan as a morally superior nation destined to lead Asia, and support for imperial expansion and national unity under the Emperor.",
    scores: { interference: -15, ownership: 5, tradition: 35, faith: 45 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto", "Secular"],
      economy: [],
      orientation: ["Reactionary", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Nouvelle Droite",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/nouvelledroitte.png",
    description: "The Nouvelle Droite (New Right) is a French intellectual school founded by Alain de Benoist and the GRECE in the late 1960s. It advocates a pagan, anti-liberal, anti-egalitarian and ethno-pluralist worldview, rejecting both Christianity and liberalism while promoting cultural identity, organic society and a radical critique of modernity through metapolitical means.",
    scores: { interference: 10, ownership: 20, tradition: 35, faith: -20 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary Modernist"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Organisation of Yugoslav Nationalists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/oryuna.png",
    description: "The Organisation of Yugoslav Nationalists (ORJUNA) was a Yugoslav nationalist and anti-communist organisation active in the 1920s. It combined integral Yugoslavism, paramilitary organisation, anti-communism and authoritarian tendencies, opposing both separatist movements and Marxist influences while supporting the centralised Yugoslav state.",
    scores: { interference: -12, ownership: 5, tradition: 25, faith: 15 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Secular", "Eastern Orthodox", "Catholic"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Pan-Iranist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/paniran.png",
    description: "The Pan-Iranist Party is an Iranian nationalist political organisation founded in the 1940s. It advocates pan-Iranism (the cultural and political unity of Iranian peoples), secular nationalism, opposition to both communism and clerical rule, and a strong centralised national state with protectionist and developmentalist economic policies.",
    scores: { interference: -15, ownership: 5, tradition: 30, faith: -10 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Papadopoulism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/papadopoulism.png",
    description: "Papadopoulism refers to the ideology of the Greek military regime of 1967–1974 led by Georgios Papadopoulos. It combined authoritarian nationalism, anti-communism, social conservatism, paternalistic economic policies and the rhetoric of a “Greece of the Christian Greeks”, presenting the regime as a temporary revolution to cleanse and regenerate the nation.",
    scores: { interference: -20, ownership: 5, tradition: 35, faith: 40 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Eastern Orthodox"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Party of National Socialists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/polishnatsoc.png",
    description: "The Party of National Socialists (Partia Narodowych Socjalistów) was a Polish interwar political group that sought to create a Polish form of national socialism. It emphasised anti-capitalism, anti-communism, national solidarity, and the organisation of the economy and state on hierarchical national rather than class or liberal-democratic lines.",
    scores: { interference: -22, ownership: -18, tradition: 28, faith: 22 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Patriot Front",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/patriotfront.png",
    description: "Patriot Front is a contemporary American nationalist organisation. It advocates a form of American nationalism rooted in European identity, rejects both liberalism and communism, and promotes the creation of a disciplined national community with social and economic policies oriented toward national solidarity and cultural preservation.",
    scores: { interference: -5, ownership: 10, tradition: 35, faith: 15 },
    tags: {
      region: ["North America"],
      faith: ["Catholic", "Protestant", "Eastern Orthodox", "Pagan"],
      economy: ["Corporatism"],
      orientation: ["Reactionary Modernist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Patriotic People's Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/IKL.png",
    description: "The Patriotic People's Movement (Isänmaallinen kansanliike, IKL) was a Finnish nationalist and authoritarian party founded in 1932 as a successor to the Lapua Movement. It advocated corporatism, anti-communism, strong national government, and the creation of a more hierarchical and organic Finnish society while operating within a legal framework.",
    scores: { interference: -18, ownership: 5, tradition: 35, faith: 30 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Pērkonkrusts",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/perkonkrusts.png",
    description: "Pērkonkrusts (Thunder Cross) was a Latvian ultra-nationalist and authoritarian movement of the 1930s. It advocated Latvian ethnic nationalism, anti-communism, anti-liberalism, corporatist economic organisation and the creation of a strong national authoritarian state based on Latvian cultural and biological identity.",
    scores: { interference: -20, ownership: -5, tradition: 35, faith: 15 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Secular", "Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Peronism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/peronism.png",
    description: "Peronism is the political movement founded by Juan Domingo Perón in Argentina. It combines nationalism, a strong role for the state in the economy, social justice for workers, corporatist representation of organised labour and business, and a third-position stance rejecting both liberal capitalism and orthodox Marxism, while maintaining a powerful presidential leadership.",
    scores: { interference: -20, ownership: -15, tradition: 15, faith: 20 },
    tags: {
      region: ["South America"],
      faith: ["Catholic", "Secular"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Petainism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/petainism.png",
    description: "Pétainism refers to the ideology of the Vichy regime led by Marshal Philippe Pétain (1940–1944). It advocated the “National Revolution” – a programme of authoritarian traditionalism, Catholic social values, corporatism, anti-parliamentarism, the rejection of the Third Republic’s liberalism, and the reorganisation of French society along hierarchical and organic lines.",
    scores: { interference: -18, ownership: 10, tradition: 42, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism"],
      orientation: ["Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Phibunism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/phibunism.png",
    description: "Phibunism refers to the authoritarian modernising nationalism of Plaek Phibunsongkhram in Thailand. It combined strong state leadership, cultural nationalism (including the promotion of Thai identity and manners), anti-communism, state-directed economic development and the centralisation of power, drawing partial inspiration from contemporary European authoritarian models while remaining rooted in Thai conditions.",
    scores: { interference: -22, ownership: 0, tradition: 25, faith: 10 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Corporatism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Political Circle \"Zveno\"",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zveno.png",
    description: "Zveno (Звено) was a Bulgarian political organisation of military officers and intellectuals that seized power in 1934. It advocated authoritarian modernisation, corporatist economic organisation, anti-party politics, and a strong centralised state that would overcome parliamentary fragmentation and modernise Bulgaria from above.",
    scores: { interference: -20, ownership: -5, tradition: 15, faith: 5 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox", "Secular"],
      economy: ["Corporatism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Poujadism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/poujadism.png",
    description: "Poujadism was a French populist movement led by Pierre Poujade in the 1950s. It defended small shopkeepers and artisans against big capital, the tax system and the centralising state, combining anti-fiscal protest, defence of the “little man”, social conservatism and elements of French nationalism in a broadly anti-establishment framework.",
    scores: { interference: 15, ownership: 30, tradition: 25, faith: 20 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic", "Secular"],
      economy: ["Distributism"],
      orientation: ["Conservative"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Qasimism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/qasimism.png",
    description: "Qasimism refers to the political ideology and practice of Abdul Karim Qasim, who ruled Iraq from 1958 to 1963. It combined Iraqi nationalism (as opposed to pan-Arabism), social reform, land reform, a strong role for the state in the economy, and a relatively inclusive approach to ethnic and religious communities within an authoritarian developmentalist framework.",
    scores: { interference: -25, ownership: -20, tradition: 5, faith: -5 },
    tags: {
      region: ["MENA"],
      faith: ["Secular"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Ragnarok Circle",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ragnarok.png",
    description: "The Ragnarök Circle refers to a radical traditionalist and pagan nationalist current that draws on Norse mythology, the concept of cyclical decline and renewal, and the rejection of modernity, liberalism and monotheistic universalism in favour of an ethno-cultural and spiritual rebirth of European peoples.",
    scores: { interference: 5, ownership: 10, tradition: 45, faith: -30 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary", "Futurist"],
      era: ["Modern Era"]
    }
  },
  {
    name: "Republican Fascist Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/republicanfascist.png",
    description: "The Republican Fascist Party (Partito Fascista Repubblicano) was the political party of the Italian Social Republic (Salo Republic) founded by Benito Mussolini in 1943. It attempted a return to the more radical, anti-monarchical, national-syndicalist and socialising aspects of early Fascism, while operating as a collaborationist regime under German occupation.",
    scores: { interference: -15, ownership: -25, tradition: 10, faith: 5 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Secular"],
      economy: ["National Syndicalism", "Socialism"],
      orientation: ["Futurist", "Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Revolutionary Mexicanist Action",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/revolutionarymexicanist.png",
    description: "Revolutionary Mexicanist Action (Acción Revolucionaria Mexicanista), known as the Gold Shirts, was a Mexican paramilitary nationalist organisation of the 1930s led by Nicolás Rodríguez. It combined intense nationalism, anti-communism, anti-Chinese and anti-Jewish rhetoric, corporatist ideas and opposition to the leftist policies of the Cárdenas government.",
    scores: { interference: -15, ownership: 5, tradition: 30, faith: 20 },
    tags: {
      region: ["North America"],
      faith: ["Catholic", "Secular"],
      economy: ["Corporatism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Revolutionary National Syndicalist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/revnatsynd.png",
    description: "The Revolutionary National Syndicalist Movement (Movimiento Revolucionario Nacional Sindicalista) was a Chilean national-syndicalist organisation founded in the early 1950s. Inspired by Spanish Falangism and Catholic traditionalism, it advocated a corporatist, hierarchical national state organised through syndicates, strong anti-communism and Hispanic cultural values.",
    scores: { interference: 10, ownership: -20, tradition: 35, faith: 35 },
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
    description: "The Rexist Party was a Belgian political party active from 1935 to 1945, founded by Léon Degrelle. Deeply rooted in National Catholicism, it called for a moral and national renewal under the slogan “Christus Rex”. It sought a corporatist and authoritarian Belgium, rejected liberalism and Marxism, and idealised rural life and traditional family values.",
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
    description: "Right Japanese Socialism refers to the nationalist current within the Japanese socialist movement associated with Inejiro Asanuma and others. While socialist and often anti-American, it retained respect for the Emperor as a symbol of national unity, rejected the abolition of the imperial institution, and sought a distinctly Japanese path that combined socialisation with ethnic and cultural continuity.",
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
    description: "Salazarism is the ideology of the Estado Novo regime of António de Oliveira Salazar in Portugal (1933–1974). It was characterised by opposition to communism, liberalism and parliamentary democracy, a corporatist economic system with distributist influences, Catholic social teaching, colonial retention, and a strong emphasis on order, tradition and the family as the basic unit of society.",
    scores: { interference: -7, ownership: 28, tradition: 35, faith: 40 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "Distributism"],
      orientation: ["Conservative"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Sansepolcrismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/sansepolcrismo.png",
    description: "Sansepolcrismo refers to the original programme of the Fasci Italiani di Combattimento proclaimed by Mussolini in Milan’s Piazza San Sepolcro on 23 March 1919. It combined revolutionary nationalism, national syndicalism, republicanism, anti-clericalism and demands for extensive socialisation and land reform, representing the most left-wing and futurist phase of early Fascism.",
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
    description: "The Scottish Democratic Fascist Party was a short-lived party founded in 1933 by William Weir Gilmour out of the Scottish section of Mosley’s New Party. It combined British fascist ideas with Scottish nationalism, calling for a Scottish Corporate Commonwealth, an industrial parliament, and measures against Irish immigration and Catholic influence.",
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
    description: "Self-Defence of the Republic of Poland (Samoobrona Rzeczypospolitej Polskiej) was a populist agrarian and Christian socialist party and trade union led by Andrzej Lepper. It combined left-wing nationalism, agrarian socialism, Catholic social teaching, anti-neoliberalism and anti-globalisation, presenting itself as the voice of farmers, workers and the patriotic left against post-communist elites and foreign capital.",
    scores: { interference: -16, ownership: -12, tradition: 22, faith: 24 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Sosism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/sosism.png",
    description: "Sosism (Spanish: Sosismo) was a short-lived corporatist current within Uruguay’s Colorado Party led by Julio María Sosa in the late 1920s. Influenced by Italian Fascism, it advocated a corporatist state, the replacement of the presidency by a directorial system, and the integration of occupational corporations into parliament, while claiming to defend progress and labour rights.",
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
    description: "Spenglerianism refers to the political and philosophical views of Oswald Spengler. He criticised materialism, capitalism, communism, liberalism and democracy, and proposed a “Prussian Socialism” that rejected Marxist class struggle in favour of a hierarchical, corporatist national community bound by duty, discipline and shared historical destiny, while affirming private property and authority.",
    scores: { interference: -14, ownership: -1, tradition: 45, faith: 12 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Secular", "Pagan"],
      economy: ["Socialism", "Corporatism"],
      orientation: ["Conservative", "Reactionary"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Squadrismo",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/squadrismo.png",
    description: "Squadrismo refers to the fascist squads (squadre d’azione) and their culture in early 1920s Italy. Led by local ras, the squadristi practised paramilitary violence against socialists and opponents, celebrated action, hierarchy and loyalty, and often resisted Mussolini’s later efforts to institutionalise and moderate the movement, preserving a more radical, anti-bourgeois and national-syndicalist ethos.",
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
    description: "Strasserism refers to the current associated with the brothers Gregor and Otto Strasser within the early Nazi movement. It emphasised the socialist, anti-capitalist and revolutionary aspects of National Socialism, advocated extensive socialisation, land reform and a guild-based economy, and criticised Hitler’s accommodation with big business and the traditional elites.",
    scores: { interference: -33, ownership: -29, tradition: 17, faith: 15 },
    tags: {
      region: ["Europe (Germanic)"],
      faith: ["Catholic", "Secular"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Superfascism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/superfascism.png",
    description: "Superfascism is a term associated with the thought of Julius Evola. It designates a spiritual, hierarchical and anti-modern ideal that transcends ordinary fascism, drawing on Traditionalist philosophy, the idea of a solar and warrior aristocracy, and the rejection of both bourgeois liberalism and mass totalitarianism in favour of a radical, quality-oriented order rooted in transcendent values.",
    scores: { interference: -15, ownership: 23, tradition: 50, faith: 23 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Pagan"],
      economy: [],
      orientation: ["Reactionary"],
      era: ["World Wars Era", "Cold War Era"]
    }
  },
  {
    name: "Swedish Socialist Gathering",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/SSS.png",
    description: "Swedish Socialist Gathering (Svensk Socialistisk Samling), formerly the National Socialist Workers’ Party, was the principal Swedish national-socialist party under Sven Olov Lindholm. After an early phase closely copying German National Socialism it rebranded toward a more national “Swedish socialism”, retaining anti-capitalism, anti-communism, corporatism and authoritarian nationalism.",
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
    description: "Syrian Social Nationalism is the ideology of the Syrian Social Nationalist Party founded by Antoun Saadeh. It advocates the establishment of a Greater Syrian nation-state spanning the Fertile Crescent on the basis of geographical and historical unity, combined with a form of national socialism, secularism, and a strong centralised national state that transcends religious and ethnic particularisms within the Syrian nation.",
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
    description: "The Szeged Idea (Szegedi gondolat) was the ideology associated with the post-1919 counter-revolutionary regime in Hungary and later with Gyula Gömbös. It combined Hungarian nationalism, anti-communism, agrarian and corporatist economic ideas, the cult of the nation and the army, and a desire for a strong, authoritarian national state that would overcome the Treaty of Trianon.",
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
    description: "The Tacuara Nationalist Movement (Movimiento Nacionalista Tacuara) was an Argentine Catholic nationalist group active mainly in the late 1950s and 1960s. It combined falangist aesthetics, third-position economic ideas, intense nationalism and paramilitary activity, later fragmenting into various radical and Peronist-leaning splinters.",
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
    name: "Tatenokai",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/tatenokai.png",
    description: "The Tatenokai (Shield Society) was a private militia founded and led by the writer Yukio Mishima. Dedicated to traditional Japanese values and the veneration of the Emperor, it was formed to resist the erosion of Japanese spiritual identity and to defend the dignity of the Emperor as the symbol of the nation. It is best known for the failed coup attempt and Mishima’s ritual suicide on 25 November 1970.",
    scores: { interference: 10, ownership: 20, tradition: 45, faith: 30 },
    tags: {
      region: ["East Asia"],
      faith: ["Shinto"],
      economy: [],
      orientation: ["Reactionary", "Monarchist"],
      era: ["Cold War Era"]
    }
  },
  {
    name: "Third International Theory",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/gaddafism.png",
    description: "The Third International Theory was the ideology proposed by Muammar Gaddafi in his Green Book. It presented itself as an alternative to both capitalism and Marxism-Leninism for the Third World, combining Arab nationalism, Islamic socialism, direct popular democracy through people’s committees, anti-imperialism and a distinctive form of state-guided social and economic organisation.",
    scores: { interference: -35, ownership: -40, tradition: 20, faith: 30 },
    tags: {
      region: ["MENA", "Africa"],
      faith: ["Secular", "Islam"],
      economy: ["Socialism"],
      orientation: ["Progressive"],
      era: ["Cold War Era", "Modern Era"]
    }
  },
  {
    name: "Tōhōkai",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/tohokai.png",
    description: "Tōhōkai (Eastern Society) was a Japanese political party founded in 1936 by Nakano Seigō. It advocated a strong authoritarian state, anti-party politics, national-syndicalist-style economic organisation, aggressive expansionism and a break with both liberal capitalism and Marxism, while insisting on a distinct Japanese path centred on the Emperor and national mobilisation.",
    scores: { interference: -20, ownership: 12, tradition: 15, faith: 18 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular", "Shinto"],
      economy: ["Socialism", "National Syndicalism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Ukrainian National Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ukrainiannationalparty.png",
    description: "The Ukrainian National Party was a small interwar Western Ukrainian (Galician) nationalist party of conservative, corporatist and pro-hetmanist orientation. It favoured an independent Ukrainian state organised on hierarchical, traditional and Christian (mainly Greek-Catholic) principles, rejecting both liberal democracy and the revolutionary integral nationalism of the OUN.",
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
    name: "Union of Bulgarian National Legions",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/bulgarianfascism.png",
    description: "The Union of Bulgarian National Legions was a Bulgarian ultranationalist organisation founded in 1932 by Hristo Lukov. It advocated a totalitarian one-party regime, extensive state control over the economy and society, anti-communism, and a hierarchical national order, later becoming more favourable to the monarchy.",
    scores: { interference: -25, ownership: -30, tradition: 35, faith: 27 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Eastern Orthodox"],
      economy: ["Socialism", "National Syndicalism", "Corporatism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Union of Dutch National Solidarists",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/verdinaso.png",
    description: "The Union of Dutch National Solidarists (Verbond van Dietsche Nationaal-Solidaristen, Verdinaso) was a political movement active in Belgium and the Netherlands between 1931 and 1941 under Joris Van Severen. It called for the reunification of the Dutch-speaking peoples, a corporatist organic society, and an authoritarian national order inspired by integral nationalism and the Estado Novo.",
    scores: { interference: -15, ownership: -10, tradition: 30, faith: 15 },
    tags: {
      region: ["Europe (Romance)", "Europe (Germanic)"],
      faith: ["Secular", "Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "United National Independence Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/UNIP.png",
    description: "The United National Independence Party (UNIP) was the dominant independence and post-independence party of Zambia under Kenneth Kaunda. Its ideology of Zambian Humanism combined Christian ethics, African communal traditions, state-directed development and a rejection of both Western capitalism and orthodox Marxism, establishing a one-party state that emphasised national unity and moral reconstruction.",
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
    name: "Ustaše",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/ustase.png",
    description: "The Ustaše (Ustaša – Croatian Revolutionary Movement) was a Croatian ultra-nationalist organisation founded by Ante Pavelić in 1929. It sought the creation of an independent Greater Croatia based on ethnic purity, Catholic identity, and the complete subordination of the individual to the nation. Economically it pursued a form of national corporatism combined with the nationalisation of key sectors in order to create an ethnically homogeneous national economy. The movement ruled the Independent State of Croatia from 1941 to 1945.",
    scores: { interference: -25, ownership: -10, tradition: 42, faith: 45 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Valoisism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/proudhoncercle.png",
    description: "Valoisism refers to the ideas of Georges Valois, founder of the Cercle Proudhon and later of the Faisceau. He sought a synthesis of integral nationalism and revolutionary syndicalism, rejecting both democracy and capitalism in favour of a national, authoritarian and producer-oriented order, and was one of the earliest French advocates of a fascism adapted to French conditions.",
    scores: { interference: 13, ownership: -7, tradition: 20, faith: 18 },
    tags: {
      region: ["Europe (Romance)"],
      faith: ["Catholic"],
      economy: ["National Syndicalism"],
      orientation: ["Progressive", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "VAPS Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/vaps.png",
    description: "The Vaps Movement (Union of Participants in the Estonian War of Independence) was an Estonian anti-communist and nationalist organisation of veterans. It advocated a more authoritarian and nationalist constitution, strong executive power, and the defence of Estonian independence against both internal leftist threats and external pressures, while rejecting German National Socialism.",
    scores: { interference: -1, ownership: 6, tradition: 30, faith: 22 },
    tags: {
      region: ["Europe (Other)"],
      faith: ["Protestant"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Wang Jingwei Thought",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/wangjingwei.png",
    description: "Wang Jingwei Thought refers to the ideological line of the Reorganised National Government of China led by Wang Jingwei in collaboration with Japan (1940–1945). It presented itself as the authentic continuation of Sun Yat-sen’s Three Principles of the People, emphasising anti-communism, pan-Asianism, peace with Japan, and a corporatist, authoritarian reorganisation of Chinese society.",
    scores: { interference: -20, ownership: 10, tradition: -1, faith: 10 },
    tags: {
      region: ["East Asia"],
      faith: ["Secular"],
      economy: ["Socialism", "Corporatism"],
      orientation: ["Progressive"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Yellow Socialism",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/yellowsocialism.png",
    description: "Yellow Socialism (also known as Yellow Unionism) was an economic and social doctrine proposed in 1902 by the Frenchman Pierre Biétry as an alternative to Marxism. It envisioned workers organising in unions that would cooperate with employers and the state in a corporatist framework under a strong authoritarian government, combining nationalism, anti-Marxism and a rejection of class struggle.",
    scores: { interference: -15, ownership: -22, tradition: 26, faith: 19 },
    tags: {
      region: ["Universal"],
      faith: ["Secular"],
      economy: ["Socialism", "Corporatism"],
      orientation: ["Progressive"],
      era: ["Timeless"]
    }
  },
  {
    name: "Young Egypt Party",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/youngegyptparty.png",
    description: "The Young Egypt Party (Misr al-Fatat) was an Egyptian nationalist movement founded in 1933 by Ahmed Hussein. It combined intense Egyptian nationalism, anti-British imperialism, corporatism, paramilitary organisation (the Green Shirts), and a social programme aimed at workers and the lower middle class, while remaining rooted in Islamic and Egyptian cultural references.",
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
    name: "Yugoslav People's Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zbor.png",
    description: "The Yugoslav People's Movement “Zbor” was a Yugoslav nationalist and Christian corporatist organisation founded by Dimitrije Ljotić. It advocated the abandonment of individualism and parliamentary democracy, the return to religious and cultural traditions, the organisation of society on Christian and corporatist principles, and the unity of the Yugoslav peoples under a strong authoritarian leadership.",
    scores: { interference: -17, ownership: -15, tradition: 37, faith: 35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic", "Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Yugoslav Radical Union",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/yugru.png",
    description: "The Yugoslav Radical Union (Jugoslovenska radikalna zajednica) was the dominant political party of interwar Yugoslavia under Milan Stojadinović. It developed an authoritarian, corporatist and nationalist orientation, modelled partly on Italian Fascism, while retaining the formal framework of the Yugoslav monarchy and seeking to create a strong, centralised national state.",
    scores: { interference: -21, ownership: -13, tradition: 23, faith: 20 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Catholic", "Eastern Orthodox"],
      economy: ["Corporatism", "National Syndicalism"],
      orientation: ["Conservative", "Monarchist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Zadruga",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zadruga.png",
    description: "Zadruga was a Polish nationalist and anti-clerical movement founded by Jan Stachniuk in the interwar period. It rejected both liberalism and Marxism, calling instead for a form of national collectivism rooted in pagan Slavic traditions. The movement advocated strong state direction of the economy, cultural revolution and the revival of a pre-Christian Slavic identity based on discipline, hierarchy and communal values.",
    scores: { interference: -22, ownership: -28, tradition: -15, faith: -35 },
    tags: {
      region: ["Europe (Slavic)"],
      faith: ["Pagan"],
      economy: ["Socialism"],
      orientation: ["Reactionary Modernist"],
      era: ["World Wars Era"]
    }
  },
  {
    name: "Zikist Movement",
    img: "https://raw.githubusercontent.com/tpaxes/3Pvalues/main/logos/zikist.png",
    description: "The Zikist Movement was a radical Nigerian nationalist youth organisation of the late 1940s that took its name from Nnamdi Azikiwe. It advocated militant anti-colonialism, African socialism, national unity across ethnic lines, and a rejection of both British rule and conservative traditional elites, displaying authoritarian, populist and anti-imperialist traits typical of many mid-century African nationalist movements.",
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
