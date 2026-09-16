import PortalHeader from '@/components/PortalHeader';
import PortalFooter from '@/components/PortalFooter';
import LeadForm from '@/components/LeadForm';
import { getCategories } from '@/lib/categories';
import { type Locale } from '@/lib/i18n';

export default function ContactView({
  locale,
  defaultTopic = '',
}: {
  locale: Locale;
  defaultTopic?: string;
}) {
  const categories = getCategories(locale);

  const copy =
    locale === 'mk'
      ? {
          title: 'Најдете верифициран експерт',
          desc: 'Кажете ни неколку детали за вашето прашање и ќе ви помогнеме да се поврзете со верифициран експерт од мрежата на Nexa. Ќе добиете јасен опсег и понуда — без обврска.',
          consent:
            'Кога ќе нѐ контактирате, вашето барање се презентира пред верифицираната Nexa мрежа анонимно — без вашето име. Контактот го споделуваме само доколку професионалец изрази интерес да помогне, а барањето можете да го повлечете во секое време на info@nexa.mk. Кон Nexa немате финансиски обврски; условите и цената ги договарате директно со професионалецот.',
        }
      : {
          title: 'Find a verified expert',
          desc: 'Tell us a few details about your question and we will help you connect with a verified expert from the Nexa network. You will get a clear scope and quote — no obligation.',
          consent:
            'When you contact us, your request is presented to the verified Nexa network anonymously — without your name. We share your contact only if a professional expresses interest in helping, and you can withdraw your request at any time by emailing info@nexa.mk. You have no financial obligation toward Nexa; any terms and price are agreed directly with the professional.',
        };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <PortalHeader locale={locale} />
      <main id="main" className="flex-1">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">{copy.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{copy.desc}</p>

          <div className="relative rounded-2xl bg-white border border-gray-100 shadow-md p-8">
            <LeadForm locale={locale} categories={categories} defaultTopic={defaultTopic} />
            <p className="text-xs text-gray-500 leading-relaxed mt-6 border-t border-gray-100 pt-6">
              {copy.consent}
            </p>
          </div>
        </section>
      </main>
      <PortalFooter locale={locale} />
    </div>
  );
}
