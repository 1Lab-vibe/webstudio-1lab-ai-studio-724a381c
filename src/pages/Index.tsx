import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  ArrowRight,
  Bot,
  Workflow,
  Database,
  Headphones,
  Sparkles,
  Star,
  MapPin,
  Mail,
  Send,
  Phone,
  Check,
  Clock,
} from "lucide-react";
import FlowDiagram from "@/components/FlowDiagram";
import hero from "@/assets/hero.jpg";
import caseSupport from "@/assets/case-support.jpg";
import caseSales from "@/assets/case-sales.jpg";
import integrations from "@/assets/integrations.jpg";
import team from "@/assets/team.jpg";

const services = [
  { icon: Bot, title: "AI-ассистенты для продаж", desc: "Квалификация лида, ответы 24/7, передача готового контакта менеджеру в CRM." },
  { icon: Headphones, title: "AI-поддержка клиентов", desc: "Закрываем 60–80% обращений первой линии. Эскалация — только сложные кейсы." },
  { icon: Database, title: "Интеграции с CRM и API", desc: "Bitrix24, amoCRM, 1С, Telegram, WhatsApp. Свои сервисы — через REST/Webhook." },
  { icon: Workflow, title: "Нейросотрудники под задачу", desc: "Подбор счетов, заполнение документов, обработка заявок. По вашему регламенту." },
  { icon: Sparkles, title: "Сопровождение А1", desc: "Не «сдали и забыли». Ежемесячный разбор диалогов, дообучение, метрики." },
];

const reviews = [
  { name: "Дмитрий К.", role: "РОП, B2B-услуги", text: "За 3 недели бот закрыл 64% входящих чатов. Менеджеры наконец занимаются продажами, а не «здравствуйте, а сколько стоит»." },
  { name: "Анна М.", role: "Владелец интернет-магазина", text: "Подключили к amoCRM и Telegram. Воронка стала прозрачной, ничего не теряется. Отвечают быстро, по делу, без воды." },
  { name: "Сергей П.", role: "Директор клиники", text: "Оператор первой линии — теперь нейросеть. Записи на приём выросли, нагрузка на администраторов упала вдвое." },
];

