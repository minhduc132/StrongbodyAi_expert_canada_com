import type { VoiceCreatorFooterCopy } from '@/content/voice-creator-footer';

/**
 * The four columns strongbody.ai shows a signed-out visitor, in the same order.
 *
 * Every href is absolute: these are marketplace routes that exist on
 * strongbody.ai and not on this country domain, so linking relatively would
 * point every one of them at a 404.
 */
const SITE = 'https://www.strongbody.ai';
/**
 * Nguồn của lượt click, để báo cáo signup biết người dùng đến từ site
 * quốc gia nào. Nối vào cuối từng đường dẫn chứ không nhét vào `SITE`,
 * vì `SITE` là gốc để ghép path.
 */
const REF = '?utm_campaign=country_site&utm_source=get-expert-canada.com';

export type FooterLabelKey = keyof VoiceCreatorFooterCopy['links'];

export interface FooterItem {
  key: FooterLabelKey;
  href: string;
  /** Renders with the palm mark, as on strongbody.ai. */
  hea?: boolean;
  /** strongbody.ai hides this from signed-out visitors in the mobile menu. */
  authOnly?: boolean;
}

export interface FooterColumn {
  id: string;
  titleKey: keyof VoiceCreatorFooterCopy['columns'];
  items: FooterItem[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: 'discover',
    titleKey: 'discover',
    items: [
      { key: 'servicesCategories', href: `${SITE}/service-categories${REF}` },
      { key: 'productCollections', href: `${SITE}/products${REF}` },
      { key: 'strongbodyMultimeAi', href: `${SITE}/multimeapp${REF}` },
      { key: 'transYourVoice', href: 'https://www.multime.ai/profile' },
      { key: 'popularServices', href: `${SITE}/popular-services${REF}`, hea: true },
      { key: 'featuredExperts', href: `${SITE}/featured-experts${REF}` },
      { key: 'successStories', href: `${SITE}/success-story${REF}` },
    ],
  },
  {
    id: 'for_users',
    titleKey: 'forUser',
    items: [
      { key: 'howItWorks', href: `${SITE}/how-we-work${REF}` },
      { key: 'howToWriteRequest', href: `${SITE}/mini-jd${REF}` },
      { key: 'solutionsForBuyer', href: `${SITE}/solutions-for-buyer${REF}` },
      { key: 'trustSafety', href: `${SITE}/trust-and-safety${REF}` },
      { key: 'verificationGuide', href: `${SITE}/verification-guidelines${REF}` },
      { key: 'paymentProtection', href: `${SITE}/secure-payment-protect${REF}` },
      { key: 'helpCenter', href: `${SITE}/help-center${REF}` },
    ],
  },
  {
    id: 'business',
    titleKey: 'business',
    items: [
      { key: 'becomePublisher', href: `${SITE}/become-publisher${REF}` },
      { key: 'becomeProvider', href: `${SITE}/become-seller/profession-search${REF}` },
      { key: 'affiliateProgram', href: `${SITE}/affiliate/introduction${REF}`, authOnly: true },
      { key: 'whatIsHea', href: `${SITE}/what-is-hea${REF}`, hea: true },
      { key: 'forStudents', href: `${SITE}/education${REF}` },
      { key: 'hrFreelancer', href: `${SITE}/freelance-recuiter${REF}` },
      { key: 'saleGlobalVoice', href: `${SITE}/sale-apply${REF}` },
      { key: 'letterOrganization', href: `${SITE}/letter-organization${REF}` },
    ],
  },
  {
    id: 'company',
    titleKey: 'company',
    items: [
      { key: 'aboutUs', href: `${SITE}/about-us${REF}` },
      { key: 'getInspired', href: `${SITE}/well-ness-global-get-inspired-hea${REF}` },
      { key: 'blogNews', href: `${SITE}/blogs${REF}` },
      { key: 'termsOfService', href: `${SITE}/articles/terms-and-conditions${REF}` },
      { key: 'privacyPolicy', href: `${SITE}/articles/privacy-policy${REF}` },
      { key: 'contactUs', href: `${SITE}/contact${REF}` },
    ],
  },
];
