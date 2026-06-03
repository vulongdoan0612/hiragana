export const GROUPS = {
  BASIC: 'basic',
  DAKUTEN: 'dakuten',
  HANDAKUTEN: 'handakuten',
  YOON: 'yoon',
};

export const katakanaData = [
  // ===== BASIC KATAKANA =====
  {
    id: 'kt_a', kana: 'ア', romaji: 'a', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ ア như bộ chân người đang chạy — "AH!" hét lên!',
    emoji: '🏃', illustration: '⛩️',
    examples: [{ word: 'アイス', romaji: 'aisu', meaning: 'kem (ice cream)' }, { word: 'アメリカ', romaji: 'Amerika', meaning: 'Mỹ' }],
  },
  {
    id: 'kt_i', kana: 'イ', romaji: 'i', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ イ như hai que giao nhau — "EE!" ngắn gọn!',
    emoji: '✂️', illustration: '🗼',
    examples: [{ word: 'イタリア', romaji: 'Itaria', meaning: 'Ý' }, { word: 'イメージ', romaji: 'imeeji', meaning: 'hình ảnh' }],
  },
  {
    id: 'kt_u', kana: 'ウ', romaji: 'u', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ ウ như vương miện nhỏ — "OO!" oai vệ!',
    emoji: '👑', illustration: '🌙',
    examples: [{ word: 'ウイルス', romaji: 'uirusu', meaning: 'virus' }, { word: 'ウォーター', romaji: 'wootaa', meaning: 'nước' }],
  },
  {
    id: 'kt_e', kana: 'エ', romaji: 'e', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ エ như chữ I trong hộp — "EH!" kỹ sư!',
    emoji: '🔧', illustration: '🏗️',
    examples: [{ word: 'エアコン', romaji: 'eakon', meaning: 'điều hòa' }, { word: 'エレベーター', romaji: 'erebeetaa', meaning: 'thang máy' }],
  },
  {
    id: 'kt_o', kana: 'オ', romaji: 'o', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ オ như cờ cắm trên bục — "OH!" ấn tượng!',
    emoji: '🚩', illustration: '🌊',
    examples: [{ word: 'オレンジ', romaji: 'orenji', meaning: 'cam' }, { word: 'オフィス', romaji: 'ofisu', meaning: 'văn phòng' }],
  },
  {
    id: 'kt_ka', kana: 'カ', romaji: 'ka', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ カ như lưỡi dao sắc — "KA-dao" cắt gọn!',
    emoji: '🗡️', illustration: '☕',
    examples: [{ word: 'カフェ', romaji: 'kafe', meaning: 'quán cà phê' }, { word: 'カメラ', romaji: 'kamera', meaning: 'máy ảnh' }],
  },
  {
    id: 'kt_ki', kana: 'キ', romaji: 'ki', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ キ như thập tự giữa có nét — "KI-tô!" thánh giá!',
    emoji: '✝️', illustration: '🔑',
    examples: [{ word: 'キッチン', romaji: 'kicchin', meaning: 'nhà bếp' }, { word: 'キャンプ', romaji: 'kyanpu', meaning: 'cắm trại' }],
  },
  {
    id: 'kt_ku', kana: 'ク', romaji: 'ku', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ ク như mỏ chim khoằm — "KU-ku!" chim kêu!',
    emoji: '🦅', illustration: '🎮',
    examples: [{ word: 'クラス', romaji: 'kurasu', meaning: 'lớp học' }, { word: 'クリスマス', romaji: 'Kurisumasu', meaning: 'Giáng sinh' }],
  },
  {
    id: 'kt_ke', kana: 'ケ', romaji: 'ke', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ ケ như cây có cành — "KE-cây" đứng thẳng!',
    emoji: '🌳', illustration: '🎂',
    examples: [{ word: 'ケーキ', romaji: 'keeki', meaning: 'bánh kem' }, { word: 'ケータイ', romaji: 'keetai', meaning: 'điện thoại di động' }],
  },
  {
    id: 'kt_ko', kana: 'コ', romaji: 'ko', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ コ như cái móc vuông — "KO" góc cạnh!',
    emoji: '📐', illustration: '☕',
    examples: [{ word: 'コーヒー', romaji: 'koohii', meaning: 'cà phê' }, { word: 'コンビニ', romaji: 'konbini', meaning: 'cửa hàng tiện lợi' }],
  },
  {
    id: 'kt_sa', kana: 'サ', romaji: 'sa', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ サ như 3 nét chéo vui — "SA!" nhảy samba!',
    emoji: '💃', illustration: '🌊',
    examples: [{ word: 'サービス', romaji: 'saabisu', meaning: 'dịch vụ' }, { word: 'サッカー', romaji: 'sakkaa', meaning: 'bóng đá' }],
  },
  {
    id: 'kt_shi', kana: 'シ', romaji: 'shi', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ シ như nụ cười có râu — "SHI!" mặt cười!',
    emoji: '😁', illustration: '🌿',
    examples: [{ word: 'シャツ', romaji: 'shatsu', meaning: 'áo sơ mi' }, { word: 'シネマ', romaji: 'shinema', meaning: 'rạp phim' }],
  },
  {
    id: 'kt_su', kana: 'ス', romaji: 'su', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ ス như cái đu quay — "SU-rrr!" quay tròn!',
    emoji: '🎡', illustration: '🍜',
    examples: [{ word: 'スポーツ', romaji: 'supootsu', meaning: 'thể thao' }, { word: 'スーパー', romaji: 'suupaa', meaning: 'siêu thị' }],
  },
  {
    id: 'kt_se', kana: 'セ', romaji: 'se', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ セ như cái ghế với lưng — "SE-ater" ghế sân khấu!',
    emoji: '💺', illustration: '🌍',
    examples: [{ word: 'セーター', romaji: 'seetaa', meaning: 'áo len' }, { word: 'センター', romaji: 'sentaa', meaning: 'trung tâm' }],
  },
  {
    id: 'kt_so', kana: 'ソ', romaji: 'so', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ ソ như cái muỗng lật ngược — "SO!" nhấc lên!',
    emoji: '🥄', illustration: '🐟',
    examples: [{ word: 'ソファ', romaji: 'sofa', meaning: 'ghế sofa' }, { word: 'ソース', romaji: 'soosu', meaning: 'sốt/nước xốt' }],
  },
  {
    id: 'kt_ta', kana: 'タ', romaji: 'ta', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ タ như sao đang rơi — "TA-DA!" xuất hiện!',
    emoji: '⭐', illustration: '🌮',
    examples: [{ word: 'タクシー', romaji: 'takushii', meaning: 'taxi' }, { word: 'タオル', romaji: 'taoru', meaning: 'khăn tắm' }],
  },
  {
    id: 'kt_chi', kana: 'チ', romaji: 'chi', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ チ như cái kéo mở sẵn — "CHI-cha!" cắt!',
    emoji: '✂️', illustration: '🍵',
    examples: [{ word: 'チーズ', romaji: 'chiizu', meaning: 'phô mai' }, { word: 'チケット', romaji: 'chiketto', meaning: 'vé' }],
  },
  {
    id: 'kt_tsu', kana: 'ツ', romaji: 'tsu', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ ツ như nụ cười lớn có răng — "TSU-nami!" vui lớn!',
    emoji: '😄', illustration: '🌊',
    examples: [{ word: 'ツアー', romaji: 'tsuaa', meaning: 'tour du lịch' }, { word: 'ツール', romaji: 'tsuuru', meaning: 'công cụ' }],
  },
  {
    id: 'kt_te', kana: 'テ', romaji: 'te', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ テ như ăng-ten TV — "TE-levision!" tivi!',
    emoji: '📺', illustration: '📡',
    examples: [{ word: 'テレビ', romaji: 'terebi', meaning: 'ti vi' }, { word: 'テスト', romaji: 'tesuto', meaning: 'bài kiểm tra' }],
  },
  {
    id: 'kt_to', kana: 'ト', romaji: 'to', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ ト như cái đinh với đầu — "TO-kyo!" đinh đóng!',
    emoji: '🔩', illustration: '🚂',
    examples: [{ word: 'トイレ', romaji: 'toire', meaning: 'nhà vệ sinh' }, { word: 'トマト', romaji: 'tomato', meaning: 'cà chua' }],
  },
  {
    id: 'kt_na', kana: 'ナ', romaji: 'na', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ナ như cây thánh giá nghiêng — "NA!" hành động!',
    emoji: '⚔️', illustration: '🍆',
    examples: [{ word: 'ナイフ', romaji: 'naifu', meaning: 'dao' }, { word: 'ナンバー', romaji: 'nanbaa', meaning: 'số' }],
  },
  {
    id: 'kt_ni', kana: 'ニ', romaji: 'ni', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ニ như hai gạch ngang — "NI-hao!" hai lần!',
    emoji: '〰️', illustration: '🥕',
    examples: [{ word: 'ニュース', romaji: 'nyuusu', meaning: 'tin tức' }, { word: 'ニンジン', romaji: 'ninjin', meaning: 'cà rốt' }],
  },
  {
    id: 'kt_nu', kana: 'ヌ', romaji: 'nu', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ヌ như sợi dây thắt nút — "NU-dles" mì rối!',
    emoji: '🧵', illustration: '🍜',
    examples: [{ word: 'ヌードル', romaji: 'nuudoru', meaning: 'mì' }, { word: 'ヌード', romaji: 'nuudo', meaning: 'nude' }],
  },
  {
    id: 'kt_ne', kana: 'ネ', romaji: 'ne', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ネ như cái nơ trên quà — "NE-twork!" mạng lưới!',
    emoji: '🎁', illustration: '🐱',
    examples: [{ word: 'ネット', romaji: 'netto', meaning: 'mạng internet' }, { word: 'ネクタイ', romaji: 'nekutai', meaning: 'cà vạt' }],
  },
  {
    id: 'kt_no', kana: 'ノ', romaji: 'no', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ノ như nét gạch chéo — "NO!" từ chối thẳng!',
    emoji: '🚫', illustration: '📓',
    examples: [{ word: 'ノート', romaji: 'nooto', meaning: 'vở ghi chú' }, { word: 'ノルウェー', romaji: 'Noruwee', meaning: 'Na Uy' }],
  },
  {
    id: 'kt_ha', kana: 'ハ', romaji: 'ha', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ハ như hai người đứng tựa nhau — "HA-HA!" cười!',
    emoji: '😄', illustration: '🎌',
    examples: [{ word: 'ハンバーガー', romaji: 'hanbaagaa', meaning: 'hamburger' }, { word: 'ハート', romaji: 'haato', meaning: 'trái tim' }],
  },
  {
    id: 'kt_hi', kana: 'ヒ', romaji: 'hi', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ヒ như cái lưỡi liềm — "HI!" cắt gặt!',
    emoji: '🌾', illustration: '☀️',
    examples: [{ word: 'ヒーロー', romaji: 'hiiroo', meaning: 'anh hùng' }, { word: 'ヒント', romaji: 'hinto', meaning: 'gợi ý' }],
  },
  {
    id: 'kt_fu', kana: 'フ', romaji: 'fu', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ フ như cái móc treo đồ — "FU!" thổi nhẹ!',
    emoji: '🌬️', illustration: '🗻',
    examples: [{ word: 'フランス', romaji: 'Furansu', meaning: 'Pháp' }, { word: 'フード', romaji: 'fuudo', meaning: 'thức ăn' }],
  },
  {
    id: 'kt_he', kana: 'ヘ', romaji: 'he', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ヘ như mái nhà nhọn — "HE-lo!" từ trên cao!',
    emoji: '🏔️', illustration: '🚁',
    examples: [{ word: 'ヘルメット', romaji: 'herumetto', meaning: 'mũ bảo hiểm' }, { word: 'ヘアー', romaji: 'heaa', meaning: 'tóc' }],
  },
  {
    id: 'kt_ho', kana: 'ホ', romaji: 'ho', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ホ như cây thập tự với gốc — "HO-tel!" khách sạn!',
    emoji: '🏨', illustration: '⭐',
    examples: [{ word: 'ホテル', romaji: 'hoteru', meaning: 'khách sạn' }, { word: 'ホームページ', romaji: 'hoomu peeji', meaning: 'trang chủ web' }],
  },
  {
    id: 'kt_ma', kana: 'マ', romaji: 'ma', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ マ như mũi tên nhỏ xuống — "MA-nual!" sách hướng dẫn!',
    emoji: '📖', illustration: '🎭',
    examples: [{ word: 'マップ', romaji: 'mappu', meaning: 'bản đồ' }, { word: 'マナー', romaji: 'manaa', meaning: 'phong cách' }],
  },
  {
    id: 'kt_mi', kana: 'ミ', romaji: 'mi', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ ミ như 3 nét ngắn song song — "MI-crophone!" ba gạch!',
    emoji: '🎤', illustration: '🌊',
    examples: [{ word: 'ミルク', romaji: 'miruku', meaning: 'sữa' }, { word: 'ミュージック', romaji: 'myuujikku', meaning: 'âm nhạc' }],
  },
  {
    id: 'kt_mu', kana: 'ム', romaji: 'mu', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ ム như mỏ chim từ trên nhìn xuống — "MU!" bò kêu!',
    emoji: '🐄', illustration: '🌙',
    examples: [{ word: 'ムービー', romaji: 'muubii', meaning: 'phim' }, { word: 'ムード', romaji: 'muudo', meaning: 'tâm trạng' }],
  },
  {
    id: 'kt_me', kana: 'メ', romaji: 'me', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ メ như chữ X — "ME-nu!" thực đơn!',
    emoji: '📋', illustration: '🎯',
    examples: [{ word: 'メニュー', romaji: 'menyuu', meaning: 'thực đơn' }, { word: 'メール', romaji: 'meeru', meaning: 'email' }],
  },
  {
    id: 'kt_mo', kana: 'モ', romaji: 'mo', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ モ như tấm lưới dệt — "MO-del!" người mẫu!',
    emoji: '👗', illustration: '🎣',
    examples: [{ word: 'モデル', romaji: 'moderu', meaning: 'người mẫu/model' }, { word: 'モール', romaji: 'mooru', meaning: 'trung tâm thương mại' }],
  },
  {
    id: 'kt_ya', kana: 'ヤ', romaji: 'ya', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ ヤ như mũi giáo — "YA!" phóng đi!',
    emoji: '🏹', illustration: '🎪',
    examples: [{ word: 'ヤード', romaji: 'yaado', meaning: 'yard (đơn vị đo)' }, { word: 'ヤシ', romaji: 'yashi', meaning: 'cây dừa' }],
  },
  {
    id: 'kt_yu', kana: 'ユ', romaji: 'yu', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ ユ như chữ U vuông — "YU-tube!" xem video!',
    emoji: '▶️', illustration: '🛁',
    examples: [{ word: 'ユーチューブ', romaji: 'yuuchuubu', meaning: 'YouTube' }, { word: 'ユニフォーム', romaji: 'yunifoomu', meaning: 'đồng phục' }],
  },
  {
    id: 'kt_yo', kana: 'ヨ', romaji: 'yo', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ ヨ như 3 nét ngang trong khung — "YO-ga!" tập yoga!',
    emoji: '🧘', illustration: '🌅',
    examples: [{ word: 'ヨーロッパ', romaji: 'Yooroppa', meaning: 'châu Âu' }, { word: 'ヨガ', romaji: 'yoga', meaning: 'yoga' }],
  },
  {
    id: 'kt_ra', kana: 'ラ', romaji: 'ra', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ ラ như cái lá ngã — "RA-men!" mì ramen!',
    emoji: '🍜', illustration: '🌀',
    examples: [{ word: 'ラジオ', romaji: 'rajio', meaning: 'radio' }, { word: 'ライス', romaji: 'raisu', meaning: 'cơm' }],
  },
  {
    id: 'kt_ri', kana: 'リ', romaji: 'ri', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ リ như hai que đũa thẳng — "RI!" gọn gàng!',
    emoji: '🥢', illustration: '🍡',
    examples: [{ word: 'リモコン', romaji: 'rimokon', meaning: 'điều khiển từ xa' }, { word: 'リスト', romaji: 'risuto', meaning: 'danh sách' }],
  },
  {
    id: 'kt_ru', kana: 'ル', romaji: 'ru', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ ル như cái nạng chữ Y — "RU-le!" quy tắc!',
    emoji: '📏', illustration: '💧',
    examples: [{ word: 'ルール', romaji: 'ruuru', meaning: 'quy tắc' }, { word: 'ルーム', romaji: 'ruumu', meaning: 'phòng' }],
  },
  {
    id: 'kt_re', kana: 'レ', romaji: 're', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ レ như nét gạch cong lên — "RE-sto!" nhà hàng!',
    emoji: '🍽️', illustration: '🎁',
    examples: [{ word: 'レストラン', romaji: 'resutoran', meaning: 'nhà hàng' }, { word: 'レモン', romaji: 'remon', meaning: 'chanh' }],
  },
  {
    id: 'kt_ro', kana: 'ロ', romaji: 'ro', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ ロ như hình chữ nhật — "RO-bot!" hộp vuông!',
    emoji: '🤖', illustration: '🔄',
    examples: [{ word: 'ロボット', romaji: 'robotto', meaning: 'robot' }, { word: 'ロック', romaji: 'rokku', meaning: 'nhạc rock' }],
  },
  {
    id: 'kt_wa', kana: 'ワ', romaji: 'wa', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Chữ ワ như cái cốc thủy tinh — "WA-ter!" nước!',
    emoji: '🥂', illustration: '🍣',
    examples: [{ word: 'ワイン', romaji: 'wain', meaning: 'rượu vang' }, { word: 'ワールド', romaji: 'waarudo', meaning: 'thế giới' }],
  },
  {
    id: 'kt_wo', kana: 'ヲ', romaji: 'wo/o', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Chữ ヲ là trợ từ tân ngữ trong katakana — "WO" rất hiếm gặp!',
    emoji: '📌', illustration: '🎯',
    examples: [{ word: 'ヲタク', romaji: 'wotaku', meaning: 'otaku (mọt)' }],
  },
  {
    id: 'kt_n', kana: 'ン', romaji: 'n', group: GROUPS.BASIC, row: 'n-special',
    mnemonic: 'Chữ ン như nét chéo nhỏ — "N" âm kết thúc gọn!',
    emoji: '✔️', illustration: '🎵',
    examples: [{ word: 'パン', romaji: 'pan', meaning: 'bánh mì' }, { word: 'ランチ', romaji: 'ranchi', meaning: 'bữa trưa' }],
  },

  // ===== DAKUTEN (voiced) =====
  {
    id: 'kt_ga', kana: 'ガ', romaji: 'ga', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ガ = カ + ゛"GA" — café đổi thành gara!',
    emoji: '🏎️', illustration: '🎸',
    examples: [{ word: 'ガラス', romaji: 'garasu', meaning: 'kính' }, { word: 'ガソリン', romaji: 'gasorin', meaning: 'xăng' }],
  },
  {
    id: 'kt_gi', kana: 'ギ', romaji: 'gi', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ギ = キ + ゛"GI" — guitar rền vang!',
    emoji: '🎸', illustration: '🌟',
    examples: [{ word: 'ギター', romaji: 'gitaa', meaning: 'đàn guitar' }, { word: 'ギリシャ', romaji: 'Girisha', meaning: 'Hy Lạp' }],
  },
  {
    id: 'kt_gu', kana: 'グ', romaji: 'gu', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'グ = ク + ゛"GU" — google mạnh mẽ!',
    emoji: '🔍', illustration: '💥',
    examples: [{ word: 'グラム', romaji: 'guramu', meaning: 'gram' }, { word: 'グループ', romaji: 'guruupu', meaning: 'nhóm' }],
  },
  {
    id: 'kt_ge', kana: 'ゲ', romaji: 'ge', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ゲ = ケ + ゛"GE" — game bắt đầu!',
    emoji: '🎮', illustration: '🔮',
    examples: [{ word: 'ゲーム', romaji: 'geemu', meaning: 'trò chơi' }, { word: 'ゲスト', romaji: 'gesuto', meaning: 'khách mời' }],
  },
  {
    id: 'kt_go', kana: 'ゴ', romaji: 'go', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ゴ = コ + ゛"GO!" — xuất phát!',
    emoji: '🏁', illustration: '🥅',
    examples: [{ word: 'ゴール', romaji: 'gooru', meaning: 'bàn thắng/mục tiêu' }, { word: 'ゴリラ', romaji: 'gorira', meaning: 'khỉ đột' }],
  },
  {
    id: 'kt_za', kana: 'ザ', romaji: 'za', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ザ = サ + ゛"ZA" — pizza thật ngon!',
    emoji: '🍕', illustration: '🌩️',
    examples: [{ word: 'ザ・ビートルズ', romaji: 'Za Biitooru zu', meaning: 'The Beatles' }, { word: 'ザック', romaji: 'zakku', meaning: 'ba lô' }],
  },
  {
    id: 'kt_ji', kana: 'ジ', romaji: 'ji', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ジ = シ + ゛"JI" — juice ngọt!',
    emoji: '🧃', illustration: '🌀',
    examples: [{ word: 'ジュース', romaji: 'juusu', meaning: 'nước ép' }, { word: 'ジム', romaji: 'jimu', meaning: 'phòng gym' }],
  },
  {
    id: 'kt_zu', kana: 'ズ', romaji: 'zu', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ズ = ス + ゛"ZU" — zoom vào!',
    emoji: '🔍', illustration: '💫',
    examples: [{ word: 'ズボン', romaji: 'zubon', meaning: 'quần dài' }, { word: 'ズーム', romaji: 'zuumu', meaning: 'zoom' }],
  },
  {
    id: 'kt_ze', kana: 'ゼ', romaji: 'ze', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ゼ = セ + ゛"ZE" — zero điểm!',
    emoji: '0️⃣', illustration: '🌿',
    examples: [{ word: 'ゼロ', romaji: 'zero', meaning: 'không (số 0)' }, { word: 'ゼリー', romaji: 'zerii', meaning: 'thạch (jelly)' }],
  },
  {
    id: 'kt_zo', kana: 'ゾ', romaji: 'zo', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ゾ = ソ + ゛"ZO" — zone năng lượng!',
    emoji: '⚡', illustration: '💀',
    examples: [{ word: 'ゾーン', romaji: 'zoon', meaning: 'khu vực/zone' }, { word: 'ゾンビ', romaji: 'zonbi', meaning: 'zombie' }],
  },
  {
    id: 'kt_da', kana: 'ダ', romaji: 'da', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ダ = タ + ゛"DA" — dance mạnh mẽ!',
    emoji: '🕺', illustration: '💪',
    examples: [{ word: 'ダンス', romaji: 'dansu', meaning: 'nhảy múa' }, { word: 'ダイヤ', romaji: 'daiya', meaning: 'kim cương' }],
  },
  {
    id: 'kt_di', kana: 'ヂ', romaji: 'di/ji', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ヂ = チ + ゛phát âm như "ji" — ít dùng trong tiếng Nhật hiện đại',
    emoji: '📝', illustration: '🔤',
    examples: [{ word: 'ヂ', romaji: 'di/ji', meaning: '(ký tự hiếm dùng)' }],
  },
  {
    id: 'kt_du', kana: 'ヅ', romaji: 'du/zu', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ヅ = ツ + ゛phát âm như "zu" — ít dùng trong tiếng Nhật hiện đại',
    emoji: '📝', illustration: '🔤',
    examples: [{ word: 'ヅ', romaji: 'du/zu', meaning: '(ký tự hiếm dùng)' }],
  },
  {
    id: 'kt_de', kana: 'デ', romaji: 'de', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'デ = テ + ゛"DE" — design đẹp!',
    emoji: '🎨', illustration: '🎯',
    examples: [{ word: 'デザイン', romaji: 'dezain', meaning: 'thiết kế' }, { word: 'デート', romaji: 'deeto', meaning: 'hẹn hò' }],
  },
  {
    id: 'kt_do', kana: 'ド', romaji: 'do', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ド = ト + ゛"DO" — door gõ cửa!',
    emoji: '🚪', illustration: '🎵',
    examples: [{ word: 'ドア', romaji: 'doa', meaning: 'cửa' }, { word: 'ドイツ', romaji: 'Doitsu', meaning: 'Đức' }],
  },
  {
    id: 'kt_ba', kana: 'バ', romaji: 'ba', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'バ = ハ + ゛"BA" — bus đến rồi!',
    emoji: '🚌', illustration: '🌹',
    examples: [{ word: 'バス', romaji: 'basu', meaning: 'xe buýt' }, { word: 'バナナ', romaji: 'banana', meaning: 'chuối' }],
  },
  {
    id: 'kt_bi', kana: 'ビ', romaji: 'bi', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ビ = ヒ + ゛"BI" — beer lạnh!',
    emoji: '🍺', illustration: '⭐',
    examples: [{ word: 'ビール', romaji: 'biiru', meaning: 'bia' }, { word: 'ビジネス', romaji: 'bijinesu', meaning: 'kinh doanh' }],
  },
  {
    id: 'kt_bu', kana: 'ブ', romaji: 'bu', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ブ = フ + ゛"BU" — blue xanh!',
    emoji: '💙', illustration: '💨',
    examples: [{ word: 'ブルー', romaji: 'buruu', meaning: 'màu xanh dương' }, { word: 'ブランド', romaji: 'burando', meaning: 'thương hiệu' }],
  },
  {
    id: 'kt_be', kana: 'ベ', romaji: 'be', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ベ = ヘ + ゛"BE" — bed giường ngủ!',
    emoji: '🛏️', illustration: '🐍',
    examples: [{ word: 'ベッド', romaji: 'beddo', meaning: 'giường' }, { word: 'ベスト', romaji: 'besuto', meaning: 'tốt nhất' }],
  },
  {
    id: 'kt_bo', kana: 'ボ', romaji: 'bo', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ボ = ホ + ゛"BO" — bowling!',
    emoji: '🎳', illustration: '🌟',
    examples: [{ word: 'ボール', romaji: 'booru', meaning: 'bóng' }, { word: 'ボランティア', romaji: 'borantia', meaning: 'tình nguyện' }],
  },

  // ===== HANDAKUTEN (semi-voiced) =====
  {
    id: 'kt_pa', kana: 'パ', romaji: 'pa', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'パ = ハ + ゜"PA" — party bắt đầu!',
    emoji: '🎉', illustration: '🎊',
    examples: [{ word: 'パーティー', romaji: 'paatii', meaning: 'bữa tiệc' }, { word: 'パン', romaji: 'pan', meaning: 'bánh mì' }],
  },
  {
    id: 'kt_pi', kana: 'ピ', romaji: 'pi', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ピ = ヒ + ゜"PI" — pizza ngon!',
    emoji: '🍕', illustration: '💡',
    examples: [{ word: 'ピザ', romaji: 'piza', meaning: 'pizza' }, { word: 'ピアノ', romaji: 'piano', meaning: 'đàn piano' }],
  },
  {
    id: 'kt_pu', kana: 'プ', romaji: 'pu', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'プ = フ + ゜"PU" — pool hồ bơi!',
    emoji: '🏊', illustration: '🎈',
    examples: [{ word: 'プール', romaji: 'puuru', meaning: 'hồ bơi' }, { word: 'プリンター', romaji: 'purintaa', meaning: 'máy in' }],
  },
  {
    id: 'kt_pe', kana: 'ペ', romaji: 'pe', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ペ = ヘ + ゜"PE" — pen bút viết!',
    emoji: '🖊️', illustration: '🌠',
    examples: [{ word: 'ペン', romaji: 'pen', meaning: 'bút' }, { word: 'ペット', romaji: 'petto', meaning: 'thú cưng' }],
  },
  {
    id: 'kt_po', kana: 'ポ', romaji: 'po', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ポ = ホ + ゜"PO" — pokemon xuất hiện!',
    emoji: '🎮', illustration: '🫧',
    examples: [{ word: 'ポケット', romaji: 'poketto', meaning: 'túi' }, { word: 'ポスター', romaji: 'posutaa', meaning: 'áp phích' }],
  },

  // ===== YOON (combination sounds) =====
  {
    id: 'kt_kya', kana: 'キャ', romaji: 'kya', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'キャ = キ + small ャ → "KYA!" tiếng la vui!',
    emoji: '😱', illustration: '🎠',
    examples: [{ word: 'キャンプ', romaji: 'kyanpu', meaning: 'cắm trại' }, { word: 'キャラクター', romaji: 'kyarakutaa', meaning: 'nhân vật' }],
  },
  {
    id: 'kt_kyu', kana: 'キュ', romaji: 'kyu', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'キュ = キ + small ュ → "KYU" cute dễ thương!',
    emoji: '🥰', illustration: '🎯',
    examples: [{ word: 'キュート', romaji: 'kyuuto', meaning: 'dễ thương' }, { word: 'キューバ', romaji: 'Kyuuba', meaning: 'Cuba' }],
  },
  {
    id: 'kt_kyo', kana: 'キョ', romaji: 'kyo', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'キョ = キ + small ョ → "KYO" - Tokyo!',
    emoji: '🗼', illustration: '🏯',
    examples: [{ word: 'キョート', romaji: 'Kyooto', meaning: 'Kyoto' }, { word: 'キョウ', romaji: 'kyou', meaning: 'hôm nay' }],
  },
  {
    id: 'kt_sha', kana: 'シャ', romaji: 'sha', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'シャ = シ + small ャ → "SHA" - shower!',
    emoji: '🚿', illustration: '🎸',
    examples: [{ word: 'シャワー', romaji: 'shawaa', meaning: 'vòi sen' }, { word: 'シャツ', romaji: 'shatsu', meaning: 'áo sơ mi' }],
  },
  {
    id: 'kt_shu', kana: 'シュ', romaji: 'shu', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'シュ = シ + small ュ → "SHU" - shoes giày!',
    emoji: '👟', illustration: '🌺',
    examples: [{ word: 'シュート', romaji: 'shuuto', meaning: 'cú sút' }, { word: 'シュール', romaji: 'shuuru', meaning: 'siêu thực' }],
  },
  {
    id: 'kt_sho', kana: 'ショ', romaji: 'sho', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'ショ = シ + small ョ → "SHO" - shopping!',
    emoji: '🛍️', illustration: '🏯',
    examples: [{ word: 'ショッピング', romaji: 'shoppingu', meaning: 'mua sắm' }, { word: 'ショー', romaji: 'shoo', meaning: 'buổi biểu diễn' }],
  },
  {
    id: 'kt_cha', kana: 'チャ', romaji: 'cha', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'チャ = チ + small ャ → "CHA" - chance cơ hội!',
    emoji: '🍀', illustration: '🌿',
    examples: [{ word: 'チャンス', romaji: 'chansu', meaning: 'cơ hội' }, { word: 'チャット', romaji: 'chatto', meaning: 'trò chuyện' }],
  },
  {
    id: 'kt_chu', kana: 'チュ', romaji: 'chu', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'チュ = チ + small ュ → "CHU" - tube ống!',
    emoji: '📺', illustration: '💕',
    examples: [{ word: 'チューブ', romaji: 'chuubu', meaning: 'ống' }, { word: 'チューリップ', romaji: 'chuurippu', meaning: 'hoa tulip' }],
  },
  {
    id: 'kt_cho', kana: 'チョ', romaji: 'cho', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'チョ = チ + small ョ → "CHO" - chocolate!',
    emoji: '🍫', illustration: '🦋',
    examples: [{ word: 'チョコレート', romaji: 'chokoreeto', meaning: 'sô cô la' }, { word: 'チョイス', romaji: 'choisu', meaning: 'lựa chọn' }],
  },
  {
    id: 'kt_nya', kana: 'ニャ', romaji: 'nya', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'ニャ = ニ + small ャ → "NYA" - mèo kêu!',
    emoji: '🐱', illustration: '😺',
    examples: [{ word: 'ニャンコ', romaji: 'nyanko', meaning: 'mèo con (dễ thương)' }],
  },
  {
    id: 'kt_nyu', kana: 'ニュ', romaji: 'nyu', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'ニュ = ニ + small ュ → "NYU" - news tin tức!',
    emoji: '📰', illustration: '📚',
    examples: [{ word: 'ニュース', romaji: 'nyuusu', meaning: 'tin tức' }, { word: 'ニューヨーク', romaji: 'Nyuuyooku', meaning: 'New York' }],
  },
  {
    id: 'kt_nyo', kana: 'ニョ', romaji: 'nyo', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'ニョ = ニ + small ョ → "NYO" ít gặp trong loan words!',
    emoji: '🌿', illustration: '🎋',
    examples: [{ word: 'ニョッキ', romaji: 'nyokki', meaning: 'gnocchi' }],
  },
  {
    id: 'kt_hya', kana: 'ヒャ', romaji: 'hya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ヒャ = ヒ + small ャ → "HYA" - hiatus ngắn!',
    emoji: '💯', illustration: '🔥',
    examples: [{ word: 'ヒャクえん', romaji: 'hyaku en', meaning: '100 yên' }],
  },
  {
    id: 'kt_hyu', kana: 'ヒュ', romaji: 'hyu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ヒュ = ヒ + small ュ → "HYU" - human người!',
    emoji: '👤', illustration: '💨',
    examples: [{ word: 'ヒューマン', romaji: 'hyuuman', meaning: 'con người' }],
  },
  {
    id: 'kt_hyo', kana: 'ヒョ', romaji: 'hyo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ヒョ = ヒ + small ョ → "HYO" ít gặp!',
    emoji: '😆', illustration: '🎭',
    examples: [{ word: 'ヒョウ', romaji: 'hyou', meaning: 'báo hoa mai' }],
  },
  {
    id: 'kt_mya', kana: 'ミャ', romaji: 'mya', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'ミャ = ミ + small ャ → "MYA" - Myanmar!',
    emoji: '🌏', illustration: '🎵',
    examples: [{ word: 'ミャンマー', romaji: 'Myanmaa', meaning: 'Myanmar' }],
  },
  {
    id: 'kt_myu', kana: 'ミュ', romaji: 'myu', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'ミュ = ミ + small ュ → "MYU" - music âm nhạc!',
    emoji: '🎵', illustration: '🎶',
    examples: [{ word: 'ミュージック', romaji: 'myuujikku', meaning: 'âm nhạc' }, { word: 'ミュージアム', romaji: 'myuujiamu', meaning: 'bảo tàng' }],
  },
  {
    id: 'kt_myo', kana: 'ミョ', romaji: 'myo', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'ミョ = ミ + small ョ → "MYO" ít gặp!',
    emoji: '🤔', illustration: '✨',
    examples: [{ word: 'ミョウガ', romaji: 'myouga', meaning: 'gừng nhật' }],
  },
  {
    id: 'kt_rya', kana: 'リャ', romaji: 'rya', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'リャ = リ + small ャ → "RYA" ít gặp!',
    emoji: '🌊', illustration: '💫',
    examples: [{ word: 'リャマ', romaji: 'ryama', meaning: 'lạc đà llama' }],
  },
  {
    id: 'kt_ryu', kana: 'リュ', romaji: 'ryu', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'リュ = リ + small ュ → "RYU" - rucksack ba lô!',
    emoji: '🎒', illustration: '⚡',
    examples: [{ word: 'リュック', romaji: 'ryukku', meaning: 'ba lô' }, { word: 'リュービン', romaji: 'ryuubin', meaning: 'bạch kim' }],
  },
  {
    id: 'kt_ryo', kana: 'リョ', romaji: 'ryo', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'リョ = リ + small ョ → "RYO" ít gặp trong loan words!',
    emoji: '🏨', illustration: '🌸',
    examples: [{ word: 'リョカン', romaji: 'ryokan', meaning: 'nhà trọ truyền thống Nhật' }],
  },
  {
    id: 'kt_gya', kana: 'ギャ', romaji: 'gya', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ギャ = ギ + small ャ → "GYA!" - gap khoảng cách!',
    emoji: '↔️', illustration: '⚡',
    examples: [{ word: 'ギャップ', romaji: 'gyappu', meaning: 'khoảng cách' }, { word: 'ギャラリー', romaji: 'gyararii', meaning: 'phòng triển lãm' }],
  },
  {
    id: 'kt_gyu', kana: 'ギュ', romaji: 'gyu', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ギュ = ギ + small ュ → "GYU" thịt bò ngon!',
    emoji: '🥩', illustration: '🐄',
    examples: [{ word: 'ギュウニュウ', romaji: 'gyuunyuu', meaning: 'sữa bò' }, { word: 'ギュッと', romaji: 'gyutto', meaning: 'ôm chặt' }],
  },
  {
    id: 'kt_gyo', kana: 'ギョ', romaji: 'gyo', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ギョ = ギ + small ョ → "GYO" - gyoza!',
    emoji: '🥟', illustration: '🎣',
    examples: [{ word: 'ギョーザ', romaji: 'gyooza', meaning: 'há cảo chiên' }],
  },
  {
    id: 'kt_ja', kana: 'ジャ', romaji: 'ja', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'ジャ = ジ + small ャ → "JA" - jazz nhạc jazz!',
    emoji: '🎷', illustration: '🌀',
    examples: [{ word: 'ジャズ', romaji: 'jazu', meaning: 'nhạc jazz' }, { word: 'ジャケット', romaji: 'jaketto', meaning: 'áo khoác' }],
  },
  {
    id: 'kt_ju', kana: 'ジュ', romaji: 'ju', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'ジュ = ジ + small ュ → "JU" - juice nước!',
    emoji: '🧃', illustration: '💪',
    examples: [{ word: 'ジュース', romaji: 'juusu', meaning: 'nước ép' }, { word: 'ジュエリー', romaji: 'juerii', meaning: 'trang sức' }],
  },
  {
    id: 'kt_jo', kana: 'ジョ', romaji: 'jo', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'ジョ = ジ + small ョ → "JO" - jogging chạy bộ!',
    emoji: '🏃', illustration: '📖',
    examples: [{ word: 'ジョギング', romaji: 'jogingu', meaning: 'chạy bộ' }, { word: 'ジョーク', romaji: 'jooku', meaning: 'trò đùa' }],
  },
  {
    id: 'kt_bya', kana: 'ビャ', romaji: 'bya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ビャ = ビ + small ャ → "BYA" âm hiếm gặp!',
    emoji: '✨', illustration: '💫',
    examples: [{ word: 'ビャクヤ', romaji: 'byakuya', meaning: 'đêm trắng' }],
  },
  {
    id: 'kt_byu', kana: 'ビュ', romaji: 'byu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ビュ = ビ + small ュ → "BYU" - bureau văn phòng!',
    emoji: '🗂️', illustration: '🌬️',
    examples: [{ word: 'ビュッフェ', romaji: 'byuffe', meaning: 'buffet' }],
  },
  {
    id: 'kt_byo', kana: 'ビョ', romaji: 'byo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ビョ = ビ + small ョ → "BYO" ít gặp!',
    emoji: '🏥', illustration: '💊',
    examples: [{ word: 'ビョウイン', romaji: 'byouin', meaning: 'bệnh viện' }],
  },
  {
    id: 'kt_pya', kana: 'ピャ', romaji: 'pya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ピャ = ピ + small ャ → "PYA!" rất hiếm!',
    emoji: '🎉', illustration: '✨',
    examples: [{ word: 'ピャア', romaji: 'pyaa', meaning: 'ồ! (cảm thán)' }],
  },
  {
    id: 'kt_pyu', kana: 'ピュ', romaji: 'pyu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ピュ = ピ + small ュ → "PYU" - pure trong sáng!',
    emoji: '💧', illustration: '💫',
    examples: [{ word: 'ピュア', romaji: 'pyua', meaning: 'thuần khiết' }],
  },
  {
    id: 'kt_pyo', kana: 'ピョ', romaji: 'pyo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ピョ = ピ + small ョ → "PYO" như thỏ nhảy!',
    emoji: '🐰', illustration: '🌸',
    examples: [{ word: 'ピョンピョン', romaji: 'pyonpyon', meaning: 'nhảy lò cò' }],
  },
];