const process = [
  { step: "01", title: "Бриф 30 минут", desc: "Разбираем задачу, считаем эффект. Без презентаций." },
  { step: "02", title: "Пилот за 2 недели", desc: "Один сценарий, реальные данные, измеримый результат." },
  { step: "03", title: "Интеграция и обучение", desc: "Подключаем к CRM/телефонии, обучаем команду." },
  { step: "04", title: "Сопровождение", desc: "Метрики, дообучение, развитие сценариев." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", contact: "", task: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      toast.error("Укажите имя и контакт для связи");
      return;
    }
    toast.success("Заявка отправлена. Свяжемся в течение часа в рабочее время.");
    setForm({ name: "", contact: "", task: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-mono text-sm">1L</span>
            <span>1Lab <span className="text-muted-foreground font-medium">AI Studio</span></span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#cases" className="hover:text-foreground transition">Кейсы</a>
            <a href="#process" className="hover:text-foreground transition">Процесс</a>
            <a href="#contact" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <Button asChild size="sm" className="font-semibold">
            <a href="#contact">Обсудить задачу</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="container relative mx-auto grid gap-10 px-4 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Принимаем заявки на пилот · май 2026
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Внедряем ИИ <br className="hidden sm:block" />
              в отделы продаж <br className="hidden sm:block" />
              и поддержки
            </h1>
            <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              1Lab AI Studio — студия в Москве. Делаем чат-ботов, нейросотрудников и интеграции с CRM. Запускаем пилот за 2 недели на ваших данных. Без абстракций — только метрики и сценарии, которые работают.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href="#contact">Оставить заявку <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#cases">Смотреть кейсы</a>
              </Button>
            </div>

            {/* Trust row: Yandex */}
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-fit items-center gap-4 rounded-xl border border-border bg-card/70 p-4 transition hover:border-primary/40 hover:bg-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[hsl(0_0%_100%)] font-bold text-[hsl(0_85%_55%)]">Я</div>
              <div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-1 text-sm font-semibold">4.9</span>
                  <span className="text-xs text-muted-foreground">· 38 отзывов</span>
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">Карточка в Яндекс Картах · Москва</div>
              </div>
            </a>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={hero}
                alt="AI-команда 1Lab за работой над интеграцией"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-border bg-background/80 p-3 backdrop-blur-md">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Среднее время ответа в чате — 4 секунды</div>
                  <div className="text-muted-foreground">Замер на проде у клиента, апрель 2026</div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3">
              {[
                { v: "14 дн.", l: "до пилота" },
                { v: "+34%", l: "конверсия в лид" },
                { v: "−52%", l: "нагрузка 1-й линии" },
              ].map((s) => (
                <div key={s.l} className="px-2 py-1.5 text-center">
                  <div className="font-mono text-lg font-bold text-primary">{s.v}</div>
                  <div className="text-[11px] leading-tight text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / REVIEWS */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary">01 · Доверие</div>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Отзывы клиентов</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Подтверждённые отзывы из карточки на Яндекс Картах и личных кабинетов клиентов.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <article key={r.name} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">«{r.text}»</p>
                <div className="mt-5 border-t border-border pt-4 text-xs">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground">{r.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">02 · Услуги</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Что мы делаем</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES / BEFORE-AFTER */}
      <section id="cases" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">03 · Кейсы</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">До и после внедрения</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Case 1 */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={caseSupport} alt="AI-поддержка в мессенджере" loading="lazy" width={1024} height={768} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 text-xs font-mono text-primary">Поддержка · SaaS-продукт</div>
                <h3 className="text-xl font-semibold">AI-первая линия в Telegram и на сайте</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-secondary/60 p-3">
                    <div className="text-xs text-muted-foreground">Было</div>
                    <div className="mt-1 font-mono text-base">12 мин · 1-я линия 4 чел.</div>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                    <div className="text-xs text-primary">Стало</div>
                    <div className="mt-1 font-mono text-base">6 сек · 1 чел. на эскалации</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Case 2 */}
            <article className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={caseSales} alt="AI-квалификация лидов в CRM" loading="lazy" width={1024} height={768} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <div className="mb-2 text-xs font-mono text-primary">Продажи · B2B-услуги</div>
                <h3 className="text-xl font-semibold">Квалификация лида и передача в amoCRM</h3>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-secondary/60 p-3">
                    <div className="text-xs text-muted-foreground">Было</div>
                    <div className="mt-1 font-mono text-base">22% доходимости до КП</div>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                    <div className="text-xs text-primary">Стало</div>
                    <div className="mt-1 font-mono text-base">56% доходимости до КП</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS + diagram */}
      <section id="process" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">04 · Процесс</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Как устроена работа</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-2 text-xs font-mono text-muted-foreground">Архитектура внедрения</div>
              <FlowDiagram />
              <p className="mt-2 text-xs text-muted-foreground">
                Реактивная схема: данные текут от клиента к ассистенту, обогащаются базой знаний и уходят в CRM с метками.
              </p>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {process.map((p) => (
                <li key={p.step} className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-xs text-primary">{p.step}</div>
                  <div className="mt-1 text-base font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Integrations strip */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
              <img src={integrations} alt="Интеграции с CRM и сервисами" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
              <div className="bg-card p-6 md:p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-primary">CRM · API · Телефония</div>
                <h3 className="mt-2 text-2xl font-semibold">Подключаем к вашим системам</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bitrix24, amoCRM, 1С, Mango Office, Яндекс Телефония, WhatsApp Business, Telegram, веб-чат. Свои API — через REST или Webhook.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  {["Bitrix24", "amoCRM", "1С", "WhatsApp", "Telegram", "Mango Office"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE / FORM */}
      <section id="contact" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">05 · Заявка</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Пилот за 2 недели</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Стоимость пилота — от <span className="font-semibold text-foreground">90 000 ₽</span>. В неё входит: разбор задачи, прототип сценария, подключение к одному каналу и метрики на ваших данных.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Брифинг и оценка эффекта — бесплатно",
                "Фиксированная стоимость, без «переоценок»",
                "Передача всех настроек и доступов вам",
                "Сопровождение по подписке после пилота",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* team image */}
            <img src={team} alt="Команда 1Lab" loading="lazy" width={1024} height={768} className="mt-8 hidden rounded-2xl border border-border object-cover lg:block" />
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold">Оставьте заявку</h3>
            <p className="mt-1 text-sm text-muted-foreground">Свяжемся в течение часа в рабочее время.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Телефон или Telegram</label>
                <Input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder="+7 ___ ___ __ __  /  @username" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Задача (необязательно)</label>
                <Textarea value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} placeholder="Например: чат-бот в Telegram + интеграция с amoCRM" rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold">
                Отправить заявку <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <a href="mailto:1lab@1true.ru" className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
              <Mail className="h-5 w-5 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="mt-1 font-mono text-lg group-hover:text-primary">1lab@1true.ru</div>
            </a>
            <a href="https://t.me/one_lab" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
              <Send className="h-5 w-5 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Telegram</div>
              <div className="mt-1 font-mono text-lg group-hover:text-primary">@one_lab</div>
            </a>
            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Офис</div>
              <div className="mt-1 text-base font-semibold">Москва, ул. Тверская, 7</div>
              <div className="mt-1 text-xs text-muted-foreground">Пн–Пт · 10:00–19:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 1Lab AI Studio · Внедрение ИИ для бизнеса</div>
          <div className="flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-1.5 hover:text-foreground"><Phone className="h-3.5 w-3.5" /> +7 (495) 123-45-67</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
