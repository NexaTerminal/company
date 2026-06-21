'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Star,
  Calendar,
  Building,
  Scale,
  User,
  MapPin,
  Mail,
  ChevronRight,
  Award,
  Zap,
  Globe,
  Users,
  Banknote,
  Briefcase,
  Plane,
  Receipt,
  Languages,
} from 'lucide-react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

type Lang = 'en' | 'mk';

// ---------- CONTENT ----------
const content = {
  en: {
    badge: 'Verified guide · Reviewed by licensed professionals in the Nexa network',
    h1: 'Company Registration in North Macedonia: The Complete 2026 Guide',
    tldr:
      'You can register a company in North Macedonia in a matter of days. Most businesses choose a limited liability company (DOO or single-member DOOEL), which requires EUR 5,000 in share capital that you can pay within one year of registration. Foreigners can own and manage a company 100%, with no residency required, and registration is handled electronically through the Central Registry’s One-Stop-Shop System. Corporate profit tax is a flat 10% — among the lowest in Europe.',
    heroBadges: {
      jurisdiction: 'Central Registry · One-Stop-Shop',
      time: 'Decision typically within 5 business days',
      tax: 'Flat 10% corporate profit tax',
    },
    ctaPrimary: 'Connect with a company registration expert',
    ctaSecondary: 'Costs & taxes',

    why: {
      title: 'Why register a company in North Macedonia',
      p1:
        'North Macedonia is one of the most accessible places in Southeast Europe to start a business. The country offers a flat 10% corporate profit tax and a flat 10% personal income tax — among the lowest rates in Europe — and free-trade access to more than 650 million consumers through agreements with the EU (Stabilisation and Association Agreement), CEFTA, and EFTA. Its location on major European transport corridors, a multilingual workforce, and a low cost of living make cities like Skopje, Bitola, Ohrid, and Tetovo attractive bases for technology, services, manufacturing, and trade.',
      p2:
        'Registration itself is fast and largely electronic. The Central Registry of the Republic of North Macedonia operates a One-Stop-Shop System that lets you register your company, obtain a tax number, and complete several formalities in a single coordinated process. For founders who want to relocate, owning and managing a company can also open a path to a residence permit.',
    },

    entities: {
      title: 'Choosing your legal entity',
      intro:
        'The legal form you choose determines your liability, your capital requirements, and your reporting obligations. North Macedonia recognizes several forms; most new businesses choose between the sole proprietor and one of the limited liability variants.',
      list: [
        {
          short: 'DOO',
          title: 'Limited Liability Company (DOO)',
          body:
            'The most common choice for small and medium businesses. A DOO can have between 2 and 50 founders, who may be individuals or legal entities, domestic or foreign. Liability is limited to each member’s capital contribution. The minimum share capital is EUR 5,000, which may be contributed in cash or in kind and may be paid within one year of registration.',
          icon: 'Building',
          route: '/doo',
        },
        {
          short: 'DOOEL',
          title: 'Single-Member LLC (DOOEL)',
          body:
            'A DOO with exactly one founder. It carries the same EUR 5,000 minimum capital and the same limited-liability protection. This is the typical structure for a solo entrepreneur or a wholly-owned subsidiary.',
          icon: 'User',
          route: '/dooel',
        },
        {
          short: 'TP',
          title: 'Sole Proprietor (Trgovec Poedinec, TP)',
          body:
            'A business run by a single individual who is personally liable for all obligations of the business with their entire personal assets. There is no minimum capital. It is the simplest and cheapest form, commonly used by craftspeople, farmers, artists, carriers, and small service providers — but the unlimited personal liability is a significant trade-off.',
          icon: 'Briefcase',
          route: '/sole-proprietor',
        },
        {
          short: 'PDOO',
          title: 'Simplified LLC (PDOO) — the “1-euro company”',
          body:
            'A simplified limited liability company can be founded by up to three individuals, one of whom is the manager. The minimum share capital is just EUR 1 (in denar equivalent), with a minimum nominal share of 10 cents. In exchange for the low entry capital, a PDOO must build a mandatory reserve by setting aside one quarter of its annual profit until the reserve reaches the level of standard share capital. It is designed to lower the barrier for first-time founders.',
          icon: 'Zap',
          route: '/pdoo',
        },
        {
          short: 'AD',
          title: 'Joint-Stock Company (AD)',
          body:
            'Suitable for larger businesses and those that may raise capital from many shareholders. Minimum capital is higher — broadly EUR 25,000 for a private AD and EUR 50,000 for a public AD — and governance requirements are more demanding.',
          icon: 'Scale',
          route: '/ad',
        },
        {
          short: 'Branch',
          title: 'Branch & Representative Office',
          body:
            'A foreign company can register a branch (podružnica), which is not a separate legal entity but can conduct commercial activity, or a representative office (pretstavništvo), which is limited to market research and promotion and cannot trade.',
          icon: 'MapPin',
          route: '/branch',
        },
      ],
      tableTitle: 'Entity comparison',
      tableHead: ['Entity', 'Founders', 'Min. capital', 'Liability', 'Best for'],
      tableRows: [
        ['Sole Proprietor (TP)', '1 individual', 'None', 'Unlimited (personal)', 'Craftspeople, freelancers, micro-business'],
        ['Single-Member LLC (DOOEL)', '1', 'EUR 5,000 (within 1 yr)', 'Limited to contribution', 'Solo entrepreneur, subsidiary'],
        ['Limited Liability Company (DOO)', '2–50', 'EUR 5,000 (within 1 yr)', 'Limited to contribution', 'SMEs, partnerships'],
        ['Simplified LLC (PDOO)', 'Up to 3 individuals', 'EUR 1', 'Limited (with mandatory reserve)', 'First-time founders, low capital'],
        ['Joint-Stock Company (AD)', '1+ shareholders', 'EUR 25,000 private / 50,000 public', 'Limited to shares', 'Large/capital-raising businesses'],
        ['Branch (Podružnica)', 'n/a (foreign parent)', 'n/a', 'Parent liable', 'Foreign company entering the market'],
      ],
    },

    capital: {
      title: 'Minimum capital requirements',
      body:
        'For a DOO or DOOEL, the minimum share capital is EUR 5,000 (in denar equivalent). An important practical point: you do not have to deposit the full amount before the company exists. The capital can be paid in cash or contributed in kind (equipment, vehicles, real estate), and the law allows it to be paid within one year of registration. In-kind contributions must be independently valued. A simplified LLC (PDOO) requires only EUR 1, and a sole proprietor (TP) requires no minimum capital at all.',
    },

    process: {
      title: 'The company registration process, step by step',
      intro:
        'Registration is coordinated by the Central Registry of the Republic of North Macedonia through its One-Stop-Shop System.',
      steps: [
        {
          title: 'Choose legal form and capital',
          action: 'Decide between TP, DOOEL, DOO, PDOO, or AD, and decide whether your capital contribution will be in cash or in kind.',
        },
        {
          title: 'Reserve company name and activity code',
          action:
            'Your company name must be unique and not misleading; it can be checked and reserved through the Central Registry. You also select your principal activity code from the National Classification of Activities (NKD) maintained by the State Statistical Office.',
        },
        {
          title: 'Prepare and notarize founding documents',
          action:
            'For a DOO this is the Articles of Incorporation (founding agreement); for a DOOEL it is the founding statement. You also prepare the decision appointing the manager and the statutory statements required under the Company Law (notably the manager’s statement and statements under the relevant articles of the Law on Trade Companies). Documents are notarized.',
        },
        {
          title: 'Submit to the Central Registry (One-Stop-Shop)',
          action:
            'Documents are filed electronically with the Central Registry. The One-Stop-Shop System coordinates registration and the issuance of your tax number in one process.',
        },
        {
          title: 'Receive your registration decision and tax number',
          action:
            'The Central Registry reviews the application and, on approval, issues the registration decision and assigns your Unique Identification Number (EDB), the tax number you will use for all financial and legal operations.',
        },
        {
          title: 'Company seal and bank account',
          action:
            'After registration you produce the company seal and open a corporate bank account. The manager generally must appear in person at the bank to finalize the account.',
        },
      ],
    },

    docs: {
      title: 'Documents required',
      doo: {
        h: 'For a DOO or DOOEL',
        items: [
          'Founding agreement (DOO) or founding statement (DOOEL)',
          'Copies of the ID card or passport of each founder',
          'For a corporate founder: extract from its commercial register (apostilled and translated for foreign entities)',
          'Proof of the share-capital payment (or the agreement to pay within one year)',
          'Valuation report and contribution agreement for any in-kind contribution',
          'Decision appointing the manager',
          'Statutory statements required of the manager and founders under the Company Law',
        ],
      },
      tp: {
        h: 'For a sole proprietor (TP)',
        items: [
          'Application for registration',
          'Copy of the ID card or passport',
          'The required statutory statement',
        ],
      },
      foreignNote:
        'Foreign documents must generally be notarized and apostilled (unless a bilateral treaty waives this) and translated into Macedonian by a certified translator.',
    },

    costs: {
      title: 'How much does it cost to register a company?',
      intro:
        'The total cost of registering a company in North Macedonia is made up of several components rather than a single fee. Plan for the items below. Separately, you commit the EUR 5,000 minimum share capital for a DOO/DOOEL — this is your own money that funds the business, not a fee, and it can be paid within one year.',
      tableHead: ['Component', 'Notes'],
      rows: [
        ['Central Registry / One-Stop-Shop fee', 'Low, fixed administrative cost'],
        ['Notary fees', 'Depend on capital and number of documents'],
        ['Company seal', 'One-off'],
        ['Bank account opening', 'Varies by bank'],
        ['Translation & apostille (foreign docs)', 'Only for foreign founders/documents'],
        ['Professional / agent fees', 'Optional but recommended'],
        ['Share capital (DOO/DOOEL)', 'EUR 5,000 — your funds, payable within 1 year'],
      ],
      ctaText: 'For a precise, itemized quote, we will help you connect with a registration expert who can review your case.',
    },

    timeline: {
      title: 'How long does registration take?',
      body:
        'Registration is one of the faster processes in the region. Once a complete set of documents is submitted, the Central Registry typically issues its decision within five business days, and in straightforward cases within 24 to 48 hours. Realistically, from first consultation to a fully operational company — including the seal, a permanent bank account, and any initial VAT or employee registration — allow one to two weeks.',
      pills: [
        { label: 'Central Registry decision', value: '5 business days (often 24–48h)' },
        { label: 'Fully operational', value: '1–2 weeks' },
      ],
    },

    foreigners: {
      title: 'Registering a company as a foreigner',
      cards: [
        {
          h: '100% foreign ownership',
          b:
            'Foreign nationals — whether individuals or legal entities — can fully own and manage a company in North Macedonia, with no requirement to be a resident. Both founders and directors may be foreign.',
        },
        {
          h: 'Residence permit through your company',
          b:
            'Because company directors may apply for a residence permit on the basis of their role, forming a company can be a route to legal residence. Permits are typically issued for one year and are renewable, and family members may join under family reunification. This makes the DOO/DOOEL attractive not only for commercial expansion but also for relocation.',
          link: { text: 'See the immigration guide at immigration.mk', href: 'https://immigration.mk' },
        },
        {
          h: 'Foreign Direct Investment (FDI) registration',
          b:
            'Where the founders are foreign, the company must also be recorded in the Foreign Direct Investment register. This is normally handled as part of the incorporation process.',
        },
      ],
    },

    post: {
      title: 'Post-registration obligations',
      items: [
        {
          h: 'Ultimate Beneficial Owner (UBO) registration',
          b:
            'Every company must identify and register its ultimate beneficial owner(s) — the natural person(s) who ultimately own or control the company — in the UBO register. This is a legal obligation tied to anti-money-laundering rules.',
        },
        {
          h: 'VAT registration',
          b:
            'VAT registration becomes mandatory once your taxable turnover exceeds MKD 2,000,000 in a calendar year (or is expected to). You may also register voluntarily — useful if you trade with VAT-registered partners and want to reclaim input VAT — by applying to the Public Revenue Office (UJP), generally within 15 days of registration. Note the annual registration/deregistration window closes on 15 January.',
        },
        {
          h: 'Registering the manager and employees',
          b:
            'If the manager is to be employed by the company, and for any other employees, you register them with the Employment Agency (using the employment contract and the M1/M2 and PPR forms) so they are covered by mandatory social insurance.',
        },
      ],
    },

    tax: {
      title: 'Taxes for companies in North Macedonia',
      intro:
        'North Macedonia’s tax regime is simple and low. The corporate profit tax is a flat 10%. The personal income tax is also a flat 10%. VAT has a standard rate of 18%, with reduced rates of 10% and 5%. Salaries are subject to social contributions. Withholding tax may apply to certain payments to non-residents (such as dividends, interest, and royalties), subject to applicable double-tax treaties.',
      tableHead: ['Tax', 'Rate / threshold'],
      rows: [
        ['Corporate profit tax', '10% (flat)'],
        ['Personal income tax', '10% (flat)'],
        ['VAT — standard', '18%'],
        ['VAT — reduced', '10% (catering, some food) / 5% (basic food, water, pharma, books)'],
        ['VAT registration threshold', 'MKD 2,000,000 turnover (mandatory)'],
      ],
    },

    faq: {
      title: 'Frequently asked questions',
      intro: 'Direct answers to the most common questions about company registration in North Macedonia.',
      items: [
        {
          q: 'How long does it take to register a company in North Macedonia?',
          a:
            'The Central Registry usually issues its decision within five business days, and in straightforward cases within 24–48 hours. Allow one to two weeks from first consultation to a fully operational company including bank account and seal.',
        },
        {
          q: 'What is the minimum capital to open a company?',
          a:
            'A DOO or DOOEL requires EUR 5,000, which can be paid within one year of registration. A simplified LLC (PDOO) requires only EUR 1, and a sole proprietor (TP) requires no minimum capital.',
        },
        {
          q: 'Can a foreigner register a company in North Macedonia?',
          a:
            'Yes. Foreign individuals and companies can own and manage a company 100%, with no residency requirement. Company directors may also apply for a residence permit on the basis of their role.',
        },
        {
          q: 'What is the difference between DOO and DOOEL?',
          a:
            'A DOOEL has a single founder; a DOO has between two and fifty. Both require EUR 5,000 minimum capital and both limit liability to the amount contributed.',
        },
        {
          q: 'What is the “1-euro company”?',
          a:
            'It is the simplified LLC (PDOO), which can be founded with just EUR 1 by up to three individuals. In exchange it must set aside one quarter of its annual profit into a mandatory reserve until that reserve reaches the level of standard share capital.',
        },
        {
          q: 'What taxes will my company pay?',
          a:
            'Corporate profit tax is a flat 10% and personal income tax is a flat 10%. VAT is 18% standard, with reduced rates of 10% and 5%. VAT registration becomes mandatory above MKD 2,000,000 in annual turnover.',
        },
        {
          q: 'Do I need to register for VAT immediately?',
          a:
            'Not necessarily. VAT registration is mandatory once your taxable turnover exceeds MKD 2,000,000 a year, but you can register voluntarily, generally within 15 days of incorporation, if it benefits your business.',
        },
        {
          q: 'What documents do I need?',
          a:
            'For a DOO/DOOEL: the founding act, ID/passport copies, manager appointment decision, statutory statements, and proof of (or commitment to) the capital. Foreign documents must be notarized, apostilled, and translated into Macedonian.',
        },
        {
          q: 'Where is a company registered?',
          a:
            'At the Central Registry of the Republic of North Macedonia, through its One-Stop-Shop System, which also issues your tax number (EDB).',
        },
        {
          q: 'Can the company give me residence in North Macedonia?',
          a:
            'Yes — directors may apply for a renewable residence permit based on their role, and family members may join under family reunification.',
        },
      ],
      ipCross: {
        prefix: 'Related topic:',
        text:
          'Protecting your company name as a trademark is a separate procedure.',
        link: { text: 'Protect your brand and trademark at iplaw.nexa.mk', href: 'https://iplaw.nexa.mk' },
      },
    },

    ctaBanner: {
      badge: 'Backed by the Nexa ecosystem',
      h: 'Find the right expert to start your company in North Macedonia',
      p:
        'We will help you connect with a verified expert from the Nexa ecosystem — lawyers, accountants, and registration agents who incorporate companies across DOO, DOOEL, PDOO, and AD. They will guide you through every step and reply with a clear, fixed-fee quote.',
      cta1: 'Connect with a company registration expert',
      cta2: 'About the Nexa ecosystem',
    },

    contact: {
      title: 'Find an expert to register your company',
      desc:
        'Tell us a few details about your planned company and we will help you connect with a verified registration expert from the Nexa ecosystem. They will reply with a clear scope and quote — no obligation.',
      email: 'info@nexa.mk',
      consent:
        'When you contact us, your request is presented to the verified Nexa network anonymously — without your name or contact details. We share your contact only if a professional expresses interest in helping, and you can withdraw your request at any time by emailing info@nexa.mk. You have no financial obligation toward Nexa; any terms and price are agreed directly with the professional, who performs the registration (Nexa itself does not).',
    },

    disclaimer:
      'This guide provides general information about company registration in North Macedonia and does not constitute legal, tax, or accounting advice. Rules and fees can change; verify current requirements or contact a licensed professional before acting. Reviewed by licensed professionals in the Nexa network.',

    sectionLabels: {
      tldr: 'TL;DR',
      reviewedBy: 'Reviewed by licensed professionals in the Nexa network',
      hubCta: 'Part of the Nexa ecosystem — explore all our resources',
      readFull: 'Read the full guide',
      llcLink: 'Looking for “LLC registration”? An LLC is a DOO or DOOEL — see the LLC guide.',
    },
  },

  mk: {
    badge: 'Проверен водич · Прегледано од лиценцирани професионалци во мрежата на Nexa',
    h1: 'Регистрација на фирма во Северна Македонија: Целосен водич за 2026',
    tldr:
      'Регистрација на фирма во Македонија може да заврши за неколку дена. Повеќето бизниси избираат друштво со ограничена одговорност (ДОО или ДООЕЛ), за кое е потребен основачки влог од 5.000 евра што може да се уплати во рок од една година. Странците можат целосно да поседуваат и управуваат фирма, без обврска за престој, а регистрацијата се врши електронски преку Едношалтерскиот систем на Централниот регистар. Данокот на добивка е рамни 10% — меѓу најниските во Европа.',
    heroBadges: {
      jurisdiction: 'Централен регистар · Едношалтерски систем',
      time: 'Решение најчесто во рок од 5 работни дена',
      tax: 'Рамни 10% данок на добивка',
    },
    ctaPrimary: 'Поврзете се со експерт за регистрација на фирма',
    ctaSecondary: 'Трошоци и даноци',

    why: {
      title: 'Зошто да регистрирате фирма во Северна Македонија',
      p1:
        'Северна Македонија е едно од најпристапните места во Југоисточна Европа за започнување бизнис. Земјата нуди рамен данок на добивка од 10% и рамен персонален данок на доход од 10% — меѓу најниските во Европа — и пристап до пазар од над 650 милиони потрошувачи преку договори за слободна трговија со ЕУ (Спогодба за стабилизација и асоцијација), ЦЕФТА и ЕФТА. Стратешката локација на главните европски коридори, повеќејазичната работна сила и ниските трошоци за живот ги прават градовите како Скопје, Битола, Охрид и Тетово привлечни за технологија, услуги, производство и трговија.',
      p2:
        'Самата регистрација е брза и претежно електронска. Централниот регистар на Република Северна Македонија работи преку Едношалтерски систем, кој овозможува регистрација на фирмата, добивање даночен број и завршување на повеќе формалности во една координирана постапка. За основачите кои сакаат да се преселат, поседувањето и управувањето со фирма може да отвори и пат до дозвола за престој.',
    },

    entities: {
      title: 'Избор на правна форма (вид на друштво)',
      intro:
        'Правната форма што ќе ја изберете ја определува вашата одговорност, барањата за капитал и обврските за известување. Северна Македонија признава неколку форми; повеќето нови бизниси избираат меѓу трговец поединец и една од формите со ограничена одговорност.',
      list: [
        {
          short: 'ДОО',
          title: 'Друштво со ограничена одговорност (ДОО)',
          body:
            'Најчест избор за мали и средни бизниси. ДОО може да има од 2 до 50 основачи, физички или правни лица, домашни или странски. Одговорноста е ограничена до висината на влогот на секој член. Минималниот основачки влог е 5.000 евра, во пари или во предмети и права, и може да се уплати во рок од една година од регистрацијата.',
          icon: 'Building',
          route: '/doo',
        },
        {
          short: 'ДООЕЛ',
          title: 'Друштво со ограничена одговорност на едно лице (ДООЕЛ)',
          body:
            'ДОО со само еден основач. Има ист минимален влог од 5.000 евра и иста заштита со ограничена одговорност. Ова е типичната структура за претприемач кој работи сам или за друштво во целосна сопственост на едно лице.',
          icon: 'User',
          route: '/dooel',
        },
        {
          short: 'ТП',
          title: 'Трговец поединец (ТП)',
          body:
            'Бизнис воден од едно физичко лице кое одговара за сите обврски на бизнисот со целиот свој личен имот. Нема минимален влог. Тоа е наједноставната и најевтината форма, често користена од занаетчии, земјоделци, уметници, превозници и мали даватели на услуги — но неограничената лична одговорност е значителен компромис.',
          icon: 'Briefcase',
          route: '/sole-proprietor',
        },
        {
          short: 'ПДОО',
          title: 'Поедноставено ДОО (ПДОО) — „фирма за 1 евро“',
          body:
            'Поедноставено ДОО може да основаат најмногу тројца основачи (физички лица), од кои еден е управител. Минималниот основачки влог е само 1 евро (во денарска противвредност), со најмал номинален износ на удел од 10 центи. Како замена за нискиот влог, ПДОО мора да формира задолжителна резерва со издвојување на една четвртина од годишната добивка додека резервата не го достигне нивото на стандарден основачки капитал. Целта е да се намали бариерата за првите чекори на нови претприемачи.',
          icon: 'Zap',
          route: '/pdoo',
        },
        {
          short: 'АД',
          title: 'Акционерско друштво (АД)',
          body:
            'Соодветно за поголеми бизниси и за оние што сакаат да прибираат капитал од повеќе акционери. Минималниот капитал е повисок — начелно 25.000 евра за приватно АД и 50.000 евра за јавно АД — а барањата за управување се построги.',
          icon: 'Scale',
          route: '/ad',
        },
        {
          short: 'Подружница',
          title: 'Подружница и претставништво',
          body:
            'Странска компанија може да регистрира подружница, која не е посебно правно лице но може да врши комерцијална дејност, или претставништво, кое е ограничено на истражување на пазарот и промоција и не може да тргува.',
          icon: 'MapPin',
          route: '/branch',
        },
      ],
      tableTitle: 'Споредба на правни форми',
      tableHead: ['Друштво', 'Основачи', 'Мин. влог', 'Одговорност', 'Најсоодветно за'],
      tableRows: [
        ['Трговец поединец (ТП)', '1 физичко лице', 'Нема', 'Неограничена (лична)', 'Занаетчии, фриленсери, микро-бизнис'],
        ['ДООЕЛ', '1', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот', 'Самостоен претприемач, подружница'],
        ['ДОО', '2–50', '5.000 € (во рок од 1 год.)', 'Ограничена до влогот', 'МСП, партнерства'],
        ['ПДОО', 'До 3 физички лица', '1 €', 'Ограничена (со задолжителна резерва)', 'Прв бизнис, низок влог'],
        ['АД', '1+ акционер', '25.000 € приватно / 50.000 € јавно', 'Ограничена до акциите', 'Поголеми бизниси, прибирање капитал'],
        ['Подружница', 'н/а (странска матка)', 'н/а', 'Одговара матичното друштво', 'Странска фирма на пазарот'],
      ],
    },

    capital: {
      title: 'Минимален основачки влог',
      body:
        'За ДОО или ДООЕЛ, минималниот основачки влог е 5.000 евра (во денарска противвредност). Важна практична работа: не морате да го уплатите целиот износ пред да постои фирмата. Влогот може да биде во пари или во предмети и права (опрема, возила, недвижности) и законот дозволува да се уплати во рок од една година од регистрацијата. Непаричните влогови мора да се проценат од независен проценувач. Поедноставеното ДОО (ПДОО) бара само 1 евро, а трговецот поединец (ТП) не бара никаков минимален влог.',
    },

    process: {
      title: 'Постапка за регистрација на фирма, чекор по чекор',
      intro:
        'Постапката ја координира Централниот регистар на Република Северна Македонија преку Едношалтерскиот систем.',
      steps: [
        {
          title: 'Избор на правна форма и влог',
          action: 'Одлучете меѓу ТП, ДООЕЛ, ДОО, ПДОО или АД и дали влогот ќе биде во пари или во предмети и права.',
        },
        {
          title: 'Резервирање име на фирма и шифра на дејност',
          action:
            'Името на фирмата мора да биде уникатно и да не доведува во заблуда; може да се провери и резервира преку Централниот регистар. Ја избирате и главната дејност според Националната класификација на дејности (НКД) што ја води Државниот завод за статистика.',
        },
        {
          title: 'Подготовка и заверка на основачките документи',
          action:
            'За ДОО тоа е договорот за основање; за ДООЕЛ е изјавата за основање. Се подготвува и одлуката за избор на управител и законските изјави предвидени со Законот за трговските друштва (особено изјавата на управителот и изјавите по соодветните членови од ЗТД). Документите се заверуваат на нотар.',
        },
        {
          title: 'Поднесување до Централниот регистар (Едношалтерски систем)',
          action:
            'Документите се поднесуваат електронски до Централниот регистар. Едношалтерскиот систем ја координира регистрацијата и издавањето на даночниот број во една постапка.',
        },
        {
          title: 'Решение за регистрација и даночен број',
          action:
            'Централниот регистар ја разгледува пријавата и, по одобрување, издава решение за регистрација и доделува Единствен идентификациски број (ЕДБ) — даночниот број што ќе го користите за сите финансиски и правни операции.',
        },
        {
          title: 'Печат и банкарска сметка',
          action:
            'По регистрацијата се изработува печатот на фирмата и се отвора деловна банкарска сметка. Управителот по правило мора лично да се појави во банката за да ја финализира сметката.',
        },
      ],
    },

    docs: {
      title: 'Потребни документи',
      doo: {
        h: 'За ДОО или ДООЕЛ',
        items: [
          'Договор за основање (ДОО) или изјава за основање (ДООЕЛ)',
          'Копија од лична карта или пасош за секој основач',
          'За основач правно лице: извод од трговскиот регистар (апостилиран и преведен за странски лица)',
          'Доказ за уплата на основачкиот влог (или договор за уплата во рок од една година)',
          'Извештај за проценка и договор за непаричен влог',
          'Одлука за избор на управител',
          'Законски изјави на управителот и основачите по ЗТД',
        ],
      },
      tp: {
        h: 'За трговец поединец (ТП)',
        items: [
          'Пријава за упис',
          'Копија од лична карта или пасош',
          'Потребната законска изјава',
        ],
      },
      foreignNote:
        'Странските документи по правило мора да бидат заверени на нотар и апостилирани (освен ако билатерален договор не го укинува тоа) и преведени на македонски од овластен преведувач.',
    },

    costs: {
      title: 'Колку чини регистрација на фирма?',
      intro:
        'Вкупниот трошок за регистрација на фирма во Македонија се состои од повеќе ставки, а не од една единствена такса. Предвидете ги ставките подолу. Одделно, го издвојувате основачкиот влог од 5.000 евра за ДОО/ДООЕЛ — тоа се ваши средства што го финансираат бизнисот, не такса, и може да се уплати во рок од една година.',
      tableHead: ['Ставка', 'Забелешка'],
      rows: [
        ['Такса Централен регистар / Едношалтер', 'Низок, фиксен административен трошок'],
        ['Нотарски трошоци', 'Зависат од влогот и бројот на документи'],
        ['Печат', 'Еднократно'],
        ['Отворање банкарска сметка', 'Зависно од банка'],
        ['Превод и апостил (странски документи)', 'Само за странски основачи/документи'],
        ['Хонорар адвокат/агент', 'Опционално, но препорачано'],
        ['Основачки влог (ДОО/ДООЕЛ)', '5.000 € — ваши средства, со рок од 1 година'],
      ],
      ctaText: 'За прецизна понуда, ќе ви помогнеме да се поврзете со експерт за регистрација кој ќе го разгледа вашиот случај.',
    },

    timeline: {
      title: 'Колку трае регистрацијата?',
      body:
        'Регистрацијата е една од најбрзите во регионот. Откако ќе се поднесе комплетна документација, Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24 до 48 часа. Реално, од првата консултација до целосно оперативна фирма — вклучувајќи печат, постојана банкарска сметка и евентуална почетна регистрација за ДДВ или вработени — предвидете една до две недели.',
      pills: [
        { label: 'Решение на Централен регистар', value: '5 работни дена (често 24–48ч)' },
        { label: 'Целосно оперативна фирма', value: '1–2 недели' },
      ],
    },

    foreigners: {
      title: 'Отворање фирма за странци',
      cards: [
        {
          h: 'Целосна странска сопственост',
          b:
            'Странските државјани — физички или правни лица — можат целосно да поседуваат и управуваат фирма во Македонија, без обврска да бидат резиденти. И основачите и управителите може да бидат странци.',
        },
        {
          h: 'Дозвола за престој преку вашата фирма',
          b:
            'Бидејќи управителите можат да аплицираат за дозвола за престој врз основа на својата функција, основањето фирма може да биде пат до законски престој. Дозволите обично се издаваат за една година и се обновливи, а членовите на семејството можат да се приклучат по основ на семејно обединување. Тоа го прави ДОО/ДООЕЛ привлечно не само за комерцијално проширување туку и за преселба.',
          link: { text: 'Погледнете го водичот за имиграција на immigration.mk', href: 'https://immigration.mk' },
        },
        {
          h: 'Регистрација на странски директни инвестиции (СДИ)',
          b:
            'Кога основачите се странци, фирмата мора да се запише и во регистарот за странски директни инвестиции. Ова вообичаено се решава како дел од постапката за основање.',
        },
      ],
    },

    post: {
      title: 'Обврски по регистрацијата',
      items: [
        {
          h: 'Регистрација на краен вистински сопственик (КВС)',
          b:
            'Секоја фирма мора да го идентификува и регистрира својот краен вистински сопственик — физичкото лице (лица) што на крајот ја поседува или контролира фирмата — во регистарот на вистински сопственици. Тоа е законска обврска поврзана со прописите за спречување перење пари.',
        },
        {
          h: 'Регистрација за ДДВ',
          b:
            'Регистрацијата за ДДВ станува задолжителна штом оданочивиот промет надмине 2.000.000 денари во календарска година (или се очекува да надмине). Можете и доброволно да се регистрирате — корисно ако работите со ДДВ-обврзници и сакате да го одбивате влезниот ДДВ — со барање до Управата за јавни приходи (УЈП), вообичаено во рок од 15 дена од регистрацијата. Имајте предвид дека годишниот рок за регистрација/одрегистрација е 15 јануари.',
        },
        {
          h: 'Пријава на управител и вработени',
          b:
            'Ако управителот ќе биде вработен во фирмата, и за сите други вработени, ги пријавувате во Агенцијата за вработување (со договор за вработување и обрасците М1/М2 и ППР) за да бидат опфатени со задолжително социјално осигурување.',
        },
      ],
    },

    tax: {
      title: 'Даноци за фирмите во Северна Македонија',
      intro:
        'Даночниот систем е едноставен и низок. Данокот на добивка е рамни 10%. Персоналниот данок на доход е исто така рамни 10%. ДДВ има стандардна стапка од 18%, со намалени стапки од 10% и 5%. Платите подлежат на социјални придонеси. На определени плаќања кон нерезиденти (дивиденди, камати, авторски надоместоци) може да се применува задршка на данок, согласно договорите за одбегнување двојно оданочување.',
      tableHead: ['Данок', 'Стапка / праг'],
      rows: [
        ['Данок на добивка', '10% (рамни)'],
        ['Персонален данок на доход', '10% (рамни)'],
        ['ДДВ — стандарден', '18%'],
        ['ДДВ — намален', '10% (угостителство, одредени прехранбени) / 5% (основни прехранбени, вода, лекови, книги)'],
        ['Праг за регистрација за ДДВ', '2.000.000 ден. промет (задолжително)'],
      ],
    },

    faq: {
      title: 'Често поставувани прашања',
      intro: 'Директни одговори на најчестите прашања за регистрација на фирма во Северна Македонија.',
      items: [
        {
          q: 'Колку трае регистрацијата на фирма во Македонија?',
          a:
            'Централниот регистар обично носи решение во рок од пет работни дена, а во едноставни случаи за 24–48 часа. Од првата консултација до целосно оперативна фирма со сметка и печат, предвидете една до две недели.',
        },
        {
          q: 'Колкав е минималниот основачки влог?',
          a:
            'ДОО или ДООЕЛ бара 5.000 евра, што може да се уплати во рок од една година од регистрацијата. Поедноставеното ДОО (ПДОО) бара само 1 евро, а трговецот поединец (ТП) не бара минимален влог.',
        },
        {
          q: 'Може ли странец да регистрира фирма во Македонија?',
          a:
            'Да. Странски физички и правни лица можат целосно да поседуваат и управуваат фирма, без обврска за престој. Управителите можат да аплицираат и за дозвола за престој врз основа на својата функција.',
        },
        {
          q: 'Која е разликата помеѓу ДОО и ДООЕЛ?',
          a:
            'ДООЕЛ има еден основач; ДОО има од два до педесет. И двете бараат 5.000 евра минимален влог и ја ограничуваат одговорноста до висината на влогот.',
        },
        {
          q: 'Што е „фирма за 1 евро“?',
          a:
            'Тоа е поедноставеното ДОО (ПДОО), кое можат да го основаат најмногу тројца со само 1 евро. За возврат, мора да издвојува една четвртина од годишната добивка во задолжителна резерва додека таа не го достигне нивото на стандарден основачки капитал.',
        },
        {
          q: 'Кои даноци ќе ги плаќа мојата фирма?',
          a:
            'Данокот на добивка е рамни 10%, а персоналниот данок на доход е рамни 10%. ДДВ е 18% стандарден, со намалени стапки од 10% и 5%. Регистрацијата за ДДВ е задолжителна над 2.000.000 денари годишен промет.',
        },
        {
          q: 'Дали морам веднаш да се регистрирам за ДДВ?',
          a:
            'Не нужно. Регистрацијата за ДДВ е задолжителна штом оданочивиот промет надмине 2.000.000 денари годишно, но може да се регистрирате и доброволно, вообичаено во рок од 15 дена од основањето, ако тоа е корисно за бизнисот.',
        },
        {
          q: 'Кои документи ми се потребни?',
          a:
            'За ДОО/ДООЕЛ: основачки акт, копии од лична карта/пасош, одлука за управител, законски изјави и доказ за (или обврска за) влогот. Странските документи мора да бидат заверени, апостилирани и преведени на македонски.',
        },
        {
          q: 'Каде се регистрира фирмата?',
          a:
            'Во Централниот регистар на Република Северна Македонија, преку Едношалтерскиот систем, кој го издава и даночниот број (ЕДБ).',
        },
        {
          q: 'Може ли фирмата да ми обезбеди престој во Македонија?',
          a:
            'Да — управителите можат да аплицираат за обновлива дозвола за престој врз основа на функцијата, а членовите на семејството можат да се приклучат по основ на семејно обединување.',
        },
      ],
      ipCross: {
        prefix: 'Поврзана тема:',
        text:
          'Заштитата на името на компанијата како трговска марка е посебна постапка.',
        link: { text: 'Заштитете го вашиот бренд и трговска марка на iplaw.nexa.mk', href: 'https://iplaw.nexa.mk' },
      },
    },

    ctaBanner: {
      badge: 'Поддршка од Nexa екосистемот',
      h: 'Најдете го вистинскиот експерт за да започнете фирма во Северна Македонија',
      p:
        'Ќе ви помогнеме да се поврзете со верифициран експерт од Nexa екосистемот — адвокати, сметководители и агенти за регистрација кои основаат фирми во форма на ДОО, ДООЕЛ, ПДОО и АД. Тие ќе ве водат низ секој чекор и ќе ви одговорат со јасна, фиксна понуда.',
      cta1: 'Поврзете се со експерт за регистрација на фирма',
      cta2: 'За Nexa екосистемот',
    },

    contact: {
      title: 'Најдете експерт за регистрација на вашата фирма',
      desc:
        'Кажете ни неколку детали за планираната фирма и ќе ви помогнеме да се поврзете со верифициран експерт за регистрација од Nexa екосистемот. Тој ќе ви одговори со јасен опсег и понуда — без обврска.',
      email: 'info@nexa.mk',
      consent:
        'Кога ќе нѐ контактирате, вашето барање се презентира пред верифицираната Nexa мрежа анонимно — без вашето име или контакт детали. Контактот го споделуваме само доколку професионалец изрази интерес да помогне, а барањето можете да го повлечете во секое време на info@nexa.mk. Кон Nexa немате финансиски обврски; условите и цената ги договарате директно со професионалецот, кој ја врши регистрацијата (Nexa самата не ја врши).',
    },

    disclaimer:
      'Овој водич дава општи информации за регистрација на фирма во Северна Македонија и не претставува правен, даночен или сметководствен совет. Правилата и трошоците можат да се менуваат; проверете ги тековните барања или обратете се до лиценциран професионалец пред да преземете дејствија. Прегледано од лиценцирани професионалци во мрежата на Nexa.',

    sectionLabels: {
      tldr: 'Накратко',
      reviewedBy: 'Прегледано од лиценцирани професионалци во мрежата на Nexa',
      hubCta: 'Дел од Nexa екосистемот — истражете ги сите ресурси',
      readFull: 'Прочитајте го целосниот водич',
      llcLink: 'Барате „регистрација на LLC“? LLC е ДОО или ДООЕЛ — погледнете го водичот за LLC.',
    },
  },
};

const ICONS: Record<string, any> = {
  Building, User, Briefcase, Zap, Scale, MapPin,
};

export default function Home() {
  const [language, setLanguage] = useState<Lang>('en');
  const t = content[language];

  // ---------- JSON-LD ----------
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Nexa', item: 'https://nexa.mk' },
      { '@type': 'ListItem', position: 2, name: 'Company Registration', item: 'https://company.nexa.mk' },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: language === 'mk'
      ? 'Како да регистрирате фирма во Северна Македонија'
      : 'How to register a company in North Macedonia',
    description: language === 'mk'
      ? 'Чекор-по-чекор постапка преку Едношалтерскиот систем на Централниот регистар.'
      : 'Step-by-step procedure through the Central Registry’s One-Stop-Shop System.',
    totalTime: 'P5D',
    inLanguage: language,
    step: t.process.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.action,
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Company Registration in North Macedonia',
    serviceType: 'Company registration and incorporation services',
    provider: {
      '@type': 'Organization',
      name: 'Nexa',
      legalName: 'Company for Services NEKSA AMD DOOEL Skopje',
      url: 'https://nexa.mk',
    },
    areaServed: { '@type': 'Country', name: 'North Macedonia' },
    availableLanguage: ['mk', 'en'],
    url: 'https://company.nexa.mk',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.h1,
    inLanguage: language,
    url: 'https://company.nexa.mk',
    isPartOf: { '@type': 'WebSite', name: 'Company.Nexa.mk', url: 'https://company.nexa.mk' },
    about: { '@type': 'Thing', name: 'Company registration in North Macedonia' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteNavbar language={language} onLanguageChange={setLanguage} />

      <main id="main">
      {/* HERO */}
      <header id="home" className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-mesh pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-7">
              <a
                href="https://nexa.mk"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1E4DB7] to-[#2BB3C0] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow group"
              >
                <span>{t.sectionLabels.hubCta}</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Badge className="bg-white text-[#1E4DB7] border border-blue-200 px-4 py-2 rounded-full shadow-sm hover:bg-blue-50">
                <Shield className="h-3.5 w-3.5 mr-2" />
                {t.badge}
              </Badge>

              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                {t.h1}
              </h1>

              {/* TL;DR */}
              <div className="bg-white/80 backdrop-blur-sm border-l-4 border-[#2BB3C0] rounded-r-lg p-5 shadow-sm">
                <p className="text-xs font-semibold text-[#1E4DB7] uppercase tracking-wider mb-2">
                  {t.sectionLabels.tldr}
                </p>
                <p className="text-base text-gray-800 leading-relaxed">{t.tldr}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#1E4DB7] to-[#163d92] hover:from-[#163d92] hover:to-[#102d6e] text-white px-7 py-6 rounded-xl shadow-lg shadow-blue-500/20">
                    {t.ctaPrimary}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#costs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-300 text-gray-900 hover:bg-white hover:border-[#1E4DB7] hover:text-[#1E4DB7] px-7 py-6 rounded-xl">
                    {t.ctaSecondary}
                  </Button>
                </a>
              </div>

              <div className="pt-2 grid sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  { icon: Building, text: t.heroBadges.jurisdiction },
                  { icon: Zap, text: t.heroBadges.time },
                  { icon: Receipt, text: t.heroBadges.tax },
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="bg-blue-100 p-1.5 rounded-md shrink-0">
                        <Icon className="h-4 w-4 text-[#1E4DB7]" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium leading-tight">{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/marketing-5.jpg"
                  alt={t.h1}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHY */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t.why.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t.why.p1}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.why.p2}</p>
        </div>
      </section>

      {/* ENTITIES + COMPARISON TABLE */}
      <section id="entities" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.entities.title}</h2>
            <p className="text-lg text-gray-600">{t.entities.intro}</p>
            <p className="mt-3 text-sm">
              <a href="/llc-registration" className="text-[#1E4DB7] underline hover:no-underline font-medium">
                {t.sectionLabels.llcLink}
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.entities.list.map((e, i) => {
              const Icon = ICONS[e.icon] || Building;
              return (
                <Card key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-10 h-10 rounded-xl flex items-center justify-center shadow shadow-blue-500/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-[#1E4DB7] uppercase tracking-wider">{e.short}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                      <a href={e.route} className="hover:text-[#1E4DB7] transition-colors">
                        <dfn className="not-italic">{e.title}</dfn>
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{e.body}</p>
                    <a
                      href={e.route}
                      className="mt-4 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium"
                    >
                      {t.sectionLabels.readFull}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900">{t.entities.tableTitle}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {t.entities.tableHead.map((h, i) => (
                      <th key={i} className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.entities.tableRows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                      {row.map((c, j) => (
                        <td key={j} className={`px-4 py-3 text-gray-700 ${j === 0 ? 'font-semibold text-gray-900' : ''}`}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MIN CAPITAL */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <Banknote className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.capital.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t.capital.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.process.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.process.intro}</p>
            <a href="/process" className="mt-3 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
              {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <ol className="space-y-5">
            {t.process.steps.map((s, i) => (
              <li key={i}>
                <Card className="bg-white rounded-2xl shadow-md border border-gray-100">
                  <CardContent className="p-6 lg:p-7">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-[#1E4DB7] to-[#163d92] text-white rounded-full w-11 h-11 flex items-center justify-center font-bold shrink-0 shadow-md">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{s.action}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-center tracking-tight">{t.docs.title}</h2>
          <p className="text-center mb-10">
            <a href="/documents" className="inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
              {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-md border border-gray-100">
              <CardContent className="p-7">
                <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.docs.doo.h}</h3>
                <ul className="space-y-3">
                  {t.docs.doo.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-md border border-gray-100">
              <CardContent className="p-7">
                <div className="bg-gradient-to-br from-[#2BB3C0] to-[#1E4DB7] w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.docs.tp.h}</h3>
                <ul className="space-y-3">
                  {t.docs.tp.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 mt-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Languages className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-900 leading-relaxed">{t.docs.foreignNote}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* COSTS */}
      <section id="costs" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.costs.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.costs.intro}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {t.costs.tableHead.map((h, i) => (
                      <th key={i} className="text-left px-5 py-3 font-semibold text-gray-700 text-sm">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.costs.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                      <td className="px-5 py-3 font-semibold text-gray-900">{row[0]}</td>
                      <td className="px-5 py-3 text-gray-700 text-sm">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-600 text-center">
            {t.costs.ctaText}{' '}
            <a href="#contact" className="text-[#1E4DB7] underline hover:no-underline font-medium">
              {t.ctaPrimary} →
            </a>
          </p>
          <p className="mt-3 text-center">
            <a href="/cost" className="inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
              {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.timeline.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t.timeline.body}</p>
              <a href="/timeline" className="mt-3 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
                {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6 ml-16">
            {t.timeline.pills.map((p, i) => (
              <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-emerald-700 mb-1">{p.label}</p>
                <p className="text-lg font-bold text-gray-900">{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOREIGNERS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.foreigners.title}</h2>
            <a href="/for-foreigners" className="inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
              {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.foreigners.cards.map((c, i) => {
              const icons = [Globe, Plane, Building];
              const Icon = icons[i] || Globe;
              return (
                <Card key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{c.h}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{c.b}</p>
                    {('link' in c) && c.link && (
                      <a href={c.link.href} className="mt-4 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium underline hover:no-underline">
                        {c.link.text} →
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* POST-REGISTRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.post.title}</h2>
          </div>
          <div className="space-y-5">
            {t.post.items.map((it, i) => {
              const icons = [Users, Receipt, Briefcase];
              const Icon = icons[i] || Shield;
              return (
                <Card key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-md border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{it.h}</h3>
                        <p className="text-gray-700 leading-relaxed">{it.b}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAXES */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.tax.title}</h2>
            <p className="text-lg text-gray-600">{t.tax.intro}</p>
            <a href="/taxes" className="mt-3 inline-flex items-center text-[#1E4DB7] hover:text-[#163d92] text-sm font-medium">
              {t.sectionLabels.readFull}<ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {t.tax.tableHead.map((h, i) => (
                      <th key={i} className="text-left px-5 py-3 font-semibold text-gray-700 text-sm">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.tax.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                      <td className="px-5 py-3 font-semibold text-gray-900">{row[0]}</td>
                      <td className="px-5 py-3 text-gray-700">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER (with marketing-6 background) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/marketing-6.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d6e]/95 via-[#1E4DB7]/85 to-[#2BB3C0]/65" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="h-3.5 w-3.5 mr-2" />
            {t.ctaBanner.badge}
          </Badge>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {t.ctaBanner.h}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">{t.ctaBanner.p}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#1E4DB7] hover:bg-blue-50 px-8 py-6 rounded-xl shadow-2xl">
                {t.ctaBanner.cta1}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-6 rounded-xl bg-transparent">
                {t.ctaBanner.cta2}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.faq.title}</h2>
            <p className="text-lg text-gray-600">{t.faq.intro}</p>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((f, i) => (
              <details key={i} className="group bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-200">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 flex items-center justify-between list-none">
                  <span className="pr-4">{f.q}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>

          {/* IP cross-link */}
          <aside className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
            <strong className="text-[#1E4DB7]">{t.faq.ipCross.prefix} </strong>
            {t.faq.ipCross.text}{' '}
            <a href={t.faq.ipCross.link.href} className="text-[#1E4DB7] underline hover:no-underline font-medium">
              {t.faq.ipCross.link.text}
            </a>
          </aside>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.contact.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.contact.desc}</p>
          </div>

          <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-[#1E4DB7] to-[#2BB3C0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {language === 'mk' ? 'Е-пошта' : 'Email'}
              </p>
              <a href="mailto:info@nexa.mk" className="text-2xl font-bold text-[#1E4DB7] hover:text-[#163d92] transition-colors">
                {t.contact.email}
              </a>
              <p className="text-sm text-gray-500 mt-6 leading-relaxed border-t border-gray-100 pt-5">
                {t.contact.consent}
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <p className="mt-10 text-xs text-gray-500 italic leading-relaxed max-w-3xl mx-auto text-center">
            {t.disclaimer}
          </p>
        </div>
      </section>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
