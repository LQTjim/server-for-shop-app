const data = [
  {
    id: 1,
    title: 'Fjallraven-Foldsack No.1背包,適合15"筆記本電腦',
    price: 109.95,
    description:
      "適合日常使用和在森林中散步的完美背包。 將您的筆記本電腦（最大 15 英寸）存放在帶襯墊的保護套中，您的日常",
    category: "男士服裝",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "男士休閒高級修身T恤",
    price: 22.3,
    description:
      "修身款式，對比色插肩長袖，三扣亨利門襟，輕盈柔軟的面料，透氣舒適 . 亨利風格的圓領包括一個三扣門襟。",
    category: "男士服裝",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "男士棉夾克",
    price: 55.99,
    description:
      "適合春/秋/冬的大衣外套，適合多種場合，如工作、遠足、露營、登山/攀岩、騎自行車、旅行或其他戶外活動。送給您或您的家人的好禮物選擇。一份暖心的愛 在這個感恩節或聖誕節送給父親、丈夫或兒子。",
    category: "男士服裝",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "男士休閒修身版型",
    price: 15.99,
    description:
      "屏幕上的顏色和實際使用的顏色可能略有不同。/請注意，體型因人而異，因此，詳細的尺寸信息應在產品描述下方查看。",
    category: "男士服裝",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "John Hardy 女士 Legends Naga 金銀龍站鏈手鍊",
    price: 695,
    description:
      "John Hardy 女士的 Legends Naga 金銀龍站鏈手鍊來自我們的 Legends 系列，Naga 的靈感來自保護海洋珍珠的神話水龍。 面朝內穿可以得到愛和豐富，或朝外穿可以保護。",
    category: "珠寶首飾",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "純金嬌小微密釘",
    price: 168,
    description:
      "滿意保證。 30 天內退貨或換貨。由美國 Hafeez Center 設計和銷售。 滿意保證。 在 30 天內退貨或換貨。",
    category: "珠寶首飾",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "白金鍍金公主",
    price: 9.99,
    description:
      "經典為她打造的婚禮訂婚單石鑽石承諾戒指。 訂婚、婚禮、週年紀念日、情人節的禮物，更能破壞你的愛……",
    category: "珠寶首飾",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "穿孔貓頭鷹鍍玫瑰金不銹鋼雙",
    price: 10.99,
    description: "鍍玫瑰金雙喇叭隧道塞耳環。 由 316L 不銹鋼製成",
    category: "珠寶首飾",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements 便攜式外置硬盤 - USB 3.0",
    price: 64,
    description:
      "USB 3.0 和 USB 2.0 兼容性 快速數據傳輸 提高 PC 性能 大容量； 適用於 Windows 10、Windows 8.1、Windows 7 的格式化 NTFS； 其他操作系統可能需要重新格式化； 兼容性可能因用戶的硬件配置和操作系統而異",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "閃迪 SSD PLUS 1TB 內置 SSD - SATA III 6Gb/s",
    price: 109,
    description:
      "輕鬆升級以加快啟動、關閉、應用程序加載和響應速度（與 5400 RPM SATA 2.5 英寸硬盤驅動器相比；基於已發布的規格和使用 PCMark vantage 分數的內部基準測試）提高突發寫入性能，使其成為典型 PC 工作負載的理想選擇 性能與可靠性的完美平衡讀/寫速度高達 535MB/s/450MB/s（基於內部測試；性能可能因驅動器容量、主機設備、操作系統和應用程序而異。）",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC 緩存性能提升 SATA III 2.5",
    price: 109,
    description:
      "3D NAND 閃存用於提供高傳輸速度卓越的傳輸速度，可實現更快的啟動並提高整體系統性能。 先進的 SLC 緩存技術可提高性能並延長使用壽命 7 毫米超薄設計，適用於超極本和超薄筆記本電腦。 支持 TRIM 命令、垃圾收集技術、RAID 和 ECC（錯誤檢查和糾正），以提供優化的性能和增強的可靠性。",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: "WD 4TB 遊戲硬盤適用於 Playstation 4 便攜式外置硬盤",
    price: 114,
    description:
      "擴展您的 PS4 遊戲體驗，隨處暢玩 快速輕鬆，設置 時尚設計，大容量，3 年製造商有限保修",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 英寸全高清 (1920 x 1080) IPS 超薄",
    price: 599,
    description:
      "21. 5 英寸全高清 (1920 x 1080) 寬屏 IPS 顯示屏和無 Radeon 同步技術。 不兼容 VESA 安裝刷新率：75Hz - 使用 HDMI 端口 零幀設計 | 超薄| 4ms 響應時間 | IPS 面板縱橫比 - 16: 9。支持顏色 - 16. 700 萬種顏色。 亮度 - 250 尼特 傾斜角度 -5 度至 15 度。 水平視角 - 178 度。 垂直視角 - 178 度 75 赫茲",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "三星 49 英寸 CHG90 144Hz 曲面電競顯示器 (LC49HG90DMNXZA) – 超寬屏 QLED",
    price: 999.99,
    description:
      "49 英寸超超 32:9 曲面遊戲顯示器採用雙 27 英寸屏幕並排量子點 (QLED) 技術，支持 HDR 和工廠校準，提供令人驚嘆的逼真和準確的色彩和對比度 144HZ 高刷新率和 1 毫秒超快速響應時間 消除運動模糊、重影並減少輸入延遲",
    category: "電器用品",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN 女士 3 合 1 滑雪夾克冬季外套",
    price: 56.99,
    description:
      "注意：夾克是美國標準尺碼，請選擇您平時穿著的尺碼材質：100% 滌綸； 可拆卸襯裡面料：溫暖的羊毛。 可拆卸功能襯裡：親膚、輕盈且保暖。立領襯裡夾克，讓您在寒冷天氣保持溫暖。 拉鍊口袋：2 個拉鍊手袋，胸部 2 個拉鍊口袋（足以存放卡片或鑰匙）和 1 個隱藏式口袋。拉鍊手袋和隱藏式口袋可確保您的物品*。 人性化設計：可調節可拆卸風帽和可調節袖口，防風防水，穿著舒適。 3 合 1 可拆卸設計提供更多便利，您可以根據需要將外套和內里分開，或一起穿著。 適合不同季節，幫助您適應不同氣候",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: "Lock and Love 女式可拆卸連帽人造皮革機車夾克",
    price: 29.95,
    description:
      "100% POLYURETHANE（外殼） 100% POLYESTER（襯裡） 75% POLYESTER 25% COTTON（毛衣），人造皮革材料，時尚舒適 / 2 個正面口袋，2 合一連帽牛仔風格人造皮夾克，鈕扣細節 腰部 / 側面細節縫合，僅手洗 / 請勿漂白 / 晾乾 / 請勿熨燙",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "雨衣女風衣條紋攀岩雨衣",
    price: 39.99,
    description:
      "輕便完美，適合旅行或休閒裝——長袖，帶帽，可調節抽繩腰部設計。 鈕扣和拉鍊前開合雨衣，全條紋襯裡，雨衣有 2 個側袋，大小適中，可容納各種物品，遮住臀部，兜帽大方但不過分。附有棉質襯裡兜帽 可調節的抽繩賦予它真正的風格外觀。",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ 女式純色短袖船領 V",
    price: 9.85,
    description:
      "95% 人造絲 5% 氨綸，美國製造或進口，不可漂白，輕質面料，彈性極佳，舒適，袖子和領口有羅紋 / 下擺雙縫線",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna 女式短袖保濕",
    price: 7.95,
    description:
      "100% 滌綸，機洗，100% 陽離子滌綸聯鎖，機洗和預縮水，非常合身，輕巧、寬敞且高度透氣，吸濕排汗面料有助於防潮，柔軟輕質面料，舒適 V 領和 修身版型，提供時尚、更女性化的輪廓並增加舒適度",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY 女式 T 卹休閒棉質短褲",
    price: 12.99,
    description:
      "95% 棉，5% 氨綸，特點：休閒，短袖，字母印花，V 領，時尚 T 卹，面料柔軟，有一定彈性。場合：休閒/辦公室/海灘/學校/家庭/街道。 季節：春、夏、秋、冬。",
    category: "女士服裝",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];
module.exports = data;
