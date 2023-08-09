import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface FooterProps {
  github: string;
  linkedin: string;
}

export default function Footer({ github, linkedin }: FooterProps): JSX.Element {
  return (
    <footer>
      <Box  sx={{ width: '100%', minWidth: 500, position: 'fixed', bottom: '0', textAlign: 'center'}}>
        <Link title='Linkedin' href={linkedin} target="_blank">
          <LinkedInIcon sx={{color:'#6e1567'}}/>
        </Link>
        <Link title='GitHub' href={github} target="_blank">
          <GitHubIcon sx={{color:'#6e1567'}}/>
        </Link>
        <Typography sx={{}}>
            &copy; 2023 Developed by <strong>Monara Calado</strong>
        </Typography>
      </Box>
    </footer>
  );
}