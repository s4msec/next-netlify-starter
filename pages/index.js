import Head from 'next/head';
import Script from 'next/script'; // Importando o componente next/script
import { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  useEffect(() => {
    // Verifica se Service Workers são suportados
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register("/OneSignalSDKWorker.js").then(function(registration) {
        console.log("Service Worker registrado com sucesso com escopo:", registration.scope);
      }).catch(function(err) {
        console.log("Service Worker falhou no registro:", err);
      });
    }

    // Inicialização do OneSignal
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(function(OneSignal) {
      OneSignal.init({
        appId: "0e6d9083-524a-4079-89eb-5a7bfd60b820",
      });
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Usando next/script para carregar o script do OneSignal */}
      <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive" />

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <button>Botão que não faz nada</button>
      </main>

      <Footer />
    </div>
  );
}
