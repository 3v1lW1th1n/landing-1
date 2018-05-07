import * as express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('/', (_req, res: express.Response) => {
  return res.render('main', {
      title: '﻿Angular, React, TypeScript, JavaScript, NodeJS, VueJS development company - JSDADDY',
      meta: [
        {
          name: 'description',
          content: "JavaScript development company - JSDADDY"
        },
        {
          name: 'keywords',
          content: 'Development, JavaScript, TypeScript, Angular, MongoDB, NodeJS, VueJS, MEAN, Dart, Flutter, React Native, React, CSS, SASS, HTML, WEB'
        }
      ]
    })
});


app.listen(3000);