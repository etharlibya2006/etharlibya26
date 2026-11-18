import React, { useState, useEffect } from 'react';
import { Translations, Language } from '../data/translations';
import { Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Product } from '../data/products';
import { getStoredProducts, getStoredBrands, BrandItem } from '../data/store';

interface BrandsShowcaseProps {
  t: Translations;
  lang: Language;
  onFilterBrand: (brandName: string) => void;
}

export const BrandsShowcase: React.FC<BrandsShowcaseProps> = ({
  t,
  lang,
  onFilterBrand,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [allProducts, setAllProducts] = useState<Product[]>(getStoredProducts());
  const [storedBrands, setStoredBrands] = useState<BrandItem[]>(() => getStoredBrands());

  useEffect(() => {
    const handleUpdate = () => {
      setAllProducts(getStoredProducts());
      setStoredBrands(getStoredBrands());
    };
    window.addEventListener('ethar_data_updated', handleUpdate);
    return () => window.removeEventListener('ethar_data_updated', handleUpdate);
  }, []);

  const monalisaLogo = (storedBrands || []).find((b) => b && b.brandKey === 'MONALISA')?.logo || './assets/aistudio/file_00000000aa0882109d60409cc16d385f_c0e1d28f.webp';

  const getBrandLogo = (brandKey: string, defaultLogo?: string) => {
    const found = (storedBrands || []).find((b) => b && b.brandKey === brandKey);
    return found?.logo || defaultLogo;
  };

  const monalisaProducts = (allProducts || []).filter((p) => p && p.brand === 'MONALISA').slice(0, 6);

  const partnerBrands = [
    {
      nameAr: 'بيك ميت (BAKEMATE)',
      nameEn: 'BAKEMATE',
      brandKey: 'BAKEMATE',
      logo: './assets/aistudio/file_00000000994c821099e24a09e82ae037_af4c677c.webp',
      originAr: 'بسكويت ومخبوزات عالمية',
      originEn: 'Global Bakery Lines',
      categoryAr: 'بسكويت دايجستيف القمح الكامل، كريسبي كوكيز، وبون تون رولز',
      categoryEn: 'Whole Wheat Digestives, Cookies & Wafer Rolls',
      descAr: 'علامة بسكويت عالمية عريقة تمتاز بجودة الحبوب الكاملة والقرمشة الذهبية الموثوقة لدى المستهلك الليبي.',
      descEn: 'Renowned international bakery brand famous for whole-wheat digestives, rich cookies, and wafer rolls.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_28_59_PM-4_3d6a1144.webp',
    },
    {
      nameAr: 'غذائي (Nutri-Food)',
      nameEn: 'Nutri-Food',
      brandKey: 'Nutri-Food',
      logo: './assets/aistudio/file_0000000009a08210b3c86b929adaecb8_f49e9bb9.webp',
      originAr: 'حلويات بوصفات أوروبية',
      originEn: 'European Recipe Confectionery',
      categoryAr: 'كيك الوافل بالتيراميسو وكيك ميلو الرخامي المحشو',
      categoryEn: 'Gourmet Tiramisu Waffles & Mellow Cakes',
      descAr: 'تشكيلة كيك الوافل الإيطالي ومخبوزات الشوكولاتة والمارشميلو المصممة كوجبات خفيفة يومية غنية بالطاقة.',
      descEn: 'Gourmet soft waffles, marshmallow cakes, and chocolate treats crafted with European recipes.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_33_07_PM-2_6735f79b.webp',
    },
    {
      nameAr: 'لوك مي (LookMe)',
      nameEn: 'LookMe',
      brandKey: 'LookMe',
      logo: './assets/aistudio/file_000000005b748210965ad7ef61dd2a0e_85c6eeea.webp',
      originAr: 'مخبوزات بريوش فرنسية',
      originEn: 'French Style Viennoiserie',
      categoryAr: 'بريوش كرواسون محشو بكريمة الشوكولاتة الذائبة',
      categoryEn: 'Choco Croissant Brioche (24 Pce)',
      descAr: 'عجينة بريوش مورقة وهشة محشوة بالشوكولاتة الكثيفة، عبوة عملية 24 قطعة مخصصة للمقاهي والمدارس.',
      descEn: 'Flaky French-style brioche croissant pastry filled with rich cocoa cream in 24-piece cartons.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_59_24_PM-8_f18a1faa.webp',
    },
    {
      nameAr: 'بيروتي شوكولاتة (Beiruti Chocolate)',
      nameEn: 'Beiruti Chocolate',
      brandKey: 'Beiruti',
      logo: './assets/products/beiruti_chocolate_logo.webp',
      originAr: 'شوكولاتة وجوز هند استوائي',
      originEn: 'Tropical Chocolate Bars',
      categoryAr: 'بولانتي (BOLANTY) – أصابع جوز الهند الطبيعي بالشوكولاتة',
      categoryEn: 'BOLANTY – Natural Coconut Bars in Milk Chocolate (2x24 Pcs)',
      descAr: 'ألواح بولانتي من شركة بيروتي شوكولاتة: جوز الهند الطبيعي الطازج المغطى بطبقة سميكة من شوكولاتة الحليب الفاخرة بطعم استوائي لا يُنسى.',
      descEn: 'BOLANTY by Beiruti Chocolate: pure shredded tropical coconut bars enrobed in smooth milk chocolate, double packed 2x24 pcs.',
      image: './assets/products/bolanty_coconut_chocolate_v2.webp',
    },
    {
      nameAr: 'ليبرا بركة (LIBRA)',
      nameEn: 'LIBRA',
      brandKey: 'LIBRA',
      logo: './assets/aistudio/file_00000000770c8210976a69383c8511ac_52ca2e3e.webp',
      originAr: 'بسكويت القهوة المحمصة',
      originEn: 'Roasted Coffee Biscuits',
      categoryAr: 'بسكويت القهوة المحمصة المقرمش الحلال',
      categoryEn: 'Halal Roasted Coffee Biscuits',
      descAr: 'بسكويت مقرمش وخفيف مع نكهة البن المحمص الأصيل والشهادات الصحية المعتمدة لرفيق القهوة الأمثل.',
      descEn: 'Aromatic crispy biscuits infused with roasted coffee aroma, officially Halal-certified.',
      image: './assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_34_PM-6_23596e29.webp',
    },
  ];

  return (
    <section id="brands" className="py-24 bg-[#fbf9f6] border-t-2 border-[#d9b239] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-[#b4362d]" />
            <span className="text-xs font-bold text-[#b4362d] tracking-widest uppercase font-cinzel">
              {t.brands.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-3 font-cinzel">
            {t.brands.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.brands.subtitle}
          </p>
        </div>

        {/* Brand Logos Showcase Grid - High-Resolution Official Brand Marks */}
        <div className="w-full mb-16 p-4 sm:p-6 bg-white rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
            {[
              { id: 'MONALISA', name: 'MONA LISA', logo: './assets/aistudio/file_00000000aa0882109d60409cc16d385f_c0e1d28f.webp' },
              { id: 'MONALISA_BLUE', name: 'MONA LISA Classic', logo: './assets/aistudio/file_00000000b4048210af1ee3a142551dee_060367c6.webp' },
              { id: 'BAKEMATE', name: 'BAKEMATE', logo: './assets/aistudio/file_00000000994c821099e24a09e82ae037_af4c677c.webp' },
              { id: 'LookMe', name: 'LookMe', logo: './assets/aistudio/file_000000005b748210965ad7ef61dd2a0e_85c6eeea.webp' },
              { id: 'Nutri-Food', name: lang === 'ar' ? 'غذائي Nutri-Food' : 'Nutri-Food', logo: './assets/aistudio/file_0000000009a08210b3c86b929adaecb8_f49e9bb9.webp' },
              { id: 'Beiruti', name: 'Beiruti Chocolate', logo: './assets/products/beiruti_chocolate_logo.webp' },
              { id: 'LIBRA', name: 'LiBRA', logo: './assets/aistudio/file_00000000770c8210976a69383c8511ac_52ca2e3e.webp' },
              { id: 'Maestro', name: 'Maestro', logo: './assets/aistudio/file_0000000097ec8210b8deeaabeb22da1d_b05a678d.webp' },
            ].map((brand) => (
              <div
                key={brand.id}
                title={brand.name}
                className="h-20 sm:h-24 w-full p-2.5 bg-white rounded-xl border border-stone-200 hover:border-[#d9b239] transition-colors flex items-center justify-center shadow-xs select-none"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Flagship MONALISA Showcase Pavilion (Deep Brick Red & Gold) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#b4362d] via-[#942921] to-[#7a1e17] border-3 border-[#d9b239] p-6 sm:p-12 shadow-2xl mb-24 relative overflow-hidden text-white">
          {/* Top Brand Banner Lockup */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b-2 border-white/20">
            <div className="flex flex-wrap items-center gap-6">
              {/* Single Authoritative MONALISA Brand Logo */}
              <div className="h-20 sm:h-24 px-6 py-2.5 bg-white rounded-xl shadow-xl border-2 border-[#d9b239] flex items-center justify-center">
                <img
                  src={monalisaLogo}
                  alt="MONALISA Brand Logo"
                  loading="lazy"
                  decoding="async"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#d9b239] text-[#50120d] text-xs font-black mb-2 font-cinzel shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.brands.monalisaBadge}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-cinzel">
                  {t.brands.monalisaTitle}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onFilterBrand('MONALISA')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase text-[#50120d] bg-gradient-to-r from-[#d9b239] via-[#f7d86f] to-[#d9b239] rounded shadow-lg hover:brightness-110 transition-all whitespace-nowrap border-2 border-white"
            >
              <span>{lang === 'ar' ? 'استعراض تشكيلة موناليزا بالكامل' : 'View Full MONALISA Lineup'}</span>
              <ArrowIcon className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Narrative + Pedestals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base text-white/95 leading-relaxed font-light">
                {t.brands.monalisaDesc}
              </p>
              <p className="text-base font-bold text-[#d9b239] font-cinzel tracking-wide">
                {t.brands.monalisaTagline}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {t.brands.monalisaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white font-medium">
                    <Check className="w-4 h-4 text-[#d9b239] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedestals in White Container Contrast */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-4 border-2 border-[#d9b239] text-center shadow-xl text-stone-900">
                <img
                  src="./assets/aistudio/ChatGPT_Image_Nov_4__2026__01_51_20_PM-1_5ebf1232.webp"
                  alt="MONALISA Biscotti Spread Studio"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-contain rounded-lg mb-2 filter drop-shadow-md"
                />
                <span className="text-xs font-bold text-stone-900 block">
                  {lang === 'ar' ? 'زبدة بيسكوتي سبريد' : 'Biscotti Spread'}
                </span>
                <span className="text-[10px] text-[#b4362d] font-mono font-bold">
                  {lang === 'ar' ? 'وصفة الكراميل الأوروبية' : 'Lotus Caramel Recipe'}
                </span>
              </div>

              <div className="rounded-xl bg-white p-4 border-2 border-[#d9b239] text-center shadow-xl text-stone-900">
                <img
                  src="./assets/aistudio/file_0000000058b88210ab860567e84c7ecc_70cc8e8d.webp"
                  alt="MONALISA Sweetened Condensed Milk"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-contain rounded-lg mb-2 filter drop-shadow-md"
                />
                <span className="text-xs font-bold text-stone-900 block">
                  {lang === 'ar' ? 'حليب مكثف محلى 397g' : 'Condensed Milk 397g'}
                </span>
                <span className="text-[10px] text-[#b4362d] font-mono font-bold">
                  {lang === 'ar' ? 'حليب طازج 100%' : '100% Pure Dairy'}
                </span>
              </div>
            </div>
          </div>

          {/* Marquee Products Strip */}
          <div className="pt-8 border-t-2 border-white/20">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6 font-cinzel">
              {lang === 'ar' ? 'أبرز منتجات موناليزا في المتاجر الليبية:' : 'MARQUEE MONALISA PRODUCTS ON LIBYAN SHELVES:'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {monalisaProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => onFilterBrand('MONALISA')}
                  className="cursor-pointer group p-3.5 rounded-xl bg-white border border-[#d9b239]/50 hover:border-white transition-all text-center flex flex-col justify-between shadow text-stone-900"
                >
                  <div className="h-28 w-full flex items-center justify-center p-2 mb-2 bg-[#fbf9f6] rounded-lg">
                    <img
                      src={prod.image}
                      alt={lang === 'ar' ? prod.nameAr : prod.nameEn}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-xs font-bold text-stone-900 group-hover:text-[#b4362d] transition-colors line-clamp-2">
                    {lang === 'ar' ? prod.nameAr : prod.nameEn}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1 block font-mono">
                    {lang === 'ar' ? prod.weight : (prod.weightEn || prod.weight)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Partner Brands on White */}
        <div>
          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2 font-cinzel">
              {t.brands.partnerBrandsTitle}
            </h3>
            <p className="text-stone-600 text-sm font-light">
              {t.brands.partnerBrandsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBrands.map((brand, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-stone-200 hover:border-[#b4362d] p-6 flex flex-col justify-between transition-all shadow-md"
              >
                <div>
                  <div className="h-44 w-full bg-[#fbf9f6] rounded-xl overflow-hidden p-4 mb-4 flex items-center justify-center border border-stone-200">
                    <img
                      src={brand.image}
                      alt={lang === 'ar' ? brand.nameAr : brand.nameEn}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {getBrandLogo(brand.brandKey, brand.logo) && (
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-stone-200 bg-white p-0.5 shrink-0 flex items-center justify-center shadow-xs">
                          <img
                            src={getBrandLogo(brand.brandKey, brand.logo)}
                            alt={lang === 'ar' ? brand.nameAr : brand.nameEn}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-stone-900 font-cinzel">
                        {lang === 'ar' ? brand.nameAr : brand.nameEn}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-[#b4362d] px-2.5 py-0.5 rounded font-mono">
                      {lang === 'ar' ? brand.originAr : brand.originEn}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#b4362d] mb-2">
                    {lang === 'ar' ? brand.categoryAr : brand.categoryEn}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {lang === 'ar' ? brand.descAr : brand.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onFilterBrand(brand.brandKey)}
                    className="text-xs font-bold text-[#b4362d] hover:text-[#87251d] inline-flex items-center gap-1.5"
                  >
                    <span>{lang === 'ar' ? 'عرض الكتالوج' : 'View Catalog'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {lang === 'ar' ? 'توزيع معتمد' : 'Authorized Dist.'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
