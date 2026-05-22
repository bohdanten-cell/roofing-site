import { Home, Wrench, Layers, Snowflake, Ruler, Calendar, MapPin, ShieldCheck, Maximize2, Sun, GitMerge, Building2, Waves } from "lucide-react";

export type CaseData = {
  slug: string;
  title: string;
  type: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  description: string;
  specs: { label: string; value: string; icon: typeof Home }[];
  gallery: string[];
  galleryColumns?: 2 | 3;
  draft?: boolean;
  works: string[];
  materials: { name: string; role: string }[];
  color: { ral: string; name: string };
  complexity: { label: string; icon: typeof Home }[];
  beforeImage: string;
  afterImage: string;
};

export const cases: CaseData[] = [
  {
    slug: "koncha-zaspa-cottage",
    title: "Котедж в Конча-Заспі",
    type: "Фальцева покрівля",
    location: "Конча-Заспа, Київська область",
    area: "340 м²",
    year: "2024",
    heroImage: "/images/portfolio/koncha.jpg",
    description:
      "Виконали монтаж фальцевої покрівлі для сучасного заміського котеджу в Конча-Заспі. Проєкт включав повний цикл робіт: підготовку основи, монтаж покрівлі, гідроізоляцію та встановлення водостічної системи. Складна геометрія даху з мансардними вікнами та кількома рівнями потребувала індивідуального підходу до кожного вузла примикання.",
    specs: [
      { label: "Тип покрівлі", value: "Фальцева", icon: Home },
      { label: "Площа", value: "340 м²", icon: Ruler },
      { label: "Термін робіт", value: "12 днів", icon: Calendar },
      { label: "Локація", value: "Конча-Заспа", icon: MapPin },
      { label: "Рік", value: "2024", icon: Layers },
      { label: "Гарантія", value: "15 років", icon: ShieldCheck },
    ],
    gallery: [
      "/images/portfolio/koncha/koncha-1.jpg",
      "/images/portfolio/koncha/koncha-2.jpg",
      "/images/portfolio/koncha/koncha-3.jpg",
      "/images/portfolio/koncha/koncha-4.jpg",
      "/images/portfolio/koncha/koncha-5.jpg",
      "/images/portfolio/koncha/koncha-6.jpg",
    ],
    works: [
      "Демонтаж старої покрівлі",
      "Монтаж крокв та обрешітки",
      "Укладання пароізоляції та утеплювача",
      "Монтаж фальцевої покрівлі",
      "Гідроізоляція всіх примикань та вузлів",
      "Монтаж водостічної системи",
      "Встановлення снігозатримувачів",
      "Встановлення мансардних вікон Velux",
    ],
    materials: [
      { name: "Ruukki Classic", role: "Фальцевий профіль" },
      { name: "ArcelorMittal", role: "Листова сталь" },
      { name: "Aquaizol", role: "Гідроізоляційна мембрана" },
      { name: "Rockwool", role: "Утеплювач" },
      { name: "Velux", role: "Мансардні вікна" },
      { name: "Galeco", role: "Водостічна система" },
    ],
    color: { ral: "RAL 7024", name: "Графіт" },
    complexity: [
      { label: "Складна геометрія даху", icon: GitMerge },
      { label: "Мансардні вікна", icon: Sun },
      { label: "Велика площа", icon: Maximize2 },
      { label: "Кілька рівнів", icon: Layers },
    ],
    beforeImage: "/images/portfolio/koncha/koncha-do.jpg",
    afterImage: "/images/portfolio/koncha/koncha-pisla.jpg",
  },
  {
    slug: "obolon-house",
    title: "Приватний будинок, Оболонь",
    type: "Металочерепиця",
    location: "Оболонь, Київ",
    area: "180 м²",
    year: "2024",
    heroImage: "/images/portfolio/obolon.jpg",
    description:
      "Виконали повну заміну покрівлі на приватному будинку в Оболоні. Демонтували стару шиферну покрівлю, змонтували нову обрешітку та встановили металочерепицю. Роботи завершено в стислі терміни без зупинки проживання власників.",
    specs: [
      { label: "Тип покрівлі", value: "Металочерепиця", icon: Home },
      { label: "Площа", value: "180 м²", icon: Ruler },
      { label: "Термін робіт", value: "7 днів", icon: Calendar },
      { label: "Локація", value: "Оболонь, Київ", icon: MapPin },
      { label: "Рік", value: "2024", icon: Layers },
      { label: "Гарантія", value: "15 років", icon: ShieldCheck },
    ],
    gallery: [
      "/images/portfolio/obolon/obolon-1.jpg",
      "/images/portfolio/obolon/obolon-2.jpg",
      "/images/portfolio/obolon/obolon-3.jpg",
      "/images/portfolio/obolon/obolon-4.jpg",
    ],
    galleryColumns: 2,
    works: [
      "Демонтаж шиферної покрівлі",
      "Заміна прогнилих крокв",
      "Монтаж обрешітки",
      "Укладання гідроізоляційної плівки",
      "Монтаж металочерепиці",
      "Встановлення водостічної системи",
      "Монтаж коньків та примикань",
    ],
    materials: [
      { name: "Ruukki Monterrey", role: "Металочерепиця" },
      { name: "Aquaizol", role: "Гідроізоляційна плівка" },
      { name: "Rockwool", role: "Утеплювач" },
      { name: "Galeco Steel", role: "Водостічна система" },
    ],
    color: { ral: "RAL 3009", name: "Оксидно-червоний" },
    complexity: [
      { label: "Заміна крокв", icon: Wrench },
      { label: "Жилий будинок", icon: Home },
      { label: "Стислі терміни", icon: Calendar },
    ],
    beforeImage: "/images/portfolio/obolon/obolon-do.jpg",
    afterImage: "/images/portfolio/obolon/obolon-pisla.jpg",
  },
  {
    slug: "bucha-townhouse",
    title: "Таунхаус у Бучі",
    type: "Металочерепиця",
    location: "Буча, Київська область",
    area: "215 м²",
    year: "2024",
    heroImage: "/images/portfolio/bucha.jpg",
    description:
      "Монтаж металочерепиці на таунхаусі у Бучі. Об'єкт відзначався подовженою формою покрівлі та спільним гребенем на трьох секціях. Виконали роботи в одну зміну для мінімізації незручностей для мешканців.",
    specs: [
      { label: "Тип покрівлі", value: "Металочерепиця", icon: Home },
      { label: "Площа", value: "215 м²", icon: Ruler },
      { label: "Термін робіт", value: "9 днів", icon: Calendar },
      { label: "Локація", value: "Буча", icon: MapPin },
      { label: "Рік", value: "2024", icon: Layers },
      { label: "Гарантія", value: "15 років", icon: ShieldCheck },
    ],
    gallery: [
      "/images/portfolio/bucha/bucha 1.jpg",
      "/images/portfolio/bucha/bucha 2.jpg",
      "/images/portfolio/bucha/bucha 3-1.jpg",
      "/images/portfolio/bucha/bucha 3.jpg",
    ],
    galleryColumns: 2,
    works: [
      "Демонтаж старого покриття",
      "Монтаж обрешітки на трьох секціях",
      "Укладання гідроізоляції",
      "Монтаж металочерепиці",
      "Герметизація спільного гребеня",
      "Встановлення водостічної системи",
      "Прибирання та вивіз сміття",
    ],
    materials: [
      { name: "Ruukki Decorrey", role: "Металочерепиця" },
      { name: "Aquaizol", role: "Гідроізоляційна плівка" },
      { name: "Knauf", role: "Утеплювач" },
      { name: "Galeco PVC", role: "Водостічна система" },
    ],
    color: { ral: "RAL 7016", name: "Антрацит" },
    complexity: [
      { label: "Три секції", icon: Building2 },
      { label: "Спільний гребінь", icon: GitMerge },
      { label: "Жилий об'єкт", icon: Home },
    ],
    beforeImage: "/images/portfolio/bucha/bucha-do.jpg",
    afterImage: "/images/portfolio/bucha/bucha-pisla.jpg",
  },
  {
    slug: "irpin-cottage",
    draft: true,
    title: "Котедж в Ірпені",
    type: "Металочерепиця",
    location: "Ірпінь, Київська область",
    area: "420 м²",
    year: "2023",
    heroImage: "/images/portfolio/podil.jpg",
    description:
      "Масштабний проєкт — монтаж металочерепиці на великому котеджі в Ірпені. Великий об'єм робіт, складна вальмова конструкція даху та вузли примикання до димарів потребували точного розрахунку та досвіду бригади. Завершено в погоджені терміни з повною здачею об'єкту.",
    specs: [
      { label: "Тип покрівлі", value: "Металочерепиця", icon: Home },
      { label: "Площа", value: "420 м²", icon: Ruler },
      { label: "Термін робіт", value: "18 днів", icon: Calendar },
      { label: "Локація", value: "Ірпінь", icon: MapPin },
      { label: "Рік", value: "2023", icon: Layers },
      { label: "Гарантія", value: "15 років", icon: ShieldCheck },
    ],
    gallery: [
      "/images/portfolio/podil.jpg",
      "/images/portfolio/koncha.jpg",
      "/images/services/montazh 1.jpg",
      "/images/portfolio/bucha.jpg",
      "/images/services/uteplennya 1.jpg",
      "/images/portfolio/obolon.jpg",
    ],
    works: [
      "Демонтаж старої покрівлі",
      "Монтаж крокв вальмової конструкції",
      "Укладання пароізоляції та утеплювача",
      "Монтаж металочерепиці",
      "Облаштування примикань до димарів",
      "Монтаж водостічної системи",
      "Встановлення снігозатримувачів",
      "Прибирання та вивіз будівельного сміття",
    ],
    materials: [
      { name: "Ruukki Monterrey", role: "Металочерепиця" },
      { name: "Aquaizol", role: "Гідроізоляційна мембрана" },
      { name: "Rockwool", role: "Утеплювач" },
      { name: "Isover", role: "Пароізоляція" },
      { name: "Galeco Steel", role: "Водостічна система" },
    ],
    color: { ral: "RAL 6020", name: "Хромово-зелений" },
    complexity: [
      { label: "Вальмова конструкція", icon: GitMerge },
      { label: "Велика площа", icon: Maximize2 },
      { label: "Примикання до димарів", icon: Waves },
      { label: "Снігозатримувачі", icon: Snowflake },
    ],
    beforeImage: "/images/services/remont 1.jpg",
    afterImage: "/images/portfolio/podil.jpg",
  },
];