export const getByGroup = (group) => katakanaData.filter(k => k.group === group);
export const getBasic = () => getByGroup(GROUPS.BASIC);
export const getDakuten = () => getByGroup(GROUPS.DAKUTEN);
export const getHandakuten = () => getByGroup(GROUPS.HANDAKUTEN);
export const getYoon = () => getByGroup(GROUPS.YOON);

export const groupLabels = {
  [GROUPS.BASIC]: 'Katakana Cơ Bản',
  [GROUPS.DAKUTEN]: 'Âm Đục (Dakuten ゛)',
  [GROUPS.HANDAKUTEN]: 'Âm Bán Đục (Handakuten ゜)',
  [GROUPS.YOON]: 'Âm Ghép (Yoon)',
};

export const ROW_LABELS = {
  'a-row':     'ア行 (a-o)',
  'k-row':     'カ行 (ka-ko)',
  's-row':     'サ行 (sa-so)',
  't-row':     'タ行 (ta-to)',
  'n-row':     'ナ行 (na-no)',
  'h-row':     'ハ行 (ha-ho)',
  'm-row':     'マ行 (ma-mo)',
  'y-row':     'ヤ行 (ya-yo)',
  'r-row':     'ラ行 (ra-ro)',
  'w-row':     'ワ行 (wa-wo)',
  'n-special': 'ン (n)',
};

export const BASIC_ROWS = Object.keys(ROW_LABELS);

export const characterOfTheDay = () => {
  const seed = Math.floor(Date.now() / 86400000);
  return katakanaData[seed % katakanaData.length];
};
