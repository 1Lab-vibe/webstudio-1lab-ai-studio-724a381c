import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Bot, Workflow, MessageSquare, ShieldCheck, Star, MapPin, Mail, Send, Check, Clock, FileText, Award } from "lucide-react";
import AiFlow from "@/components/AiFlow";
import heroImg from "@/assets/hero-ai.jpg";
import caseChatbot from "@/assets/case-chatbot.jpg";
import caseCrm from "@/assets/case-crm.jpg";
import caseSupport from "@/assets/case-support.jpg";
import aboutImg from "@/assets/about-studio.jpg";

const ADDRESS = "Москва, ул. Тверская, 7";

const services = [
  { icon: Bot, title: "AI-чат-бот для продаж", desc: "Квалификация лидов в WhatsApp, Telegram и на сайте 24/7. Передача в CRM с тегами и сводкой диалога.", price: "от 45 000 ₽" },
  { icon: MessageSquare, title: "AI-оператор поддержки", desc: "Отвечает по базе знаний, закрывает 60–80% типовых обращений, эскалирует сложное на менеджера.", price: "от 60 000 ₽" },
  { icon: Workflow, title: "CRM- и API-интеграции", desc: "amoCRM, Bitrix24, 1С, Google Sheets, телефония. Сценарии, триггеры, дашборды.", price: "от 35 000 ₽" },
  { icon: Award, title: "Внедрение нейросотрудников A1", desc: "Готовая платформа A1 под ваши процессы: подбор моделей, обучение на ваших данных, поддержка.", price: "от 120 000 ₽" },
  { icon: FileText, title: "Аудит и стратегия AI", desc: "Карта процессов, точки автоматизации, ROI-расчёт, дорожная карта на 3 месяца.", price: "от 25 000 ₽" },
  { icon: Clock, title: "Пилот за 2 недели", desc: "Запуск рабочего бота на одном сценарии. Если не подошёл — возврат 50%.", price: "15 000 ₽" },
];

const cases = [
  { img: caseChatbot, tag: "Онлайн-школа", title: "Бот квалифицирует 1 200 лидов в неделю", metric: "−72% нагрузки на отдел продаж", text: "WhatsApp + amoCRM. Окупился за 18 дней." },
  { img: caseCrm, tag: "B2B-сервис", title: "Связали сайт, телефонию и Bitrix24", metric: "+34% к конверсии в сделку", text: "Сквозная аналитика и автоназначение менеджера по сегменту." },
  { img: caseSupport, tag: "E-commerce", title: "AI-поддержка закрывает 78% тикетов", metric: "Среднее время ответа — 9 секунд", text: "База знаний + история заказов из 1С." },
];

const advantages = [
  { icon: ShieldCheck, title: "Договор и гарантия", text: "Работаем по договору с физлицами и юрлицами. Возврат 50% по пилоту, если не сработал." },
  { icon: Award, title: "Опыт с 2022 года", text: "40+ внедрений в продажах и поддержке. Партнёры платформы A1." },
  { icon: Clock, title: "Запуск за 14 дней", text: "Первый рабочий сценарий — за две недели, без многомесячных согласований." },
  { icon: Star, title: "4,9 на Яндекс.Картах", text: "Отзывы клиентов в карточке организации, проверяемые публично." },
];

