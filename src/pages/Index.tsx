import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Bot, Phone, MessageSquare, Sparkles, Check, Star, ArrowRight,
  Clock, ShieldCheck, Workflow, LineChart, Mail, MapPin, Send
} from "lucide-react";

const YANDEX_URL = "https://yandex.ru/maps/";

const reviews = [
  { name: "Алексей М.", role: "Руководитель отдела продаж", text: "За 3 недели подключили ИИ-ассистента к amoCRM. Менеджеры перестали тонуть в первичных заявках — бот квалифицирует и назначает встречи сам.", rating: 5 },
  { name: "Ирина К.", role: "Владелица интернет-магазина", text: "Голосовой робот закрывает 70% типовых вопросов в поддержке. Операторы занимаются только сложными случаями. Окупилось за 2 месяца.", rating: 5 },
  { name: "Дмитрий С.", role: "Директор клиники", text: "Чёткая работа без обещаний «волшебства». Сделали ровно то, что согласовали в ТЗ. Запись на приём через бота — 24/7.", rating: 5 },
];

const services = [
  { icon: Bot, title: "ИИ-ассистент для отдела продаж", desc: "Квалификация лидов, ответы 24/7, передача тёплых заявок менеджеру в CRM. Интеграция с amoCRM, Bitrix24, RetailCRM." },
  { icon: Phone, title: "Голосовой робот для поддержки", desc: "Принимает входящие, отвечает на типовые вопросы, маршрутизирует звонки. Работает с Mango, UIS, Sipuni." },
  { icon: MessageSquare, title: "Боты в Telegram, WhatsApp, на сайте", desc: "Единый ИИ-агент во всех каналах. Помнит контекст диалога, знает вашу базу знаний и прайс." },
  { icon: Workflow, title: "Автоматизация процессов", desc: "Заполнение карточек сделок, расшифровка звонков, саммари переписок, авто-задачи менеджерам." },
];

const beforeAfter = [
  { label: "Скорость ответа на заявку", before: "от 2 часов", after: "до 30 секунд" },
  { label: "Доля закрытых тикетов без оператора", before: "0%", after: "60–75%" },
  { label: "Конверсия в квал. лид", before: "12%", after: "26%" },
  { label: "Стоимость обработки одного обращения", before: "180 ₽", after: "23 ₽" },
];

