import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
         <link rel="preconnect" href="https://fonts.gstatic.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" href="/static/img/logo.png" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
               <noscript
                  dangerouslySetInnerHTML={{
                     __html: `
                     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WN8JSC"
                     height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                  }}
               />
            </body>
         </Html>
      )
   }
}
