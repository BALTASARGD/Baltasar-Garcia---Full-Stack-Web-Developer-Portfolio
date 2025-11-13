import { translations, type Language } from '@/lib/translations';

export function Footer({ language }: { language: Language }) {
  const t = translations[language].footer;

  return (
    <footer className="w-full border-t">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.copyright}
        </p>
      </div>
    </footer>
  );
}
