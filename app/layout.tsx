const RootLayout = ({children}: {children: React.ReactNode}) => (
  <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Loïc Sweet Creations 🍰</title>
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
