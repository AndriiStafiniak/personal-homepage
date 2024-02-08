import { StyledFooter, WrapperDescription, Paragraph, Name, Description, Icons, Link } from "./styled";
import { socials } from "../assests/socials";

export const Footer = () => {
   return (
      <StyledFooter>
         <WrapperDescription>
            <Paragraph>Let’s talk!</Paragraph>
            <Name href="mailto:andrii.stafiniak@gmail.com">andrii.stafiniak@gmail.com</Name>
            <Description>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me.</Description>
            <Icons>
               {socials.map(({ name, url, Icon }) => (
                  <Link href={url} title={name} target="_blank" key={name}>
                     <Icon />
                  </Link>
               ))}
            </Icons>
         </WrapperDescription>
      </StyledFooter>
   )
};
