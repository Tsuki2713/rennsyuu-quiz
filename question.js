const questions = [
  // ==================================================
  // 科学・物理 1〜20
  // ==================================================
  {
    question: "物体に力が加わっていないとき、静止している物体は静止し続け、運動している物体は等速直線運動を続けるという法則は？",
    answer: "せいりのほうそく",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "物体がその運動状態を保とうとする性質を何という？",
    answer: "かんせい",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "力の大きさを表す単位として使われる、記号Nで表す単位は？",
    answer: "ニュートン",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "質量1kgの物体に1m/s²の加速度を生じさせる力の大きさを1とする単位は？",
    answer: "ニュートン",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "物体にはたらく重力の大きさを、質量と重力加速度の積で表すとき、その式は？",
    answer: "エムジー",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "物体が受ける力の合計を何という？",
    answer: "ごうりょく",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "ばねなどが元の形に戻ろうとするときにはたらく力を何という？",
    answer: "だんせいりょく",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "物体が面に接しているとき、面から物体に垂直にはたらく力を何という？",
    answer: "せいこうりょく",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "物体が別の物体の上を動くとき、その運動を妨げる向きにはたらく力を何という？",
    answer: "まさつりょく",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "仕事の大きさを、力の大きさと力の向きに動いた距離の積で表すとき、その単位は？",
    answer: "ジュール",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "1秒あたりにどれだけ仕事をしたかを表す量を何という？",
    answer: "しごとりつ",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "電流が流れる道筋を何という？",
    answer: "でんりゅうかいろ",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "電流の大きさを表す単位で、記号Aを使うものは？",
    answer: "アンペア",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "電圧の大きさを表す単位で、記号Vを使うものは？",
    answer: "ボルト",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "電気抵抗の大きさを表す単位で、記号Ωを使うものは？",
    answer: "オーム",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "電圧は電流と抵抗の積に等しいという関係を何という？",
    answer: "オームのほうそく",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "電力を、電圧と電流の積で表す式は？",
    answer: "でんあつかけるでんりゅう",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "光が鏡などの面に当たり、跳ね返る現象を何という？",
    answer: "はんしゃ",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "光が空気中から水中など、異なる物質へ進むときに進行方向が変化する現象は？",
    answer: "くっせつ",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "凸レンズを通った光が一点に集まる場所を何という？",
    answer: "しょうてん",
    category: "科学",
    genre: "物理",
    level: "初級"
  },

  // ==================================================
  // 科学・物理 21〜40
  // ==================================================
  {
    question: "音は空気などの物質を振動させながら伝わる。このとき、音を伝える物質を何という？",
    answer: "ばいたい",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "音の高さを決める、1秒間あたりの振動回数を何という？",
    answer: "しんどうすう",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "振動数の単位として使われ、記号Hzで表されるものは？",
    answer: "ヘルツ",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "音の大きさを決める主な要素は、音源の何の大きさ？",
    answer: "しんぷく",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "光や電波が真空中を進む速さは、およそ毎秒何km？",
    answer: "さんじゅうまん",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "電磁波のうち、人間の目で見ることができる範囲の光を何という？",
    answer: "かしこうせん",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "可視光線より波長が長く、暖房器具などからも放射される電磁波は？",
    answer: "せきがいせん",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "可視光線より波長が短く、日焼けなどにも関係する電磁波は？",
    answer: "しがいせん",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "物体の位置エネルギーや運動エネルギーなどをまとめて何という？",
    answer: "りきがくてきエネルギー",
    category: "科学",
    genre: "物理",
    level: "上級"
  },
  {
    question: "運動している物体が持つエネルギーを何という？",
    answer: "うんどうエネルギー",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "高いところにある物体が、その位置によって持つエネルギーを何という？",
    answer: "いちエネルギー",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "物体の質量が大きいほど、また速度が速いほど大きくなる運動エネルギーは、速度の何乗に比例する？",
    answer: "にじょう",
    category: "科学",
    genre: "物理",
    level: "上級"
  },
  {
    question: "エネルギーは形を変えても全体の量が変わらないという法則を何という？",
    answer: "エネルギーほぞんのほうそく",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "熱が物体の内部を移動していく現象を何という？",
    answer: "ねつでんどう",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "液体や気体が移動することで熱が運ばれる現象を何という？",
    answer: "たいりゅう",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "熱が電磁波によって伝わる現象を何という？",
    answer: "ほうしゃ",
    category: "科学",
    genre: "物理",
    level: "初級"
  },
  {
    question: "温度が一定のとき、気体の圧力と体積の積が一定になるという関係は何の法則？",
    answer: "ボイルのほうそく",
    category: "科学",
    genre: "物理",
    level: "上級"
  },
  {
    question: "温度が一定のとき、気体の体積は圧力に対してどのような関係になる？",
    answer: "はんぴれい",
    category: "科学",
    genre: "物理",
    level: "上級"
  },
  {
    question: "絶対温度を表す単位Kを何と読む？",
    answer: "ケルビン",
    category: "科学",
    genre: "物理",
    level: "中級"
  },
  {
    question: "摂氏温度0℃は、絶対温度ではおよそ何K？",
    answer: "にひゃくななじゅうさん",
    category: "科学",
    genre: "物理",
    level: "中級"
  },

  // ==================================================
  // 科学・化学 1〜20
  // ==================================================
  {
    question: "物質をつくっている非常に小さな粒子のうち、化学変化でそれ以上分けられないものを何という？",
    answer: "げんし",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子がいくつか結びついてできた粒子を何という？",
    answer: "ぶんし",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子の中心にあり、陽子と中性子からできている部分を何という？",
    answer: "げんしかく",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子核の中にあり、正の電気を帯びている粒子は？",
    answer: "ようし",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子核の中にあり、電気を帯びていない粒子は？",
    answer: "ちゅうせいし",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子核のまわりに存在し、負の電気を帯びている粒子は？",
    answer: "でんし",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "原子が電子を失ったり受け取ったりして、電気を帯びた粒子になったものを何という？",
    answer: "イオン",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "電子を失って正の電気を帯びたイオンを何という？",
    answer: "ようイオン",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "電子を受け取って負の電気を帯びたイオンを何という？",
    answer: "いんイオン",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "水に溶けたとき、電離して水溶液が電気を通す物質を何という？",
    answer: "でんかいしつ",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "水に溶けてもほとんど電離せず、水溶液が電気を通しにくい物質を何という？",
    answer: "ひでんかいしつ",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "水に溶けて水素イオンを生じる物質を何という？",
    answer: "さん",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "水に溶けて水酸化物イオンを生じる物質を何という？",
    answer: "えんき",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "酸とアルカリが反応して、互いの性質を打ち消し合う反応を何という？",
    answer: "ちゅうわ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "酸とアルカリの中和によって、一般に水とともに何ができる？",
    answer: "えん",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "水素イオン濃度を表す尺度で、7より小さいほど酸性が強いものは？",
    answer: "ピーエイチ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "pHが7の水溶液は、酸性でもアルカリ性でもない何性？",
    answer: "ちゅうせい",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "物質が酸素と結びつく化学変化を何という？",
    answer: "さんか",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "酸化物から酸素を取り除く化学変化を何という？",
    answer: "かんげん",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "酸化と還元が同時に起こる化学反応を何という？",
    answer: "さんかかんげん",
    category: "科学",
    genre: "化学",
    level: "中級"
  },

  // ==================================================
  // 科学・化学 21〜40
  // ==================================================
  {
    question: "物質が酸素と急速に反応し、熱や光を出す現象を何という？",
    answer: "ねんしょう",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "物質が酸素と結びつくときに出入りする熱を何という？",
    answer: "はんのうねつ",
    category: "科学",
    genre: "化学",
    level: "上級"
  },
  {
    question: "一種類の物質が二種類以上の物質に分かれる化学変化を何という？",
    answer: "ぶんかい",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "二種類以上の物質が結びついて一種類の物質ができる化学変化を何という？",
    answer: "かごう",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "化学変化の前後で、原子の種類と数は変わらないという考え方を何という？",
    answer: "げんしのほぞん",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "化学反応式を書くとき、反応の前後で各原子の数をそろえることを何という？",
    answer: "かがくはんのうしきのちょうせい",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "水素と酸素が反応するとできる物質は？",
    answer: "みず",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "炭素が完全燃焼したときにできる気体は？",
    answer: "にさんかたんそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "石灰水を白くにごらせる気体は？",
    answer: "にさんかたんそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "火を近づけると「ポン」という音を立てて燃える気体は？",
    answer: "すいそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "ものを燃やすはたらきがあり、ものを燃やす実験で重要な気体は？",
    answer: "さんそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "空気中に最も多く含まれている気体は？",
    answer: "ちっそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "空気中に約21パーセント含まれ、呼吸や燃焼に関係する気体は？",
    answer: "さんそ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "物質が水などに溶けて均一な混合物になったものを何という？",
    answer: "ようえき",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "溶液に溶けている物質を何という？",
    answer: "ようしつ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "溶質を溶かしている液体を何という？",
    answer: "ようばい",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "一定量の溶媒に溶けることのできる溶質の最大量を何という？",
    answer: "ようかいど",
    category: "科学",
    genre: "化学",
    level: "中級"
  },
  {
    question: "温度によって物質が固体・液体・気体の間で変化することを何という？",
    answer: "じょうたいへんか",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "液体が表面から気体になる現象を何という？",
    answer: "じょうはつ",
    category: "科学",
    genre: "化学",
    level: "初級"
  },
  {
    question: "気体が液体になる現象を何という？",
    answer: "えきか",
    category: "科学",
    genre: "化学",
    level: "初級"
  },

  // ==================================================
  // 科学・生物 1〜20
  // ==================================================
  {
    question: "生物の体をつくる基本的な単位で、細胞膜や細胞質などからできているものは？",
    answer: "さいぼう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "細胞の中で遺伝情報を含むDNAを主に収納している部分は？",
    answer: "かく",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "植物細胞にあり、光合成を行う細胞小器官は？",
    answer: "ようりょくたい",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "植物細胞にあり、細胞の外側を支える丈夫な構造は？",
    answer: "さいぼうへき",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "細胞の中で、呼吸によってエネルギーを取り出す細胞小器官は？",
    answer: "ミトコンドリア",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "植物が光エネルギーを使って二酸化炭素と水から有機物をつくるはたらきを何という？",
    answer: "こうごうせい",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "光合成によって主に作られる有機物は？",
    answer: "でんぷん",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "光合成で植物が空気中から取り入れる気体は？",
    answer: "にさんかたんそ",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "光合成によって植物から放出される気体は？",
    answer: "さんそ",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "生物が有機物を分解してエネルギーを取り出すはたらきを何という？",
    answer: "こきゅう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "血液中で酸素を運ぶ赤血球に含まれる色素は？",
    answer: "ヘモグロビン",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "血液中の成分で、病原体などから体を守るはたらきをするものは？",
    answer: "はっけっきゅう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "血液を固めるはたらきに関係する血球は？",
    answer: "けっしょうばん",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "心臓から送り出された血液が流れる血管を何という？",
    answer: "どうみゃく",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "心臓へ戻ってくる血液が流れる血管を何という？",
    answer: "じょうみゃく",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "動脈と静脈の間をつなぎ、物質交換が行われる細い血管は？",
    answer: "もうさいけっかん",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "食べ物を消化するとき、でんぷんを分解する消化酵素は？",
    answer: "アミラーゼ",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "胃液に含まれ、タンパク質の消化を助ける酵素は？",
    answer: "ペプシン",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "小腸の内壁にあり、表面積を大きくして養分を吸収しやすくしている突起は？",
    answer: "じゅうもう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "呼吸によって取り入れた酸素と二酸化炭素の交換が行われる肺の小さな袋状の構造は？",
    answer: "はいほう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },

  // ==================================================
  // 科学・生物 21〜40
  // ==================================================
  {
    question: "遺伝情報を担っている物質で、二重らせん構造を持つものは？",
    answer: "ディーエヌエー",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "DNA上で、特定のタンパク質をつくるための遺伝情報を担う部分を何という？",
    answer: "いでんし",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "親の形質が子に伝わることを何という？",
    answer: "いでん",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "生物の体細胞が分裂するとき、同じ染色体数の細胞が二つできる分裂を何という？",
    answer: "たいさいぼうぶんれつ",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "精子や卵などの生殖細胞をつくるときに行われ、染色体数が半分になる細胞分裂は？",
    answer: "げんすうぶんれつ",
    category: "科学",
    genre: "生物",
    level: "上級"
  },
  {
    question: "精子と卵が融合して新しい細胞ができることを何という？",
    answer: "じゅせい",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "受精によってできた最初の細胞を何という？",
    answer: "じゅせいらん",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "植物が根から吸収し、茎を通って葉などへ運ばれる水を含む液体を何という？",
    answer: "どうかんさい",
    category: "科学",
    genre: "生物",
    level: "上級"
  },
  {
    question: "植物の葉でつくられた養分を運ぶ管を何という？",
    answer: "しかん",
    category: "科学",
    genre: "生物",
    level: "上級"
  },
  {
    question: "根から吸収した水が葉から水蒸気として放出される現象を何という？",
    answer: "じょうさん",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "植物の気孔が主に存在し、光合成や蒸散に関係する器官は？",
    answer: "は",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "植物の葉などにある、気体の出入り口となる小さな穴は？",
    answer: "きこう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "刺激を受け取って反応する生物の性質を何という？",
    answer: "しげきとはんのう",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "光・音・温度など、生物に作用して反応を引き起こすものを何という？",
    answer: "しげき",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "刺激を受け取る神経細胞などの器官を何という？",
    answer: "かんかくきかん",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "脳や脊髄からなり、体の情報処理を行う神経系を何という？",
    answer: "ちゅうすうしんけい",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "脳と脊髄以外の神経からなる部分を何という？",
    answer: "まっしょうしんけい",
    category: "科学",
    genre: "生物",
    level: "中級"
  },
  {
    question: "意識とは関係なく、刺激に対してすばやく反応する仕組みを何という？",
    answer: "はんしゃ",
    category: "科学",
    genre: "生物",
    level: "初級"
  },
  {
    question: "体内の状態を一定の範囲に保つはたらきを何という？",
    answer: "こうじょうせい",
    category: "科学",
    genre: "生物",
    level: "上級"
  },
  {
    question: "血糖値を下げるはたらきを持つホルモンは？",
    answer: "インスリン",
    category: "科学",
    genre: "生物",
    level: "中級"
  },

  // ==================================================
  // 科学・地学 1〜20
  // ==================================================
  {
    question: "地球が太陽のまわりを回る運動を何という？",
    answer: "こうてん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球が自分自身の軸を中心に回転する運動を何という？",
    answer: "じてん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球が一回自転するのにかかる時間は約何時間？",
    answer: "にじゅうよじかん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球が太陽のまわりを一周するのにかかる時間は約何日？",
    answer: "さんびゃくろくじゅうごにち",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球の自転によって、太陽や星が東から西へ動いて見える現象を何という？",
    answer: "にちしゅううんどう",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地球の公転によって、季節ごとに見える星座が変化する現象を何という？",
    answer: "ねんしゅううんどう",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地球の周りを回っている天然の衛星は？",
    answer: "つき",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "月が地球のまわりを一周するのにかかる時間は約何日？",
    answer: "にじゅうななてんさんにち",
    category: "科学",
    genre: "地学",
    level: "上級"
  },
  {
    question: "月が太陽の光を反射して輝いて見えることを利用して、月の形が変化して見える現象を何という？",
    answer: "つきのみちかけ",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "月が太陽と地球の間に入り、太陽を隠してしまう現象を何という？",
    answer: "にっしょく",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球が月と太陽の間に入り、月が地球の影に入る現象を何という？",
    answer: "げっしょく",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球を取り巻く気体の層を何という？",
    answer: "たいき",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "大気中で水蒸気が冷やされ、水滴や氷の粒などになる現象を何という？",
    answer: "ぎょうけつ",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "空気中の水蒸気が冷やされてできる細かな水滴が地表付近に浮かんでいるものを何という？",
    answer: "きり",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "空気中の水蒸気が上空で冷やされてできる水滴や氷の粒が集まったものは？",
    answer: "くも",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "雲から水滴や氷の粒が地表へ落ちてくる現象を何という？",
    answer: "こうすい",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "雨や雪など、空から降ってくる水をまとめて何という？",
    answer: "こうすい",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "大気中の水蒸気が液体の水滴になるときに放出される熱を何という？",
    answer: "ぎょうけつねつ",
    category: "科学",
    genre: "地学",
    level: "上級"
  },
  {
    question: "空気が上昇すると、周囲の気圧が低くなるため温度は一般にどうなる？",
    answer: "さがる",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地球内部の熱や圧力によって岩石が溶けたものを何という？",
    answer: "マグマ",
    category: "科学",
    genre: "地学",
    level: "初級"
  },

  // ==================================================
  // 科学・地学 21〜40
  // ==================================================
  {
    question: "マグマが地表や地表近くで冷えて固まってできた岩石を何という？",
    answer: "かざんがん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地下深くでマグマがゆっくり冷えて固まってできた岩石を何という？",
    answer: "しんせいがん",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地下深くでゆっくり冷えた火成岩のうち、石英や長石などの結晶が大きく見える組織を何という？",
    answer: "とうりゅうじょうそしき",
    category: "科学",
    genre: "地学",
    level: "上級"
  },
  {
    question: "地表付近で急に冷えた火山岩に見られ、結晶が小さい部分と大きな結晶からなる組織を何という？",
    answer: "はんしょうじょうそしき",
    category: "科学",
    genre: "地学",
    level: "上級"
  },
  {
    question: "火山灰などが堆積してできる岩石を何という？",
    answer: "ぎょうかいがん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "砂が堆積してできた堆積岩を何という？",
    answer: "さがん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "泥が堆積してできた堆積岩を何という？",
    answer: "でいがん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "生物の遺骸などが堆積してできる代表的な岩石は？",
    answer: "せっかいがん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地層の中から見つかり、地層ができた時代を推定する手がかりとなる化石を何という？",
    answer: "しじゅんかせき",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地層の中から見つかり、当時の環境を推定する手がかりとなる化石を何という？",
    answer: "そうしょうかせき",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地震が発生した地下の場所を何という？",
    answer: "しんげん",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地震の震源の真上にある地表の地点を何という？",
    answer: "しんおう",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地震が起きたとき、最初に伝わってくる速い波を何という？",
    answer: "ピーは",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "P波の後に伝わってくる、揺れを大きくする波を何という？",
    answer: "エスは",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地震が発生してから主要動が始まるまでの時間を何という？",
    answer: "しょきびどうけいぞくじかん",
    category: "科学",
    genre: "地学",
    level: "上級"
  },
  {
    question: "地震そのものの規模を表す尺度は？",
    answer: "マグニチュード",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "ある場所での地震の揺れの強さを表す尺度は？",
    answer: "しんど",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "地球の表面を覆うプレートが互いに近づいたり離れたりすることで起こる大地の変動を何という？",
    answer: "プレートうんどう",
    category: "科学",
    genre: "地学",
    level: "中級"
  },
  {
    question: "地球の表面を覆う、十数枚ほどの巨大な岩盤を何という？",
    answer: "プレート",
    category: "科学",
    genre: "地学",
    level: "初級"
  },
  {
    question: "プレートが地下へ沈み込む場所で、海底にできる深い溝を何という？",
    answer: "かいこう",
    category: "科学",
    genre: "地学",
    level: "初級"
  },

  // ==================================================
  // 科学・数学 1〜20
  // ==================================================
  {
    question: "三角形の三つの内角の和は何度？",
    answer: "ひゃくはちじゅう",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "直角三角形で、直角をはさむ二辺の平方の和が斜辺の平方に等しいという定理は？",
    answer: "ピタゴラスのていり",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "二次方程式を解くときに使う、xの係数と定数項から解を求める公式を何という？",
    answer: "にじほうていしきのかいのこうしき",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "関数 y=ax² のグラフは、どのような曲線になる？",
    answer: "ほうぶつせん",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "y=ax²で、aが正のとき、グラフは上に開くか下に開くか？",
    answer: "うえ",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "x²-5x+6を因数分解すると何になる？",
    answer: "えっくすひくにかけるえっくすひくさん",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "x²=9を満たすxの値は？",
    answer: "さんとマイナスさん",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "一次関数 y=ax+b のグラフで、aが表すものを何という？",
    answer: "へいこうかくのけい",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "一次関数 y=ax+b のグラフで、bが表すものはy軸との何？",
    answer: "こうてん",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "二つの直線が交わる点の座標を求めるとき、二つの式を同時に満たすxとyを求めることを何という？",
    answer: "れんりつほうていしき",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "円周の長さを求める公式に登場する、円周と直径の比を表す定数は？",
    answer: "パイ",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "円の面積を求める公式は、半径rを使うと何になる？",
    answer: "パイアールにじょう",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "円周の長さを求める公式は、半径rを使うと何になる？",
    answer: "にパイアール",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "指数法則で、同じ底の数をかけるとき、指数はどうする？",
    answer: "たす",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "aの0乗は、aが0でないときいくつ？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "aのマイナス1乗は、aが0でないとき何を表す？",
    answer: "えーぶんのいち",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "logₐxで、aを何という？",
    answer: "てい",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "logₐ1はいくつ？",
    answer: "ぜろ",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "sin90°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "cos0°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },

  // ==================================================
  // 科学・数学 21〜40
  // ==================================================
  {
    question: "tan45°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "sin30°の値は？",
    answer: "にぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "cos60°の値は？",
    answer: "にぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "sin²θ+cos²θ=1という関係を何という？",
    answer: "さんかくかんすうのどういつしき",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "微分とは、関数の何の変化の割合を調べる操作？",
    answer: "へんか",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "x²をxについて微分すると何になる？",
    answer: "にえっくす",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "x³をxについて微分すると何になる？",
    answer: "さんえっくすにじょう",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "定数を微分すると何になる？",
    answer: "ぜろ",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "xをxについて積分すると何になる？",
    answer: "えっくすにじょうぶんのに",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "不定積分の結果につける積分定数を、一般に何という記号で表す？",
    answer: "シー",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "∫1 dx は何になる？",
    answer: "えっくすプラスシー",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "関数の極限を考えるとき、xがある値に限りなく近づくことを何という？",
    answer: "きょくげん",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "微分係数は、グラフ上のある点における何の傾きを表す？",
    answer: "せっせん",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "積分は、図形の面積を求める方法として考えると、何を細かく足し合わせる操作？",
    answer: "せき",
    category: "科学",
    genre: "数学",
    level: "上級"
  },
  {
    question: "二つの集合AとBの両方に含まれる要素からなる集合を何という？",
    answer: "せきしゅうごう",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "集合Aまたは集合Bの少なくとも一方に含まれる要素からなる集合を何という？",
    answer: "わしゅうごう",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "確率の値は0以上何以下？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "サイコロを一回振って6が出る確率は？",
    answer: "ろくぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "正規分布のグラフは、中央が高く左右対称な何型の曲線になる？",
    answer: "つりがね",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "平均値からのばらつきの大きさを表す代表的な指標は？",
    answer: "ひょうじゅんへんさ",
    category: "科学",
    genre: "数学",
    level: "中級"
  },

  // ==================================================
  // 社会・日本史 1〜30
  // ==================================================
  {
    question: "日本列島で旧石器時代の人々が使っていた石器として代表的なものは？",
    answer: "だせいせっき",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "縄文時代の人々が食料を煮たり保存したりするために使った土器は？",
    answer: "じょうもんどき",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "米づくりが大陸から伝わり、稲作が広まった時代は？",
    answer: "やよいじだい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "邪馬台国の女王として中国の史書に記されている人物は？",
    answer: "ひみこ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "聖徳太子が定めた、役人の心構えを示す17条からなる決まりは？",
    answer: "じゅうしちじょうのけんぽう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "645年に中大兄皇子と中臣鎌足らが蘇我氏を倒して始めた政治改革を何という？",
    answer: "たいかのかいしん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "奈良時代に都が置かれた、現在の奈良市にあたる場所は？",
    answer: "へいじょうきょう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "東大寺の大仏造立を進めた奈良時代の天皇は？",
    answer: "しょうむてんのう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "平安京に都を移した天皇は？",
    answer: "かんむてんのう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "平安時代に発達した、日本独自の文化を何文化という？",
    answer: "こくふうぶんか",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "『源氏物語』を書いた女性は？",
    answer: "むらさきしきぶ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "『枕草子』を書いた女性は？",
    answer: "せいしょうなごん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鎌倉幕府を開いた人物は？",
    answer: "みなもとのよりとも",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鎌倉幕府で将軍を補佐し、政治の実権を握った役職は？",
    answer: "しっけん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鎌倉幕府が御家人を統制するために制定した法律は？",
    answer: "ごせいばいしきもく",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "鎌倉時代に日本を攻めてきた元軍を何という？",
    answer: "げんぐん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "元寇のうち、1274年に起きた最初の戦いを何という？",
    answer: "ぶんえいのえき",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "元寇のうち、1281年に起きた二度目の戦いを何という？",
    answer: "こうあんのえき",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "室町幕府を開いた人物は？",
    answer: "あしかがたかうじ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "室町幕府の三代将軍で、金閣を建てた人物は？",
    answer: "あしかがよしみつ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "室町時代、京都の東山に銀閣を建てた人物は？",
    answer: "あしかがよしまさ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1467年に始まり、全国の戦国大名が争うきっかけとなった戦乱は？",
    answer: "おうにんのらん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鉄砲を日本に伝えたとされる、現在の鹿児島県にあたる島は？",
    answer: "たねがしま",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "織田信長が今川義元を破った1560年の戦いは？",
    answer: "おけはざまのたたかい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "豊臣秀吉が全国の田畑の面積や収穫量を調べた政策は？",
    answer: "たいこうけんち",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "豊臣秀吉が農民から武器を取り上げた政策は？",
    answer: "かたながり",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1600年、徳川家康が石田三成らの軍を破った戦いは？",
    answer: "せきがはらのたたかい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸幕府を開いた人物は？",
    answer: "とくがわいえやす",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸幕府が大名を統制するために行った、江戸と領地を往復させる制度は？",
    answer: "さんきんこうたい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸時代、外国との交流を厳しく制限した政策を一般に何という？",
    answer: "さこく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },

  // ==================================================
  // 社会・日本史 31〜60
  // ==================================================
  {
    question: "江戸時代に長崎の出島で貿易を行ったヨーロッパの国は？",
    answer: "オランダ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸時代に享保の改革を行った将軍は？",
    answer: "とくがわよしむね",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "松平定信が行った江戸時代の改革は？",
    answer: "かんせいのかいかく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "水野忠邦が行った江戸時代最後の大きな改革は？",
    answer: "てんぽうのかいかく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1853年、浦賀に来航して開国を求めたアメリカの使節は？",
    answer: "ペリー",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸幕府がアメリカと結んだ、下田と函館を開港する条約は？",
    answer: "にちべいわしんじょうやく",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "1867年、徳川慶喜が政権を朝廷に返したことを何という？",
    answer: "たいせいほうかん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "明治政府が1868年に出した、新しい政治方針を示す文書は？",
    answer: "ごかじょうのごせいもん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "明治政府が藩を廃止して府県を置いた改革を何という？",
    answer: "はいはんちけん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "明治政府が身分制度を改め、四民平等を進めた改革を何という？",
    answer: "みぶんせいどのかいかく",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "1873年、土地の所有者に地価に応じて税を納めさせる制度を何という？",
    answer: "ちそかいせい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1872年に公布され、全国民に学校教育を受けさせることを目指した制度は？",
    answer: "がくせい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "明治時代に自由民権運動を進めた代表的人物は？",
    answer: "いたがきたいすけ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1889年に発布された日本の近代憲法は？",
    answer: "だいにっぽんていこくけんぽう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1890年に開設された、日本の国会を何という？",
    answer: "ていこくぎかい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日清戦争後、日本と清の間で結ばれた講和条約は？",
    answer: "しものせきじょうやく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日露戦争後、日本とロシアの間で結ばれた講和条約は？",
    answer: "ポーツマスじょうやく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "第一次世界大戦後、国際平和を目的として設立された国際機関は？",
    answer: "こくさいれんめい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1925年に成立し、25歳以上のすべての男子に選挙権を認めた法律は？",
    answer: "ふつうせんきょほう",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "第二次世界大戦後、日本国憲法が施行された日は？",
    answer: "ごがつみっか",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日本国憲法の三大原則の一つで、政治の最終的な決定権が国民にあるという考え方は？",
    answer: "こくみんしゅけん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日本国憲法の三大原則の一つで、戦争を放棄し武力による威嚇などを認めない考え方は？",
    answer: "へいわしゅぎ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日本国憲法の三大原則の一つで、人間の基本的人権を尊重する考え方は？",
    answer: "きほんてきじんけんのそんちょう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日本が第二次世界大戦で降伏した年は？",
    answer: "せんきゅうひゃくよんじゅうごねん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1956年、日本が加盟した国際機関は？",
    answer: "こくさいれんごう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "日本とアメリカなど48か国との間で1951年に調印された講和条約は？",
    answer: "サンフランシスコへいわじょうやく",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "1964年に東京で開催された国際的なスポーツ大会は？",
    answer: "とうきょうオリンピック",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1972年に日本へ返還された、沖縄県の中心的な島は？",
    answer: "おきなわほんとう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1989年に始まった、日本の元号は？",
    answer: "へいせい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "2019年に始まった、日本の元号は？",
    answer: "れいわ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },

  // ==================================================
  // 社会・世界史 1〜25
  // ==================================================
  {
    question: "古代エジプトで、王の墓として建設された巨大な建造物は？",
    answer: "ピラミッド",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代エジプトで使われた、絵を文字として表したものは？",
    answer: "しょうけいもじ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代メソポタミア文明で使われた、粘土板に刻まれた文字は？",
    answer: "くさびがたもじ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代中国で、殷の時代に使われたとされる文字は？",
    answer: "こうこつもじ",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "古代ギリシャの都市国家を何という？",
    answer: "ポリス",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代ギリシャで民主政治が発達した都市国家は？",
    answer: "アテネ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代ローマで、キリスト教を公認した皇帝は？",
    answer: "コンスタンティヌスてい",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "イスラム教を開いた人物は？",
    answer: "ムハンマド",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "イスラム教の聖典は？",
    answer: "コーラン",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "中世ヨーロッパで、キリスト教の教会を中心に形成された社会制度を何という？",
    answer: "ほうけんせいど",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "1215年、イングランド王の権力を制限するために認められた文書は？",
    answer: "マグナカルタ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "ルネサンスが最初に盛んになった地域は？",
    answer: "イタリア",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "活版印刷術を改良し、ヨーロッパで印刷文化を広めた人物は？",
    answer: "グーテンベルク",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1492年に大西洋を西へ航海し、アメリカ大陸に到達した人物は？",
    answer: "コロンブス",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1517年、宗教改革を始めたドイツの人物は？",
    answer: "ルター",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "イギリスで起こった、議会と王の対立を背景とする17世紀の革命は？",
    answer: "イギリスかくめい",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "1776年、イギリスからの独立を宣言した文書は？",
    answer: "アメリカどくりつせんげん",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1789年に始まり、フランスの政治や社会を大きく変えた革命は？",
    answer: "フランスかくめい",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "フランス革命の理念として掲げられた「自由・平等・友愛」をフランス語で表す言葉は？",
    answer: "じゆうびょうどうゆうあい",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "18世紀後半、イギリスで始まり工場制機械工業を発達させた変化は？",
    answer: "さんぎょうかくめい",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "蒸気機関を改良し、産業革命を支えた人物は？",
    answer: "ジェームズワット",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "19世紀前半、ヨーロッパ各地で自由や民族独立を求めて起きた動きを何という？",
    answer: "ナショナリズム",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "ドイツ統一を進め、「鉄血政策」を掲げたプロイセンの政治家は？",
    answer: "ビスマルク",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1914年に始まり、ヨーロッパを中心に大規模な戦争となったものは？",
    answer: "だいいちじせかいたいせん",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1917年、ロシアで起きた革命によって成立した世界初の社会主義国家は？",
    answer: "ソビエトしゃかいしゅぎきょうわこく",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },

  // ==================================================
  // 社会・地理 1〜25
  // ==================================================
  {
    question: "日本列島を構成する主要な四つの島のうち、最も北に位置する島は？",
    answer: "ほっかいどう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本列島を構成する主要な四つの島のうち、最も大きい島は？",
    answer: "ほんしゅう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本の都道府県のうち、面積が最も大きいのは？",
    answer: "ほっかいどう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本の都道府県のうち、面積が最も小さいのは？",
    answer: "かがわけん",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本の標準時の基準となる東経135度の子午線が通る兵庫県の市は？",
    answer: "あかしし",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も高い山は？",
    answer: "ふじさん",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も長い川は？",
    answer: "しなのがわ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も大きい湖は？",
    answer: "びわこ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本の国土を大きく東西に分ける大きな地溝帯を何という？",
    answer: "フォッサマグナ",
    category: "社会",
    genre: "地理",
    level: "上級"
  },
  {
    question: "冬に日本海側へ雪をもたらす主な原因となる季節風は、どの方角から吹く？",
    answer: "ほくせい",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "夏に太平洋側へ高温多湿の空気を運んでくる季節風は、主にどの方角から吹く？",
    answer: "なんとう",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "梅雨の時期に日本付近に停滞する前線を何という？",
    answer: "ばいうぜんせん",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "北海道東部などで、夏に海から流れ込む冷たい霧を何という？",
    answer: "うみぎり",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "日本の太平洋側を北上する暖流を何という？",
    answer: "くろしお",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本の北海道東方沖を南下する寒流を何という？",
    answer: "おやしお",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "暖流と寒流がぶつかる場所を何という？",
    answer: "しおめ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい大陸は？",
    answer: "ユーラシアたいりく",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい海洋は？",
    answer: "たいへいよう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も高い山は？",
    answer: "エベレスト",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も長い川として一般に知られる川は？",
    answer: "ナイルがわ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "赤道が通っている南アメリカの国は？",
    answer: "エクアドル",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "サハラ砂漠が広がる大陸は？",
    answer: "アフリカたいりく",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "アマゾン川が流れる大陸は？",
    answer: "みなみアメリカたいりく",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい国は？",
    answer: "ロシア",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も人口が多い国として現在知られている国は？",
    answer: "インド",
    category: "社会",
    genre: "地理",
    level: "初級"
  },

  // ==================================================
  // 社会・公民 1〜20
  // ==================================================
  {
    question: "日本国憲法で、国民が生まれながらに持つとされる権利を何という？",
    answer: "きほんてきじんけん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本国憲法で、思想・良心の自由や信教の自由などが保障されている権利をまとめて何という？",
    answer: "じゆうけん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "すべての人が法の下で平等に扱われるという権利を何という？",
    answer: "びょうどうけん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国民が政治に参加する権利を何という？",
    answer: "さんせいけん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の国会は、衆議院と何院からなる？",
    answer: "さんぎいん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国会が国の唯一の何機関であると日本国憲法に定められている？",
    answer: "りっぽうきかん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "内閣のトップで、国会議員の中から国会の議決によって指名される人物は？",
    answer: "ないかくそうりだいじん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の裁判所のうち、最も上位にある裁判所は？",
    answer: "さいこうさいばんしょ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "法律や命令などが憲法に違反していないかを判断する権限を何という？",
    answer: "けんぽうほうれいしんさけん",
    category: "社会",
    genre: "公民",
    level: "上級"
  },
  {
    question: "国の政治を立法・行政・司法の三つに分け、それぞれを別の機関が担当する仕組みを何という？",
    answer: "さんけんぶんりつ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "地方公共団体の住民が、その地域の政治について直接意思を示す制度を何という？",
    answer: "ちょくせつせいきゅう",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "都道府県や市町村など、地域の政治を担当する団体を何という？",
    answer: "ちほうこうきょうだんたい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国民が選挙によって代表者を選び、その代表者が政治を行う制度を何という？",
    answer: "だいひょうせいみんしゅしゅぎ",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "選挙で、一人一票を原則として各票を同じ価値として扱う原則は？",
    answer: "びょうとうせんきょ",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "選挙で、誰に投票したかを他人に知られないようにする原則は？",
    answer: "ひみつせんきょ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "商品やサービスの価格が、需要と供給の関係によって決まる経済の仕組みを何という？",
    answer: "しじょうけいざい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "商品を買いたい人の量を何という？",
    answer: "じゅよう",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "商品を売りたい人が提供する量を何という？",
    answer: "きょうきゅう",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "一国の国内で一年間に新しく生み出された付加価値の合計を表す指標は？",
    answer: "ジーディーピー",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "物価が継続的に上昇し、お金の価値が相対的に下がる現象を何という？",
    answer: "インフレーション",
    category: "社会",
    genre: "公民",
    level: "初級"
  },

  // ==================================================
  // 社会・公民 21〜40
  // ==================================================
  {
    question: "物価が継続的に下落し、お金の価値が相対的に上がる現象を何という？",
    answer: "デフレーション",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "中央銀行が発行し、国の信用によって価値が支えられている紙幣などを何という？",
    answer: "しへい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の中央銀行は？",
    answer: "にっぽんぎんこう",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本銀行が金融政策を行う際の代表的な政策金利を何という？",
    answer: "せいさくきんり",
    category: "社会",
    genre: "公民",
    level: "上級"
  },
  {
    question: "政府が税金を集め、公共サービスなどのために支出する活動を何という？",
    answer: "ざいせい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "所得が多い人ほど高い税率を負担する仕組みを何という？",
    answer: "るいしんかぜい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "消費税のように、税を負担する人と納める人が異なる税を何という？",
    answer: "かんせつぜい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "所得税のように、税を負担する人と納める人が同じ税を何という？",
    answer: "ちょくせつぜい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "国が国債などを発行して借金をすることによって生じる負担を何という？",
    answer: "こうさいざんだか",
    category: "社会",
    genre: "公民",
    level: "上級"
  },
  {
    question: "国際社会で国家間の紛争を解決するために重要な役割を果たす国際機関は？",
    answer: "こくさいれんごう",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国際連合の本部が置かれている都市は？",
    answer: "ニューヨーク",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国際連合の安全保障理事会で、常任理事国が持っている権利は？",
    answer: "きょうぎけん",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "国際社会で、国際的な平和と安全を維持する責任を主に担う国連の機関は？",
    answer: "あんぜんほしょうりじかい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "世界貿易機関の略称は？",
    answer: "ダブリューティーオー",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "世界保健機関の略称は？",
    answer: "ダブリュエイチオー",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "持続可能な開発目標を英語の略称で何という？",
    answer: "エスディージーズ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "基本的人権を守るために、国の権力を憲法によって制限する考え方を何という？",
    answer: "りっけんしゅぎ",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "憲法に基づいて政治を行い、権力の乱用を防ぐという考え方を何という？",
    answer: "ほうのしはい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "多数決を行うとき、多数派が少数派の権利を無視しないことが重要だとされる原則は？",
    answer: "しょうすういけんのそんちょう",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "マスメディアなどを通して社会に伝えられる、人々の考えや意見を何という？",
    answer: "せろん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "aのマイナス1乗は、aが0でないとき何を表す？",
    answer: "えーぶんのいち",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "logₐxで、aを何という？",
    answer: "てい",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "logₐ1はいくつ？",
    answer: "ぜろ",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "sin90°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "cos0°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },

  // ==================================================
  // 科学・数学 21〜40
  // ==================================================
  {
    question: "tan45°の値は？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "sin30°の値は？",
    answer: "にぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "cos60°の値は？",
    answer: "にぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "sin²θ+cos²θ=1という関係を何という？",
    answer: "さんかくかんすうのどういつしき",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "微分とは、関数の何の変化の割合を調べる操作？",
    answer: "へんか",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "x²をxについて微分すると何になる？",
    answer: "にえっくす",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "x³をxについて微分すると何になる？",
    answer: "さんえっくすにじょう",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "定数を微分すると何になる？",
    answer: "ぜろ",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "xをxについて積分すると何になる？",
    answer: "えっくすにじょうぶんのに",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "不定積分の結果につける積分定数を、一般に何という記号で表す？",
    answer: "シー",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "∫1 dx は何になる？",
    answer: "えっくすプラスシー",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "関数の極限を考えるとき、xがある値に限りなく近づくことを何という？",
    answer: "きょくげん",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "微分係数は、グラフ上のある点における何の傾きを表す？",
    answer: "せっせん",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "積分は、図形の面積を求める方法として考えると、何を細かく足し合わせる操作？",
    answer: "せき",
    category: "科学",
    genre: "数学",
    level: "上級"
  },
  {
    question: "二つの集合AとBの両方に含まれる要素からなる集合を何という？",
    answer: "せきしゅうごう",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "集合Aまたは集合Bの少なくとも一方に含まれる要素からなる集合を何という？",
    answer: "わしゅうごう",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "確率の値は0以上何以下？",
    answer: "いち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "サイコロを一回振って6が出る確率は？",
    answer: "ろくぶんのいち",
    category: "科学",
    genre: "数学",
    level: "初級"
  },
  {
    question: "正規分布のグラフは、中央が高く左右対称な何型の曲線になる？",
    answer: "つりがね",
    category: "科学",
    genre: "数学",
    level: "中級"
  },
  {
    question: "平均値からのばらつきの大きさを表す代表的な指標は？",
    answer: "ひょうじゅんへんさ",
    category: "科学",
    genre: "数学",
    level: "中級"
  },

  // ==================================================
  // 社会・日本史 1〜30
  // ==================================================
  {
    question: "日本列島で旧石器時代の人々が使っていた石器として代表的なものは？",
    answer: "だせいせっき",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "縄文時代の人々が食料を煮たり保存したりするために使った土器は？",
    answer: "じょうもんどき",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "米づくりが大陸から伝わり、稲作が広まった時代は？",
    answer: "やよいじだい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "邪馬台国の女王として中国の史書に記されている人物は？",
    answer: "ひみこ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "聖徳太子が定めた、役人の心構えを示す17条からなる決まりは？",
    answer: "じゅうしちじょうのけんぽう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "645年に中大兄皇子と中臣鎌足らが蘇我氏を倒して始めた政治改革を何という？",
    answer: "たいかのかいしん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "奈良時代に都が置かれた場所は？",
    answer: "へいじょうきょう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "東大寺の大仏を建立した天皇は？",
    answer: "しょうむてんのう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "平安京に都を移した天皇は？",
    answer: "かんむてんのう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "平安時代に摂政や関白として政治の実権を握った一族は？",
    answer: "ふじわらし",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "『源氏物語』を書いた人物は？",
    answer: "むらさきしきぶ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "『枕草子』を書いた人物は？",
    answer: "せいしょうなごん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鎌倉幕府を開いた人物は？",
    answer: "みなもとのよりとも",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "鎌倉幕府で将軍を補佐し、実権を握った北条氏の役職は？",
    answer: "しっけん",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "1232年に北条泰時が制定した武士のための法律は？",
    answer: "ごせいばいしきもく",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "元が日本を攻めてきた出来事を何という？",
    answer: "げんこう",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "室町幕府を開いた人物は？",
    answer: "あしかがたかうじ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "金閣を建てた室町幕府の将軍は？",
    answer: "あしかがよしみつ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "銀閣を建てた室町幕府の将軍は？",
    answer: "あしかがよしまさ",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1467年に始まり、全国に戦乱が広がるきっかけとなった争いは？",
    answer: "おうにんのらん",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "戦国時代に全国統一を進めた三人の武将を、織田信長、豊臣秀吉とあと一人誰という？",
    answer: "とくがわいえやす",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "織田信長が今川義元を破った戦いは？",
    answer: "おけはざまのたたかい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "豊臣秀吉が全国の土地を調査した政策を何という？",
    answer: "たいこうけんち",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "豊臣秀吉が農民から武器を取り上げた政策を何という？",
    answer: "かたながり",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1600年に徳川家康が石田三成らを破った戦いは？",
    answer: "せきがはらのたたかい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸幕府を開いた人物は？",
    answer: "とくがわいえやす",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸時代、諸大名を統制するために幕府が定めた法令は？",
    answer: "ぶけしょはっと",
    category: "社会",
    genre: "日本史",
    level: "中級"
  },
  {
    question: "大名に江戸と領地を往復させた制度を何という？",
    answer: "さんきんこうたい",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "江戸幕府が外国との交流を制限した政策を一般に何という？",
    answer: "さこく",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },
  {
    question: "1853年に浦賀へ来航したアメリカの使節は？",
    answer: "ペリー",
    category: "社会",
    genre: "日本史",
    level: "初級"
  },

  // ==================================================
  // 社会・世界史 1〜25
  // ==================================================
  {
    question: "古代エジプトで、王の墓として建設された巨大な建造物は？",
    answer: "ピラミッド",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代メソポタミア文明で、楔形文字を使用した民族として知られるのは？",
    answer: "シュメールじん",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "古代中国で、秦の始皇帝が統一した文字は？",
    answer: "しょうてん",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "紀元前4世紀、ギリシャから東方へ大帝国を築いた人物は？",
    answer: "アレクサンドロスだいおう",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "古代ローマ帝国でキリスト教を公認した皇帝は？",
    answer: "コンスタンティヌスてい",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "イスラム教を始めた人物は？",
    answer: "ムハンマド",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "イスラム教の聖典は？",
    answer: "コーラン",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "ヨーロッパ中世の封建社会で、土地を与える代わりに主君へ忠誠を誓った人を何という？",
    answer: "けらい",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "1215年、イングランド王ジョンが承認した、王権を制限する文書は？",
    answer: "マグナカルタ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "ルネサンスが最初に盛んになった地域は？",
    answer: "イタリア",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "『モナ・リザ』を描いた人物は？",
    answer: "レオナルドダヴィンチ",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "宗教改革を始めた人物として知られるドイツの神学者は？",
    answer: "ルター",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1492年に大西洋を渡り、アメリカ大陸に到達した人物は？",
    answer: "コロンブス",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "産業革命が最初に本格化した国は？",
    answer: "イギリス",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "蒸気機関を改良し、産業革命に大きな影響を与えた人物は？",
    answer: "ジェームズワット",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "1776年にアメリカの13植民地が発表した文書は？",
    answer: "アメリカどくりつせんげん",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "フランス革命が始まった年は？",
    answer: "せんななひゃくはちじゅうきゅうねん",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "フランス革命後に皇帝となり、ヨーロッパ各地へ勢力を広げた人物は？",
    answer: "ナポレオン",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "第一次世界大戦が始まった年は？",
    answer: "せんきゅうひゃくじゅうよねん",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "第一次世界大戦後に設立された国際平和機構は？",
    answer: "こくさいれんめい",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "第二次世界大戦後に設立された国際機関は？",
    answer: "こくさいれんごう",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "1945年にドイツが降伏し、ヨーロッパで第二次世界大戦が終結した後、アジアでも戦争が終結した出来事を何という？",
    answer: "にほんのこうふく",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },
  {
    question: "冷戦期にアメリカと西側諸国が結成した軍事同盟は？",
    answer: "ナトー",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "冷戦期にソ連と東側諸国が結成した軍事同盟は？",
    answer: "ワルシャワじょうやくきこう",
    category: "社会",
    genre: "世界史",
    level: "中級"
  },
  {
    question: "1989年、東西冷戦終結の象徴となった出来事は？",
    answer: "ベルリンのかべほうかい",
    category: "社会",
    genre: "世界史",
    level: "初級"
  },

  // ==================================================
  // 社会・地理 1〜25
  // ==================================================
  {
    question: "日本で最も面積が大きい都道府県は？",
    answer: "ほっかいどう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も人口が多い都道府県は？",
    answer: "とうきょうと",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本列島の東側に広がる大洋は？",
    answer: "たいへいよう",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本海側で冬に雪が多くなる主な原因となる季節風は、どの方向から吹く？",
    answer: "ほくせい",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "日本の国土を南北に大きく分ける三大都市圏のうち、大阪・京都・神戸を中心とする地域を何という？",
    answer: "きんきだいとしけん",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も長い川は？",
    answer: "しなのがわ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も大きな湖は？",
    answer: "びわこ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "日本で最も高い山は？",
    answer: "ふじさん",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい国は？",
    answer: "ロシア",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい大陸は？",
    answer: "アジア",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で最も長い川として一般に知られている川は？",
    answer: "ナイルがわ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "南アメリカ大陸を流れる、流域面積が世界最大級の川は？",
    answer: "アマゾンがわ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "赤道が通っている大陸はアフリカと、もう一つどこ？",
    answer: "みなみアメリカ",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "世界最大の砂漠として知られる、南極大陸に広がる砂漠は？",
    answer: "なんきょくさばく",
    category: "社会",
    genre: "地理",
    level: "上級"
  },
  {
    question: "サハラ砂漠が広がっている大陸は？",
    answer: "アフリカ",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "一年を通して高温で、雨が多い気候帯を何という？",
    answer: "ねったい",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "一年を通して低温で、永久凍土が広がる地域に見られる気候を何という？",
    answer: "かんたい",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "地中海沿岸などに見られ、夏に乾燥し冬に雨が多い気候は？",
    answer: "ちちゅうかいせいきこう",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "標高が高くなるほど一般に気温はどうなる？",
    answer: "さがる",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "雨が少なく、樹木がほとんど育たない乾燥した地域を何という？",
    answer: "さばく",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "石油を多く産出し、ペルシャ湾岸に位置する国として知られるのは？",
    answer: "サウジアラビア",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "世界で人口が最も多い国として知られる国は？",
    answer: "インド",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "ヨーロッパとアジアの境界の一部をなす山脈は？",
    answer: "ウラルさんみゃく",
    category: "社会",
    genre: "地理",
    level: "中級"
  },
  {
    question: "アフリカ北部とヨーロッパ南部の間にある海は？",
    answer: "ちちゅうかい",
    category: "社会",
    genre: "地理",
    level: "初級"
  },
  {
    question: "太平洋と大西洋を結び、北アメリカと南アメリカの間にある運河は？",
    answer: "パナマうんが",
    category: "社会",
    genre: "地理",
    level: "中級"
  },

  // ==================================================
  // 社会・公民 1〜20
  // ==================================================
  {
    question: "日本国憲法の基本原理の一つで、国の政治の最終的な決定権が国民にあるという考え方を何という？",
    answer: "こくみんしゅけん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本国憲法の三大原則のうち、すべての人が生まれながらに持つ権利を保障する考え方は？",
    answer: "きほんてきじんけんのそんちょう",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本国憲法の三大原則のうち、戦争を放棄し平和を目指す考え方は？",
    answer: "へいわしゅぎ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の国会は、衆議院と何院からなる？",
    answer: "さんぎいん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の国会を構成する二つの議院のうち、任期が4年で解散があるのは？",
    answer: "しゅうぎいん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の国会を構成する二つの議院のうち、任期が6年で解散がないのは？",
    answer: "さんぎいん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "法律を制定する国の機関は？",
    answer: "こっかい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "内閣の長であり、国会議員の中から国会が指名する人物は？",
    answer: "ないかくそうりだいじん",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の行政を担当する機関は？",
    answer: "ないかく",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "裁判を行う国家機関を何という？",
    answer: "さいばんしょ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "日本の最高裁判所が持つ、法律などが憲法に違反していないかを判断する権限を何という？",
    answer: "けんぽういはんしんさけん",
    category: "社会",
    genre: "公民",
    level: "上級"
  },
  {
    question: "国の政治を立法・行政・司法の三つに分ける考え方を何という？",
    answer: "さんけんぶんりつ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "国民が代表者を選挙によって選び、その代表者が政治を行う制度を何という？",
    answer: "だいひょうみんしゅせい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "選挙で、一定の年齢に達したすべての国民に選挙権を認める原則を何という？",
    answer: "ふつうせんきょ",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "一人一票を原則とし、投票の価値をできるだけ等しくする考え方は？",
    answer: "びょうどうせんきょ",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "国民が政治に関する情報を得るために、新聞やテレビなどが果たす役割を何という？",
    answer: "マスメディア",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "企業が利益を得るために行う経済活動の自由を保障する権利は？",
    answer: "けいざいかつどうのじゆう",
    category: "社会",
    genre: "公民",
    level: "中級"
  },
  {
    question: "需要と供給によって市場で決まる商品の交換比率を何という？",
    answer: "かかく",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "政府が税金を集め、その収入をもとに公共サービスなどを行う活動を何という？",
    answer: "ざいせい",
    category: "社会",
    genre: "公民",
    level: "初級"
  },
  {
    question: "所得が多い人ほど高い割合で税を負担する仕組みを何という？",
    answer: "るいしんかぜい",
    category: "社会",
    genre: "公民",
    level: "中級"
  },

  // ==================================================
  // 国語・漢字 1〜20
  // ==================================================
  {
    question: "「努力を積み重ねる」の「積み重ねる」と同じ意味に近い言葉は？",
    answer: "ちくせきする",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「慎重」の「慎」の読みは？",
    answer: "しん",
    category: "国語",
    genre: "漢字",
    level: "初級"
  },
  {
    question: "「憂鬱」の「憂」の読みは？",
    answer: "ゆう",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「顕著」の「顕」の読みは？",
    answer: "けん",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「漠然」の「漠」の読みは？",
    answer: "ばく",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「概念」の「概」の読みは？",
    answer: "がい",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「遂行」の「遂」の読みは？",
    answer: "すい",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「脆弱」の「脆」の読みは？",
    answer: "ぜい",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「懐疑」の「懐」の読みは？",
    answer: "かい",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「遵守」の「遵」の読みは？",
    answer: "じゅん",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「著しい」の読みは？",
    answer: "いちじるしい",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「煩わしい」の読みは？",
    answer: "わずらわしい",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「潔い」の読みは？",
    answer: "いさぎよい",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「赴く」の読みは？",
    answer: "おもむく",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「諭す」の読みは？",
    answer: "さとす",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「妨げる」の読みは？",
    answer: "さまたげる",
    category: "国語",
    genre: "漢字",
    level: "初級"
  },
  {
    question: "「促す」の読みは？",
    answer: "うながす",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「培う」の読みは？",
    answer: "つちかう",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「滞る」の読みは？",
    answer: "とどこおる",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「乏しい」の読みは？",
    answer: "とぼしい",
    category: "国語",
    genre: "漢字",
    level: "初級"
  },

  // ==================================================
  // 国語・漢字 21〜40
  // ==================================================
  {
    question: "「凡例」の「凡」の読みは？",
    answer: "はん",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「隔てる」の読みは？",
    answer: "へだてる",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「著す」の読みは？",
    answer: "あらわす",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「携える」の読みは？",
    answer: "たずさえる",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「顧みる」の読みは？",
    answer: "かえりみる",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「免れる」の読みは？",
    answer: "まぬかれる",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「賄う」の読みは？",
    answer: "まかなう",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「促進」の「促」の読みは？",
    answer: "そく",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「錯覚」の「錯」の読みは？",
    answer: "さく",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「傲慢」の「傲」の読みは？",
    answer: "ごう",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「端的」の「端」の読みは？",
    answer: "たん",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「精緻」の「緻」の読みは？",
    answer: "ち",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「踏襲」の「襲」の読みは？",
    answer: "しゅう",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「矛盾」の「矛」の読みは？",
    answer: "む",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「克服」の「克」の読みは？",
    answer: "こく",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「暫定」の「暫」の読みは？",
    answer: "ざん",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「如実」の「如」の読みは？",
    answer: "にょ",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },
  {
    question: "「脈絡」の「脈」の読みは？",
    answer: "みゃく",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「顕微鏡」の「顕」の読みは？",
    answer: "けん",
    category: "国語",
    genre: "漢字",
    level: "中級"
  },
  {
    question: "「拙い」の読みは？",
    answer: "つたない",
    category: "国語",
    genre: "漢字",
    level: "上級"
  },

  // ==================================================
  // 国語・語句 1〜30
  // ==================================================
  {
    question: "「一石二鳥」とは、一つの行動で何を得ること？",
    answer: "ふたつのりえきをえること",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「臥薪嘗胆」とは、目的を達成するために何をすること？",
    answer: "くろうにたえてふくしゅうやもくひょうをはたすこと",
    category: "国語",
    genre: "語句",
    level: "上級"
  },
  {
    question: "「温故知新」とは、昔のことを調べて何を得ること？",
    answer: "あたらしいちしきをえること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「画竜点睛」とは、最後に何を加えて全体を完成させること？",
    answer: "たいせつなさいごのしあげ",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「塞翁が馬」とは、人生の幸不幸は何によって変わるかわからないという意味の故事成語は？",
    answer: "さいおうがうま",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「矛盾」とは、同時には成り立たない何と何が存在する状態？",
    answer: "ふたつのせつめいやしゅちょう",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「杞憂」とは、実際には起こりそうにないことを何すること？",
    answer: "しんぱいすること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「漁夫の利」とは、争っている二者の間で第三者が何を得ること？",
    answer: "りえきをえること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「朝令暮改」とは、命令や方針がどう変わること？",
    answer: "たびたびかわること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「試行錯誤」とは、失敗を繰り返しながら何を探すこと？",
    answer: "せいかい",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「本末転倒」とは、重要なこととそうでないことの何が逆になること？",
    answer: "じゅうようど",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「付和雷同」とは、自分の考えを持たず、他人の意見にどうすること？",
    answer: "むやみにしたがうこと",
    category: "国語",
    genre: "語句",
    level: "上級"
  },
  {
    question: "「異口同音」とは、多くの人が口々に何を言うこと？",
    answer: "おなじこと",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「一長一短」とは、どのような状態を表す四字熟語？",
    answer: "よいところとわるいところがあること",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「絶体絶命」とは、逃げることも助かることも難しいどのような状態？",
    answer: "ぜったいぜつめいのじょうたい",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「温厚」とは、性格が穏やかで何があること？",
    answer: "やさしいこと",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「簡潔」とは、文章などが短く何であること？",
    answer: "わかりやすいこと",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「端的」とは、要点を何に表すこと？",
    answer: "みじかくあらわすこと",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「漠然」とは、内容や形がはっきりしない何となくした状態？",
    answer: "あいまいなじょうたい",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「顕著」とは、他と比べて特に何がはっきりしていること？",
    answer: "めだっていること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「踏襲」とは、前のやり方などをそのまま何すること？",
    answer: "ひきつぐこと",
    category: "国語",
    genre: "語句",
    level: "上級"
  },
  {
    question: "「懐疑」とは、物事を簡単には信じず何を持つこと？",
    answer: "うたがい",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「精緻」とは、非常に細かく何が行き届いていること？",
    answer: "せいかくさ",
    category: "国語",
    genre: "語句",
    level: "上級"
  },
  {
    question: "「脆弱」とは、壊れたり傷ついたりしやすいことを何という？",
    answer: "もろいこと",
    category: "国語",
    genre: "語句",
    level: "上級"
  },
  {
    question: "「克服」とは、困難などに打ち勝って何すること？",
    answer: "のりこえること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「遵守」とは、決まりや法律などを何すること？",
    answer: "まもること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「遂行」とは、任務などを最後まで何すること？",
    answer: "やりとげること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「培う」とは、経験や能力などを時間をかけて何すること？",
    answer: "そだてること",
    category: "国語",
    genre: "語句",
    level: "中級"
  },
  {
    question: "「促す」とは、相手に行動するよう何すること？",
    answer: "うながすこと",
    category: "国語",
    genre: "語句",
    level: "初級"
  },
  {
    question: "「隔てる」とは、二つのものの間に何をつくること？",
    answer: "へだたり",
    category: "国語",
    genre: "語句",
    level: "中級"
  },

  // ==================================================
  // 国語・文学 1〜20
  // ==================================================
  {
    question: "『吾輩は猫である』を書いた作家は？",
    answer: "なつめそうせき",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『坊っちゃん』を書いた作家は？",
    answer: "なつめそうせき",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『羅生門』を書いた作家は？",
    answer: "あくたがわりゅうのすけ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『走れメロス』を書いた作家は？",
    answer: "だざいおさむ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『こころ』を書いた作家は？",
    answer: "なつめそうせき",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『銀河鉄道の夜』を書いた作家は？",
    answer: "みやざわけんじ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『舞姫』を書いた作家は？",
    answer: "もりおうがい",
    category: "国語",
    genre: "文学",
    level: "中級"
  },
  {
    question: "『人間失格』を書いた作家は？",
    answer: "だざいおさむ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『雪国』を書いた作家は？",
    answer: "かわばたやすなり",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『羅生門』の作者が所属した文学派として知られるのは？",
    answer: "しんしちょうは",
    category: "国語",
    genre: "文学",
    level: "上級"
  },
  {
    question: "『枕草子』が書かれた時代は？",
    answer: "へいあんじだい",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『源氏物語』の作者は？",
    answer: "むらさきしきぶ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『徒然草』を書いた人物は？",
    answer: "よしだけんこう",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『方丈記』を書いた人物は？",
    answer: "かものちょうめい",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『奥の細道』を書いた俳人は？",
    answer: "まつおばしょう",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "「春はあけぼの」で始まる作品は？",
    answer: "まくらのそうし",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "「祇園精舎の鐘の声」で始まる軍記物語は？",
    answer: "へいけものがたり",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『竹取物語』の主人公として知られる人物は？",
    answer: "かぐやひめ",
    category: "国語",
    genre: "文学",
    level: "初級"
  },
  {
    question: "『伊勢物語』の主人公として想定されている人物は？",
    answer: "ありわらのなりひら",
    category: "国語",
    genre: "文学",
    level: "上級"
  },
  {
    question: "『更級日記』を書いた人物は？",
    answer: "すがわらのたかすえのむすめ",
    category: "国語",
    genre: "文学",
    level: "上級"
  },

  // ==================================================
  // 国語・古典 1〜20
  // ==================================================
  {
    question: "古文で「いと」は現代語で何を意味する？",
    answer: "とても",
    category: "国語",
    genre: "古典",
    level: "初級"
  },
  {
    question: "古文で「をかし」は、どのような意味で使われることが多い？",
    answer: "おもしろい",
    category: "国語",
    genre: "古典",
    level: "初級"
  },
  {
    question: "古文で「いみじ」は、程度が非常に何であることを表す？",
    answer: "はなはだしい",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「やがて」は現代語と同じく「すぐに」の意味のほか、何という意味もある？",
    answer: "そのまま",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「つれづれなり」は、することがなく何な状態を表す？",
    answer: "たいくつ",
    category: "国語",
    genre: "古典",
    level: "初級"
  },
  {
    question: "古文で「ありがたし」は、現代語の「ありがたい」と異なり、本来どのような意味？",
    answer: "めったにない",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「なまめかし」は、若々しく上品で何がある様子？",
    answer: "みやびやか",
    category: "国語",
    genre: "古典",
    level: "上級"
  },
  {
    question: "古文で「おどろく」は、現代語の「驚く」のほか、何という意味がある？",
    answer: "めをさます",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「ゆかし」は、見たい・聞きたい・知りたいという何を表す？",
    answer: "きょうみ",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「こころにくし」は、奥ゆかしく何がある様子？",
    answer: "おくゆかしい",
    category: "国語",
    genre: "古典",
    level: "上級"
  },
  {
    question: "古文の助動詞「む」が表す意味として、未来のことを何する意味がある？",
    answer: "すいりする",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文の助動詞「けり」が表す代表的な意味は、過去と何？",
    answer: "きょうたん",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文の助動詞「べし」が表す意味の一つで、「当然そうする」という意味は？",
    answer: "とうぜん",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文の係助詞「ぞ・なむ・や・か・こそ」のうち、文末を已然形にするものは？",
    answer: "こそ",
    category: "国語",
    genre: "古典",
    level: "上級"
  },
  {
    question: "古文で「なり」が断定の助動詞として使われるとき、どのような意味？",
    answer: "である",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「けふ」は現代語で何？",
    answer: "きょう",
    category: "国語",
    genre: "古典",
    level: "初級"
  },
  {
    question: "古文で「いとほし」は、気の毒で何という意味？",
    answer: "かわいそう",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「かなし」は、愛しいという意味のほか、どのような意味で使われることがある？",
    answer: "かわいい",
    category: "国語",
    genre: "古典",
    level: "中級"
  },
  {
    question: "古文で「おぼつかなし」は、はっきりせず何な様子？",
    answer: "こころもとない",
    category: "国語",
    genre: "古典",
    level: "上級"
  },
  {
    question: "古文で「めでたし」は、非常に立派で何という意味？",
    answer: "すばらしい",
    category: "国語",
    genre: "古典",
    level: "初級"
  },

  // ==================================================
  // 英語・単語 1〜30
  // ==================================================
  {
    question: "英語で「borrow」は日本語で何という意味？",
    answer: "かりる",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「lend」は日本語で何という意味？",
    answer: "かす",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「achieve」は日本語で何という意味？",
    answer: "たっせいする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「prevent」は日本語で何という意味？",
    answer: "ふせぐ",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「require」は日本語で何という意味？",
    answer: "ひつようとする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「assume」は日本語で何という意味？",
    answer: "かていする",
    category: "英語",
    genre: "単語",
    level: "上級"
  },
  {
    question: "英語で「reveal」は日本語で何という意味？",
    answer: "あきらかにする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「decline」は日本語で何という意味？",
    answer: "へる",
    category: "英語",
    genre: "単語",
    level: "上級"
  },
  {
    question: "英語で「maintain」は日本語で何という意味？",
    answer: "いじする",
    category: "英語",
    genre: "単語",
    level: "上級"
  },
  {
    question: "英語で「consider」は日本語で何という意味？",
    answer: "こうりょする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「suggest」は日本語で何という意味？",
    answer: "ていあんする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「occur」は日本語で何という意味？",
    answer: "おこる",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「contain」は日本語で何という意味？",
    answer: "ふくむ",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「provide」は日本語で何という意味？",
    answer: "ていきょうする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「increase」は日本語で何という意味？",
    answer: "ぞうかする",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「decrease」は日本語で何という意味？",
    answer: "げんしょうする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「compare」は日本語で何という意味？",
    answer: "ひかくする",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「depend」は日本語で何という意味？",
    answer: "いぞんする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「remain」は日本語で何という意味？",
    answer: "のこる",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「avoid」は日本語で何という意味？",
    answer: "さける",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「include」は日本語で何という意味？",
    answer: "ふくむ",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「determine」は日本語で何という意味？",
    answer: "けっていする",
    category: "英語",
    genre: "単語",
    level: "上級"
  },
  {
    question: "英語で「establish」は日本語で何という意味？",
    answer: "せつりつする",
    category: "英語",
    genre: "単語",
    level: "上級"
  },
  {
    question: "英語で「respond」は日本語で何という意味？",
    answer: "こたえる",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「recognize」は日本語で何という意味？",
    answer: "にんしきする",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「improve」は日本語で何という意味？",
    answer: "かいぜんする",
    category: "英語",
    genre: "単語",
    level: "初級"
  },
  {
    question: "英語で「reduce」は日本語で何という意味？",
    answer: "へらす",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「occur」は日本語で何という意味？",
    answer: "しょうじる",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「represent」は日本語で何という意味？",
    answer: "あらわす",
    category: "英語",
    genre: "単語",
    level: "中級"
  },
  {
    question: "英語で「affect」は日本語で何という意味？",
    answer: "えいきょうをあたえる",
    category: "英語",
    genre: "単語",
    level: "中級"
  },

  // ==================================================
  // 英語・文法 1〜30
  // ==================================================
  {
    question: "「私は昨日、東京へ行きました」を英語にすると？",
    answer: "アイウェントトゥトウキョウイエスタデイ",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "現在完了形で「ずっと〜している」という継続を表すときに使う代表的な前置詞は？",
    answer: "フォー",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "現在完了形で「〜以来」という起点を表す前置詞は？",
    answer: "シンス",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「もし明日雨が降ったら、私は家にいます」を表す条件文で、if節に使う時制は？",
    answer: "げんざいけい",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「〜される」という受動態を作るとき、be動詞と動詞の何形を使う？",
    answer: "かこぶんし",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「〜するために」という目的を表す不定詞は、toの後ろに動詞の何形を置く？",
    answer: "げんけい",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「私は英語を話すことが好きです」の「話すこと」を表すとき、動詞の後ろに置く形は？",
    answer: "どうめいし",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「I have been studying English for three years.」で使われている時制は？",
    answer: "げんざいかんりょうしんこうけい",
    category: "英語",
    genre: "文法",
    level: "上級"
  },
  {
    question: "「When I arrived, she had already left.」で、私が到着した時点より前に起きていたことを表す時制は？",
    answer: "かこかんりょうけい",
    category: "英語",
    genre: "文法",
    level: "上級"
  },
  {
    question: "「If I were you, I would study harder.」のように、現在の事実と反対の仮定を表す文法を何という？",
    answer: "かこかんりょう",
    category: "英語",
    genre: "文法",
    level: "上級"
  },
  {
    question: "「This book is more interesting than that one.」で使われている比較表現は？",
    answer: "ひかくきゅう",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「This is the most interesting book.」で使われている比較表現は？",
    answer: "さいじょうきゅう",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「The boy who is running is my brother.」で、boyを説明している関係代名詞は？",
    answer: "フー",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「The book which I bought yesterday is interesting.」で、先行詞bookを受ける関係代名詞は？",
    answer: "ウィッチ",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "英語で名詞の前に置かれ、名詞を修飾する語を何という？",
    answer: "しゅうしょくご",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「There is a book on the desk.」のThere is構文で、isの後ろに来る名詞が単数のとき使うbe動詞は？",
    answer: "イズ",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「There are two books on the desk.」のように複数の名詞を置く場合のbe動詞は？",
    answer: "アー",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「I want you to study.」で、「you to study」が表している文の構造を何という？",
    answer: "しえきこうぶん",
    category: "英語",
    genre: "文法",
    level: "上級"
  },
  {
    question: "「make + 人 + 動詞の原形」の形で、人に〜させるという意味になる動詞は？",
    answer: "メイク",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「have + 人 + 動詞の原形」の形で、人に〜してもらうという意味になる動詞は？",
    answer: "ハブ",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「Let me help you.」のLetは、人に何をさせることを表す？",
    answer: "させる",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "英語の疑問文で、一般動詞を使う現在形の文に使う助動詞は？",
    answer: "ドゥ",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "三人称単数現在形で、一般動詞の後ろにつく代表的な語尾は？",
    answer: "エス",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "過去形の疑問文で一般動詞を使うとき、文頭に置く助動詞は？",
    answer: "ディド",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "助動詞canの後ろに置く動詞は、原形・過去形・過去分詞のどれ？",
    answer: "げんけい",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「must」と「have to」はどちらも何を表す？",
    answer: "ぎむ",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「You don't have to go.」は「行ってはいけない」ではなく、どういう意味？",
    answer: "いくひつようはない",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「You must not enter.」は、入ってもよい・入ってはいけないのどちら？",
    answer: "はいってはいけない",
    category: "英語",
    genre: "文法",
    level: "初級"
  },
  {
    question: "「I have lived here since 2020.」のsinceは何を表す？",
    answer: "きてん",
    category: "英語",
    genre: "文法",
    level: "中級"
  },
  {
    question: "「I have lived here for five years.」のforは何を表す？",
    answer: "きかん",
    category: "英語",
    genre: "文法",
    level: "中級"
  },

  // ==================================================
  // 英語・熟語 1〜30
  // ==================================================
  {
    question: "「look for」は日本語で何という意味？",
    answer: "さがす",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「look after」は日本語で何という意味？",
    answer: "せわをする",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「look forward to」は日本語で何という意味？",
    answer: "たのしみにする",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「take care of」は日本語で何という意味？",
    answer: "せわをする",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「give up」は日本語で何という意味？",
    answer: "あきらめる",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「put off」は日本語で何という意味？",
    answer: "えんきする",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「carry out」は日本語で何という意味？",
    answer: "じっこうする",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「bring about」は日本語で何という意味？",
    answer: "ひきおこす",
    category: "英語",
    genre: "熟語",
    level: "上級"
  },
  {
    question: "「deal with」は日本語で何という意味？",
    answer: "たいおうする",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「depend on」は日本語で何という意味？",
    answer: "いぞんする",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「be interested in」は日本語で何という意味？",
    answer: "きょうみがある",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「be good at」は日本語で何という意味？",
    answer: "とくいである",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「be afraid of」は日本語で何という意味？",
    answer: "こわがる",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「be proud of」は日本語で何という意味？",
    answer: "ほこりにおもう",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「be different from」は日本語で何という意味？",
    answer: "ことなる",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「be famous for」は日本語で何という意味？",
    answer: "でゆうめいである",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「according to」は日本語で何という意味？",
    answer: "によると",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「because of」は日本語で何という意味？",
    answer: "のために",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「instead of」は日本語で何という意味？",
    answer: "のかわりに",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「in spite of」は日本語で何という意味？",
    answer: "にもかかわらず",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「as soon as」は日本語で何という意味？",
    answer: "するとすぐに",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「as well as」は日本語で何という意味？",
    answer: "だけでなく",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「at first」は日本語で何という意味？",
    answer: "さいしょは",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「at last」は日本語で何という意味？",
    answer: "ついに",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「by the way」は日本語で何という意味？",
    answer: "ところで",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「for example」は日本語で何という意味？",
    answer: "たとえば",
    category: "英語",
    genre: "熟語",
    level: "初級"
  },
  {
    question: "「in fact」は日本語で何という意味？",
    answer: "じっさいに",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「in general」は日本語で何という意味？",
    answer: "いっぱんに",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「on the other hand」は日本語で何という意味？",
    answer: "いっぽうで",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },
  {
    question: "「after all」は日本語で何という意味？",
    answer: "けっきょく",
    category: "英語",
    genre: "熟語",
    level: "中級"
  },

  // ==================================================
  // 文化・雑学・芸術 1〜15
  // ==================================================
  {
    question: "『モナ・リザ』を描いたルネサンス期の芸術家は？",
    answer: "レオナルドダヴィンチ",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "『ひまわり』などの作品で知られるオランダの画家は？",
    answer: "ゴッホ",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "『睡蓮』の連作で知られるフランスの画家は？",
    answer: "モネ",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "『叫び』を描いたノルウェーの画家は？",
    answer: "ムンク",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "『ゲルニカ』を描いたスペインの画家は？",
    answer: "ピカソ",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "ミケランジェロが天井画を手がけたことで有名な礼拝堂は？",
    answer: "システィーナれいはいどう",
    category: "文化・雑学",
    genre: "芸術",
    level: "中級"
  },
  {
    question: "日本の伝統芸能で、能とともに発展した喜劇的な演劇は？",
    answer: "きょうげん",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "日本の伝統的な舞台芸術で、男性だけが演じることで知られるものは？",
    answer: "かぶき",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "能で演者が身につける、人物や神などを表現するための道具は？",
    answer: "めん",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "日本の伝統的な人形劇で、三人の人形遣いが一体の人形を操るものは？",
    answer: "にんぎょうじょうるり",
    category: "文化・雑学",
    genre: "芸術",
    level: "中級"
  },
  {
    question: "陶磁器などに絵や模様を描いて焼き付ける技法を何という？",
    answer: "えつけ",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "建物や都市などの設計を行うことを何という？",
    answer: "けんちくせっけい",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "日本の茶道を大成した人物として知られるのは？",
    answer: "せんのりきゅう",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "浮世絵の代表的な作品『神奈川沖浪裏』を描いた人物は？",
    answer: "かつしかほくさい",
    category: "文化・雑学",
    genre: "芸術",
    level: "初級"
  },
  {
    question: "『見返り美人図』で知られる江戸時代の浮世絵師は？",
    answer: "ひしかわもろのぶ",
    category: "文化・雑学",
    genre: "芸術",
    level: "上級"
  },

  // ==================================================
  // 文化・雑学・音楽 1〜15
  // ==================================================
  {
    question: "ピアノの鍵盤で、白鍵と黒鍵を合わせた一組の音の並びを何という？",
    answer: "おんかい",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "音楽で、音の高さを表す記号を何という？",
    answer: "おんぷ",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "五線譜の最初に書かれ、音の高さの基準を示す記号を何という？",
    answer: "おんきごう",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "楽譜で「強く」を表す強弱記号は？",
    answer: "フォルテ",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "楽譜で「弱く」を表す強弱記号は？",
    answer: "ピアノ",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "「だんだん強く」という意味の音楽記号は？",
    answer: "クレッシェンド",
    category: "文化・雑学",
    genre: "音楽",
    level: "中級"
  },
  {
    question: "「だんだん弱く」という意味の音楽記号は？",
    answer: "デクレッシェンド",
    category: "文化・雑学",
    genre: "音楽",
    level: "中級"
  },
  {
    question: "クラシック音楽で、複数の楽章から構成される大規模な器楽曲を何という？",
    answer: "こうきょうきょく",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "モーツァルトの代表作の一つで、夜をテーマにした有名な曲は？",
    answer: "アイネクライネナハトムジーク",
    category: "文化・雑学",
    genre: "音楽",
    level: "中級"
  },
  {
    question: "ベートーヴェンの交響曲第5番の冒頭の有名な動機は、一般に何と呼ばれる？",
    answer: "うんめいのどうき",
    category: "文化・雑学",
    genre: "音楽",
    level: "中級"
  },
  {
    question: "バッハが多くの作品を残した、鍵盤楽器の一種は？",
    answer: "オルガン",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "日本の伝統楽器で、弦を弓でこすって演奏する代表的な楽器は？",
    answer: "しゃみせん",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "日本の伝統楽器で、竹で作られ、吹いて音を出す楽器は？",
    answer: "しゃくはち",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "和太鼓などを叩いて演奏する楽器を、分類上何楽器という？",
    answer: "だがっき",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },
  {
    question: "音楽で、曲の速さを表すことばを何という？",
    answer: "テンポ",
    category: "文化・雑学",
    genre: "音楽",
    level: "初級"
  },

  // ==================================================
  // 文化・雑学・スポーツ 1〜15
  // ==================================================
  {
    question: "サッカーで、1チームが同時にフィールドに出す選手の人数は？",
    answer: "じゅういちにん",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "野球で、投手が投げた球を打つ選手を何という？",
    answer: "だしゃ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "野球で、打者が3回ストライクを取られると何になる？",
    answer: "さんしん",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "バスケットボールで、ボールを持って3歩以上歩く反則を何という？",
    answer: "トラベリング",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "バレーボールで、相手コートにボールを打ち込む最も強力な攻撃を何という？",
    answer: "スパイク",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "テニスで、0点を表す独特な呼び方は？",
    answer: "ラブ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "卓球で、ボールを相手のコートに打ち返すために使う道具は？",
    answer: "ラケット",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "陸上競技で、一定距離を走る競技を何という？",
    answer: "きょうそう",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "マラソンの正式な距離は約何km？",
    answer: "よんじゅうにてんいちきろ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "中級"
  },
  {
    question: "柔道で、相手を投げたり押さえ込んだりして勝敗を競う競技の基本的な道着を何という？",
    answer: "どうぎ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "剣道で、竹刀を使って打ち合う際に頭部を守る防具は？",
    answer: "めん",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "相撲で、力士が相手を土俵の外へ出すか、足の裏以外を土俵につけさせることで何を得る？",
    answer: "しょうり",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "オリンピックの五輪マークは、いくつの輪からできている？",
    answer: "ごつ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "水泳で、両腕を左右同時に動かして進む泳法は？",
    answer: "ひらおよぎ",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },
  {
    question: "水泳で、最も速い泳法として一般に知られているのは？",
    answer: "クロール",
    category: "文化・雑学",
    genre: "スポーツ",
    level: "初級"
  },

  // ==================================================
  // 文化・雑学・生活 1〜15
  // ==================================================
  {
    question: "料理で、食材を油で高温に加熱する調理法を何という？",
    answer: "いためる",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "野菜などを熱湯に短時間つけて加熱する調理法を何という？",
    answer: "ゆでる",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "食品を低温で保存することで、微生物の増殖を抑える方法は？",
    answer: "れいぞう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "食べ物を冷凍して長期間保存する方法は？",
    answer: "れいとう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "洗濯表示で、洗濯機などによる水洗いを表す基本的な記号は？",
    answer: "せんたくきごう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "火災が起きたとき、煙を吸わないようにするため、避難するときはできるだけ姿勢をどうする？",
    answer: "ひくくする",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "地震のとき、家具などが倒れてくる危険を避けるためにまず守るべき体の部分は？",
    answer: "あたま",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "救急車を呼ぶときの日本の電話番号は？",
    answer: "ひゃくじゅうきゅう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "火事や救助を求めるときにかける日本の緊急電話番号は？",
    answer: "ひゃくじゅうきゅう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "日本で警察へ緊急通報するときの電話番号は？",
    answer: "ひゃくとうばん",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "電気を使いすぎることでブレーカーが落ちる原因となる、電気の流れを何という？",
    answer: "でんりゅう",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "家庭で電気を安全に使うため、濡れた手で触らないようにするものは？",
    answer: "でんききぐ",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "日本のごみ分別で、紙やペットボトルなどを再び資源として利用することを何という？",
    answer: "リサイクル",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "不要になった物を捨てるのではなく、別の用途などに使うことを何という？",
    answer: "リユース",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },
  {
    question: "必要なものだけを買い、無駄な消費を減らすことを何という？",
    answer: "しょうひせつやく",
    category: "文化・雑学",
    genre: "生活",
    level: "初級"
  },

  // ==================================================
  // 文化・雑学・その他 1〜25
  // ==================================================
  {
    question: "地球上で最も大きな動物は？",
    answer: "シロナガスクジラ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "現生する動物の中で最大の陸上動物は？",
    answer: "アフリカゾウ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "人間の体で最も大きな器官は？",
    answer: "ひふ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "世界で最も面積が大きい海洋は？",
    answer: "たいへいよう",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "地球上で最も高い山は？",
    answer: "エベレスト",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "世界で最も深い海溝は？",
    answer: "マリアナかいこう",
    category: "文化・雑学",
    genre: "その他",
    level: "中級"
  },
  {
    question: "人間の体で血液を全身に送り出すポンプの役割をする臓器は？",
    answer: "しんぞう",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "成人の人間の骨の数は、およそ何本？",
    answer: "にひゃく",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "人間の体で酸素と二酸化炭素の交換を行う器官は？",
    answer: "はい",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "地球の衛星で、潮の満ち引きにも大きく関係する天体は？",
    answer: "つき",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "太陽系で太陽に最も近い惑星は？",
    answer: "すいせい",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "太陽系で最も大きい惑星は？",
    answer: "もくせい",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "赤い惑星と呼ばれる惑星は？",
    answer: "かせい",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "太陽系で美しい環を持つことで有名な惑星は？",
    answer: "どせい",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "地球から見て、太陽が昇る方角は？",
    answer: "ひがし",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "一年のうち、昼が最も長くなる日を何という？",
    answer: "げし",
    category: "文化・雑学",
    genre: "その他",
    level: "中級"
  },
  {
    question: "一年のうち、昼と夜の長さがほぼ等しくなる日を何という？",
    answer: "しゅんぶんのひ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "日本で一年の最初の日を何という？",
    answer: "がんじつ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "日本で4月の最初に行われることが多い、新年度の始まりを祝う式典は？",
    answer: "にゅうがくしき",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "日本の国鳥は？",
    answer: "きじ",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "日本の国花として広く知られている花は？",
    answer: "さくら",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  },
  {
    question: "日本の国蝶として知られる昆虫は？",
    answer: "オオムラサキ",
    category: "文化・雑学",
    genre: "その他",
    level: "中級"
  },
  {
    question: "日本の国石に指定されている代表的な鉱物は？",
    answer: "ひすい",
    category: "文化・雑学",
    genre: "その他",
    level: "中級"
  },
  {
    question: "世界で最も多く話されている母語として知られる言語は？",
    answer: "ちゅうごくご",
    category: "文化・雑学",
    genre: "その他",
    level: "中級"
  },
  {
    question: "英語のアルファベットは全部で何文字？",
    answer: "にじゅうろく",
    category: "文化・雑学",
    genre: "その他",
    level: "初級"
  }
];