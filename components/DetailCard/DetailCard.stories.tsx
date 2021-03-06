import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DetailCard from '.';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
} as ComponentMeta<typeof DetailCard>;

const Template: ComponentStory<typeof DetailCard> = (args) => <DetailCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:
    'Got offered 25$ an hour as an Automation Control Intern. Is that a competitive offer in Los Angeles, CA as a Masters student?',
  community: 'learnpython',
  voteCount: 10,
  commentCount: 2,
  time: '2h',
  author: 'John',
  content:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, quasi eveniet amet dicta suscipit ullam esse officiis est adipisci temporibus eos omnis molestiae molestias, possimus dolorem illo nobis corporis cupiditate dolor optio rerum. Ab assumenda obcaecati placeat cupiditate excepturi.\n\nTemporibus rem ipsa optio ullam ducimus autem deserunt. Dolor sequi, ad saepe consequatur in id tempora dicta. Nemo labore corporis ipsa maxime aspernatur alias, debitis delectus corrupti expedita tenetur laudantium nobis illo exercitationem. \n\nNihil nulla cum dolorum nesciunt blanditiis, temporibus id error labore magni, quam velit provident commodi, totam illum impedit fuga voluptas? Quam ratione quos quisquam ab saepe voluptatibus, fugit perspiciatis possimus illo reiciendis tempore, laborum et asperiores debitis pariatur laboriosam numquam a exercitationem praesentium alias quo laudantium eum reprehenderit? Deserunt nemo molestiae vero et culpa tenetur totam, ea saepe. Sunt corrupti aperiam, assumenda illo reprehenderit itaque dolore? Sed excepturi ea, facilis eos dolore assumenda commodi dolor id pariatur autem voluptate, ut illum aliquam consectetur amet accusantium, adipisci hic aliquid in. Iste dolor ducimus ex fugit sint beatae, itaque corrupti tempore sunt inventore magni animi! Recusandae, non sequi et ducimus commodi accusantium libero, quam veniam possimus odio doloremque qui, cum velit culpa quidem odit facilis. Quos laborum harum sapiente ex saepe enim molestias fugiat amet, modi nesciunt ipsum ad. \n\nOfficia, maiores itaque quas consectetur consequuntur rerum consequatur odit quam est? Dignissimos incidunt, culpa sequi quia qui quaerat voluptas similique a impedit, laboriosam ullam? A omnis qui quidem nisi maxime sunt temporibus animi, ad nesciunt inventore numquam natus molestiae voluptatem nulla, explicabo repellat, optio tempore? Dolorum ullam quasi obcaecati voluptatem nostrum sequi accusantium minima facilis iusto itaque dolores natus ea ex, molestiae laboriosam voluptatum suscipit temporibus perferendis beatae doloremque repudiandae ducimus modi soluta! Cum natus quam necessitatibus sequi aperiam distinctio recusandae, voluptate nam quod error, incidunt nulla beatae. Facilis tempora beatae in sequi veniam, delectus distinctio rerum debitis assumenda deleniti ullam deserunt porro quasi et ut culpa, nisi totam soluta laudantium consequatur magnam! Nemo, corrupti temporibus facilis assumenda quam sint alias eligendi asperiores maxime quo laboriosam libero? Eligendi, neque totam! Optio qui alias et! Numquam deserunt suscipit nostrum quasi, inventore enim quisquam nulla laborum incidunt facilis qui exercitationem consectetur nam velit facere. Quibusdam incidunt assumenda unde, quae praesentium ducimus accusantium aperiam, tenetur quisquam suscipit quasi, ea est iure dignissimos sed facilis eligendi obcaecati aliquid consectetur explicabo a ullam nostrum autem deserunt? \n\nMinus accusamus corrupti veritatis molestiae repudiandae assumenda dolore adipisci obcaecati pariatur perferendis deleniti mollitia numquam eveniet quam officia, impedit quidem, quod magni, repellendus expedita asperiores cum. Officia minima saepe ipsum provident consequatur vitae fugiat totam aut sint dolorem placeat, tempore, obcaecati soluta ullam nesciunt at blanditiis animi deleniti doloribus fuga eaque beatae labore delectus vel. Ullam sunt pariatur id aliquam consequuntur. Explicabo eligendi nesciunt unde nobis dolore et expedita inventore temporibus amet voluptates fuga qui ex beatae iusto nemo necessitatibus nam magni, laborum eum. Harum dignissimos labore delectus praesentium facere suscipit laborum quos repudiandae esse, expedita numquam assumenda consectetur mollitia amet architecto repellendus optio illum possimus officiis ad doloremque eos.',
};
