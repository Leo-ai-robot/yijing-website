/* ============================================
   易学工具 - 公共数据层
   Yijing Academy - Tools Data Module
   ============================================ */

window.TOOLS_DATA = (function() {

// ============ 基础数据 ============

const TIAN_GAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const DI_ZHI   = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const SHENG_XIAO = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

const WU_XING = ['木','火','土','金','水'];
const YIN_YANG_GAN = ['阳','阴','阳','阴','阳','阴','阳','阴','阳','阴']; // 天干阴阳

// 天干五行
const GAN_WUXING = {甲:'木',乙:'木',丙:'火',丁:'火',戊:'土',己:'土',庚:'金',辛:'金',壬:'水',癸:'水'};
// 地支五行
const ZHI_WUXING = {子:'水',丑:'土',寅:'木',卯:'木',辰:'土',巳:'火',午:'火',未:'土',申:'金',酉:'金',戌:'土',亥:'水'};
// 地支生肖
const ZHI_SHENGXIAO = {子:'鼠',丑:'牛',寅:'虎',卯:'兔',辰:'龙',巳:'蛇',午:'马',未:'羊',申:'猴',酉:'鸡',戌:'狗',亥:'猪'};

// ============ 纳音五行（60甲子） ============

const NAYIN = {
    '甲子':'海中金','乙丑':'海中金','丙寅':'炉中火','丁卯':'炉中火','戊辰':'大林木','己巳':'大林木',
    '庚午':'路旁土','辛未':'路旁土','壬申':'剑锋金','癸酉':'剑锋金','甲戌':'山头火','乙亥':'山头火',
    '丙子':'涧下水','丁丑':'涧下水','戊寅':'城头土','己卯':'城头土','庚辰':'白蜡金','辛巳':'白蜡金',
    '壬午':'杨柳木','癸未':'杨柳木','甲申':'泉中水','乙酉':'泉中水','丙戌':'屋上土','丁亥':'屋上土',
    '戊子':'霹雳火','己丑':'霹雳火','庚寅':'松柏木','辛卯':'松柏木','壬辰':'长流水','癸巳':'长流水',
    '甲午':'沙中金','乙未':'沙中金','丙申':'山下火','丁酉':'山下火','戊戌':'平地木','己亥':'平地木',
    '庚子':'壁上土','辛丑':'壁上土','壬寅':'金箔金','癸卯':'金箔金','甲辰':'覆灯火','乙巳':'覆灯火',
    '丙午':'天河水','丁未':'天河水','戊申':'大驿土','己酉':'大驿土','庚戌':'钗钏金','辛亥':'钗钏金',
    '壬子':'桑柘木','癸丑':'桑柘木','甲寅':'大溪水','乙卯':'大溪水','丙辰':'沙中土','丁巳':'沙中土',
    '戊午':'天上火','己未':'天上火','庚申':'石榴木','辛酉':'石榴木','壬戌':'大海水','癸亥':'大海水'
};

// ============ 生克关系 ============

const SHENG = {木:'火',火:'土',土:'金',金:'水',水:'木'};
const KE    = {木:'土',土:'水',水:'火',火:'金',金:'木'};

// ============ 64卦数据 ============

const HEXAGRAM_DATA = [
    {no:1, name:'乾', symbol:'䷀', desc:'天行健，自强不息'},
    {no:2, name:'坤', symbol:'䷁', desc:'地势坤，厚德载物'},
    {no:3, name:'屯', symbol:'䷂', desc:'云雷屯，君子以经纶'},
    {no:4, name:'蒙', symbol:'䷃', desc:'山下出泉，蒙'},
    {no:5, name:'需', symbol:'䷄', desc:'云上于天，需'},
    {no:6, name:'讼', symbol:'䷅', desc:'天与水违行，讼'},
    {no:7, name:'师', symbol:'䷆', desc:'地中有水，师'},
    {no:8, name:'比', symbol:'䷇', desc:'地上有水，比'},
    {no:9, name:'小畜', symbol:'䷈', desc:'风行天上，小畜'},
    {no:10, name:'履', symbol:'䷉', desc:'上天下泽，履'},
    {no:11, name:'泰', symbol:'䷊', desc:'天地交，泰'},
    {no:12, name:'否', symbol:'䷋', desc:'天地不交，否'},
    {no:13, name:'同人', symbol:'䷌', desc:'天与火，同人'},
    {no:14, name:'大有', symbol:'䷍', desc:'火在天上，大有'},
    {no:15, name:'谦', symbol:'䷎', desc:'地中有山，谦'},
    {no:16, name:'豫', symbol:'䷏', desc:'雷出地奋，豫'},
    {no:17, name:'随', symbol:'䷐', desc:'泽中有雷，随'},
    {no:18, name:'蛊', symbol:'䷑', desc:'山下有风，蛊'},
    {no:19, name:'临', symbol:'䷒', desc:'泽上有地，临'},
    {no:20, name:'观', symbol:'䷓', desc:'风行地上，观'},
    {no:21, name:'噬嗑', symbol:'䷔', desc:'雷电噬嗑'},
    {no:22, name:'贲', symbol:'䷕', desc:'山下有火，贲'},
    {no:23, name:'剥', symbol:'䷖', desc:'山附于地，剥'},
    {no:24, name:'复', symbol:'䷗', desc:'雷在地中，复'},
    {no:25, name:'无妄', symbol:'䷘', desc:'天下雷行，无妄'},
    {no:26, name:'大畜', symbol:'䷙', desc:'天在山中，大畜'},
    {no:27, name:'颐', symbol:'䷚', desc:'山下有雷，颐'},
    {no:28, name:'大过', symbol:'䷛', desc:'泽灭木，大过'},
    {no:29, name:'坎', symbol:'䷜', desc:'水洊至，习坎'},
    {no:30, name:'离', symbol:'䷝', desc:'明两作，离'},
    {no:31, name:'咸', symbol:'䷞', desc:'山上有泽，咸'},
    {no:32, name:'恒', symbol:'䷟', desc:'雷风，恒'},
    {no:33, name:'遯', symbol:'䷠', desc:'天下有山，遯'},
    {no:34, name:'大壮', symbol:'䷡', desc:'雷在天上，大壮'},
    {no:35, name:'晋', symbol:'䷢', desc:'明出地上，晋'},
    {no:36, name:'明夷', symbol:'䷣', desc:'明入地中，明夷'},
    {no:37, name:'家人', symbol:'䷤', desc:'风自火出，家人'},
    {no:38, name:'睽', symbol:'䷥', desc:'上火下泽，睽'},
    {no:39, name:'蹇', symbol:'䷦', desc:'山上有水，蹇'},
    {no:40, name:'解', symbol:'䷧', desc:'雷雨作，解'},
    {no:41, name:'损', symbol:'䷨', desc:'山下有泽，损'},
    {no:42, name:'益', symbol:'䷩', desc:'风雷，益'},
    {no:43, name:'夬', symbol:'䷪', desc:'泽上于天，夬'},
    {no:44, name:'姤', symbol:'䷫', desc:'天下有风，姤'},
    {no:45, name:'萃', symbol:'䷬', desc:'泽上于地，萃'},
    {no:46, name:'升', symbol:'䷭', desc:'地中生木，升'},
    {no:47, name:'困', symbol:'䷮', desc:'泽无水，困'},
    {no:48, name:'井', symbol:'䷯', desc:'木上有水，井'},
    {no:49, name:'革', symbol:'䷰', desc:'泽中有火，革'},
    {no:50, name:'鼎', symbol:'䷱', desc:'火上有风，鼎'},
    {no:51, name:'震', symbol:'䷲', desc:'洊雷，震'},
    {no:52, name:'艮', symbol:'䷳', desc:'兼山，艮'},
    {no:53, name:'渐', symbol:'䷴', desc:'山上有木，渐'},
    {no:54, name:'归妹', symbol:'䷵', desc:'泽上有雷，归妹'},
    {no:55, name:'丰', symbol:'䷶', desc:'雷电皆至，丰'},
    {no:56, name:'旅', symbol:'䷷', desc:'山上有火，旅'},
    {no:57, name:'巽', symbol:'䷸', desc:'随风，巽'},
    {no:58, name:'兑', symbol:'䷹', desc:'丽泽，兑'},
    {no:59, name:'涣', symbol:'䷺', desc:'风行水上，涣'},
    {no:60, name:'节', symbol:'䷻', desc:'泽上有水，节'},
    {no:61, name:'中孚', symbol:'䷼', desc:'泽上有风，中孚'},
    {no:62, name:'小过', symbol:'䷽', desc:'山上有雷，小过'},
    {no:63, name:'既济', symbol:'䷾', desc:'水在火上，既济'},
    {no:64, name:'未济', symbol:'䷿', desc:'火在水上，未济'}
];

// ============ 宜忌规则（简化版） ============

// 基于天干的宜忌规则
const GAN_YIJI = {
    '甲': {yi:['祭祀','祈福','出行','会友'], ji:['开市','动土','嫁娶']},
    '乙': {yi:['嫁娶','出行','移徙','安床'], ji:['祭祀','开市','伐木']},
    '丙': {yi:['祭祀','出行','会友','求医'], ji:['动土','开市','嫁娶']},
    '丁': {yi:['祭祀','嫁娶','出行','会友'], ji:['开市','动土','伐木']},
    '戊': {yi:['祭祀','会友','求医','出行'], ji:['嫁娶','开市','移徙']},
    '己': {yi:['祭祀','嫁娶','出行','会友'], ji:['动土','开市','伐木']},
    '庚': {yi:['祭祀','出行','嫁娶','会友'], ji:['开市','动土','求医']},
    '辛': {yi:['祭祀','出行','会友','安床'], ji:['嫁娶','开市','动土']},
    '壬': {yi:['祭祀','出行','会友','求医'], ji:['开市','嫁娶','动土']},
    '癸': {yi:['祭祀','嫁娶','出行','会友'], ji:['开市','动土','伐木']}
};

// 基于地支的宜忌规则
const ZHI_YIJI = {
    '子': {yi:['祭祀','求嗣','嫁娶','出行'], ji:['开市','动土','伐木']},
    '丑': {yi:['祭祀','嫁娶','出行','会友'], ji:['开市','动土','出行']},
    '寅': {yi:['祭祀','出行','嫁娶','会友'], ji:['动土','开市','伐木']},
    '卯': {yi:['祭祀','嫁娶','出行','安床'], ji:['开市','动土','伐木']},
    '辰': {yi:['祭祀','出行','嫁娶','会友'], ji:['开市','动土','出行']},
    '巳': {yi:['祭祀','出行','嫁娶','会友'], ji:['动土','开市','伐木']},
    '午': {yi:['祭祀','出行','会友','求医'], ji:['嫁娶','开市','动土']},
    '未': {yi:['祭祀','嫁娶','出行','会友'], ji:['开市','动土','出行']},
    '申': {yi:['祭祀','出行','嫁娶','会友'], ji:['动土','开市','伐木']},
    '酉': {yi:['祭祀','嫁娶','出行','会友'], ji:['开市','动土','出行']},
    '戌': {yi:['祭祀','出行','嫁娶','会友'], ji:['开市','动土','出行']},
    '亥': {yi:['祭祀','出行','嫁娶','会友'], ji:['开市','动土','伐木']}
};

// ============ 24节气数据（2024-2030） ============

const SOLAR_TERMS = {
    2024: [
        {name:'小寒',date:'1/6',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/4',qi:'厥阴风木'},
        {name:'雨水',date:'2/19',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/4',qi:'少阴君火'},
        {name:'谷雨',date:'4/19',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/20',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/6',qi:'太阴湿土'},
        {name:'大暑',date:'7/22',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/22',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/22',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ],
    2025: [
        {name:'小寒',date:'1/5',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/3',qi:'厥阴风木'},
        {name:'雨水',date:'2/18',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/4',qi:'少阴君火'},
        {name:'谷雨',date:'4/20',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/21',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/7',qi:'太阴湿土'},
        {name:'大暑',date:'7/22',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/23',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/23',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ],
    2026: [
        {name:'小寒',date:'1/5',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/4',qi:'厥阴风木'},
        {name:'雨水',date:'2/19',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/4',qi:'少阴君火'},
        {name:'谷雨',date:'4/20',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/21',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/7',qi:'太阴湿土'},
        {name:'大暑',date:'7/22',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/23',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/23',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ],
    2027: [
        {name:'小寒',date:'1/5',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/4',qi:'厥阴风木'},
        {name:'雨水',date:'2/19',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/6',qi:'厥阴风木'},
        {name:'春分',date:'3/21',qi:'少阴君火'},
        {name:'清明',date:'4/5',qi:'少阴君火'},
        {name:'谷雨',date:'4/20',qi:'少阴君火'},
        {name:'立夏',date:'5/6',qi:'少阳相火'},
        {name:'小满',date:'5/21',qi:'少阳相火'},
        {name:'芒种',date:'6/6',qi:'少阳相火'},
        {name:'夏至',date:'6/22',qi:'太阴湿土'},
        {name:'小暑',date:'7/7',qi:'太阴湿土'},
        {name:'大暑',date:'7/23',qi:'太阴湿土'},
        {name:'立秋',date:'8/8',qi:'阳明燥金'},
        {name:'处暑',date:'8/23',qi:'阳明燥金'},
        {name:'白露',date:'9/8',qi:'阳明燥金'},
        {name:'秋分',date:'9/23',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/22',qi:'少阴君火'}
    ],
    2028: [
        {name:'小寒',date:'1/6',qi:'太阳寒水'},
        {name:'大寒',date:'1/21',qi:'太阳寒水'},
        {name:'立春',date:'2/4',qi:'厥阴风木'},
        {name:'雨水',date:'2/19',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/4',qi:'少阴君火'},
        {name:'谷雨',date:'4/19',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/20',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/6',qi:'太阴湿土'},
        {name:'大暑',date:'7/22',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/22',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/22',qi:'太阳寒水'},
        {name:'寒露',date:'10/7',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/6',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ],
    2029: [
        {name:'小寒',date:'1/5',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/3',qi:'厥阴风木'},
        {name:'雨水',date:'2/18',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/4',qi:'少阴君火'},
        {name:'谷雨',date:'4/20',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/21',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/7',qi:'太阴湿土'},
        {name:'大暑',date:'7/22',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/23',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/23',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ],
    2030: [
        {name:'小寒',date:'1/5',qi:'太阳寒水'},
        {name:'大寒',date:'1/20',qi:'太阳寒水'},
        {name:'立春',date:'2/4',qi:'厥阴风木'},
        {name:'雨水',date:'2/19',qi:'厥阴风木'},
        {name:'惊蛰',date:'3/5',qi:'厥阴风木'},
        {name:'春分',date:'3/20',qi:'少阴君火'},
        {name:'清明',date:'4/5',qi:'少阴君火'},
        {name:'谷雨',date:'4/20',qi:'少阴君火'},
        {name:'立夏',date:'5/5',qi:'少阳相火'},
        {name:'小满',date:'5/21',qi:'少阳相火'},
        {name:'芒种',date:'6/5',qi:'少阳相火'},
        {name:'夏至',date:'6/21',qi:'太阴湿土'},
        {name:'小暑',date:'7/7',qi:'太阴湿土'},
        {name:'大暑',date:'7/23',qi:'太阴湿土'},
        {name:'立秋',date:'8/7',qi:'阳明燥金'},
        {name:'处暑',date:'8/23',qi:'阳明燥金'},
        {name:'白露',date:'9/7',qi:'阳明燥金'},
        {name:'秋分',date:'9/23',qi:'太阳寒水'},
        {name:'寒露',date:'10/8',qi:'太阳寒水'},
        {name:'霜降',date:'10/23',qi:'太阳寒水'},
        {name:'立冬',date:'11/7',qi:'厥阴风木'},
        {name:'小雪',date:'11/22',qi:'厥阴风木'},
        {name:'大雪',date:'12/7',qi:'厥阴风木'},
        {name:'冬至',date:'12/21',qi:'少阴君火'}
    ]
};

// ============ 工具函数 ============

function calcYearGanzhi(year) {
    var gi = (year - 4) % 10; if (gi < 0) gi += 10;
    var zi = (year - 4) % 12; if (zi < 0) zi += 12;
    return {gan: TIAN_GAN[gi], zhi: DI_ZHI[zi], ganIdx: gi, zhiIdx: zi,
            shengxiao: SHENG_XIAO[zi]};
}

function calcDayGanzhi(date) {
    var base = new Date(2000, 0, 1);
    var diff = Math.floor((date - base) / (24 * 60 * 60 * 1000));
    var gi = ((diff + 0) % 10 + 10) % 10;
    var zi = ((diff + 0) % 12 + 12) % 12;
    return {gan: TIAN_GAN[gi], zhi: DI_ZHI[zi], ganIdx: gi, zhiIdx: zi,
            wuxing: GAN_WUXING[TIAN_GAN[gi]] + ZHI_WUXING[DI_ZHI[zi]],
            nayin: NAYIN[TIAN_GAN[gi] + DI_ZHI[zi]] || ''};
}

// 五虎遁：根据年干推算月干
function calcMonthGanzhi(year, month) {
    var yg = calcYearGanzhi(year);
    // 甲己之年丙作首，乙庚之岁戊为头，丙辛之年寻庚上，丁壬壬寅顺水流，戊癸何处起，甲寅之上好追求
    var monthStart = {甲:0,乙:2,丙:4,丁:6,戊:8,己:0,庚:2,辛:4,壬:6,癸:8};
    var start = monthStart[yg.gan];
    var mi = (start + month - 1) % 10;
    return {gan: TIAN_GAN[mi], zhi: DI_ZHI[(month + 1) % 12]};
}

// 获取今日完整干支信息
function getTodayInfo() {
    var now = new Date();
    var y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
    var yg = calcYearGanzhi(y);
    var dg = calcDayGanzhi(now);
    var mg = calcMonthGanzhi(y, m);
    return {
        year: y, month: m, day: d,
        yearGanZhi: yg.gan + yg.zhi,
        monthGanZhi: mg.gan + mg.zhi,
        dayGanZhi: dg.gan + dg.zhi,
        shengxiao: yg.shengxiao,
        dayWuxing: dg.wuxing,
        dayNayin: dg.nayin,
        yearGan: yg.gan, yearZhi: yg.zhi,
        dayGan: dg.gan, dayZhi: dg.zhi
    };
}

// 获取宜忌
function getYiJi(dayGan, dayZhi) {
    var gRules = GAN_YIJI[dayGan] || {yi:[],ji:[]};
    var zRules = ZHI_YIJI[dayZhi] || {yi:[],ji:[]};
    // 合并去重
    var yi = [...new Set(gRules.yi.concat(zRules.yi))];
    var ji = [...new Set(gRules.ji.concat(zRules.ji))];
    // 如果有冲突（同一事项既宜又忌），以地支规则为准
    ji = ji.filter(function(item) { return yi.indexOf(item) === -1; });
    return {yi: yi, ji: ji};
}

// 金钱卦起卦
function castCoin(num) {
    var results = [];
    for (var i = 0; i < num; i++) {
        var coins = [Math.random(), Math.random(), Math.random()];
        var heads = coins.filter(function(c) { return c < 0.5; }).length;
        var yao;
        var changing = false;
        if (heads === 3)       { yao = 'o'; changing = true; }  // 老阳（变爻）
        else if (heads === 2)  { yao = '—'; }                    // 少阴
        else if (heads === 1)  { yao = '⚊'; }                   // 少阳
        else                   { yao = 'x'; changing = true; }  // 老阴（变爻）
        results.push({yao: yao, heads: heads, changing: changing});
    }
    return results;
}

// 根据六爻结果确定卦（先天八卦序）
function getHexagramFromYao(yaos) {
    function trigramVal(y1, y2, y3) {
        var s = '';
        s += (y1 === '⚊' || y1 === 'o') ? '1' : '0';
        s += (y2 === '⚊' || y2 === 'o') ? '1' : '0';
        s += (y3 === '⚊' || y3 === 'o') ? '1' : '0';
        // 先天序: 乾111→0 坤000→1 震100→2 坎010→3 兑110→4 艮001→5 离101→6 巽011→7
        var m = {'111':0,'000':1,'100':2,'010':3,'110':4,'001':5,'101':6,'011':7};
        return m[s] !== undefined ? m[s] : 0;
    }
    var lower = trigramVal(yaos[2].yao, yaos[1].yao, yaos[0].yao);
    var upper = trigramVal(yaos[5].yao, yaos[4].yao, yaos[3].yao);
    var idx = upper * 8 + lower;
    return HEXAGRAM_DATA[idx] || HEXAGRAM_DATA[0];
}

return {
    TIAN_GAN: TIAN_GAN, DI_ZHI: DI_ZHI, SHENG_XIAO: SHENG_XIAO,
    WU_XING: WU_XING, GAN_WUXING: GAN_WUXING, ZHI_WUXING: ZHI_WUXING,
    ZHI_SHENGXIAO: ZHI_SHENGXIAO, NAYIN: NAYIN, SHENG: SHENG, KE: KE,
    HEXAGRAM_DATA: HEXAGRAM_DATA,
    SOLAR_TERMS: SOLAR_TERMS,
    calcYearGanzhi: calcYearGanzhi, calcDayGanzhi: calcDayGanzhi,
    calcMonthGanzhi: calcMonthGanzhi, getTodayInfo: getTodayInfo,
    getYiJi: getYiJi, castCoin: castCoin, getHexagramFromYao: getHexagramFromYao
};

})();
