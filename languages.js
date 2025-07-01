// Translations data for Zatex Bot Help
const translations = {
  en: {
    title: "Zatex Bot Help",
    section1_title: "Parameters — what does each one control?",
    section1_content: `<ul>
      <li><strong>Number of pulls</strong> — how many pulls per session (maximum 1000).</li>
      <li><strong>Number of simulations</strong> — how many times the pull session is repeated for statistical analysis (up to 100,000).</li>
      <li><strong>Banner type</strong> — choose between 50/50 (50% chance for limited character) and guaranteed limited.</li>
      <li><strong>Include 4★ items</strong> — whether to include or exclude 4★ items from the statistics.</li>
      <li><strong>Soft pity mode</strong> — takes into account the increasing 5★ chance after 65 pulls. Recommended to enable, as this mechanic is implemented in Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — what is it and how does it work?",
    section2_content: `<p>Most gacha games use a soft pity system. The exact formula is usually hidden, but the bot uses an approximate curve. Soft pity starts from the 65th pull, after which the 5★ chance increases following an S-shaped curve and reaches 100% by the 80th pull.</p>
    <p><strong>Formula:</strong><br>
    Chance = base + (1 - base) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    where x = (pity - 65) / 15</p>`,
    section3_title: "Simulation modes — what's the difference?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Fast and lightweight simulation that only tracks key 5★ stats. Suitable for a basic overview without deep analysis or 4★ tracking.</p>
    <p><strong>/simulate</strong><br>
    Full simulation with detailed 5★ and 4★ stats, including type distribution (limited vs. standard), guaranteed drops, distances between 5★, and base 4★ stats. Optimal for a complete picture.</p>
    <p><strong>/extra_simulate</strong><br>
    Advanced mode with the most detailed stats, including pity distribution charts, processing time, and exact pull probabilities at each stage. Best for deep analytical insights.</p>`,
    section4_title: "Limits — why do they exist and how to bypass?",
    section4_content: `<p>Due to Telegram and resource limits, the bot enforces caps: max 1000 pulls per simulation and 100,000 simulations. This prevents lag and overload. For larger volumes, consider the console version (in development).</p>`
  },
  ru: {
    title: "Справка по боту Zatex",
    section1_title: "Параметры — за что отвечает каждый?",
    section1_content: `<ul>
      <li><strong>Количество круток</strong> — число симуляций в одной сессии (максимум 1000).</li>
      <li><strong>Количество симуляций</strong> — сколько раз повторяется серия круток для статистики (до 100 000).</li>
      <li><strong>Тип баннера</strong> — выбор между 50/50 (шанс 50% получить лимитного героя) и гарантированным лимитом.</li>
      <li><strong>Учёт 4★ предметов</strong> — включение или исключение 4★ предметов из расчёта статистики.</li>
      <li><strong>Режим soft pity</strong> — учитывает постепенный рост шанса выпадения 5★ после 65 круток. Рекомендуется включать, так как эта механика реализована в Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — что это и как работает?",
    section2_content: `<p>В большинстве гача-игр действует система мягкой жалости (soft pity). Её точные параметры обычно скрыты, но бот использует приближенную формулу. Soft pity начинается с 65-й крутки, после чего шанс выпадения 5★ растёт по S-образной кривой и достигает 100% к 80-й крутке.</p>
    <p><strong>Формула:</strong><br>
    Шанс = базовый + (1 - базовый) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    где x = (pity - 65) / 15</p>`,
    section3_title: "Режимы симуляции — в чём разница?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Быстрая и лёгкая симуляция, которая считает только основные данные по 5★. Подходит, если нужна простая оценка без глубокой статистики и анализа 4★.</p>
    <p><strong>/simulate</strong><br>
    Полная симуляция с подробной статистикой по 5★ и 4★, включая распределение по типам (лимитированные и обычные), гарантийные дропы, дистанции между выпадениями и базовые показатели по 4★. Оптимальный режим для получения развернутой картины.</p>
    <p><strong>/extra_simulate</strong><br>
    Расширенный режим с самой детальной статистикой, включая распределения выпадений по пити-счётчику, графики, время обработки и точные вероятности выпадений в разных диапазонах. Подойдёт для тех, кто хочет глубоко проанализировать результаты симуляций.</p>`,
    section4_title: "Ограничения — в чём причина и как обойти?",
    section4_content: `<p>Из-за ограничений Telegram и вычислительных ресурсов бот ставит лимиты: максимум 1000 круток за симуляцию и 100 000 симуляций. Это предотвращает долгие задержки и перегрузку. Для больших объёмов рекомендуется использовать консольную версию (в разработке).</p>`
  },
  ja: {
    title: "Zatex Bot ヘルプ",
    section1_title: "パラメーター — 各項目の意味は？",
    section1_content: `<ul>
      <li><strong>ガチャ回数</strong> — 1回のセッションでのシミュレーション回数（最大1000回）。</li>
      <li><strong>シミュレーション回数</strong> — 統計のために同じセッションを繰り返す回数（最大100,000回まで）。</li>
      <li><strong>バナータイプ</strong> — 50/50（限定キャラが50%の確率で排出）か、限定キャラ確定のいずれかを選択。</li>
      <li><strong>4★アイテムのカウント</strong> — 統計に4★アイテムを含めるか除外するかの設定。</li>
      <li><strong>ソフトピティモード</strong> — 65回目以降に5★の排出確率が徐々に上がるシステムを考慮する。Wuthering Wavesにこの仕様があるため、有効化を推奨。</li>
    </ul>`,
    section2_title: "ソフトピティ — 何で、どう動作するのか？",
    section2_content: `<p>多くのガチャゲームには「ソフトピティ（soft pity）」システムが存在する。正確な仕様は非公開だが、ボットは近似式を使用する。ソフトピティは65回目から始まり、5★の排出率がS字カーブに沿って上昇し、80回目で100%に達する。</p>
    <p><strong>式：</strong><br>
    確率 = 基本値 + (1 - 基本値) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    ここで x = (ピティ - 65) / 15</p>`,
    section3_title: "シミュレーションモード — 何が違うの？",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    高速かつ軽量なシミュレーションで、5★に関する基本的なデータのみをカウント。簡易的な確認や軽い使用に最適。</p>
    <p><strong>/simulate</strong><br>
    5★および4★の詳細な統計を含む完全なシミュレーション。限定／恒常の分類、保証排出、出現間隔、4★の基本データも含まれる。全体像を把握するのに最適。</p>
    <p><strong>/extra_simulate</strong><br>
    最も詳細な統計を提供する拡張モード。ピティごとの排出分布、グラフ、処理時間、各区間の排出確率などを表示。結果を深く分析したいユーザー向け。</p>`,
    section4_title: "制限について — なぜあるのか？どう回避する？",
    section4_content: `<p>Telegramと計算資源の制限により、ボットには以下の制限がある：1回のシミュレーションにつき最大1000回のガチャ、最大100,000回のシミュレーション。これにより処理遅延や過負荷を防ぐ。大量処理にはコンソール版の使用が推奨（開発中）。</p>`
  },
  ko: {
    title: "Zatex Bot 도움말",
    section1_title: "매개변수 — 각 항목의 역할은?",
    section1_content: `<ul>
      <li><strong>뽑기 수</strong> — 한 세션에서 시뮬레이션하는 뽑기 횟수 (최대 1000회).</li>
      <li><strong>시뮬레이션 수</strong> — 통계 작성을 위해 뽑기 세션을 반복하는 횟수 (최대 100,000회).</li>
      <li><strong>배너 유형</strong> — 50/50(한정 캐릭터 획득 확률 50%) 또는 한정 캐릭터 확정 중 선택.</li>
      <li><strong>4★ 아이템 포함 여부</strong> — 통계 계산에 4★ 아이템을 포함할지 여부 설정.</li>
      <li><strong>소프트 피티 모드</strong> — 65회 뽑기 이후 5★ 등장 확률이 점진적으로 증가하는 것을 반영. Wuthering Waves에 적용된 메커니즘이므로 활성화를 권장.</li>
    </ul>`,
    section2_title: "소프트 피티 — 무엇이며 어떻게 작동하나?",
    section2_content: `<p>대부분의 가챠 게임에는 소프트 피티(soft pity) 시스템이 존재한다. 정확한 수치는 공개되지 않았으나, 봇은 근사 공식을 사용한다. 소프트 피티는 65번째 뽑기부터 시작하며, 5★ 등장 확률이 S자 곡선을 그리며 증가하여 80번째 뽑기에서 100%에 도달한다.</p>
    <p><strong>공식:</strong><br>
    확률 = 기본값 + (1 - 기본값) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    여기서 x = (피티 - 65) / 15</p>`,
    section3_title: "시뮬레이션 모드 — 차이점은?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    빠르고 가벼운 시뮬레이션으로, 5★ 주요 데이터만 계산. 깊은 통계나 4★ 분석 없이 간단한 평가용.</p>
    <p><strong>/simulate</strong><br>
    5★와 4★에 관한 상세 통계를 포함하는 완전한 시뮬레이션. 한정 및 일반 유형 분포, 보장 획득, 등장 간격, 4★ 기본 수치 등을 포함. 전체적인 그림을 얻기에 최적.</p>
    <p><strong>/extra_simulate</strong><br>
    가장 상세한 통계를 제공하는 확장 모드. 피티 카운터별 등장 분포, 그래프, 처리 시간, 각 구간별 정확한 등장 확률 포함. 결과를 깊이 분석하고자 하는 사용자에게 적합.</p>`,
    section4_title: "제한 사항 — 이유와 우회 방법",
    section4_content: `<p>Telegram과 계산 자원의 제한으로 인해, 봇은 최대 1000회 뽑기 및 100,000회 시뮬레이션 제한을 둔다. 이는 지연 및 과부하를 방지하기 위함이다. 대용량 작업은 콘솔 버전 사용 권장 (개발 중).</p>`
  },
  zh: {
    title: "Zatex 机器人帮助",
    section1_title: "参数 — 各项功能说明",
    section1_content: `<ul>
      <li><strong>抽卡次数</strong> — 每次模拟中的抽卡次数（最多1000次）。</li>
      <li><strong>模拟次数</strong> — 为统计而重复进行抽卡系列的次数（最多100,000次）。</li>
      <li><strong>卡池类型</strong> — 选择50/50（有50%概率获得限定角色）或保证限定角色。</li>
      <li><strong>4★道具计入</strong> — 是否将4★道具计入统计计算。</li>
      <li><strong>软保底模式</strong> — 考虑65抽后5★掉率逐步上升的机制。建议开启，因为《Wuthering Waves》中实现了此机制。</li>
    </ul>`,
    section2_title: "软保底 — 是什么，如何运作？",
    section2_content: `<p>大多数扭蛋游戏都有软保底系统。具体参数通常保密，但机器人使用近似公式。软保底从第65抽开始，5★掉率沿S形曲线增长，并在第80抽时达到100%。</p>
    <p><strong>公式：</strong><br>
    概率 = 基础概率 + (1 - 基础概率) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    其中 x = (pity - 65) / 15</p>`,
    section3_title: "模拟模式 — 有何区别？",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    快速且轻量的模拟，仅计算5★的基本数据。适合需要简单评估、无需深入统计和4★分析的情况。</p>
    <p><strong>/simulate</strong><br>
    完整模拟，包含5★和4★的详细统计，包括类别分布（限定与常规）、保底掉落、掉落间距及4★基础数据。是获取全面情况的最佳选择。</p>
    <p><strong>/extra_simulate</strong><br>
    高级模式，提供最详尽的统计数据，包括基于保底计数器的掉落分布、图表、处理时间和各阶段的精准掉率。适合想深入分析模拟结果的用户。</p>`,
    section4_title: "限制 — 原因及解决办法",
    section4_content: `<p>由于Telegram和计算资源限制，机器人设定了限制：每次模拟最多1000次抽卡，最多100,000次模拟。此举防止长时间延迟和过载。大规模需求建议使用控制台版本（开发中）。</p>`
  },
  es: {
    title: "Ayuda para el bot Zatex",
    section1_title: "Parámetros — ¿para qué sirve cada uno?",
    section1_content: `<ul>
      <li><strong>Número de tiradas</strong> — cantidad de simulaciones en una sesión (máximo 1000).</li>
      <li><strong>Número de simulaciones</strong> — cuántas veces se repite la serie de tiradas para estadísticas (hasta 100,000).</li>
      <li><strong>Tipo de banner</strong> — opción entre 50/50 (50% de probabilidad de obtener héroe limitado) o garantía de limitado.</li>
      <li><strong>Incluir objetos 4★</strong> — incluir o excluir objetos 4★ en el cálculo estadístico.</li>
      <li><strong>Modo soft pity</strong> — considera el aumento gradual de la probabilidad de obtener 5★ después de 65 tiradas. Se recomienda activar, ya que esta mecánica está implementada en Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — ¿qué es y cómo funciona?",
    section2_content: `<p>En la mayoría de los juegos gacha existe un sistema de “soft pity”. Sus parámetros exactos suelen ser secretos, pero el bot usa una fórmula aproximada. El soft pity comienza en la tirada 65, después de la cual la probabilidad de obtener 5★ crece siguiendo una curva en forma de S y llega al 100% en la tirada 80.</p>
    <p><strong>Fórmula:</strong><br>
    Probabilidad = base + (1 - base) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    donde x = (pity - 65) / 15</p>`,
    section3_title: "Modos de simulación — ¿en qué se diferencian?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Simulación rápida y ligera que solo calcula datos básicos de 5★. Adecuada para una evaluación simple sin análisis profundo ni estadísticas de 4★.</p>
    <p><strong>/simulate</strong><br>
    Simulación completa con estadísticas detalladas de 5★ y 4★, incluyendo distribución por tipos (limitados y normales), drops garantizados, distancias entre apariciones y datos básicos de 4★. Modo óptimo para obtener una visión completa.</p>
    <p><strong>/extra_simulate</strong><br>
    Modo avanzado con las estadísticas más detalladas, incluyendo distribuciones basadas en el contador de pity, gráficos, tiempo de procesamiento y probabilidades exactas de aparición en distintos rangos. Ideal para quienes quieren analizar a fondo los resultados.</p>`,
    section4_title: "Limitaciones — ¿por qué existen y cómo evitarlas?",
    section4_content: `<p>Por limitaciones de Telegram y recursos computacionales, el bot impone límites: máximo 1000 tiradas por simulación y 100,000 simulaciones. Esto previene retrasos y sobrecargas. Para volúmenes grandes se recomienda usar la versión de consola (en desarrollo).</p>`
  },
  pt: {
    title: "Ajuda do Bot Zatex",
    section1_title: "Parâmetros — para que serve cada um?",
    section1_content: `<ul>
      <li><strong>Número de giros</strong> — quantidade de simulações em uma sessão (máximo 1000).</li>
      <li><strong>Número de simulações</strong> — quantas vezes a série de giros é repetida para estatísticas (até 100.000).</li>
      <li><strong>Tipo de banner</strong> — escolha entre 50/50 (chance de 50% de obter um herói limitado) ou garantia de limitado.</li>
      <li><strong>Inclusão de itens 4★</strong> — incluir ou excluir itens 4★ no cálculo estatístico.</li>
      <li><strong>Modo soft pity</strong> — considera o aumento gradual da chance de obter 5★ após 65 giros. Recomendado ativar, pois essa mecânica está implementada em Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — o que é e como funciona?",
    section2_content: `<p>Na maioria dos jogos gacha existe um sistema de soft pity. Seus parâmetros exatos geralmente são ocultos, mas o bot usa uma fórmula aproximada. O soft pity começa no 65º giro, depois disso a chance de obter 5★ aumenta seguindo uma curva em S e chega a 100% no 80º giro.</p>
    <p><strong>Fórmula:</strong><br>
    Chance = base + (1 - base) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    onde x = (pity - 65) / 15</p>`,
    section3_title: "Modos de simulação — qual a diferença?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Simulação rápida e leve que calcula apenas os dados básicos de 5★. Adequada para avaliação simples sem estatísticas profundas ou análise de 4★.</p>
    <p><strong>/simulate</strong><br>
    Simulação completa com estatísticas detalhadas de 5★ e 4★, incluindo distribuição por tipos (limitados e comuns), drops garantidos, intervalos entre aparições e dados básicos de 4★. Modo ideal para obter uma visão abrangente.</p>
    <p><strong>/extra_simulate</strong><br>
    Modo avançado com as estatísticas mais detalhadas, incluindo distribuições de aparições por contador de pity, gráficos, tempo de processamento e probabilidades exatas em diferentes faixas. Indicado para quem deseja analisar profundamente os resultados.</p>`,
    section4_title: "Limitações — qual a razão e como contornar?",
    section4_content: `<p>Devido às limitações do Telegram e dos recursos computacionais, o bot impõe limites: máximo de 1000 giros por simulação e 100.000 simulações. Isso previne atrasos e sobrecarga. Para grandes volumes, recomenda-se usar a versão para console (em desenvolvimento).</p>`
  },
  fr: {
    title: "Aide du Bot Zatex",
    section1_title: "Paramètres — à quoi correspond chaque option ?",
    section1_content: `<ul>
      <li><strong>Nombre de tours</strong> — nombre de simulations dans une session (maximum 1000).</li>
      <li><strong>Nombre de simulations</strong> — nombre de fois que la série de tours est répétée pour les statistiques (jusqu’à 100 000).</li>
      <li><strong>Type de bannière</strong> — choix entre 50/50 (chance de 50 % d’obtenir un héros limité) ou limite garantie.</li>
      <li><strong>Prise en compte des objets 4★</strong> — inclure ou exclure les objets 4★ dans le calcul des statistiques.</li>
      <li><strong>Mode soft pity</strong> — prend en compte la montée progressive de la chance d’obtenir un 5★ après 65 tours. Recommandé de l’activer, cette mécanique est implémentée dans Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — qu’est-ce que c’est et comment ça fonctionne ?",
    section2_content: `<p>La plupart des jeux gacha ont un système de soft pity (pitié douce). Les paramètres exacts sont généralement secrets, mais le bot utilise une formule approximative. Le soft pity commence au 65e tour, après quoi la chance d’obtenir un 5★ augmente suivant une courbe en S et atteint 100 % au 80e tour.</p>
    <p><strong>Formule :</strong><br>
    Chance = base + (1 - base) × [1 / (1 + e^(-12 × (x - 0,5)))]<br>
    où x = (pity - 65) / 15</p>`,
    section3_title: "Modes de simulation — quelles différences ?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Simulation rapide et légère qui ne compte que les données principales sur les 5★. Adapté pour une évaluation simple sans statistiques approfondies ni analyse des 4★.</p>
    <p><strong>/simulate</strong><br>
    Simulation complète avec statistiques détaillées sur les 5★ et 4★, incluant la répartition par type (limité et normal), les drops garantis, les distances entre apparitions et les données de base sur les 4★. Mode optimal pour avoir une vue complète.</p>
    <p><strong>/extra_simulate</strong><br>
    Mode avancé avec les statistiques les plus détaillées, incluant la distribution des drops selon le compteur de pity, des graphiques, le temps de traitement et les probabilités précises de drops selon les plages. Convient pour une analyse approfondie des résultats.</p>`,
    section4_title: "Limitations — pourquoi existent-elles et comment les contourner ?",
    section4_content: `<p>En raison des limites de Telegram et des ressources informatiques, le bot impose des plafonds : maximum 1000 tours par simulation et 100 000 simulations. Cela évite les longs délais et la surcharge. Pour de gros volumes, il est recommandé d’utiliser la version console (en développement).</p>`
  },
  id: {
    title: "Bantuan Bot Zatex",
    section1_title: "Parameter — apa fungsi masing-masing?",
    section1_content: `<ul>
      <li><strong>Jumlah putaran</strong> — jumlah simulasi dalam satu sesi (maksimal 1000).</li>
      <li><strong>Jumlah simulasi</strong> — berapa kali rangkaian putaran diulang untuk statistik (hingga 100.000).</li>
      <li><strong>Tipe banner</strong> — pilihan antara 50/50 (peluang 50% mendapatkan hero terbatas) atau jaminan hero terbatas.</li>
      <li><strong>Perhitungan item 4★</strong> — memasukkan atau mengecualikan item 4★ dalam perhitungan statistik.</li>
      <li><strong>Mode soft pity</strong> — memperhitungkan peningkatan bertahap peluang mendapatkan 5★ setelah 65 putaran. Disarankan diaktifkan karena mekanik ini ada di Wuthering Waves.</li>
    </ul>`,
    section2_title: "Soft pity — apa itu dan bagaimana cara kerjanya?",
    section2_content: `<p>Di sebagian besar game gacha, terdapat sistem soft pity (pengampunan lunak). Parameter tepatnya biasanya rahasia, tapi bot menggunakan rumus pendekatan. Soft pity dimulai pada putaran ke-65, di mana peluang mendapatkan 5★ meningkat mengikuti kurva berbentuk S dan mencapai 100% pada putaran ke-80.</p>
    <p><strong>Rumus:</strong><br>
    Peluang = dasar + (1 - dasar) × [1 / (1 + e^(-12 × (x - 0,5)))]<br>
    di mana x = (pity - 65) / 15</p>`,
    section3_title: "Mode simulasi — apa bedanya?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Simulasi cepat dan ringan yang hanya menghitung data dasar tentang 5★. Cocok untuk evaluasi sederhana tanpa statistik mendalam atau analisis 4★.</p>
    <p><strong>/simulate</strong><br>
    Simulasi lengkap dengan statistik rinci tentang 5★ dan 4★, termasuk distribusi jenis (terbatas dan biasa), drop yang dijamin, jarak antar drop, dan data dasar 4★. Mode optimal untuk gambaran menyeluruh.</p>
    <p><strong>/extra_simulate</strong><br>
    Mode lanjutan dengan statistik paling detail, termasuk distribusi drop berdasarkan hitungan pity, grafik, waktu proses, dan peluang drop yang akurat di berbagai rentang. Cocok bagi yang ingin menganalisis hasil simulasi secara mendalam.</p>`,
    section4_title: "Batasan — apa penyebab dan bagaimana mengatasinya?",
    section4_content: `<p>Karena batasan Telegram dan sumber daya komputasi, bot menetapkan batas: maksimal 1000 putaran per simulasi dan 100.000 simulasi. Ini mencegah keterlambatan lama dan overload. Untuk volume besar, disarankan menggunakan versi konsol (sedang dikembangkan).</p>`
  },
  tr: {
    title: "Zatex Bot Yardım",
    section1_title: "Parametreler — her biri ne işe yarar?",
    section1_content: `<ul>
      <li><strong>Çevirme sayısı</strong> — bir oturumda yapılan simülasyon sayısı (maksimum 1000).</li>
      <li><strong>Simülasyon sayısı</strong> — istatistik için çevirme serisinin kaç kez tekrarlandığı (en fazla 100.000).</li>
      <li><strong>Banner türü</strong> — %50/50 seçeneği (limitli kahraman elde etme şansı %50) veya garanti limitli kahraman.</li>
      <li><strong>4★ öğelerinin sayımı</strong> — istatistik hesaplamasına 4★ öğelerinin dahil edilip edilmeyeceği.</li>
      <li><strong>Soft pity modu</strong> — 65. çeviriden sonra 5★ düşme şansının kademeli artışını dikkate alır. Wuthering Waves’te bu mekanik uygulandığı için açılması önerilir.</li>
    </ul>`,
    section2_title: "Soft pity — nedir ve nasıl çalışır?",
    section2_content: `<p>Çoğu gacha oyununda soft pity (yumuşak acıma) sistemi bulunur. Kesin parametreleri genellikle gizlidir, ancak bot yaklaşık bir formül kullanır. Soft pity 65. çeviriden sonra başlar ve 5★ düşme şansı S şeklinde bir eğriyle artarak 80. çeviride %100’e ulaşır.</p>
    <p><strong>Formül:</strong><br>
    Şans = temel + (1 - temel) × [1 / (1 + e^(-12 × (x - 0,5)))]<br>
    burada x = (pity - 65) / 15</p>`,
    section3_title: "Simülasyon modları — farkları nelerdir?",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    Hızlı ve basit bir simülasyon olup sadece 5★ temel verilerini hesaplar. Derin istatistik veya 4★ analizine gerek olmayan basit değerlendirmeler için uygundur.</p>
    <p><strong>/simulate</strong><br>
    5★ ve 4★ ile ilgili detaylı istatistikler içeren tam simülasyon. Türlere göre dağılım (limitli ve normal), garanti düşüşler, düşüşler arasındaki mesafeler ve 4★ temel verileri dahil. Kapsamlı analiz için optimal moddur.</p>
    <p><strong>/extra_simulate</strong><br>
    En detaylı istatistikleri sunan gelişmiş mod. Pity sayacına göre düşüş dağılımları, grafikler, işlem süresi ve farklı aralıklardaki kesin düşüş olasılıklarını içerir. Sonuçları derinlemesine analiz etmek isteyenlere uygundur.</p>`,
    section4_title: "Kısıtlamalar — neden var ve nasıl aşılır?",
    section4_content: `<p>Telegram ve hesaplama kaynakları sınırlamaları nedeniyle bot; simülasyon başına maksimum 1000 çevirme ve 100.000 simülasyon limiti koyar. Bu, uzun gecikmeleri ve aşırı yüklenmeyi önler. Büyük hacimler için konsol sürümü kullanılması tavsiye edilir (geliştirme aşamasında).</p>`
  },
  ar: {
    title: "مساعدة بوت Zatex",
    section1_title: "المعلمات — ما وظيفة كل منها؟",
    section1_content: `<ul>
      <li><strong>عدد اللفات</strong> — عدد المحاكاة في جلسة واحدة (بحد أقصى 1000).</li>
      <li><strong>عدد المحاكيات</strong> — عدد مرات تكرار سلسلة اللفات للإحصائيات (حتى 100,000).</li>
      <li><strong>نوع البانر</strong> — الاختيار بين 50/50 (فرصة 50% للحصول على بطل محدود) والضمان على البطل المحدود.</li>
      <li><strong>احتساب عناصر 4★</strong> — تضمين أو استبعاد عناصر 4★ من حساب الإحصائيات.</li>
      <li><strong>وضع soft pity</strong> — يأخذ في الاعتبار الزيادة التدريجية في فرصة الحصول على 5★ بعد 65 لفة. يُنصح بتفعيله لأن هذه الميكانيكية موجودة في Wuthering Waves.</li>
    </ul>`,
    section2_title: "soft pity — ما هو وكيف يعمل؟",
    section2_content: `<p>في معظم ألعاب الجاشا، هناك نظام يسمى soft pity (الشفقة الناعمة). عادةً ما تكون معاييره الدقيقة مخفية، لكن البوت يستخدم صيغة تقريبية. يبدأ soft pity من اللفة 65، بعدها تزداد فرصة الحصول على 5★ بشكل منحنى على شكل S وتصل إلى 100% عند اللفة 80.</p>
    <p><strong>الصيغة:</strong><br>
    الفرصة = الأساسية + (1 - الأساسية) × [1 / (1 + e^(-12 × (x - 0.5)))]<br>
    حيث x = (pity - 65) / 15</p>`,
    section3_title: "أنماط المحاكاة — ما الفرق بينها؟",
    section3_content: `<p><strong>/simple_simulate</strong><br>
    محاكاة سريعة وخفيفة تحسب فقط البيانات الأساسية عن 5★. مناسبة للتقييم البسيط بدون إحصائيات متعمقة أو تحليل 4★.</p>
    <p><strong>/simulate</strong><br>
    محاكاة كاملة مع إحصائيات مفصلة عن 5★ و4★، تشمل التوزيع حسب النوع (محدود وعادي)، الإسقاطات المضمونة، الفواصل بين الإسقاطات والبيانات الأساسية عن 4★. الوضع الأمثل للحصول على صورة شاملة.</p>
    <p><strong>/extra_simulate</strong><br>
    وضع متقدم مع أدق الإحصائيات، بما في ذلك توزيع الإسقاطات حسب عداد pity، الرسوم البيانية، وقت المعالجة، واحتمالات الإسقاط الدقيقة ضمن نطاقات مختلفة. مناسب لمن يريد تحليل النتائج بعمق.</p>`,
    section4_title: "القيود — ما السبب وكيف يمكن تجاوزها؟",
    section4_content: `<p>بسبب قيود Telegram والموارد الحاسوبية، يفرض البوت حدودًا: أقصى 1000 لفة لكل محاكاة و100,000 محاكاة. هذا يمنع التأخيرات الطويلة والتحميل الزائد. للحجم الكبير، يُنصح باستخدام النسخة الخاصة بالكونسول (قيد التطوير).</p>`
  }
};
