import React from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Fetch localized messages
  const messages = await getMessages({ locale });

  // Return metadata dynamically
  return {
    title:
      messages["metadata.title"] || "Mikea - Un nou standard al confortului!",
    description:
      messages["metadata.description"] ||
      "Creăm locuințe moderne și funcționale care depășe  sc standardele de confort. Pentru o experiență de trai excepțională, alegeți Mikea!",
    keywords:
      messages["metadata.keywords"] ||
      "case, case de vis, case de lux, case moderne, case confortabile, case funcționale, case personalizate, case ecologice, case eficiente energetic, case inteligente, Moldova, Mikea, case ieftine",
    author: "Mikea Team",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon-16x16.png",
    },
    openGraph: {
      title:
        messages["metadata.title"] || "Mikea - Un nou standard al confortului!",
      description:
        messages["metadata.description"] ||
        "Creăm locuințe moderne și funcționale care depășesc standardele de confort. Pentru o experiență de trai excepțională, alegeți Mikea!",
      url: "https://mikea.md",
      siteName: "Mikea",
      images: [
        {
          url: "/public/imagini/03.jpg",
          width: 950,
          height: 575,
          alt: "Mikea - Construcția caselor la cheie",
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="scrollbar-hide no-select">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
