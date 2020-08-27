import image from './assets/deer.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks.js'
import { css } from './utils';

export const model = [
  new TitleBlock('The Demo Project "DeerStructor"', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to top left, #ff0099, #493240)',
      padding: '1.5rem',
      color: '#ffff',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: css({
      padding: '3rem 0',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'Julia\'s deer',
    imageStyles: 'width: 400px; height:auto'
  }), 
  new TextBlock('Here some abilities of pure JavaScript are demonstrated', {
    styles: css({
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      'text-align': 'center',
      'font-size': '22px',
      'font-weight': 'bold',
      padding: '1rem;'
    })
  }),
  new TextColumnsBlock([
    'This is a quite simple project, which has been created for JavaScript opportunities demonstrating.',
    'Despite the simplicity, it\'s nice to have something similar in the portfolio.',
    'WebPack, Bootstrap, and obviously pure JavaScript — are the tech stack of this web application.'
  ], {
    styles: css({
      padding: '2rem',
      color: '#fff',
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    })
  })
]