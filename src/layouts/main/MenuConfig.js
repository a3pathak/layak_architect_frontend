// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Architecture',
    icon: <Iconify icon="mdi:about"  {...ICON_SIZE} />,
    path: '/about-us',
  },
  {
    title: 'Assignment',
    icon: <Iconify icon='ic:round-contact-mail' {...ICON_SIZE} />,
    path: '/contact-us',
  },
  {
    title: 'Blogs',
    icon: <Iconify icon="eos-icons:subscriptions-created" {...ICON_SIZE}/>,
    path: '/pricing',
  },
   
];

export default menuConfig;
