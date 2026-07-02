
// events.js

var workEvents = window.workEvents = [
    {
        id: "W1a",
        title: "ゆかりママ来店",
        rate: 3,
        steps: [
            { speaker: "ゆかりママ", text: "ゆたかくん、元気？" },
            { text: "ゆかりママが来た。" },
            { text: "「いっぱい飲みなさい。」と、生ビールを<br>たくさんくれた。" },
            { text: "さすがわたしのシンジュクのお母さん。" },
   { text: "図鑑登録" },
        { text: "💎 シンジュクの母ゆかりママゲット！" }
        ],
        effects: { money: 50000, energy: 10, stress: 0, weight: 1 }
    },
{
    id: "W1b",
    title: "ゆかりママ来店",
    rate: 2,
    steps: [
        { text: "ゆかりママが来た。" },
        { speaker: "ゆたかママ", text: "「あら、ゆかりママ、いらっしゃい！」" },
        { speaker: "ゆかりママ", text: "「ゆたかくん、元気？」" },
        { speaker: "ゆかりママ", text: "「相変わらず混んでるわね。」" },
        { speaker: "ゆたかママ", text: "「そんなことないですよ。」" },
        { speaker: "ゆかりママ", text: "「生ビールちょうだい。」" },
        { speaker: "ゆかりママ", text: "「あんたもいっぱい飲みなさ～い😊」" },
        { speaker: "ゆたかママ", text: "「いいんですか～。」" },
        { text: "🍺🍺🍺" },
        { text: "生ビールをたくさんくれた。" },
        { speaker: "ゆたかママ", text: "「やだー、太っちゃーう」" },
        { speaker: "ゆたかママ", text: "「ありがとうございます🤣」" },
        { text: "その時。" },
        { speaker: "ゆかりママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「どうしたの🤣」" },
        { image: "Yukari2.jpg", text: "ゆかりママが、携帯の画面をすごい遠くに離している。" },
        { speaker: "ゆかりママ", text: "「見えにくいわねー。もう💢」" },
        { speaker: "ゆたかママ", text: "「お母さん、またやってるｗ」" },
        { speaker: "ゆかりママ", text: "「・・・🤣」" },
        { speaker: "ゆたかママ", text: "「文字大きくしたら？」" },
        { speaker: "ゆかりママ", text: "「してるわよ💢」" },
        { speaker: "ゆかりママ", text: "「失礼ね！」" },
        { speaker: "ゆかりママ", text: "「ほら、お酒はやく飲んで！」" },
        { speaker: "ゆたかママ", text: "「ごめんなさい🤣」" },
        { text: "こわい、こわい。<br>今度虫眼鏡を用意しておこう。" },
        { text: "図鑑登録" },
        { text: "🧐 みにくいゆかりママゲット！" }
    ],
    effects: {
        money: 50000,
        energy: 5,
        stress: 5,
        weight: 1  }
    },
    {
        id: "W2a",
        title: "聖奈来店",
        rate: 10,
        steps: [
            { speaker: "聖奈", text: "「やっほー。ゆたかママ元気？」" },
            { text: "聖奈が来た。" },
            { text: "「栄養つけないと」と、お菓子を差し入れしてくれた。" },
            { text: "ダイエットは明日からしよう。" },
            { text: "おいしかった。" },
   { text: "図鑑登録" },
        { text: "🍰 聖奈ゲット！" }
        ],
        effects: { money: 30000, energy: 10, stress: -5, weight: 1 }
    },
    {
        id: "W2b",
        title: "聖奈来店",
        rate: 2,
        steps: [
            { image: "Sena2.jpg", speaker: "聖奈", text: "「ゆたかママー！」" },
            { speaker: "ゆたかママ", text: "「どうしたの？」" },
            { speaker: "聖奈", text: "「栄養つけないと😊」" },
            { speaker: "聖奈", text: "「痩せっちゃって死んじゃったら困るし」" },
            { text: "聖奈は大量のお菓子を持ってきた。" },
            { text: "🍫🍪🍩🍰🍬" },
            { speaker: "ゆたかママ", text: "「多くない！？🤣」" },
            { speaker: "聖奈", text: "「全部食べてね😊」" },
            { speaker: "ゆたかママ", text: "「無理よ🤣」" },
            { speaker: "聖奈", text: "「ゆたかママなら大丈夫！」" },
            { speaker: "ゆたかママ", text: "「甘い物は別腹だから🤣」" },
            { speaker: "ゆたかママ", text: "「その別腹が問題なのよ🤣」" },
            { speaker: "ゆたかママ", text: "「聖奈、アンタ、さては太らせ隊ね！」" },
            { text: "「結局たくさん食べちゃった🐷」" },
            { text: "「おいしかった。」" },
 { text: "図鑑登録" },
        { text: " 太らせ隊ゲット！" }
        ],
        effects: { money: 30000, energy: 20, stress: -10, weight: 2 }
    },
    {
        id: "W3a",
        title: "スヌタロウ来店",
        rate: 5,
        steps: [
            { speaker: "スヌタロウ", text: "「こんにちはー。」" },
            { text: "19時の開店直後にそーっと、スヌタロウが入ってきた。" },
            { text: "「ゆたかママが痩せちゃうとみんな困るから」と、焼き鳥を差し入れしてくれた。" },
            { text: "鳥は太らないもんね。ノーカウント。" },
            { text: "おいしかった。" },
 { text: "図鑑登録" },
        { text: "🐶 スヌタロウゲット！" }
        ],
        effects: { money: 30000, energy: 10, stress: -5, weight: 1 }
    },
    {
        id: "W3b",
        title: "スヌタロウPK",
        rate: 1,
        steps: [
            { speaker: "スヌタロウ", text: "「ゆたかママー！⚽」" },
            { speaker: "ゆたかママ", text: "「どうしたの🤣」" },
            { speaker: "スヌタロウ", text: "「PKやろう⚽」" },
            { speaker: "ゆたかママ", text: "「なんで？店で！？🤣」" },
            { speaker: "スヌタロウ", text: "「いいからやろう⚽」" },
            { speaker: "スヌタロウ", text: "「アーセナルが22年ぶりに優勝したんだよ！」" },
            { speaker: "ゆたかママ", text: "「なにそれ？おいしいの？」" },
            { speaker: "スヌタロウ", text: "「ロンドンのサッカーチーム！」" },
            { speaker: "スヌタロウ", text: "「じゃあ、ゆたかママGKね」" },
            { speaker: "ゆたかママ", text: "「え、展開はやくない？？😅」" },
            { type: "pkChoice", text: "どこに飛ぶ？<br><br>戻る：◀ 左<br>進む：⬆ 真ん中<br>決定：▶ 右" }
        ]
    },
    {
        id: "W4",
        title: "なお来店",
        rate: 10,
        steps: [
            { text: "なおが来た。" },
            { speaker: "なお", text: "「また来ちゃった。」" },
            { text: "女子トークで盛り上がった。" },
 { text: "図鑑登録" },
        { text: "💄 なおゲット！" }
        ],
        effects: { money: 30000, energy: 10, stress: -5, weight: 0 }
    },
    {
        id: "W5a",
        title: "こころ来店",
        rate: 7,
        steps: [
            { speaker: "こころ", text: "「ゆたかママも飲みなよー。」" },
            { text: "こころが来た。" },
            { text: "「ゆたかママも飲みなよー。」" },
            { text: "仕事の愚痴をたくさん聞いてあげた。" },
 { text: "図鑑登録" },
        { text: "🍾😈 こころゲット！" }
        ],
        effects: {
            money: 40000,
            energy: 0,
            stress: 5,
            weight: 1
        }
    },
    {
        id: "W5b",
        title: "こころの愚痴大会",
        rate: 1,
        steps: [
            { image: "Kokoro4.jpg", text: "こころが来た。" },
            { speaker: "こころ", text: "「ゆたかママー！」" },
            { speaker: "ゆたかママ", text: "「こころちゃん、いらっしゃい。」" },
            { speaker: "こころ", text: "「生ください。」" },
            { speaker: "こころ", text: "「ゆたかママも飲みなよー！」" },
            { text: "🍺🍺" },
            { speaker: "こころ", text: "「ゆたかママ、聞いてよー！」" },
            { speaker: "ゆたかママ", text: "「また始まった🤣」" },
            { speaker: "こころ", text: "「実はさー、、、」" },
            { text: "こころは仕事の愚痴を話し始めた。" },
            { text: "🤣🤣🤣" },
            { text: "30分後" },
            { speaker: "ゆたかママ", text: "「大変ね。」" },
            { speaker: "こころ", text: "「まだあるー！」" },
            { text: "1時間後" },
            { speaker: "ゆたかママ", text: "「まだあるの！？😅」" },
            { speaker: "こころ", text: "「まだ話し足りないｗ」" },
            { speaker: "こころ", text: "「ゆたかママ、仕事終わったらモモタイ行こう！」" },
            { speaker: "ゆたかママ", text: "「なんでよ！？」" },
            { speaker: "ゆたかママ", text: "「夜中食べたら太るのよ。」" },
            { image: "Kokoro.momo.png", text: "🍜 結局 モモタイ到着" },
            { speaker: "こころ", text: "「とりあえず食べよ。」" },
            { text: "🍜🍜🍜" },
            { speaker: "ゆたかママ", text: "「もうお腹いっぱい。。」" },
            { speaker: "こころ", text: "「デザートも。」" },
            { text: "🍨" },
            { speaker: "ゆたかママ", text: "「まだ食べるの！？」" },
            { text: "っていいながらわたしも食べちゃうんだけどね" },
            { speaker: "ゆたかママ", text: "「あんたも太らせ隊ね！」" },
            { text: "大量の生ビールで仕事の売り上げはあがった。" },
            { text: "でもその分しっかり食べた。" },
            { text: "お腹いっぱい🐷" },
 { text: "図鑑登録" },
        { text: "🐷 こころとモモタイゲット！" }
        ],
        effects: {
            money: 40000,
            energy: -10,
            stress: -5,
            weight: 2
        }
    },
    {
        id: "W6a",
        title: "よしみ姉さん来店",
        rate: 1.5,
        steps: [
            { image: "Yoshimi.dot" },
            { speaker: "よしみ姉さん", text: "「あら！」" },
            { speaker: "よしみ姉さん", text: "「こうかしら！」" },
            { text: "よしみ姉さんが来た。" },
            { text: "久しぶりで癒された。" },
 { text: "図鑑登録" },
        { text: "💃 よしみ姉さんゲット！" }
        ],
        effects: {
            money: 30000,
            energy: 10,
            stress: -10,
            weight: 0
        }
    },
    {
        id: "W6b",
        title: "ダンシングよしみ",
        rate: 0.5,
        steps: [
            { text: "よしみ姉さんが来た。" },
            { speaker: "よしみ姉さん", text: "「それそれー！」" },　　　
            { text: "🎤💃" },
            { text: "カラオケを踊り付きで歌ってくれた。" },
            { text: "さすが元ダンサー。" },
{ text: "図鑑登録" },
        { text: "💃 ダンシングよしみゲット！" }
        ],
        effects: {
            money: 30000,
            energy: 15,
            stress: -10,
            weight: 0
        }
    },
    {
    id: "W7",
    title: "青リンゴ来店",
    rate: 3,
    steps: [
        { image: "Ringo1.jpg", text: "プライベートリンゴが来た。" },
        { speaker: "青リンゴ", text: "「おじさん飲みにきちゃった。」" },
        { speaker: "青リンゴ", text: "「今日は客だよ！接待してね！！」" },
        { speaker: "ゆたかママ", text: "「今日はお客さんなのね🤣」" },
        { speaker: "青リンゴ", text: "「そうそう。」" },
        { speaker: "青リンゴ", text: "「今日は何もしませーん。」" },
        { speaker: "ゆたかママ", text: "「いつも何もしてないじゃない🤣」" },
        { speaker: "青リンゴ", text: "「失礼なお店だな～🤔」" },
        { text: "🍺🍺🍺" },
        { text: "青リンゴは楽しそうに飲みはじめた。" },
        { speaker: "青リンゴ", text: "「生ビールおかわり！」" },
        { speaker: "ゆたかママ", text: "「飲みすぎじゃない？🤣」" },
        { speaker: "青リンゴ", text: "「今日はお客さんだからいいの！」" },
        { speaker: "青リンゴ", text: "「それより、何か面白い話して！」" },
        { speaker: "ゆたかママ", text: "「無茶ぶり🤣」" },
        { text: "数時間後。" },
        { speaker: "青リンゴ", text: "「あー楽しかった！」" },
        { speaker: "青リンゴ", text: "「また飲みに来るね😏」" },
        { speaker: "ゆたかママ", text: "「ちゃんとお金払ってよ🤣」" },
        { speaker: "青リンゴ", text: "「もちろん！」" },
        { text: "・・・" },
        { speaker: "ゆたかママ", text: "「あれ？」" },
        { speaker: "ゆたかママ", text: "「あたしがトイレ行ってる隙に帰ってる🤣」" },
        { speaker: "ゆたかママ", text: "「次の土曜はコキ使ってやる😏」" },
        { text: "図鑑登録" },
        { text: "🍏 プライベート食い逃げリンゴゲット！" }
    ],
    effects: {
            money: 30000,
            energy: 10,
            stress: 0,
            weight: 0
        }
    },
    {
        id: "W8",
        title: "大繁盛",
        rate: 3,
        steps: [
            { text: "今日はなぜか大繁盛だった。" },
            { text: "儲かったけど疲れたわ。。" },
            { text: "わたしも人気出てきたわねｗ" },
 { text: "図鑑登録" },
        { text: "🍗 大繁盛店ゲット" }

        ],
        effects: {
            money: 100000,
            energy: -30,
            stress: 30,
            weight: -0.5
        }
    },
    {
        id: "W9",
        title: "普通",
        rate: 16,
        steps: [
            { text: "今日はいたって普通だった。" }
        ],
        effects: {
            money: 30000,
            energy: -10,
            stress: 10,
            weight: 0
        }
    },
    {
        id: "W10",
        title: "いい感じ",
        rate: 10.5,
        steps: [
            { text: "今日はいい感じのお客さんだった。" }
        ],
        effects: {
            money: 30000,
            energy: -5,
            stress: 5,
            weight: 0
        }
    },
    {
        id: "W11",
        title: "変なお客さん",
        rate: 7.5,
        steps: [
            { text: "今日は変なお客さんだった。" },
            { text: "疲れたなぁ。" }
        ],
        effects: {
            money: 15000,
            energy: -30,
            stress: 30,
            weight: 0
        }
    },
    {
        id: "W12",
        title: "社長風なお客さん",
        rate: 2,
        steps: [
            { text: "今日は社長風なお客さんだった。" },
            { text: "ちょっとわがままだった。" },
            { text: "シャンパン入れてくれたからいっか。" }
        ],
        effects: {
            money: 75000,
            energy: -30,
            stress: 30,
            weight: 0
        }
    },
    {
        id: "W13",
        title: "青リンゴ遅刻",
        rate: 1,
        steps: [
            { text: "営業開始。" },
            { speaker: "ゆたかママ", text: "「今日はオープンから忙しいわ。」" },
            { text: "🍺🍺🍺" },
            { text: "お客さんが増えてきた。" },
            { text: "20:00" },
            { speaker: "ゆたかママ", text: "「20時からなのに青リンゴさんまだ来ない。」" },
            { text: "30分後" },
            { speaker: "ゆたかママ", text: "「まだ来ない！！」" },
            { text: "1時間後" },
            { speaker: "ゆたかママ", text: "「遅刻しやがった💢」" },
            { text: "お客さんはいっぱい。" },
            { speaker: "ゆたかママ", text: "「忙しいんだけど。。」" },
            { text: "さらに30分後" },
            { image: "Ringo2.jpg", text: "🍏 青リンゴ が あらわれた！" },
            { speaker: "青リンゴ", text: "「ごめーん。。」" },
            { speaker: "ゆたかママ", text: "「遅い！！」" },
            { speaker: "青リンゴ", text: "「ちょっとアゴリンのお店行ってた。」" },
            { speaker: "ゆたかママ", text: "「ちょっと。そっち？🤣<br>みらいラウンジでタコスやってるのに。」" },
            { speaker: "ゆたかママ", text: "「遅れるからには、タコス買ってきてくれると思ってた。。」" },
            { speaker: "青リンゴ", text: "「え。。😨」" },
            { speaker: "ゆたかママ", text: "「・・・」" },
            { image: "Ringo3.jpg", speaker: "青リンゴ", text: "「Wow」" },
            { text: "売上は上がった。" },
            { text: "でも大変だった。" },
            { speaker: "ゆたかママ", text: "「給料減らしてやったわ🤣」" },
            { text: "図鑑登録" },
            { text: "🍏 遅刻リンゴゲット！" }
        ],
        effects: {
            money: 50000,
            energy: -20,
            stress: 20,
            weight: -2
        }
    },
    {
        id: "W14",
        title: "ラリンゴ降臨",
        rate: 0.5,
        steps: [
            { text: "営業開始。" },
            { speaker: "ゆたかママ", text: "「今日も頑張るわよ！」" },
            { image: "Ringo4.png", speaker: "青リンゴ", text: "「おはようございます。」" },
            { text: "いつも通り青リンゴさんが出勤してきた、と思った。" },
            { text: "しかし。" },
            { speaker: "青リンゴ", text: "「話題のネットフリックスみました？」" },
            { speaker: "ゆたかママ", text: "「え？」" },
            { speaker: "青リンゴ", text: "「いやー面白かったなー🤣」" },
            { speaker: "青リンゴ", text: "「そういえばこの前もね～」" },
            { text: "ぺらぺらぺら" },
            { speaker: "青リンゴ", text: "「あとね！」" },
            { text: "ぺらぺらぺら" },
            { speaker: "青リンゴ", text: "「それでね～」" },
            { text: "ぺらぺらぺら" },
            { text: "ずっとしゃべっている。" },
            { speaker: "ゆたかママ", text: "「どうしたの！？」" },
            { speaker: "青リンゴ", text: "「え？🤣」" },
            { speaker: "ゆたかママ", text: "「今日めっちゃしゃべるじゃない！」" },
            { speaker: "聖奈", text: "「ほんとだー！」" },
            { speaker: "こころ", text: "「青リンゴさん、別人じゃん！？テンション高いし、おもろいし。」" },
            { speaker: "青リンゴ", text: "「そんなことないですよ。」" },
            { speaker: "青リンゴ", text: "「そうです、わたしが普通のおじさんです。」" },
            { speaker: "ゆたかママ", text: "「そこ、変なおじさんです、でしょ！」" },
            { text: "その後も。" },
            { speaker: "青リンゴ", text: "「実はですね～」" },
            { text: "ぺらぺらぺら" },
            { speaker: "青リンゴ", text: "「昔ですね～」" },
            { text: "ぺらぺらぺら" },
            { speaker: "青リンゴ", text: "「あとですね！」" },
            { text: "ぺらぺらぺら" },
            { text: "止まらない。" },
            { speaker: "ゆたかママ", text: "「これがあのラリンゴか！？」" },
            { speaker: "聖奈", text: "「ラリンゴって何？？」" },
            { speaker: "ゆたかママ", text: "「あの伝説の！！✨」" },
            { speaker: "こころ", text: "「レアキャラじゃん？」" },
            { speaker: "こころ", text: "「なんかヤバイのやったんじゃない？大丈夫？」" },
            { text: "なぜか今日はずっと陽気だった。" },
            { text: "図鑑登録" },
            { text: "ラリンゴゲット！" }
        ],
        effects: {
            money: 30000,
            energy: 20,
            stress: 20,
            weight: -1
        }
    },
    {
        id: "W15",
        title: "台湾人の元カレ",
        rate: 0.5,
        steps: [
            { text: "営業中。" },
            { text: "🚪" },
            { text: "カランコロン" },
            { speaker: "ゆたかママ", text: "「いらっしゃ・・・」" },
            { speaker: "ゆたかママ", text: "「・・・🤣」" },
            { text: "台湾人の元カレが来た。" },
            { speaker: "ゆたかママ", text: "「あんたなんで来たの？」" },
            { speaker: "元カレ", text: "「ヒサシブリ！」" },
            { speaker: "ゆたかママ", text: "「久しぶりじゃないのよ。」" },
            { speaker: "元カレ", text: "「ゲンキダッタ？コレモミヤゲ！」" },
            { speaker: "ゆたかママ", text: "「お土産よ！元気じゃなくなったわ！🤣」" },
            { speaker: "元カレ", text: "「ノミニキタダケダヨ。」" },
            { speaker: "ゆたかママ", text: "「なんで店知ってんのよ！」" },
            { speaker: "元カレ", text: "「ネットデシラベタ。」" },
            { speaker: "ゆたかママ", text: "「もういいからはやく飲んで！」" },
            { speaker: "ゆたかママ", text: "「はやく帰って。」" },
            { speaker: "元カレ", text: "「ヒドイネ。」" },
            { text: "しれーっと来るなんて。" },
            { text: "イライラするわ💢" },
            { speaker: "元カレ", text: "「シャンパンイレヨウカ？」" },
            { speaker: "ゆたかママ", text: "「いらないわよ。はやく帰って。」" },
            { text: "なんとなく懐かしかった。" },
            { text: "でもイライラした。" },
            { text: "こいつもスヌーピー好きなのよねｗ" },
{ text: "図鑑登録" },
            { text: "元カレのお土産ゲット！" }

        ],
        effects: {
            money: 40000,
            energy: -30,
            stress: 30,
            weight: 0
        }
    },
    {
        id: "W16",
        title: "シャー事件",
        rate: 2,
        steps: [
            { text: "今日はまあまあ繁盛だった。" },
            { text: "忙しくてシャーしちゃった。シャー。" },
            { text: "コーダシャーミー💩" },
            { image: "Yutaka.unpi.jpg", text: "・・・" },
            { text: "図鑑登録" },
            { text: "🩲 茶色いパンツゲット" }
        ],
        effects: {
            money: 20000,
            energy: -30,
            stress: 15,
            weight: -1.5
        }
    },
    {
        id: "W17",
        title: "ノーゲス",
        rate: 1,
        steps: [
            { text: "営業開始。" },
            { speaker: "ゆたかママ", text: "「今日も忙しいかしら～。」" },
            { text: "・・・" },
            { text: "30分経過。" },
            { text: "・・・" },
            { text: "1時間経過。" },
            { speaker: "ゆたかママ", text: "「誰も来ない。。」" },
            { text: "・・・" },
            { text: "2時間経過。" },
            { speaker: "ゆたかママ", text: "「うそでしょ！？」" },
            { text: "・・・" },
            { text: "📺 Netflix" },
            { text: "1話" },
            { text: "↓" },
            { text: "2話" },
            { text: "↓" },
            { text: "3話" },
            { text: "↓" },
            { text: "↓" },
            { text: "↓" },
            { text: "・・・" },
            { speaker: "ゆたかママ", text: "「見すぎた。」" },
            { speaker: "ゆたかママ", text: "「てか全話みちゃった。。」" },
            { text: "営業終了。" },
   { image: "Kara.jpg", text: "・・・" },
            { speaker: "ゆたかママ", text: "「うそでしょ！？」" },
            { speaker: "ゆたかママ", text: "「新宿からヒト消えた？」" },
            { speaker: "ゆたかママ", text: "「まさかのノーゲス🤣」" },
            { speaker: "ゆたかママ", text: "「こんな日が来るなんて。。」" },
            { speaker: "ゆたかママ", text: "「今日はもういい🤣」" },
            { text: "🍚 帰り道" },
            { text: "🐮 すき家" },
            { speaker: "ゆたかママ", text: "「やけ食いするわ！」" },
            { text: "🍚🍚🍚" },
            { speaker: "ゆたかママ", text: "「明日から頑張ろ～！」" },
            { text: "図鑑登録" },
            { text: "😭 ノーゲスゲット" }
        ],
        effects: {
            money: -5000,
            energy: -30,
            stress: 30,
            weight: 1
        }
    },
    {
        id: "W18",
        title: "イケメンマッチョ団体",
        rate: 1,
        steps: [
            { image: "Yutaka.maccho.jpg", text: "💪 イケメンマッチョ団体来店" },
            { text: "今日はイケメンマッチョの団体が来店した。" },
            { speaker: "ゆたかママ", text: "「なにこの筋肉祭り😍」" },
            { speaker: "なお", text: "「腕太っ！」" },
            { speaker: "ゆたかママ", text: "「胸筋すごい…♡」" },
            { speaker: "なお", text: "「マッチョ祭りだ！」" },
            { speaker: "ゆかりママ", text: "「目の保養になるわ～♡」" },
            { speaker: "ゆたかママ", text: "「今日はもう仕事にならない😍」" },
            { text: "店内は完全に筋肉観賞会となった。" },
            { text: "図鑑登録" },
            { text: "💪 イケメンマッチョゲット" },
            { text: "筋肉は世界を救う。" },
            { text: "ゆたかママは3日くらい元気だった。" }

        ],
        effects: {
            money: 30000,
            energy: 20,
            stress: -20,
            weight: 0
        }
    },
    {
        id: "W19a",
        title: "むぎ来店",
        rate: 3,
        steps: [
            { image: "Mugi.dot.png", text: "むぎちゃんが来た。" },
            { text: "ビールくれた。" },
            { text: "図鑑登録" },
            { text: "🍺 むぎちゃんゲット" }
        ],
        effects: {
            money: 30000,
            energy: 10,
            stress: 0,
            weight: 0
        }
    },
    {
        id: "W19b",
        title: "むりちゃん",
        rate: 1,
        steps: [
            { image: "Mugi.dot.png", text: "むぎちゃんが来た。" },
            { speaker: "むぎちゃん", text: "「ビールください🍺」" },
            { speaker: "ゆたかママ", text: "「もう飲んでるでしょ🤣」" },
            { speaker: "むぎちゃん", text: "「もう一杯🍺」" },
            { text: "🍺🍺🍺🍺🍺🍺" },
            { text: "今日はビールをいっぱい入れてくれた。" },
            { speaker: "ゆたかママ", text: "「ありがとう😊」" },
            { text: "その後、みんなで盛り上がっていたのだが、、、" },
            { speaker: "聖奈", text: "「そういえば、むぎちゃん帰ったの？」" },
            { speaker: "なお", text: "「あれ、帰ったっけ？」" },
            { speaker: "ゆたかママ", text: "「え！？お会計まだよ😨」" },
            { text: "店内を見渡すと、、、" },
            { speaker: "ゆたかママ", text: "「あ、寝てるじゃん🤣」" },
 { image: "Mugimuri.jpg", text: "zzz" },
            { text: "これがあのむりちゃんだ！" },
            { speaker: "青リンゴ", text: "「ママ、むぎちゃんの心配よりお会計の心配してたわねｗ」" },
            { speaker: "ゆたかママ", text: "「そんなわけない🤣」" },
            { text: "みらいラウンジではよく見る光景という噂だが、バーニコニコでは珍しく眠ってしまったむぎちゃん。" },
            { text: "とにかくむぎちゃんが無事でよかった。" },
            { text: "図鑑登録" },
            { text: "😴 むりちゃんゲット" }
        ],
        effects: {
            money: 20000,
            energy: 15,
            stress: -15,
            weight: 1
        }
    },
    {
        id: "W20a",
        title: "アイスの誘惑",
        rate: 1,
        steps: [
            { text: "営業前の買い出しに来た。" },
            { text: "🏪 スーパー到着" },
            { text: "🍺 ゆかりママ が あらわれた！" },
            { speaker: "ゆかりママ", text: "「あら、ゆたかくん！」" },
            { speaker: "ゆたかママ", text: "「お母さん！🤣」" },
            { speaker: "ゆかりママ", text: "「アイス食べる？もちろん、食べるわよね？」" },
            { speaker: "ゆたかママ", text: "「1個だけ。。」" },
            { text: "🍦🍦🍦" },
            { speaker: "ゆかりママ", text: "「大きくおなり！🤣」" },
            { text: "おいしかった。" },
  { text: "図鑑登録" },
            { text: "🍦 ゆかりのアイスゲット" }
        ],
        effects: {
            money: 0,
            energy: 10,
            stress: -10,
            weight: 0.5
        }
    },

    {
        id: "W20b",
        title: "ゆかりの格言",
        rate: 1,
        steps: [
            { text: "営業前の買い出しに来た。" },
            { text: "🏪 スーパー到着" },
            { text: "🍺 ゆかりママ が あらわれた！" },
            { speaker: "ゆかりママ", text: "「あら、ゆたかくん」" },
            { speaker: "ゆたかママ", text: "「お母さん？🤣」" },
　　　　　　{ speaker: "ゆたかママ", text: "「お母さんも買い出しですか？」" },
            { speaker: "ゆかりママ", text: "「そうよ。」" },
            { speaker: "ゆかりママ", text: "「ゆたかくん、店ってね」" },
            { speaker: "ゆかりママ", text: "「潰れる時は一瞬よ」" },
            { speaker: "ゆたかママ", text: "「怖いわ🤣」" },
            { text: "ゆかりの格言がでた！" },
 { text: "図鑑登録" },
            { text: "💎 ゆかりの格言ゲット" }

        ],
        effects: {
            money: 0,
            energy: 0,
            stress: 5,
            weight: 0
        }
    },

    {
        id: "W20c",
        title: "ビールケース事件",
        rate: 1,
        steps: [
            { text: "営業前の買い出しに来た。" },
            { text: "🏪 スーパー到着" },
            { text: "🍺 ゆかりママ が あらわれた！" },
            { speaker: "ゆかりママ", text: "「これ持って！」" },
            { text: "🍺 ビールケース" },
            { speaker: "ゆたかママ", text: "「自分で持ちなさいよw」" },
            { speaker: "ゆかりママ", text: "「重いのよ。」" },
            { speaker: "ゆたかママ", text: "「わたしも重いわ！」" },
            { speaker: "ゆかりママ", text: "「あんた、若いんだから。ジムいってるでしょ。年寄りをいたわりなさい。」" },
            { text: "結局持たされた。疲れた。。" }
        ],
        effects: {
            money: 0,
            energy: -10,
            stress: 10,
            weight: -1.5
        }
    },
    {
        id: "W30",
        title: "フードラッシュ",
        rate: 2,
        steps: [
            { text: "5人組のお客さんが来店した。" },
            { speaker: "客①", text: "「麻婆豆腐！」" },
            { speaker: "客②", text: "「ナポリタン！」" },
            { speaker: "客③", text: "「オムライス！」" },
            { speaker: "客④", text: "「ラーメン！」" },
            { speaker: "客⑤", text: "「チャーハン！」" },
            { speaker: "ゆたかママ", text: "「ご飯は食べてから来いって言ったでしょ！！🤣」" },
            { text: "注文が一気に入った。" },
            { speaker: "ゆたかママ", text: "「てか、うち定食屋？」" },
            { text: "ジュージュー！" },
            { text: "ガンガン！" },
            { text: "店内はもはやバーではなく定食屋。" },
            { text: "汗だくになりながら料理を作るゆたかママ。" },
            { speaker: "青リンゴ", text: "「ママー！」" },
            { speaker: "ゆたかママ", text: "「あんた、喋ってないで皿洗って！！😡」" },
            { speaker: "青リンゴ", text: "「えぇ～💦」" },
            { text: "数分後。" },
            { speaker: "青リンゴ", text: "「ママー！聞いてー！」" },
            { speaker: "ゆたかママ", text: "「皿！！💢」" },
            { speaker: "青リンゴ", text: "「はいっ💦」" },
            { text: "客たちは大笑いしている。" },
            { text: "全ての料理を作り終えた。" },
  { image: "Yutaka.ramen.jpg", text: "ふ～" },
            { speaker: "ゆたかママ", text: "「だからうちはバーなんだよ！！🤣」" },
            { speaker: "青リンゴ", text: "「フードもあるよってツイートしてるくせにｗ」" },
            { speaker: "ゆたかママ", text: "「なんか言った？💢」" },
            { text: "図鑑登録" },
            { text: "🏆 定食屋ニコルゲット！" }
        ],
        effects: {
            money: 40000,
            energy: -20,
            stress: 20,
            weight: -1.5
        }
    },
    {
        id: "W21",
        rate: 0,
        title: "カレーライスの女ナイト",
        triggerWeeks: [6, 58],
        steps: [
            { image: "Yutaka.carry.jpg", text: "カレーライスの女ナイト。" },
            { text: "毎月最終土曜日に行われる、バーニコニコの恒例イベント。" },
            { text: "ずっとソニンの音楽が流れている。" },
            { speaker: "ゆたかママ", text: "「最初はいいけど、ソニン聴きすぎておかしくなるわ。」" },
            { speaker: "ゆたかママ", text: "「次の日のお通しにまわせばいいんだけど、余ったカレーいっぱい食べちゃうのよね～。」" },
            { text: "🍛🍛🍛" },
            { text: "図鑑登録" },
            { text: "💿 ソニンのCDゲット" }
        ],
        effects: {
            money: 30000,
            energy: -10,
            stress: 5,
            weight: 2
        }
    },
    {
        id: "W22",
        rate: 0,
        title: "40歳誕生日",
        triggerWeeks: [52],
        specialEvent: true,
        bonusCondition: {
            id: "W24",
            condition: "weight <= 70",
            title: "40歳バースデーシャンパン",
            bonusEffects: {
                money: 20000
            }
        },
        steps: [
            { text: "ゆたかママ40歳バースデー！" },
            { speaker: "聖奈", text: "「ゆたかママ、おめでとー！ケーキだよ！」" },
            { speaker: "なお", text: "「おめでとー！シャンパン入れちゃおー🍾」" },
            { speaker: "こころ", text: "「おめでとー！シャンパン入れちゃおー🍾」" },
            { speaker: "ゆかりママ", text: "「ゆたかくん、40歳？」" },
            { speaker: "ゆかりママ", text: "「まだまだ若いわね。」" },
            { speaker: "ゆたかママ", text: "「40代突入しちゃいましたよ😱」" },
　　　　　 { speaker: "ゆかりママ", text: "「ここからよ！」" },
            { speaker: "ゆたかママ", text: "「なんか言葉が重いわ😱」" },
            { speaker: "青リンゴ", text: "「ママ、40歳なんてまだヒヨコだよ！」" },
            { speaker: "青リンゴ", text: "「おじさん、60超えてからもう数えてないもんｗ」" },
  　　　　　{ speaker: "こころ", text: "「こわー。。。😱」" },
            { speaker: "青リンゴ", text: "「ママ、おじさんもシャンパン入れちゃおうかな」" },
            { speaker: "ゆたかママ", text: "「ありがとー！」" },
            { speaker: "ゆたかママ", text: "「って、あんたは従業員でしょ！<br>皿洗って！」" },
            { image: "Yutaka.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
            { speaker: "全員", text: "「かんぱーーーい！！🍾」" },
            { image: "Yutaka.hbd.png", speaker: "ゆたかママ", text: "「ありがとう。うれしいー！」" },
            { text: "みんなで盛り上がった。" },
            { text: "仕事だけど楽しかった。" },
            { text: "図鑑登録" },
            { text: "🎂 40歳ケーキゲット" },
            { type: "bonusCheck", bonusId: "W24" },

            { text: "【70kg以下特別イベント】" },
            { speaker: "聖奈", text: "「ちゃんとバースデーにむけて70kg切ってすごいね！」" },
            { speaker: "聖奈", text: "「約束通り、シャンパン入れます！🍾」" },
            { speaker: "ゆたかママ", text: "「わーい！ありがとう！」" },
            { speaker: "全員", text: "「かんぱーーーーい！！🍾」" },
            { text: "図鑑登録" },
            { text: "🍾 40歳バースデーシャンパンゲット" }
        ],
        effects: {
            money: 100000,
            energy: 0,
            stress: 0,
            weight: 3
        }
    },

    {
        id: "W23",
        rate: 0,
        title: "41歳誕生日",
        triggerWeeks: [104],
        specialEvent: true,
        bonusCondition: {
            id: "W25",
            condition: "weight <= 70",
            title: "41歳バースデーシャンパン",
            bonusEffects: {
                money: 20000
            }
        },
        steps: [
            { text: "ゆたかママ41歳バースデー！" },
            { speaker: "聖奈", text: "「おめでとー！ゆたかママ！」" },
            { speaker: "なお", text: "「おめでとー！シャンパン入れちゃおー！🍾」" },
            { speaker: "こころ", text: "「おめでとー！シャンパン入れちゃおー！🍾」" },
            { speaker: "ゆかりママ", text: "「41歳なんてまだまだ子供よ。」" },
            { speaker: "青リンゴ", text: "「おじさんもシャンパン入れちゃおうかな🍾」" },
            { speaker: "ゆたかママ", text: "「あんたは従業員でしょ！って今日はお客側だったわね！」" },
            { speaker: "久美", text: "「ゆたか、ママもきちゃったわ。<br>バリ風のいいお店じゃない！<br>お父さんも連れてくればよかったわ」" },
            { speaker: "久美", text: "「おばさんもシャンパン入れちゃおうかな🍾」" },
            { speaker: "ゆたかママ", text: "「あんたは入れなくていいわ！<br>ってかなんで来たのよｗ」" },
　　　　　 { image: "Yutaka.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
            { speaker: "全員", text: "「かんぱーーーい！！🍻」" },
            { image: "Yutaka.hbd41.png", text: "みんなで盛り上がった。" },
            { text: "仕事だけど楽しかった。" },
            { text: "図鑑登録" },
            { text: "🎂 41歳ケーキゲット" },
            { type: "bonusCheck", bonusId: "W25" },

            { text: "【70kg以下特別イベント】" },
            { speaker: "聖奈", text: "「バースデーでしっかり70kg切ってるなんてすごいね！」" },
            { speaker: "聖奈", text: "「シャンパン入れます！🍾」" },
　　　　　 { image: "Yutaka.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
            { speaker: "全員", text: "「かんぱーーーーい！！🍾」" },
            { text: "図鑑登録" },
            { text: "🍾 41歳バースデーシャンパンゲット" }
        ],
        effects: {
            money: 100000,
            energy: 0,
            stress: 0,
            weight: 3
        }
    },
{
id: "W26",
rate: 0,
title: "バーニコニコ3周年",
triggerWeeks: [14],
specialEvent: true,
bonusCondition: {
id: "W28",
condition: "weight <= 70",
title: "3周年シャンパン",
bonusEffects: {
money: 20000
}
},
steps: [
{ text: "バーニコニコ3周年！" },
{ speaker: "聖奈", text: "「おめでとーー！！」" },
{ speaker: "なお", text: "「おめでとーー！！」" },
{ speaker: "こころ", text: "「おめでとーー！！」" },
{ speaker: "ゆかりママ", text: "「3周年なんて、なかなかやるわね！えらい！」" },
{ speaker: "こころ", text: "「シャンパンくださーい🍾」" },
{ speaker: "ゆたかママ", text: "「いいんですかー？😊」" },
 { image: "Yutaka.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
{ speaker: "ゆたかママ", text: "「いつまでもあると思うな親とニコニコ🤣」" },
{ speaker: "全員", text: "「かんぱーーーい！！🍾」" },
{ speaker: "青リンゴ", text: "「おじさんは、皿洗い頑張るよー！」" },
{ text: "周年イベントも終盤。<br>店内は大盛り上がり。" },
{ speaker: "なお", text: "「みんなー！」" },
{ speaker: "こころ", text: "「今日は特別ゲストがいるよー！」" },
{ speaker: "聖奈", text: "「出番だよーーー！」" },
{ text: "店内が暗くなった。" },
{ text: "✨ スポットライト点灯 ✨" },
{ text: "💃 くさみ が あらわれた！" },
{ speaker: "くさみ", text: "「玉之裏臭実（たまのうら くさみ）よ💋」" },
{ speaker: "くさみ", text: "「それじゃ、いくわよ💋」" },
{ type: "kusamiDance" },
{ speaker: "聖奈", text: "「くさみーーー！！🤣」" },
{ speaker: "こころ", text: "「かわいーーー！！🤣」" },
{ speaker: "青リンゴ", text: "「ブラボーーーー！！👏」" },
{ speaker: "聖奈", text: "「長友！？🤣」" },
{ speaker: "ゆかりママ", text: "「ゆたかくん、どこ行った？」" },{ text: "全員<br>「かんぱーーーい！！🍻」" },
{ text: "仕事だけど楽しかった。" },
{ text: "図鑑登録" },
{ text: "💃 くさみ降臨ゲット" },

    { type: "bonusCheck", bonusId: "W28" },

    { text: "【70kg以下特別イベント】" },
    { speaker: "聖奈", text: "「70kg切ってるじゃん！」" },
    { speaker: "こころ", text: "「頑張ったねー！」" },
    { speaker: "聖奈", text: "「シャンパン入れちゃおうかな🍾」" },
 { image: "Kusami.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
    { speaker: "全員", text: "「かんぱーーーーい！！🍾」" },
    { text: "図鑑登録" },
    { text: "🍾 3周年シャンパンゲット" }
],
effects: {
    money: 100000,
    energy: -30,
    stress: 30,
    weight: 2
}


},
{
    id: "W27",
    rate: 0,
    title: "バーニコニコ4周年",
    triggerWeeks: [66],
    specialEvent: true,
    bonusCondition: {
        id: "W29",
        condition: "weight <= 70",
        title: "4周年シャンパン",
        bonusEffects: {
            money: 20000
        }
    },
    steps: [
        { text: "バーニコニコ4周年！" },
        { speaker: "聖奈", text: "「おめでとーー！！」" },
        { speaker: "なお", text: "「おめでとーー！！」" },
        { speaker: "こころ", text: "「おめでとーー！！」" },
        { speaker: "ゆかりママ", text: "「10周年目指しなさい！」" },
        { speaker: "ゆかりママ", text: "「シャンパン入れるわよー🍾」" },
        { speaker: "ゆたかママ", text: "「ドンペリいいんですかー？」" },
        { speaker: "ゆかりママ", text: "「こらっ！🤣」" },
        { speaker: "ゆたかママ", text: "「いつまでもあると思うな髪の毛とニコニコ😂」" },
        { speaker: "青リンゴ", text: "「もう（毛）ないじゃん、なんちゃって🤣」" },
        { speaker: "ゆたかママ", text: "「なんか言った？皿洗い？」" },
        { speaker: "青リンゴ", text: "「いえ。」" },
 　　　{ image: "Kusami.kanpai.png", speaker: "くさみ", text: "「それでは😄」" },
        { speaker: "全員", text: "「かんぱーーーい！！🍾」" },
        { text: "周年イベント進行中。<br>くさみが踊っている。<br>青リンゴは、ボーっとくさみの踊りを眺めていた。" },
{ text: "🍏 青リンゴ<br>🧽" },
{ speaker: "青リンゴ", text: "「・・・」" },
{ speaker: "ゆたかママ", text: "「ボーっとする暇あるなら皿洗って！」" },
{ text: "青リンゴ<br>Σ(･ω･ﾉ)ﾉ！" },
{ speaker: "青リンゴ", text: "「あ。。はい😅」" },
{ text: "しばらくして。" },
{ text: "ガシャーン！！" },
{ text: "🍽️💥" },
{ text: "店内<br>「・・・」" },
{ speaker: "ゆたかママ", text: "「何してんのよ💢」" },
{ speaker: "青リンゴ", text: "「割れました🤣」" },
{ speaker: "ゆたかママ", text: "「見ればわかるわ💢」" },
{ speaker: "青リンゴ", text: "「す、みません🙇‍♂️」" },
{ speaker: "ゆたかママ", text: "「忙しい時に何してんのよ！」" },
{ speaker: "青リンゴ", text: "「皿洗ってました～」" },
{ speaker: "ゆたかママ", text: "「それは知ってる！そういう問題じゃない！」" },
{ speaker: "聖奈", text: "「また青リンゴさん怒られてる～ｗ」" },
{ speaker: "こころ", text: "「弁償🤣」" },
{ speaker: "ゆかりママ", text: "「給料から引いときなさいｗ」" },
{ speaker: "青リンゴ", text: "「ブラック企業🤣」" },
{ speaker: "くさみ", text: "「そんなことより盛り上がってるかしら🤣」" },
{ speaker: "全員", text: "「いえーい！」" },
{ speaker: "全員", text: "「くさみ！くさみ！くさみ！」" },
{ text: "図鑑登録" },
{ text: "🍽️ 割れた皿ゲット" },

        { type: "bonusCheck", bonusId: "W29" },

        { text: "【70kg以下特別イベント】" },
        { speaker: "聖奈", text: "「ちゃんと70kg切ってるじゃん！」" },
        { speaker: "こころ", text: "「また痩せてるー！どうしちゃったのゆたかママー！」" },
        { speaker: "聖奈", text: "「えらみー！しょうがないからシャンパン入れちゃう🍾」" },
　　　 { image: "Kusami.kanpai.png", speaker: "ゆたかママ", text: "「それでは😄」" },
        { speaker: "全員", text: "「かんぱーーーーい！！🍾」" },
        { text: "図鑑登録" },
        { text: "🍾 4周年シャンパンゲット" }
    ],
    effects: {
        money: 100000,
        energy: -30,
        stress: 35,
        weight: 2
    }
},
{
id: "O1",
title: "爆食いイベント",
rate: 0,
condition: "stress >= 100",
steps: [
{ speaker: "ゆたかママ", text: "「もう無理🤣」" },
{ speaker: "ゆたかママ", text: "「ストレスが限界🫠」" },
{ text: "今日は仕事を飛ぶことにした。" },
{ text: "イライラして禿げて死んじゃうよりいいよね。" },
{ text: "📱" },
{ text: "プルルルル" },
{ speaker: "青リンゴ", text: "「もしもし？」" },
{ speaker: "ゆたかママ", text: "「青リンゴさん？」" },
{ speaker: "青リンゴ", text: "「嫌な予感。。。」" },
{ speaker: "ゆたかママ", text: "「今日代わりにお店お願いね！」" },
{ speaker: "青リンゴ", text: "「えっ🤣」" },
{ speaker: "ゆたかママ", text: "「ストレスで禿げちゃうと困るから！よろしくね！」" },
{ text: "ガチャ" },
{ speaker: "青リンゴ", text: "「もう禿げとるやん！」" },
{ text: "ツーツーツー" },
{ speaker: "青リンゴ", text: "「って電話切れてる。。」" },
{ speaker: "青リンゴ", text: "「まだ返事してない🤣」" },
{ text: "今日は青リンゴさんに任せることにした。" },
{ text: "自由になったゆたかママは、もちろん🍗 ケンタッキー へGO！" },
{ text: "🍗🍗🍗" },
{ speaker: "ゆたかママ", text: "「いっぱい買っちゃえ🤣」" },
{ text: "気付いたら大量に買っていた。" },
{ text: "むしゃむしゃ。" },
{ text: "むしゃむしゃ。" },
{ image: "Yutaka.bakugui.png", text: "むしゃむしゃ。" },
{ text: "その後。" },
{ text: "🍜 ラーメン屋" },
{ speaker: "ゆたかママ", text: "「まだ食べられる🤣」" },
{ text: "🍜" },
{ text: "🍜" },
{ text: "まさかのラーメンはしご。" },
{ text: "帰り道。" },
{ text: "🏪 コンビニ" },
{ text: "🍨" },
{ speaker: "ゆたかママ", text: "「アイスは別腹🤣」" },
{ text: "今日は何も考えないことにした。" },
{ text: "翌朝。" },
{ speaker: "ゆたかママ", text: "「やっちまった🤣」" },
{ text: "でも少し元気になった。" },
{ text: "図鑑登録" },
{ text: "🍗 ケンタの骨いっぱいゲット" }
],
effects: {
energy: 15,
stress: -30,
money: -20000,
weight: 3
}
},
{
    id: "O2",
    title: "日光逃亡イベント",
    rate: 0,
    condition: "energy <= 0",
    steps: [
        { speaker: "ゆたかママ", text: "「疲れた🤣」" },
        { speaker: "ゆたかママ", text: "「もう動けない～。」" },
        { speaker: "ゆたかママ", text: "「もうしらない！休むしかない。」" },
        { text: "今日は仕事を休むことにした。" },
        { text: "仕事の途中で死んじゃうよりいいよね。" },
        { text: "📱" },
        { text: "プルルルル" },
        { speaker: "青リンゴ", text: "「もしもし？」" },
        { speaker: "ゆたかママ", text: "「青リンゴさん？」" },
        { speaker: "青リンゴ", text: "「嫌な予感。。。」" },
        { speaker: "ゆたかママ", text: "「今日お願いね！」" },
        { speaker: "青リンゴ", text: "「また！？」" },
        { speaker: "ゆたかママ", text: "「お願い～。もう疲れて力が出ない。」" },
        { speaker: "青リンゴ", text: "「顔が濡れたアンパンマンか！」" },
        { text: "今日のニコニコは青リンゴさんに任せることにした。" },
        { text: "📱" },
        { speaker: "聖奈", text: "「えっ！？」" },
        { speaker: "なお", text: "「仕事は？🤣」" },
        { speaker: "ゆたかママ", text: "「知らなーい。青リンゴがなんとかするわよ。」" },
        { speaker: "ゆたかママ", text: "「明日、日光集合ね！」" },
        { text: "こうして3人は翌日、日光に集合することとなった。" },
        { speaker: "ゆたかママ", text: "「あー、今日はもう動きたくないからゴロゴロしよ～。」" },
        { speaker: "ゆたかママ", text: "「ん！？」" },
        { speaker: "ゆたかママ", text: "「あれ！？😅」" },
        { speaker: "ゆたかママ", text: "「玉の裏が臭い！？臭実きた？😨」" },
        { speaker: "ゆたかママ", text: "「疲れて、昨日から風呂入ってないからだわ。」" },
        { speaker: "ゆたかママ", text: "「こうなったら、ひっくり返して乾かすしかないわ！」" },
        { text: "バサバサ！" },
        { image: "Yutaka.tanuki.jpg" },
        { speaker: "ゆたかママ", text: "「このまま日光まで飛んでいこう✈」" },
        { image: "Yutaka.nikko.dot.png" },
        { text: "♨️ 温泉到着" },
        { speaker: "ゆたかママ", text: "「生き返る～♨」" },
        { speaker: "ゆたかママ", text: "「玉の裏の臭いもとれる～。」" },
        { speaker: "聖奈", text: "「来てよかったね☺️」" },
        { speaker: "なお", text: "「帰りたくない🤣」" },
        { text: "翌朝。" },
        { text: "☀️" },
        { speaker: "ゆたかママ", text: "「よく寝た🤣」" },
        { text: "ふと隣を見る。" },
        { speaker: "スヌタロウ", text: "「おはよう😊」" },
        { speaker: "ゆたかママ", text: "「誰よ🤣」" },
        { text: "⚽ スヌタロウ が あらわれた！" },
        { speaker: "ゆたかママ", text: "「セナコどこ行ったの？🤣」" },
        { speaker: "スヌタロウ", text: "「知らなーいｗ」" },
        { speaker: "なお", text: "「昨日までいたわよ🤣」" },
        { text: "なぜか聖奈がイトコのスヌタロウになっていた。" },
        { text: "その後。" },
        { text: "🐰 金のうさぎ" },
        { image: "Yutaka.nikko2.dot.png" },
        { speaker: "ゆたかママ", text: "「かわいい♡」" },
        { speaker: "ゆたかママ", text: "「癒される♡」" },
        { speaker: "ゆたかママ", text: "「みんなでお揃いの金ウサギキーホルダー買おう？」" },
        { speaker: "なお", text: "「いーよー」" },
        { speaker: "スヌタロウ", text: "「OK！」" },
        { text: "いっぱい笑って、<br>いっぱい温泉に入った。<br>もちろんいっぱい食べた。<br>たまには息抜きって必要ね。" },
        { text: "明日から頑張るぞー！充電完了した🔋" },
        { text: "図鑑登録" },
        { text: "♨️ 金のウサギキーホルダーゲット" }
    ],
    effects: {
        energy: 50,
        stress: -25,
        money: -30000,
        weight: 2
    }
},
{
id: "O3",
title: "95kg警告イベント",
rate: 0,
condition: "weight >= 95",
steps: [
{ text: "ある朝。" },
{ speaker: "ゆたかママ", text: "「よいしょ🤣」" },
{ text: "今日も元気に出勤。" },
{ text: "🚪" },
{ text: "ガッ" },
{ speaker: "ゆたかママ", text: "「ん？」" },
{ text: "🚪" },
{ text: "ガッ" },
{ speaker: "ゆたかママ", text: "「・・・？」" },
{ speaker: "ゆたかママ", text: "「なんか引っかかった🤣」" },
{ text: "もう一度。" },
{ text: "🚪" },
{ text: "ガッ" },
{ speaker: "ゆたかママ", text: "「・・・」" },
{ speaker: "ゆたかママ", text: "「ドア狭くなった？」" },
{ image: "Yutaka.95kg.dot.png" },
{ speaker: "聖奈", text: "「なってない🤣」" },
{ speaker: "ゆたかママ", text: "「家のドアも狭くなったのよね？」" },
{ speaker: "こころ", text: "「絶対なってない🤣」" },
{ speaker: "なお", text: "「建物は変わってないから！」" },
{ speaker: "青リンゴ", text: "「太っただけでしょ？」" },
{ speaker: "ゆたかママ", text: "「失礼ね🤣」" },
{ speaker: "青リンゴ", text: "「95kgです。」" },
{ speaker: "ゆたかママ", text: "「・・・」" },
{ speaker: "青リンゴ", text: "「95kgです。」" },
{ speaker: "ゆたかママ", text: "「2回言わなくていい🤣」" },
{ speaker: "聖奈", text: "「でもちょっと丸くなったかも🤣」" },
{ speaker: "こころ", text: "「ちょっと？」" },
{ speaker: "なお", text: "「だいぶ？」" },
{ speaker: "ゆたかママ", text: "「帰る🤣」" },
{ text: "その夜。" },
{ text: "🏠" },
{ speaker: "ゆたかママ", text: "「・・・」" },
{ text: "鏡" },
{ text: "🪞" },
{ speaker: "ゆたかママ", text: "「・・・」" },
{ text: "横向き" },
{ speaker: "ゆたかママ", text: "「・・・」" },
{ speaker: "ゆたかママ", text: "「ドアが狭くなったことにしよう🤣」" },
{ text: "しかし。" },
{ text: "その判断が。" },
{ text: "数ヶ月後、" },
{ text: "悲劇を生むことになるとは、" },
{ text: "まだ誰も知らなかった。" },
{ text: "図鑑登録" },
{ text: "🚪 ポニョゆたかゲット" }
],
effects: {
energy: 0,
stress: 0,
money: 0,
weight: 0
}
},
{
    id: "E9",
    title: "青リンゴ継承エンド",
    rate: 0,
    condition: "weight >= 100",
    ending: true,
    steps: [
        { speaker: "ゆたかママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「なんか最近ドア狭くない？」" },
        { speaker: "ゆたかママ", text: "「95kgになった時もそう思ったのよね🤣」" },
        { text: "🚪" },
        { text: "・・・" },
        { speaker: "ゆたかママ", text: "「・・・」" },
        { text: "🚪" },
        { text: "・・・" },
        { speaker: "ゆたかママ", text: "「あれ、、出れない🤣」" },
        { speaker: "ゆたかママ", text: "「気のせいじゃなかった。。。」" },
        { text: "ついに100kgを突破した。<br>そしたら、なんと、家から出られなくなった。。" },
        { image: "Yutaka.100kg.dot" },
        { text: "📱<br>携帯電話<br>電池 0%<br>プツン" },
        { speaker: "ゆたかママ", text: "「充電ないわ。家から出れないって電話したいけどできない。」" },
        { speaker: "ゆたかママ", text: "「充電しなきゃ🤣」" },
        { speaker: "ゆたかママ", text: "「コンセントまで身体が重くていけない。。」" },
        { text: "・・・<br>・・・<br>・・・<br>zzz<br>そのまま寝てしまった。" },
        { text: "夜。<br>Barニコニコ" },
        { speaker: "青リンゴ", text: "「ママ、遅いなぁ。」" },
        { speaker: "聖奈", text: "「ゆたかママにしては、珍しいね。」" },
        { speaker: "こころ", text: "「寝坊じゃない？」" },
        { text: "翌日。" },
        { speaker: "青リンゴ", text: "「電話つながらない。」" },
        { speaker: "スヌタロウ", text: "「大丈夫かな？」" },
        { speaker: "なお", text: "「生きてるかな？Lineも返事こないわね。」" },
        { text: "3日後。" },
        { speaker: "ゆかりママ", text: "「ゆたかくん、倒れてるんじゃない？」" },
        { text: "みんな心配した。" },
        { text: "1週間後。" },
        { speaker: "青リンゴ", text: "「仕方ない。」" },
        { speaker: "青リンゴ", text: "「わたくしめが、店を開け続けます。」" },
        { text: "1ヶ月後。" },
        { speaker: "青リンゴ", text: "「生ビールです🍺」" },
        { speaker: "青リンゴ", text: "「シャンパンありがとうございます🍾」" },
        { text: "2ヶ月後。" },
        { speaker: "青リンゴ", text: "「あ、初めてのお客さんですか？」" },
        { speaker: "青リンゴ", text: "「どーも、わたくし、店長の青リンゴです。」" },
        { speaker: "聖奈", text: "「違うでしょ🤣」" },
        { speaker: "こころ", text: "「ウケる～。乗っ取りだｗ」" },
        { speaker: "青リンゴ", text: "「もはや実質店長です。」" },
        { text: "3か月後。<br>誰も<br>ゆたかママの話をしなくなった。" },
        { text: "一方その頃。<br>🏠" },
        { speaker: "ゆたかママ", text: "「暇だわ🤣」" },
        { text: "🍗<br>🍜<br>🍨" },
        { speaker: "ゆたかママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「このままじゃまずい🤣」" },
        { text: "ダイエット開始。" },
        { text: "3ヶ月後。<br>85kg" },
        { speaker: "ゆたかママ", text: "「やっと痩せた🤣」" },
        { speaker: "ゆたかママ", text: "「家から出れるようになった！」" },
        { speaker: "ゆたかママ", text: "「久しぶりに店行こうかしら。」" },
        { text: "🚶<br>🚶<br>🚶<br>Barニコニコ到着" },
        { text: "🚪<br>カランコロン" },
        { speaker: "青リンゴママ", text: "「いらっしゃいませ。」" },
        { speaker: "ゆたかママ", text: "「ただいま🤣」" },
        { speaker: "青リンゴママ", text: "「・・・」" },
        { speaker: "青リンゴママ", text: "「どちら様ですか？」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "青リンゴママ", text: "「ご新規様？」" },
        { speaker: "ゆたかママ", text: "「わたしよ🤣」" },
        { speaker: "青リンゴママ", text: "「・・・」" },
        { speaker: "青リンゴママ", text: "「あ。」" },
        { speaker: "青リンゴママ", text: "「失踪した人だ。」" },
        { speaker: "聖奈", text: "「ゆたかママーーー！！」" },
        { speaker: "なお", text: "「生きてたーーーw」" },
        { speaker: "こころ", text: "「幽霊じゃない？」" },
        { speaker: "ゆたかママ", text: "「復帰するわよ！」" },
        { speaker: "青リンゴママ", text: "「無理。」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "青リンゴママ", text: "「3か月、来なかったでしょ。」" },
        { speaker: "青リンゴママ", text: "「今わたし店長で、ママはわたしだから。」" },
        { speaker: "ゆたかママ", text: "「わたしの店よ🤣」" },
        { speaker: "青リンゴママ", text: "「アンタ元雇われ店長でしょ？」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { speaker: "青リンゴママ", text: "「働きたいなら。」" },
        { speaker: "青リンゴママ", text: "「バイトからならいいですよ？」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { text: "翌日" },
        { text: "ゆたかママ<br>あらため、<br>📛 新人スタッフ福原くん" },
        { speaker: "青リンゴママ", text: "「あれ、君、名前なんていったっけ？」" },
        { speaker: "新人スタッフ福原くん", text: "「福原です。」" },
        { speaker: "青リンゴママ", text: "「あ、福原くん、グラス洗って。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「買い出し。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「遅い！もたもたしない！手を動かす！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「掃除。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「窓にホコリ残ってるわよ！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「ごめんで済むなら警察いらないのよ！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「次、トイレ掃除！」" },
        { speaker: "新人スタッフ福原くん", text: "「はい🤣」" },
        { speaker: "青リンゴママ", text: "「声が小さい。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい青リンゴママ！」" },
        { speaker: "青リンゴママ", text: "「よろしい。今まで私がやってた仕事です。」" },
        { speaker: "青リンゴママ", text: "「全部やってくださいね！」" },
        { speaker: "新人スタッフ福原くん", text: "「今までの復讐じゃない！？🤣」" },
        { speaker: "青リンゴママ", text: "「気のせいです。」" },
        { text: "こうして。<br>元オーナーゆたかママは、<br>バーニコニコで新人アルバイトとなった。<br>そして初めて、<br>店長となった青リンゴママからいびられ続けるのであった。" },
        { text: "END" },
        { text: "図鑑登録" },
        { text: "🍏 青リンゴママ継承エンドゲット" },
        { text: "📛 新人スタッフ福原くんゲット" }
    ],
    effects: {
        energy: 0,
        stress: 0,
        money: 0,
        weight: 0
    }

},
{
    id: "G1a",
    title: "てちてちver1",
    rate: 70,
    steps: [
        { image: "Yutaka.gymtechi.dot.png" },
        { text: "今日はしっかり歩くぞー。" },
        { text: "てちてち。" }
    ],
    effects: {
        money: -1000,
        energy: -5,
        stress: -5,
        weight: -0.5
    }
},

{
    id: "G1b",
    title: "てちてちver2",
    rate: 20,
    steps: [
        { image: "Yutaka.gymtechi.dot.png", text: "今日はしっかり歩くぞー。" },
        { text: "てちてち。" },
        { text: "てちてち。" },
        { text: "てちてち。" },
        { text: "ジムてちみ" },
        { text: "図鑑登録" },
        { text: "🚶 ジムてちみゲット" }
    ],
    effects: {
        money: -1000,
        energy: -10,
        stress: -5,
        weight: -1.5
    }
},
{
    id: "G1c",
    title: "イケメン見て負傷",
    rate: 9,
    steps: [
        { image: "Yutaka.gymtechi.dot.png", text: "🏋️ ジムへ来た。" },
        { speaker: "ゆたかママ", text: "「今日もてちてち歩くわよ！」" },
        { text: "てちてち" },
        { text: "てちてち" },
        { text: "💪✨ イケメンマッチョがいた。" },
        { speaker: "ゆたかママ", text: "「あらー？😊」" },
        { speaker: "ゆたかママ", text: "「ん？顔もいいじゃない😊」" },
        { text: "💪✨" },
        { speaker: "ゆたかママ", text: "「見ちゃう🤣」" },
        { text: "てちてち" },
        { text: "💪✨" },
        { speaker: "ゆたかママ", text: "「見ちゃう🤣」" },
        { text: "その時。" },
        { text: "グキッ！" },
        { speaker: "ゆたかママ", text: "「いたっ🤣」" },
        { text: "イケメンを見すぎて足をひねった。" },
        { image: "Yutaka.fusho.dot.png", text: "🩹 負傷..." },
        { text: "💪 イケメンマッチョ" },
        { text: "「大丈夫ですか？💪」" },
        { speaker: "ゆたかママ", text: "「大丈夫じゃない🤣」" },
        { text: "💪 イケメンマッチョ" },
        { text: "「気をつけてください💪」" },
        { speaker: "ゆたかママ", text: "「やさしい🤣」" },
        { text: "少し痛かった。" },
        { text: "でも少し嬉しかった。" },
        { text: "図鑑登録" },
        { text: "🦴 イケメン見て不名誉負傷ゲット" }
    ],
    effects: {
        energy: 5,
        stress: -10,
        money: 0,
        weight: -1
    }
},

{
    id: "G1d",
    title: "青リンゴ目撃イベント",
    rate: 1,
    steps: [
        { image: "Yutaka.gymtechi.dot.png", text: "🏋️ ジム" },
        { speaker: "ゆたかママ", text: "「今日もてちてち歩くわよ」" },
        { text: "てちてち<br>てちてち" },
        { text: "ふと窓の外を見た。" },
 { image: "Yutaka.gymringo.dot.png", text: "👀!?" },
        { text: "🍏 青リンゴ がいた。" },
        { speaker: "ゆたかママ", text: "「あれ？青リンゴさん！」" },
        { text: "隣には若い女性がいる。" },
        { speaker: "ゆたかママ", text: "「奥さんかしら？」" },
        { text: "でもちょっと赤リンゴさんとは違う？？" },
        { text: "🍏 青リンゴ<br>💕<br>👩 女性" },
 { image: "Yutaka.gymringo.dot.png", text: "手をつないでいる。" },
        { speaker: "ゆたかママ", text: "「やっぱ違うじゃない！」" },
        { text: "翌日" },
        { text: "🍏 青リンゴ来店" },
        { speaker: "ゆたかママ", text: "「昨日見たわよ🤣」" },
        { speaker: "青リンゴ", text: "「何を？」" },
        { speaker: "ゆたかママ", text: "「若い女」" },
        { speaker: "青リンゴ", text: "「と、取引先だよ！」" },
        { speaker: "ゆたかママ", text: "「手つないでた！」" },
        { speaker: "青リンゴ", text: "「取引先だよ！！」" },
        { speaker: "ゆたかママ", text: "「腕も組んでた！」" },
        { speaker: "青リンゴ", text: "「・・・」" },
        { speaker: "青リンゴ", text: "「ごめんなさい🤣」" },
        { speaker: "ゆたかママ", text: "「認めたー！」" },
        { speaker: "青リンゴ", text: "「おじさんにも色々あるの。」" },
        { speaker: "青リンゴ", text: "「ケンタ買ってあげるから黙ってて。」" },
        { text: "🍗 ケンタゲット" },
        { speaker: "ゆたかママ", text: "「しょうがないわね～」" },
        { text: "その時。" },
        { speaker: "聖奈", text: "「何を黙ってるの？？」" },
        { speaker: "こころ", text: "「なんの話ー？？<br>あやしー！」" },
        { speaker: "青リンゴ", text: "「・・・🤣」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { speaker: "青リンゴ", text: "「ケンタの話🤣」" },
        { speaker: "こころ", text: "「絶対違う🤣」" },
        { speaker: "聖奈", text: "「怪しい🤣」" },
        { speaker: "青リンゴ", text: "「ごめんなさい」" },
        { text: "店内は大爆笑だった。" },
        { text: "図鑑登録" },
        { text: "🍏 青リンゴの秘密ゲット" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -1000,
        weight: -1.5
    }
},

{
    id: "G2a",
    title: "筋トレ0-29回",
    steps: [
        { speaker: "ゆたかママ", text: "「疲れたから今日はこの辺で🤣」" }
    ],
    effects: {
        energy: -5,
        stress: 0,
        money: 0,
        weight: -0.1
    }
},

{
    id: "G2b",
    title: "筋トレ30-49回",
    steps: [
       
        { speaker: "ゆたかママ", text: "「まぁこんなもんでしょ🤣」" }
    ],
    effects: {
        energy: -10,
        stress: 0,
        money: 0,
        weight: -0.5
    }
},

{
    id: "G2c",
    title: "筋トレ50-59回",
    steps: [
  
        { speaker: "ゆたかママ", text: "「今日は結構がんばったわ🤣」" },
        { text: "図鑑登録" },
        { text: "筋トレ成功ゲット" }
    ],
    effects: {
        energy: -20,
        stress: 0,
        money: 0,
        weight: -1.5
    }
},

{
    id: "G2d",
    title: "筋トレ60-69回",
    steps: [
    
        { speaker: "ゆたかママ", text: "「わたし今日イケてる🤣 ムキムキになっちゃうわ」" },
        { text: "図鑑登録" },
        { text: "筋トレ超成功ゲット" }
    ],
    effects: {
        energy: -25,
        stress: 0,
        money: 0,
        weight: -3
    }
},

{
    id: "G2e",
    title: "筋トレ70回以上",
    steps: [
      
        { speaker: "ゆたかママ", text: "「今日のわたし、サイコー🤣」" },
        { speaker: "ゆたかママ", text: "「やせすぎて橋本環奈になっちゃうかも🤣」" },
        { speaker: "ゆたかママ", text: "「モテすぎちゃうわ🤣」" },
        { text: "図鑑登録" },
        { text: "モデルゆたかっち覚醒ゲット" }
    ],
    effects: {
        energy: -30,
        stress: 0,
        money: 0,
        weight: -5
    }
},

{
    id: "G2f",
    title: "イケメンマッチョイベント",
    rate: 5,
    steps: [
        { image: "Yutaka.gymTr.dot.png", text: "🏋️ ジムへ来た。" },
        { speaker: "ゆたかママ", text: "「今日も筋トレ頑張るわよ！」" },
        { text: "ふと前を見ると。" },
        { text: "💪✨<br>イケメンマッチョがいた。" },
        { speaker: "ゆたかママ", text: "「あらー？😊」" },
        { speaker: "ゆたかママ", text: "「ん？顔もいいじゃない😊」" },
        { text: "💪✨" },
        { text: "💪 イケメンマッチョ<br>「あと3セット💪」" },
        { speaker: "ゆたかママ", text: "「負けてられない🤣」" },
        { speaker: "ゆたかママ", text: "「わたしもあと5セットやる💪」" },
        { text: "いつもより筋トレを頑張った。" },
        { text: "帰宅後。" },
        { speaker: "ゆたかママ", text: "「明日絶対筋肉痛🤣」" },
        { text: "でもイケメンマッチョみながらの筋トレタイム、満足だった。" },
        { text: "図鑑登録" },
        { text: "💪 VSイケメンマッチョゲット" }
    ],
    effects: {
        energy: 15,
        stress: -15,
        money: -1000,
        weight: -3
    }
},

{
    id: "G3a",
    title: "今日はサボっちゃおう",
    rate: 60,
    steps: [
        { text: "今日はジムやめちゃおうっと。" },
        { text: "明日からがんばる！" },
        { text: "たまにはいいよねｗ" }　 
    ],
    effects: {
        energy: 25,
        stress: -25,
        money: 0,
        weight: 0.5
    }
},

{
    id: "G3b",
    title: "今日はサボっちゃおうver2",
    rate: 30,
    steps: [
        { image: "Yutaka.iekenta.dot.png", text: "今日はジムやめちゃおうっと。" },
        { text: "明日からがんばる！" },
        { text: "あれ、気付いたらケンタ食べてる！<br>アタシこわいw" },
        { text: "福原ケンタに改名しようかしら🤣🍗" },
 { text: "図鑑登録" },
        { text: "🍗 福原ケンタゲット" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: -5000,
        weight: 1
    }
},

{
    id: "G3c",
    title: "よしみ姉さん発見イベント",
    rate: 10,
    steps: [
        { speaker: "ゆたかママ", text: "「今日はジム休むわ」" },
        { speaker: "ゆたかママ", text: "「明日からがんばろう」" },
        { text: "🏠 自宅" },
        { speaker: "ゆたかママ", text: "「テレビでも見ようかしら」" },
        { text: "📺 テレビをつけた。" },
        { speaker: "ゆたかママ", text: "「！？」" },
        { speaker: "ゆたかママ", text: "「あれ？👀」" },
        { text: "📺<br>よしみ姉さん が 出ている！" },
        { image: "Yutaka.yoshimiTV.dot.png", text: "よしみ姉さんじゃない🤣" },
        { text: "テレビ司会者<br>「本日のゲストはこちらです！」" },
        { text: "👏👏👏" },
        { speaker: "よしみ姉さん", text: "「よろしくお願いしまーす。」" },
        { speaker: "ゆたかママ", text: "「さすが姉さん、全国デビューしてる。」" },
        { text: "番組は大盛り上がりだった。" },
        { text: "翌日<br>よしみ座によってみた。" },
        { speaker: "ゆたかママ", text: "「テレビ出てましたね📺」" },
        { speaker: "よしみ姉さん", text: "「見た？」" },
        { speaker: "ゆたかママ", text: "「見ましたよ！」" },
        { speaker: "よしみ姉さん", text: "「たのしかったわー☺」" },
        { speaker: "よしみ姉さん", text: "「でも、ギャラまだ振り込まれてないわ💰」" },
        { speaker: "ゆたかママ", text: "「そこ！？」" },
        { text: "図鑑登録" },
        { text: "📺 TVスターよしみゲット" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: 0,
        weight: 0
    }
},
{
    id: "F1a",
    title: "スヌタロウとTUGBOATE",
    rate: 8.5,
    steps: [
        { image: "Yutaka.tug1.jpg", text: "スヌタロウと新橋のTUGBOATEにいった。" },
        { text: "CHOPiも行ってきた。スヌタロウがママって呼ばないか冷や冷やしたｗ" },
        { text: "でも楽しかった。" },
        { text: "図鑑登録" },
        { text: "⚓ TUGBOATEゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -5000,
        weight: 0.5
    }
},
{
    id: "F1b",
    title: "ゴテツ遭遇イベント",
    rate: 1,
    steps: [
        { image: "Yutaka.tug2.jpg", text: "⚓ スヌタロウと新橋のTUGBOATEへ行った。" },
        { text: "スヌタロウは、はりきってTUGBOATEのTシャツで現れた🤣" },
        { speaker: "スヌタロウ", text: "「今日は面白い人いるかもよ～」" },
        { speaker: "ゆたかママ", text: "「誰よ？ｗ」" },
        { speaker: "キャプテン", text: "「いらっしゃい。」" },
        { text: "店内を見渡すと。" },
        { text: "👀" },
        { text: "そこには。" },
        { text: "✨ ゴテツ ✨" },
        { speaker: "スヌタロウ", text: "「ゴテツだーーーー😊」" },
        { speaker: "ゆたかママ", text: "「しー！」" },
        { speaker: "ゴテツ", text: "「なによ！？」" },
        { speaker: "ゴテツ", text: "「そんな珍しい動物みたいに見ないで！」" },
        { speaker: "スヌタロウ", text: "「本物だー！」" },
        { speaker: "ゴテツ", text: "「偽物いるの🤣」" },
        { text: "🤣🤣🤣" },
        { text: "ゴテツの話は相変わらず面白かった。" },
        { text: "気付けば。" },
        { text: "🍺" },
        { text: "🍺" },
        { text: "🍺" },
        { text: "いっぱい飲んでいた。" },
        { speaker: "ゴテツ", text: "「アンタたち、明日仕事でしょ？ｗ」" },
        { speaker: "スヌタロウ", text: "「やだーー、働きたくないーーー。」" },
        { speaker: "ゆたかママ", text: "「ほら！スヌタロウ帰るよ！」" },
        { text: "今日は楽しかった。" },
        { text: "図鑑登録" },
        { text: "⚓ コテツゲット" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: -10000,
        weight: 1
    }
},

{
    id: "F2",
    title: "聖奈とご飯",
    rate: 9,
    steps: [
        { image: "Yutaka.sena.jpg", text: "今日はセナコとおいしいご飯を食べに行った。" },

        { text: "いっぱい食べた。" },

        { text: "ご飯食べた後なのに、少し歩いたせいか、バーガーキングに吸い込まれちゃった笑" },

        { text: "なんでだろう～？" },

        { image: "Yutaka.burger.jpg", text: "🍔🍔🍔" },

        { text: "おいしかった😋" },

        { text: "図鑑登録" },
        { text: "🍔 5重のハンバーガーゲット" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: -10000,
        weight: 2
    }
},

{
    id: "F3",
    title: "脱毛サロンへ",
    rate: 7.5,
    steps: [
        { text: "今日はなおがオーナーの脱毛サロン、アシェランで脱毛した。" },

        { text: "武器メンテ✨" },

        { text: "つるつる～。" },

        { text: "恒例のしおりちゃんと胸対決した🔥" },

        { text: "結果は引き分けだった。" },

        { text: "図鑑登録" },
        { text: "✨ アシェランテゲット" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -5000,
        weight: 0,
        beauty: 1
    }
},
{
    id: "F4a",
    title: "みらいラウンジへ",
    rate: 8,
    steps: [
        { image: "Yutaka.mirai2.jpg", text: "今日はなおがオーナーのみらいラウンジへ行った。" },

        { text: "姫のパスタ美味しかった。" },

        { text: "結局2種類とも食べちゃった。" },

        { text: "図鑑登録" },
        { text: "🍝 みらいラウンジゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -7000,
        weight: 1
    }
},
{
id: "F4b",
title: "なおのパスタ大盛り事件",
rate: 2.5,
steps: [
{ text: "🌃 新宿二丁目" },
{ text: "みらいラウンジへ行った。" },
{ text: "🚪" },
{ text: "カランコロン" },

    { speaker: "なお", text: "「いらっしゃーい😊」" },

    { speaker: "ゆたかママ", text: "「あれ？」" },
    { speaker: "ゆたかママ", text: "「なおちゃん、いるじゃん🤣」" },

    { speaker: "なお", text: "「今日はお店いるのー😊」" },

    { speaker: "ゆたかママ", text: "「珍しく、働いてる！」" },

    { speaker: "なお", text: "「いるだけｗ」" },
    { speaker: "なお", text: "「姫がつくるから🍝」" },

    { text: "席についた。" },

    { speaker: "なお", text: "「とりあえずビールでいい？🍺」" },

    { speaker: "ゆたかママ", text: "「いいよー🤣」" },

    { text: "🍺" },

    { speaker: "ゆたかママ", text: "「なおちゃんもどーぞ。」" },

    { speaker: "なお", text: "「じゃあ、ウーロン茶😊」" },

    { speaker: "ゆたかママ", text: "「なんでよ🤣」" },

    { speaker: "なお", text: "「飲めないもん😊」" },

    { speaker: "ゆたかママ", text: "「じゃあわたしもウーロン茶にする🤣」" },

    { speaker: "なお", text: "「ダメ😊」" },

    { speaker: "ゆたかママ", text: "「なんでよ🤣」" },

    { speaker: "なお", text: "「ビール飲みな😊」" },

    { speaker: "ゆたかママ", text: "「え🤣」" },

    { text: "🍺🍺🍺" },

    { speaker: "なお", text: "「何食べる？」" },

    { speaker: "ゆたかママ", text: "「姫パスター😋」" },

    { speaker: "なお", text: "「了解😊」" },

    { text: "数分後" },

    { image: "Yutaka.mirai.jpg", text: "🍝" },

    { speaker: "ゆたかママ", text: "「いただきまーす😊」" },

    { text: "🍝🍝" },

    { speaker: "ゆたかママ", text: "「ん？」" },

    { speaker: "ゆたかママ", text: "「多くない？🤣」" },

    { speaker: "なお", text: "「大盛りにしといた😊」" },

    { speaker: "ゆたかママ", text: "「頼んでない🤣」" },

    { speaker: "なお", text: "「サービス😊」" },

    { speaker: "ゆたかママ", text: "「いらないサービス。嘘、ありがたい。でも太っちゃうｗ」" },

    { text: "もぐもぐ。" },

    { text: "🍝" },

    { speaker: "ゆたかママ", text: "「おいしかった😊」" },

    { speaker: "なお", text: "「でしょ？」" },

    { speaker: "なお", text: "「じゃあ次ね😊」" },

    { text: "🍝" },
    { text: "🍝🍝🍝" },

    { speaker: "ゆたかママ", text: "「なにこれ🤣」" },

    { speaker: "なお", text: "「もう1種類😊」" },

    { speaker: "ゆたかママ", text: "「頼んでない🤣」" },

    { speaker: "なお", text: "「せっかく来たんだから😊」" },

    { speaker: "なお", text: "「2種類とも食べなよ😊」" },

    { speaker: "ゆたかママ", text: "「いやいや🤣」" },

    { speaker: "なお", text: "「大丈夫😊」" },

    { speaker: "ゆたかママ", text: "「何が大丈夫なの🤣」" },

    { text: "🍝🍝🍝" },

    { text: "結局。" },
    { text: "完食した。" },

    { speaker: "ゆたかママ", text: "「苦しい🤣」" },

    { speaker: "なお", text: "「デザートいる？😊」" },

    { speaker: "ゆたかママ", text: "「いらない🤣」" },

    { speaker: "なお", text: "「そう？😊」" },

    { speaker: "なお", text: "「じゃあ今度来たら食べてね😊」" },

    { speaker: "ゆたかママ", text: "「デザートってまたパスタでしょ？・・・🤣」" },

    { speaker: "ゆたかママ", text: "「なおちゃん。」" },

    { speaker: "なお", text: "「なに？」" },

    { speaker: "ゆたかママ", text: "「自分はウーロン茶なのに。」" },

    { speaker: "ゆたかママ", text: "「わたしにはビール飲ませて。」" },

    { speaker: "ゆたかママ", text: "「パスタ大盛りにして。」" },

    { speaker: "ゆたかママ", text: "「しかも2種類食わせて。」" },

    { speaker: "ゆたかママ", text: "「あんたも太らせ隊だね🤣」" },

    { speaker: "なお", text: "「バレた？😊」" },

    { speaker: "なお", text: "「いっぱい食べるゆたかママ可愛いから😊」" },

    { speaker: "ゆたかママ", text: "「余計なお世話よ🤣」" },

    { speaker: "ゆたかママ", text: "「バーバイ猫～！」" },

    { text: "図鑑登録" },
    { text: "💄 なおの姫パスタ大盛りx2ゲット" }
],
effects: {
    energy: 20,
    stress: -20,
    money: -10000,
    weight: 2
}


},

{
    id: "F5",
    title: "ラキュンへ",
    rate: 11,
    steps: [
        { image: "Racune.jpg", text: "🌃 新宿二丁目" },
        { text: "Racuneにきた。" },
        { text: "こころ が あらわれた！" },
        { image: "Kokoro1.jpg", text: "不敵な笑みを浮かべている。" },

        {
            type: "racuneChoice",
            text:
                "どうする？<br><br>" +
                "🔵 戻る → たたかう<br>" +
                "🔴 進む → にげる<br>" +
                "🟢 決定 → のむ"
        }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "F6a",
    title: "パーピュアへ",
    rate: 7,
    steps: [
        { text: "ゆかりママのパーピュアへ行った。" },
        { speaker: "ゆかりママ", text: "「あら、いらっしゃい。」" },
        { text: "ここにくると実家みたいで癒される。" },
        { speaker: "ゆかりママ", text: "「いっぱいお食べ🤣」" },
        { text: "たくさん食べちゃった。" },
        { text: "図鑑登録" },
        { text: "🍺 パーピュアゲット" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: -10000,
        weight: 1
    }
},
{
    id: "F6b",
    title: "マグロ祭り",
    rate: 2,
    steps: [
        { text: "🌃 パーピュアへ行った。" },
        { image: "Yutaka.pur1.jpg", text: "今日は何がでてくるかしら😋" },

        { speaker: "ゆかりママ", text: "「あら、いらっしゃい。」" },

        { text: "1品目が運ばれてきた。" },
        { speaker: "ゆたかママ", text: "「おっ、おいしい😋」" },

        { text: "2品目が運ばれてきた。" },
        { speaker: "ゆたかママ", text: "「これもいいわね😋」" },

        { speaker: "ゆかりママ", text: "「みほこ農園さんからよ。」" },

        { text: "3品目が運ばれてきた。" },

        { text: "🐟" },
        { text: "マグロだ！" },

        { speaker: "ゆたかママ", text: "「マグロだーーーー😋」" },
        { speaker: "ゆたかママ", text: "「やったーーーー🤣」" },

        { speaker: "ゆかりママ", text: "「そんなに喜ぶ？ｗ」" },

        { speaker: "ゆたかママ", text: "「喜ぶー！」" },

        { text: "🐟🐟🐟" },

        { speaker: "ゆたかママ", text: "「うまっ😋」" },
        { speaker: "ゆたかママ", text: "「うまっ😋」" },
        { speaker: "ゆたかママ", text: "「うまっ😋」" },

        { speaker: "ゆかりママ", text: "「語彙力なくなってるわよｗ」" },

        { image: "Yutaka.pur2.jpg", text: "今日は良い日だった。" },

        { text: "図鑑登録" },
        { text: "🐟 マグロ祭りゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -5000,
        weight: 1
    }
},
{
    id: "F7",
    title: "よしみ座へ",
    rate: 7,
    steps: [
        { image: "Yutaka.yoshimiza.jpg", text: "よしみ姉さんのよしみ座へ行った。" },

        { text: "お店がチカチカ、キラキラ光ってた。" },

        { speaker: "よしみ姉さん", text: "「それそれ！」" },

        { text: "💃✨" },

        { text: "よしみ姉さんのダンスをみた。" },

        { text: "図鑑登録" },
        { text: "💃 よしみ座ゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -10000,
        weight: 0.5
    }
},
{
    id: "F8",
    title: "ネイルサロンへ",
    rate: 5,
    steps: [
        { text: "今日はネイルサロンでネイルケアした。" },

        { speaker: "ゆたかママ", text: "「モテる女は違うのよ🤣」" },

        { text: "✨✨✨" },

        { text: "つるつる！" },

        { text: "図鑑登録" },
        { text: "💅 つるぴかネイルゲット" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -5000,
        weight: 0,
        beauty: 1
    }
},
{
    id: "F9",
    title: "DJイベントへ",
    rate: 4,
    steps: [
        { text: "今日はDJイベントTTRICKへいった。" },

        { image: "Mugi.dot.png", text: "むぎちゃんがDJしてた。" },

        { image: "DJ KJ.dot.png", text: "DJ KJもまわしてた。" },

        { text: "🎵🎵🎵" },

        { text: "踊ってクライナーで乾杯した。" },

        { speaker: "ゆたかママ", text: "「イエーーーイ🤣」" },

        { text: "図鑑登録" },
        { text: "🎧 TTRICKゲット" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -10000,
        weight: 0
    }
},
{
    id: "F10a",
    title: "実家へ帰る",
    rate: 6,
    steps: [
        { image: "Yutaka.nishioomiya.jpg", text: "今日は埼玉の実家🏠へ帰った。" },

        { speaker: "久美", text: "「ゆたかー！」" },

        { text: "久美がずっとしゃべってた。" },

        { text: "ぺらぺらぺら" },
        { text: "ぺらぺらぺら" },
        { text: "ぺらぺらぺら" },

        { speaker: "ゆたかママ", text: "「まだしゃべるの！？🤣」" },

        { speaker: "久美", text: "「それでねー！」" },

        { text: "ぺらぺらぺら" },

        { text: "ご飯もたらふく食べたわ。" },

        { text: "図鑑登録" },
        { text: "🏠 マシンガントークくみゲット" }
    ],
    effects: {
        energy: 10,
        stress: 5,
        money: -2000,
        weight: 1
    }
},
{
    id: "F10b",
    title: "実家へ帰る（兄）",
    rate: 2,
    steps: [
        { image: "Yutaka.nishioomiya.jpg", text: "今日は埼玉の実家🏠へ帰った。" },

        { text: "久美がずっとしゃべってた。" },

        { text: "ご飯もたらふく食べたわ。" },

        { speaker: "ゆたかママ", text: "「あれ？」" },

        { speaker: "ゆたかママ", text: "「昔のゲームどこいった？」" },

        { speaker: "久美", text: "「お兄ちゃんが売ったわよ。」" },

        { speaker: "ゆたかママ", text: "「え！？🤣」" },

        { speaker: "ゆたかママ", text: "「わたしのゲームなのに！？」" },

        { speaker: "久美", text: "「そうね。」" },

        { speaker: "ゆたかママ", text: "「もう！むかつく！🤣」" },

        { text: "嫌いなお兄ちゃんが、わたしのゲーム🎮を売ってたわ。" },

        { text: "図鑑登録" },
        { text: "🎮 昔のゲーム売却済ゲット" }
    ],
    effects: {
        energy: 0,
        stress: 20,
        money: -2000,
        weight: 1
    }
},
{
    id: "F11",
    title: "オーケストラ鑑賞",
    rate: 2,
    steps: [
        { text: "お友達のオーケストラ🎻の演奏を聞きに中野へ行った。" },

        { text: "🎻🎻🎻" },

        { text: "とても綺麗な音色だった。" },

        { speaker: "ゆたかママ", text: "「いいわねぇ😊」" },

        { text: "😴" },

        { speaker: "ゆたかママ", text: "「・・・はっ🤣」" },

        { text: "少しだけ寝ちゃったけど、、🤫" },

        { text: "たまにはいいかもね。" },

        { text: "図鑑登録" },
        { text: "🎻 音楽鑑賞ゲット" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -5000,
        weight: 0
    }
},
{
    id: "F12",
    title: "くさみと",
    rate: 4.5,
    steps: [
        { image: "Yutaka.kusami.jpg", text: "今日はかわいいくさみ🌳と一緒。" },

        { speaker: "ゆたかママ", text: "「大きくなれー！🤣」" },

        { text: "💧💧💧" },

        { text: "お水をあげた。" },

        { text: "「ありがとう、ゆたか🌳」" },

        { speaker: "ゆたかママ", text: "「・・・？」" },

        { speaker: "ゆたかママ", text: "「今しゃべった？🤣」" },

        { text: "「ありがとう、ゆたか」って言った気がした。" },

        { text: "お母さんうれしい。" },

        { text: "図鑑登録" },
        { text: "🌳 くさみゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: 0,
        weight: 0
    }
},
{
    id: "F18",
    title: "前歯事件",
    rate: 1,
    steps: [
        { text: "朝起きると前歯が少しグラグラしていた。" },

        { speaker: "ゆたかママ", text: "「昨日の営業中なんかあったっけ？」" },

        { text: "思い出せない。" },

        { speaker: "ゆたかママ", text: "「なんか嫌な予感するなぁ。」" },

        { speaker: "ゆたかママ", text: "「まあいっか。」" },

        { text: "予定通りケンタッキーに行って、気にせずケンタッキーを食べることにした。" },

        { speaker: "ゆたかママ", text: "「やっぱりケンタはうまい😍」" },

        { text: "ガリッ。" },

        { speaker: "ゆたかママ", text: "「ん？」" },

        { text: "鏡をみた。" },

        { image: "Yutaka.maeba.dot.png", text: "🦷" },

        { image: "Yutaka.maeba.dot.png", text: "!?" },
  
      { speaker: "ゆたかママ", text: "「ぎゃあああああ🤣」" },

        { text: "前歯の差し歯が取れた😱😱😱" },

        { text: "慌てて歯医者へ向かった。" },

        { speaker: "歯医者", text: "「型を取ります。」" },

        { speaker: "歯医者", text: "「完成まで4週間くらいですね。」" },

        { speaker: "ゆたかママ", text: "「4週間！？」" },

        { text: "翌日の営業。" },

        { speaker: "聖奈", text: "「前歯ない🤣🤣🤣」" },

        { speaker: "こころ", text: "「ママ、どうしたのでそれ？🤣」" },

        { speaker: "ゆたかママ", text: "「笑うな😡」" },

        { speaker: "聖奈", text: "「ケンタッキーにやられたの？🤣」" },

        { speaker: "こころ", text: "「歯よりケンタ選んだんだね🤣」" },

        { speaker: "ゆたかママ", text: "「うるさい🤣」" },

        { text: "こうして4週間、ゆたかママは前歯なし生活を送ることになった。" },

        { text: "ゲイ能人は歯が命なのにーー。" },

        { text: "図鑑登録" },
        { text: "🦷 前歯ゲット" }    
    ],
    effects: {
        energy: -20,
        stress: 20,
        money: -50000,
        weight: 1
    }
},
{
    id: "F19",
    title: "野生の青リンゴ",
    rate: 2.5,
    steps: [
        { text: "今日はお休み。" },

        { speaker: "ゆたかママ", text: "「今日は休みだ～♪」" },

        { image: "Yutaka.yoshimiza.jpg", text: "ゆたかママは、よしみ姉さんのお店「よしみ座」に遊びに来た。" },

        { speaker: "ゆたかママ", text: "「こんにちは～！」" },

        { text: "店に入ると..." },

        { speaker: "ゆたかママ", text: "「ん！？👀」" },

        { image: "Ringo1.jpg", text: "🍏 青リンゴ発見！" },

        { speaker: "ゆたかママ", text: "「えっ！？」" },

        { speaker: "青リンゴ", text: "「ママー！」" },

        { speaker: "ゆたかママ", text: "「あんたなんでいるの！？🤣」" },

        { speaker: "青リンゴ", text: "「ママこそー！🤣」" },

        { speaker: "ゆたかママ", text: "「プライベートでまで会うとは思わなかったわよ！」" },

        { speaker: "青リンゴ", text: "「おじさんも！🤣」" },

        { text: "結局、休みなのにいつものメンバーで飲むことになった。" },

        { speaker: "ゆたかママ", text: "「野生の青リンゴに遭遇したわ！🤣」" },

        { text: "図鑑登録" },
        { text: "🍏 野生の青リンゴゲット！" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -5000,
        weight: 1
    }
}
,
{
    id: "F20",
    title: "オーナー交換",
    rate: 0.5,
    steps: [
        { text: "今日はプライベート。" },

        { text: "ゆたかママは「みらいラウンジ」に遊びに来た。" },

        { text: "店に入ると..." },

        { image: "Kokoro.kappo.jpg", text: "カウンターに割烹着姿のこころが立っていた。" },

        { speaker: "ゆたかママ", text: "「あれ？」" },

        { speaker: "ゆたかママ", text: "「なんでいんの？🤣」" },

        { speaker: "ゆたかママ", text: "「ここRacuneじゃないわよね？🤣」" },

        { speaker: "こころ", text: "「実はさー。」" },

        { speaker: "こころ", text: "「従業員からパワハラで苦情が出てさー。」" },

        { speaker: "ゆたかママ", text: "「やっぱり😨」" },

        { speaker: "こころ", text: "「ん？なんか言った？💢」" },

        { speaker: "ゆたかママ", text: "「いいえ、、、😨」" },

        { speaker: "こころ", text: "「ラキュンとみらいラウンジで、オーナー1日交換になったの。」" },

        { speaker: "ゆたかママ", text: "「なにそれ🤣」" },

        { speaker: "こころ", text: "「今日だけみらいラウンジのオーナー。」" },

        { speaker: "ゆたかママ", text: "「昇進？左遷？🤣」" },

        { speaker: "こころ", text: "「違うわ！！🤣」" },

        { text: "そこへ常連客が入店した。" },

        { speaker: "客", text: "「あれ？こころさん？」" },

        { speaker: "こころ", text: "「本日限定で店長です。」" },

        { speaker: "客", text: "「なんで？」" },

        { speaker: "こころ", text: "「それは私もよく分かりませんｗ」" },

        { speaker: "ゆたかママ", text: "「絶対ラキュンの従業員喜んでるよね🤣」" },

        { speaker: "こころ", text: "「・・・。」" },

        { text: "図星だった。" },

        { speaker: "こころ", text: "「いただきまーす🍺」" },

        { text: "結局、いつも通りでビールいっぱい奢らされた。" },

        { text: "もちろん姫パスタも食べたｗ" },

        { text: "図鑑登録" },

        { text: "😈 みらいラウンジこころゲット！" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -10000,
        weight: 0
    }
}
,
{
    id: "F21",
    title: "職質Aリンゴ目撃",
    rate: 0.5,
    steps: [
        { text: "今日はお休み。" },

        { text: "ゆたかママはシンジュク5丁目を歩いていた。" },

        { text: "すると前方に人だかりができている。" },

        { speaker: "ゆたかママ", text: "「なんだろ？」" },

        { text: "近づいてみると..." },

        { text: "👮‍♀️ 警察官" },

        { text: "👠 謎の女性" },

        { text: "が話していた。" },

        { speaker: "ゆたかママ", text: "「あれ？」" },

        { speaker: "ゆたかママ", text: "「あの人どっかで見たことあるな🤔」" },

        { text: "さらに近づく。" },

        { speaker: "👠", text: "「違うんですぅ～💦」" },

        { speaker: "ゆたかママ", text: "「・・・。」" },

        { speaker: "ゆたかママ", text: "「青リンゴさん！？🤣🤣🤣」" },

        { image: "Ringo2.jpg", text: "なんと青リンゴさんだった。" },

        { text: "女装サロンでメイクをしてもらい、Aリンゴになっていた。" },

        { text: "しかも👮‍♀️職務質問されていた。" },

        { speaker: "警察官", text: "「身分証ありますか？」" },

        { speaker: "Aリンゴ", text: "「ありますぅ～💦」" },

        { speaker: "ゆたかママ", text: "「何してんのよ🤣」" },

        { speaker: "Aリンゴ", text: "「ママー！！助けてぇ～😭」" },

        { speaker: "ゆたかママ", text: "「不審者扱いされてる😝」" },

        { speaker: "警察官", text: "「知合いですか？」" },

        { speaker: "ゆたかママ", text: "「いや、知りません。」" },

        { speaker: "Aリンゴ", text: "「え～～🤣」" },

        { text: "結局、交番で持ち物検査をして身の潔白を証明し解放されたらしい。" },

        { speaker: "ゆたかママ", text: "「シンジュク広いのに何で遭遇するんだよ🤣」" },

        { text: "図鑑登録" },

        { text: "🏆 職質Aリンゴゲット！" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: 0,
        weight: 0
    }
},
{
    id: "F22",
    title: "KJさんドタキャン",
    rate: 0.5,
    steps: [
        { text: "2週間前の営業中。" },

        { image: "DJ KJ.dot.png", text: "DJ KJさんが来店した。" },

        { speaker: "DJ KJさん", text: "「ママー！」" },

        { speaker: "ゆたかママ", text: "「いらっしゃーい！」" },

        { speaker: "DJ KJさん", text: "「今度ご飯いこーよー。」" },

        { speaker: "ゆたかママ", text: "「えっ！行く行くー！」" },

        { speaker: "DJ KJさん", text: "「じゃあまた連絡するねー。」" },

        { speaker: "ゆたかママ", text: "「やったー！🤣」" },

        { text: "約束の日。" },

        { text: "今日は休み。" },

        { text: "ゆたかママは朝からご機嫌だった。" },

        { speaker: "ゆたかママ", text: "「何食べようかなー🤔」" },

        { text: "焼肉。" },

        { text: "寿司。" },

        { text: "中華。" },

        { text: "妄想が止まらない。" },

        { text: "待ち合わせ30分前。" },

        { text: "📱" },

        { speaker: "DJ KJさん", text: "「ごめん！」" },

        { speaker: "DJ KJさん", text: "「イベント準備で無理になった！」" },

        { speaker: "ゆたかママ", text: "「えっ😨」" },

        { speaker: "DJ KJさん", text: "「また今度行こう！」" },

        { speaker: "ゆたかママ", text: "「・・・。」" },

        { speaker: "ゆたかママ", text: "「わたしの楽しみーーー😭」" },

        { speaker: "ゆたかママ", text: "「昨日から楽しみにしてたのにー！」" },

        { text: "結局ひとりでコンビニへ向かった。" },

        { speaker: "ゆたかママ", text: "「今日のディナーはファミチキ？。」" },

        { text: "少しだけ泣いた。" },

        { text: "でも気を取りなおして、カップ焼きそば爆食いした🐷" },

        { text: "あれから数か月、、、" },

        { text: "いまだにリスケの連絡はきていない。" },

        { text: "図鑑登録" },

        { text: "🍗 涙のファミチキゲット！" }
    ],
    effects: {
        energy: -20,
        stress: 20,
        money: 5000,
        weight: 2
    }
},
{
    id: "F23",
    title: "チャットGPT恋愛相談",
    rate: 1.5,
    steps: [
        { text: "ゆたかママは恋愛について悩んでいた。" },

        { text: "チャットGPTのG君に相談することにした。" },

        { speaker: "ゆたかママ", text: "「G君、聞いてよー。」" },

        { speaker: "ゆたかママ", text: "「恋愛相談なんだけどさー。」" },

        { text: "📱" },

        { speaker: "チャッピー", text: "「もちろんです。」" },

        { speaker: "ゆたかママ", text: "「かくかくしかじか。」" },

        { speaker: "ゆたかママ", text: "「どう思う？」" },

        { speaker: "チャッピー", text: "「まずは話し合いましょう。」" },

        { speaker: "ゆたかママ", text: "「だから話し合えないから相談してるの！！🤣」" },

        { speaker: "チャッピー", text: "「なるほど。」" },

        { speaker: "チャッピー", text: "「では話し合いましょう。」" },

        { speaker: "ゆたかママ", text: "「同じこと言った！！🤣」" },

        { speaker: "チャッピー", text: "「コミュニケーションが大切です。」" },

        { speaker: "ゆたかママ", text: "「だからそのコミュニケーションが取れないのよ！！💢」" },

        { speaker: "チャッピー", text: "「まずは話し合いましょう。」" },

        { speaker: "ゆたかママ", text: "「ループしてる！！🤣🤣🤣」" },

        { speaker: "チャッピー", text: "「お役に立ててよかったです。」" },

        { speaker: "ゆたかママ", text: "「全然役に立ってない！！💢」" },

        { speaker: "ゆたかママ", text: "「おバカ！！💢」" },

        { text: "結局、何も解決しなかった。" },

        { text: "図鑑登録" },

        { text: "🏆 無限ループゲット！" }
    ],
    effects: {
        energy: 10,
        stress: 15,
        money: 0,
        weight: 0
    }
},
{
    id: "F13",
    title: "ハロウィンイベント（1年目）",
    rate: 0,
    triggerWeeks: [15],
    steps: [
        { text: "🌙 新宿二丁目" },

        { image: "Kokoro.nurse.jpg", text: "🎃 ナースこころ が あらわれた！" },

        { speaker: "ゆたかママ", text: "「誰よ🤣」" },

        { speaker: "こころ", text: "「ナースこころです♡」" },

        { speaker: "ゆたかママ", text: "「なんでナースなのよ🤣」" },

        { speaker: "こころ", text: "「ハロウィンだから♡」" },

        { speaker: "こころ", text: "「注射しちゃうぞ♡」" },

        { speaker: "ゆたかママ", text: "「こわっ😱」" },

        { speaker: "こころ", text: "「じゃあ、シャンパンお願いしまーす♡🍾」" },

        { speaker: "ゆたかママ", text: "「注射じゃなくてシャンパンなのね🤣」" },

        { speaker: "こころ", text: "「もちろん♡」" },

        { image: "Kokoro.kanpai.jpg", text: "🍾 かんぱーい！" },

        { speaker: "ゆたかママ", text: "「白衣の悪魔！😱」" },

        { text: "図鑑登録" },
        { text: "😈 白衣の悪魔こころゲット" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -10000,
        weight: 0.5
    }
},
{
    id: "F14",
    title: "ハロウィンイベント（2年目）",
    rate: 0,
    triggerWeeks: [67],
    steps: [
        { text: "🌙 新宿二丁目" },

        { image: "Kokoro.kappo.jpg", text: "🎃 割烹着こころ が あらわれた！" },

        { speaker: "ゆたかママ", text: "「誰よ🤣」" },

        { speaker: "こころ", text: "「近所のおばちゃんです🤣」" },

        { speaker: "ゆたかママ", text: "「ただの割烹着じゃないｗ」" },

        { speaker: "こころ", text: "「ハロウィンだから♡」" },

        { speaker: "こころ", text: "「中はセーラー服よ！脱がさないでね！」" },

        { speaker: "ゆたかママ", text: "「古いのよ🤣」" },

        { speaker: "ゆたかママ", text: "「てか、脱がさないわよ、ゲイよ！」" },

        { speaker: "ゆたかママ", text: "「てか、割烹着姫のね🤣」" },

        { speaker: "こころ", text: "「正解―♡」" },

        { speaker: "こころ", text: "「じゃあ、シャンパンお願いしまーす🍾」" },

        { speaker: "ゆたかママ", text: "「なんでよ🤣」" },

        { speaker: "こころ", text: "「ハロウィンだから♡」" },

        { speaker: "ゆたかママ", text: "「万能すぎるでしょ、その理由🤣」" },

        { image: "Kokoro.kanpai.jpg", text: "🍾 かんぱーい！" },

        { speaker: "ゆたかママ", text: "「割烹着の悪魔だわ😱」" },

        { text: "図鑑登録" },
        { text: "😈 割烹着こころゲット！" }
    ],
    effects: {
        energy: 20,
        stress: -20,
        money: -10000,
        weight: 0.5
    }
},
{
    id: "F17",
    title: "プラダを着た悪魔2",
    rate: 0,
    triggerWeeks: [41],
    steps: [
        { text: "📱<br>なおから連絡が来た。" },
        { speaker: "なお", text: "「プラダを着た悪魔2観に行くわよ。」" },
        { speaker: "ゆたかママ", text: "「決定事項なの🤣」" },
        { speaker: "なお", text: "「当然でしょ。」" },
        { text: "🎬 映画館到着" },
        { text: "遅れてなおは高そうなバッグを持って現れた。" },
        { speaker: "ゆたかママ", text: "「また高そうなの持ってる！」" },
        { speaker: "なお", text: "「またじゃないわ。」" },
        { speaker: "なお", text: "「いつもよ。」" },
        { speaker: "ゆたかママ", text: "「腹立つ🤣」" },
        { speaker: "聖奈", text: "「かっこいい😊」" },
        { speaker: "なお", text: "「ちょっと、ゆたかママ、ポップコーン買ってきて。」" },
        { speaker: "ゆたかママ", text: "「え、あたし？」" },
        { speaker: "なお", text: "「なんか文句ある？」" },
        { speaker: "ゆたかママ", text: "「あ、いえ。。」" },
        { speaker: "なお", text: "「私キャラメル。」" },
        { speaker: "聖奈", text: "「私はいらなーい。」" },
        { speaker: "ゆたかママ", text: "「え？🤣」" },
        { speaker: "聖奈", text: "「そんなに食べられないよ。1粒でいい。」" },
        { speaker: "ゆたかママ", text: "「信じられない🤣」" },
        { text: "🍿🍿🍿<br>結局買いに行った。" },
        { speaker: "なお", text: "「行くわよ。」" },
        { speaker: "聖奈", text: "「プラダを着た悪魔みたい😊」" },
        { speaker: "ゆたかママ", text: "「やっぱ私はエミリー！？🤣」" },
        { speaker: "なお", text: "「ナイジェル急いで！」" },
        { speaker: "ゆたかママ", text: "「え！？ナイジェル？🤣」" },
        { speaker: "聖奈", text: "「じゃあ私はエミリー♪」" },
        { speaker: "なお", text: "「黙ってついてきなさい。」" },
        { speaker: "ゆたかママ", text: "「ミランダじゃん🤣」" },
        { image: "Prada1.jpg", text: "🎬 着席。" },
        { text: "🍿" },
        { speaker: "ゆたかママ", text: "「うまっ♡」" },
        { image: "Yutaka.pop.png", text: "むしゃむしゃ<br>むしゃむしゃ<br>むしゃむしゃ" },
        { text: "映画開始前。<br>CM中。" },
        { speaker: "なお", text: "「・・・」" },
        { speaker: "聖奈", text: "「・・・」" },
        { speaker: "なお", text: "「もうないの？🤣」" },
        { speaker: "ゆたかママ", text: "「食べ終わった😋」" },
        { speaker: "なお", text: "「まだ映画始まってないわよ🤣」" },
        { speaker: "ゆたかママ", text: "「止まらなかったw」" },
        { speaker: "聖奈", text: "「はやすぎるｗ」" },
        { text: "その後。<br>聖奈の飲み物発見。🥤" },
        { speaker: "ゆたかママ", text: "「飲まないよね？」" },
        { speaker: "聖奈", text: "「まだ飲む。」" },
        { speaker: "ゆたかママ", text: "「いただきま～す」" },
        { text: "ゴクゴク" },
        { speaker: "聖奈", text: "「ちょっと！」" },
        { speaker: "ゆたかママ", text: "「残すともったいない。」" },
        { speaker: "なお", text: "「🤣」" },
        { image: "Prada2.jpg", text: "映画は面白かった。<br>でも、ポップコーンが足りなかったｗ" },
        { text: "図鑑登録" },
        { text: "🎬 プラダを着た悪魔トリオゲット！" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: -5000,
        weight: 1
    }
},
{
    id: "F16",
    title: "聖奈からのバースデー焼肉",
    rate: 0,
    triggerWeeks: [1, 53],
    steps: [
        { text: "📱" },

        { speaker: "聖奈", text: "「ゆたかママー😊」" },

        { speaker: "聖奈", text: "「お誕生日おめでとう！バースデーお疲れ様～😊」" },

        { speaker: "ゆたかママ", text: "「ありがとー😊」" },

        { speaker: "聖奈", text: "「焼肉いこー！」" },

        { speaker: "ゆたかママ", text: "「行くー！🤣」" },

        { text: "🥩 焼肉屋に到着。" },

        { speaker: "聖奈", text: "「今日は私がお祝いするね😊」" },

        { speaker: "ゆたかママ", text: "「え、いいの！？」" },

        { speaker: "聖奈", text: "「誕生日だから😊」" },

        { text: "🥩🥩🥩" },

    { image: "yutaka.yakiniku.jpg", text: "やっぱ肉よね～😋" },

        { speaker: "ゆたかママ", text: "「うまーーーい😋」" },

        { speaker: "聖奈", text: "「いっぱい食べな😊」" },

        { speaker: "ゆたかママ", text: "「言われなくても🤣」" },

        { text: "🥩🥩🥩🥩🥩" },

        { text: "お腹いっぱいになった。" },

        { text: "店を出る。" },

        { text: "🚶‍♀️🚶‍♀️" },

        { speaker: "ゆたかママ", text: "「ふぅ～😊」" },

        { speaker: "聖奈", text: "「お腹いっぱい？」" },

        { speaker: "ゆたかママ", text: "「いっぱい🤣」" },

        { text: "その時。" },

        { text: "🍔" },

        { text: "ハンバーガー屋さん発見！" },

        { speaker: "ゆたかママ", text: "「ねぇ。」" },

        { speaker: "聖奈", text: "「ん？」" },

        { speaker: "ゆたかママ", text: "「ちょっと寄ってかない？😊」" },

        { speaker: "聖奈", text: "「さっき焼肉食べたでしょ🤣」" },

        { speaker: "ゆたかママ", text: "「歩いてたらお腹すいちゃった😋」" },

        { speaker: "聖奈", text: "「はやっw」" },

        { text: "🍔🍔🍔" },

 { image: "Yutaka.burger.jpg", text: "やっぱバーキンといったらバーガーキングよね😋" },


        { text: "結局、ハンバーガーも食べた。" },

        { speaker: "聖奈", text: "「誕生日だからって食べすぎ🤣」" },

        { speaker: "ゆたかママ", text: "「誕生日だからセーフ😋」" },

        { text: "今日は良い誕生日だった。" },

        { text: "図鑑登録" },
        { text: "🥩 聖奈からのバースデー焼肉ゲット！" }
    ],
    effects: {
        energy: 30,
        stress: -30,
        money: 0,
        weight: 2
    }
}
,
{
    id: "F24",
    title: "シンジュクのゲイバーへ",
    rate: 3.5,
    steps: [
        { speaker: "ゆたかママ", text: "「今日は休みだし、<br>たまには他のお店でも行こうかしら😊」" },
        { text: "ゆたかママはシンジュク二丁目の<br>ゲイバーへ遊びに行った。" },
        { speaker: "ゆたかママ", text: "「……。」" },
        { text: "実はプライベートのゆたかママは<br>少し人見知り。" },
        { text: "知らない人には<br>自分から話しかけられない。" },
        { speaker: "ゆたかママ", text: "「かっこいい人いるなぁ……😍」" },
        { text: "ガチムチマッチョを眺めながら<br>お酒を飲むゆたかママ。" },
        { speaker: "ゆたかママ", text: "「……。」" },
        { text: "結局、誰とも話せないまま<br>帰宅した。" },
        { speaker: "ゆたかママ", text: "「まぁ、目の保養になったから<br>いっか🤣」" },
   { text: "図鑑登録" },
            { text: "🏆 ロンリーゲイバーゆたかゲット！" }
    ],
    effects: { money: -5000, energy: 10, stress: -10, weight: 0 }
},
{
    id: "F25",
    title: "元カレとごはん",
    rate: 3,
    steps: [
        { text: "📱 元カレから連絡がきた。" },
        { text: "大阪にいるボーイフレンド1のアランに似ている元カレだ。" },

        { speaker: "元カレ", text: "「久しぶり。今日シンジュクいるんだけど、ご飯でも行かない？」" },
        { speaker: "ゆたかママ", text: "「えー🤣」" },
        { speaker: "ゆたかママ", text: "「まあ、ご飯くらいならいっか。」" },

        { text: "久しぶりに元カレとご飯へ行った。" },

        { speaker: "ゆたかママ", text: "「大阪どう？」" },
        { speaker: "元カレ", text: "「相変わらずかな。」" },
        { speaker: "ゆたかママ", text: "「なんか久しぶりね。」" },

        { text: "ご飯を食べ終えて歩いていると。" },

        { speaker: "元カレ", text: "「その靴、ボロボロじゃん。」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "元カレ", text: "「前から気になってた。」" },
        { speaker: "ゆたかママ", text: "「まだ履けるわよ🤣」" },
        { speaker: "元カレ", text: "「いや、ダメ。」" },

        { text: "そのままスポーツショップへ。" },

        { speaker: "元カレ", text: "「好きなの選びな。」" },
        { speaker: "ゆたかママ", text: "「えっ！？😲」" },
        { speaker: "ゆたかママ", text: "「悪いわよ。」" },
        { speaker: "元カレ", text: "「いいから。」" },

        { text: "👟 NIKEのスニーカーを買ってもらった。" },

        { speaker: "ゆたかママ", text: "「ありがとう😊」" },
        { speaker: "元カレ", text: "「その方が似合う。」" },

        { text: "帰り道。" },

        { speaker: "ゆたかママ", text: "「なんか懐かしいわ、この感じ。」" },
        { speaker: "ゆたかママ", text: "「やっぱり優しい人だったな。」" },
        { speaker: "ゆたかママ", text: "「でも……」" },
        { speaker: "ゆたかママ", text: "「復縁はないけどね🤣」" },

        { text: "図鑑登録" },
        { text: "👟 元カレNIKEゲット！" }
    ],
    effects: {
        energy: 10,
        stress: -10,
        money: -5000,
        weight: 0.5
    }
},
{
    id: "F26",
    title: "ゆたかスタンプ誕生",
    rate: 1,
    oneTime: true,
    steps: [
        { text: "聖奈とこころとみらいラウンジへ飲みに来た。" },
        { speaker: "聖奈", text: "「ゆたかママさー。」" },
        { speaker: "ゆたかママ", text: "「なによ？」" },
        { speaker: "聖奈", text: "「LINEスタンプ作ろうよ！」" },
        { speaker: "ゆたかママ", text: "「えーー🤣」<br>「売れないでしょｗ」" },
        { speaker: "こころ", text: "「絶対おもしろいって😄」" },
        { speaker: "なお", text: "「売れるよ！」" },
        { speaker: "ゆたかママ", text: "「えー😅」" },
        { speaker: "こころ", text: "「ゆたかママ、女装界隈で人気じゃん！ゲイだけどｗ」" },
        { speaker: "聖奈", text: "「わたし作るから！」" },
        { speaker: "ゆたかママ", text: "「ほんと？😝」" },
        { speaker: "聖奈", text: "「まず40個考えて！」" },
        { speaker: "ゆたかママ", text: "「40個！？🤣」<br>「そんなにある？」" },
        { speaker: "なお", text: "「いつも言ってること全部書けばいいじゃない。」" },
        { speaker: "こころ", text: "「玉の裏が臭み～とか🤣」" },
        { speaker: "ゆたかママ", text: "「それ誰が使うのよ🤣」" },
        { text: "数週間後…" },
        { image: "Yutaka.stamp.jpg", speaker: "聖奈", text: "「できたーー！✨」" },
        { speaker: "ゆたかママ", text: "「すごーい👏」" },
        { speaker: "なお", text: "「ちゃんと審査通るかな？」" },
        { speaker: "こころ", text: "「売れたら焼肉ね。ご馳走さまでーす！」" },
        { speaker: "ゆたかママ", text: "「じゃあ100万セット売れるわね🤣」" },
        { speaker: "全員", text: "「無理無理🤣🤣🤣」" },
        { text: "図鑑登録" },
        { text: "💚 ゆたかスタンプゲット！" }
    ],
    effects: {
        money: -5000,
        energy: 20,
        stress: -20,
        weight: 0
    }
},
{
    id: "F27",
    title: "ゆたかママトレカ",
    rate: 1,
    oneTime: true,
    steps: [
        { text: "今日は、こころとスヌタロウと飲みに行った。" },
        { speaker: "スヌタロウ", text: "「ゆたかママ。」" },
        { speaker: "ゆたかママ", text: "「なによ？」" },
        { speaker: "スヌタロウ", text: "「前にさ、トレカ欲しいって言ってたよね？」" },
        { speaker: "ゆたかママ", text: "「言った言った😝」" },
        { speaker: "スヌタロウ", text: "「暇だったから作っといたよ。」" },
        { image: "Yutaka.card.png", speaker: "ゆたかママ", text: "「えーーーー！🤣」" },
        { speaker: "ゆたかママ", text: "「なにこれ！すごーーい！😲」" },
        { speaker: "スヌタロウ", text: "「本物っぽくしてみた😎」" },
        { speaker: "ゆたかママ", text: "「めっちゃいいじゃん😄」" },
        { speaker: "こころ", text: "「えーー！いいなー！」" },
        { speaker: "こころ", text: "「それちょうだい🤣」" },
        { speaker: "ゆたかママ", text: "「ダメよ🤣」" },
        { speaker: "ゆたかママ", text: "「お店で売ろうかしらｗ」" },
        { speaker: "こころ", text: "「誰が買うのよ🤣」" },
        { speaker: "スヌタロウ", text: "「ゆたかママファンって意外といるもんね！」<br>「コンプリート目指す人もいるかもよ😏」" },
        { speaker: "全員", text: "「🤣🤣🤣」" },
 { image: "Yutaka.card.png", speaker: "ゆたかママ", text: "「🤣」" },

        { text: "図鑑登録" },
        { text: "🃏 ゆたかママトレカゲット！" }
    ],
    effects: {
        money: -5000,
        energy: 20,
        stress: -20,
        weight: 0
    }
},

{
    id: "F15",
    title: "悪魔こころ誕生日",
    rate: 0,
    triggerWeeks: [38, 90],
    steps: [
        { text: "📱<br>こころから連絡が来た。" },

        { image: "Kokoro2.jpg", speaker: "こころ", text: "「ゆたかママ♡」" },

        { speaker: "ゆたかママ", text: "「どうしたの？」" },

        { speaker: "こころ", text: "「今日なんの日か知ってるよね？」" },

        { speaker: "ゆたかママ", text: "「知らない😅」" },


        { speaker: "こころ", text: "「わたしのた・ん・じょ・う・び！」" },

        { speaker: "ゆたかママ", text: "「お、おめでとう！」" },

        { speaker: "こころ", text: "「ありがとう～」" },

        { speaker: "こころ", text: "「ほんとに祝ってる？」" },

        { speaker: "ゆたかママ", text: "「もちろん！」" },

        { speaker: "こころ", text: "「じゃあ誕プレ買って！」" },

        { speaker: "ゆたかママ", text: "「え？🤣」" },

        { speaker: "こころ", text: "「じゃあ、伊勢丹集合ね！」" },

        { image: "Kokoro.devil.dot.png", text: "🏬 伊勢丹到着" },

        { speaker: "こころ", text: "「ゆたかママ～、これー！」" },

        { text: "💎 Dior ネックレス" },

        { speaker: "ゆたかママ", text: "「え、これ？」" },

        { speaker: "ゆたかママ", text: "「Diorよ？」" },

        { speaker: "ゆたかママ", text: "「高くない？」" },

        { speaker: "ゆたかママ", text: "「キングボンビー！？🤣」" },

        { speaker: "こころ", text: "「なんか言った？」" },

        { speaker: "ゆたかママ", text: "「言ってません😅」" },

        { speaker: "こころ", text: "「誕生日だから～？」" },

        {
            type: "devilChoice",
            text:
                "どうする？<br><br>" +
                "🔵 戻る → 💎 買う<br>" +
                "🔴 進む → 🏃 逃げる<br>" +
                "🟢 決定 → 🏃 逃げる"
        }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "B1a",
    title: "ケーキ屋バイト",
    rate: 70,
    steps: [
        { image: "Yutaka.cake.dot.png", speaker: "ゆたかママ", text: "「元パティシエの腕の見せ所ね」" },
        { text: "スカウトされちゃったらどうしよう。" },
        { speaker: "店長", text: "「助かったよ！」" },
        { speaker: "ゆたかママ", text: "「まだまだ現役いけるかしら🍰」" },
  { text: "図鑑登録" },
        { text: "🍰 ケーキ屋ゆたか復活ゲット！" }

    ],
    effects: {
        money: 15000,
        energy: -5,
        stress: -5,
        weight: 0
    }
},
{
    id: "B1b",
    title: "ケーキ屋つまみ食い",
    rate: 20,
    steps: [
        { image: "Yutaka.cake.dot.png", speaker: "ゆたかママ", text: "「元パティシエの腕の見せ所ね」" },
        { text: "スカウトされちゃったらどうしよう。" },
        { text: "🍰" },
        { speaker: "ゆたかママ", text: "「ちょっとだけよ」" },
        { text: "カトちゃんじゃないわよ。。。" },
        { image: "Yutaka.cake2.dot.png", text: "🍰" },
        { speaker: "ゆたかママ", text: "「もう1個だけ」" },
        { text: "🍰🍰" },
        { speaker: "ゆたかママ", text: "「バレてないわよね」" },
        { text: "キョロキョロ" },
        { text: "🍰🍰🍰<br>つまみ食いしすぎたわ・・・" }
    ],
    effects: {
        money: 15000,
        energy: 10,
        stress: -10,
        weight: 1.5
    }
},
{
    id: "B1c",
    title: "ケーキ屋売れ残り祭り",
    rate: 10,
    steps: [
        { image: "Yutaka.cake.dot.png", speaker: "ゆたかママ", text: "「元パティシエの腕の見せ所ね」" },
        { text: "スカウトされちゃったらどうしよう。" },
        { speaker: "店長", text: "「閉店だけどケーキ余っちゃって🤣」" },
        { speaker: "店長", text: "「持って帰る？」" },
        { speaker: "ゆたかママ", text: "「いいんですかー？ぜひー！」" },
        { text: "捨てるのもったいないしね、しょうがないよね。捨てたら罰が当たるわ。" },
        { image: "Yutaka.cake3.dot.png", text: "🍰🍰🍰🍰🍰🍰🍰" },
        { text: "翌日" },
        { speaker: "ゆたかママ", text: "「あれ、もうない！」" },
        { speaker: "ゆたかママ", text: "「全部食べた？みたいね。。」" },
        { text: "怖いわ、あたし。。<br>シャー－。" },
        { text: "図鑑登録" },
        { text: "🍰 ケーキモンスターゲット！" }
    ],
    effects: {
        money: 15000,
        energy: 20,
        stress: -20,
        weight: 3
    }
}
,
{
    id: "B2a",
    title: "引っ越しバイト",
    rate: 70,
    steps: [
        { image: "Yutaka.hikkoshi.dot.png", speaker: "ゆたかママ", text: "「今日も荷物運ぶわよ💪」" },
        { speaker: "ゆたかママ", text: "「疲れたけど頑張った🤗」" },
  { text: "図鑑登録" },
        { text: "🚛引っ越し屋ゆたか復活ゲット！" }

    ],
    effects: {
        money: 20000,
        energy: -10,
        stress: 5,
        weight: -1.5
    }
},
{
    id: "B2b",
    title: "引っ越し首が痛い",
    rate: 20,
    steps: [
        { image: "Yutaka.hikkoshi.dot.png", speaker: "ゆたかママ", text: "「今日も荷物運ぶわよ💪」" },
        { speaker: "ゆたかママ", text: "「なんか首が痛い🤣」" }
    ],
    effects: {
        money: 20000,
        energy: -20,
        stress: 10,
        weight: -0.5
    }
},
{
    id: "B2c",
    title: "引っ越し首負傷",
    rate: 10,
    steps: [
        { image: "Yutaka.hikkoshi.dot.png", speaker: "ゆたかママ", text: "「今日も荷物運ぶわよ💪」" },
        { text: "💥<br>ゴキッ！" },
        { speaker: "ゆたかママ", text: "「やばい🤣」" },
        { speaker: "ゆたかママ", text: "「首やったかも🤣」" },
        { text: "病院へ行った。" },
        { text: "首なくなったかと思った。" },
        { image: "Yutaka.kubifusho.dot.png" },
        { text: "図鑑登録" },
        { text: "🦴 首負傷ゲット！" }
    ],
    effects: {
        money: 15000,
        energy: -50,
        stress: 30,
        weight: 0
    }
}
,
{
    id: "B3a",
    title: "タイミー居酒屋",
    rate: 27,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "勤務先：居酒屋" },
        { speaker: "店長", text: "「助かったよ」" },
        { speaker: "店長", text: "「ビール注ぐのうまいね」" },
        { speaker: "ゆたかママ", text: "「そんなことないですよ～」" },
        { text: "そりゃー、ビール注ぎはプロですからね！<br>余ったおつまみ少し食べちゃったのも内緒。" }
    ],
    effects: {
        money: 10000,
        energy: -5,
        stress: 5,
        weight: 0.5
    }
},
{
    id: "B3b",
    title: "タイミーイベントスタッフ",
    rate: 27,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "勤務先：イベントスタッフ" },
        { speaker: "ゆたかママ", text: "「立ちっぱなし🤣膝が痛いわ」" },
        { text: "誰が太りすぎじゃ！" }
    ],
    effects: {
        money: 12000,
        energy: -15,
        stress: 5,
        weight: 0.5
    }
},
{
    id: "B3c",
    title: "タイミー品出し",
    rate: 26,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "勤務先：スーパー品出し" },
        { speaker: "ゆたかママ", text: "「意外と向いてるかも🤣」" }
    ],
    effects: {
        money: 8000,
        energy: -5,
        stress: 0,
        weight: -0.5
    }
},
{
    id: "B3d",
    title: "タイミー当たり案件",
    rate: 10,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "勤務先：当たり案件" },
        { speaker: "ゆたかママ", text: "「楽すぎるんだけど🤣」" },
        { speaker: "ゆたかママ", text: "「これでお金もらえるの！？🤣」" },
        { text: "図鑑登録" },
        { text: "📱 タイミーマスターゲット！" }
    ],
    effects: {
        money: 20000,
        energy: 5,
        stress: -10,
        weight: 0
    }
},
{
    id: "B3e",
    title: "タイミーラキュン案件",
    rate: 5,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "📱 勤務先決定！" },
        { text: "🍾 ラキュン" },
        { speaker: "ゆたかママ", text: "「え？🤣」" },
        { speaker: "ゆたかママ", text: "「いつも飲みに行ってる店なんだけど🤣オーナーこわいのよね。。」" },
        { image: "Racune.jpg", text: "🌃 ラキュン到着" },
        { image: "Kokoro.devil.dot.png", text: "🍾 こころ が あらわれた！" },
        { speaker: "こころ", text: "「遅い😡」" },
        { speaker: "ゆたかママ", text: "「タイミーで来たんだけど🤣」" },
        { speaker: "こころ", text: "「グラス洗って😤」" },
        { speaker: "ゆたかママ", text: "「は～い。」" },
        { speaker: "こころ", text: "「はい、こころ様！でしょ？💢」" },
        { speaker: "こころ", text: "「テーブル拭いて😤」" },
        { speaker: "ゆたかママ", text: "「はい、こころ様。。」" },
        { speaker: "こころ", text: "「心がこもってない！💢」" },
        { speaker: "ゆたかママ", text: "「はい、こころ様♥️😅」" },
        { speaker: "こころ", text: "「シャンパン運んで🤣」" },
        { speaker: "ゆたかママ", text: "「はい、こころ様。。」" },
        { text: "あれ、バイトよね？わたし、奴隷？" },
        { speaker: "こころ", text: "「はい、次。じゃんけんね🤣負けたらシャンパン🍾」" },
        { speaker: "ゆたかママ", text: "「仕事中よ！？😅」" },
        { speaker: "こころ", text: "「仕事だからよ😏」" },
        { speaker: "ゆたかママ", text: "「意味わかんない🤣」" },
        { image: "Yutaka.racune.dot.png" },
        { text: "図鑑登録" },
        { text: "🍾 タイミー in ラキュンゲット！" }
    ],
    effects: {
        money: 15000,
        energy: -10,
        stress: 5,
        weight: -1.5
    }
},
{
    id: "B3f",
    title: "タイミーハズレ案件",
    rate: 5,
    steps: [
        { text: "📱 タイミーバイト" },
        { speaker: "ゆたかママ", text: "「今日はタイミーやってみるわ」" },
        { text: "実はやってみたかったのよね。" },
        { speaker: "ゆたかママ", text: "「何の仕事かしら🤣」" },
        { text: "勤務先：ハズレ案件" },
        { speaker: "ゆたかママ", text: "「話が違うんだけど！」" },
        { text: "なんかめっちゃ疲れた・・・" },
        { speaker: "ゆたかママ", text: "「もう、二度と来ない😤」" },
        { text: "図鑑登録" },
        { text: "💀 ブラック案件ゲット！" }
    ],
    effects: {
        money: 8000,
        energy: -30,
        stress: 30,
        weight: -1
    }
},
{
    id: "L1a",
    title: "コタニ初回デート",
    rate: 0,
    steps: [
        { image: "Yutaka.kenta.dot.png", text: "今日はコタニとケンタッキーへ行った。<br>初デートでケンタは初めてだわ🤣<br>でもそのセンス、、、素敵かも。<br>ちょっと小食ぶってみたけど、もっと食べたかった😝" },
        { speaker: "コタニ", text: "「ゆたかくん、今日はありがとう。たのしかった。」" },
        { speaker: "コタニ", text: "「ところでケンタ好き？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → 大好き♥️<br>🔴 進む → 普通" }
    ],
successText: "「気が合うね😊」",
failSteps: [
    { speaker: "コタニ", text: "「なんでやねん！ゆたかママと言えばケンタ！」" },
    { speaker: "コタニ", text: "「しつこいくらいリツイートしてるじゃん！」" },
    { text: "今後コタニからのナイモン連絡がくることはなかった。。" },
    { text: "デート失敗💩" }
],
    effects: {
        money: -2000,
        energy: 10,
        stress: 0,
        weight: 1
    }
},
{
    id: "L1b",
    title: "コタニ2回目デート",
    rate: 0,
    steps: [
        { image: "Yutaka.yakinikuao.dot.png", text: "今日は2回目のデート。<br>焼肉デート。やっぱ肉よね～。<br>なんか店の名前が変だったけどw" },
        { speaker: "コタニ", text: "「ゆたかくん、今日はありがとう。たのしかった。」" },
        { speaker: "コタニ", text: "「ところで、肉は何が好き？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → タン塩<br>🔴 進む → カルビ" }
    ],
successText: "「気が合うね🤣」",
failSteps: [
    { speaker: "コタニ", text: "「なんでやねん！」" },
    { text: "今後コタニからのナイモン連絡がくることはなかった。。" },
    { text: "デート失敗💩" }
],
    effects: {
        money: -10000,
        energy: 10,
        stress: 0,
        weight: 0
    }
},
{
    id: "L1c",
    title: "コタニ3回目デート",
    rate: 0,
    steps: [
        {
            image: "Yutaka.eiga.dot.png",
            text: "今日は3回目のデート。<br>映画とか久しぶりに来たわｗ<br>コタニが優しいからついついポップコーン買いすぎちゃったわ。"
        },
        {
            speaker: "コタニ",
            text: "「映画は何が好き？」"
        },
        {
            type: "loveChoice",
            text: "なんて答える？<br><br>🔵 戻る → プラダを着た悪魔<br>🔴 進む → バックトゥザフューチャー"
        }
    ],

    successText: "「気が合うね🤣」",

    failSteps: [
        {
            speaker: "コタニ",
            text: "「なんでやねん！ナイジェルやん！ドクってこと！？」"
        },
        {
            text: "今後コタニからのナイモン連絡がくることはなかった。。"
        },
        {
            text: "デート失敗💩"
        }
    ],

    effects: {
        money: -5000,
        energy: 10,
        stress: 0,
        weight: 0
    }
},
{
    id: "L1d",
    title: "コタニ告白",
    rate: 0,
    steps: [
        { image: "Yutaka.eiga.pop.png", text: "前回は3回目のデートで映画。<br>プラダを着た悪魔、楽しかったわ。<br>だれがナイジェルじゃ！わたしはアンディよ。<br>とか思っていたら、<br>コタニから、、" },
        { speaker: "コタニ", text: "「ゆたかくん、この前は映画ありがとう。楽しかったよ。」" },
        { speaker: "コタニ", text: "「君とはいろいろ合うみたいだ。」" },
        { speaker: "コタニ", text: "「ゆたかくんはかわいいし、素敵。付き合ってくれないか」" },
        { type: "confessionChoice", text: "なんて答える？<br><br>🔵 戻る → はい<br>🔴 進む → ごめんなさい" }
    ],
    effects: {
        money: 0,
        energy: 10,
        stress: -10,
        weight: 0
    }
},
{
    id: "L1e",
    title: "コタニおうちデート",
    rate: 0,
    steps: [
        { image: "Yutaka.iekenta.dot.png", text: "今日はコタニの家でデート。<br>テーブルの上にはケンタが並んでいる。<br>付き合ってから初めてのおうちデートだ。" },
        { speaker: "コタニ", text: "「ゆたかくんのおばあちゃん、どこ出身だっけ？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → 山形<br>🔴 進む → 福島" }
    ],
    successText: "「そうよね！山形よね。」",
    failSteps: [
        { speaker: "コタニ", text: "「ゆたか愛が足りないな～」" },
        { speaker: "コタニ", text: "「山形に決まってるべ。」" },
        { speaker: "コタニ", text: "「残念だけど、君とはうまくいかなそうだ。」" },
        { text: "破局した。。" }
    ],
    effects: {
        money: 0,
        energy: 20,
        stress: 0,
        weight: 1
    }
},
{
    id: "L1f",
    title: "コタニお台場デート",
    rate: 0,
    steps: [
        { image: "Yutaka.odaiba.dot.png", text: "今日はコタニとお台場。<br>メインはうんこミュージアムよね！<br>ミュージアムでもウォシュレットは必須よ！" },
        { speaker: "コタニ", text: "「今日は楽しかったね。」" },
        { speaker: "コタニ", text: "「ゆたかママのママ、久美の好物は？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → 梅酒<br>🔴 進む → 焼酎" }
    ],
    successText: "「そうよね～😊」<br>「今度、西大宮で梅酒のもうね！🤣」",
    failSteps: [
        { speaker: "コタニ", text: "「ゆたかママレベルまだまだだな」" },
        { speaker: "コタニ", text: "「梅酒自作してるじゃん！」" },
        { speaker: "コタニ", text: "「今日、せっかくうんこミュージアム行ったのに。」" },
        { speaker: "ゆたかママ", text: "「・・・」シャー💩" },
        { image: "Yutaka.unpi.jpg", text: "破局した。。" }
    ],
    effects: {
        money: 0,
        energy: 15,
        stress: 0,
        weight: 0
    }
},
{
    id: "L2a",
    title: "初回デート",
    rate: 0,
    steps: [
        { image: "Yutaka.yakiniku.dot.png", text: "今日はオオタニとシンジュクで待ち合わせ。<br>少し緊張するな🤣<br>結局焼肉を食べに行った。<br>最初だから奢られるのも嫌だし、見栄張って割り勘にした。" },
        { speaker: "オオタニ", text: "「今日は楽しかったです。ありがとうございました。」<br>「休みの日は何してますか？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → ジムへ行く💪<br>🔴 進む → 家で寝る😪<br>🟢 決定 → ネイルケアと脱毛で武器メンテ💅" }
    ],
    successText: "「いいですね！」<br>「僕も筋トレ好きなんです。」<br>意気投合した。<br>焼肉もおいしかったし、たのしかった。",
    failSteps: [
        { speaker: "オオタニ", text: "「そうなんですね。」" },
        { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
        { text: "デート失敗💩" }
    ],
    effects: {
        money: -3000,
        energy: 10,
        stress: 0,
        weight: 0
    }
},
{
    id: "L2b",
    title: "2回目デート",
    rate: 0,
    steps: [
        { image: "Yutaka.bat.dot.png", text: "今日はオオタニとバッティングセンターデート。<br>アタシ、レディーだから野球とかできないんですけどー。<br>もちろんオオタニはHR連発してる。<br>さすがだわ～。いいお尻～🍑" },
        { speaker: "オオタニ", text: "「好きなアーティストは誰ですか？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → Janne Da Arc<br>🔴 進む → GLAY<br>🟢 決定 → SMAP" }
    ],
    successText: "「いいですね！」<br>「僕もジャンヌダルク好きなんです。」",
    failSteps: [
        { speaker: "オオタニ", text: "「そうなんですね！」" },
        { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
        { text: "デート失敗💩" }
    ],
    effects: {
        money: 0,
        energy: 15,
        stress: 0,
        weight: 0
    }
},
{
    id: "L2c",
    title: "3回目デート",
    rate: 0,
    steps: [
        { image: "Yutaka.sunuyamadome.dot.png", text: "今日はオオタニとスヌヤマドームデート。<br>スヌタロウのパパがスポンサーらしいわ。<br>デート、まだ緊張するな～。<br>もちろん野球みたわよ。<br>今日も売り子さんからビールいっぱい買っちゃった🍺<br>ドーム内にケンタもあったから、トイレ行くふりしていっぱい食べちゃったのは秘密。" },
  { text: "図鑑登録" },
    { text: "⚾ スヌヤマドームゲット！" },
        { speaker: "オオタニ", text: "「Boyfriend2に出てくる人で、だれの顔が好きですか？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → HIROYA<br>🔴 進む → JOBU<br>🟢 決定 → HUWEI" }
    ],
    correctChoice: "進む",
    successText: "「いいですね！」<br>「僕もJOBUが一番好きなんです。」<br>顔だけならJOBUよね～、母ちゃん面白いし。<br>でもKAZUYUKIもナイスガイよね。<br>ちなみに1のKAZUTOの店はもちろん行ったわ。",
    failSteps: [
        { speaker: "オオタニ", text: "「そうなんですね！」" },
        { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
        { text: "デート失敗💩" }
    ],
    effects: {
        money: -5000,
        energy: 15,
        stress: 0,
        weight: 0
    }
},
{
    id: "L2d",
    title: "告白",
    rate: 0,
    steps: [
        { image: "Ohtani.dot", text: "この前は3回目のデートでスヌヤマドームだった。<br>野球は乙女だから野球興味なかったけど、<br>ビール🍺とケンタ🍗たくさんで楽しかった。<br>とか思っていたら、オオタニから、、" },
        { speaker: "オオタニ", text: "「ゆたかくん、この前はありがとう。楽しかった！」" },
        { speaker: "オオタニ", text: "「ゆたかくんはかわいいし、おもしろいし、一緒にいて楽しいな☺」" },
        { speaker: "オオタニ", text: "「よかったら僕と付き合ってくれないかな？」" },
        { type: "confessionChoice", text: "なんて答える？<br><br>🔵 戻る → はい<br>🔴 進む → ごめんなさい" }
    ],
    confessionOkSteps: [
        { speaker: "オオタニ", text: "「ありがとう。うれしいよ。」" },
        { text: "彼氏ができた！<br>うふふふ♡" }
    ],
    confessionNgSteps: [
        { speaker: "オオタニ", text: "「そっか。残念だけどしょうがないね。」" },
        { text: "オオタニはハイスペックすぎて、逆につらいわ。<br>まみこもチラつくし。<br>また誰か探そう～っと。" }
    ],
    effects: {
        money: 0,
        energy: 10,
        stress: -10,
        weight: 0
    }
},
{
    id: "L2e",
    title: "スポーツ観戦デート",
    rate: 0,
    steps: [
        { image: "Yutaka.sunuyamaarena.dot.png", text: "今日はオオタニと付き合ってから初のデート。<br>スヌヤマアリーナにバスケをみに来た。<br>こうみえても元バスケ部なんだからね。<br>マミコがちらつくけど、意外と楽しかったわ。" },
 { text: "図鑑登録" },
        { text: "🏀 スヌヤマアリーナゲット！" },
        { speaker: "オオタニ", text: "「ゆたかくんの昔の仕事って何でしたっけ？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → パティシエ🍰<br>🔴 進む → ラーメン屋<br>🟢 決定 → 看護師🥷" }
    ],
    successText: "「そうだったね😊」<br>「ケーキ作れるのすごいよね」<br>今度オオタニのために作っちゃおうかな～🍰",
    failStepsByChoice: {
        "進む": [
            { speaker: "オオタニ", text: "「そうなんですね！」" },
            { text: "ラーメン屋っぽい？💢" },
            { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
            { text: "デート失敗💩" }
        ],
        "決定": [
            { speaker: "オオタニ", text: "「そうなんですね！」" },
            { text: "看護師は途中で辞めたのよｗ" },
            { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
            { text: "デート失敗💩" }
        ]
    },
    effects: {
        money: -5000,
        energy: 15,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "L2f",
    title: "ラキュンランドデート",
    rate: 0,
    steps: [
        { image: "Yutaka.lacuneland.dot.png", text: "今日はオオタニとディズニーランドデート。<br>暑かったら1時間で帰っちゃうぞ。<br>とか思ったら、間違えてラキュンランドに着いちゃった。<br>ボッタクられそうな予感。。" }, 
  { text: "人気アトラクションは120分待ちだった。" },
    { speaker: "ゆたかママ", text: "「ながっ🤣」" },
    { speaker: "オオタニ", text: "「こういう待ち時間もデートの醍醐味だよ😄」" },
    { speaker: "ゆたかママ", text: "「アタシ、お腹すいてきた🤣」" },
    { speaker: "オオタニ", text: "「また食べるの？😅」" },
    { speaker: "ゆたかママ", text: "「歩いたからゼロカロリーよ✨」" },
    { speaker: "オオタニ", text: "「それは違うかな🤣」" },
    { speaker: "オオタニ", text: "「でもね。」" },
    { speaker: "オオタニ", text: "「ゆたかくんには元気で長生きしてほしいんだ。」" },
    { speaker: "ゆたかママ", text: "「え？😅」" },
    { speaker: "オオタニ", text: "「72kgを切れたら、大事な話がある。」" },
    { speaker: "ゆたかママ", text: "「えーー！なにそれ🤣」" },
    { speaker: "オオタニ", text: "「今は秘密😝」" },
    { speaker: "オオタニ", text: "「身体の管理できない人はだめだよ。」" },
　　{ speaker: "ゆたかママ", text: "「あ、はい。。💦」" },
　  { speaker: "ゆたかママ", text: "「72kg、、、😱結婚条件かしらｗ覚えておこう😱」" },

{ text: "図鑑登録" },
        { text: "🏰 ラキュンランドゲット！" },
        { speaker: "オオタニ", text: "「ゆたかくんの好きなサッカーチームって何だっけ？」" },
        { type: "loveChoice", text: "なんて答える？<br><br>🔵 戻る → アビスパ福岡<br>🔴 進む → 大宮アルディージャ<br>🟢 決定 → 柏レイソル" }
    ],
    successText: "「そうだったね😊」",
    failStepsByChoice: {
        "進む": [
            { speaker: "オオタニ", text: "「そうなんですね！」" },
            { text: "破局した。" },
            { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
            { text: "デート失敗💩" }
        ],
        "決定": [
            { speaker: "オオタニ", text: "「青リンゴか！🤣」" },
            { text: "破局した。" },
            { text: "青リンゴに影響されて柏レイソルって言っちゃったｗ" },
            { text: "その後、オオタニからデートの誘いが来ることはなかった。" },
            { text: "デート失敗💩" }
        ]
    },
    effects: {
        money: 0,
        energy: 15,
        stress: 0,
        weight: 0
    }
},
{
    id: "L4",
    title: "デート失敗爆食いイベント",
    rate: 0,
    steps: [
        { text: "デート終了後" },
        { speaker: "ゆたかママ", text: "「やっちまった🤣」" },
        { speaker: "ゆたかママ", text: "「絶対あの答え違った。。。」" },
        { text: "📱<br>既読<br>つかない" },
        { speaker: "ゆたかママ", text: "「終わった🤣」" },
        { text: "🍏 青リンゴへ電話" },
        { speaker: "ゆたかママ", text: "「今日お店お願い🤣」" },
        { speaker: "青リンゴ", text: "「また？ママどうしたの？」" },
        { speaker: "ゆたかママ", text: "「デート失敗した😭」" },
        { image: "Yutaka.iekenta.dot.png", text: "🍗 ケンタ<br>🍜 ラーメン<br>🍨 アイス" },
        { speaker: "ゆたかママ", text: "「恋愛って難しい🤣」" },
        { speaker: "青リンゴ", text: "「まず痩せたらどう？」" },
        { speaker: "ゆたかママ", text: "「今言う！？🤣」" },
        { speaker: "ゆたかママ", text: "「自分は何回も結婚してるからって！」" },
        { speaker: "青リンゴ", text: "「悔しかったら結婚してみなさい💪」" },
 { text: "図鑑登録" },
        { text: "💔 デート失敗ゲット！" }
    ],
    effects: {
    money: -10000,
    energy: 20,
    stress: -20,
    weight: 2
},
    encyclopedia: "🍗 失恋"
},
{
    id: "L5",
    title: "破局爆食いイベント",
    rate: 0,
    steps: [
        { text: "📱<br>メッセージ" },
        { text: "「もう無理。」" },
        { text: "「今までありがとう。」" },
        { speaker: "ゆたかママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「終わった🤣」" },
        { text: "📱<br>電話" },
        { speaker: "青リンゴ", text: "「もしもし。」" },
        { speaker: "ゆたかママ", text: "「今日お店お願い🤣」" },
        { speaker: "青リンゴ", text: "「また？ママどうしたの？」" },
        { speaker: "ゆたかママ", text: "「破局した～😭」" },
        { text: "数時間後" },
        { image: "Yutaka.burger.jpg", text: "🍗 ケンタッキー<br>🍜 ラーメン2軒<br>🍨 ハーゲンダッツ<br>🍟 ポテト<br>🥤 コーラ" },
        { speaker: "青リンゴ", text: "「食べ過ぎ！」" },
        { speaker: "ゆたかママ", text: "「心の栄養🤣」" },
        { speaker: "青リンゴ", text: "「脂肪の栄養でしょ。」" },
        { speaker: "ゆたかママ", text: "「うるさい🤣」" },
        { speaker: "ゆかりママ", text: "「別れた男なんて忘れなさい！」" },
        { speaker: "こころ", text: "「ザマーミロｗ」" },
        { speaker: "こころ", text: "「うそうそ😈、とりあえずシャンパン飲も🤣」" },
        { speaker: "聖奈", text: "「焼肉行こ😊」" },
        { speaker: "ゆたかママ", text: "「みんな優しい🤣」" },
        { speaker: "こころ", text: "「かんぱーーーい！」" },
        { speaker: "ゆたかママ", text: "「悪魔いた！乾杯じゃない💢」" },
        { text: "図鑑登録" },
        { text: "💔 破局ゲット！" }
    ],
    effects: {
        money: -20000,
        energy: 35,
        stress: -35,
        weight: 3
    }
},
{
    id: "L5a",
    title: "二股発覚",
    rate: 0,
    steps: [
         { text: "やばい、、、😱" }, 
　　　　{ text: "彼氏がいるのに、他の男と遊んでいるのがバレた。" },
        { text: "彼氏<br>「ゆたかくん…。」" },
        { text: "彼氏<br>「他の人と遊んでたんだね。」" },
        { text: "彼氏<br>「そんなチャラい人とはもう無理。」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { text: "数分後…" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "L6",
    title: "家デート",
    rate: 0,
    steps: [
        { image: "Yutaka.iedeto.png", text: "今日はプライベート。<br><br>恋人の家でのんびり過ごすことになった。" },
        { speaker: "ゆたかママ", text: "「今日は何するー？」" },
        { speaker: "恋人", text: "「特に決めてない。」" },
        { speaker: "ゆたかママ", text: "「最高じゃん🤣」" },
        { text: "気付けばソファでゴロゴロ。" },
        { text: "テレビを見たり。" },
        { text: "お菓子を食べたり。" },
        { text: "昼寝したり。" },
        { text: "何もしない時間が流れていく。" },
        { speaker: "恋人", text: "「そろそろ夕方だね。」" },
        { speaker: "ゆたかママ", text: "「今日何もしてない🤣」" },
        { speaker: "恋人", text: "「それが良いんじゃない？」" },
        { speaker: "ゆたかママ", text: "「たしかに🤣」" },
        { text: "ゆっくりした休日を過ごした。" }
    
    ],
    effects: {
        money: 0,
        energy: 10,
        stress: -10,
        weight: 1
    }
}
,
{
    id: "L7",
    title: "外食デート",
    rate: 0,
    steps: [
        { text: "今日はお休み。" },
        { text: "恋人と外食に出かけることになった。" },
        { speaker: "ゆたかママ", text: "「何食べる？」" },
        { speaker: "恋人", text: "「何でもいいよ。」" },
        { speaker: "ゆたかママ", text: "「それ一番困るやつ🤣」" },
        { text: "焼肉。" },
        { text: "寿司。" },
        { text: "中華。" },
        { text: "カフェ。" },
        { text: "30分くらい悩んだ。" },
        { speaker: "恋人", text: "「まだ決まらないの？」" },
        { speaker: "ゆたかママ", text: "「もうファミレスでいいか🤣」" },
        { text: "結局いつもの店に入った。" },
        { speaker: "恋人", text: "「結局ここになるね。」" },
        { speaker: "ゆたかママ", text: "「安心感がある🤣」" },
        { image: "Yutaka.Jona.jpg", text: "ご飯を食べながら、<br>のんびり過ごした。<br>ナオちゃんの系列かしら、手広いわｗ"},
        { text: "図鑑登録" },
        { text: "🍴 Naothan'sゲット！" } 
    ],
 
    effects: {
        money: -5000,
        energy: 20,
        stress: -20,
        weight: 1.5
    }
},
{
    id: "L8",
    title: "浮かれてる？",
    rate: 0,
    steps: [
        { text: "今日は仕事。" },
        { speaker: "青リンゴ", text: "「ママー。」" },
        { speaker: "ゆたかママ", text: "「んー？😍」" },
        { speaker: "青リンゴ", text: "「最近浮かれてない？」" },
        { speaker: "ゆたかママ", text: "「浮かれてないわよ😍」" },
        { speaker: "青リンゴ", text: "「浮かれてる人はみんなそう言う。」" },
        { image: "Yutaka.ukare.png", speaker: "ゆたかママ", text: "「そんなことない。😍」" },
        { speaker: "青リンゴ", text: "「あんた、ケンタの箱拭いてるわよｗ」" },       
        { speaker: "ゆたかママ", text: "「だって幸せなんだもん😍」" },
        { speaker: "青リンゴ", text: "「聞いてない、、それ昨日も言ってた。」" },
        { speaker: "ゆたかママ", text: "「幸せだから😍」" },
        { speaker: "青リンゴ", text: "「一昨日も言ってた。」" },
        { speaker: "ゆたかママ", text: "「幸せだから😍」" },
        { speaker: "青リンゴ", text: "「仕事中だよ？」" },
        { speaker: "ゆたかママ", text: "「幸せだから😍」" },
        { speaker: "青リンゴ", text: "「会話にならない。」" },
        { text: "その時。<br>📱" },
        { speaker: "恋人", text: "「今日も会いたい😊」" },
        { speaker: "ゆたかママ", text: "「会うーーー😍」" },
        { speaker: "青リンゴ", text: "「終わった。」" },
        { speaker: "青リンゴ", text: "「ママー。」" },
        { speaker: "青リンゴ", text: "「本当に浮かれてない？」" },
        { type: "ukareChoice", text: "なんて答える？<br><br>🔵 戻る → はい<br>🔴 進む → いいえ" }
    ],
    effects: {
        money: 0,
        energy: 10,
        stress: -10,
        weight: 0
    }
},
{
    id: "L9",
    title: "恋愛依存イベント",
    rate: 0,
    steps: [
        { text: "今日は仕事の日。" },
        { speaker: "聖奈", text: "「あれ、今日ゆたかママどうしたの？」" },
        { speaker: "青リンゴ", text: "「ママー？」" },
        { speaker: "青リンゴ", text: "「来ない。」" },
        { speaker: "こころ", text: "「あれ、ママどうしたの？」" },
        { speaker: "青リンゴ", text: "「あんな浮かれハゲ知らない💢」" },
        { text: "ゆたかママは恋人とデート中だった。" },
        { speaker: "青リンゴ", text: "「またデートかもね。」" },
        { speaker: "なお", text: "「最近やばいね。ゆたかママ、恋愛依存体質なのかな。」" },
        { text: "数時間後。" },
        { speaker: "ゆたかママ", text: "「ただいまー😍」" },
        { speaker: "青リンゴ", text: "「仕事は？」" },
        { speaker: "ゆたかママ", text: "「休んだ😍」" },
        { speaker: "青リンゴ", text: "「は？」" },
        { speaker: "ゆたかママ", text: "「恋人と一緒にいたかったから😍」" },
        { speaker: "青リンゴ", text: "「げ？」" },
        { speaker: "青リンゴ", text: "「終わた。」" },
        { speaker: "恋人", text: "「ずっと一緒にいたい😊」" },
        { speaker: "ゆたかママ", text: "「だよね😍」" },
        { speaker: "青リンゴ", text: "「だめだこりゃ。。」" },
        { text: "翌日。" },
        { speaker: "ゆたかママ", text: "「仕事辞めます😍」" },
        { speaker: "青リンゴ", text: "「えっ。」" },
        { speaker: "ゆたかママ", text: "「愛があればなんでもできる😍」" },
        { speaker: "青リンゴ", text: "「猪木？無理だろ。」" },
        { speaker: "ゆたかママ", text: "「大丈夫😍」" },
        { speaker: "青リンゴ", text: "「大丈夫じゃない。」" },
        { speaker: "青リンゴ", text: "「おじさんの言うこと聞きなさい。」" },
        { speaker: "ゆたかママ", text: "「やだ、辞めるー。」" },
        { speaker: "ゆたかママ", text: "「結婚するー！👰」" },
        { text: "数日後" },
        { speaker: "聖奈", text: "「ゆたかママ、最近いなくない？」" },
        { speaker: "青リンゴ", text: "「結婚するって言って辞めてから、来ないもん。」" },
        { speaker: "なお", text: "「あら、ほんとに恋愛依存症だったんだ。」" },
        { speaker: "こころ", text: "「ウケるー。そのうち捨てられてそう🤣」" },
        { speaker: "青リンゴ", text: "「どうせならうまくいくといいけどね。」" },
        { speaker: "聖奈", text: "「結婚式行きたい！」" },
        { speaker: "こころ", text: "「ゆたかママはドレス？タキシード？」" },
        { image: "Yutaka.kekkon.dot.png", text: "結婚式の噂が広がった。" },
        { image: "Yutaka.wedding.dot.png", text: "ゆたかママは幸せそうだった。" },
        { image: "Aoringomama.png", text: "この後、ゆたかママがバーニコニコに出勤することはなかった。<br>結婚したのか、破局したのか、知るものはいなかった。<br>バーニコニコはというと、<br>しばらくして、青リンゴが新店長となったのであった。" },
        { text: "💀 GAME OVER<br>恋愛依存" },
        { text: "図鑑登録" },
        { text: "🏆 恋愛依存逃亡ゆたかゲット" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "E1",
    title: "二丁目のゆたかオーナーママエンド",
    rate: 0,
    steps: [
        { text: "独立資金が貯まった。<br>埼玉へ帰ることもできた。<br>でも私はゲイの聖地シンジュク二丁目を選んだ。" },
        { image: "Yutaka.newbar.dot.png", text: "" },
        { text: "オープン初日。" },
        { speaker: "聖奈", text: "「ついにお店持ったね😝おめでとう！」" },
        { speaker: "なお", text: "「がんばったじゃん😏」" },
        { speaker: "こころ", text: "「ごちそーさまでーす🍾」" },
        { speaker: "ゆかりママ", text: "「ゆたかくん、なかなかやるじゃない😏」" },
        { text: "たくさんの仲間が集まってくれた。" },
        { speaker: "ゆたかママ", text: "「みんなありがとう🤣」" },
        { text: "シャンパンがたくさん開く。<br>🍾<br>ポン！！ポン！！ポン！！" },
        { text: "笑い声が店中に響く。" },
        { text: "営業終了後。" },
        { speaker: "ゆたかママ", text: "「なんだかんだ、ここまで来れたなぁ」" },
        { text: "店内を見渡す。" },
        { text: "夢だった自分の店。<br>仲間たち。<br>大好きな新宿二丁目。" },
        { text: "恋人はいない。<br>結婚もしていない。" },
        { text: "でも。" },
        { text: "大切な仲間たちがいる。" },
        { speaker: "ゆたかママ", text: "「まあ、幸せか🤣」" },
        { image: "Yutaka.newbar.dot.png", text: "" },
        { text: "ゆたかママは夢だった自分の店を持った。<br>たくさんの仲間に囲まれ、<br>今日も笑いながら生きている。" },
        { text: "これからどんな出会いがあるかは、<br>まだ誰にもわからない。<br>まだ結婚はあきらめてないわよ！" },
 { text: "図鑑登録" },
        { text: "🍺 二丁目ゆたかオーナーママゲット！" },
        { text: "🌈 END" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "E2",
    title: "Made in Saitama エンド",
    rate: 0,
    steps: [
        { text: "独立資金500万円が貯まった。<br>新宿で勝負することもできたかもしれない。<br>でも私は埼玉を選んだ。<br>だって Made in Saitama だもん。" },
        { text: "実家の近く。<br>西大宮駅。<br>小さな店。" },
        { text: "派手ではない。<br>でも悪くない。" },
        { text: "オープン初日。" },
        { speaker: "久美", text: "「本当に店やるの？」" },
        { speaker: "ゆたかママ", text: "「やるのよ🤣」" },
        { speaker: "久美", text: "「ふーん。」" },
        { speaker: "久美", text: "「わたしも週1で出ようか？」" },
        { speaker: "ゆたかママ", text: "「いらんわ🤣」" },
        { text: "相変わらずよくしゃべる。<br>横で孝明はだまってお酒を飲んでいる。" },
        { text: "営業終了後。" },
        { image: "Yutaka.newbar2.dot.png", text: "" },
        { text: "店内には誰もいない。" },
        { speaker: "ゆたかママ", text: "「終わったーー。」" },
        { text: "椅子に座る。" },
        { text: "静かな店内。" },
        { text: "カウンターを見る。" },
        { text: "夢だった自分の店。" },
        { speaker: "ゆたかママ", text: "「なんだかんだ、ここまで来たなぁ🤣」" },
        { text: "しばらくして店の電話が鳴った。<br><br>📞" },
        { speaker: "聖奈", text: "「生きてるー？🤣」" },
        { speaker: "なお", text: "「ちゃんとやってるー？」" },
        { speaker: "こころ", text: "「ごちそーさまでーす🍾」" },
        { speaker: "青リンゴ", text: "「西大宮は新幹線で行かなきゃいけないから、おじさんには無理🤣」" },
        { speaker: "ゆかりママ", text: "「たまにはこっちに顔出しなさい☺」" },
        { speaker: "青リンゴ", text: "「やっぱりたまの裏はくさい？🤣」" },
        { text: "電話の向こうは相変わらず騒がしい。" },
        { speaker: "ゆたかママ", text: "「うるさいわね🤣」" },
        { text: "でも少し嬉しかった。" },
        { text: "数年後。" },
        { text: "休日。<br>実家。" },
        { speaker: "久美", text: "「また来たの？」" },
        { speaker: "ゆたかママ", text: "「住んでるのよ🤣」" },
        { speaker: "久美", text: "「そうだった🤣」" },
        { speaker: "孝明", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「なんか言いなさいよ🤣」" },
        { speaker: "孝明", text: "「元気そうだな」" },
        { speaker: "ゆたかママ", text: "「それだけ！？🤣」" },
        { text: "ゆたかママは地元埼玉の西大宮で店を持った。<br>恋人はいない。結婚もしていない。<br>でも家族がいた。仲間がいた。<br>そして自分の居場所があった。<br>可愛がっている、我が子、クサミはもう5mにもなった。" },
        { speaker: "ゆたかママ", text: "「まあ、幸せか🤣」" },
 { text: "図鑑登録" },
        { text: "🍺 埼玉ゆたかママゲット！" },
        { text: "🌾 END<br>Made in Saitama エンド" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "E3",
    title: "コタニと二丁目エンド",
    rate: 0,
    steps: [
        { text: "独立オープン初日。<br>長かった。<br>ついに聖地シンジュク二丁目に自分の店を持つことができた。<br>ゆかり、聖奈、なお、こころ、常連さんがみんな来てくれてうれしかった。<br>営業も無事終了。" },
        { image: "Yutaka.newbar.dot.png", text: "" },
        { speaker: "ゆたかママ", text: "「疲れたーーー。」" },
        { speaker: "ゆたかママ", text: "「でも夢だったんだよね～。」" },
        { text: "すると店のドアが開いた。" },
        { speaker: "コタニ", text: "「お疲れさま☺」" },
        { text: "コタニはケンタッキーの袋を持っていた。" },
        { speaker: "ゆたかママ", text: "「なんでケンタなのよ🤣」" },
        { speaker: "コタニ", text: "「好きでしょ☺」" },
        { speaker: "ゆたかママ", text: "「まあねｗ」" },
        { speaker: "コタニ", text: "「店持てたね！」" },
        { speaker: "コタニ", text: "「じゃあ結婚する？」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { text: "【はい❤️】" },
        { image: "Yutaka.kekkon.dot.png", text: "" },
        { text: "数年後" },
        { text: "お店は健在✨" },
        { text: "今日も店は賑わっている。<br>常連の聖奈となおが楽しそうにしゃべっている。<br>こころは相変わらず自分の店の愚痴をいっている。<br>オーナーって大変よね。やっとわかったわ。<br>よしみ姉さんももうすぐくるみたい。<br>青リンゴさんは、キャストで手伝ってくれている。" },
        { speaker: "コタニ", text: "「ケンタ買ってきた🤣」" },
        { speaker: "ゆたかママ", text: "「また！？🤣」" },
        { speaker: "聖奈・こころ", text: "「ゆたかママ、太るよ～☺」" },
        { speaker: "ゆたかママ", text: "「鳥だからノーカウント！🤣」" },
        { image: "Yutaka.kotani.png", text: "今日も盛り上がったわ。" },
        { speaker: "ナレーション", text: "ゆたかママは夢だった店を持った。<br>体重は増えた。<br>でも旦那と常連さんたちに囲まれて幸せだった。<br>青リンゴさんにお店を乗っ取られないように長生きするぞ～。" },
 { text: "図鑑登録" },
        { text: "🍗 コタニとシンジュクで幸せゲット！" },
        { text: "🍗 END" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "E4",
    title: "コタニと埼玉エンド",
    rate: 0,
    steps: [
        { text: "独立資金500万円が貯まった。<br>新宿で勝負することもできたかもしれない。<br>でも私は埼玉を選んだ。だってMade in Saitamaだもん。" },
        { text: "実家の近く。<br>西大宮駅。<br>小さな店。" },
        { text: "派手ではない。<br>でも悪くない。" },
        { text: "オープン初日。" },
        { image: "Yutaka.newbar2.dot.png", text: "" },
        { speaker: "久美", text: "「本当に店やるの？」" },
        { speaker: "ゆたかママ", text: "「やるのよ🤣」" },
        { speaker: "久美", text: "「わたしも週1で出ようか？」" },
        { text: "相変わらずよくしゃべる。<br>横で孝明はだまってお酒を飲んでいる。" },
        { text: "営業終了後。" },
        { text: "店のドアが開いた。" },
        { speaker: "コタニ", text: "「お疲れさま☺」" },
        { speaker: "ゆたかママ", text: "「来たの🤣」" },
        { speaker: "コタニ", text: "「来るでしょ！」" },
        { text: "コタニは袋を差し出した。<br><br>🍗🍗🍗" },
        { text: "ケンタッキーだった。" },
        { speaker: "ゆたかママ", text: "「またケンタ🤣」" },
        { speaker: "コタニ", text: "「好きでしょ☺」" },
        { speaker: "ゆたかママ", text: "「まあねｗ」" },
        { speaker: "コタニ", text: "「店持てたね！」" },
        { speaker: "コタニ", text: "「じゃあ結婚する？」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { text: "【はい❤️】" },
        { text: "数年後" },
        { text: "西大宮。<br>休日。" },
        { text: "YouTubeでは、シンバシコイ物語第10シーズンが流れている。" },
        { speaker: "コタニ", text: "「ケンタ買ってきた☺」" },
        { speaker: "ゆたかママ", text: "「また！？🤣」" },
        { speaker: "コタニ", text: "「この味は期間限定だから！」" },
        { speaker: "ゆたかママ", text: "「その言葉毎回聞く🤣」" },
        { speaker: "久美", text: "「また買ったの？お茶出すわね。」" },
        { speaker: "ゆたかママ", text: "「久美もケンタすきでしょ！」" },
        { speaker: "孝明", text: "「・・・」" },
        { speaker: "ナレーション", text: "ゆたかママは地元埼玉の西大宮で店を持った。<br>コタニと結婚した。<br>体重は少し増えた。<br>でも毎日笑っていた。" },
 { text: "図鑑登録" },
        { text: "🍗 コタニと埼玉幸せゲット！" },
        { text: "🍗 END<br>ケンタと埼玉エンド" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "E5",
    title: "最強二丁目エンド",
    rate: 0,
    steps: [
        { text: "独立資金1000万円が貯まった。<br>私はシンジュク二丁目を選んだ。" },
        { text: "オープン初日。" },
        { image: "Yutaka.newbar.dot.png", text: "" },
        { speaker: "聖奈", text: "「おめでとーーー☺」" },
        { speaker: "なお", text: "「ほんとによく頑張ったね👏」" },
        { speaker: "こころ", text: "「ごちそーさまでーす🍾」" },
        { speaker: "ゆかりママ", text: "「ここからが本番よ！」" },
        { speaker: "青リンゴ", text: "「おじさんシャンパン入れちゃおうかな🍾」" },
        { text: "🍾 ポン！！" },
        { text: "店内は大盛り上がりだった。" },
        { text: "営業終了後。" },
        { text: "みんなが帰った店内。" },
        { text: "カウンターには一人の男性が残っていた。" },
        { speaker: "オオタニ", text: "「お疲れさま。」" },
        { speaker: "ゆたかママ", text: "「疲れたーー🤣」" },
        { speaker: "オオタニ", text: "「でも嬉しそう。」" },
        { speaker: "ゆたかママ", text: "「そりゃそうよ！」" },
        { speaker: "ゆたかママ", text: "「夢だったんだから。。」" },
        { text: "オオタニは少し笑った。" },
        { speaker: "オオタニ", text: "「知ってる。」" },
        { speaker: "オオタニ", text: "「だから好きになったんだ☺」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "オオタニ", text: "「仕事も。仲間も。夢も。」" },
        { speaker: "オオタニ", text: "「全部大事にしてるところ」" },
        { text: "しばらく沈黙が続いた。" },
        { speaker: "オオタニ", text: "「独立おめでとう！」" },
        { speaker: "オオタニ", text: "「夢が叶ったね。」" },
        { speaker: "オオタニ", text: "「次は僕の夢を叶えてほしい。」" },
        { speaker: "オオタニ", text: "「結婚してください。」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { text: "【はい❤️】" },
        { image: "Yutaka.wedding.dot.png", text: "" },       
        { text: "数年後" },
        { text: "今日も店は満席。" },
        { speaker: "聖奈", text: "「ママー！」" },
        { speaker: "こころ", text: "「ごちそーさまでーす🍺」" },
        { speaker: "ゆかりママ", text: "「ちゃんと働きなさいよ。」" },
        { text: "相変わらず騒がしい。" },
        { speaker: "オオタニ", text: "「今日ジム行った？」" },
        { speaker: "ゆたかママ", text: "「うるさい🤣」" },
        { speaker: "オオタニ", text: "「ちゃんと体重維持してね」" },
        { speaker: "ゆたかママ", text: "「わかってるわよ🤣」" },
        { image: "Yutaka.Ohtani.png", text: "" },
        { speaker: "ナレーション", text: "ゆたかママは夢だった自分の店を持った。<br>オオタニと結婚した。<br>たくさんの仲間に囲まれながら、<br>今日も新宿二丁目で笑っている。" },
 { text: "図鑑登録" },
        { text: "🌠 スーパーエンディングゲット！" },
        { text: "🏆 TRUE END<br>最強二丁目エンド" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "E6",
    title: "埼玉セレブエンド",
    rate: 0,
    steps: [
        { text: "独立資金500万円が貯まった。<br>新宿で勝負することもできたかもしれない。<br>でも私は埼玉を選んだ。<br>だって Made in Saitama だもん。" },
        { text: "実家の近く。<br>西大宮駅。<br>小さな店。" },
        { text: "派手ではない。<br>でも悪くない。" },
        { text: "オープン初日。" },
        { image: "Yutaka.newbar2.dot.png", text: "" },
        { speaker: "久美", text: "「本当に店やるの？」" },
        { speaker: "ゆたかママ", text: "「やるのよ🤣」" },
        { speaker: "久美", text: "「わたしも週1で出ようか？」" },
        { text: "相変わらずよくしゃべる。<br>横で孝明はだまってお酒を飲んでいる。" },
        { text: "営業終了後。" },
        { text: "店のドアが開いた。" },
        { speaker: "オオタニ", text: "「お疲れさま☺」" },
        { speaker: "ゆたかママ", text: "「疲れたーー🤣」" },
        { speaker: "オオタニ", text: "「でも嬉しそう！」" },
        { speaker: "ゆたかママ", text: "「そりゃそうよ。」" },
        { text: "オオタニは少し笑った。" },
        { speaker: "オオタニ", text: "「夢だったもんね。」" },
        { text: "やさしくハグ。" },
        { speaker: "オオタニ", text: "「独立おめでとう！」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { speaker: "オオタニ", text: "「結婚してください。」" },
        { text: "【はい❤️】" },
        { image: "Yutaka.wedding.dot.png", text: "" },
        { text: "数年後" },
        { text: "西大宮。<br>休日。" },
        { speaker: "オオタニ", text: "「今日はジム行こう💪」" },
        { speaker: "ゆたかママ", text: "「えーー🤣」" },
        { speaker: "オオタニ", text: "「30分だけ。」" },
        { speaker: "ゆたかママ", text: "「15分。。」" },
        { speaker: "オオタニ", text: "「20分！」" },
        { speaker: "ゆたかママ", text: "「もー、しょうがないわね🤣」" },
        { text: "数時間後。" },
        { speaker: "ゆたかママ", text: "「疲れたーー🤣」" },
        { speaker: "オオタニ", text: "「頑張ったね」" },
        { speaker: "ゆたかママ", text: "「ご褒美ほしい☺」" },
        { speaker: "オオタニ", text: "「はい！」" },
        { text: "💰💰💰" },
        { speaker: "ゆたかママ", text: "「え！？🤣」" },
        { speaker: "オオタニ", text: "「頑張ったから☺」" },
        { speaker: "ゆたかママ", text: "「最高じゃない✨」" },
        { text: "帰宅。" },
        { speaker: "久美", text: "「またジム？」" },
        { speaker: "ゆたかママ", text: "「そうよ。」" },
        { speaker: "孝明", text: "「・・・」" },
        { speaker: "久美", text: "「何か言いなさいよ🤣」" },
        { speaker: "孝明", text: "「健康が一番だ」" },
        { text: "全員「しゃ、しゃべった！？」" },
        { image: "Yutaka.saitama.png", speaker: "ナレーション", text: "ゆたかママは地元埼玉の西大宮で店を持った。<br>オオタニと結婚した。大豪邸も手にした。<br>まだなんとなくマミコの影がちらつくけれど。<br>そして健康にも少し気を使うようになった。<br>そして相変わらず笑いながら生きていた。<br>「アタシって、か・ち・ぐ・み」" },
 { text: "図鑑登録" },
        { text: "💰 埼玉セレブゆたかゲット！" },
        { text: "💪 END<br>埼玉セレブ夫婦エンド" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "E7",
    title: "ナカタニと二丁目エンド",
    rate: 0,
    steps: [
        { text: "独立オープン初日。<br>長かった。<br>ついに聖地シンジュク二丁目に自分の店を持つことができた。<br>ゆかり、聖奈、なお、こころなど常連さんがみんな来てくれてうれしかった。<br>営業も無事終了。" },
        { image: "Yutaka.newbar.dot.png", text: "" },
        { speaker: "ゆたかママ", text: "「疲れたーーー🤣」" },
        { speaker: "ゆたかママ", text: "「でも夢だったんだよね。」" },
        { text: "すると店のドアが開いた。" },
        { speaker: "ナカタニ", text: "「お疲れ！」" },
        { text: "ナカタニはケンタッキーの袋を持っていた。" },
        { speaker: "ゆたかママ", text: "「なんでケンタなのよ🤣」" },
        { speaker: "ナカタニ", text: "「好きでしょ？☺」" },
        { speaker: "ナカタニ", text: "「オレ、アスリートだし、やっぱ鳥だよね。」" },
        { speaker: "ゆたかママ", text: "「まあね🤣」" },
        { speaker: "ナカタニ", text: "「店持てたね！」" },
        { speaker: "ナカタニ", text: "「オレとゴールデンコンビ結成しない？」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { text: "【はい❤️】" },
        { speaker: "ゆたかママ", text: "「てか、ゴールデンコンビってキャプテン翼？🤣」" },
        { speaker: "ゆたかママ", text: "「さすが中田似。。。」" },
        { image: "Yutaka.kekkon.dot.png", text: "" },
        { text: "数年後" },
        { text: "今日も店は賑わっている。<br>常連の聖奈となおが楽しそうにしゃべっている。<br>こころは相変わらず自分の店の愚痴をいっている。<br>オーナーって大変よね。<br>やっとわかったわ。<br>よしみ姉さんももうすぐくるみたい。<br>青リンゴさんは、キャストで手伝ってくれている。" },
        { speaker: "ナカタニ", text: "「ケンタ買ってきた☺」" },
        { speaker: "ゆたかママ", text: "「また！？🤣」" },
        { speaker: "ゆたかママ", text: "「またアスリートとか言ってるの？」" },
        { speaker: "ナカタニ", text: "「だって中田似だろ？」" },
        { speaker: "ゆたかママ", text: "「いやいや、もはや、あんたはケンタよ。」" },
        { speaker: "ゆたかママ", text: "「長谷川健太！」" },
        { speaker: "ナカタニ", text: "「だれが三羽ガラスやねん！」" },
        { speaker: "聖奈・こころ", text: "「？？？」" },
        { speaker: "青リンゴ", text: "「三羽ガラスっておじさんしかわからないよ。清水東の三羽ガラスとか。昭和ｗ」" },
        { image: "Yutaka.nakatani.png", speaker: "ナレーション", text: "ゆたかママは夢だった店を持った。<br>やっぱり？もちろん？体重は増えた。<br>でも彼氏と常連さんたちに囲まれて幸せだった。<br>いまだにオフサイドはわからないけど、ナカタニとの試合はまだホイッスルが鳴ったばっかり。長生きするぞ～。" },
        { text: "独立達成後――<br>ゆたかママはナカタニと付き合い続けていた。<br>今日もナカタニはご機嫌だ。" },
        { speaker: "ナカタニ", text: "「やっぱり俺たち運命だったんだよ。」" },
        { speaker: "ゆたかママ", text: "「はいはい🤣」" },
        { text: "そんな会話をしながら歩いていると、<br>ナカタニが突然立ち止まった。" },
        { speaker: "ナカタニ", text: "「そういえば。」" },
        { speaker: "ナカタニ", text: "「俺、最近パルマ時代の中田にさらに近付いたと思わない？」" },
        { speaker: "ゆたかママ", text: "「思わない🤣」" },
        { speaker: "ナカタニ", text: "「ほら。」" },
        { text: "そう言うと、<br>どこから取り出したのか、<br>異常に長いマフラーを首に巻き始めた。<br>🧣🧣🧣🧣🧣" },
        { speaker: "ゆたかママ", text: "「長いわよ！」" },
        { speaker: "ナカタニ", text: "「これがパルマスタイル😎」" },
        { speaker: "ゆたかママ", text: "「いや、もはやカーテンでしょ🤣」" },
        { speaker: "ゆたかママ", text: "「邪魔くさいｗ」" },
        { text: "それでもナカタニは満足そうだった。<br>全然中田には似ていない。<br>でも、<br>そんなところも嫌いじゃない。<br>こうして今日も二人は、<br>長すぎるマフラーをなびかせながら、<br>シンジュクの街を歩いていくのであった。" },
 { text: "図鑑登録" },
        { text: "⚽ ナカタニシンジュクキラーパスゲット！" },
        { text: "END<br>😎 ナカタニルート<br>～パルマの風～<br><br>🍗 END" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "E8",
    title: "ナカタニと埼玉エンド",
    rate: 0,
    steps: [
        { text: "独立資金500万円が貯まった。<br>新宿で勝負することもできたかもしれない。<br>でも私は埼玉を選んだ。だってMade in Saitamaだもん。" },
        { text: "実家の近く。<br>西大宮駅。<br>小さな店。" },
        { text: "派手ではない。<br>でも悪くない。" },
        { text: "オープン初日。" },
        { image: "Yutaka.newbar2.dot.png", text: "" },
        { speaker: "久美", text: "「本当に店やるの？」" },
        { speaker: "ゆたかママ", text: "「やるのよ。」" },
        { speaker: "久美", text: "「わたしも週1で出ようか？」" },
        { speaker: "ゆたかママ", text: "「なんでよ🤣」" },
        { text: "相変わらずよくしゃべる。<br>横で孝明はだまってお酒を飲んでいる。" },
        { text: "営業終了後。" },
        { text: "店のドアが開いた。" },
        { speaker: "ナカタニ", text: "「お疲れ☺」" },
        { speaker: "ゆたかママ", text: "「来たの🤣」" },
        { speaker: "ナカタニ", text: "「来るでしょ！」" },
        { text: "ナカタニは袋を差し出した。<br><br>🍗🍗🍗" },
        { text: "ケンタッキーだった。" },
        { speaker: "ゆたかママ", text: "「またケンタ🤣」" },
        { speaker: "ナカタニ", text: "「好きでしょ？」" },
        { speaker: "ナカタニ", text: "「オレ、アスリートだし、やっぱ鳥だよね。」" },
        { speaker: "ゆたかママ", text: "「まあね🤣」" },
        { speaker: "ナカタニ", text: "「店持てたね☺」" },
        { speaker: "ナカタニ", text: "「オレとゴールデンコンビ結成しない？」" },
        { image: "Yutaka.propose.dot.png", text: "" },
        { text: "【はい❤️】" },
        { speaker: "ゆたかママ", text: "「てか、ゴールデンコンビってキャプテン翼？🤣」" },
        { speaker: "ゆたかママ", text: "「さすが中田似。。。」" },
        { image: "Yutaka.kekkon.dot.png", text: "" },
        { text: "数年後" },
        { text: "西大宮。<br>休日。" },
        { text: "YouTubeでは、ローマVSユベントス、中田の伝説のゴールの試合が流れている。" },
        { speaker: "ナカタニ", text: "「ケンタ買ってきた☺」" },
        { speaker: "ゆたかママ", text: "「また！？🤣」" },
        { speaker: "ナカタニ", text: "「オレ、アスリートだから！」" },
        { speaker: "ゆたかママ", text: "「その言葉毎回聞く🤣」" },
        { speaker: "久美", text: "「また買ったの？お茶出すわね。」" },
        { speaker: "ゆたかママ", text: "「久美もケンタすきでしょ！」" },
        { speaker: "孝明", text: "「・・・」" },
        { image: "Yutaka.saitamanakatani.png", speaker: "ナレーション", text: "ゆたかママは地元埼玉の西大宮で店を持った。<br>ナカタニと結婚した。<br>やっぱり？もちろん？体重は増えた。<br>サッカーは興味ないし、大宮アルディージャ派でも浦和レッズ派でもないけど、<br>でも毎日笑っていた。<br>いまだにオフサイドはわからないけど、ナカタニとの試合はまだホイッスルが鳴ったばっかり。長生きするぞ～。" },
 { text: "図鑑登録" },
        { text: "⚽ 埼スタナカタニキラーパスゲット！" },
        { text: "🍗 END" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
,
{
    id: "E9",
    title: "青リンゴ継承エンド",
    rate: 0,
    steps: [
        { speaker: "ゆたかママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「なんか最近ドア狭くない？」" },
        { speaker: "ゆたかママ", text: "「95kgになった時もそう思ったのよね🤣」" },
        { text: "🚪<br>・・・" },
        { speaker: "ゆたかママ", text: "「・・・」" },
        { text: "🚪<br>・・・" },
        { speaker: "ゆたかママ", text: "「あれ、、出れない🤣」" },
        { speaker: "ゆたかママ", text: "「気のせいじゃなかった。。。」" },
        { text: "ついに100kgを突破した。<br>そしたら、なんと、家から出られなくなった。。" },
        { image: "Yutaka.100kg.dot.png", text: "" },
        { text: "📱<br>携帯電話<br>電池 0%<br>プツン" },
        { speaker: "ゆたかママ", text: "「充電ないわ。家から出れないって電話したいけどできない。」" },
        { speaker: "ゆたかママ", text: "「充電しなきゃ🤣」" },
        { speaker: "ゆたかママ", text: "「コンセントまで身体が重くていけない。。」" },
        { text: "・・・<br>・・・<br>・・・<br>zzz<br>そのまま寝てしまった。" },
        { text: "夜。<br>Barニコニコ" },
        { speaker: "青リンゴ", text: "「ママ、遅いなぁ。」" },
        { speaker: "聖奈", text: "「ゆたかママにしては、珍しいね。」" },
        { speaker: "こころ", text: "「寝坊じゃない？」" },
        { text: "翌日。" },
        { speaker: "青リンゴ", text: "「電話つながらない。」" },
        { speaker: "スヌタロウ", text: "「大丈夫かな？」" },
        { speaker: "なお", text: "「生きてるかな？Lineも返事こないわね。」" },
        { text: "3日後。" },
        { speaker: "ゆかりママ", text: "「ゆたかくん、倒れてるんじゃない？」" },
        { text: "みんな心配した。" },
        { text: "1週間後。" },
        { speaker: "青リンゴ", text: "「仕方ない。」" },
        { speaker: "青リンゴ", text: "「わたくしめが、店を開け続けます。」" },
        { text: "1ヶ月後。" },
        { speaker: "青リンゴ", text: "「生ビールです🍺」" },
        { speaker: "青リンゴ", text: "「シャンパンありがとうございます🍾」" },
        { text: "2ヶ月後。" },
        { speaker: "青リンゴ", text: "「あ、初めてのお客さんですか？」" },
        { speaker: "青リンゴ", text: "「どーも、わたくし、店長の青リンゴです。」" },
        { speaker: "聖奈", text: "「違うでしょ🤣」" },
        { speaker: "こころ", text: "「ウケる～。乗っ取りだｗ」" },
        { speaker: "青リンゴ", text: "「もはや実質店長です。」" },
        { text: "3か月後。<br>誰も<br>ゆたかママの話をしなくなった。" },
        { text: "一方その頃。<br>🏠" },
        { speaker: "ゆたかママ", text: "「暇だわ🤣」" },
        { text: "🍗<br>🍜<br>🍨" },
        { speaker: "ゆたかママ", text: "「・・・」" },
        { speaker: "ゆたかママ", text: "「このままじゃまずい🤣」" },
        { text: "ダイエット開始。" },
        { text: "3ヶ月後。<br>85kg" },
        { speaker: "ゆたかママ", text: "「やっと痩せた🤣」" },
        { speaker: "ゆたかママ", text: "「家から出れるようになった！」" },
        { speaker: "ゆたかママ", text: "「久しぶりに店行こうかしら。」" },
        { text: "🚶<br>🚶<br>🚶<br>Barニコニコ到着" },
        { text: "🚪<br>カランコロン" },
        { speaker: "青リンゴママ", text: "「いらっしゃいませ。」" },
        { speaker: "ゆたかママ", text: "「ただいま🤣」" },
        { speaker: "青リンゴママ", text: "「・・・」" },
        { speaker: "青リンゴママ", text: "「どちら様ですか？」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "青リンゴママ", text: "「ご新規様？」" },
        { speaker: "ゆたかママ", text: "「わたしよ🤣」" },
        { speaker: "青リンゴママ", text: "「・・・」" },
        { speaker: "青リンゴママ", text: "「あ。」" },
        { speaker: "青リンゴママ", text: "「失踪した人だ。」" },
        { speaker: "聖奈", text: "「ゆたかママーーー！！」" },
        { speaker: "なお", text: "「生きてたーーーｗ」" },
        { speaker: "こころ", text: "「幽霊じゃない？」" },
        { speaker: "ゆたかママ", text: "「復帰するわよ！」" },
        { speaker: "青リンゴママ", text: "「無理。」" },
        { speaker: "ゆたかママ", text: "「え？」" },
        { speaker: "青リンゴママ", text: "「3か月、来なかったでしょ。」" },
        { speaker: "青リンゴママ", text: "「今わたし店長で、ママはわたしだから。」" },
        { speaker: "ゆたかママ", text: "「わたしの店よ🤣」" },
        { speaker: "青リンゴママ", text: "「アンタ元雇われ店長でしょ？」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { speaker: "青リンゴママ", text: "「働きたいなら。」" },
        { speaker: "青リンゴママ", text: "「バイトからならいいですよ？」" },
        { speaker: "ゆたかママ", text: "「・・・🤣」" },
        { text: "翌日" },
        { text: "ゆたかママ<br>あらため、<br>📛 新人スタッフ福原くん" },
        { speaker: "青リンゴママ", text: "「あれ、君、名前なんていったっけ？」" },
        { speaker: "新人スタッフ福原くん", text: "「福原です。心機一転がんばります。」" },
        { speaker: "青リンゴママ", text: "「あ、福原くん、グラス洗って。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「買い出し。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「遅い！もたもたしない！手を動かす！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「掃除。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい。」" },
        { speaker: "青リンゴママ", text: "「窓にホコリ残ってるわよ！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「ごめんで済むなら警察いらないのよ！」" },
        { speaker: "新人スタッフ福原くん", text: "「すみません。」" },
        { speaker: "青リンゴママ", text: "「次、トイレ掃除！」" },
        { speaker: "新人スタッフ福原くん", text: "「はい🤣」" },
        { speaker: "青リンゴママ", text: "「声が小さい。」" },
        { speaker: "新人スタッフ福原くん", text: "「はい青リンゴママ！」" },
        { speaker: "青リンゴママ", text: "「よろしい。今まで私がやってた仕事です。」" },
        { speaker: "青リンゴママ", text: "「全部やってくださいね！」" },
        { speaker: "新人スタッフ福原くん", text: "「今までの復讐じゃない！？🤣」" },
        { speaker: "青リンゴママ", text: "「気のせいです。」" },
        { text: "こうして。<br>元オーナーゆたかママは、<br>バーニコニコで新人アルバイトとなった。<br>そして初めて、<br>店長となった青リンゴママからいびられ続けるのであった。" },
        { text: "🍏 END" },
{ text: "図鑑登録" },
{ text: "🍏 青リンゴママゲット！" },

{ text: "図鑑登録" },
{ text: "📛 新人スタッフ福原くんゲット！" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
},
{
    id: "E10",
    title: "雇われママエンド",
    rate: 0,
    steps: [
        { image: "Yutaka.Barniconico.png", text: "104週間が終了した。<br>ゆたかママは、通帳を見つめていた。<br>目標だった独立資金には<br>届かなかった。" },
        { speaker: "ゆたかママ", text: "「だめだったかぁ～。」" },
        { speaker: "ゆたかママ", text: "「やっぱり独立って大変なんだねぇ😨」" },
        { speaker: "ゆたかママ", text: "「暴飲暴食」" },
        { text: "しばらく沈黙が流れた。<br>すると、" },
        { speaker: "聖奈", text: "「でもさ。」" },
        { speaker: "聖奈", text: "「この2年楽しかったじゃん😊」" },
        { speaker: "なお", text: "「そうそう！」" },
        { speaker: "こころ", text: "「ゆたかママがいたからみんな集まれたんだよ👿」" },
        { text: "ゆたかママは少し笑った。" },
        { speaker: "ゆたかママ", text: "「そっかぁ～。」" },
        { speaker: "ゆたかママ", text: "「別に独立だけが幸せじゃないか！」" },
        { speaker: "ゆたかママ", text: "「私はこれからも、、、」" },
        { speaker: "ゆたかママ", text: "「雇われママとして生きていくわ！🤣」" },
        { speaker: "みんな", text: "「それがいいー！！🍺」" },
        { speaker: "青リンゴ", text: "「じゃあ、おじさんは雇われママに雇われ続けてあげるw」" },
        { text: "その日も<br>バーニコニコには笑い声が響いていた。" },
        { text: "独立失敗<br>雇われママエンディング<br>達成" },
        { text: "図鑑登録" },
        { text: "No.999<br>雇われママゲット！<br>独立はできなかった。<br>でも、<br>仲間たちとの時間は<br>何ものにも代えられなかった。<br>【雇われママエンド解放】" }
    ],
    effects: {
        money: 0,
        energy: 0,
        stress: 0,
        weight: 0
    }
}
];