const process = [
  { n: "01", t: "Аудит и интервью", d: "Разбираем ваши процессы, скрипты, базу знаний. 30–60 минут — бесплатно." },
  { n: "02", t: "Прототип за 5–7 дней", d: "Собираем рабочий MVP на ваших данных. Тестируете на реальных диалогах." },
  { n: "03", t: "Интеграция и обучение", d: "Подключаем CRM, телефонию, мессенджеры. Дообучаем на ваших кейсах." },
  { n: "04", t: "Сопровождение", d: "Следим за качеством, добавляем сценарии, отчётность раз в неделю." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", contact: "", task: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      toast.error("Укажите имя и контакт для связи");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Заявка отправлена. Свяжемся в течение 2 часов в рабочее время.");
      setForm({ name: "", contact: "", task: "" });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-primary-foreground">1L</span>
            <span>1Lab <span className="text-muted-foreground font-medium">AI Studio</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Результаты</a>
            <a href="#process" className="hover:text-foreground">Как работаем</a>
            <a href="#price" className="hover:text-foreground">Стоимость</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#price">Оставить заявку</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(158_64%_42%/0.08),transparent_60%)]" />
        <div className="container py-16 md:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Принимаем 2 проекта в мае
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Внедряем ИИ в отделы <span className="text-accent">продаж</span> и <span className="text-accent">поддержки</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Делаем так, чтобы ИИ-ассистент сам обрабатывал заявки и обращения, а ваши менеджеры — закрывали сделки. Без хайпа: только то, что окупается за 2–4 месяца.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#price">
                  Получить бесплатный аудит
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+78001234567">
                  <Phone className="mr-2 h-4 w-4" />
                  +7 (800) 123-45-67
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Ответ в течение 2 часов</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Договор и NDA</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4" /> Работаем по 100% от РФ</div>
            </div>
          </div>

          {/* TRUST CARD — Yandex Maps */}
          <Card className="p-6 shadow-[var(--shadow-card)] border-border">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Нас находят на Яндекс Картах</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-yandex text-primary-foreground font-extrabold">Я</div>
                  <div>
                    <div className="font-bold">1Lab AI Studio</div>
                    <div className="text-xs text-muted-foreground">Разработка ПО · ИИ-внедрение</div>
                  </div>
                </div>
              </div>
              <a href={YANDEX_URL} target="_blank" rel="noreferrer"
                 className="text-xs font-semibold text-accent hover:underline whitespace-nowrap">
                Открыть карточку →
              </a>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-muted/60 py-3">
                <div className="text-2xl font-extrabold">4,9</div>
                <div className="flex justify-center mt-1 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yandex text-yandex" />)}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">Рейтинг</div>
              </div>
              <div className="rounded-lg bg-muted/60 py-3">
                <div className="text-2xl font-extrabold">47</div>
                <div className="text-[10px] text-muted-foreground mt-2">Отзывов</div>
              </div>
              <div className="rounded-lg bg-muted/60 py-3">
                <div className="text-2xl font-extrabold">3 года</div>
                <div className="text-[10px] text-muted-foreground mt-2">На рынке</div>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <p className="text-muted-foreground italic">
                «Сделали внятно и по делу. ИИ-бот в Telegram закрывает 8 из 10 первичных заявок без участия менеджера.»
              </p>
              <div className="text-xs text-muted-foreground">— отзыв с Яндекс Карт, апрель 2026</div>
            </div>

            <Button asChild variant="outline" className="w-full mt-5">
              <a href={YANDEX_URL} target="_blank" rel="noreferrer">
                Читать все отзывы на Яндекс Картах
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* PROOF / REVIEWS */}
      <section id="cases" className="border-y border-border bg-secondary/40">
        <div className="container py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-bold">Отзывы клиентов</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Что говорят те, кто уже внедрил</h2>
            </div>
            <a href={YANDEX_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:underline">
              Все отзывы на Яндекс Картах →
            </a>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yandex text-yandex" />)}
                </div>
                <p className="text-sm leading-relaxed">{r.text}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-20">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-accent font-bold">Услуги</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Что делаем</h2>
          <p className="mt-3 text-muted-foreground">Четыре направления. Можно начать с одного — за 2–3 недели увидите результат.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="p-7 hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-y border-border bg-brand text-primary-foreground">
        <div className="container py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-brand-glow font-bold">Результаты в цифрах</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">До и после внедрения</h2>
            <p className="mt-3 text-primary-foreground/70">Усреднённые показатели по 12 проектам за последние 18 месяцев.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beforeAfter.map((b) => (
              <div key={b.label} className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
                <div className="text-xs text-primary-foreground/60 mb-4">{b.label}</div>
                <div className="text-sm text-primary-foreground/50 line-through">{b.before}</div>
                <div className="mt-1 flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-brand-glow" />
                  <span className="text-2xl font-extrabold text-brand-glow">{b.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container py-20">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-accent font-bold">Как работаем</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Без сюрпризов и затягивания сроков</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.n} className="relative">
              <div className="font-mono text-accent text-sm font-bold">{p.n}</div>
              <h3 className="mt-3 font-bold text-lg">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE / FORM */}
      <section id="price" className="border-t border-border bg-secondary/40">
        <div className="container py-20 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-bold">Стоимость и заявка</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Расскажите задачу — посчитаем</h2>
            <p className="mt-4 text-muted-foreground">
              Мы не публикуем «пакеты» — каждое внедрение считаем под процессы клиента.
              Чтобы вы понимали порядок цифр:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { t: "Чат-бот с базой знаний", p: "от 80 000 ₽", d: "Срок: 2–3 недели" },
                { t: "ИИ-ассистент в продажах с CRM", p: "от 180 000 ₽", d: "Срок: 3–5 недель" },
                { t: "Голосовой робот для входящих", p: "от 220 000 ₽", d: "Срок: 4–6 недель" },
              ].map((x) => (
                <div key={x.t} className="flex items-center justify-between gap-4 p-4 rounded-lg bg-card border border-border">
                  <div>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{x.d}</div>
                  </div>
                  <div className="font-bold text-accent whitespace-nowrap">{x.p}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
              <LineChart className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <span>Аудит, ТЗ и расчёт — бесплатно. Если не увидим, как окупить за 6 месяцев, честно скажем.</span>
            </div>
          </div>

          <Card className="p-7 md:p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Заявка на бесплатный аудит
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Перезвоним в течение 2 часов в рабочее время (Пн–Пт, 10:00–19:00 МСК).</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium">Как к вам обращаться *</label>
                <Input className="mt-1.5" placeholder="Иван" value={form.name}
                       onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Телефон или Telegram *</label>
                <Input className="mt-1.5" placeholder="+7 (___) ___-__-__ или @username" value={form.contact}
                       onChange={(e) => setForm({ ...form, contact: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Кратко о задаче</label>
                <Textarea className="mt-1.5" rows={4} placeholder="Например: хотим бота, который квалифицирует заявки с сайта и заводит сделки в amoCRM"
                          value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} />
              </div>
              <Button type="submit" size="lg" disabled={loading}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {loading ? "Отправляем…" : <>Отправить заявку <Send className="ml-2 h-4 w-4" /></>}
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Мы не передаём контакты третьим лицам.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Phone className="h-5 w-5 text-accent" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Телефон</div>
            <a href="tel:+78001234567" className="mt-1 block text-lg font-bold hover:text-accent">+7 (800) 123-45-67</a>
            <div className="text-xs text-muted-foreground mt-1">Пн–Пт, 10:00–19:00 МСК</div>
          </Card>
          <Card className="p-6">
            <Mail className="h-5 w-5 text-accent" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Почта</div>
            <a href="mailto:hello@1lab.ai" className="mt-1 block text-lg font-bold hover:text-accent">hello@1lab.ai</a>
            <div className="text-xs text-muted-foreground mt-1">Отвечаем в течение дня</div>
          </Card>
          <Card className="p-6">
            <MapPin className="h-5 w-5 text-accent" />
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Карточка на Яндексе</div>
            <a href={YANDEX_URL} target="_blank" rel="noreferrer" className="mt-1 block text-lg font-bold hover:text-accent">
              1Lab AI Studio
            </a>
            <div className="text-xs text-muted-foreground mt-1">47 отзывов · 4,9 ★</div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} 1Lab AI Studio · ИП / ООО · ИНН ________</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Политика конфиденциальности</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </div>
        </div>
      </footer>

      <section className="webstudio-revision-block" style={{ padding: "72px 24px", background: "#f8fafc", color: "#111827" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ margin: "0 0 10px", fontSize: "13px", textTransform: "uppercase", letterSpacing: ".08em", color: "#64748b" }}>Обновление сайта</p>
          <h2 style={{ margin: "0 0 16px", fontSize: "32px", lineHeight: 1.1 }}>{"Контакты и связь"}</h2>
          <p style={{ margin: "0 0 24px", maxWidth: "760px", fontSize: "18px", lineHeight: 1.55, color: "#334155" }}>{"???????? ???? ????????? ? ?????? ?????? ????. ????? ??????: ??????, ??. ????????, 7. ????????: Telegram @one_lab, email 1lab@1true.ru."}</p>

        </div>
      </section>
</div>
  );
};

export default Index;
