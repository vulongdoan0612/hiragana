export const GROUPS = {
  BASIC: 'basic',
  DAKUTEN: 'dakuten',
  HANDAKUTEN: 'handakuten',
  YOON: 'yoon',
};

export const hiraganaData = [
  // ===== BASIC HIRAGANA =====
  {
    id: 'a', kana: 'あ', romaji: 'a', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ あ trông như người há miệng kêu "AH!" — miệng mở to!',
    emoji: '😮', illustration: '🌸',
    examples: [{ word: 'あめ', romaji: 'ame', meaning: 'mưa' }, { word: 'あお', romaji: 'ao', meaning: 'xanh lam' }],
  },
  {
    id: 'i', kana: 'い', romaji: 'i', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ い trông như 2 người đứng cạnh nhau, nói "EE"',
    emoji: '👥', illustration: '🦷',
    examples: [{ word: 'いぬ', romaji: 'inu', meaning: 'chó' }, { word: 'いえ', romaji: 'ie', meaning: 'nhà' }],
  },
  {
    id: 'u', kana: 'う', romaji: 'u', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ う như cái móc câu cá — "OO" khi kéo cần câu lên!',
    emoji: '🎣', illustration: '🐟',
    examples: [{ word: 'うみ', romaji: 'umi', meaning: 'biển' }, { word: 'うた', romaji: 'uta', meaning: 'bài hát' }],
  },
  {
    id: 'e', kana: 'え', romaji: 'e', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ え trông như bức tranh đang vẽ — "EH" khi ngạc nhiên!',
    emoji: '🎨', illustration: '🖼️',
    examples: [{ word: 'えき', romaji: 'eki', meaning: 'ga tàu' }, { word: 'えん', romaji: 'en', meaning: 'yên (tiền)' }],
  },
  {
    id: 'o', kana: 'お', romaji: 'o', group: GROUPS.BASIC, row: 'a-row',
    mnemonic: 'Chữ お như khuôn mặt mở miệng tròn "OH!" ngạc nhiên!',
    emoji: '😲', illustration: '🍡',
    examples: [{ word: 'おかあ', romaji: 'okaa', meaning: 'mẹ' }, { word: 'おに', romaji: 'oni', meaning: 'quỷ' }],
  },
  {
    id: 'ka', kana: 'か', romaji: 'ka', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ か như cái kéo mở ra — "KA-SNAP!"',
    emoji: '✂️', illustration: '🔑',
    examples: [{ word: 'かさ', romaji: 'kasa', meaning: 'ô/dù' }, { word: 'かわ', romaji: 'kawa', meaning: 'sông' }],
  },
  {
    id: 'ki', kana: 'き', romaji: 'ki', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ き như cái chìa khóa — "KI" mở cửa!',
    emoji: '🗝️', illustration: '🌳',
    examples: [{ word: 'きく', romaji: 'kiku', meaning: 'nghe / cúc' }, { word: 'きん', romaji: 'kin', meaning: 'vàng' }],
  },
  {
    id: 'ku', kana: 'く', romaji: 'ku', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ く như cái miệng chim cúc cúc "KU-KU!"',
    emoji: '🐦', illustration: '🐊',
    examples: [{ word: 'くも', romaji: 'kumo', meaning: 'mây' }, { word: 'くつ', romaji: 'kutsu', meaning: 'giày' }],
  },
  {
    id: 'ke', kana: 'け', romaji: 'ke', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ け trông như cái kệ sách — "KE-kệ"!',
    emoji: '📚', illustration: '🏮',
    examples: [{ word: 'けむり', romaji: 'kemuri', meaning: 'khói' }, { word: 'けが', romaji: 'kega', meaning: 'vết thương' }],
  },
  {
    id: 'ko', kana: 'こ', romaji: 'ko', group: GROUPS.BASIC, row: 'k-row',
    mnemonic: 'Chữ こ như 2 đường nằm ngang — "KO" như hai lớp!',
    emoji: '〰️', illustration: '🎏',
    examples: [{ word: 'こい', romaji: 'koi', meaning: 'cá chép / tình yêu' }, { word: 'こえ', romaji: 'koe', meaning: 'giọng nói' }],
  },
  {
    id: 'sa', kana: 'さ', romaji: 'sa', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ さ như cô gái vẫy tay nói "SA-YONARA!"',
    emoji: '👋', illustration: '🌊',
    examples: [{ word: 'さくら', romaji: 'sakura', meaning: 'hoa anh đào' }, { word: 'さかな', romaji: 'sakana', meaning: 'cá' }],
  },
  {
    id: 'shi', kana: 'し', romaji: 'shi', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ し như cái móc câu — "SHI" khi câu được cá!',
    emoji: '🎣', illustration: '🌿',
    examples: [{ word: 'しろ', romaji: 'shiro', meaning: 'trắng / lâu đài' }, { word: 'した', romaji: 'shita', meaning: 'phía dưới' }],
  },
  {
    id: 'su', kana: 'す', romaji: 'su', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ す như xoáy nước "SU-SU" chảy xuống cống!',
    emoji: '🌀', illustration: '🍜',
    examples: [{ word: 'すし', romaji: 'sushi', meaning: 'sushi' }, { word: 'すな', romaji: 'suna', meaning: 'cát' }],
  },
  {
    id: 'se', kana: 'せ', romaji: 'se', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ せ trông như cây tre uốn — "SE-kai" (thế giới)!',
    emoji: '🌍', illustration: '🎋',
    examples: [{ word: 'せかい', romaji: 'sekai', meaning: 'thế giới' }, { word: 'せんせい', romaji: 'sensei', meaning: 'giáo viên' }],
  },
  {
    id: 'so', kana: 'そ', romaji: 'so', group: GROUPS.BASIC, row: 's-row',
    mnemonic: 'Chữ そ như sóng biển uốn lượn — "SO!" (vậy à!)',
    emoji: '🌊', illustration: '🐍',
    examples: [{ word: 'そら', romaji: 'sora', meaning: 'bầu trời' }, { word: 'そば', romaji: 'soba', meaning: 'mì soba' }],
  },
  {
    id: 'ta', kana: 'た', romaji: 'ta', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ た như cây nấm đội mũ — "TA-DA!" xuất hiện!',
    emoji: '🍄', illustration: '🥁',
    examples: [{ word: 'たこ', romaji: 'tako', meaning: 'bạch tuộc' }, { word: 'たべる', romaji: 'taberu', meaning: 'ăn' }],
  },
  {
    id: 'chi', kana: 'ち', romaji: 'chi', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ ち như con chipmunk má phính — "CHI-CHI!"',
    emoji: '🐿️', illustration: '🍵',
    examples: [{ word: 'ちか', romaji: 'chika', meaning: 'tầng hầm' }, { word: 'ちず', romaji: 'chizu', meaning: 'bản đồ' }],
  },
  {
    id: 'tsu', kana: 'つ', romaji: 'tsu', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ つ như sóng thần "TSU-NAMI!" ào ào!',
    emoji: '🌊', illustration: '🌙',
    examples: [{ word: 'つき', romaji: 'tsuki', meaning: 'mặt trăng' }, { word: 'つくえ', romaji: 'tsukue', meaning: 'bàn học' }],
  },
  {
    id: 'te', kana: 'て', romaji: 'te', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ て như bàn tay duỗi ra — "TE" (tay)!',
    emoji: '✋', illustration: '🤲',
    examples: [{ word: 'てがみ', romaji: 'tegami', meaning: 'thư' }, { word: 'てんき', romaji: 'tenki', meaning: 'thời tiết' }],
  },
  {
    id: 'to', kana: 'と', romaji: 'to', group: GROUPS.BASIC, row: 't-row',
    mnemonic: 'Chữ と như cái gậy cắm xuống đất — "TO-FU"!',
    emoji: '🥢', illustration: '🚪',
    examples: [{ word: 'とり', romaji: 'tori', meaning: 'chim' }, { word: 'ともだち', romaji: 'tomodachi', meaning: 'bạn bè' }],
  },
  {
    id: 'na', kana: 'な', romaji: 'na', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ な như cô gái thắt nơ — "NA-kawaii!" (dễ thương)',
    emoji: '🎀', illustration: '🍆',
    examples: [{ word: 'なつ', romaji: 'natsu', meaning: 'mùa hè' }, { word: 'なまえ', romaji: 'namae', meaning: 'tên' }],
  },
  {
    id: 'ni', kana: 'に', romaji: 'ni', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ に như người gánh đòn "NI" — gánh nặng!',
    emoji: '🏋️', illustration: '🥕',
    examples: [{ word: 'にほん', romaji: 'nihon', meaning: 'Nhật Bản' }, { word: 'にわ', romaji: 'niwa', meaning: 'sân vườn' }],
  },
  {
    id: 'nu', kana: 'ぬ', romaji: 'nu', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ぬ trông như sợi mì ramen bị rối — "NU-dles"!',
    emoji: '🍜', illustration: '🧶',
    examples: [{ word: 'ぬの', romaji: 'nuno', meaning: 'vải' }, { word: 'ぬま', romaji: 'numa', meaning: 'đầm lầy' }],
  },
  {
    id: 'ne', kana: 'ね', romaji: 'ne', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ ね như con mèo đang cuộn tròn ngủ — "NE-ko" (mèo)!',
    emoji: '🐱', illustration: '😴',
    examples: [{ word: 'ねこ', romaji: 'neko', meaning: 'mèo' }, { word: 'ねる', romaji: 'neru', meaning: 'ngủ' }],
  },
  {
    id: 'no', kana: 'の', romaji: 'no', group: GROUPS.BASIC, row: 'n-row',
    mnemonic: 'Chữ の như xoáy ốc sên — "NO" quay tròn!',
    emoji: '🐌', illustration: '🌀',
    examples: [{ word: 'のり', romaji: 'nori', meaning: 'rong biển' }, { word: 'のむ', romaji: 'nomu', meaning: 'uống' }],
  },
  {
    id: 'ha', kana: 'は', romaji: 'ha', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ は như lá cờ đang bay — "HA-HA!" cười vang!',
    emoji: '😄', illustration: '🎌',
    examples: [{ word: 'はな', romaji: 'hana', meaning: 'hoa / mũi' }, { word: 'はる', romaji: 'haru', meaning: 'mùa xuân' }],
  },
  {
    id: 'hi', kana: 'ひ', romaji: 'hi', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ひ như ngọn lửa "HI!" — lửa cháy!',
    emoji: '🔥', illustration: '☀️',
    examples: [{ word: 'ひ', romaji: 'hi', meaning: 'lửa / ngày' }, { word: 'ひと', romaji: 'hito', meaning: 'người' }],
  },
  {
    id: 'fu', kana: 'ふ', romaji: 'fu', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ふ như núi Fuji 4 đỉnh — "FU-ji"!',
    emoji: '🗻', illustration: '🌬️',
    examples: [{ word: 'ふじ', romaji: 'fuji', meaning: 'Núi Fuji' }, { word: 'ふね', romaji: 'fune', meaning: 'thuyền' }],
  },
  {
    id: 'he', kana: 'へ', romaji: 'he', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ へ như núi nhọn — "HE-y!" chào từ đỉnh núi!',
    emoji: '⛰️', illustration: '🏔️',
    examples: [{ word: 'へや', romaji: 'heya', meaning: 'phòng' }, { word: 'へび', romaji: 'hebi', meaning: 'rắn' }],
  },
  {
    id: 'ho', kana: 'ほ', romaji: 'ho', group: GROUPS.BASIC, row: 'h-row',
    mnemonic: 'Chữ ほ như ông già Noel — "HO-HO-HO!"',
    emoji: '🎅', illustration: '⭐',
    examples: [{ word: 'ほし', romaji: 'hoshi', meaning: 'ngôi sao' }, { word: 'ほん', romaji: 'hon', meaning: 'sách' }],
  },
  {
    id: 'ma', kana: 'ま', romaji: 'ma', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ ま như con bạch tuộc má phính — "MA-ma" (mẹ)!',
    emoji: '🐙', illustration: '🎭',
    examples: [{ word: 'まち', romaji: 'machi', meaning: 'thành phố' }, { word: 'まど', romaji: 'mado', meaning: 'cửa sổ' }],
  },
  {
    id: 'mi', kana: 'み', romaji: 'mi', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ み như con rắn biển uốn khúc — "MI-mi" (tai)!',
    emoji: '👂', illustration: '🌊',
    examples: [{ word: 'みず', romaji: 'mizu', meaning: 'nước' }, { word: 'みち', romaji: 'michi', meaning: 'đường' }],
  },
  {
    id: 'mu', kana: 'む', romaji: 'mu', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ む như con bò đang kêu "MU-MU"!',
    emoji: '🐄', illustration: '🌾',
    examples: [{ word: 'むし', romaji: 'mushi', meaning: 'côn trùng' }, { word: 'むら', romaji: 'mura', meaning: 'làng' }],
  },
  {
    id: 'me', kana: 'め', romaji: 'me', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ め như con mắt nhìn — "ME" (mắt)!',
    emoji: '👁️', illustration: '🎯',
    examples: [{ word: 'め', romaji: 'me', meaning: 'mắt' }, { word: 'めだか', romaji: 'medaka', meaning: 'cá killifish' }],
  },
  {
    id: 'mo', kana: 'も', romaji: 'mo', group: GROUPS.BASIC, row: 'm-row',
    mnemonic: 'Chữ も như con cá câu được — "MO-re fish!" (thêm cá)!',
    emoji: '🐠', illustration: '🎣',
    examples: [{ word: 'もり', romaji: 'mori', meaning: 'rừng' }, { word: 'もも', romaji: 'momo', meaning: 'đào' }],
  },
  {
    id: 'ya', kana: 'や', romaji: 'ya', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ や như mũi tên bay — "YA!" bắn trúng!',
    emoji: '🏹', illustration: '🎪',
    examples: [{ word: 'やま', romaji: 'yama', meaning: 'núi' }, { word: 'やさい', romaji: 'yasai', meaning: 'rau củ' }],
  },
  {
    id: 'yu', kana: 'ゆ', romaji: 'yu', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ ゆ như hơi nước bốc lên — "YU" (nước nóng)!',
    emoji: '♨️', illustration: '🛁',
    examples: [{ word: 'ゆき', romaji: 'yuki', meaning: 'tuyết' }, { word: 'ゆめ', romaji: 'yume', meaning: 'giấc mơ' }],
  },
  {
    id: 'yo', kana: 'よ', romaji: 'yo', group: GROUPS.BASIC, row: 'y-row',
    mnemonic: 'Chữ よ như cần cẩu nâng vật — "YO-KO!" (ngang)!',
    emoji: '🏗️', illustration: '🌅',
    examples: [{ word: 'よる', romaji: 'yoru', meaning: 'đêm' }, { word: 'よい', romaji: 'yoi', meaning: 'tốt' }],
  },
  {
    id: 'ra', kana: 'ら', romaji: 'ra', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ ら như cái lạt xoắn — "RA-men" cuộn tròn!',
    emoji: '🍜', illustration: '🌀',
    examples: [{ word: 'らくだ', romaji: 'rakuda', meaning: 'lạc đà' }, { word: 'らいねん', romaji: 'rainen', meaning: 'năm sau' }],
  },
  {
    id: 'ri', kana: 'り', romaji: 'ri', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ り như 2 que đũa — "RI-su" (sóc)!',
    emoji: '🐿️', illustration: '🍡',
    examples: [{ word: 'りんご', romaji: 'ringo', meaning: 'táo' }, { word: 'りょ', romaji: 'ryo', meaning: 'du lịch' }],
  },
  {
    id: 'ru', kana: 'る', romaji: 'ru', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ る như con nòng nọc bơi — "RU-RU"!',
    emoji: '🐸', illustration: '💧',
    examples: [{ word: 'るり', romaji: 'ruri', meaning: 'màu xanh lam' }, { word: 'るすばん', romaji: 'rusuban', meaning: 'trông nhà' }],
  },
  {
    id: 're', kana: 'れ', romaji: 're', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ れ như người cuối gật đầu — "RE" (liên quan)!',
    emoji: '🙇', illustration: '🎁',
    examples: [{ word: 'れんしゅう', romaji: 'renshuu', meaning: 'luyện tập' }, { word: 'れいぞうこ', romaji: 'reizouko', meaning: 'tủ lạnh' }],
  },
  {
    id: 'ro', kana: 'ろ', romaji: 'ro', group: GROUPS.BASIC, row: 'r-row',
    mnemonic: 'Chữ ろ như con đường xoắn ốc — "RO-ad!"',
    emoji: '🛣️', illustration: '🔄',
    examples: [{ word: 'ろうか', romaji: 'rouka', meaning: 'hành lang' }, { word: 'ろく', romaji: 'roku', meaning: 'sáu' }],
  },
  {
    id: 'wa', kana: 'わ', romaji: 'wa', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Chữ わ như cái vòng tay ôm — "WA-I" (vui mừng)!',
    emoji: '🤗', illustration: '🍣',
    examples: [{ word: 'わたし', romaji: 'watashi', meaning: 'tôi' }, { word: 'わに', romaji: 'wani', meaning: 'cá sấu' }],
  },
  {
    id: 'wi', kana: 'ゐ', romaji: 'wi', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Ký tự cổ ゐ (wi) - hiếm dùng trong tiếng Nhật hiện đại',
    emoji: '📜', illustration: '🏯',
    examples: [{ word: 'ゐ', romaji: 'wi', meaning: '(ký tự cổ)' }],
  },
  {
    id: 'we', kana: 'ゑ', romaji: 'we', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Ký tự cổ ゑ (we) - hiếm dùng trong tiếng Nhật hiện đại',
    emoji: '📜', illustration: '🏯',
    examples: [{ word: 'ゑ', romaji: 'we', meaning: '(ký tự cổ)' }],
  },
  {
    id: 'wo', kana: 'を', romaji: 'wo/o', group: GROUPS.BASIC, row: 'w-row',
    mnemonic: 'Chữ を là trợ từ tân ngữ — "WO" đặt sau vật!',
    emoji: '➡️', illustration: '🎯',
    examples: [{ word: 'ほんをよむ', romaji: 'hon wo yomu', meaning: 'đọc sách' }],
  },
  {
    id: 'n', kana: 'ん', romaji: 'n', group: GROUPS.BASIC, row: 'n-special',
    mnemonic: 'Chữ ん là âm "N" kết thúc — như tiếng "M-M!" gật đầu!',
    emoji: '👍', illustration: '🎵',
    examples: [{ word: 'にほん', romaji: 'nihon', meaning: 'Nhật Bản' }, { word: 'ほん', romaji: 'hon', meaning: 'sách' }],
  },

  // ===== DAKUTEN (voiced) =====
  {
    id: 'ga', kana: 'が', romaji: 'ga', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'Chữ が = か + ゛hai chấm biến thành "GA" — giọng mạnh hơn!',
    emoji: '💪', illustration: '🎸',
    examples: [{ word: 'がっこう', romaji: 'gakkou', meaning: 'trường học' }, { word: 'がいこく', romaji: 'gaikoku', meaning: 'nước ngoài' }],
  },
  {
    id: 'gi', kana: 'ぎ', romaji: 'gi', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ぎ = き + ゛"GI" như tiếng guitar rền!',
    emoji: '🎸', illustration: '🌟',
    examples: [{ word: 'ぎんこう', romaji: 'ginkou', meaning: 'ngân hàng' }, { word: 'ぎもん', romaji: 'gimon', meaning: 'thắc mắc' }],
  },
  {
    id: 'gu', kana: 'ぐ', romaji: 'gu', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ぐ = く + ゛"GU" như tiếng gầm của gấu!',
    emoji: '🐻', illustration: '💥',
    examples: [{ word: 'ぐんたい', romaji: 'guntai', meaning: 'quân đội' }, { word: 'ぐあい', romaji: 'guai', meaning: 'tình trạng' }],
  },
  {
    id: 'ge', kana: 'げ', romaji: 'ge', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'げ = け + ゛"GE" như tiếng rên "GE-ki" (kịch tính)!',
    emoji: '🎭', illustration: '🔮',
    examples: [{ word: 'げき', romaji: 'geki', meaning: 'kịch' }, { word: 'げんき', romaji: 'genki', meaning: 'khỏe mạnh' }],
  },
  {
    id: 'go', kana: 'ご', romaji: 'go', group: GROUPS.DAKUTEN, row: 'k-row',
    mnemonic: 'ご = こ + ゛"GO!" như lệnh xuất phát!',
    emoji: '🏁', illustration: '🎮',
    examples: [{ word: 'ごはん', romaji: 'gohan', meaning: 'cơm' }, { word: 'ごご', romaji: 'gogo', meaning: 'buổi chiều' }],
  },
  {
    id: 'za', kana: 'ざ', romaji: 'za', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ざ = さ + ゛"ZA" như tiếng sấm!',
    emoji: '⚡', illustration: '🌩️',
    examples: [{ word: 'ざっし', romaji: 'zasshi', meaning: 'tạp chí' }, { word: 'ざいりょう', romaji: 'zairyou', meaning: 'nguyên liệu' }],
  },
  {
    id: 'ji', kana: 'じ', romaji: 'ji', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'じ = し + ゛"JI" như chiếc chìa khóa xoay!',
    emoji: '🔑', illustration: '🌀',
    examples: [{ word: 'じかん', romaji: 'jikan', meaning: 'thời gian' }, { word: 'じんせい', romaji: 'jinsei', meaning: 'cuộc sống' }],
  },
  {
    id: 'zu', kana: 'ず', romaji: 'zu', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ず = す + ゛"ZU" như tiếng vo ve của ong!',
    emoji: '🐝', illustration: '💫',
    examples: [{ word: 'ずっと', romaji: 'zutto', meaning: 'mãi mãi' }, { word: 'ずかん', romaji: 'zukan', meaning: 'từ điển hình ảnh' }],
  },
  {
    id: 'ze', kana: 'ぜ', romaji: 'ze', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ぜ = せ + ゛"ZE" như gió thổi "ZE-PH-YR"!',
    emoji: '🌬️', illustration: '🌿',
    examples: [{ word: 'ぜんぶ', romaji: 'zenbu', meaning: 'tất cả' }, { word: 'ぜんぜん', romaji: 'zenzen', meaning: 'hoàn toàn không' }],
  },
  {
    id: 'zo', kana: 'ぞ', romaji: 'zo', group: GROUPS.DAKUTEN, row: 's-row',
    mnemonic: 'ぞ = そ + ゛"ZO" như tiếng gầm của zombie!',
    emoji: '🧟', illustration: '💀',
    examples: [{ word: 'ぞう', romaji: 'zou', meaning: 'voi' }, { word: 'ぞんぶん', romaji: 'zonbun', meaning: 'thoải mái' }],
  },
  {
    id: 'da', kana: 'だ', romaji: 'da', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'だ = た + ゛"DA" như tiếng trống lớn!',
    emoji: '🥁', illustration: '💪',
    examples: [{ word: 'だいがく', romaji: 'daigaku', meaning: 'đại học' }, { word: 'だれ', romaji: 'dare', meaning: 'ai' }],
  },
  {
    id: 'di', kana: 'ぢ', romaji: 'di/ji', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ぢ = ち + ゛phát âm như "ji" — ít dùng trong tiếng Nhật hiện đại',
    emoji: '📝', illustration: '🔤',
    examples: [{ word: 'はなぢ', romaji: 'hanaji', meaning: 'chảy máu mũi' }],
  },
  {
    id: 'du', kana: 'づ', romaji: 'du/zu', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'づ = つ + ゛phát âm như "zu" — ít dùng',
    emoji: '📝', illustration: '🔤',
    examples: [{ word: 'つづく', romaji: 'tsuzuku', meaning: 'tiếp tục' }],
  },
  {
    id: 'de', kana: 'で', romaji: 'de', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'で = て + ゛"DE" như bàn tay đang chỉ!',
    emoji: '👉', illustration: '🎯',
    examples: [{ word: 'でんしゃ', romaji: 'densha', meaning: 'xe lửa' }, { word: 'でんき', romaji: 'denki', meaning: 'điện' }],
  },
  {
    id: 'do', kana: 'ど', romaji: 'do', group: GROUPS.DAKUTEN, row: 't-row',
    mnemonic: 'ど = と + ゛"DO" như knock knock trên cửa!',
    emoji: '🚪', illustration: '🎵',
    examples: [{ word: 'どこ', romaji: 'doko', meaning: 'ở đâu' }, { word: 'どうぞ', romaji: 'douzo', meaning: 'xin mời' }],
  },
  {
    id: 'ba', kana: 'ば', romaji: 'ba', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ば = は + ゛"BA" như tiếng bom nổ!',
    emoji: '💣', illustration: '🌹',
    examples: [{ word: 'ばら', romaji: 'bara', meaning: 'hoa hồng' }, { word: 'ばしょ', romaji: 'basho', meaning: 'địa điểm' }],
  },
  {
    id: 'bi', kana: 'び', romaji: 'bi', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'び = ひ + ゛"BI" như tiếng chuông xe đạp!',
    emoji: '🚲', illustration: '⭐',
    examples: [{ word: 'びじゅつ', romaji: 'bijutsu', meaning: 'mỹ thuật' }, { word: 'びょういん', romaji: 'byouin', meaning: 'bệnh viện' }],
  },
  {
    id: 'bu', kana: 'ぶ', romaji: 'bu', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ぶ = ふ + ゛"BU" như tiếng lợn kêu!',
    emoji: '🐷', illustration: '💨',
    examples: [{ word: 'ぶた', romaji: 'buta', meaning: 'lợn' }, { word: 'ぶんか', romaji: 'bunka', meaning: 'văn hóa' }],
  },
  {
    id: 'be', kana: 'べ', romaji: 'be', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'べ = へ + ゛"BE" như núi đôi — "BENTO" cơm hộp!',
    emoji: '🍱', illustration: '🐍',
    examples: [{ word: 'べんとう', romaji: 'bentou', meaning: 'cơm hộp' }, { word: 'べんきょう', romaji: 'benkyou', meaning: 'học tập' }],
  },
  {
    id: 'bo', kana: 'ぼ', romaji: 'bo', group: GROUPS.DAKUTEN, row: 'h-row',
    mnemonic: 'ぼ = ほ + ゛"BO" như ông già Noel mạnh hơn!',
    emoji: '🎅', illustration: '🌟',
    examples: [{ word: 'ぼく', romaji: 'boku', meaning: 'tôi (nam)' }, { word: 'ぼうし', romaji: 'boushi', meaning: 'mũ' }],
  },

  // ===== HANDAKUTEN (semi-voiced) =====
  {
    id: 'pa', kana: 'ぱ', romaji: 'pa', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ぱ = は + ゜vòng tròn "PA" như bong bóng nổ POP!',
    emoji: '🫧', illustration: '🎊',
    examples: [{ word: 'ぱーてぃ', romaji: 'paatii', meaning: 'bữa tiệc' }, { word: 'ぱん', romaji: 'pan', meaning: 'bánh mì' }],
  },
  {
    id: 'pi', kana: 'ぴ', romaji: 'pi', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ぴ = ひ + ゜"PI" như tiếng bíp bíp vui!',
    emoji: '📳', illustration: '💡',
    examples: [{ word: 'ぴかぴか', romaji: 'pikapika', meaning: 'lấp lánh' }, { word: 'ぴあの', romaji: 'piano', meaning: 'đàn piano' }],
  },
  {
    id: 'pu', kana: 'ぷ', romaji: 'pu', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ぷ = ふ + ゜"PU" như thổi bong bóng!',
    emoji: '🫁', illustration: '🎈',
    examples: [{ word: 'ぷりん', romaji: 'purin', meaning: 'bánh flan' }, { word: 'ぷーる', romaji: 'puuru', meaning: 'hồ bơi' }],
  },
  {
    id: 'pe', kana: 'ぺ', romaji: 'pe', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ぺ = へ + ゜"PE" như ngọn núi có hào quang!',
    emoji: '✨', illustration: '🌠',
    examples: [{ word: 'ぺん', romaji: 'pen', meaning: 'bút' }, { word: 'ぺっと', romaji: 'petto', meaning: 'thú cưng' }],
  },
  {
    id: 'po', kana: 'ぽ', romaji: 'po', group: GROUPS.HANDAKUTEN, row: 'h-row',
    mnemonic: 'ぽ = ほ + ゜"PO" như ông già Noel nhẹ nhàng!',
    emoji: '🎅', illustration: '🫧',
    examples: [{ word: 'ぽけっと', romaji: 'poketto', meaning: 'túi' }, { word: 'ぽすと', romaji: 'posuto', meaning: 'hộp thư' }],
  },

  // ===== YOON (combination sounds) =====
  {
    id: 'kya', kana: 'きゃ', romaji: 'kya', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'きゃ = き + small ゃ → "KYA!" tiếng thét vui!',
    emoji: '😱', illustration: '🎠',
    examples: [{ word: 'きゃく', romaji: 'kyaku', meaning: 'khách' }, { word: 'きゃんぷ', romaji: 'kyanpu', meaning: 'cắm trại' }],
  },
  {
    id: 'kyu', kana: 'きゅ', romaji: 'kyu', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'きゅ = き + small ゅ → "KYU" như cứu hộ!',
    emoji: '🆘', illustration: '🎯',
    examples: [{ word: 'きゅうしゅう', romaji: 'kyuushuu', meaning: 'Kyushu' }, { word: 'きゅう', romaji: 'kyuu', meaning: 'chín' }],
  },
  {
    id: 'kyo', kana: 'きょ', romaji: 'kyo', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'きょ = き + small よ → "KYO" như Kyoto!',
    emoji: '⛩️', illustration: '🏯',
    examples: [{ word: 'きょうと', romaji: 'kyouto', meaning: 'Kyoto' }, { word: 'きょう', romaji: 'kyou', meaning: 'hôm nay' }],
  },
  {
    id: 'sha', kana: 'しゃ', romaji: 'sha', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'しゃ = し + small ゃ → "SHA" như shamisen!',
    emoji: '🎵', illustration: '🎸',
    examples: [{ word: 'しゃしん', romaji: 'shashin', meaning: 'ảnh' }, { word: 'しゃかい', romaji: 'shakai', meaning: 'xã hội' }],
  },
  {
    id: 'shu', kana: 'しゅ', romaji: 'shu', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'しゅ = し + small ゅ → "SHU" như shumai!',
    emoji: '🥟', illustration: '🌺',
    examples: [{ word: 'しゅみ', romaji: 'shumi', meaning: 'sở thích' }, { word: 'しゅうかん', romaji: 'shuukan', meaning: 'tuần' }],
  },
  {
    id: 'sho', kana: 'しょ', romaji: 'sho', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'しょ = し + small よ → "SHO" như shogun!',
    emoji: '⚔️', illustration: '🏯',
    examples: [{ word: 'しょくじ', romaji: 'shokuji', meaning: 'bữa ăn' }, { word: 'しょうがっこう', romaji: 'shougakkou', meaning: 'tiểu học' }],
  },
  {
    id: 'cha', kana: 'ちゃ', romaji: 'cha', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'ちゃ = ち + small ゃ → "CHA" như trà matcha!',
    emoji: '🍵', illustration: '🌿',
    examples: [{ word: 'おちゃ', romaji: 'ocha', meaning: 'trà' }, { word: 'ちゃんと', romaji: 'chanto', meaning: 'đàng hoàng' }],
  },
  {
    id: 'chu', kana: 'ちゅ', romaji: 'chu', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'ちゅ = ち + small ゅ → "CHU" như nụ hôn!',
    emoji: '💋', illustration: '💕',
    examples: [{ word: 'ちゅう', romaji: 'chuu', meaning: 'trung' }, { word: 'ちゅうごく', romaji: 'chuugoku', meaning: 'Trung Quốc' }],
  },
  {
    id: 'cho', kana: 'ちょ', romaji: 'cho', group: GROUPS.YOON, row: 't-row',
    mnemonic: 'ちょ = ち + small よ → "CHO" như bướm!',
    emoji: '🦋', illustration: '🌸',
    examples: [{ word: 'ちょう', romaji: 'chou', meaning: 'bướm / đường phố' }, { word: 'ちょっと', romaji: 'chotto', meaning: 'một chút' }],
  },
  {
    id: 'nya', kana: 'にゃ', romaji: 'nya', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'にゃ = に + small ゃ → "NYA" như mèo kêu!',
    emoji: '🐱', illustration: '😺',
    examples: [{ word: 'にゃんこ', romaji: 'nyanko', meaning: 'mèo con (dễ thương)' }],
  },
  {
    id: 'nyu', kana: 'にゅ', romaji: 'nyu', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'にゅ = に + small ゅ → "NYU" như nhập học!',
    emoji: '🎓', illustration: '📚',
    examples: [{ word: 'にゅうがく', romaji: 'nyuugaku', meaning: 'nhập học' }],
  },
  {
    id: 'nyo', kana: 'にょ', romaji: 'nyo', group: GROUPS.YOON, row: 'n-row',
    mnemonic: 'にょ = に + small よ → "NYO" ít gặp!',
    emoji: '🌿', illustration: '🎋',
    examples: [{ word: 'にょうぼう', romaji: 'nyoubou', meaning: 'vợ (cổ điển)' }],
  },
  {
    id: 'hya', kana: 'ひゃ', romaji: 'hya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ひゃ = ひ + small ゃ → "HYA" như 100 (hyaku)!',
    emoji: '💯', illustration: '🔥',
    examples: [{ word: 'ひゃく', romaji: 'hyaku', meaning: 'một trăm' }],
  },
  {
    id: 'hyu', kana: 'ひゅ', romaji: 'hyu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ひゅ = ひ + small ゅ → "HYU" như gió thổi!',
    emoji: '🌬️', illustration: '💨',
    examples: [{ word: 'ひゅーひゅー', romaji: 'hyuuhyuu', meaning: 'tiếng gió' }],
  },
  {
    id: 'hyo', kana: 'ひょ', romaji: 'hyo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ひょ = ひ + small よ → "HYO" như biểu lộ!',
    emoji: '😆', illustration: '🎭',
    examples: [{ word: 'ひょうじょう', romaji: 'hyoujou', meaning: 'biểu cảm khuôn mặt' }],
  },
  {
    id: 'mya', kana: 'みゃ', romaji: 'mya', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'みゃ = み + small ゃ → "MYA" ít dùng!',
    emoji: '🌀', illustration: '🎵',
    examples: [{ word: 'みゃく', romaji: 'myaku', meaning: 'mạch' }],
  },
  {
    id: 'myu', kana: 'みゅ', romaji: 'myu', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'みゅ = み + small ゅ → "MYU" như âm nhạc!',
    emoji: '🎵', illustration: '🎶',
    examples: [{ word: 'みゅーじしゃん', romaji: 'myuujikan', meaning: 'nhạc sĩ (loan)' }],
  },
  {
    id: 'myo', kana: 'みょ', romaji: 'myo', group: GROUPS.YOON, row: 'm-row',
    mnemonic: 'みょ = み + small よ → "MYO" kỳ lạ!',
    emoji: '🤔', illustration: '✨',
    examples: [{ word: 'みょうじ', romaji: 'myouji', meaning: 'họ' }],
  },
  {
    id: 'rya', kana: 'りゃ', romaji: 'rya', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'りゃ = り + small ゃ → "RYA" lướt nhẹ!',
    emoji: '🌊', illustration: '💫',
    examples: [{ word: 'りゃく', romaji: 'ryaku', meaning: 'viết tắt' }],
  },
  {
    id: 'ryu', kana: 'りゅ', romaji: 'ryu', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'りゅ = り + small ゅ → "RYU" như rồng!',
    emoji: '🐉', illustration: '⚡',
    examples: [{ word: 'りゅう', romaji: 'ryuu', meaning: 'rồng' }, { word: 'りゅうがく', romaji: 'ryuugaku', meaning: 'du học' }],
  },
  {
    id: 'ryo', kana: 'りょ', romaji: 'ryo', group: GROUPS.YOON, row: 'r-row',
    mnemonic: 'りょ = り + small よ → "RYO" như ryokan!',
    emoji: '🏨', illustration: '🌸',
    examples: [{ word: 'りょこう', romaji: 'ryokou', meaning: 'du lịch' }, { word: 'りょうり', romaji: 'ryouri', meaning: 'nấu ăn' }],
  },
  {
    id: 'gya', kana: 'ぎゃ', romaji: 'gya', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ぎゃ = ぎ + small ゃ → "GYA!" tiếng hét!',
    emoji: '😱', illustration: '⚡',
    examples: [{ word: 'ぎゃく', romaji: 'gyaku', meaning: 'ngược lại' }],
  },
  {
    id: 'gyu', kana: 'ぎゅ', romaji: 'gyu', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ぎゅ = ぎ + small ゅ → "GYU" như thịt bò!',
    emoji: '🥩', illustration: '🐄',
    examples: [{ word: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: 'sữa bò' }, { word: 'ぎゅうどん', romaji: 'gyuudon', meaning: 'cơm thịt bò' }],
  },
  {
    id: 'gyo', kana: 'ぎょ', romaji: 'gyo', group: GROUPS.YOON, row: 'k-row',
    mnemonic: 'ぎょ = ぎ + small よ → "GYO" như cá!',
    emoji: '🐟', illustration: '🎣',
    examples: [{ word: 'ぎょうじ', romaji: 'gyouji', meaning: 'sự kiện' }, { word: 'ぎょうれつ', romaji: 'gyouretsu', meaning: 'hàng dài' }],
  },
  {
    id: 'ja', kana: 'じゃ', romaji: 'ja', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'じゃ = じ + small ゃ → "JA" như nói "じゃあね" tạm biệt!',
    emoji: '👋', illustration: '🌀',
    examples: [{ word: 'じゃあ', romaji: 'jaa', meaning: 'vậy thì' }, { word: 'じゃま', romaji: 'jama', meaning: 'cản trở' }],
  },
  {
    id: 'ju', kana: 'じゅ', romaji: 'ju', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'じゅ = じ + small ゅ → "JU" như judo!',
    emoji: '🥋', illustration: '💪',
    examples: [{ word: 'じゅうどう', romaji: 'juudou', meaning: 'judo' }, { word: 'じゅう', romaji: 'juu', meaning: 'mười' }],
  },
  {
    id: 'jo', kana: 'じょ', romaji: 'jo', group: GROUPS.YOON, row: 's-row',
    mnemonic: 'じょ = じ + small よ → "JO" như thông tin!',
    emoji: 'ℹ️', illustration: '📖',
    examples: [{ word: 'じょうほう', romaji: 'jouhou', meaning: 'thông tin' }, { word: 'じょせい', romaji: 'josei', meaning: 'phụ nữ' }],
  },
  {
    id: 'bya', kana: 'びゃ', romaji: 'bya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'びゃ = び + small ゃ → "BYA" âm hiếm gặp!',
    emoji: '✨', illustration: '💫',
    examples: [{ word: 'びゃくや', romaji: 'byakuya', meaning: 'đêm trắng' }],
  },
  {
    id: 'byu', kana: 'びゅ', romaji: 'byu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'びゅ = び + small ゅ → "BYU" như gió lướt qua!',
    emoji: '💨', illustration: '🌬️',
    examples: [{ word: 'びゅーびゅー', romaji: 'byuubyuu', meaning: 'tiếng gió mạnh' }],
  },
  {
    id: 'byo', kana: 'びょ', romaji: 'byo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'びょ = び + small よ → "BYO" như bệnh viện!',
    emoji: '🏥', illustration: '💊',
    examples: [{ word: 'びょういん', romaji: 'byouin', meaning: 'bệnh viện' }, { word: 'びょうき', romaji: 'byouki', meaning: 'bệnh tật' }],
  },
  {
    id: 'pya', kana: 'ぴゃ', romaji: 'pya', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ぴゃ = ぴ + small ゃ → "PYA!" tiếng vui nhộn!',
    emoji: '🎉', illustration: '✨',
    examples: [{ word: 'ぴゃあ', romaji: 'pyaa', meaning: 'ồ! (cảm thán)' }],
  },
  {
    id: 'pyu', kana: 'ぴゅ', romaji: 'pyu', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ぴゅ = ぴ + small ゅ → "PYU" như tên bay!',
    emoji: '🏹', illustration: '💫',
    examples: [{ word: 'ぴゅーぴゅー', romaji: 'pyuupyuu', meaning: 'tiếng thổi' }],
  },
  {
    id: 'pyo', kana: 'ぴょ', romaji: 'pyo', group: GROUPS.YOON, row: 'h-row',
    mnemonic: 'ぴょ = ぴ + small よ → "PYO" như thỏ nhảy!',
    emoji: '🐰', illustration: '🌸',
    examples: [{ word: 'ぴょんぴょん', romaji: 'pyonpyon', meaning: 'nhảy lò cò' }],
  },
];

