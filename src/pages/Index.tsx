const hero = new URL("../assets/webstudio-hero.jpg", import.meta.url).href;
const caseBot = new URL("../assets/webstudio-casebot.jpg", import.meta.url).href;
const services = new URL("../assets/webstudio-services.jpg", import.meta.url).href;
const team = new URL("../assets/webstudio-team.jpg", import.meta.url).href;
const processImg = new URL("../assets/webstudio-processimg.jpg", import.meta.url).href;
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Stat = ({ k, v }: { k: string; v: string }) => (
  <div className="flex flex-col gap-1">
    <div className="text-2xl font-semibold tracking-tight">{v}</div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{k}</div>
  </div>
);

const FlowDiagram = () => (
  <svg viewBox="0 0 600 220" className="w-full h-auto" aria-label="Схема работы AI-ассистента">
    <defs>
      <linearGradient id="lg" x1="0" x2="1">
        <stop offset="0" stopColor="hsl(195 90% 60%)" />
        <stop offset="1" stopColor="hsl(168 76% 52%)" />
      </linearGradient>
    </defs>
    {[
      { x: 60, label: "Клиент", sub: "WhatsApp · Telegram" },
      { x: 230, label: "AI-ассистент", sub: "GPT · контекст" },
      { x: 400, label: "CRM", sub: "AmoCRM · Bitrix" },
      { x: 540, label: "Менеджер", sub: "" },
    ].map((n, i) => (
      <g key={i}>
        <rect x={n.x - 50} y={80} width={100} height={60} rx={10}
          fill="hsl(220 16% 11%)" stroke="hsl(220 12% 22%)" />
        <text x={n.x} y={108} textAnchor="middle" fill="hsl(210 20% 96%)" fontSize="13" fontWeight="600">{n.label}</text>
        <text x={n.x} y={126} textAnchor="middle" fill="hsl(215 14% 60%)" fontSize="9">{n.sub}</text>
      </g>
    ))}
    {[[110, 180], [280, 350], [450, 490]].map(([a, b], i) => (
      <line key={i} x1={a} y1={110} x2={b} y2={110}
        stroke="url(#lg)" strokeWidth="2" className="flow-line" />
    ))}
    <circle cx="300" cy="40" r="6" fill="hsl(168 76% 52%)" className="pulse-dot" />
    <text x="300" y="25" textAnchor="middle" fill="hsl(215 14% 60%)" fontSize="10" className="mono">обработка ~2 сек</text>
    <line x1="300" y1="48" x2="300" y2="78" stroke="hsl(168 76% 52% / 0.4)" strokeDasharray="2 3" />
    <circle cx="540" cy="180" r="5" fill="hsl(195 90% 60%)" className="pulse-dot" />
    <text x="540" y="200" textAnchor="middle" fill="hsl(215 14% 60%)" fontSize="10" className="mono">только тёплые лиды</text>
  </svg>
);

