import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={cn("flex items-center rounded-xl border bg-muted p-1 text-xs font-semibold", className)}>
      {(["fr", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "flex items-center gap-1 rounded-lg px-2.5 py-1.5 transition-colors",
            lang === l ? "bg-card text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <span>{l === "fr" ? "🇫🇷" : "🇲🇦"}</span>
          <span>{l === "fr" ? "FR" : "عربي"}</span>
        </button>
      ))}
    </div>
  );
}