const reviews = [
  { name: "Алексей М.", role: "Руководитель отдела продаж", text: "За 3 недели запустили бота в WhatsApp. Менеджеры разгружены, лиды квалифицируются ночью — утром уже горячие.", source: "Яндекс.Карты" },
  { name: "Ирина К.", role: "COO, онлайн-школа", text: "Сделали интеграцию с amoCRM и базой знаний. Команда 1Lab отвечает быстро, без воды. Рекомендую.", source: "Яндекс.Карты" },
  { name: "Дмитрий П.", role: "Основатель B2B-сервиса", text: "Внедрили нейросотрудника A1 на первой линии поддержки. 78% тикетов закрываются автоматически.", source: "Клиент" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", contact: "", task: "" });
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      toast({ title: "Заполните имя и контакт", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена", description: "Свяжемся в течение часа в рабочее время." });
    setForm({ name: "", contact: "", task: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">1L</span>
            1Lab <span className="text-muted-foreground font-medium">AI Studio</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <Button asChild size="sm"><a href="#form">Оставить заявку</a></Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
              Москва · работаем с 2022 года · 4,9 на Яндекс.Картах
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance mb-6">
              ИИ для отделов <span className="text-primary">продаж</span> и <span className="text-accent">поддержки</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl text-balance">
              Внедряем чат-ботов, AI-операторов и нейросотрудников платформы A1. Пилот — за 2 недели. Не сработал — возвращаем 50%.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild size="lg" className="shadow-glow"><a href="#form">Оставить заявку <ArrowRight className="ml-2 w-4 h-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#services">Получить консультацию</a></Button>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[{ k: "40+", v: "внедрений" }, { k: "14", v: "дней до пилота" }, { k: "4,9", v: "Яндекс.Карты" }].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-display font-bold text-foreground">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={heroImg} alt="AI и CRM-инфраструктура 1Lab" className="w-full h-auto" width={1536} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <Card className="absolute -bottom-6 -left-4 md:-left-10 p-4 w-64 bg-card/95 backdrop-blur border-border shadow-card">
              <div className="text-xs text-muted-foreground mb-2">Как работает агент</div>
              <AiFlow />
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="text-sm text-primary font-medium mb-3">Услуги</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Что мы внедряем</h2>
          <p className="text-muted-foreground">Конкретные продукты с фиксированными диапазонами цен. Без бесконечных «уточнений».</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="p-6 bg-card border-border hover:border-primary/50 transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="text-accent font-semibold">{s.price}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="bg-secondary/30 border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-sm text-primary font-medium mb-3">Кейсы</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Что уже работает у клиентов</h2>
            </div>
            <Button variant="outline" asChild><a href="#form">Обсудить ваш сценарий</a></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Card key={c.title} className="overflow-hidden bg-card border-border">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-primary mb-2">{c.tag}</div>
                  <h3 className="font-display font-semibold text-lg mb-3">{c.title}</h3>
                  <div className="text-accent font-semibold text-sm mb-2">{c.metric}</div>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="container py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <div className="text-sm text-primary font-medium mb-3">Преимущества</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Почему нам доверяют</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a) => (
            <div key={a.title} className="p-6 rounded-2xl border border-border bg-card/50">
              <a.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-display font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-secondary/30 border-y border-border">
        <div className="container py-20 md:py-28">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}</div>
            <span className="font-display font-bold text-xl">4,9</span>
            <span className="text-muted-foreground text-sm">· отзывы из Яндекс.Карт и от клиентов</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 bg-card border-border">
                <div className="flex mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-sm mb-5 text-foreground/90">«{r.text}»</p>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-foreground">{r.name}</div>
                    <div className="text-muted-foreground">{r.role}</div>
                  </div>
                  <span className="px-2 py-1 rounded bg-secondary text-muted-foreground">{r.source}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border border-border">
          <img src={aboutImg} alt="Студия 1Lab AI в Москве" loading="lazy" className="w-full h-auto" width={1280} height={800} />
        </div>
        <div>
          <div className="text-sm text-primary font-medium mb-3">О студии</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">Команда инженеров и продактов AI</h2>
          <p className="text-muted-foreground mb-5">
            1Lab AI Studio — продуктовая команда из Москвы. Мы не «продаём ChatGPT», а встраиваем ИИ в реальные процессы: от первой реплики клиента в Telegram до сделки в amoCRM.
          </p>
          <p className="text-muted-foreground mb-8">
            С 2022 года мы запустили 40+ внедрений и стали официальным партнёром платформы нейросотрудников A1.
          </p>
          <ul className="space-y-3">
            {["Договор с физ- и юрлицами", "Гарантия результата на пилоте", "Сопровождение после запуска", "Прозрачная аналитика и отчётность"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACTS + MAP */}
      <section id="contacts" className="bg-secondary/30 border-y border-border">
        <div className="container py-20 md:py-28 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-sm text-primary font-medium mb-3">Контакты</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Студия в центре Москвы</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div><div className="font-medium">{ADDRESS}</div><div className="text-sm text-muted-foreground">Пн–Пт, 10:00–19:00</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="mailto:1lab@1true.ru" className="hover:text-primary">1lab@1true.ru</a>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="https://t.me/one_lab" target="_blank" rel="noreferrer" className="hover:text-primary">Telegram: @one_lab</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3] lg:aspect-auto min-h-[320px]">
            <iframe
              title="1Lab AI Studio на Яндекс.Картах"
              src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20ул.%20Тверская%2C%207&z=17"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="container py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="text-sm text-primary font-medium mb-3">Заявка</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Опишите задачу — соберём пилот</h2>
          <p className="text-muted-foreground">Ответим в течение часа в рабочее время. Без звонков «по скрипту».</p>
        </div>
        <Card className="max-w-2xl mx-auto p-6 md:p-8 bg-card border-border shadow-card">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" />
            </div>
            <div>
              <Label htmlFor="contact">Telegram, email или телефон</Label>
              <Input id="contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder="@username или почта" />
            </div>
            <div>
              <Label htmlFor="task">Задача</Label>
              <Textarea id="task" rows={4} value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} placeholder="Например: бот в WhatsApp для квалификации лидов и интеграция с amoCRM" />
            </div>
            <Button type="submit" size="lg" className="w-full shadow-glow">Оставить заявку</Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
          </form>
        </Card>
      </section>

      <footer className="border-t border-border">
        <div className="container py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <div>© {year} 1Lab AI Studio · {ADDRESS}</div>
          <div className="flex gap-5">
            <a href="mailto:1lab@1true.ru" className="hover:text-foreground">1lab@1true.ru</a>
            <a href="https://t.me/one_lab" target="_blank" rel="noreferrer" className="hover:text-foreground">@one_lab</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