const Index = () => {
  const [form, setForm] = useState({ name: "", contact: "", task: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Заявка отправлена", description: "Свяжемся в течение 2 часов в рабочее время." });
    setForm({ name: "", contact: "", task: "" });
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b hairline">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="w-7 h-7 rounded-lg bg-primary text-primary-foreground grid place-items-center text-sm font-bold">1L</span>
            1Lab <span className="text-muted-foreground font-normal">AI Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#cases" className="hover:text-foreground transition">Кейсы</a>
            <a href="#process" className="hover:text-foreground transition">Процесс</a>
            <a href="#price" className="hover:text-foreground transition">Цены</a>
            <a href="#contacts" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a href="#price" className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Заявка</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="container grid lg:grid-cols-12 gap-10 py-12 lg:py-20 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hairline border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
              Москва · ул. Тверская, 7
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Внедряем ИИ <br />
              в отделы продаж <br />
              <span className="text-primary">и поддержки</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              Чат-боты, ИИ-ассистенты и интеграции с CRM/API. Пилот за 2 недели — без подписок и без долгих ТЗ.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#price" className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Получить пилот за 15 000 ₽</a>
              <a href="https://t.me/one_lab" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-secondary text-foreground hairline border hover:bg-elevated transition">Написать в Telegram</a>
            </div>

            {/* Yandex trust */}
            <div className="flex items-center gap-4 pt-4 border-t hairline">
              <div className="w-10 h-10 rounded-lg bg-[#FC3F1D] grid place-items-center font-bold text-white">Я</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">4.9</span>
                  <span className="text-amber-400">★★★★★</span>
                  <span className="text-muted-foreground">· 38 отзывов на Яндекс.Картах</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">Подтверждённая организация · в топ-3 по запросу «AI студия Москва»</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden hairline border bg-elevated">
              <img src={hero} alt="ИИ для отделов продаж: рабочее место с CRM-дашбордами"
                width={1536} height={1024} className="w-full h-auto object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <div className="bg-background/80 backdrop-blur rounded-lg p-3 hairline border">
                  <div className="text-xs text-muted-foreground">Ответ бота</div>
                  <div className="font-semibold mono text-primary">~2 сек</div>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-lg p-3 hairline border">
                  <div className="text-xs text-muted-foreground">Закрытие лидов</div>
                  <div className="font-semibold mono">+34%</div>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-lg p-3 hairline border">
                  <div className="text-xs text-muted-foreground">Запуск</div>
                  <div className="font-semibold mono">14 дней</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-b hairline">
        <div className="container py-12 grid md:grid-cols-4 gap-8">
          <Stat k="Проектов внедрено" v="47" />
          <Stat k="Клиентов в Москва" v="22" />
          <Stat k="Средний срок пилота" v="14 дней" />
          <Stat k="Оценка на Яндексе" v="4.9 / 5" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-b hairline">
        <div className="container py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mono mb-2">Отзывы</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Что говорят клиенты</h2>
            </div>
            <a href="https://yandex.ru/maps" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
              Все 38 отзывов на Яндекс.Картах →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "Анна К.", c: "Розничная сеть", t: "За 12 дней подключили бота к AmoCRM. Половину рутины поддержки забрал на себя — менеджеры дышат." },
              { n: "Дмитрий В.", c: "B2B-сервис", t: "Пилот окупился за месяц. Прозрачно показали метрики, без обещаний «миллиона лидов»." },
              { n: "Игорь М.", c: "Логистика", t: "Подключили ИИ-ассистента к 1С и Telegram. Заявки обрабатываются ночью без оператора." },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl bg-elevated hairline border p-6 space-y-4">
                <div className="text-amber-400 text-sm">★★★★★</div>
                <p className="text-sm leading-relaxed text-foreground/90">«{r.t}»</p>
                <div className="pt-3 border-t hairline">
                  <div className="text-sm font-medium">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b hairline">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-widest text-primary mono">Услуги</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Что мы делаем</h2>
            <p className="text-muted-foreground">Работаем с продажами и поддержкой. Не делаем «ИИ ради ИИ» — каждое решение должно сокращать время или деньги.</p>
            <div className="rounded-2xl overflow-hidden hairline border">
              <img src={services} alt="Серверная инфраструктура" loading="lazy"
                width={1024} height={768} className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { t: "AI-ассистенты для продаж", d: "Квалификация лидов, ответы 24/7, передача тёплых клиентов менеджеру." },
              { t: "Боты для поддержки", d: "Telegram, WhatsApp, виджет на сайт. Знают вашу базу и регламенты." },
              { t: "Интеграции CRM / API", d: "AmoCRM, Bitrix24, 1С, нестандартные системы. Без дублирующих окон." },
              { t: "Нейросотрудники", d: "Расшифровка звонков, авто-задачи, контроль воронки и SLA." },
              { t: "Аудит процессов", d: "Карта операций, точки боли, оценка экономики ИИ — за 3 дня." },
              { t: "Сопровождение", d: "Поддержка, обновление промптов, рост качества от месяца к месяцу." },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-card hairline border p-5 hover:border-primary/40 transition group">
                <div className="text-xs mono text-muted-foreground mb-3">0{i+1}</div>
                <div className="font-semibold mb-2 group-hover:text-primary transition">{s.t}</div>
                <div className="text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE / BEFORE-AFTER */}
      <section id="cases" className="border-b hairline">
        <div className="container py-16 lg:py-20">
          <div className="text-xs uppercase tracking-widest text-primary mono mb-2">Кейс</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">До и после внедрения</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden hairline border">
              <img src={caseBot} alt="Чат-бот в Telegram" loading="lazy"
                width={1024} height={1024} className="w-full h-auto object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-card hairline border p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Было</div>
                <ul className="space-y-2 text-sm">
                  <li>· Ответ клиенту — до 4 часов</li>
                  <li>· 3 менеджера в чатах</li>
                  <li>· 18% конверсии в заявку</li>
                  <li>· Ночью — никого</li>
                </ul>
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/30 p-6">
                <div className="text-xs uppercase tracking-wider text-primary mb-3">Стало</div>
                <ul className="space-y-2 text-sm">
                  <li>· Ответ — за 2 секунды</li>
                  <li>· 1 менеджер на эскалациях</li>
                  <li>· 31% конверсии</li>
                  <li>· 24/7 в любом канале</li>
                </ul>
              </div>
              <div className="sm:col-span-2 rounded-xl bg-elevated hairline border p-6">
                <div className="text-sm text-muted-foreground mb-1">Клиент</div>
                <div className="font-semibold mb-2">B2B-сервис аренды оборудования, Москва</div>
                <div className="text-sm text-muted-foreground">Запуск за 11 дней. Окупаемость — 28 дней. Сэкономили 2 ставки операторов.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS with SVG animation */}
      <section id="process" className="border-b hairline">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs uppercase tracking-widest text-primary mono">Процесс</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Как идёт пилот</h2>
            <ol className="space-y-4">
              {[
                ["Брифинг", "30 минут. Смотрим воронку, каналы, текущую CRM."],
                ["Прототип", "3–5 дней. Промпты, сценарии, тестовый бот."],
                ["Интеграция", "До 14 дней. CRM, API, продакшен."],
                ["Метрики", "Замер до/после. Решение о масштабировании."],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary grid place-items-center text-sm font-semibold mono shrink-0">0{i+1}</div>
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl overflow-hidden hairline border mt-6">
              <img src={processImg} alt="Рабочий процесс команды" loading="lazy"
                width={1280} height={800} className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-elevated hairline border p-6 lg:p-8 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-medium">Архитектура внедрения</div>
                <div className="text-xs mono text-muted-foreground">live</div>
              </div>
              <FlowDiagram />
              <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                <div className="rounded-lg bg-background/50 p-3 hairline border">
                  <div className="text-xs text-muted-foreground">Каналы</div>
                  <div className="text-sm font-medium mt-1">TG · WA · Web</div>
                </div>
                <div className="rounded-lg bg-background/50 p-3 hairline border">
                  <div className="text-xs text-muted-foreground">CRM</div>
                  <div className="text-sm font-medium mt-1">Amo · Bitrix · 1C</div>
                </div>
                <div className="rounded-lg bg-background/50 p-3 hairline border">
                  <div className="text-xs text-muted-foreground">Модели</div>
                  <div className="text-sm font-medium mt-1">GPT · YandexGPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM image strip */}
      <section className="border-b hairline">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden hairline border order-2 lg:order-1">
            <img src={team} alt="Команда 1Lab AI Studio за работой" loading="lazy"
              width={1280} height={896} className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-5 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-widest text-primary mono">О студии</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Маленькая команда. Глубокая экспертиза.</h2>
            <p className="text-muted-foreground">Мы не агентство на 100 человек. Каждый проект ведёт инженер, который сам пишет промпты и интеграции. Поэтому быстрее и без потерь смыслов.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl bg-card hairline border p-4">
                <div className="text-xs text-muted-foreground">С 2023 года</div>
                <div className="font-medium mt-1">в нише AI-внедрений</div>
              </div>
              <div className="rounded-xl bg-card hairline border p-4">
                <div className="text-xs text-muted-foreground">Резидент</div>
                <div className="font-medium mt-1">технопарка Москва</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE / FORM */}
      <section id="price" className="border-b hairline">
        <div className="container py-16 lg:py-20 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs uppercase tracking-widest text-primary mono">Стоимость</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Пилот — 15 000 ₽</h2>
            <p className="text-muted-foreground">Предоплата 50% на старте, остаток — после запуска и приёмки. Без скрытых подписок.</p>
            <ul className="space-y-3 text-sm">
              {["Анализ задачи и сценариев","Прототип бота / ассистента","Подключение к одному каналу","Интеграция с одной CRM","Замер метрик до / после"].map((x, i)=> (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="text-xs text-muted-foreground pt-4 border-t hairline">
              Полноценное внедрение — от 80 000 ₽. Цену называем после брифа, а не «от».
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 rounded-2xl bg-elevated hairline border p-6 lg:p-8 space-y-5">
            <div className="font-semibold text-lg">Заявка на пилот</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-muted-foreground">Имя</span>
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}
                  className="mt-1.5 w-full bg-background hairline border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
                  placeholder="Алексей" />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Telegram или телефон</span>
                <input required value={form.contact} onChange={e=>setForm({...form, contact:e.target.value})}
                  className="mt-1.5 w-full bg-background hairline border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
                  placeholder="@nickname / +7…" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-muted-foreground">Коротко о задаче</span>
              <textarea value={form.task} onChange={e=>setForm({...form, task:e.target.value})}
                rows={4}
                className="mt-1.5 w-full bg-background hairline border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition resize-none"
                placeholder="Например: бот в Telegram для квалификации лидов, интеграция с AmoCRM" />
            </label>
            <button type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Отправить заявку
            </button>
            <div className="text-xs text-muted-foreground">Ответим в течение 2 часов в рабочее время. Никаких рассылок.</div>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts">
        <div className="container py-16 lg:py-20 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mono mb-3">Адрес</div>
            <div className="font-medium">??????</div>
            <div className="text-muted-foreground text-sm">ул. Гороховая, 7</div>
            <div className="text-muted-foreground text-sm mt-1">Пн–Пт · 10:00–19:00</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mono mb-3">Связь</div>
            <a href="mailto:1lab@1true.ru" className="block font-medium hover:text-primary transition">1lab@1true.ru</a>
            <a href="https://t.me/one_lab" target="_blank" rel="noreferrer" className="block text-muted-foreground text-sm mt-1 hover:text-foreground">Telegram: @one_lab</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mono mb-3">Юридически</div>
            <div className="text-sm text-muted-foreground">ИП · работаем по договору и счёту</div>
            <div className="text-sm text-muted-foreground mt-1">Закрывающие документы — в ЭДО или почтой</div>
          </div>
        </div>
        <div className="border-t hairline">
          <div className="container py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} 1Lab AI Studio</div>
            <div className="mono">made in Saint Petersburg</div>
          </div>
        </div>
      </section>
      <section className="webstudio-revision-block" style={{ padding: "72px 24px", background: "#f8fafc", color: "#111827" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <p style={{ margin: "0 0 10px", fontSize: "13px", textTransform: "uppercase", letterSpacing: ".08em", color: "#64748b" }}>Обновление сайта</p>
          <h2 style={{ margin: "0 0 16px", fontSize: "32px", lineHeight: 1.1 }}>{"Как нас найти"}</h2>
          <p style={{ margin: "0 0 24px", maxWidth: "760px", fontSize: "18px", lineHeight: 1.55, color: "#334155" }}>{"Добавьте блок с адресом студии, виджет Яндекс карт и контакты: Telegram @one_lab, email 1lab@1true.ru."}</p>
          <iframe title="Яндекс Карта" src="https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A2%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%2C%207&amp;z=16" loading="lazy" style={{ width: "100%", height: "360px", border: 0, borderRadius: "12px" }} />
        </div>
      </section>
</div>
  );
};

export default Index;
