import HtmlLang from '@/components/HtmlLang';

export default function MkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="mk" />
      {children}
    </>
  );
}
