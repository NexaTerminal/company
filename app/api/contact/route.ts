import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getCategoryBySlug } from '@/lib/categories';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TO_EMAIL = process.env.LEAD_TO_EMAIL || 'info@nexa.mk';
// Must be a verified sender/domain in Resend. Falls back to Resend's test sender.
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'Company Nexa <onboarding@resend.dev>';
// Sender for the visitor-facing auto-reply. Domain (mail.nexa.mk) needs SPF+DKIM in Resend.
const AUTOREPLY_FROM = process.env.AUTOREPLY_FROM_EMAIL || 'Company · Nexa <noreply@mail.nexa.mk>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE = 'company.nexa.mk';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Builds the automatic confirmation reply sent back to the visitor.
 * Explains the anonymous referral flow, the right to opt out ("recall"),
 * and that there are no financial obligations towards Nexa.
 * The form collects no name, so the greeting is generic.
 */
function buildAutoReply(locale: 'mk' | 'en', rawEmail: string): { subject: string; html: string } {
  const wrap = (inner: string) =>
    `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1f2937;line-height:1.6;font-size:15px">${inner}</div>`;

  const button = (href: string, label: string) =>
    `<p style="text-align:center;margin:28px 0"><a href="${href}" style="background:#111827;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;display:inline-block;font-weight:600">${label}</a></p>`;

  if (locale === 'en') {
    const optOutSubject = 'I do not wish to be contacted — withdrawal of consent';
    const optOutBody =
      `With this message I declare that I do not want the request I submitted through ${SITE} ` +
      `to be forwarded to professionals, nor my contact details to be shared with any third party.\n\n` +
      `The e-mail I used to submit the request: ${rawEmail}`;
    const optOutLink = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(optOutSubject)}&body=${encodeURIComponent(optOutBody)}`;

    return {
      subject: `We have received your message — ${SITE}`,
      html: wrap(
        `<p>Hello,</p>
         <p>Thank you for your message. It has been received successfully and will be reviewed with due care.</p>
         <p><strong>Nexa</strong> is a system that connects users and visitors with suitable professionals (lawyers, accountants and consultants). To that end, your request will be presented to our network of verified professionals — but <strong>anonymously</strong>, without your name, contact details or any data that could identify you.</p>
         <p>Only if one of the professionals expresses interest in offering you a solution or service — and solely for that purpose — will we share your contact so they can reach you directly.</p>
         <p>If, despite the guaranteed anonymity, you do not wish to be contacted at all, click the button below and your request will not be forwarded to anyone:</p>
         ${button(optOutLink, 'I do not wish to be contacted')}
         <p>Please note that you have no financial or material obligation toward Nexa. Any cooperation, its terms and price are agreed exclusively and directly with the professional who may contact you.</p>
         <p>If you have further questions, feel free to write to us at <a href="mailto:${TO_EMAIL}">${TO_EMAIL}</a>.</p>
         <p>Kind regards,<br/><strong>The ${SITE} team</strong> — part of the Nexa ecosystem</p>
         <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
         <p style="font-size:12px;color:#6b7280">This message was generated automatically. ${SITE} provides general information and does not constitute legal advice, nor does it create a lawyer-client relationship. If we do not find a suitable professional within 7 days, your request will be permanently deleted.</p>`
      ),
    };
  }

  const optOutSubject = 'Не сакам да бидам контактиран — повлекување на согласност';
  const optOutBody =
    `Со оваа порака изјавувам дека не сакам моето барање испратено преку ${SITE} ` +
    `да биде проследено до професионалци, ниту мојот контакт да биде споделен со трети лица.\n\n` +
    `E-mail со кој го испратив барањето: ${rawEmail}`;
  const optOutLink = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(optOutSubject)}&body=${encodeURIComponent(optOutBody)}`;

  return {
    subject: `Ја примивме Вашата порака — ${SITE}`,
    html: wrap(
      `<p>Почитуван/а,</p>
       <p>Ви благодариме на Вашата порака. Истата е успешно примена и ќе биде разгледана со должно внимание.</p>
       <p><strong>Nexa</strong> е систем кој ги поврзува корисниците и посетителите со соодветни професионалци (адвокати, сметководители и консултанти). За таа цел, Вашето барање ќе биде презентирано пред нашата мрежа од проверени професионалци — но <strong>анонимно</strong>, без да бидат наведени Вашето име, контакт детали или други податоци по кои би можеле да бидете идентификувани.</p>
       <p>Доколку некој од професионалците изрази интерес да Ви понуди решение или услуга, дури тогаш — и единствено за таа цел — ќе го споделиме Вашиот контакт, за да може директно да Ве контактира.</p>
       <p>Доколку и покрај гарантираната анонимност воопшто не сакате да бидете контактирани, кликнете на копчето подолу и Вашето барање нема да биде проследено до никого:</p>
       ${button(optOutLink, 'Не сакам да бидам контактиран')}
       <p>Ве известуваме дека кон Nexa немате никакви финансиски или материјални обврски. Евентуалната соработка, нејзините услови и цена ги договарате исклучиво и директно со професионалецот кој би Ве контактирал.</p>
       <p>Доколку имате дополнителни прашања, слободно пишете ни на <a href="mailto:${TO_EMAIL}">${TO_EMAIL}</a>.</p>
       <p>Со почит,<br/><strong>Тимот на ${SITE}</strong> — дел од Nexa екосистемот</p>
       <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
       <p style="font-size:12px;color:#6b7280">Оваа порака е автоматски генерирана. ${SITE} обезбедува општи информации и не претставува правен совет, ниту создава адвокатско-клиентски однос. Доколку во рок од 7 дена не пронајдеме соодветен професионалец, Вашето барање ќе биде трајно избришано.</p>`
    ),
  };
}

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const email = String(body?.email ?? '').trim();
  const message = String(body?.message ?? '').trim();
  const topicSlug = String(body?.topic ?? '').trim();
  const replyLocale: 'mk' | 'en' = body?.locale === 'mk' ? 'mk' : 'en';
  // Honeypot: real users never fill this hidden field.
  const honeypot = String(body?.company ?? '').trim();

  if (honeypot) {
    // Silently accept to not tip off bots.
    return NextResponse.json({ ok: true });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: 'Please describe your request (at least 10 characters).' }, { status: 400 });
  }

  const topic = topicSlug ? getCategoryBySlug(topicSlug, 'en')?.name ?? topicSlug : '—';

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — cannot send lead email.');
    return NextResponse.json(
      { ok: false, error: 'The form is temporarily unavailable. Please email info@nexa.mk.' },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `New lead — ${topic} (${SITE})`;
  const html = [
    `<p><strong>New contact request from ${SITE}</strong></p>`,
    `<p><strong>Topic:</strong> ${escapeHtml(topic)}<br/>`,
    `<strong>Locale:</strong> ${replyLocale}<br/>`,
    `<strong>Email:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
  ].join('');

  // 1) Internal notification (must succeed).
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return NextResponse.json({ ok: false, error: 'Could not send your request. Please try again.' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json({ ok: false, error: 'Could not send your request. Please try again.' }, { status: 500 });
  }

  // 2) Automatic confirmation reply to the visitor. Best-effort: a failure here
  //    must not fail the request, since the internal notification already sent.
  try {
    const autoReply = buildAutoReply(replyLocale, email);
    const { error: replyError } = await resend.emails.send({
      from: AUTOREPLY_FROM,
      to: email,
      replyTo: TO_EMAIL,
      subject: autoReply.subject,
      html: autoReply.html,
    });
    if (replyError) console.error('[contact] Auto-reply Resend error:', replyError);
  } catch (replyErr) {
    console.error('[contact] Auto-reply failed:', replyErr);
  }

  return NextResponse.json({ ok: true });
}
