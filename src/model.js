import image from './assets/deer.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks.js'

export const model = [
  new TitleBlock('Демопроект "Конструктор Сайтов"', {
    tag: 'h2',
    styles: 'background: linear-gradient(to top left, blue, pink); color: #ffff; text-align:center'
  }),
  new ImageBlock(image, {
    styles: 'padding: 3rem 0; display: flex; justify-content: center;',
    alt: 'Julia\'s deer',
    imageStyles: 'width: 500px; height:auto'
  }), 
  new TextBlock('Здесь демонстрируются возможности создания сайта на чистом JavaScript', {
    styles: 'background: darkred; color: pink; text-align:center'
  }),
  new TextColumnsBlock([
    'Это довольно простой проект, необходимый для того, чтобы продемонсстрировать возможности JavaScript.',
    'Несмотря на простоту, иметь подобный проект в портфолио на GitHub и на хостинге — весьма небесполезно.',
    'WebPack, Bootstrap и, конечно, чистый JavaScript — вот ингредиенты этого приложения.'
  ], {
    styles: 'padding: 1rem;'
  })
]