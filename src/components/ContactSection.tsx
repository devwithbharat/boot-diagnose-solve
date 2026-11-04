import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY, hasWhatsApp, whatsappLink } from "@/data/company";
import { cn } from "@/lib/utils";

const INQUIRY_TYPES = [
  "Product Enquiry",
  "Hardware Purchase",
  "Bulk / B2B Enquiry",
  "IT Support",
  "Custom PC Build",
  "Other",
] as const;

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number."),
  inquiryType: z.enum(INQUIRY_TYPES, {
    message: "Please choose an inquiry type.",
  }),
  requirement: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please describe your requirement (at least 10 characters)."),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const inputClasses =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/25";

export function ContactSection() {
  const [submitted, setSubmitted] = useState<InquiryForm | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      inquiryType: undefined,
      requirement: "",
      message: "",
    },
  });

  const onSubmit = (values: InquiryForm) => {
    // Inquiry details are captured client-side for now; once a backend or
    // business email/WhatsApp number is configured, they can be delivered
    // there directly.
    setSubmitted(values);
  };

  const whatsappMessage = submitted
    ? `Hi ${COMPANY.shortName}, I'm ${submitted.fullName}. Inquiry type: ${submitted.inquiryType}. ${submitted.requirement ? `Requirement: ${submitted.requirement}. ` : ""}${submitted.message}`
    : "";

  const waLink = whatsappLink(whatsappMessage);

  return (
    <section id="contact" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Tell us what you need"
            description="Send an inquiry about products, services or a business requirement — we'll get back to you with a practical, budget-friendly option."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form card */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="size-9" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    Thanks, {submitted.fullName.split(" ")[0]}!
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Your <strong>{submitted.inquiryType.toLowerCase()}</strong>{" "}
                    inquiry has been noted. For the fastest response, continue
                    the conversation with us directly:
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {waLink ? (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                      >
                        <MessageCircle className="size-4" />
                        Continue on WhatsApp
                      </a>
                    ) : (
                      <p className="rounded-xl bg-accent px-4 py-2.5 text-xs text-muted-foreground">
                        WhatsApp and email details will appear here once the
                        official contact channels are published.
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        reset();
                        setSubmitted(null);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" error={errors.fullName?.message} htmlFor="fullName">
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        className={cn(inputClasses, errors.fullName && "border-destructive focus:border-destructive focus:ring-destructive/25")}
                        {...register("fullName")}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email?.message} htmlFor="email">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={cn(inputClasses, errors.email && "border-destructive focus:border-destructive focus:ring-destructive/25")}
                        {...register("email")}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" error={errors.phone?.message} htmlFor="phone">
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className={cn(inputClasses, errors.phone && "border-destructive focus:border-destructive focus:ring-destructive/25")}
                        {...register("phone")}
                      />
                    </Field>
                    <Field label="Inquiry Type" error={errors.inquiryType?.message} htmlFor="inquiryType">
                      <select
                        id="inquiryType"
                        defaultValue=""
                        className={cn(inputClasses, "appearance-none", !errors.inquiryType && "[&:not(:focus)]:text-muted-foreground [&_option]:text-foreground", errors.inquiryType && "border-destructive")}
                        {...register("inquiryType")}
                      >
                        <option value="" disabled>
                          Select an inquiry type
                        </option>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Product or Service Required"
                    hint="Optional"
                    htmlFor="requirement"
                  >
                    <input
                      id="requirement"
                      type="text"
                      placeholder="e.g. 16GB DDR4 RAM, office Wi-Fi setup, gaming PC build"
                      className={inputClasses}
                      {...register("requirement")}
                    />
                  </Field>

                  <Field label="Message" error={errors.message?.message} htmlFor="message">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your requirement, budget or the issue you're facing…"
                      className={cn(inputClasses, "resize-y", errors.message && "border-destructive focus:border-destructive focus:ring-destructive/25")}
                      {...register("message")}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric/30 transition-all hover:-translate-y-0.5 hover:bg-electric/90 sm:w-auto"
                  >
                    <Send className="size-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info panel */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-8 text-white">
              <h3 className="font-display text-xl font-bold">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Reach us directly through any of these channels, or send the
                inquiry form and we'll respond.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <MessageCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    {hasWhatsApp ? (
                      <a
                        href={whatsappLink("Hi Bootlytic Technologies, I have an inquiry.") ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan underline-offset-4 hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    ) : (
                      <p className="text-sm text-slate-400">
                        Placeholder — number to be added in{" "}
                        <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/data/company.ts</code>
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-slate-400">
                      {COMPANY.email || "Placeholder — email to be added"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm text-slate-400">{COMPANY.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                  <AlertCircle className="mt-0.5 size-4 shrink-0 text-cyan" />
                  Bulk buyers, schools and startups: mention your organisation
                  and quantity in the message for a dedicated B2B quote.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-foreground">
        {label}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive">
          <AlertCircle className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
