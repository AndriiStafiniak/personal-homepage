import { IconStyle } from '../Footer/styled';
import { ReactComponent as GithubIcon } from "../images/icons/socialsIcons/gitHub.svg";
import { ReactComponent as FbIcon } from '../images/icons/socialsIcons/fb.svg';
import { ReactComponent as LinkedinIcon } from '../images/icons/socialsIcons/linkd.svg';
import { ReactComponent as InstaIcon } from '../images/icons/socialsIcons/instg.svg';

export const socials = [
   {
      name: 'GitHub',
      url: 'https://github.com/AndriiStafiniak',
      Icon: IconStyle(GithubIcon),
   },
   {
      name: 'Facebook',
      url: 'https://www.facebook.com/andrii.stafiniak',
      Icon: IconStyle(FbIcon),
   },
   {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/andrii-stafiniak/',
      Icon: IconStyle(LinkedinIcon),
   },
   {
      name: 'Instagram',
      url: 'https://www.instagram.com/staff_andre/',
      Icon: IconStyle(InstaIcon),
   },
] as const;