import { faqs } from "@/lib/content";

export function FaqList() {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="surface-card group p-6">
          <summary className="faq-summary">
            {faq.question}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#edf7ee] text-lg font-medium text-[#2F7A3A] transition group-open:bg-[#031020] group-open:text-white">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
