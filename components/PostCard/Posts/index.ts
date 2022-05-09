import Text, { TextTab } from './Text';
import Image, { ImageTab } from './Image';
import Link, { LinkTab } from './Link';

const posts = [
  {
    name: 'text',
    Component: Text,
    TabHead: TextTab,
  },
  {
    name: 'image',
    Component: Image,
    TabHead: ImageTab,
  },
  {
    name: 'link',
    Component: Link,
    TabHead: LinkTab,
  },
];

export default posts;
