'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Globe, 
  CheckCircle, 
  Clock, 
  FileText, 
  Shield, 
  Users, 
  Star, 
  Calendar,
  DollarSign,
  Building,
  Scale,
  User,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Target,
  Zap
} from 'lucide-react';
import Image from 'next/image';

// Language content
const content = {
  en: {
    nav: {
      home: 'Home',
      entities: 'Entities',
      process: 'Process Guide',
      costs: 'Costs Calculator',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      badge: 'Trusted Legal Guidance by Nexa',
      title: 'Your Path to Company Registration in North Macedonia',
      description: 'Navigate the complexities of business setup with confidence. From choosing the right entity to full compliance, we simplify the legal process with clear guidance and expert support.',
      cta1: 'Start Your Business Today',
      cta2: 'Calculate Costs',
      expertSupport: 'Expert Support: Legal professionals',
      fastProcessing: 'Fast Processing: 3-5 business days average'
    },
    stats: {
      experience: '15+ Years of Experience',
      companies: '1000+ Companies Registered',
      satisfaction: '98% Client Satisfaction Rate'
    },
    entities: {
      title: 'Choosing Your Legal Entity',
      description: 'Before commencing registration, it\'s crucial to select the appropriate legal form for your business. The most common types of companies in North Macedonia include:',
      doo: {
        title: 'Limited Liability Company (DOO)',
        description: 'The most popular choice for small and medium-sized businesses. It requires a minimum founding capital of €5,000 (or its equivalent in MKD), which can be paid in cash or in kind. The liability of members is limited to their capital contribution.'
      },
      ad: {
        title: 'Joint Stock Company (AD)',
        description: 'Suitable for larger businesses requiring significant capital, often publicly traded. It has a higher minimum capital requirement (€25,000 for private AD, €50,000 for public AD).'
      },
      sole: {
        title: 'Sole Proprietor (Individual Entrepreneur)',
        description: 'For individuals conducting business activities under their own name. Unlimited liability.'
      },
      branch: {
        title: 'Branch Office (Подружница)',
        description: 'Part of a foreign company, not a separate legal entity.'
      },
      representative: {
        title: 'Representative Office (Претставништво)',
        description: 'Limited to market research and promotional activities, cannot conduct commercial operations.'
      },
      entities: {
        title: 'Избирање на вашиот правен ентитет',
        description: 'Пред да започнете со регистрацијата, клучно е да изберете соодветна правна форма за вашиот бизнис. Најчестите типови на компании во Северна Македонија вклучуваат:',
        doo: {
          title: 'Друштво со ограничена одговорност (ДОО)',
          description: 'Најпопуларниот избор за мали и средни претпријатија. Бара минимален основачки капитал од €5.000 (или негов еквивалент во МКД), кој може да се плати во готовина или во натура. Одговорноста на членовите е ограничена на нивниот капитален придонес.'
        },
        ad: {
          title: 'Акционерско друштво (АД)',
          description: 'Погодно за поголеми бизниси кои бараат значителен капитал, често јавно тргувани. Има повисок минимален капитален услов (€25.000 за приватно АД, €50.000 за јавно АД).'
        },
        sole: {
          title: 'Самостоен претприемач (Индивидуален претприемач)',
          description: 'За поединци кои вршат бизнис активности под свое име. Неограничена одговорност.'
        },
        branch: {
          title: 'Подружница (Подружница)',
          description: 'Дел од странска компанија, не е посебен правен ентитет.'
        },
        representative: {
          title: 'Претставништво (Претставништво)',
          description: 'Ограничено на истражување на пазарот и промотивни активности, не може да врши комерцијални операции.'
        }
      },
      process: {
        title: 'Процесот на регистрација на компанија: Чекор по чекор',
        description: 'Процесот на регистрација во Северна Македонија примарно се води од Централниот регистар на Република Северна Македонија.',
        steps: [
          {
            title: 'Проверка и резервација на име на компанијата',
            action: 'Проверете ја достапноста на саканото име на компанијата преку онлајн порталот на Централниот регистар.',
            details: 'Името мора да биде единствено и да не е заведувачко. Откако ќе се најде соодветно име, може да се резервира за ограничен период (обично 30 дена).',
            duration: 'Моментална онлајн проверка, резервацијата зема неколку часа за потврда.'
          },
          {
            title: 'Подготовка на основачки документи',
            action: 'Ова е критичен чекор кој бара внимателно составување на правни документи.',
            details: 'Друштво со ограничена одговорност (ДОО): Статут за еден основач, или Договор за основање за повеќе основачи.',
            duration: '1-3 работни дена, зависно од сложеноста и правната помош.'
          },
          {
            title: 'Отворање привремена банкарска сметка и депозит на капитал',
            action: 'Отворете привремена банкарска сметка во комерцијална банка во Северна Македонија за цел на депонирање на почетниот акционерски капитал.',
            details: 'Минималниот капитал за ДОО (€5.000) мора да се депонира. Банката ќе издаде потврда за депозит.',
            duration: '1 работен ден за отворање сметка, моментален депозит.'
          },
          {
            title: 'Нотаризација на документи',
            action: 'Сите основачки документи мора да бидат нотаризирани од јавен нотар во Северна Македонија.',
            details: 'Нотарот ги верификува идентитетите на потписниците и автентичноста на документите.',
            duration: '1 работен ден.'
          },
          {
            title: 'Поднесување до Централниот регистар',
            action: 'Поднесете го комплетниот сет на нотаризирани документи, заедно со потврдата за депозит на капитал од банката, до Централниот регистар.',
            details: 'Централниот регистар ја разгледува апликацијата за комплетност и усогласеност со правните барања.',
            duration: '1-3 работни дена за разгледување и одобрување од Централниот регистар.'
          },
          {
            title: 'Регистрација и добивање даночен број',
            action: 'По одобрувањето, Централниот регистар издава Решение за регистрација и доделува Единствен идентификационен број (ЕДБ).',
            details: 'Овој број е клучен за сите финансиски и правни операции.',
            duration: 'Издаден моментално по одобрувањето од Централниот регистар.'
          }
        ]
      },
      documentation: {
        title: 'Потребна документација',
        description: 'Точните документи може малку да варираат зависно од типот на компанијата и основачите (поединец наспроти правен ентитет, локален наспроти странски).',
        individual: {
          title: 'За индивидуален основач(и)',
          items: [
            'Важечки пасош или лична карта (копија и оригинал за верификација)',
            'Доказ за живеалиште (на пр., сметка за комунални услуги, ако се разликува од личната карта)',
            'Нотаризирана изјава на основачот',
            'Нотаризиран статут (ако е еден основач) или Договор за основање (ако се повеќе основачи)',
            'Решение за именување управител(и)',
            'Банкарска потврда за депониран акционерски капитал',
            'Доказ за регистрирано седиште (договор за закуп, сопственички акт)',
            'Полномошно (ако е применливо)'
          ]
        },
        legal: {
          title: 'За правен ентитет основач(и)',
          items: [
            'Извод од Трговскиот регистар на матичната компанија (апостилиран и преведен на македонски)',
            'Решение на надлежниот орган на матичната компанија за основање подружница во Северна Македонија',
            'Статут/Договор за основање на новата македонска компанија',
            'Решение за именување управител(и)',
            'Банкарска потврда за депониран акционерски капитал',
            'Доказ за регистрирано седиште',
            'Полномошно за претставникот кој ја води регистрацијата',
            'Пасош/лична карта на овластениот претставник'
          ]
        },
        note: 'Сите странски документи мора да бидат апостилирани (ако земјата е потписничка на Хашката конвенција за апостил) или легализирани и официјално преведени на македонски од сертифициран преведувач во Северна Македонија.'
      },
      timeline: {
        title: 'Времетраење и временска рамка',
        description: 'Официјалниот процес за регистрација на компанија во Северна Македонија е релативно брз, често се цитира како еден од најбрзите во регионот.',
        breakdown: [
          { step: 'Проверка и резервација на име', duration: 'Помалку од 1 ден' },
          { step: 'Подготовка на документи', duration: '1-3 работни дена' },
          { step: 'Отворање банкарска сметка и депозит на капитал', duration: '1 ден' },
          { step: 'Нотаризација', duration: '1 ден' },
          { step: 'Поднесување и одобрување од Централниот регистар', duration: '1-3 работни дена' }
        ],
        total: 'Вкупна регистрација (од комплетна документација до одобрување од Централниот регистар): Типично 3-5 работни дена.',
        realistic: 'Реално, од почетна консултација до целосна регистрација и подготвеност за работа (вклучувајќи ги чекорите по регистрацијата како постојана банкарска сметка, печат и почетна ДДВ/регистрација на вработени), процесот може да трае 1-2 недели.'
      },
      costs: {
        title: 'Вклучени трошоци',
        description: 'Трошоците за регистрација на компанија во Северна Македонија типично вклучуваат:',
        items: [
          'Такси на Централниот регистар: Релативно ниски, фиксни такси за регистрација',
          'Нотарски такси: Врз основа на вредноста на акционерскиот капитал и бројот на документи',
          'Банкарски такси: За отворање и одржување сметки',
          'Такси за превод и апостил: За странски документи',
          'Правни и консултантски такси: Такси за ангажирање адвокати или консултанти',
          'Минимален акционерски капитал: €5.000 за ДОО (ова е депозит, не такса)'
        ]
      },
      aml: {
        title: 'AML (Борба против перење пари) и UBO (Крајни корисни сопственик) идентификација',
        description: 'Северна Македонија е посветена на борбата против перењето пари и финансирањето на тероризмот, усогласувајќи ги своите регулативи со меѓународните стандарди.',
        importance: {
          title: 'Важност на AML и UBO',
          items: [
            'Правна обврска: Компаниите се правно обврзани да ги идентификуваат и верификуваат своите крајни корисни сопственици',
            'Транспарентност: Има за цел да спречи злоупотреба на правни ентитети за незаконски финансиски активности',
            'Намалување на ризик: Им помага на финансиските институции и властите да проценат и намалат ризици'
          ]
        },
        requirements: {
          title: 'Барања за UBO идентификација',
          description: 'Крајниот корисен сопственик (UBO) е физичкото лице(а) кое крајно поседува или контролира правен ентитет.',
          items: [
            'Полно име и презиме',
            'Датум и место на раѓање',
            'Националност',
            'Адреса на живеалиште',
            'Детали за идентификационен документ',
            'Природа и обем на корисното сопственост'
          ]
        },
        compliance: 'Придржувањето кон AML и UBO регулативите е од најголема важност. Неуспехот да се усогласи може да резултира со значителни казни, вклучувајќи глоби и правни дејства.'
      },
      services: {
        title: 'Зошто да ги изберете нашите услуги?',
        description: 'Навигирањето низ сложеностите на регистрацијата на компанија и усогласеноста во странска земја може да биде сложено. Нашиот тим од искусни правни и бизнис консултанти се специјализира за помош на странски инвеститори и локални претприемачи.',
        items: [
          {
            title: 'Експертско водство',
            description: 'Сеопфатни совети за избирање на правилниот правен ентитет и разбирање на локалните регулативи.'
          },
          {
            title: 'Подготовка на документи',
            description: 'Прецизно составување и преглед на сите потребни основачки документи.'
          },
          {
            title: 'Поедноставен процес',
            description: 'Ефикасно ракување со поднесувања до Централниот регистар и координација со нотари и банки.'
          },
          {
            title: 'Обезбедување усогласеност',
            description: 'Обезбедување целосно придржување кон AML, UBO и други регулаторни барања.'
          },
          {
            title: 'Поддршка по регистрацијата',
            description: 'Помош со отворање постојани банкарски сметки, ДДВ регистрација и почетно сметководствено поставување.'
          }
        ],
        cta: 'Добијте бесплатна консултација'
      },
      contact: {
        title: 'Контактирајте не',
        description: 'Имате прашања или сте подготвени да започнете со регистрацијата на вашата компанија во Северна Македонија? Контактирајте ги нашите експерти денес.',
        email: 'info@nexa.mk'
      },
      footer: {
        copyright: '© 2025 Nexa. Сите права се задржани.',
        privacy: 'Политика за приватност',
        terms: 'Услови за користење'
      }
    },
    process: {
      title: 'The Company Registration Process: Step-by-Step',
      description: 'The registration process in North Macedonia is primarily handled by the Central Registry of the Republic of North Macedonia (Централен регистар на Република Северна Македонија).',
      steps: [
        {
          title: 'Company Name Check and Reservation',
          action: 'Check the availability of your desired company name through the Central Registry\'s online portal.',
          details: 'The name must be unique and not misleading. Once a suitable name is found, it can be reserved for a limited period (usually 30 days).',
          duration: 'Immediate online check, reservation takes a few hours to confirm.'
        },
        {
          title: 'Preparation of Founding Documents',
          action: 'This is a critical step requiring careful drafting of legal documents.',
          details: 'Limited Liability Company (DOO): Articles of Association (Основачки акт / Статут) for one founder, or Articles of Incorporation (Договор за основање) for multiple founders.',
          duration: '1-3 business days, depending on complexity and legal assistance.'
        },
        {
          title: 'Opening a Temporary Bank Account and Capital Deposit',
          action: 'Open a temporary bank account in a commercial bank in North Macedonia for the purpose of depositing the initial share capital.',
          details: 'The minimum capital for a DOO (€5,000) must be deposited. The bank will issue a certificate of deposit.',
          duration: '1 business day for account opening, immediate deposit.'
        },
        {
          title: 'Notarization of Documents',
          action: 'All founding documents must be notarized by a public notary in North Macedonia.',
          details: 'The notary verifies the identities of the signatories and the authenticity of the documents.',
          duration: '1 business day.'
        },
        {
          title: 'Submission to the Central Registry',
          action: 'Submit the complete set of notarized documents, along with the bank\'s capital deposit certificate, to the Central Registry.',
          details: 'The Central Registry reviews the application for completeness and compliance with legal requirements.',
          duration: '1-3 business days for review and approval by the Central Registry.'
        },
        {
          title: 'Registration and Obtaining Tax Number',
          action: 'Upon approval, the Central Registry issues a Decision for Registration and assigns a Unique Identification Number (ЕДБ).',
          details: 'This number is crucial for all financial and legal operations.',
          duration: 'Issued immediately after approval by the Central Registry.'
        }
      ]
    },
    documentation: {
      title: 'Required Documentation',
      description: 'The exact documents may vary slightly depending on the type of company and the founders (individual vs. legal entity, local vs. foreign).',
      individual: {
        title: 'For Individual Founder(s)',
        items: [
          'Valid passport or national ID card (copy and original for verification)',
          'Proof of residence (e.g., utility bill, if different from ID)',
          'Notarized Founder\'s Statement',
          'Notarized Articles of Association (if single founder) or Articles of Incorporation (if multiple founders)',
          'Decision for Appointment of Manager(s)',
          'Bank certificate of deposited share capital',
          'Proof of registered office (lease agreement, ownership deed)',
          'Power of Attorney (if applicable)'
        ]
      },
      legal: {
        title: 'For Legal Entity Founder(s)',
        items: [
          'Extract from the Commercial Register of the parent company (apostilled and translated into Macedonian)',
          'Resolution of the parent company\'s competent body to establish a subsidiary in North Macedonia',
          'Articles of Association/Incorporation of the new Macedonian company',
          'Decision for Appointment of Manager(s)',
          'Bank certificate of deposited share capital',
          'Proof of registered office',
          'Power of Attorney for the representative handling the registration',
          'Passport/ID of the authorized representative'
        ]
      },
      note: 'All foreign documents must be apostilled (if the country is a signatory to the Hague Apostille Convention) or legalized and officially translated into Macedonian by a certified translator in North Macedonia.'
    },
    timeline: {
      title: 'Duration and Timeline',
      description: 'The official process for company registration in North Macedonia is relatively quick, often cited as one of the fastest in the region.',
      breakdown: [
        { step: 'Name Check & Reservation', duration: 'Less than 1 day' },
        { step: 'Document Preparation', duration: '1-3 business days' },
        { step: 'Bank Account Opening & Capital Deposit', duration: '1 day' },
        { step: 'Notarization', duration: '1 day' },
        { step: 'Central Registry Submission & Approval', duration: '1-3 business days' }
      ],
      total: 'Overall Registration (from complete documentation to Central Registry approval): Typically 3-5 business days.',
      realistic: 'Realistically, from initial consultation to full registration and readiness to operate (including post-registration steps like permanent bank account, seal, and initial VAT/employee registration), the process can take 1-2 weeks.'
    },
    costs: {
      title: 'Costs Involved',
      description: 'The costs for company registration in North Macedonia typically include:',
      items: [
        'Central Registry Fees: Relatively low, fixed fees for registration',
        'Notary Fees: Based on the value of the share capital and the number of documents',
        'Bank Fees: For opening and maintaining accounts',
        'Translation and Apostille Fees: For foreign documents',
        'Legal and Consulting Fees: Fees for engaging lawyers or consultants',
        'Minimum Share Capital: €5,000 for a DOO (this is a deposit, not a fee)'
      ]
    },
    aml: {
      title: 'AML (Anti-Money Laundering) and UBO (Ultimate Beneficial Owner) Identification',
      description: 'North Macedonia is committed to combating money laundering and terrorist financing, aligning its regulations with international standards.',
      importance: {
        title: 'Importance of AML and UBO',
        items: [
          'Legal Obligation: Companies are legally required to identify and verify their ultimate beneficial owners',
          'Transparency: Aims to prevent the misuse of legal entities for illicit financial activities',
          'Risk Mitigation: Helps financial institutions and authorities assess and mitigate risks'
        ]
      },
      requirements: {
        title: 'UBO Identification Requirements',
        description: 'The Ultimate Beneficial Owner (UBO) is the natural person(s) who ultimately owns or controls a legal entity.',
        items: [
          'Full Name and Surname',
          'Date and Place of Birth',
          'Nationality',
          'Residential Address',
          'Identification Document Details',
          'Nature and Extent of Beneficial Ownership'
        ]
      },
      compliance: 'Adherence to AML and UBO regulations is paramount. Failure to comply can result in significant penalties, including fines and legal action.'
    },
    services: {
      title: 'Why Choose Our Services?',
      description: 'Navigating the intricacies of company registration and compliance in a foreign country can be complex. Our team of experienced legal and business consultants specializes in assisting foreign investors and local entrepreneurs.',
      items: [
        {
          title: 'Expert Guidance',
          description: 'Comprehensive advice on choosing the right legal entity and understanding local regulations.'
        },
        {
          title: 'Document Preparation',
          description: 'Meticulous drafting and review of all necessary founding documents.'
        },
        {
          title: 'Streamlined Process',
          description: 'Efficient handling of submissions to the Central Registry and coordination with notaries and banks.'
        },
        {
          title: 'Compliance Assurance',
          description: 'Ensuring full adherence to AML, UBO, and other regulatory requirements.'
        },
        {
          title: 'Post-Registration Support',
          description: 'Assistance with opening permanent bank accounts, VAT registration, and initial accounting setup.'
        }
      ],
      cta: 'Get a Free Consultation'
    },
    contact: {
      title: 'Contact Us',
      description: 'Have questions or ready to start your company registration in North Macedonia? Reach out to our experts today.',
      email: 'info@nexa.mk'
    },
    footer: {
      copyright: '© 2025 Nexa. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  mk: {
    nav: {
      home: 'Дома',
      entities: 'Ентитети',
      process: 'Водич за процес',
      costs: 'Калкулатор на трошоци',
      faq: 'ЧПП',
      contact: 'Контакт'
    },
    hero: {
      badge: 'Доверливо правно водство од Nexa',
      title: 'Вашиот пат до регистрација на компанија во Северна Македонија',
      description: 'Навигирајте низ сложеностите на бизнис започнувањето со доверба. Од избирање на правниот ентитет до целосна усогласеност, ние го поедноставуваме правниот процес со јасно водство и експертска поддршка.',
      cta1: 'Започнете го вашиот бизнис денес',
      cta2: 'Пресметајте трошоци',
      expertSupport: 'Експертска поддршка: Правни професионалци',
      fastProcessing: 'Брзо процесирање: 3-5 работни дена во просек'
    },
    stats: {
      experience: '15+ години искуство',
      companies: '1000+ регистрирани компании',
      satisfaction: '98% задоволство на клиентите'
    },
    entities: {
      title: 'Избирање на вашиот правен ентитет',
      description: 'Пред да започнете со регистрацијата, клучно е да изберете соодветна правна форма за вашиот бизнис. Најчестите типови на компании во Северна Македонија вклучуваат:',
      doo: {
        title: 'Друштво со ограничена одговорност (ДОО)',
        description: 'Најпопуларниот избор за мали и средни претпријатија. Бара минимален основачки капитал од €5.000 (или негов еквивалент во МКД), кој може да се плати во готовина или во натура. Одговорноста на членовите е ограничена на нивниот капитален придонес.'
      },
      ad: {
        title: 'Акционерско друштво (АД)',
        description: 'Погодно за поголеми бизниси кои бараат значителен капитал, често јавно тргувани. Има повисок минимален капитален услов (€25.000 за приватно АД, €50.000 за јавно АД).'
      },
      sole: {
        title: 'Самостоен претприемач (Индивидуален претприемач)',
        description: 'За поединци кои вршат бизнис активности под свое име. Неограничена одговорност.'
      },
      branch: {
        title: 'Подружница (Подружница)',
        description: 'Дел од странска компанија, не е посебен правен ентитет.'
      },
      representative: {
        title: 'Претставништво (Претставништво)',
        description: 'Ограничено на истражување на пазарот и промотивни активности, не може да врши комерцијални операции.'
      }
    },
    process: {
      title: 'Процесот на регистрација на компанија: Чекор по чекор',
      description: 'Процесот на регистрација во Северна Македонија примарно се води од Централниот регистар на Република Северна Македонија.',
      steps: [
        {
          title: 'Проверка и резервација на име на компанијата',
          action: 'Проверете ја достапноста на саканото име на компанијата преку онлајн порталот на Централниот регистар.',
          details: 'Името мора да биде единствено и да не е заведувачко. Откако ќе се најде соодветно име, може да се резервира за ограничен период (обично 30 дена).',
          duration: 'Моментална онлајн проверка, резервацијата зема неколку часа за потврда.'
        },
        {
          title: 'Подготовка на основачки документи',
          action: 'Ова е критичен чекор кој бара внимателно составување на правни документи.',
          details: 'Друштво со ограничена одговорност (ДОО): Статут за еден основач, или Договор за основање за повеќе основачи.',
          duration: '1-3 работни дена, зависно од сложеноста и правната помош.'
        },
        {
          title: 'Отворање привремена банкарска сметка и депозит на капитал',
          action: 'Отворете привремена банкарска сметка во комерцијална банка во Северна Македонија за цел на депонирање на почетниот акционерски капитал.',
          details: 'Минималниот капитал за ДОО (€5.000) мора да се депонира. Банката ќе издаде потврда за депозит.',
          duration: '1 работен ден за отворање сметка, моментален депозит.'
        },
        {
          title: 'Нотаризација на документи',
          action: 'Сите основачки документи мора да бидат нотаризирани од јавен нотар во Северна Македонија.',
          details: 'Нотарот ги верификува идентитетите на потписниците и автентичноста на документите.',
          duration: '1 работен ден.'
        },
        {
          title: 'Поднесување до Централниот регистар',
          action: 'Поднесете го комплетниот сет на нотаризирани документи, заедно со потврдата за депозит на капитал од банката, до Централниот регистар.',
          details: 'Централниот регистар ја разгледува апликацијата за комплетност и усогласеност со правните барања.',
          duration: '1-3 работни дена за разгледување и одобрување од Централниот регистар.'
        },
        {
          title: 'Регистрација и добивање даночен број',
          action: 'По одобрувањето, Централниот регистар издава Решение за регистрација и доделува Единствен идентификационен број (ЕДБ).',
          details: 'Овој број е клучен за сите финансиски и правни операции.',
          duration: 'Издаден моментално по одобрувањето од Централниот регистар.'
        }
      ]
    },
    documentation: {
      title: 'Потребна документација',
      description: 'Точните документи може малку да варираат зависно од типот на компанијата и основачите (поединец наспроти правен ентитет, локален наспроти странски).',
      individual: {
        title: 'За индивидуален основач(и)',
        items: [
          'Важечки пасош или лична карта (копија и оригинал за верификација)',
          'Доказ за живеалиште (на пр., сметка за комунални услуги, ако се разликува од личната карта)',
          'Нотаризирана изјава на основачот',
          'Нотаризиран статут (ако е еден основач) или Договор за основање (ако се повеќе основачи)',
          'Решение за именување управител(и)',
          'Банкарска потврда за депониран акционерски капитал',
          'Доказ за регистрирано седиште (договор за закуп, сопственички акт)',
          'Полномошно (ако е применливо)'
        ]
      },
      legal: {
        title: 'За правен ентитет основач(и)',
        items: [
          'Извод од Трговскиот регистар на матичната компанија (апостилиран и преведен на македонски)',
          'Решение на надлежниот орган на матичната компанија за основање подружница во Северна Македонија',
          'Статут/Договор за основање на новата македонска компанија',
          'Решение за именување управител(и)',
          'Банкарска потврда за депониран акционерски капитал',
          'Доказ за регистрирано седиште',
          'Полномошно за претставникот кој ја води регистрацијата',
          'Пасош/лична карта на овластениот претставник'
        ]
      },
      note: 'Сите странски документи мора да бидат апостилирани (ако земјата е потписничка на Хашката конвенција за апостил) или легализирани и официјално преведени на македонски од сертифициран преведувач во Северна Македонија.'
    },
    timeline: {
      title: 'Времетраење и временска рамка',
      description: 'Официјалниот процес за регистрација на компанија во Северна Македонија е релативно брз, често се цитира како еден од најбрзите во регионот.',
      breakdown: [
        { step: 'Проверка и резервација на име', duration: 'Помалку од 1 ден' },
        { step: 'Подготовка на документи', duration: '1-3 работни дена' },
        { step: 'Отворање банкарска сметка и депозит на капитал', duration: '1 ден' },
        { step: 'Нотаризација', duration: '1 ден' },
        { step: 'Поднесување и одобрување од Централниот регистар', duration: '1-3 работни дена' }
      ],
      total: 'Вкупна регистрација (од комплетна документација до одобрување од Централниот регистар): Типично 3-5 работни дена.',
      realistic: 'Реално, од почетна консултација до целосна регистрација и подготвеност за работа (вклучувајќи ги чекорите по регистрацијата како постојана банкарска сметка, печат и почетна ДДВ/регистрација на вработени), процесот може да трае 1-2 недели.'
    },
    costs: {
      title: 'Вклучени трошоци',
      description: 'Трошоците за регистрација на компанија во Северна Македонија типично вклучуваат:',
      items: [
        'Такси на Централниот регистар: Релативно ниски, фиксни такси за регистрација',
        'Нотарски такси: Врз основа на вредноста на акционерскиот капитал и бројот на документи',
        'Банкарски такси: За отворање и одржување сметки',
        'Такси за превод и апостил: За странски документи',
        'Правни и консултантски такси: Такси за ангажирање адвокати или консултанти',
        'Минимален акционерски капитал: €5.000 за ДОО (ова е депозит, не такса)'
      ]
    },
    aml: {
      title: 'AML (Борба против перење пари) и UBO (Крајни корисни сопственик) идентификација',
      description: 'Северна Македонија е посветена на борбата против перењето пари и финансирањето на тероризмот, усогласувајќи ги своите регулативи со меѓународните стандарди.',
      importance: {
        title: 'Важност на AML и UBO',
        items: [
          'Правна обврска: Компаниите се правно обврзани да ги идентификуваат и верификуваат своите крајни корисни сопственици',
          'Транспарентност: Има за цел да спречи злоупотреба на правни ентитети за незаконски финансиски активности',
          'Намалување на ризик: Им помага на финансиските институции и властите да проценат и намалат ризици'
        ]
      },
      requirements: {
        title: 'Барања за UBO идентификација',
        description: 'Крајниот корисен сопственик (UBO) е физичкото лице(а) кое крајно поседува или контролира правен ентитет.',
        items: [
          'Полно име и презиме',
          'Датум и место на раѓање',
          'Националност',
          'Адреса на живеалиште',
          'Детали за идентификационен документ',
          'Природа и обем на корисното сопственост'
        ]
      },
      compliance: 'Придржувањето кон AML и UBO регулативите е од најголема важност. Неуспехот да се усогласи може да резултира со значителни казни, вклучувајќи глоби и правни дејства.'
    },
    services: {
      title: 'Зошто да ги изберете нашите услуги?',
      description: 'Навигирањето низ сложеностите на регистрацијата на компанија и усогласеноста во странска земја може да биде сложено. Нашиот тим од искусни правни и бизнис консултанти се специјализира за помош на странски инвеститори и локални претприемачи.',
      items: [
        {
          title: 'Експертско водство',
          description: 'Сеопфатни совети за избирање на правилниот правен ентитет и разбирање на локалните регулативи.'
        },
        {
          title: 'Подготовка на документи',
          description: 'Прецизно составување и преглед на сите потребни основачки документи.'
        },
        {
          title: 'Поедноставен процес',
          description: 'Ефикасно ракување со поднесувања до Централниот регистар и координација со нотари и банки.'
        },
        {
          title: 'Обезбедување усогласеност',
          description: 'Обезбедување целосно придржување кон AML, UBO и други регулаторни барања.'
        },
        {
          title: 'Поддршка по регистрацијата',
          description: 'Помош со отворање постојани банкарски сметки, ДДВ регистрација и почетно сметководствено поставување.'
        }
      ],
      cta: 'Добијте бесплатна консултација'
    },
    contact: {
      title: 'Контактирајте не',
      description: 'Имате прашања или сте подготвени да започнете со регистрацијата на вашата компанија во Северна Македонија? Контактирајте ги нашите експерти денес.',
      email: 'info@nexa.mk'
    },
    footer: {
      copyright: '© 2025 Nexa. Сите права се задржани.',
      privacy: 'Политика за приватност',
      terms: 'Услови за користење'
    }
  },
  al: {
    nav: {
      home: 'Kreu',
      entities: 'Entitetet',
      process: 'Udhëzues i Procesit',
      costs: 'Kalkulatori i Kostove',
      faq: 'Pyetje të shpeshta',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Udhëzim i Besuar Ligjor nga Nexa',
      title: 'Rruga juaj për Regjistrimin e Kompanisë në Maqedoninë e Veriut',
      description: 'Navigoni nëpër kompleksitetet e krijimit të biznesit me besim. Nga zgjedhja e entitetit të duhur deri te përputhja e plotë, ne e thjeshtojmë procesin ligjor me udhëzime të qarta dhe mbështetje eksperte.',
      cta1: 'Filloni biznesin tuaj sot',
      cta2: 'Llogaritni kostot',
      expertSupport: 'Mbështetje eksperte: Profesionistë ligjorë',
      fastProcessing: 'Procesim i shpejtë: 3-5 ditë pune mesatarisht'
    },
    stats: {
      experience: '15+ vjet përvojë',
      companies: '1000+ kompani të regjistruara',
      satisfaction: '98% kënaqësi e klientëve'
    },
    entities: {
      title: 'Zgjedhja e entitetit tuaj ligjor',
      description: 'Para se të filloni regjistrimin, është thelbësore të zgjidhni formën e duhur ligjore për biznesin tuaj. Llojet më të zakonshme të kompanive në Maqedoninë e Veriut përfshijnë:',
      doo: {
        title: 'Kompani me Përgjegjësi të Kufizuar (DOO)',
        description: 'Zgjedhja më popullore për bizneset e vogla dhe të mesme. Kërkon një kapital minimal themelues prej €5,000 (ose ekuivalenti i tij në MKD), i cili mund të paguhet në para ose në natyrë. Përgjegjësia e anëtarëve është e kufizuar në kontributin e tyre të kapitalit.'
      },
      ad: {
        title: 'Kompani Aksionare (AD)',
        description: 'E përshtatshme për biznese më të mëdha që kërkojnë kapital të konsiderueshëm, shpesh të tregtuara publikisht. Ka një kërkesë më të lartë kapitali minimal (€25,000 për AD private, €50,000 për AD publike).'
      },
      sole: {
        title: 'Pronar i Vetëm (Sipërmarrës Individual)',
        description: 'Për individë që kryejnë aktivitete biznesi nën emrin e tyre. Përgjegjësi e pakufizuar.'
      },
      branch: {
        title: 'Zyrë Dege (Подружница)',
        description: 'Pjesë e një kompanie të huaj, nuk është entitet i veçantë ligjor.'
      },
      representative: {
        title: 'Zyrë Përfaqësuese (Претставништво)',
        description: 'E kufizuar në kërkime tregu dhe aktivitete promovuese, nuk mund të kryejë operacione tregtare.'
      }
    },
    process: {
      title: 'Procesi i Regjistrimit të Kompanisë: Hap pas Hapi',
      description: 'Procesi i regjistrimit në Maqedoninë e Veriut kryhet kryesisht nga Regjistri Qendror i Republikës së Maqedonisë së Veriut.',
      steps: [
        {
          title: 'Kontrolli dhe Rezervimi i Emrit të Kompanisë',
          action: 'Kontrolloni disponueshmërinë e emrit të dëshiruar të kompanisë përmes portalit online të Regjistrit Qendror.',
          details: 'Emri duhet të jetë unik dhe jo mashtrues. Pasi të gjendet një emër i përshtatshëm, mund të rezervohet për një periudhë të kufizuar (zakonisht 30 ditë).',
          duration: 'Kontroll i menjëhershëm online, rezervimi merr disa orë për konfirmim.'
        },
        {
          title: 'Përgatitja e Dokumenteve Themelore',
          action: 'Ky është një hap kritik që kërkon hartim të kujdesshëm të dokumenteve ligjore.',
          details: 'Kompani me Përgjegjësi të Kufizuar (DOO): Statuti për një themelues, ose Marrëveshja e Themelimit për themelues të shumtë.',
          duration: '1-3 ditë pune, në varësi të kompleksitetit dhe ndihmës ligjore.'
        },
        {
          title: 'Hapja e Llogarisë së Përkohshme Bankare dhe Depozitimi i Kapitalit',
          action: 'Hapni një llogari të përkohshme bankare në një bankë tregtare në Maqedoninë e Veriut për qëllim të depozitimit të kapitalit fillestar të aksioneve.',
          details: 'Kapitali minimal për një DOO (€5,000) duhet të depozitohet. Banka do të lëshojë një certifikatë depozite.',
          duration: '1 ditë pune për hapjen e llogarisë, depozitim i menjëhershëm.'
        },
        {
          title: 'Noterizimi i Dokumenteve',
          action: 'Të gjitha dokumentet themelore duhet të noterizohen nga një noter publik në Maqedoninë e Veriut.',
          details: 'Noteri verifikon identitetet e nënshkruesve dhe autenticitetin e dokumenteve.',
          duration: '1 ditë pune.'
        },
        {
          title: 'Dorëzimi në Regjistrin Qendror',
          action: 'Dorëzoni setin e plotë të dokumenteve të noterizuara, së bashku me certifikatën e depozitit të kapitalit nga banka, në Regjistrin Qendror.',
          details: 'Regjistri Qendror shqyrton aplikacionin për plotësi dhe përputhje me kërkesat ligjore.',
          duration: '1-3 ditë pune për shqyrtim dhe miratim nga Regjistri Qendror.'
        },
        {
          title: 'Regjistrimi dhe Marrja e Numrit të Taksave',
          action: 'Pas miratimit, Regjistri Qendror lëshon një Vendim për Regjistrim dhe cakton një Numër Identifikimi Unik (ЕДБ).',
          details: 'Ky numër është thelbësor për të gjitha operacionet financiare dhe ligjore.',
          duration: 'Lëshohet menjëherë pas miratimit nga Regjistri Qendror.'
        }
      ]
    },
    documentation: {
      title: 'Dokumentacioni i Kërkuar',
      description: 'Dokumentet e sakta mund të ndryshojnë pak në varësi të llojit të kompanisë dhe themeluesve (individ kundrejt entitetit ligjor, vendor kundrejt të huaj).',
      individual: {
        title: 'Për Themelues(it) Individual',
        items: [
          'Pasaportë e vlefshme ose kartë identiteti kombëtar (kopje dhe origjinal për verifikim)',
          'Dëshmi e vendbanimit (p.sh., faturë shërbimesh, nëse ndryshon nga ID)',
          'Deklaratë e Noterizuar e Themeluesit',
          'Statut i Noterizuar (nëse themelues i vetëm) ose Marrëveshje Themelimi (nëse themelues të shumtë)',
          'Vendim për Emërimin e Menaxher(ëve)',
          'Certifikatë bankare e kapitalit të depozituar të aksioneve',
          'Dëshmi e zyrës së regjistruar (marrëveshje qiraje, vërtetim pronësie)',
          'Prokurë (nëse aplikohet)'
        ]
      },
      legal: {
        title: 'Për Themelues(it) Entitet Ligjor',
        items: [
          'Ekstrakt nga Regjistri Tregtar i kompanisë mëmë (i apostiluar dhe i përkthyer në maqedonisht)',
          'Rezolutë e organit kompetent të kompanisë mëmë për themelimin e një filiali në Maqedoninë e Veriut',
          'Statut/Marrëveshje Themelimi e kompanisë së re maqedonase',
          'Vendim për Emërimin e Menaxher(ëve)',
          'Certifikatë bankare e kapitalit të depozituar të aksioneve',
          'Dëshmi e zyrës së regjistruar',
          'Prokurë për përfaqësuesin që merret me regjistrimin',
          'Pasaportë/ID e përfaqësuesit të autorizuar'
        ]
      },
      note: 'Të gjitha dokumentet e huaja duhet të jenë të apostiluara (nëse vendi është nënshkrues i Konventës së Hagës për Apostil) ose të legalizuara dhe të përkthyera zyrtarisht në maqedonisht nga një përkthyes i certifikuar në Maqedoninë e Veriut.'
    },
    timeline: {
      title: 'Kohëzgjatja dhe Afati Kohor',
      description: 'Procesi zyrtar për regjistrimin e kompanisë në Maqedoninë e Veriut është relativisht i shpejtë, shpesh citohet si një nga më të shpejtat në rajon.',
      breakdown: [
        { step: 'Kontrolli dhe Rezervimi i Emrit', duration: 'Më pak se 1 ditë' },
        { step: 'Përgatitja e Dokumenteve', duration: '1-3 ditë pune' },
        { step: 'Hapja e Llogarisë Bankare dhe Depozitimi i Kapitalit', duration: '1 ditë' },
        { step: 'Noterizimi', duration: '1 ditë' },
        { step: 'Dorëzimi dhe Miratimi i Regjistrit Qendror', duration: '1-3 ditë pune' }
      ],
      total: 'Regjistrimi i Përgjithshëm (nga dokumentacioni i plotë deri te miratimi i Regjistrit Qendror): Zakonisht 3-5 ditë pune.',
      realistic: 'Realisht, nga konsultimi fillestar deri te regjistrimi i plotë dhe gatishmëria për të operuar (duke përfshirë hapat pas regjistrimit si llogaria e përhershme bankare, vula dhe regjistrimi fillestar i TVSH/punonjësve), procesi mund të zgjasë 1-2 javë.'
    },
    costs: {
      title: 'Kostot e Përfshira',
      description: 'Kostot për regjistrimin e kompanisë në Maqedoninë e Veriut zakonisht përfshijnë:',
      items: [
        'Taksat e Regjistrit Qendror: Relativisht të ulëta, taksa fikse për regjistrim',
        'Taksat e Noterit: Bazuar në vlerën e kapitalit të aksioneve dhe numrin e dokumenteve',
        'Taksat Bankare: Për hapjen dhe mirëmbajtjen e llogarive',
        'Taksat e Përkthimit dhe Apostilimit: Për dokumentet e huaja',
        'Taksat Ligjore dhe Konsultuese: Taksa për angazhimin e avokatëve ose konsulentëve',
        'Kapitali Minimal i Aksioneve: €5,000 për një DOO (ky është një depozitë, jo taksë)'
      ]
    },
    aml: {
      title: 'AML (Anti-Pastrimi i Parave) dhe UBO (Pronari i Vërtetë Përfitues) Identifikimi',
      description: 'Maqedonia e Veriut është e përkushtuar në luftën kundër pastrimit të parave dhe financimit të terrorizmit, duke i përshtatur rregulloret e saj me standardet ndërkombëtare.',
      importance: {
        title: 'Rëndësia e AML dhe UBO',
        items: [
          'Detyrim Ligjor: Kompanitë janë të detyruara ligjërisht të identifikojnë dhe verifikojnë pronarët e tyre të vërtetë përfitues',
          'Transparenca: Synon të parandalojë keqpërdorimin e entiteteve ligjore për aktivitete të paligjshme financiare',
          'Zbutja e Rrezikut: Ndihmon institucionet financiare dhe autoritetet të vlerësojnë dhe zbusin rreziqet'
        ]
      },
      requirements: {
        title: 'Kërkesat për Identifikimin e UBO',
        description: 'Pronari i Vërtetë Përfitues (UBO) është personi(at) fizik që në fund zotëron ose kontrollon një entitet ligjor.',
        items: [
          'Emri dhe Mbiemri i Plotë',
          'Data dhe Vendi i Lindjes',
          'Kombësia',
          'Adresa e Banimit',
          'Detajet e Dokumentit të Identifikimit',
          'Natyra dhe Shkalla e Pronësisë Përfituese'
        ]
      },
      compliance: 'Përmbushja e rregulloreve AML dhe UBO është e rëndësishme. Dështimi në përmbushje mund të rezultojë në ndëshkime të rëndësishme, duke përfshirë gjoba dhe veprime ligjore.'
    },
    services: {
      title: 'Pse të Zgjidhni Shërbimet Tona?',
      description: 'Navigimi nëpër ndërlikueshmëritë e regjistrimit të kompanisë dhe përputhjes në një vend të huaj mund të jetë kompleks. Ekipi ynë i konsulentëve të përvojshëm ligjorë dhe biznesit specializohet në ndihmën e investitorëve të huaj dhe sipërmarrësve vendorë.',
      items: [
        {
          title: 'Udhëzim Ekspert',
          description: 'Këshilla gjithëpërfshirëse për zgjedhjen e entitetit të duhur ligjor dhe kuptimin e rregulloreve vendore.'
        },
        {
          title: 'Përgatitja e Dokumenteve',
          description: 'Hartim dhe rishikim i kujdesshëm i të gjitha dokumenteve themelore të nevojshme.'
        },
        {
          title: 'Proces i Thjeshtuar',
          description: 'Trajtim efikas i dorëzimeve në Regjistrin Qendror dhe koordinim me noterë dhe banka.'
        },
        {
          title: 'Sigurimi i Përputhjes',
          description: 'Sigurimi i përmbushjes së plotë të AML, UBO dhe kërkesave të tjera rregullatore.'
        },
        {
          title: 'Mbështetje Pas Regjistrimit',
          description: 'Ndihmë me hapjen e llogarive të përhershme bankare, regjistrimin e TVSH dhe konfigurimin fillestar të kontabilitetit.'
        }
      ],
      cta: 'Merrni një Konsultim Falas'
    },
    contact: {
      title: 'Na Kontaktoni',
      description: 'Keni pyetje ose jeni gati të filloni regjistrimin e kompanisë suaj në Maqedoninë e Veriut? Kontaktoni ekspertët tanë sot.',
      email: 'info@nexa.mk'
    },
    footer: {
      copyright: '© 2025 Nexa. Të gjitha të drejtat e rezervuara.',
      privacy: 'Politika e Privatësisë',
      terms: 'Kushtet e Shërbimit'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'mk' | 'al'>('en');
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">company.nexa.mk</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.home}
              </a>
              <a href="#entities" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.entities}
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.process}
              </a>
              <a href="#costs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.costs}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.contact}
              </a>
              
              <div className="flex items-center space-x-1">
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'mk' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('mk')}
                  className="text-xs"
                >
                  MK
                </Button>
                <Button
                  variant={language === 'al' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('al')}
                  className="text-xs"
                >
                  AL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full">
                {t.hero.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  {t.hero.cta1}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-200">
                  {t.hero.cta2}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                  alt="Corporate Meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-6 left-6">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-900">
                          {t.hero.expertSupport}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute bottom-6 right-6">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900">
                          {t.hero.fastProcessing}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {t.stats.experience}
              </h3>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {t.stats.companies}
              </h3>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {t.stats.satisfaction}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Entities Section */}
      <section id="entities" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.entities.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.entities.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {language === 'en' && (
              <>
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                  <CardHeader className="pb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t.entities.doo.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.entities.doo.description}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                  <CardHeader className="pb-4">
                    <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Scale className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t.entities.ad.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.entities.ad.description}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                  <CardHeader className="pb-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t.entities.sole.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.entities.sole.description}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                  <CardHeader className="pb-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t.entities.branch.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.entities.branch.description || ''}
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                  <CardHeader className="pb-4">
                    <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t.entities.representative.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {t.entities.representative.description}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.process.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.process.description}
            </p>
          </div>
          
          {language === 'en' && (
            <div className="space-y-8">
              {t.process.steps.map((step, index) => (
                <Card key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          <strong>Action:</strong> {step.action}
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          <strong>Details:</strong> {step.details}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-blue-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.documentation.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.documentation.description}
            </p>
          </div>
          
          {language === 'en' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white rounded-2xl shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {t.documentation.individual.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t.documentation.individual.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-2xl shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {t.documentation.legal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t.documentation.legal.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-xl">
                      <FileText className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Important Notes on Documents</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t.documentation.note}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.timeline.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.timeline.description}
            </p>
          </div>
          
          {language === 'en' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {t.timeline.breakdown.map((item, index) => (
                  <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-0 text-center">
                    <CardContent className="p-6">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2">
                        {item.step}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {item.duration}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Total Timeline</h3>
                  <p className="text-gray-700 mb-4">{t.timeline.total}</p>
                  <p className="text-gray-600 text-sm">{t.timeline.realistic}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Costs Section */}
      <section id="costs" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.costs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.costs.description}
            </p>
          </div>
          
          {language === 'en' && (
            <Card className="bg-white rounded-2xl shadow-lg border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
                    <ul className="space-y-4">
                      {t.costs.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Get Accurate Pricing</h3>
                    <p className="text-gray-600 mb-6">
                      Each registration case is unique. Contact us for a detailed cost breakdown tailored to your specific needs.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* AML Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.aml.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.aml.description}
            </p>
          </div>
          
          {language === 'en' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {t.aml.importance.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t.aml.importance.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-0">
                <CardHeader className="pb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {t.aml.requirements.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{t.aml.requirements.description}</p>
                  <ul className="space-y-3">
                    {t.aml.requirements.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Note</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t.aml.compliance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.description}
            </p>
          </div>
          
          {language === 'en' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.services.items.map((service, index) => (
                  <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border-0">
                    <CardHeader className="pb-4">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  {t.services.cta}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.contact.description}
            </p>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">Email us at:</p>
              <a 
                href="mailto:info@nexa.mk" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t.contact.email}
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Globe className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-semibold">company.nexa.mk</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.copyright}
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}