export const getByGroup = (group) => hiraganaData.filter(h => h.group === group);
export const getBasic = () => getByGroup(GROUPS.BASIC);
export const getDakuten = () => getByGroup(GROUPS.DAKUTEN);
export const getHandakuten = () => getByGroup(GROUPS.HANDAKUTEN);
export const getYoon = () => getByGroup(GROUPS.YOON);

export const groupLabels = {
  [GROUPS.BASIC]: 'Hiragana Cơ Bản',
  [GROUPS.DAKUTEN]: 'Âm Đục (Dakuten ゛)',
  [GROUPS.HANDAKUTEN]: 'Âm Bán Đục (Handakuten ゜)',
  [GROUPS.YOON]: 'Âm Ghép (Yoon)',
};

export const ROW_LABELS = {
  'a-row':     'あ行 (a-o)',
  'k-row':     'か行 (ka-ko)',
  's-row':     'さ行 (sa-so)',
  't-row':     'た行 (ta-to)',
  'n-row':     'な行 (na-no)',
  'h-row':     'は行 (ha-ho)',
  'm-row':     'ま行 (ma-mo)',
  'y-row':     'や行 (ya-yo)',
  'r-row':     'ら行 (ra-ro)',
  'w-row':     'わ行 (wa-wo)',
  'n-special': 'ん (n)',
};

export const BASIC_ROWS = Object.keys(ROW_LABELS);

export const characterOfTheDay = () => {
  const seed = Math.floor(Date.now() / 86400000);
  return hiraganaData[seed % hiraganaData.length];
};
